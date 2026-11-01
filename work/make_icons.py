#!/usr/bin/env python3
"""Práctica（スペイン語版）のPWAアイコンを生成する。

テラコッタ背景 × クリームの太陽モチーフ ＋ 「PRÁCTICA」の文字。
生成物: icons/icon-192.png / icon-512.png / icon-maskable-512.png
        icons/apple-touch-icon.png / apple-touch-icon-180.png
"""
import math

from PIL import Image, ImageDraw, ImageFont

TERRA_TOP = (216, 142, 96)    # #d88e60
TERRA_BOTTOM = (185, 104, 57)  # #b96839
CREAM = (251, 243, 229)        # #fbf3e5
OLIVE = (150, 166, 108)        # #96a66c

FONT_CANDIDATES = [
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/System/Library/Fonts/Helvetica.ttc",
    "/Library/Fonts/Arial Bold.ttf",
]


def load_font(size):
    for path in FONT_CANDIDATES:
        try:
            return ImageFont.truetype(path, size)
        except Exception:
            continue
    return ImageFont.load_default()


def draw_background(draw, size, radius, y0=0.0, y1=1.0):
    """テラコッタの縦グラデーション背景。"""
    h = size * (y1 - y0)
    for i in range(int(h)):
        t = i / max(h - 1, 1)
        r = round(TERRA_TOP[0] + (TERRA_BOTTOM[0] - TERRA_TOP[0]) * t)
        g = round(TERRA_TOP[1] + (TERRA_BOTTOM[1] - TERRA_TOP[1]) * t)
        b = round(TERRA_TOP[2] + (TERRA_BOTTOM[2] - TERRA_TOP[2]) * t)
        draw.rectangle([0, y0 * size + i, size, y0 * size + i + 1], fill=(r, g, b))


def draw_sun(draw, size, cy, sun_r, color=CREAM):
    """円＋8本の丸みのある太陽光線。"""
    cx = size / 2
    # 光線（内側 radius*1.45 ～ 外側 radius*1.95、太さ radius*0.34）
    r1 = sun_r * 1.42
    r2 = sun_r * 1.88
    w = sun_r * 0.34
    for k in range(8):
        ang = math.pi * 2 * k / 8 + math.pi / 8  # 隙間を下に向けない
        x1 = cx + r1 * math.cos(ang)
        y1 = cy + r1 * math.sin(ang)
        x2 = cx + r2 * math.cos(ang)
        y2 = cy + r2 * math.sin(ang)
        draw.line([x1, y1, x2, y2], fill=color, width=round(w))
        # 線端を丸める
        rr = w / 2
        for (px, py) in ((x1, y1), (x2, y2)):
            draw.ellipse([px - rr, py - rr, px + rr, py + rr], fill=color)
    # 本体の円
    draw.ellipse(
        [cx - sun_r, cy - sun_r, cx + sun_r, cy + sun_r],
        fill=color,
    )


def draw_label(draw, size, text, y_ratio, font_size, fill, spacing_ratio=0.14):
    """字間を空けて中央に文字を描く。"""
    font = load_font(font_size)
    spacing = font_size * spacing_ratio
    widths = [draw.textlength(ch, font=font) for ch in text]
    total = sum(widths) + spacing * (len(text) - 1)
    x = (size - total) / 2
    asc, _ = font.getmetrics()
    y = size * y_ratio - asc / 2
    for ch, w in zip(text, widths):
        draw.text((x, y), ch, font=font, fill=fill)
        x += w + spacing
    return total


def make_icon(size, rounded, maskable=False, label="PRÁCTICA"):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    if maskable:
        # マスカブルは全面・太陽は安全域内に小さめ
        draw_background(draw, size, 0)
        draw_sun(draw, size, size * 0.40, size * 0.108)
        draw_label(draw, size, label, 0.72, size * 0.062, CREAM)
    else:
        radius = round(size * 0.223) if rounded else 0
        mask = Image.new("L", (size, size), 0)
        ImageDraw.Draw(mask).rounded_rectangle([0, 0, size, size], radius, fill=255)
        # 背景をマスク形状に合わせて合成
        bg = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        bg_draw = ImageDraw.Draw(bg)
        draw_background(bg_draw, size, radius)
        img.paste(bg, (0, 0), mask)
        draw = ImageDraw.Draw(img)
        draw_sun(draw, size, size * 0.38, size * 0.115)
        draw_label(draw, size, label, 0.72, size * 0.068, CREAM)
    return img


def main():
    make_icon(512, True).save("icons/icon-512.png")
    make_icon(192, True).save("icons/icon-192.png")
    make_icon(512, False, maskable=True).save("icons/icon-maskable-512.png")
    make_icon(180, False).save("icons/apple-touch-icon.png")
    make_icon(180, False).save("icons/apple-touch-icon-180.png")
    print("icons regenerated")


if __name__ == "__main__":
    main()
