# Promo pictures and trailer

How `docs/promo/` was made (0.9.9.9.6.7). Needs Python 3 with Pillow, ffmpeg with libx264 and libwebp, Noto CJK fonts.

1. **Capture** on CI: `scripts/ci-shots.sh shots scripts/promo/capture.js pc:1366x768`. It plays every mode with real,
   correct answers (readings from `data/vocab.json`, handwriting replayed from `data/kanji-patterns.json`) and saves
   Chrome's screencast frames (`f-<clip>/`, with `times.json`) and stills (`still-*.png`) to the `ci-shots` branch.
   It uses its own Chrome with software raster on 4 threads (about 20–40 fps) and blanks the harness page; the WebGL
   arena can't be filmed smoothly on the runner, so it only gets stills.
2. **Look**: `python3 sheet.py <shots>/f-<clip> FROM TO STEP out.png` makes a contact sheet to pick the moments.
3. **Captions**: `python3 caps.py caps` (title card, end card, one caption per clip).
4. **Trailer**: edit `order.json` (clip, start, length), then `python3 assemble.py <shots> <out> order.json trailer`;
   the README loop: `BARE=1 python3 assemble.py <shots> <out> order-short.json short`, then
   `ffmpeg -i short.mp4 -vf "fps=15,scale=960:-2:flags=lanczos" -c:v libwebp_anim -quality 72 -loop 0 trailer.webp`
   (keep it under about 8 MB so GitHub shows it).
5. **Cards**: `bash cards.sh <shots> <out>`.
