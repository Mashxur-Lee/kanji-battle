# Kanji Battle

Real-time kanji battles in the browser. Study 10 words for 60 seconds, then the readings vanish and every
word becomes a spell. Three modes:

| Mode | How you cast |
|---|---|
| **1v1 Kanji Reading** | See the kanji, type its reading (Japanese IME kana or romaji). |
| **1v1 Kanji Writing** | The kanji flashes for 0.5 s, then only the meaning stays. Write it by hand on the pad. |
| **Boss Elimination** | 1–2 players vs the Black Dragon. Correct answers hit it; a mistake gets you clawed (45); fire breath every 30 s hits everyone (110). |

```
npm install
npm run dev        # http://localhost:3000
npm test           # unit tests
```

Production: `npm run build && npm start` (`PORT` supported).

## Accounts

Players log in with a login + password. Two accounts are created on first start:

| Login | Password | Role |
|---|---|---|
| `user` | `user123` | user |
| `admin` | `adminn123` | admin — sees **👥 Users** in the menu and can ban/unban players |

> ⚠️ This repository is public, so these default passwords are public too. On the live site set
> `ADMIN_PASSWORD` (and optionally `USER_PASSWORD`) — the server switches the account to it on start.

Passwords are hashed with scrypt. Logins are signed tokens (30 days). Banned players are kicked from
running games and can't log in.

### Environment variables (Render → your service → Environment)

| Variable | What it does |
|---|---|
| `AUTH_SECRET` | **Set this.** Any long random string. Without it, everyone is logged out whenever the server restarts. |
| `ADMIN_PASSWORD` | **Set this.** Replaces the public default admin password. |
| `USER_PASSWORD` | Optional: password for the demo `user` account. |
| `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | **Needed on Render** to keep accounts (see below). |
| `USERS_FILE` | Local only: where the file store writes (default `.data/users.json`). |

### Keeping accounts on Render (Supabase)

Render's free plan wipes the server's disk on every deploy and restart, so the default file store would
forget all registrations. Use a free Supabase database instead:

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run:
   ```sql
   create table if not exists kb_users (
     id uuid primary key default gen_random_uuid(),
     username text not null unique,
     password_hash text not null,
     role text not null default 'user' check (role in ('user', 'admin')),
     banned boolean not null default false,
     created_at timestamptz not null default now()
   );
   alter table kb_users enable row level security;
   ```
3. In **Project Settings → API**, copy the **Project URL** and the **service_role** key.
4. In Render, add them as `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`, then redeploy.
   The log line `Accounts: supabase` confirms it's in use.

The service-role key bypasses row-level security, so it must only live in server env vars — never in
client code (it isn't: the browser only talks to this server).

## Gameplay details

- **Levels**: かな (hiragana, answered in romaji) and N5–N1, chosen per player. 409 words.
- **Damage** = difficulty × ⅔ × speed (×1.1 fast … ×0.8 slow) × combo (×1.0 / 1.1 / 1.2 / 1.3 / 1.5).
  All numbers live in `DEFAULT_CONFIG` (`src/server/Game.ts`).
- **Fair HP in duels**: your HP depends on how hard your opponent hits —
  `HP = 130 + 17 × opponent's average base damage` (N1+N2 opponent ≈ 920, N5 ≈ 290). `src/server/Balance.ts`.
- **Boss HP** scales with the party's levels (≈45 hits per player). Players have 1000 HP each.
- **Skip** (button or Esc) counts as a miss and shows the answer; missed words come back soon.
- **Reconnects**: seats belong to accounts. If a phone drops the connection (e.g. switching apps to send
  the room code), the seat is kept for 5 minutes in the lobby / 60 s mid-game, and the game reconnects
  automatically when you come back. **Forfeit** (two taps) leaves a battle on purpose.
- **Handwriting** is checked on the server (so it can't be faked) by a TypeScript port of
  [KanjiCanvas](https://github.com/asdfjkl/kanjicanvas) (MIT, see `src/server/handwriting/KANJICANVAS-LICENSE.txt`).
  It knows ~2,280 characters incl. hiragana; a character counts if it is in the top 5 guesses.
  Writing mode only uses words whose characters it knows. Patterns: `data/kanji-patterns.json`
  (hiragana added with `scripts/build-kana-patterns.ts`).
- **Audio** is synthesised in the browser (no files): combo "booms" that deepen up to ×4 and become a
  double-hit from ×5, dragon roars, and a generative background radio. Both can be switched off.

## Structure

- `src/shared` protocol (typed messages) · vocab · kana normaliser
- `src/server` `Game` (rules: duel + boss + writing) · `Balance` · `VocabPool` · `Room` (lobby, seats, grace periods) ·
  `RoomManager` · `Session` (auth + validation) · `http` (REST API) · `auth/` (store, scrypt, tokens, Supabase) ·
  `handwriting/` (recogniser + judge)
- `src/client` `net` (auto-reconnecting socket) · `api` · `ui` · `pad` (handwriting) · `wizard` (pixel sprites incl. dragon) ·
  `audio` · `main`
- `test/` node:test suites
