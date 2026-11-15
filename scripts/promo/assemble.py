"""Builds the trailer from the screencast frames.
python3 assemble.py SHOTS_DIR OUT_DIR
  1. each f-<clip>/ (JPEG frames + times.json) -> clips/<clip>.mp4 at a constant 25 fps, timed as captured
  2. title card -> clips with captions -> end card, cross-faded -> trailer.mp4 (1280x720)
  3. a lighter animated WebP for the README
"""
import json, os, subprocess, sys

SHOTS, OUT = sys.argv[1], sys.argv[2]
HERE = os.path.dirname(os.path.abspath(__file__))
CAPS = os.path.join(HERE, 'caps')
os.makedirs(f'{OUT}/clips', exist_ok=True)
FPS, T = 25, 0.6  # frame rate, cross-fade length (0.9.9.9.6.8: slower, calmer)

# (clip, start s, length s) in trailer order; edited after looking at the clips
ORDER = json.load(open(os.path.join(HERE, sys.argv[3] if len(sys.argv) > 3 else 'order.json')))
NAME = sys.argv[4] if len(sys.argv) > 4 else 'trailer'


def run(args):
    r = subprocess.run(args, capture_output=True, text=True)
    if r.returncode:
        print(' '.join(args)[:400]); print(r.stderr[-2000:]); sys.exit(1)


def clip(name):
    d = f'{SHOTS}/f-{name}'
    out = f'{OUT}/clips/{name}.mp4'
    if os.path.exists(out):
        return out
    t = json.load(open(f'{d}/times.json'))
    ts, end = t['ts'], t['end']
    lines = []
    for i, s in enumerate(ts):
        nxt = ts[i + 1] if i + 1 < len(ts) else end
        lines.append(f"file '{d}/{i + 1:05d}.jpg'\nduration {max(1, nxt - s) / 1000:.3f}")
    lines.append(f"file '{d}/{len(ts):05d}.jpg'")
    open(f'{OUT}/clips/{name}.txt', 'w').write('\n'.join(lines) + '\n')
    run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', f'{OUT}/clips/{name}.txt',
         '-vf', f'fps={FPS},scale=1280:720:flags=lanczos,format=yuv420p', '-c:v', 'libx264', '-crf', '12', '-preset', 'fast', out])
    return out


def build():
    inputs, filters, labels, durs = [], [], [], []
    TITLE, END = 2.8, 3.4
    BARE = os.environ.get('BARE') == '1'  # the README loop: gameplay only (the page has the title already)
    n = 0
    if not BARE:
        # title card: a slow push-in
        inputs += ['-loop', '1', '-t', str(TITLE), '-i', f'{CAPS}/title.png']
        filters.append(f"[0:v]scale=1600:900,zoompan=z='1+0.0009*on':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={int(TITLE * FPS)}:s=1280x720:fps={FPS},format=yuv420p,setsar=1[v0]")
        labels.append('v0'); durs.append(TITLE)
        n = 1
    for name, start, length in ORDER:
        vi = n; n += 1
        if name.startswith('still:'):
            # a real screenshot with a slow push-in (the runner can't film the WebGL arena smoothly)
            img, name = name.split(':')[1:]
            inputs += ['-loop', '1', '-t', str(length), '-i', f'{SHOTS}/still-{img}.png']
            filters.append(f"[{vi}:v]scale=1600:900,zoompan=z='1.0+0.0012*on':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d={int(length * FPS) + 5}:s=1280x720:fps={FPS},trim=duration={length},format=yuv420p,setsar=1[s{vi}]")
            src = f's{vi}'
        else:
            inputs += ['-ss', str(start), '-t', str(length), '-i', clip(name)]
            src = f'{vi}:v'
        cap = f'{CAPS}/cap-{name}.png'
        if os.path.exists(cap):
            inputs += ['-loop', '1', '-t', str(length), '-i', cap]
            ci = n; n += 1
            filters.append(f"[{ci}:v]scale=1280:720,format=rgba,fade=in:st=0.35:d=0.4:alpha=1,fade=out:st={length - 0.75:.2f}:d=0.4:alpha=1[c{vi}]")
            filters.append(f"[{src}]setpts=PTS-STARTPTS,fps={FPS},format=yuv420p,setsar=1[b{vi}];[b{vi}][c{vi}]overlay=0:0:format=auto,format=yuv420p[v{vi}]")
        else:
            filters.append(f"[{src}]setpts=PTS-STARTPTS,fps={FPS},format=yuv420p,setsar=1[v{vi}]")
        labels.append(f'v{vi}'); durs.append(length)
    if not BARE:
        inputs += ['-loop', '1', '-t', str(END), '-i', f'{CAPS}/end.png']
        filters.append(f"[{n}:v]scale=1280:720,fps={FPS},format=yuv420p,setsar=1,fade=out:st={END - 0.6}:d=0.6[v{n}]")
        labels.append(f'v{n}'); durs.append(END)
    # cross-fades
    cur, off = labels[0], 0.0
    for i in range(1, len(labels)):
        off += durs[i - 1] - T
        nxt = f'x{i}'
        filters.append(f"[{cur}][{labels[i]}]xfade=transition=fade:duration={T}:offset={off:.3f}[{nxt}]")
        cur = nxt
    filters.append(f"[{cur}]fade=in:st=0:d=0.5[out]" if not BARE else f"[{cur}]null[out]")
    total = sum(durs) - T * (len(durs) - 1)
    music = os.environ.get('MUSIC')
    amap = []
    if music:
        # the menu theme under it all: in gently, out with the end card
        inputs += ['-i', music]
        filters.append(f"[{len([x for x in inputs if x == '-i']) - 1}:a]atrim=0:{total:.2f},asetpts=PTS-STARTPTS,aformat=channel_layouts=stereo,loudnorm=I=-17:TP=-1.5:LRA=11,afade=t=in:d=1.5,afade=t=out:st={total - 3.2:.2f}:d=3.2[aout]")
        amap = ['-map', '[aout]', '-c:a', 'aac', '-b:a', '160k', '-ar', '48000']
    run(['ffmpeg', '-y', '-loglevel', 'error', *inputs, '-filter_complex', ';'.join(filters), '-map', '[out]', *amap,
         '-c:v', 'libx264', '-crf', '22', '-preset', 'slower', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-r', str(FPS), f'{OUT}/{NAME}.mp4'])
    print(f'{NAME} {total:.1f}s', os.path.getsize(f'{OUT}/{NAME}.mp4') // 1024, 'KB')


if __name__ == '__main__':
    build()
