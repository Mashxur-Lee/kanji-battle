# Promo pictures and trailer

How `docs/promo/` was made (0.9.9.9.6.7). Needs Python 3 with Pillow, ffmpeg with libx264 and libwebp, Noto CJK fonts.

1. **Capture** on CI: `scripts/ci-shots.sh shots scripts/promo/capture.js pc:1366x768`. It plays every mode with real,
   correct answers (readings from `data/vocab.json`, handwriting replayed from `data/kanji-patterns.json`) and saves
   Chrome's screencast frames (`f-<clip>/`, with `times.json`) and stills (`still-*.png`) to the `ci-shots` branch.
   It uses its own Chrome with software raster on 4 threads (about 20–40 fps) and blanks the harness page.
   **The 3D arena** (0.9.9.9.6.8): `capture-3d.js` films it frame by frame in virtual time — Chrome with
   `--deterministic-mode` (begin-frame control), the page's clock advanced 40 ms per frame
   (`Emulation.setVirtualTimePolicy`), each frame drawn with `HeadlessExperimental.beginFrame`. The battles run in the
   page (offline mode against the AI), so they keep to that clock; every frame is full quality however slow the
   software renderer is (about 1–1.5 s a frame). `localStorage kb:filming = 1` keeps the camera steady and stops the
   arena dropping to Lite. Never reload a page under begin-frame control (a frame left pending blocks all later
   ones); some windows still get stuck — the script retries in a new one.
2. **Look**: `python3 sheet.py <shots>/f-<clip> FROM TO STEP out.png` makes a contact sheet to pick the moments.
3. **Captions**: `python3 caps.py caps` (title card, end card, one caption per clip).
4. **Trailer**: edit `order.json` (clip, start, length), then `MUSIC=menu-theme.wav python3 assemble.py <shots> <out> order.json trailer`.
   The music is the game's own menu theme: the capture hooks `AudioBufferSourceNode.start` and saves the looped buffer
   (`capture-music.js`); the theme itself is made by `src/client/audio.ts`.
  
   the README loop: `BARE=1 python3 assemble.py <shots> <out> order-short.json short`, then
   `ffmpeg -i short.mp4 -vf "fps=15,scale=960:-2:flags=lanczos" -c:v libwebp_anim -quality 72 -loop 0 trailer.webp`
   (keep it under about 8 MB so GitHub shows it).
5. **Cards**: `bash cards.sh <shots> <out>`.
