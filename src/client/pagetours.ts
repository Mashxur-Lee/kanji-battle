// (no DOM here: the tests read it)
export interface Step { sel: string; title: string; text: string }
// 0.9.9.9.9.6 (round 6): the first time you open a page, Master Fumi shows you round it — what every part does
export const PAGE_TOURS: Record<string, Step[]> = {
  games: [
    { sel: '#games .gt-online', title: 'Online battle', text: 'Matched with players of your level: reading and writing duels, Boss Elimination, Rapid, Deck Duel, Kanji chess and Grammar Clash. Ranked modes move your rating.' },
    { sel: '#games .gt-private', title: 'Private game', text: 'Your own room: invite friends with its code, or add bots from beginner to N1 and practise any mode.' },
    { sel: '#games .gt-chess', title: 'Kanji chess', text: 'Chess with kanji pieces - against bots from the Goblin to the Dragon, or a friend.' },
  ],
  private: [
    { sel: '#private .pv-create', title: 'Create a room', text: 'Pick a mode and you are the host: you choose the levels and settings, add bots and start when everyone is ready.' },
    { sel: '#private .pv-join', title: 'Join a friend', text: 'Type the four-letter code your friend sees in their room.' },
  ],
  study: [
    { sel: '#studyStats', title: 'Your study', text: 'Spells learned today, all you know, and the experience they earned.' },
    { sel: '#studyLevels', title: 'New words a day', text: 'How many new words each level brings a day. Fewer is fine - reviews come back on their own (spaced repetition).' },
    { sel: '#studyAll', title: 'Study', text: 'Today’s new words and the ones due for review, as flashcards. Say how well you knew each and it comes back at the right time.' },
    { sel: '#study .deck-card.struggle', title: 'Struggling spells', text: 'Words you missed in battles and quizzes gather here for extra practice.' },
    { sel: '#studyNewDeck', title: 'Your own decks', text: 'Make a deck of your own words - or paste a list to import one.' },
    { sel: '#studyDict', title: 'Dictionary', text: 'Look up any word by kanji, kana, romaji or English - or draw a kanji you can’t type.' },
  ],
  customize: [
    { sel: '#lkLeft', title: 'Your look', text: 'Character, weapon and arena: tap a slot and choose below. New ones unlock as you level up.' },
    { sel: '#lkRight', title: 'Your style', text: 'Omnipotence (your aura), the pose after a combo, and the profile card others see.' },
    { sel: '.lk-center', title: 'Preview', text: 'Your wizard as others see it - drag to turn them round.' },
  ],
  quizzes: [
    { sel: '#qzGoal', title: 'The streak', text: 'Pass a quiz (7 of 10) and today’s quiz task is done.' },
    { sel: '#quizBtn', title: 'JLPT quiz', text: 'Ten questions at your level, like the real test.' },
    { sel: '#onoQuizBtn', title: 'Onomatopoeia', text: 'Japanese sound words - ドキドキ, キラキラ - and what they mean.' },
    { sel: '#passageBtn', title: 'Reading passage', text: 'A short story to read, with blanks to fill.' },
  ],
  kana: [
    { sel: '#kana .kana-script', title: 'Hiragana or katakana', text: 'Choose the script here.' },
    { sel: '#kana .kana-sets', title: 'The sets', text: 'Basic, voiced (が, ぱ) and combinations (きゃ).' },
    { sel: '#kanaGrid', title: 'The table', text: 'Tap a kana to hear it. The ones you know light up as you practise.' },
    { sel: '#kanaPractice', title: 'Practise', text: 'A quick game with the kana of this table.' },
  ],
  daily: [
    { sel: '#dailyMain', title: 'Today’s challenge', text: 'The same questions for everyone today - one try. It counts for your streak.' },
    { sel: '#dailyBoard', title: 'Leaderboard', text: 'How everyone did today, in your league.' },
    { sel: '#dailyWhen', title: 'Earlier days', text: 'Past challenges and how you did.' },
  ],
  progress: [
    { sel: '#progWeek', title: 'This week', text: 'Your study and battles at a glance.' },
    { sel: '#progHeat', title: 'Activity', text: 'Every day you played - darker is more.' },
    { sel: '#progAch', title: 'Achievements', text: 'Badges you have earned - wear up to three on your profile.' },
    { sel: '#progGrid', title: 'Spell mastery', text: 'Every word of a level: how well you know each one. Tap one for details.' },
  ],
  history: [
    { sel: '#historyTabs', title: 'Match history', text: 'Your past battles, the replays you saved, and chess games.' },
    { sel: '#historyList', title: 'A match', text: 'Tap one to see who played and watch its replay.' },
  ],
  grammar: [
    { sel: '#grammarLevels', title: 'Levels', text: 'Grammar from N5 to N1.' },
    { sel: '#grammarItems', title: 'Lessons', text: 'Each one: how it is used, examples you can hear, then a few questions. Passed lessons are ticked.' },
  ],
  inbox: [
    { sel: '#msgList', title: 'Your chats', text: 'Friends, groups, and the Kanji Wizards team - write to us about bugs and ideas.' },
    { sel: '#inbox .msg-newgroup', title: 'Groups', text: 'Start a group chat with friends.' },
  ],
  dict: [
    { sel: '#dictQ', title: 'Search', text: 'Kanji, kana, romaji or English.' },
    { sel: '#dictDraw', title: 'Draw it', text: 'Can’t type a kanji? Draw it and pick it from the matches.' },
  ],
};
