"""README feature cards: a dark violet stage, a big kanji watermark, headline + line, the screenshot framed with a glow.
usage: python3 card.py out.webp shot.png "KANJI" "Headline" "One line under it" [phone.png]
"""
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

BLACK = '/usr/share/fonts/opentype/noto/NotoSansCJK-Black.ttc'
BOLD = '/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc'
SERIF = '/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc'
W, H = 1600, 1000
GOLD = (255, 205, 96)


def font(p, s, idx=0):
    return ImageFont.truetype(p, s, index=idx)


def stage():
    # vertical violet gradient + two soft colour blooms
    im = Image.new('RGB', (W, H))
    top, bot = (40, 28, 96), (12, 10, 34)
    d0 = ImageDraw.Draw(im)
    for y in range(H):
        t = y / (H - 1)
        d0.line((0, y, W, y), fill=tuple(round(top[i] * (1 - t) + bot[i] * t) for i in range(3)))
    bloom = Image.new('RGB', (W, H), (0, 0, 0))
    d = ImageDraw.Draw(bloom)
    d.ellipse((-300, -350, 700, 450), fill=(120, 70, 230))
    d.ellipse((1100, 600, 1900, 1300), fill=(20, 140, 190))
    bloom = bloom.filter(ImageFilter.GaussianBlur(160))
    return Image.blend(im, bloom, 0.35)


def rounded(img, r):
    m = Image.new('L', img.size, 0)
    ImageDraw.Draw(m).rounded_rectangle((0, 0, img.size[0] - 1, img.size[1] - 1), r, fill=255)
    out = img.convert('RGBA')
    out.putalpha(m)
    return out


def place(base, shot, box, r=22, glow=(150, 110, 255)):
    x, y, w, h = box
    s = shot.convert('RGB')
    s = s.resize((w, round(s.height * w / s.width)), Image.LANCZOS)
    if s.height > h:
        s = s.crop((0, 0, w, h))
    h = s.height
    # glow + shadow
    sh = Image.new('RGBA', base.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(sh)
    d.rounded_rectangle((x - 6, y + 14, x + w + 6, y + h + 26), r + 6, fill=(0, 0, 0, 200))
    sh = sh.filter(ImageFilter.GaussianBlur(26))
    base.alpha_composite(sh)
    gl = Image.new('RGBA', base.size, (0, 0, 0, 0))
    ImageDraw.Draw(gl).rounded_rectangle((x - 3, y - 3, x + w + 3, y + h + 3), r + 3, outline=glow + (230,), width=3)
    base.alpha_composite(gl.filter(ImageFilter.GaussianBlur(6)))
    base.alpha_composite(gl)
    base.alpha_composite(rounded(s, r), (x, y))
    return h


def card(out, shot, kanji, title, line, phone=None):
    base = stage().convert('RGBA')
    d = ImageDraw.Draw(base)
    # the watermark kanji
    wm = Image.new('RGBA', base.size, (0, 0, 0, 0))
    ImageDraw.Draw(wm).text((W - 70, 18), kanji, font=font(SERIF, 230, 2), fill=(255, 255, 255, 30), anchor='ra')
    base.alpha_composite(wm)
    d.text((80, 64), title, font=font(BLACK, 66), fill=(255, 255, 255))
    d.text((84, 152), line, font=font(BOLD, 30), fill=(205, 198, 240))
    d.rectangle((84, 208, 164, 213), fill=GOLD)
    img = Image.open(shot)
    if phone:
        place(base, img, (80, 262, 1130, 680))
        ph = Image.open(phone)
        phh = 700
        pw = round(ph.width * phh / ph.height)
        place(base, ph, (W - 70 - pw, 250, pw, phh), r=34, glow=(255, 205, 96))
    else:
        place(base, img, (130, 262, 1340, 700))
    base.convert('RGB').save(out, 'WEBP', quality=88, method=6)


if __name__ == '__main__':
    a = sys.argv[1:]
    card(a[0], a[1], a[2], a[3], a[4], a[5] if len(a) > 5 else None)
