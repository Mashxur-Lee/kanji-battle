"""Cuts the trailer from the filmed frames: one encoded file per scene (1920x1080, 30 fps), every scene a whole
number of bars of the music (75 frames), joined without re-encoding, the music added last.
python3 edit.py FRAMES_DIR OUT_DIR full|short|loop [MUSIC.wav]"""
import os, subprocess, sys
from PIL import Image, ImageDraw, ImageFilter, ImageFont

FRAMES, OUT, KIND = sys.argv[1], sys.argv[2], sys.argv[3]
MUSIC = sys.argv[4] if len(sys.argv) > 4 else None
W, H, FPS, BAR = 1920, 1080, 30, 75
INTER = '/usr/share/fonts/opentype/inter/Inter-%s.otf'
SERIF = '/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc'
GOLD = (255, 205, 96)
font = lambda w, s: ImageFont.truetype(INTER % w, s)
kfont = lambda s: ImageFont.truetype(SERIF, s, index=0)
os.makedirs(f'{OUT}/scenes', exist_ok=True)

CAPS = {
    'duel': ('戦', 'Duel in a living 3D arena', 'Read the kanji, type its reading, and your staff casts it'),
    'boss': ('竜', 'Boss Elimination', 'Up to four wizards against the Black Dragon'),
    'combo': ('炎', 'Combos that burn', 'Chain right answers: at ×5 you are On fire and hit harder'),
    'lobby': ('対', 'Play real people', 'Private rooms with a code, the online queue, and lobby chat'),
    'mobile': ('携', 'On your phone too', 'The same game on Android and in any mobile browser'),
    'rapid': ('速', 'Rapid', 'The same word for both of you: the faster wizard lands the hit'),
    'modes': ('五', 'Five battle modes', 'Reading, handwriting, Rapid, Deck Duel and the Boss'),
    'customize': ('杖', 'Make it yours', 'Characters, staffs, flames and arenas, earned by playing and studying'),
    'study': ('学', 'Study that sticks', 'Spaced-repetition flashcards from N5 to N1, with stroke order'),
    'kana': ('仮', 'Kana trainer', 'Hiragana and katakana from zero'),
    'daily': ('日', 'Daily challenge leagues', 'Ten words a day, the same for your whole league'),
    'progress': ('進', 'See your progress', 'What you know, the reviews ahead, badges, and every word you have mastered'),
    'messages': ('友', 'Play with friends', 'Messages, groups, invites and reactions'),
    'dict': ('辞', 'A full dictionary', 'Japanese, English and Russian, one tap away'),
    'menu': ('門', 'Everything in one place', 'Web, Android and Windows, with an offline mode'),
}

def caption(key, right=False):
    """a lower-left card (RGBA, full frame) that leaves the middle of the picture free"""
    k, title, line = CAPS[key]
    tf, lf = font('ExtraBold', 46), font('Medium', 25)
    d0 = ImageDraw.Draw(Image.new('RGB', (8, 8)))
    tw = max(d0.textlength(title, font=tf), d0.textlength(line, font=lf))
    pw, ph = int(tw) + 158, 122
    x, y = (W - 56 - pw if right else 56), H - 56 - ph - 34   # (right: where the left of the screen is the subject)
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    sh = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(sh).rounded_rectangle((x, y + 10, x + pw, y + ph + 10), 24, fill=(0, 0, 0, 160))
    im.alpha_composite(sh.filter(ImageFilter.GaussianBlur(18)))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((x, y, x + pw, y + ph), 24, fill=(18, 14, 46, 232), outline=(168, 140, 255, 190), width=2)
    d.rounded_rectangle((x + 17, y + 17, x + 105, y + 105), 18, fill=GOLD + (255,))
    d.text((x + 61, y + 59), k, font=kfont(60), fill=(30, 20, 60), anchor='mm')
    d.text((x + 126, y + 16), title, font=tf, fill=(255, 255, 255))
    d.text((x + 128, y + 76), line, font=lf, fill=(212, 204, 246))
    return im

def frame_of(clip, i):
    n = int(open(f'{FRAMES}/{clip}/count.txt').read() or 0) or len([f for f in os.listdir(f'{FRAMES}/{clip}') if f.endswith('.jpg')])
    return Image.open(f'{FRAMES}/{clip}/{max(1, min(n, i)):05d}.jpg').convert('RGB')

ART = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../../../public/bg/%s.webp')
_art = {}
def backdrop(art, i, n, dark=0.3):
    """the game's own painted arena as a card's backdrop, with a very slow push-in"""
    if art not in _art:
        im = Image.open(ART % art).convert('RGB')
        k = max(W / im.width, H / im.height) * 1.08
        im = im.resize((round(im.width * k), round(im.height * k)), Image.LANCZOS)
        _art[art] = Image.blend(im, Image.new('RGB', im.size, (10, 6, 30)), dark)
    im = _art[art]
    z = 1.08 / (1.0 + 0.05 * i / max(1, n - 1))            # the part of the (8% larger) picture that is shown
    w, h = W * z, H * z
    x0, y0 = (im.width - w) / 2, (im.height - h) / 2
    return im.transform((W, H), Image.AFFINE, (z, 0, x0, 0, z, y0), resample=Image.BICUBIC)

def card_text(kind):
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    wm = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ImageDraw.Draw(wm).text((W // 2, H // 2 - 30), '漢字' if kind == 'title' else '魔法', font=kfont(600), fill=(255, 255, 255, 16), anchor='mm')
    im.alpha_composite(wm)
    d = ImageDraw.Draw(im)
    def glow(xy, text, f, fill):
        g = Image.new('RGBA', (W, H), (0, 0, 0, 0)); ImageDraw.Draw(g).text(xy, text, font=f, fill=(0, 0, 0, 200), anchor='mm')
        im.alpha_composite(g.filter(ImageFilter.GaussianBlur(14)))
        ImageDraw.Draw(im).text(xy, text, font=f, fill=fill, anchor='mm')
    if kind == 'title':
        glow((W // 2, H // 2 - 70), 'Kanji Wizards', font('Black', 160), (255, 255, 255))
        glow((W // 2, H // 2 + 62), 'Learn Japanese by casting it', font('SemiBold', 54), GOLD)
        glow((W // 2, H // 2 + 146), 'A real-time multiplayer kanji game', font('SemiBold', 34), (236, 230, 255))
    else:
        glow((W // 2, H // 2 - 110), 'Kanji Wizards', font('Black', 140), (255, 255, 255))
        glow((W // 2, H // 2 + 14), 'Free to play', font('SemiBold', 58), GOLD)
        glow((W // 2, H // 2 + 104), 'In the browser  ·  Android  ·  Windows', font('Medium', 40), (224, 216, 250))
        glow((W // 2, H // 2 + 172), 'English and Russian', font('Medium', 30), (190, 182, 226))
    return im

def encode(name, frames):
    """frames: an iterator of RGB images -> scenes/<name>.mp4 (written under a temporary name first)"""
    out, tmp = f'{OUT}/scenes/{name}.mp4', f'{OUT}/scenes/{name}.tmp.mp4'
    if os.environ.get('REUSE') and os.path.exists(out) and name not in os.environ.get('REDO', '').split(','): return out   # a scene already cut
    p = subprocess.Popen(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-',
                          '-c:v', 'libx264', '-crf', '19', '-preset', 'veryfast', '-pix_fmt', 'yuv420p', '-r', str(FPS), '-video_track_timescale', '15360', tmp], stdin=subprocess.PIPE)
    n = 0
    for im in frames:
        p.stdin.write(im.tobytes()); n += 1
    p.stdin.close()
    if p.wait() != 0: sys.exit(f'ffmpeg failed on {name}')
    os.replace(tmp, out)
    print(name, n, 'frames')
    return out

def scene(name, clip, start, n, cap=None, cap_len=118, fade_in=0, fade_out=0, cap_right=False):
    c = caption(cap, cap_right) if cap else None
    def gen():
        for i in range(n):
            im = frame_of(clip, start + i)
            if im.size != (W, H): im = im.resize((W, H), Image.LANCZOS)
            if c is not None:
                a = min(1, max(0, (i - 8) / 10), max(0, (min(cap_len, n - 6) - i) / 12))
                if a > 0:
                    ea = a * a * (3 - 2 * a)
                    layer = c if ea >= 1 else Image.composite(c, Image.new('RGBA', c.size, (0, 0, 0, 0)), c.getchannel('A').point(lambda v: int(v * ea)))
                    im = im.convert('RGBA'); im.alpha_composite(layer, (0, int((1 - ea) * 18))); im = im.convert('RGB')
            if fade_in and i < fade_in: im = Image.blend(Image.new('RGB', (W, H)), im, i / fade_in)
            if fade_out and i >= n - fade_out: im = Image.blend(Image.new('RGB', (W, H)), im, max(0, (n - 1 - i) / fade_out))
            yield im
    return encode(name, gen())

def montage(name, clip, parts, cap=None, cap_len=118):
    """stills cut on the beat: parts = [(still, beats), ...], a beat = 18.75 frames"""
    c = caption(cap) if cap else None
    ims, ends, t = [], [], 0
    for still, beats in parts:
        t += beats; ims.append(Image.open(f'{FRAMES}/{clip}/{still}.jpg').convert('RGB').resize((W, H), Image.LANCZOS)); ends.append(round(t * BAR / 4))
    n = ends[-1]
    def gen():
        k = 0
        for i in range(n):
            while i >= ends[k]: k += 1
            im = ims[k]
            if c is not None:
                a = min(1, max(0, (i - 8) / 10), max(0, (min(cap_len, n - 6) - i) / 12))
                if a > 0:
                    ea = a * a * (3 - 2 * a)
                    layer = c if ea >= 1 else Image.composite(c, Image.new('RGBA', c.size, (0, 0, 0, 0)), c.getchannel('A').point(lambda v: int(v * ea)))
                    im = im.convert('RGBA'); im.alpha_composite(layer, (0, int((1 - ea) * 18))); im = im.convert('RGB')
            yield im
    return encode(name, gen())

def phones(name, clips, n, cap=None, cap_len=118, art='plains-sunset'):
    """three phone windows side by side over a painted arena: clips = [(clip, first frame), ...]"""
    c = caption(cap) if cap else None
    ph, pw, bez, rad = 786, round(786 * 585 / 1266), 12, 44
    xs = [W // 2 - pw // 2 + d for d in (-470, 0, 470)]
    top = 40
    frame = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    sh = Image.new('RGBA', (W, H), (0, 0, 0, 0)); ds = ImageDraw.Draw(sh)
    for x in xs: ds.rounded_rectangle((x - bez, top - bez + 16, x + pw + bez, top + ph + bez + 16), rad + bez, fill=(0, 0, 0, 190))
    frame.alpha_composite(sh.filter(ImageFilter.GaussianBlur(22)))
    df = ImageDraw.Draw(frame)
    for x in xs: df.rounded_rectangle((x - bez, top - bez, x + pw + bez, top + ph + bez), rad + bez, fill=(14, 11, 30, 255), outline=(150, 132, 220, 255), width=2)
    mask = Image.new('L', (pw, ph), 0); ImageDraw.Draw(mask).rounded_rectangle((0, 0, pw - 1, ph - 1), rad, fill=255)
    def gen():
        for i in range(n):
            im = backdrop(art, i, n, dark=0.5).convert('RGBA')
            im.alpha_composite(frame)
            for x, (clip, start) in zip(xs, clips):
                im.paste(frame_of(clip, start + i).resize((pw, ph), Image.LANCZOS), (x, top), mask)
            if c is not None:
                a = min(1, max(0, (i - 8) / 10), max(0, (min(cap_len, n - 6) - i) / 12))
                if a > 0:
                    ea = a * a * (3 - 2 * a)
                    layer = c if ea >= 1 else Image.composite(c, Image.new('RGBA', c.size, (0, 0, 0, 0)), c.getchannel('A').point(lambda v: int(v * ea)))
                    im.alpha_composite(layer, (0, int((1 - ea) * 18)))
            yield im.convert('RGB')
    return encode(name, gen())

def card(name, kind, clip, start, n, fade_in=0, fade_out=0, step=1):
    text = card_text(kind)
    def gen():
        for i in range(n):
            im = backdrop(clip, i, n).convert('RGBA')
            a = min(1, max(0, (i - 6) / 16)); ea = a * a * (3 - 2 * a)
            layer = text if ea >= 1 else Image.composite(text, Image.new('RGBA', text.size, (0, 0, 0, 0)), text.getchannel('A').point(lambda v: int(v * ea)))
            im.alpha_composite(layer); im = im.convert('RGB')
            if fade_in and i < fade_in: im = Image.blend(Image.new('RGB', (W, H)), im, i / fade_in)
            if fade_out and i >= n - fade_out: im = Image.blend(Image.new('RGB', (W, H)), im, max(0, (n - 1 - i) / fade_out))
            yield im
    return encode(name, gen())

B = BAR
PHONES = [('ph-menu', 10), ('ph-battle', 30), ('ph-study', 10)]
def full():   # 36 bars = 90 s, and 1.2 s for the last chord to ring out
    return [
        card('g00-title', 'title', 'worldtree-sunset', 1, 2 * B, fade_in=14),
        scene('g01-duel', '3d-duel', 25, 3 * B, 'duel'),
        scene('g02-boss', '3d-boss', 20, 3 * B, 'boss'),
        scene('g03-combo', '3d-combo', 285, 2 * B, 'combo', cap_len=92),
        scene('g04-rapid', '3d-rapid', 30, 2 * B, 'rapid'),
        scene('g05-lobby', '2d-lobby', 5, 3 * B, 'lobby', cap_len=110, cap_right=True),
        scene('g06-modes', '2d-modes', 1, 1 * B, 'modes', cap_len=68),
        scene('g07-customize', 'v-customize', 38, 3 * B, 'customize', cap_len=100),
        scene('g08-study', '2d-study', 60, 2 * B, 'study'),
        scene('g09-kana', '2d-kana', 30, 1 * B, 'kana', cap_len=66),
        scene('g10-daily', '2d-daily', 1, 1 * B, 'daily', cap_len=68),
        scene('g11-progress', '2d-progress', 30, 4 * B, 'progress', cap_len=96),
        scene('g12-messages', '2d-messages', 30, 2 * B, 'messages'),
        scene('g13-dict', '2d-dict', 20, 2 * B, 'dict'),
        phones('g14-mobile', PHONES, 2 * B, 'mobile'),
        scene('g15-menu', '2d-menu', 35, 1 * B, 'menu', cap_len=66),
        card('g16-end', 'end', 'forest-night', 1, 2 * B + 36, fade_out=30),
    ]
def short():  # 16 bars = 40 s
    return [
        card('h00-title', 'title', 'worldtree-sunset', 1, 1 * B, fade_in=10),
        scene('h01-duel', '3d-duel', 60, 2 * B, 'duel'),
        scene('h02-boss', '3d-boss', 60, 2 * B, 'boss'),
        scene('h03-combo', '3d-combo', 360, 1 * B, 'combo', cap_len=60),
        scene('h04-lobby', '2d-lobby', 130, 1 * B, 'lobby', cap_len=66, cap_right=True),
        scene('h05-customize', 'v-customize', 120, 1 * B, 'customize', cap_len=66),
        scene('h06-study', '2d-study', 120, 1 * B, 'study', cap_len=66),
        scene('h07-progress', '2d-progress', 60, 2 * B, 'progress', cap_len=96),
        scene('h08-daily', '2d-daily', 1, 1 * B, 'daily', cap_len=66),
        scene('h09-messages', '2d-messages', 120, 1 * B, 'messages', cap_len=66),
        phones('h10-mobile', PHONES, 1 * B, 'mobile', cap_len=66),
        card('h11-end', 'end', 'forest-night', 1, 2 * B + 36, fade_out=30),
    ]
def loop():
    # the README loop: gameplay only, no captions (the page has the words)
    return [scene('m0-duel', '3d-duel', 60, 120), scene('m1-combo', '3d-combo', 345, 90), scene('m2-boss', '3d-boss', 60, 150),
            scene('m3-customize', 'v-customize', 60, 150), scene('m4-progress', '2d-progress', 40, 150)]

if __name__ == '__main__':
    only = os.environ.get('ONLY')
    files = {'full': full, 'short': short, 'loop': loop}[KIND]()
    name = {'full': 'trailer', 'short': 'trailer-short', 'loop': 'loop'}[KIND]
    lst = f'{OUT}/{name}.txt'
    open(lst, 'w').write(''.join(f"file '{os.path.abspath(f)}'\n" for f in files))
    silent = f'{OUT}/{name}-silent.mp4'
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', lst, '-c', 'copy', silent], check=True)
    if MUSIC:
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', silent, '-i', MUSIC, '-map', '0:v', '-map', '1:a', '-c:v', 'copy',
                        '-af', 'loudnorm=I=-16:TP=-1.5:LRA=11', '-c:a', 'aac', '-b:a', '192k', '-ar', '48000', '-shortest', '-movflags', '+faststart', f'{OUT}/{name}.mp4'], check=True)
    print('done', name)
