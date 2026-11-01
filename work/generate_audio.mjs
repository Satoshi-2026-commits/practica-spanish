#!/usr/bin/env node
/**
 * 学習セットの一括生成スクリプト（複数セット対応・増分生成）。
 *
 *   1. work/sets/sets.json（マニフェスト）を読み込む
 *   2. 各セットの TSV を解析（アプリと同じ列ルール）
 *   3. セット内容のハッシュが変わったセットだけ audio/<setId>/ を再生成
 *   4. app.js の SETS 配列（id / name / audioVersion / chunks）を書き換え
 *   5. マニフェストに無い旧音声フォルダ・ファイルを掃除
 *
 * 使い方（スプレッドシートをコピーした後、反映先を問題データ反映.commandで選ぶ）:
 *   「問題データ反映.command」をダブルクリック
 *   （または手動で pbpaste > work/sets/<セット名>.tsv して node work/generate_audio.mjs）
 *
 * 音声はmacOS内蔵ボイス Paulina (es_MX) / Samantha (en_US) を使用します。
 *   ※ Enhanced版ボイス（システム設定 → アクセシビリティ → 読み上げコンテンツ → システムボイス）
 *     をインストールして再実行すると、より高品質な音声になります。
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";

const SETS_DIR = "work/sets";
const MANIFEST_FILE = path.join(SETS_DIR, "sets.json");
const HASH_FILE = path.join(SETS_DIR, "audio-hashes.json");
const APP_FILE = "app.js";
const OUT_DIR = "audio";

// 速度設定（アプリのspeechSynthesisの速度設定に合わせる）
// スペイン語は Paulina（es_MX・メキシコ）を標準速度、英語は Samantha を使用
// ※ データ構造は日本語版と共通のため、スペイン語テキストは japanese スロットに入る
const ES_VOICE = "Paulina";
const EN_VOICE = "Samantha";

/* ------------------------------------------------------------------
 * アプリと同じTSV/CSVパーサ（parseCSVの移植版）
 * ------------------------------------------------------------------ */

function detectHeaderField(headerText) {
  const text = (headerText || "").toLowerCase();
  const rules = [
    ["explanation", ["解説", "ニュアンス", "説明", "explanation"]],
    ["blankWord", ["穴埋め", "blank"]],
    ["fullQuote", ["セリフ", "例文", "使用例", "フル", "quote"]],
    ["situation", ["作品", "キャラ", "状況", "場面", "situation"]],
    ["keyPhrase", ["英文", "英語", "english", "phrase", "キーフレーズ"]],
    // ※ スペイン語は japanese スロット（=出題源）に入れる
    ["japanese", ["日本語", "訳", "japanese", "意味", "spanish", "español", "espanol", "スペイン語", "西語"]],
  ];
  for (const [field, keywords] of rules) {
    if (keywords.some((k) => text.includes(k.toLowerCase()))) return field;
  }
  return null;
}

function parseCSV(csvText) {
  if (!csvText || !csvText.trim()) return [];

  const firstLine = csvText.split(/\r?\n/)[0] || "";
  const delimiter = firstLine.includes("\t") ? "\t" : ",";

  const rows = [];
  let row = [];
  let current = "";
  let insideQuote = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"') {
      if (insideQuote && nextChar === '"') {
        current += '"';
        i++;
      } else {
        insideQuote = !insideQuote;
      }
    } else if (char === delimiter && !insideQuote) {
      row.push(current.trim());
      current = "";
    } else if (char === "\r" || char === "\n") {
      if (char === "\r" && nextChar === "\n") i++;
      row.push(current.trim());
      if (row.some((cell) => cell !== "")) rows.push(row);
      row = [];
      current = "";
    } else {
      current += char;
    }
  }
  if (current || row.length > 0) {
    row.push(current.trim());
    if (row.some((cell) => cell !== "")) rows.push(row);
  }

  if (rows.length === 0) return [];

  const results = [];
  let headerFieldMap = null;

  for (let i = 0; i < rows.length; i++) {
    const cols = rows[i];
    if (!cols || cols.length === 0) continue;

    if (i === 0) {
      const headerText = cols.join(" ").toLowerCase();
      const headerKeywords = [
        "英文", "日本語訳", "実際のセリフ", "使用例", "作品", "キャラクター", "状況",
        "ニュアンス", "解説", "穴埋め", "単語", "phrase", "english", "japanese",
        "spanish", "español", "espanol", "quote", "situation", "explanation",
        "blank", "問題", "答え", "意味", "訳"
      ];
      if (headerKeywords.some((k) => headerText.includes(k.toLowerCase()))) {
        headerFieldMap = cols.map(detectHeaderField);
        continue;
      }
    }

    if (headerFieldMap && headerFieldMap.some((f) => f)) {
      const chunk = {
        keyPhrase: "", japanese: "", fullQuote: "",
        situation: "", explanation: "", blankWord: ""
      };
      headerFieldMap.forEach((field, idx) => {
        if (field && cols[idx]) chunk[field] = cols[idx];
      });
      if (Object.values(chunk).some((v) => v)) {
        results.push(chunk);
        continue;
      }
    }

    if (cols.length >= 3) {
      results.push({
        keyPhrase: cols[0] || "", japanese: cols[1] || "", fullQuote: cols[2] || "",
        situation: cols[3] || "", explanation: cols[4] || "", blankWord: cols[5] || ""
      });
    } else if (cols.length >= 2 && (cols[0] || cols[1])) {
      results.push({ english: cols[0] || "", japanese: cols[1] || "" });
    }
  }

  return results;
}

/* ------------------------------------------------------------------
 * app.js の更新（SETS 配列の書き換え）
 * ------------------------------------------------------------------ */

// 音声に使う英文テキスト（アプリのgetEnglishAnswer/getChunkQuoteTextと同じ優先順位）
function getEnglishText(chunk) {
  return chunk.fullQuote || chunk.keyPhrase || chunk.english || "";
}

// セット計算のハッシュ（音声設定込み）→ 音声URLの ?v= に使う
function computeSetHash(chunks) {
  const canonical = [
    ES_VOICE, EN_VOICE,
    ...chunks.map((c) => `${c.japanese}\n${getEnglishText(c)}`),
  ].join("\u0000");
  return crypto.createHash("sha256").update(canonical).digest("hex").slice(0, 8);
}

// SETS 配列部分を新しいデータで書き換える
function syncSets(appSets) {
  let src = fs.readFileSync(APP_FILE, "utf8");
  const start = src.indexOf("const SETS = ");
  const arrStart = src.indexOf("[", start);
  const arrEnd = src.indexOf("];", arrStart);
  if (start === -1 || arrStart === -1 || arrEnd === -1) {
    throw new Error("app.js から SETS 配列が見つかりません");
  }

  const KEYS = ["keyPhrase", "japanese", "fullQuote", "situation", "explanation", "blankWord"];

  const chunksBody = (chunks) => chunks
    .map((chunk) => {
      // 2列形式は従来どおり english フィールドとして保持する
      const lines = [];
      for (const key of [...KEYS, "english"]) {
        if (!chunk[key]) continue;
        const value = String(chunk[key]).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, " ");
        lines.push(`      "${key}": "${value}"\n`);
      }
      return `      {\n${lines.join(",\n")}      }`;
    })
    .join(",\n");

  const body = appSets
    .map((set) =>
      `    {\n` +
      `      "id": "${set.id}",\n` +
      `      "name": "${String(set.name).replace(/"/g, '\\"')}",\n` +
      `      "audioVersion": "${set.audioVersion}",\n` +
      `      "chunks": [\n${chunksBody(set.chunks)}\n      ]\n` +
      `    }`)
    .join(",\n");

  const newArr = `const SETS = [\n${body}\n];`;
  src = src.slice(0, arrStart) + newArr.slice("const SETS = ".length) + src.slice(arrEnd + "];".length);
  fs.writeFileSync(APP_FILE, src);
}

/* ------------------------------------------------------------------
 * 音声ファイルの生成
 * ------------------------------------------------------------------ */

function removeGeneratedAudio(setOutDir) {
  if (!fs.existsSync(setOutDir)) return;
  for (const file of fs.readdirSync(setOutDir)) {
    if (/^(es|en)-\d+\.m4a$/.test(file)) {
      fs.unlinkSync(path.join(setOutDir, file));
    }
  }
}

function generateAudioFile(text, voice, rate, outFile) {
  const aiffPath = path.join(os.tmpdir(), "instant-audio-tmp.aiff");
  const args = ["-v", voice];
  if (rate) args.push("-r", rate);
  args.push("-o", aiffPath, text);
  execFileSync("say", args);

  // AAC 64kbps モノラルの m4a に変換（1文あたり20〜40KB程度）
  execFileSync("afconvert", ["-f", "m4af", "-d", "aac", "-b", "64000", "-c", "1", aiffPath, outFile]);
  fs.unlinkSync(aiffPath);
}

// マニフェスト周辺の掃除: 旧ルート音声・無関係フォルダ・無名ファイルを削除
// ※ audio/silence.m4a（バックグラウンド再生維持用の無音ループ）は必ず保持する
function cleanupAudioDir(manifestIds) {
  if (!fs.existsSync(OUT_DIR)) return;
  for (const entry of fs.readdirSync(OUT_DIR, { withFileTypes: true })) {
    const full = path.join(OUT_DIR, entry.name);
    if (entry.isDirectory()) {
      if (!manifestIds.includes(entry.name)) {
        fs.rmSync(full, { recursive: true, force: true });
        console.log(`  掃除: 旧フォルダ audio/${entry.name}/ を削除`);
      }
    } else if (entry.name !== "silence.m4a" && /\.m4a$/i.test(entry.name)) {
      fs.unlinkSync(full);
      console.log(`  掃除: 旧ファイル audio/${entry.name} を削除`);
    }
  }
}

/* ------------------------------------------------------------------
 * メイン
 * ------------------------------------------------------------------ */

const manifest = JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf8"));
if (!Array.isArray(manifest.sets) || manifest.sets.length === 0) {
  console.error("sets.json に sets 配列がありません");
  process.exit(1);
}

const storedHashes = fs.existsSync(HASH_FILE)
  ? JSON.parse(fs.readFileSync(HASH_FILE, "utf8"))
  : {};

const appSets = [];
let generated = 0;
let failed = 0;

for (const entry of manifest.sets) {
  const tsvPath = path.join(SETS_DIR, entry.tsv);
  const chunkList = parseCSV(fs.existsSync(tsvPath) ? fs.readFileSync(tsvPath, "utf8") : "");

  if (chunkList.length === 0) {
    console.log(`[${entry.name}] TSVが空または未準備です（スキップ）`);
    continue;
  }

  // 日本語も英文も無い行は音声生成できないのでエラーにする
  let badRow = 0;
  for (let i = 0; i < chunkList.length; i++) {
    if (!chunkList[i].japanese || !getEnglishText(chunkList[i])) {
      badRow = i + 1;
      break;
    }
  }
  if (badRow > 0) {
    console.error(`[${entry.name}] 問題 ${badRow}: 日本語または英文が空です`);
    process.exit(1);
  }

  const hash = computeSetHash(chunkList);
  const setOutDir = path.join(OUT_DIR, entry.id);
  const unchanged = storedHashes[entry.id] === hash && fs.existsSync(setOutDir);

  if (unchanged) {
    fs.mkdirSync(setOutDir, { recursive: true });
    console.log(`[${entry.name}] 変更なし（${chunkList.length} 問）— 再生成をスキップ`);
  } else {
    console.log(`[${entry.name}] ${chunkList.length} 問の音声を生成...`);
    fs.mkdirSync(setOutDir, { recursive: true });
    removeGeneratedAudio(setOutDir);
    for (let i = 0; i < chunkList.length; i++) {
      const num = String(i + 1).padStart(2, "0");
      const chunk = chunkList[i];
      try {
        generateAudioFile(chunk.japanese, ES_VOICE, null, path.join(setOutDir, `es-${num}.m4a`));
        generateAudioFile(getEnglishText(chunk), EN_VOICE, null, path.join(setOutDir, `en-${num}.m4a`));
        generated += 2;
      } catch (error) {
        failed += 1;
        console.error(`  問題 ${num} でエラー:`, error.message);
      }
      // ターミナルに1行プログレスを表示（上書き更新）
      process.stdout.write(`\r  音声生成中: ${i + 1}/${chunkList.length} 問目`);
    }
    process.stdout.write("\n");
    console.log(`[${entry.name}] ハッシュ: ${hash}`);
  }

  appSets.push({
    id: entry.id,
    name: entry.name,
    audioVersion: hash,
    chunks: chunkList,
  });
  storedHashes[entry.id] = hash;
}

if (appSets.length === 0) {
  console.error("有効なセットが1つもありません（TSVを確認してください）");
  process.exit(1);
}

// 1. app.js 同期
syncSets(appSets);
console.log(`app.js の SETS 配列を ${appSets.length} セット分に更新しました`);

// 2. 無関係な音声フォルダ・旧ルート音声を掃除
cleanupAudioDir(appSets.map((s) => s.id));

// 3. ハッシュを記録（次回の増分生成用）
fs.writeFileSync(HASH_FILE, JSON.stringify(storedHashes, null, 2) + "\n");

console.log(`音声生成: ${generated} ファイル（失敗 ${failed} 問）、合計 ${appSets.reduce((n, s) => n + s.chunks.length, 0)} 問`);

if (failed > 0) {
  console.warn("⚠ 失敗した問題があります。TSVの内容を確認して再実行してください");
  process.exit(2);
}

console.log("\n次のステップ:");
console.log("  1) node --check app.js で構文確認");
console.log("  2) git commit 必要なファイルをコミット & push");
console.log("  3) iPhone側でアプリを再読み込みして確認");
