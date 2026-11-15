# Kanji Wizards: notes for an AI assistant (and for future me)

A real-time multiplayer Japanese-learning game: wizards duel by answering kanji, words and kana. One Node server
serves the web game, the Android app (a WebView shell) and the Windows app (Electron).

## Layout
- `src/server`: Node 22 + TypeScript. `index.ts` boots, `router.ts` holds the HTTP API, `Room.ts`, `Game.ts`,
  `DeckGame.ts` and `RapidGame.ts` run the battles over WebSockets, `auth/` handles accounts, email and password
  reset, `study/` covers SRS, daily, progress and leagues, `db/` the stores (PgStore on Neon Postgres in
  production, MemoryStore in tests), `mail.ts` sends mail (Brevo HTTPS API, then Resend, then SMTP. Render's
  free plan blocks the SMTP ports).
- `src/client`: the browser game, bundled by esbuild (`scripts/build-client.mjs`) into `public/app.js`. There is no
  framework, just plain DOM. `ui.ts` handles screens, `main.ts` wiring, `i18n.ts` English to Russian, `zoom.ts` the UI
  scale, `arena3d.ts` and friends the three.js arena (2D sprites when 3D is off), `whatsnew.ts` the patch notes.
- `src/shared`: code both sides use (protocol, SRS, kana, dictionary helpers).
- `public/`: `index.html`, `style.css` (one big file; later rules override earlier ones, and each block is
  commented with the version that added it), assets, the service worker comes from `src/client/sw.js`.
- `mobile/` is the Android app, `desktop/` the Electron app. Both are built by `.github/workflows/apps.yml`.
- `test/`: `node --test` suites, one file per release (`v0999NN.test.ts`).

## Commands
- `npm test` (or `npx tsx --test test/*.test.ts`) runs everything against MemoryStore. `store.test.ts` needs
  Postgres and fails locally, which is expected.
- `npm run typecheck` checks the server and client. Locally the three.js typings may be missing; CI has them.
- `npm run dev` builds the client and runs the server on :3130.

## Releasing (how every version so far was shipped)
1. Branch `v<version>` off `main`.
2. Bump the version in `src/shared/version.ts`, `package.json`, `package-lock.json` (2 places), and README line 1.
3. Add a What's new entry at the top of `PATCHES` in `src/client/whatsnew.ts`, in English and Russian.
4. Every new UI string needs its Russian in `src/client/i18n.ts` (the dictionary, or the regex list for strings
   with numbers). A duplicate key fails the typecheck.
5. Add a test file for the release's behaviour. Push. CI (`check.yml`) typechecks, tests and audits.
6. Screenshots: `check.yml` can be dispatched with a `scenario` (base64 of an
   `async (page, shot, sleep, info) => {}` function) and `sizes` (`pc:1440x900,phone:390x844`); the pictures
   are pushed to the `ci-shots` branch. `scripts/ci-shots.sh` wraps this. Push the branch before dispatching.
7. `gh workflow run apps.yml --ref <branch>` builds the APK and Windows installer as a GitHub release.
8. Open a PR to `main`. The owner merges it, and Render deploys `main`.

## Rules the owner set (do not break these)
- Never commit a keystore (`*.jks`). The Android signing key lives only in the repo secrets
  `ANDROID_KEYSTORE_B64` and `ANDROID_KEYSTORE_PASSWORD`.
- No in-app APK installer and no `REQUEST_INSTALL_PACKAGES` permission.
- FCM data payloads must not use reserved keys (`from`, `notification`, `message_type`, `google.*`, `gcm.*`).
- Animations must run even with Windows "Animation effects" off, so no `prefers-reduced-motion` rules (a test
  enforces this).
- No emojis as design elements in the UI.
- Never put credentials or setup secrets in the README. Keep the README a description; setup lives in
  `docs/SETUP.md`.
- Each account needs an email. An email can be changed once a week, and changing it asks for the password.
- License: all rights reserved (see `LICENSE`). Art is AI-generated and credited in `CREDITS.md`.

## Style
- Comments start with the version that introduced the code (`// 0.9.9.9.6.7: ...`), which makes the history
  easy to follow.
- Check UI changes on a computer size and a phone size, in English and Russian, dark and light themes.
