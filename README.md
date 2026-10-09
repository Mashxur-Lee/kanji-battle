# Kanji Wizards · v0.5.1

(The repository is still called `kanji-battle`; only the name in the game changed.)

Real-time kanji battles in the browser. Five modes:

| Mode | How you cast |
|---|---|
| **1v1 Kanji Reading** | Study 10 words for 60 s, then see the kanji and type its reading (IME kana or romaji). |
| **1v1 Kanji Writing** | The kanji flashes for 3.5 s, then the reading + meaning stay. Type the kanji with a Japanese IME or draw it on the pad. Only kanji count (kana only at the かな level). |
| **Boss Elimination** | 1–2 players vs the Black Dragon. Correct answers hit it; a mistake gets you clawed; fire breath every 30 s hits everyone. |
| **1v1 Rapid** | Both players get the same kanji. First correct reading (kana or romaji) deals the damage. |
| **Deck Duel** | Pick a hero, draft 10 kanji cards, then spend mana to cast them by writing the kanji. 1000 HP each. |

```
npm install
npm run dev        # http://localhost:3000
npm test           # unit tests
```

Production: `npm run build && npm start` (`PORT` supported). On Render the build command must include
`npm install` (e.g. `npm install && npm run build`) so the `postgres` package gets installed.

## Accounts and saving progress

Two accounts are created on first start:

| Login | Password | Role |
|---|---|---|
| `user` | `user123` | user |
| `admin` | `adminn123` | admin — sees **👥 Users** in the menu and can ban/unban players |

> ⚠️ This repository is public, so these default passwords are public too. On the live site set
> `ADMIN_PASSWORD` (and optionally `USER_PASSWORD`) — the server switches the account to it on start.

Passwords are hashed with scrypt; logins are signed tokens (30 days).

### Environment variables (Render → your service → Environment)

| Variable | What it does |
|---|---|
| `DATABASE_URL` | **Needed on Render** to keep accounts, XP and study cards (Neon, see below). |
| `AUTH_SECRET` | **Set this.** Any long random string. Without it, everyone is logged out whenever the server restarts. |
| `ADMIN_PASSWORD` | **Set this.** Replaces the public default admin password. |
| `USER_PASSWORD` | Optional: password for the demo `user` account. |
| `USERS_FILE` | Local only: where the file store writes when there is no database (default `.data/users.json`). |

### Keeping accounts on Render (Neon Postgres)

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

## Progress

- **XP**: win = 300 + accuracy %, loss = 50 + accuracy %. Deck Duel: win 4000, loss 1500. A forfeited match
  (someone gave up or left) gives nobody XP.
- **Levels** get steeper: 1000 XP for Lv 1, then 2000 more for Lv 2, 3000 more for Lv 3 … (Lv 5 = 15,000 total,
  Lv 10 = 55,000, Lv 20 = 210,000).
- **Customize**: backgrounds unlock at Lv 0 forest, 5 swamp, 10 plains, 15 castle, 20 world tree.
- **Fighters** depend on the levels you play: goblin (かな), kid (N5), human (N4), knight (N3), wizard (N2/N1).
- **Study spells**: *All spells* — tick levels and 25 new words are added each day. *Struggling spells* —
  words you missed in battles. Anki-style cards (Again / Hard / Okay / Easy, SM-2 scheduling,
  `src/shared/srs.ts`).
- **Crit**: every learned card (graduated from learning) adds 0.1 % crit chance, max 50 %. A crit hits ×1.5.

## Deck Duel

Heroes (one ability button per match, lasts 2 of your turns): **Goblin** casts 2 cards in a row,
**Knight** −30 % damage taken and +30 % healing, **Witch** sees your hand's spells and readings and the
kanji stays visible; **Wizard** is passive (2 random cards when out of cards, or +30 mana when out of
mana, once each).

The lobby has no level picker (it shows an illustrated guide instead): both players press **Ready** and the
duel starts. Hero pick and the first draft can still go **← Back to lobby**. In battle there's a chat, and
while your opponent plays you can read the list of kanji in your hand (sorted, so you can't tell which card
is which). A card's mana is paid when you play it, even if you then write it wrong.

Draft: 20 cards (4 per colour), coin flip, picks of 2 until each player has 10. Colours, ranked by word
difficulty (JLPT level, stroke count and word length):

| Colour | Effect | Mana |
|---|---|---|
| Red | 250 damage | 70 |
| Green | heal 100 | 40 |
| Yellow | +60 mana | 0 |
| Blue | 120 damage | 25 |
| Light blue | 100 damage | 10 |

Mana starts at 150/150, +10 each turn. You get 15 s to choose a card, then 20 s to write it (after the kanji's 3.5 s flash): the kanji flashes for 3.5 s, the reading and meaning
stay, and you write it. Wrong or too slow → the card rips. Out of cards → a new draft round
(Round 2, 3 …: 20 fresh cards, each player picks 10 more; HP, mana, powers and unplayed cards stay, and the
match clock pauses). Having cards but no mana for any of them is a loss. After 8 minutes, overtime: the remaining cards are shown one by one and the first correct writer
uses it.

## Gameplay details

- **Words**: 6,616 (N5 523 · N4 520 · N3 1832 · N2 1354 · N1 2285 · かな 102). N5/N4 lists only have ~520
  words with kanji in them. Built by `scripts/build-vocab.ts` from
  [open-anki-jlpt-decks](https://github.com/jamsinclair/open-anki-jlpt-decks) (MIT), which is based on
  Jonathan Waller's JLPT lists ([tanos.co.uk](http://www.tanos.co.uk/jlpt/), CC BY). Licence in `data/sources/`.
- **Damage** = difficulty × ⅔ × speed × combo. After every answer, right or wrong, there's the same 2.5 s pause
  (the answer is shown), so guessing fast is never quicker than knowing it. Numbers in `DEFAULT_CONFIG` (`src/server/Game.ts`).
- **Fair HP in duels**: your HP depends on how hard your opponent hits (`src/server/Balance.ts`).
- **Handwriting** is checked on the server by a TypeScript port of
  [KanjiCanvas](https://github.com/asdfjkl/kanjicanvas) (MIT, `src/server/handwriting/KANJICANVAS-LICENSE.txt`).
  It's forgiving: a character counts if it's in the top 10 guesses or close to the best guess
  (`JUDGE` in `src/server/handwriting/judge.ts`).
- **Handwriting a word**: write the whole word on one wide pad, left to right (faint dividers mark each
  character). The server tries the most likely ways to split the strokes into characters and keeps the one
  that reads best (`src/server/handwriting/segment.ts`).
- **Connection bars** next to every player: 3 green < 150 ms, 2 yellow < 400 ms, 1 red slower (app-level ping
  every 3 s).
- **Saved progress**: accounts, XP and study sets live in Postgres and are never reset by an update. XP saved
  before the steeper level curve was converted once so nobody lost a level. The admin **Users** page shows each
  player's level, XP, learned spells / study-set size and crit, and warns if no database is connected.
- **Forfeit** goes to the results screen; in the preparation phase **← Lobby** returns everyone to the lobby.
- **Audio** is synthesised in the browser (no files): a chime that gets deeper and longer with the combo,
  win/lose jingles, and fantasy music in the menu and lobby only. It pauses when the tab is hidden.

## Structure

- `src/shared` protocol · vocab helpers · progress (XP, crit, backgrounds) · srs · deck rules
- `src/server` `Game` (reading, writing, boss) · `RapidGame` · `DeckGame` · `Balance` · `Room` · `RoomManager` ·
  `Session` · `http` (REST API) · `db/` (memory, file and Postgres stores) · `auth/` · `study/` · `handwriting/`
- `src/client` `net` · `api` · `ui` · `deckui` · `study` · `pad` · `wizard` (pixel sprites) · `backgrounds` · `audio` · `main`
- `scripts/` vocab and handwriting data builders · `test/` node:test suites
