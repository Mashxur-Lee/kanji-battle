"""Profile pictures for the demo players: square crops of the game's own painted arenas (public/bg).
python3 avatars.py avatars.json, then: node --import tsx avatars.cjs avatars.json (uploads them through the API)"""
import base64, io, json, os, sys
from PIL import Image
BG = os.path.join(os.path.dirname(os.path.abspath(__file__)), '../../../public/bg/')
CROPS = {  # name: (file, centre x, centre y, half size) on the 1672x940 art
    'hikari': ('worldtree-sunset.webp', 836, 300, 250), 'sakura': ('forest-night.webp', 1290, 190, 150),
    'kenji': ('castle-sunset.webp', 836, 330, 230), 'mika': ('plains-sunset.webp', 1260, 660, 150),
    'yuto': ('worldtree-night.webp', 836, 300, 250), 'ren': ('swamp-sunset.webp', 836, 380, 260), 'aoi': ('plains-day.webp', 836, 420, 260),
}
out = {}
for n, (f, cx, cy, h) in CROPS.items():
    im = Image.open(BG + f).convert('RGB').crop((cx - h, cy - h, cx + h, cy + h)).resize((128, 128), Image.LANCZOS)
    b = io.BytesIO(); im.save(b, 'JPEG', quality=88)
    out[n] = 'data:image/jpeg;base64,' + base64.b64encode(b.getvalue()).decode()
json.dump(out, open(sys.argv[1], 'w'))
