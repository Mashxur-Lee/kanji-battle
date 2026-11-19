# Setting up Kanji Wizards

For running your own server and building the apps. The game itself explains how to play (main menu → *How to play?*).

```
npm install
npm run dev        # http://localhost:3000
npm test           # unit tests
```

Production: `npm run build && npm start` (`PORT` supported). On Render the build command must include
`npm install` (e.g. `npm install && npm run build`) so the `postgres` package gets installed.

## Accounts

Every account has an email (since 0.9.9.9.6.6): it is asked for when you register (older accounts add one the next
time they sign in), one account per mailbox (Gmail dots and `+tags` count as the same mailbox; throwaway inboxes are
refused), and only the player (masked) and admins (Admin → Users) see it. **Forgot password?** on the login screen
sends a 6-digit code (30 minutes, 5 tries); with no email service set (or if sending fails), the code goes to the
admin's inbox (Admin → errors) so the admin can pass it on. The server log says which: `Email (password resets): …`.

On first start on your own computer the server creates two demo accounts, `admin` (admin) and `user`. Give them
passwords in the environment: `ADMIN_PASSWORD` and `USER_PASSWORD`. On a public server (Render, or
`NODE_ENV=production`) the built-in accounts are only created with passwords from the environment, and one still
on its built-in default is locked until you set the variable.

Passwords are hashed with scrypt; logins are signed tokens (30 days). Changing your password (profile → Change
password) signs out every other device.

## Environment variables (Render → your service → Environment)

| Variable | What it does |
|---|---|
| `DATABASE_URL` | **Needed on Render** to keep accounts, XP and study cards (Neon, see below). |
| `AUTH_SECRET` | **Set this.** Any long random string. Without it, everyone is logged out whenever the server restarts. |
| `ADMIN_PASSWORD` | **Set this.** The `admin` account's password. |
| `DAILY_SECRET` | **Set this** (0.9.9.9.7.1). Any random string of 16+ characters. The Daily challenge's words are picked with it — without it anyone with the game's code can work out any day's ten words. It takes effect from the first day no time zone has reached yet (today's words never change halfway). Set it once and keep it: changing it later changes the words of the days since. |
| `USER_PASSWORD` | Optional: password for the demo `user` account. |
| `KEEP_AWAKE` | Optional (0.9.9.9.6.9): on Render the server asks itself (`RENDER_EXTERNAL_URL`, set by Render) every 10 minutes, so the free plan never puts it to sleep and nobody waits on Render's "waking up" page. Awake all month uses about 744 of the free plan's 750 instance hours per workspace — set `KEEP_AWAKE=0` if you run other free services there. `KEEP_AWAKE_URL` points it somewhere else. |
| `BREVO_API_KEY` | Optional (0.9.9.9.6.6): sends the "Forgot password?" codes through [Brevo](https://www.brevo.com)'s HTTPS API (free: 300 a day). **Use this on Render's free plan** — it blocks the mail ports (25, 465, 587), so `SMTP_URL` can't work there. Needs `MAIL_FROM` = a sender verified in Brevo, e.g. `Kanji Wizards <you@gmail.com>`. |
| `SMTP_URL` | Optional (0.9.9.9.6.6): sends the "Forgot password?" codes by email. Any mail server over TLS (not on Render's free plan — see above), e.g. Gmail with an [app password](https://myaccount.google.com/apppasswords): `smtps://you%40gmail.com:app-password@smtp.gmail.com:465` (an `@` in the login is written `%40`). |
| `RESEND_API_KEY` | Optional, instead of SMTP: [Resend](https://resend.com)'s email API. `MAIL_FROM` sets the sender (e.g. `Kanji Wizards <noreply@yourdomain>`). |
| `GEMINI_API_KEY` | Optional: turns on the reading passage's AI stories (one short story written with the player's words) using Google Gemini — it has a free tier (get a key at aistudio.google.com). Default model `gemini-flash-lite-latest`. |
| `ANTHROPIC_API_KEY` | Optional, instead of Gemini: the stories come from Claude (default `claude-haiku-5-5`). Pay-as-you-go from console.anthropic.com. |
| `OPENAI_API_KEY` (+ `OPENAI_BASE_URL`) | Optional, instead: any OpenAI-compatible API — OpenAI (default), xAI Grok (`https://api.x.ai/v1`), Groq (`https://api.groq.com/openai/v1`), OpenRouter (`https://openrouter.ai/api/v1`). Set `STORY_MODEL` to that service's model name. |
| `STORY_MODEL` | Optional: the model for the stories. `STORY_DAILY_MAX`: stories a day for everyone together (default 400; each player up to 40). Without any key the passage uses the words' example sentences. |
| `USERS_FILE` | Local only: where the file store writes when there is no database (default `.data/users.json`). |
| `FIREBASE_SERVICE_ACCOUNT` | Optional (0.9.9.9.5): push notifications to the Android app — a friend's invite reaches the phone while the app is closed. The service account JSON from Firebase (as it is, or base64). See *Push notifications* below. |

## Push notifications (Android app, 0.9.9.9.5)

Invites reach a friend's phone as a notification (Join / Decline) even when the app is closed. Set up once:

1. [console.firebase.google.com](https://console.firebase.google.com) → **Add project** (any name; Analytics not needed).
2. In the project: **Add app → Android**, package name `com.kanjiwizards.app` → **Register app** → download
   **google-services.json** (skip the SDK steps).
3. GitHub → this repository → **Settings → Secrets and variables → Actions → New repository secret**:
   name `GOOGLE_SERVICES_JSON`, value = the whole content of google-services.json. The Apps workflow builds the
   APK with push from now on (without the secret it builds without push, as before).
4. Firebase → ⚙ **Project settings → Service accounts → Generate new private key** — a JSON file downloads.
5. Render → your service → **Environment**: add `FIREBASE_SERVICE_ACCOUNT` = the whole content of that file. Save.
   The log says `Push notifications: on`.
6. (Firebase → Project settings → **Cloud Messaging**: "Firebase Cloud Messaging API (V1)" should say *Enabled* —
   it is on for new projects.)

Players install the new APK, sign in, and allow notifications when Android asks.

**Data keys (0.9.9.9.5.4):** FCM refuses a whole message whose data has a reserved key (`from`, `notification`,
`message_type`, `google.*`, `gcm.*`) — the invites carried `from` and none ever went out. The inviter's name is
`fromName`; `Push.send` refuses reserved keys itself, with the reason, before sending.

**Notifications the phone shows itself (0.9.9.9.5.3):** an invite push carries an Android notification as well as its
data — a data-only push needs the app woken up to draw it, and battery savers / an app swiped away never woke it.
Android shows the notification on its own (in the game's language on that phone, sent with the token); an open app
gets the data instead and shows the invite card.

**Checking it (0.9.9.9.5.2):** in the Android app, Settings → *Invite notifications* → **Test** goes the whole way —
the phone's permission, its Firebase token, the server's push, Google's answer — and says in words where it stops
("Push is not switched on on the game's server", "Google refused the push (403 …)", …). A push Google refuses
also shows in Admin → errors.

## Keeping accounts on Render (Neon Postgres)

Render's free plan wipes the server's disk on every deploy and restart, so without a database all
registrations disappear. Neon has a free Postgres plan:

1. Sign up at [neon.tech](https://neon.tech) and create a project (any name, pick the region closest to
   your Render service).
2. On the project dashboard click **Connect**, and copy the connection string. It looks like
   `postgresql://neondb_owner:…@ep-xxxx.eu-central-1.aws.neon.tech/neondb?sslmode=require`.
3. In Render → your service → **Environment**, add `DATABASE_URL` with that string. Also add
   `AUTH_SECRET` (any long random text) and `ADMIN_PASSWORD`. Save — Render redeploys.
4. In Render's **Logs**, look for `Accounts: postgres`. The server creates its tables (`kw_users`,
   `kw_cards`) by itself; no SQL needed.

The connection string is a password: keep it only in Render's environment, never in the code (the
browser only talks to this server, never to the database).

## Apps and offline mode (0.9.9.4)

- **Install from the browser (PWA)** — `public/manifest.webmanifest` + the service worker `public/sw.js`
  (generated from `src/client/sw.js` by `scripts/build-client.mjs`, with the list of files to keep).
  Phones and PCs can install the site as an app (menu → **Get the app**); it opens without internet.
- **Windows app** — `desktop/` (Electron). It opens the live site (always the newest version), so the
  service worker gives it offline mode too; `offline.html` is shown only if the very first start has no
  internet. Built into `KanjiWizards-Setup.exe` by electron-builder.
- **Android app** — `mobile/android/` (a small WebView app, no Google Play needed). Adds Android's
  text-to-speech for spoken words, the file picker for profile pictures and invite links. Signed with a
  private key (GitHub secrets `ANDROID_KEYSTORE_B64` / `ANDROID_KEYSTORE_PASSWORD`), so new APKs install over old ones.
  **Updating:** "Update the app" lets the phone's browser download the new APK (an in-app installer was tried in
  0.9.9.9.3 and again in 0.9.9.9.5.3 — Play Protect blocks an app that can install apps as harmful, both times).
- **Builds** — `.github/workflows/apps.yml` builds both on every pull request (download them from the
  run's *Artifacts*) and, on `main`, publishes them as the GitHub release `v<version>`; the game links to
  `releases/latest/download/KanjiWizards-Setup.exe` and `…/KanjiWizards.apk`.
- **Offline mode** — `src/client/offline/`. The app keeps a snapshot of your account
  (`GET /api/sync/snapshot`) and, without internet, answers the study calls itself with the server's own
  code (`src/server/router.ts`, `StudyService`, `DailyService` bundled for the browser). Changes go to an
  outbox that is replayed in order once the server answers again, each call stamped with `X-KW-At` (the
  moment it really happened, at most a week back) — so cards and streaks come out as if you'd been online.
  The server honours `X-KW-At` only for the calls in `src/shared/offline.ts` (0.9.9.9.7.1). Online queue,
  private games, the daily challenge (0.9.9.9.7.1: its timing must be the server's), friends and the admin
  pages need the server.
- Icons: `assets/icon.svg` → `node scripts/build-icons.mjs` (needs `sharp`).

## Stability

Uncaught server errors are logged to the admin Inbox instead of going unnoticed. On a restart (deploy) the server
tells everyone "The game is updating — you'll be reconnected in a moment." before closing. Static files are sent
gzipped.


## Structure

- `src/shared` protocol · vocab helpers · progress (XP, backgrounds, achievements) · srs · deck rules
- `src/server` `Game` (reading, writing, boss) · `RapidGame` · `DeckGame` · `Balance` · `Room` · `RoomManager` ·
  `Session` · `http` (REST API) · `db/` (memory, file and Postgres stores) · `auth/` · `study/` · `handwriting/`
- `src/client` `net` · `api` · `ui` · `deckui` · `study` · `pad` · `wizard` (pixel sprites) · `backgrounds` · `audio` · `main`
- `scripts/` vocab and handwriting data builders · `test/` node:test suites

