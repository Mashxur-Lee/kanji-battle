# Kanji Wizards · v0.9.9.9.6.5

<p align="center"><img src="docs/promo/banner.webp" alt="Kanji Wizards — learn Japanese by casting it" width="100%"></p>

**Learn Japanese by casting it.** Kanji Wizards is a free multiplayer game where every word you study becomes a
spell. Read a kanji, type its reading or write it by hand, and your wizard casts it at your opponent. Study with
spaced-repetition flashcards, climb the Daily challenge leagues from Kana to N1, and play your friends in real time
on the web, on Android or on Windows.

<p align="center">
  <a href="https://kanji-battle-ev0o.onrender.com/"><b>Play in the browser</b></a> ·
  <a href="https://github.com/Mashxur-Lee/kanji-battle/releases/latest/download/KanjiWizards.apk">Android app</a> ·
  <a href="https://github.com/Mashxur-Lee/kanji-battle/releases/latest/download/KanjiWizards-Setup.exe">Windows app</a>
</p>

<p align="center"><img src="docs/promo/gameplay.gif" alt="From the menu into a battle" width="85%"></p>

## What's inside

- **Five battle modes**: 1v1 Kanji Reading, 1v1 Kanji Writing (handwriting recognition), 1v1 Rapid, Deck Duel
  (a card game built from your own words), and Boss Elimination (up to four players against the Black Dragon).
- **Study that sticks**: Anki-style flashcards for every JLPT level (N5–N1), a Kana trainer for hiragana and
  katakana, JLPT quizzes, onomatopoeia and reading passages, and a full Japanese–English–Russian dictionary.
- **Daily challenge leagues**: ten words a day, the same for everyone in your league. Pass a league to earn its
  animated frame and move up.
- **Friends**: a friends list, invites, and a messenger with groups, photos, reactions and @mentions.
- **Your wizard**: four characters, magic staffs, flames, frames and painted arenas, earned by playing and
  studying. The battles play in a 3D arena or in 2D.
- **Everywhere**: phone, tablet and computer, with an offline mode for studying. English and Russian.

## Screenshots

| | |
|---|---|
| <img src="docs/promo/pc-menu.webp" alt="Main menu"> | <img src="docs/promo/pc-battle3d.webp" alt="A battle in the 3D arena"> |
| <img src="docs/promo/pc-daily.webp" alt="Daily challenge leagues"> | <img src="docs/promo/pc-messages.webp" alt="Messages with friends"> |

<p align="center">
  <img src="docs/promo/phone-menu.webp" alt="Menu on a phone" width="24%">
  <img src="docs/promo/phone-battle.webp" alt="A battle on a phone" width="24%">
  <img src="docs/promo/phone-messages.webp" alt="Messages on a phone" width="24%">
  <img src="docs/promo/pc-kana.webp" alt="The Kana trainer" width="24%">
</p>

## Built with

TypeScript on both sides: a Node.js server (WebSocket games, REST API, PostgreSQL) and a browser client bundled
with esbuild, with three.js for the 3D arena. The Android app is a small WebView shell with push notifications;
the Windows app is Electron.

- Running your own server, building the apps, environment variables: [docs/SETUP.md](docs/SETUP.md)
- Credits and licences of the word data, the dictionary and the libraries: [CREDITS.md](CREDITS.md)
- Found a bug or have an idea? Use **Feedback** in the game's main menu.
