# Kanji Battle
1v1 real-time kanji reading game. Type the romaji reading faster than your opponent.

    npm install
    npm run dev        # http://localhost:3000  (open in two tabs / two devices)

Production: `npm run build && npm start`  (PORT env var supported)

Structure
- src/shared   protocol (typed messages), kanji data, romaji normalizer
- src/server   Game (pure rules) · Room · RoomManager · Session · QuestionProvider (swappable)
- src/client   net (WebSocket) · ui (rendering) · main (wiring)
