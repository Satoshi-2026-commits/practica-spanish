#!/bin/zsh
# ============================================================
# 問題データ反映.command  — スプレッドシート → アプリ反映ボタン
#
# 使い方:
#   1. スプレッドシートで反映したい範囲（見出し行を含む）を ⌘C でコピー
#   2. このファイルを Finder でダブルクリック
#   3. ダイアログの結果を確認
#   4.（iPhoneアプリで「初期データに戻す」を実行してデータ反映）
#
# すべて自動で行う処理:
#   セット選択 → クリップボードを work/sets/<セット>.tsv に保存
#   → app.js 同期 → 音声生成 → 構文チェック → git commit & push
# ============================================================

cd "$(dirname "$0")" || exit 1

show_dialog() {
  osascript -e "display dialog \"$1\" with title \"問題データ反映\" buttons {\"OK\"} default button \"OK\"" >/dev/null 2>&1
}

# --- 1. クリップボードの確認 ---
CLIP=$(pbpaste 2>/dev/null)
if [ -z "$CLIP" ]; then
  show_dialog "クリップボードが空です。\n\nスプレッドシートの範囲（見出し行を含む）を選んで\n⌘C でコピーしてから、再度実行してください。"
  exit 1
fi

# --- 2. 反映先セットの選択 ---
echo "▶ (1/5) 反映先セットの選択..."
NAME_FILE="$(mktemp)"
node -e "
const j = JSON.parse(require('fs').readFileSync('work/sets/sets.json', 'utf8'));
console.log(j.sets.map((s) => s.name).join('\n'));
" > "$NAME_FILE"
if [ ! -s "$NAME_FILE" ]; then
  show_dialog "work/sets/sets.json を読めませんでした。\\n\\nこの画面のログを確認してください。"
  rm -f "$NAME_FILE"
  exit 1
fi

OSA_ARGS=""
while IFS= read -r LINE; do
  OSA_ARGS="$OSA_ARGS,\"$LINE\""
done < "$NAME_FILE"
rm -f "$NAME_FILE"

SELECTED=$(osascript -e "choose from list {${OSA_ARGS#,}} with title \"問題データ反映\" with prompt \"どの学習セットに反映しますか？\" default items {1}" 2>/dev/null)
if [ -z "$SELECTED" ]; then
  echo "（キャンセルされました）"
  exit 0
fi

SELECTED_TSV=$(SELECTED="$SELECTED" node -e "
const j = JSON.parse(require('fs').readFileSync('work/sets/sets.json', 'utf8'));
const s = j.sets.find((x) => x.name === process.env.SELECTED);
if (s) console.log(s.tsv);
")
if [ -z "$SELECTED_TSV" ]; then
  show_dialog "セットのTSVを特定できませんでした。\\n\\nこの画面のログを確認してください。"
  exit 1
fi

# --- 3. TSVに保存 ---
echo "▶ (2/5) 「${SELECTED}」にクリップボードを保存..."
printf '%s\n' "$CLIP" > "work/sets/${SELECTED_TSV}"

# --- 4. app.js同期 + 音声生成 ---
echo "▶ (3/5) データ同期と音声生成...（下の行の数値が進みます）"
# ※ 出力を変数に溜めず、ターミナルへ直接ストリーム表示する。
#   （まとめて表示すると進捗が最後まで見えないため）
#   記録もファイルに保存し、後の集計（問題数の抽出と失敗判定）に使う。
LOG_FILE="$(mktemp)"
node work/generate_audio.mjs 2>&1 | tee "$LOG_FILE"
RESULT=${pipestatus[1]}
LOG=$(cat "$LOG_FILE" 2>/dev/null)
rm -f "$LOG_FILE"

if [ $RESULT -ne 0 ]; then
  show_dialog "音声生成で失敗しました。\n\nスプレッドシートの内容を修正してコピーし、\nもう一度実行してください。\n\n（このターミナル画面のログに問題番号が出ます）"
  exit 1
fi

# --- 5. 構文チェック ---
echo "▶ (4/5) 構文チェック..."
if ! node --check app.js; then
  show_dialog "app.js の構文チェックで失敗しました。\n\n反映は中止されました。この画面のログを確認してください。"
  exit 1
fi

# --- 6. リモートの最新状態を取り込み（可能なら） ---
git pull --ff-only -q >/dev/null 2>&1

# --- 7. コミット対象がない場合はそこで終了 ---
echo "▶ (5/5) 変更をコミット & 公開..."
git add app.js audio/ sw.js work/sets/
if git diff --cached --quiet; then
  show_dialog "新しい変更はありませんでした。\n\n（コピーした内容が現在のデータと同じです）"
  exit 0
fi

COUNT=$(echo "$LOG" | sed -n 's/.*合計 \([0-9]*\) 問.*/\1/p' | tail -1)
echo "▶ 公開中（push）..."

git commit -q -m "update: 「${SELECTED}」の学習データを更新（データ反映.command）"
if [ $? -ne 0 ]; then
  show_dialog "コミットに失敗しました。\n\nこの画面のログを確認してください。"
  exit 1
fi

if ! git push -q; then
  show_dialog "インターネットへの公開（push）に失敗しました。\n\nネットワーク接続を確認して、ターミナルで\n\"git push\" をもう一度実行してください。"
  exit 1
fi

# --- 8. 完了ダイアログ ---
show_dialog "✅ 「${SELECTED}」（${COUNT:-?}問）のデータを反映しました！\n\n【iPhone側での確認】\n1. アプリを開いて再読み込み\n2. 瞬間英作文で数問再生して、ロック中も鳴るか確認"
