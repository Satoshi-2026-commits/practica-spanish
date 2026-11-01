#!/usr/bin/env python3
"""PWAアイコンを北欧風パステル配色へ再着色するスクリプト。

既存のPNGをピクセル単位で色変換するため、図形・テキスト・アンチエイリアスはそのまま維持される。
- 紫/インディゴ系（背景グラデ・文章の線） → ダスティーブルー
- オレンジ系（稲妻バッジ）               → セージグリーン
- 白・グレー系                           → 変更なし
"""
import colorsys
import sys

from PIL import Image


def transform(r, g, b):
    h, s, v = colorsys.rgb_to_hsv(r / 255.0, g / 255.0, b / 255.0)

    # 彩度のほとんどない白・グレー系はそのまま
    if s < 0.10:
        return None

    # オレンジ系（hue 約 6°〜50°）→ セージグリーン（150°）
    if 0.017 <= h <= 0.14:
        w = min(1.0, (s - 0.10) / 0.20)
        h2 = h + (150.0 / 360.0 - h) * w
        s2 = s * (1.0 - 0.45 * w)
        v2 = v * (1.0 - 0.35 * w)
        return colorsys.hsv_to_rgb(h2, s2, v2)

    # 紫 / インディゴ系（hue 約 210°〜306°）→ ダスティーブルー（208°）
    if 0.58 <= h <= 0.85:
        w = min(1.0, (s - 0.10) / 0.15)
        h2 = h + (208.0 / 360.0 - h) * w
        s2 = s * (1.0 - 0.40 * w)
        v2 = v * (1.0 - 0.22 * w)
        return colorsys.hsv_to_rgb(h2, s2, v2)

    return None


def recolor(path):
    img = Image.open(path).convert("RGBA")
    px = img.load()
    width, height = img.size
    changed = 0
    for y in range(height):
        for x in range(width):
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            new = transform(r, g, b)
            if new is not None:
                nr, ng, nb = (round(c * 255) for c in new)
                px[x, y] = (nr, ng, nb, a)
                changed += 1
    img.save(path)
    print(f"{path}: {changed} px recolored")


if __name__ == "__main__":
    for target in sys.argv[1:]:
        recolor(target)
