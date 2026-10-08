# Kanji Battle

Real-time 1v1 kanji battle. Both players study the same 10 words for 60 seconds, then the readings
vanish and each word becomes a spell: type its reading (IME kana **or** romaji) to hit your opponent.

    npm install
    npm run dev        # http://localhost:3000 — open in two tabs / two devices
    npm test           # rules + kana unit tests

Production: `npm run build && npm start` (`PORT` env var supported).

## The loop (spec §42)

1. Player A creates a room and picks JLPT levels; player B joins with the 4-letter code.
2. Host presses **Start battle** → both get the same 10 words.
3. **Preparation** (60s, or until both press *I'm ready*): kanji, reading, meaning.
4. Study info disappears → 3-2-1 → **Battle**. Each player gets their own stream of challenges from the pool.
5. One attempt per word. Correct → damage; miss/timeout → no damage, combo resets, the answer is shown
   during a 2.5s penalty and the word comes back soon.
6. First to 0 HP loses (or most HP after 5 minutes). Results show stats, a per-word table and a review list.
7. **Rematch** when both agree (new 10 words).

## Damage

`damage = difficulty × ⅔ × speed × combo` — e.g. 懸念 (difficulty 60), 1.1s, first hit → **43**.
Speed goes from ×1.1 (≤1s) to ×0.8 (≥8s); combo ×1.0 / 1.1 / 1.2 / 1.3 / 1.5.
Every number lives in `DEFAULT_CONFIG` in `src/server/Game.ts`.

## Structure

- `src/shared`  protocol (typed messages) · vocab data (JLPT + difficulty) · kana normaliser (romaji/katakana/full-width → hiragana)
- `src/server`  `Game` (pure rules, N-player ready) · `VocabPool` (pool picking, per-player deck) · `Room` (lobby/host/rematch) · `RoomManager` · `Session` (input validation)
- `src/client`  `net` (WebSocket) · `ui` (rendering) · `main` (wiring)
- `test/`       node:test suites (run with tsx)

The server is authoritative: it picks the words, owns the clocks, checks answers and computes damage.
During battle the client only ever receives the current kanji — never readings or meanings — until it has answered.

Add vocabulary in `src/shared/vocab.ts`; nothing else needs to change.
