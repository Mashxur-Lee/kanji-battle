"""Caption overlays (transparent PNGs, 1600x900) and the title / end cards for the trailer."""
import sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

BLACK = '/usr/share/fonts/opentype/noto/NotoSansCJK-Black.ttc'
BOLD = '/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc'
SERIF = '/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc'
W, H = 1600, 900
GOLD = (255, 205, 96)
f = lambda p, s, i=0: ImageFont.truetype(p, s, index=i)

CAPS = {
    '01-menu': ('門', 'Every mode, one menu', 'Online, private rooms, daily, study, quizzes, kana'),
    '02-battle2d': ('戦', 'Duel in real time', 'Read the kanji, type its reading, and the spell flies'),
    '03-battle3d': ('炎', 'A living 3D arena', 'Four wizards, staffs and flames, earned by playing'),
    '04-writing': ('書', 'Write it by hand', 'Handwriting recognition, stroke by stroke'),
    '05-boss': ('竜', 'Boss Elimination', 'Up to four wizards against the Black Dragon'),
    '06-rapid': ('速', 'Rapid', 'Quick words, quicker combos'),
    '07-deck': ('札', 'Deck Duel', 'A card game built from your own words'),
    '08-study': ('学', 'Study that sticks', 'Spaced-repetition flashcards from N5 to N1, with stroke order'),
    '09-kana': ('仮', 'Kana trainer', 'Hiragana and katakana from zero'),
    '10-daily': ('日', 'Daily challenge leagues', 'Ten words a day, the same for your whole league'),
    '11-progress': ('進', 'See what you know', 'Words per level, the reviews ahead, how well you remember'),
    '12-customize': ('杖', 'Make it yours', 'Characters, staffs, flames, frames and arenas'),
    '13-messages': ('友', 'Play with friends', 'Messages, groups, invites and reactions'),
    '14-dict': ('辞', 'A full dictionary', 'Japanese, English and Russian, one tap away'),
}


TOP = {'02-battle2d', '03-battle3d', '05-boss', '06-rapid'}
TOPLEFT = {'04-writing'}


def caption(key, out):
    k, title, line = CAPS[key]
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    tf, lf = f(BLACK, 46), f(BOLD, 25)
    d0 = ImageDraw.Draw(im)
    tw = max(d0.textlength(title, font=tf), d0.textlength(line, font=lf))
    pw, ph = int(tw) + 150, 124
    x, y = ((W - pw) // 2, 150) if key in TOP else (48, 150) if key in TOPLEFT else (48, H - 168)
    # soft shadow + glass panel
    sh = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle((x, y + 8, x + pw, y + ph + 8), 22, fill=(0, 0, 0, 150))
    im.alpha_composite(sh.filter(ImageFilter.GaussianBlur(16)))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((x, y, x + pw, y + ph), 22, fill=(18, 14, 46, 222), outline=(160, 130, 255, 160), width=2)
    # the kanji badge
    d.rounded_rectangle((x + 18, y + 18, x + 106, y + 106), 18, fill=(255, 205, 96, 255))
    d.text((x + 62, y + 60), k, font=f(SERIF, 62, 2), fill=(30, 20, 60), anchor='mm')
    d.text((x + 126, y + 14), title, font=tf, fill=(255, 255, 255))
    d.text((x + 128, y + 76), line, font=lf, fill=(208, 200, 245))
    im.save(out)


def stage():
    im = Image.new('RGB', (W, H))
    d = ImageDraw.Draw(im)
    for yy in range(H):
        t = yy / (H - 1)
        d.line((0, yy, W, yy), fill=(round(40 * (1 - t) + 10 * t), round(28 * (1 - t) + 8 * t), round(96 * (1 - t) + 30 * t)))
    bloom = Image.new('RGB', (W, H))
    b = ImageDraw.Draw(bloom)
    b.ellipse((-300, -300, 700, 500), fill=(120, 70, 230))
    b.ellipse((1000, 500, 1900, 1200), fill=(20, 140, 190))
    return Image.blend(im, bloom.filter(ImageFilter.GaussianBlur(170)), 0.38)


def title_card(out, banner=None):
    im = stage().convert('RGBA')
    if banner:
        bn = Image.open(banner).convert('RGB')
        bn = bn.resize((W, round(bn.height * W / bn.width)), Image.LANCZOS)
        im = Image.alpha_composite(im, Image.blend(Image.new('RGB', bn.size), bn, 0.55).convert('RGBA').crop((0, 0, W, H)) if bn.height >= H else im)
    wm = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(wm).text((W // 2, H // 2 - 30), '漢字', font=f(SERIF, 520, 2), fill=(255, 255, 255, 20), anchor='mm')
    im.alpha_composite(wm)
    d = ImageDraw.Draw(im)
    d.text((W // 2, H // 2 - 60), 'Kanji Wizards', font=f(BLACK, 128), fill=(255, 255, 255), anchor='mm')
    d.text((W // 2, H // 2 + 50), 'Learn Japanese by casting it', font=f(BOLD, 44), fill=GOLD, anchor='mm')
    d.text((W // 2, H // 2 + 120), 'A real-time multiplayer kanji game', font=f(BOLD, 28), fill=(208, 200, 245), anchor='mm')
    im.convert('RGB').save(out)


def end_card(out):
    im = stage().convert('RGBA')
    wm = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(wm).text((W // 2, H // 2 - 20), '魔法', font=f(SERIF, 480, 2), fill=(255, 255, 255, 20), anchor='mm')
    im.alpha_composite(wm)
    d = ImageDraw.Draw(im)
    d.text((W // 2, H // 2 - 80), 'Kanji Wizards', font=f(BLACK, 110), fill=(255, 255, 255), anchor='mm')
    d.text((W // 2, H // 2 + 20), 'Free to play', font=f(BOLD, 44), fill=GOLD, anchor='mm')
    d.text((W // 2, H // 2 + 90), 'In the browser  ·  Android  ·  Windows', font=f(BOLD, 32), fill=(208, 200, 245), anchor='mm')
    d.text((W // 2, H // 2 + 140), 'English and Russian', font=f(BOLD, 26), fill=(170, 162, 210), anchor='mm')
    im.convert('RGB').save(out)


if __name__ == '__main__':
    import os
    od = sys.argv[1]
    os.makedirs(od, exist_ok=True)
    for k in CAPS:
        caption(k, f'{od}/cap-{k}.png')
    title_card(f'{od}/title.png')
    end_card(f'{od}/end.png')
