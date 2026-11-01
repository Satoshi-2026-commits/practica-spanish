#!/usr/bin/env python3
"""style.css を 北欧パステル → 南欧・太陽系（テラコッタ×クリーム）へ一括変換する。

使い方: python3 work/recolor_terracotta.py style.css
"""
import re
import sys

MAP = {
    # --- 青（プライマリ）系 → テラコッタ ---
    "#54708a": "#c97b4a",
    "#4f7ca3": "#b96a3d",
    "#3d586b": "#6b4226",
    "#7fa3bd": "#dfa878",
    "#88abc7": "#e2b28c",
    "#9db8cb": "#e7c4a4",
    "#bccddb": "#eed4ba",
    "#d5e1ea": "#f4e2cf",
    "#e9eff5": "#f9eee1",

    # --- 緑（セージ）系 → オリーブ ---
    "#6f9b85": "#96a66c",
    "#5d8672": "#83955a",
    "#557a63": "#6f8148",
    "#86a892": "#abb784",
    "#b3cfba": "#ccd5a4",
    "#c4dbcb": "#dde3ba",
    "#e2ece4": "#edf0d9",
    "#edf2ed": "#f5f6e7",

    # --- くすんだ赤（危険/エラー）系 → くすんだレッド ---
    "#c98d84": "#cf9184",
    "#b5756b": "#bb6a5b",
    "#9c5f56": "#a1574a",
    "#d8aca4": "#dcaba0",
    "#d0968e": "#d69c92",
    "#efe0dc": "#f6e6e2",
    "#f5ebe8": "#f9ece9",

    # --- 砂色（黄系）はすでに暖色なので維持 ---

    # --- グレー系 → クリームがかったウォームストーン ---
    "#e4e5e2": "#ebe3d5",
    "#f2f1ee": "#f7f1e5",
    "#f8f7f4": "#fbf7ee",
    "#f5f3ee": "#faf4e8",
    "#ced2d2": "#ded2c1",
    "#adb2b4": "#b7ab9e",
    "#8f9598": "#a29386",
    "#767d81": "#86766a",
    "#5e6468": "#6f5f52",
    "#4e5355": "#5c4e42",
    "#3d4245": "#4b3f34",

    # --- rgba(青/緑/グレー) → rgba(テラコッタ/オリーブ/ウォーム) ---
    "rgba(84, 112, 138, 0.10)": "rgba(201, 123, 74, 0.12)",
    "rgba(84, 112, 138, 0.08)": "rgba(201, 123, 74, 0.08)",
    "rgba(84, 112, 138, 0.22)": "rgba(201, 123, 74, 0.22)",
    "rgba(136, 171, 199, 0.92)": "rgba(226, 178, 140, 0.92)",
    "rgba(136, 171, 199, 0.12)": "rgba(226, 178, 140, 0.12)",
    "rgba(134, 168, 146, 0.92)": "rgba(171, 183, 132, 0.92)",
    "rgba(72, 82, 85, 0.85)": "rgba(111, 95, 82, 0.85)",
    "rgba(120, 127, 130, 0.92)": "rgba(162, 147, 134, 0.92)",
    "rgba(228, 229, 227, 0.8)": "rgba(235, 227, 213, 0.8)",
}


def main():
    for path in sys.argv[1:]:
        with open(path, encoding="utf-8") as f:
            content = f.read()
        total = 0
        for old, new in MAP.items():
            # 大文字小文字を無視して置換（#54708A などにも対応）
            pattern = re.compile(re.escape(old), re.IGNORECASE)
            content, n = pattern.subn(new.lower(), content)
            total += n
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"{path}: {total} replacements")


if __name__ == "__main__":
    main()
