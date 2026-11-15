import json, sys, bisect
from PIL import Image, ImageDraw
d, a, b, step = sys.argv[1], float(sys.argv[2]), float(sys.argv[3]), float(sys.argv[4])
t = json.load(open(f'{d}/times.json')); ts = t['ts']
secs = []; x = a
while x <= min(b, t['end'] / 1000): secs.append(x); x += step
ims = []
for s in secs:
    i = max(0, bisect.bisect_right(ts, s * 1000) - 1)
    im = Image.open(f'{d}/{i + 1:05d}.jpg').resize((384, 216)); ImageDraw.Draw(im).text((6, 4), f'{s:.1f}', fill=(255, 255, 0)); ims.append(im)
cols = 4; g = Image.new('RGB', (384 * cols, 216 * ((len(ims) + cols - 1) // cols)))
for i, im in enumerate(ims): g.paste(im, ((i % cols) * 384, (i // cols) * 216))
g.save(sys.argv[5])
