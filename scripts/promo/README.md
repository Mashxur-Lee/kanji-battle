# Promo pictures and trailer

## The trailer (after 0.9.9.9.6.8): `trailer/`

`docs/promo/trailer.mp4` (91 s), `trailer-short.mp4` (41 s) and the README loop `trailer.webp` are filmed from the game
running on your own computer, in 1920×1080 at 30 fps, and cut to their own soundtrack. Needs Node 22 with the
project's packages plus `playwright` (its Chromium headless shell), Python 3 with Pillow, numpy and scipy, ffmpeg with
libx264 and libwebp, the Inter and Noto CJK fonts.

1. **Accounts**: `USERS_FILE=/tmp/kw-promo-users.json npx tsx scripts/promo/trailer/seed.ts` writes demo accounts
   into their own file (never your own `.data`): a hero half a year in (2,900 study cards, 26 weeks of activity,
   badges, the N2 league), six friends and eight battle actors with every look open. Start the game on that file:
   `npm run build:client && USERS_FILE=/tmp/kw-promo-users.json PORT=3130 npx tsx src/server/index.ts`, then
   `node --import tsx scripts/promo/trailer/setup.cjs` (messages and a group, through the API) and
   `python3 scripts/promo/trailer/avatars.py a.json && node --import tsx scripts/promo/trailer/avatars.cjs a.json`
   (profile pictures: square crops of the painted arenas).
2. **Film**, one take at a time (two at once starve each other). Frames go to `$OUT/<clip>/NNNNN.jpg` (`OUT`
   defaults to `/tmp/kw-frames`), `count.txt` says how many belong to the take.
   - `node --import tsx scripts/promo/trailer/scene3d.cjs duel,boss,combo,rapid`: the 3D battles.
   - `… scene2d.cjs`: every screen (or name some): menu, progress, study, kana, daily, messages, dict, modes.
   - `… lobby.cjs`: a private Boss room; three friends join from their own (ordinary, real-time) windows, talk in the
     lobby chat and get ready. Filmed in a 960×540 window at twice the pixels, so faces and chat are a third larger.
   - `… phone.cjs`: the menu, a 3D duel on the game's battle keyboard, and the flashcards at 390×844 (Chrome's
     mobile emulation).
   - `… customize.cjs`: the Hero Locker in motion.

   How it works (`lib.cjs`): Chrome under begin-frame control with the page's clock moved 33⅓ ms a frame, so every
   frame is whole however slow the software renderer is (about 0.2 s a frame for the screens, 1.3–1.7 s for the 3D
   arena). Things worth knowing:
   - The first frame may only be asked for some seconds after the page starts loading — one begun during the load
     never comes back, and then no frame can be drawn at all.
   - The 3D battles run in the page (offline mode against the AI) so they keep to the filming clock. Offline mode
     must be ON before the room is made (`body.offline`), or the room is the server's and runs on the server's clock.
   - `localStorage kb:filming = 1` (no screen shake, no drop to Lite); service workers blocked; the arenas follow the
     local time, so the browser's time zone picks day / sunset / night.
   - The camera only ever moves with the game's own mouse-look (`panner`): slow, eased, no shake.
   - Customize stalls under begin-frame control (its WebGL previews), so `customize.cjs` films it in an ordinary
     window and takes the page's clocks over by hand: `performance.now`, `Date.now`, `requestAnimationFrame` and the
     timers step 33⅓ ms a frame, and CSS animations are set to the same time through the Web Animations API.
   - A room outlives its window: an account that was in a lobby comes back into it. `lobby.cjs` leaves first.
   - Writing and Deck Duel need the server (handwriting is judged there), so they are not filmed in play yet.
3. **Music**: `python3 scripts/promo/trailer/music.py full full.wav` and `… short short.wav`. An original theme,
   synthesised in code: koto-like plucks, a soft electric piano, a warm pad, light drums; 96 BPM, one chord a bar
   (2.5 s = 75 frames), so every scene is a whole number of bars and the cuts land on the bar lines. The bar list
   in `song()` follows the scene list in `edit.py`: change them together.
4. **Cut**: `python3 scripts/promo/trailer/edit.py $OUT out full full.wav` (and `short short.wav`, `loop`): one
   encoded file per scene, joined without re-encoding, the music added last. The scene list (clip, first frame,
   bars, caption) is at the bottom of `edit.py`; the title and end cards use the painted arenas in `public/bg/`.
   The README loop: `ffmpeg -i out/loop-silent.mp4 -vf "fps=15,scale=960:-2:flags=lanczos" -c:v libwebp_anim -quality 62 -loop 0 trailer.webp`
   (keep it under about 8 MB so GitHub shows it).

## The README cards (0.9.9.9.6.7) and the first trailer

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
