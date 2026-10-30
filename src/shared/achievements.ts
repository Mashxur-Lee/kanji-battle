// Achievements: 44 badges (0.9.9.6: 23 new ones) shown on the Progress page (locked until earned; hover says how). Earned ones are
// stored in the account's `unlocks` as "ach:<id>" and checked on the server — after every match, and
// whenever the profile loads (streaks, spells learned, friends, level, monthly rewards).

export type AchIcon = 'sword' | 'swords' | 'crown' | 'flame' | 'flame2' | 'comet' | 'target' | 'dragon' | 'cards' | 'brush' | 'bolt'
  | 'book' | 'tome' | 'kana' | 'sun' | 'moon' | 'calendar' | 'people' | 'leaf' | 'star' | 'kingslayer'
  | 'hourglass' | 'scroll' | 'shield' | 'gem' | 'quill' | 'bookmark' | 'tag' | 'mountain' | 'check';
export interface AchievementDef { id: string; name: string; how: string; icon: AchIcon; color: string; tier: 1 | 2 | 3 }

export const ACHIEVEMENTS: readonly AchievementDef[] = [
  { id: 'first-win', name: 'First Victory', how: 'Win a battle.', icon: 'sword', color: '#ff6b6b', tier: 1 },
  { id: 'veteran', name: 'Veteran', how: 'Win 25 battles.', icon: 'swords', color: '#ff8f5a', tier: 2 },
  { id: 'champion', name: 'Champion', how: 'Win 100 battles.', icon: 'crown', color: '#ffd479', tier: 3 },
  { id: 'combo-5', name: 'On Fire', how: 'Cast 5 correct spells in a row in a battle.', icon: 'flame', color: '#6ee7ff', tier: 1 },
  { id: 'combo-10', name: 'Inferno', how: 'Reach a 10× combo in a battle.', icon: 'flame2', color: '#b26bff', tier: 2 },
  { id: 'combo-20', name: 'Unstoppable', how: 'Reach a 20× combo in a battle.', icon: 'comet', color: '#ff4fd8', tier: 3 },
  { id: 'flawless', name: 'Flawless', how: 'Win a battle with 100% accuracy (at least 10 answers).', icon: 'target', color: '#3ddc84', tier: 2 },
  { id: 'dragon-slayer', name: 'Dragon Slayer', how: 'Defeat the Black Dragon in Boss Elimination.', icon: 'dragon', color: '#ff5a3a', tier: 2 },
  { id: 'card-sage', name: 'Card Sage', how: 'Win a Deck Duel.', icon: 'cards', color: '#5aa8e8', tier: 2 },
  { id: 'calligrapher', name: 'Calligrapher', how: 'Win a Kanji Writing duel.', icon: 'brush', color: '#e8d5a8', tier: 1 },
  { id: 'quickdraw', name: 'Quickdraw', how: 'Win a Rapid duel.', icon: 'bolt', color: '#ffe14d', tier: 1 },
  { id: 'scholar', name: 'Scholar', how: 'Learn 100 spells in Study spells.', icon: 'book', color: '#7fd1ff', tier: 1 },
  { id: 'archmage', name: 'Archmage', how: 'Learn 1,000 spells.', icon: 'tome', color: '#a98bff', tier: 3 },
  { id: 'graduate', name: 'Kana Graduate', how: 'Start as a かな beginner, then tick "I\'ve mastered hiragana" in Settings.', icon: 'kana', color: '#ff9ec7', tier: 1 },
  { id: 'devoted', name: 'Devoted', how: 'Log in 7 days in a row.', icon: 'sun', color: '#ffb84d', tier: 1 },
  { id: 'eternal', name: 'Eternal Flame', how: 'Log in 30 days in a row.', icon: 'moon', color: '#ff7a1a', tier: 3 },
  { id: 'perfect-day', name: 'Perfect Day', how: 'Get 10 / 10 in the Daily challenge.', icon: 'calendar', color: '#4dd6c8', tier: 2 },
  { id: 'fellowship', name: 'Fellowship', how: 'Make a friend.', icon: 'people', color: '#8be37a', tier: 1 },
  { id: 'seasonal', name: 'Seasonal', how: 'Complete a month\'s goals and earn its reward.', icon: 'leaf', color: '#ff8ccf', tier: 2 },
  { id: 'grand-wizard', name: 'Grand Wizard', how: 'Reach level 10.', icon: 'star', color: '#ffd479', tier: 3 },
  { id: 'kingslayer', name: 'Kingslayer', how: 'Beat an admin in a battle.', icon: 'kingslayer', color: '#ff3d6e', tier: 3 },
  // ── 0.9.9.6 ──
  { id: 'first-steps', name: 'First Steps', how: 'Answer 50 study cards.', icon: 'hourglass', color: '#9fd8ff', tier: 1 },
  { id: 'diligent', name: 'Diligent', how: 'Answer 1,000 study cards.', icon: 'hourglass', color: '#5aa8ff', tier: 2 },
  { id: 'tireless', name: 'Tireless', how: 'Answer 10,000 study cards.', icon: 'hourglass', color: '#b26bff', tier: 3 },
  { id: 'word-hoard', name: 'Word Hoard', how: 'Learn 500 spells.', icon: 'book', color: '#ffb84d', tier: 2 },
  { id: 'well-versed', name: 'Well Versed', how: 'Master 100 spells (a review interval of 3 weeks or more).', icon: 'gem', color: '#4dd6c8', tier: 2 },
  { id: 'deep-roots', name: 'Deep Roots', how: 'Master 500 spells.', icon: 'gem', color: '#ff8ccf', tier: 3 },
  { id: 'quiz-whiz', name: 'Quiz Whiz', how: 'Pass 10 JLPT quizzes (7/10 or better).', icon: 'check', color: '#8be37a', tier: 1 },
  { id: 'quiz-master', name: 'Quiz Master', how: 'Pass 100 JLPT quizzes.', icon: 'check', color: '#ffd479', tier: 3 },
  { id: 'bookworm', name: 'Bookworm', how: 'Finish 10 reading passages (4/8 or better).', icon: 'scroll', color: '#e8d5a8', tier: 1 },
  { id: 'storyteller', name: 'Storyteller', how: 'Finish 50 reading passages.', icon: 'scroll', color: '#ff9a5a', tier: 2 },
  { id: 'daily-devotee', name: 'Daily Devotee', how: 'Play the Daily challenge 10 times.', icon: 'calendar', color: '#7fd1ff', tier: 1 },
  { id: 'daily-legend', name: 'Daily Legend', how: 'Play the Daily challenge 50 times.', icon: 'calendar', color: '#ff5a3a', tier: 3 },
  { id: 'regular', name: 'Regular', how: 'Play on 30 different days.', icon: 'sun', color: '#ffe14d', tier: 2 },
  { id: 'steadfast', name: 'Steadfast', how: 'Keep a 14-day daily streak.', icon: 'flame', color: '#ff7a1a', tier: 2 },
  { id: 'unbreakable', name: 'Unbreakable', how: 'Keep a 100-day daily streak.', icon: 'mountain', color: '#ff3d6e', tier: 3 },
  { id: 'brawler', name: 'Brawler', how: 'Play 10 battles.', icon: 'shield', color: '#c8b8ff', tier: 1 },
  { id: 'warlord', name: 'Warlord', how: 'Play 250 battles.', icon: 'shield', color: '#ff6b6b', tier: 3 },
  { id: 'rising-star', name: 'Rising Star', how: 'Reach level 5.', icon: 'star', color: '#9fd8ff', tier: 1 },
  { id: 'living-legend', name: 'Living Legend', how: 'Reach level 25.', icon: 'crown', color: '#ff4fd8', tier: 3 },
  { id: 'circle-of-friends', name: 'Circle of Friends', how: 'Have 5 friends.', icon: 'people', color: '#ffb84d', tier: 2 },
  { id: 'collector', name: 'Collector', how: 'Star 20 words ★.', icon: 'bookmark', color: '#ffc93c', tier: 1 },
  { id: 'wordsmith', name: 'Wordsmith', how: 'Have 10 words in Custom spells.', icon: 'quill', color: '#a98bff', tier: 1 },
  { id: 'true-name', name: 'True Name', how: 'Choose a nickname (your profile → ✎).', icon: 'tag', color: '#6ee7ff', tier: 1 },
];
export const ACH_PREFIX = 'ach:';
export const achById = (id: string) => ACHIEVEMENTS.find((a) => a.id === id);

/** What the server knows about a player when it checks achievements. */
export interface AchFacts {
  wins: number; level: number; bestStreak: number; learned: number; friends: number; seasonal: number;
  /** 0.9.9.6: lifetime totals (from the daily activity), and a few counts */
  reviews?: number; games?: number; quizzes?: number; passages?: number; challenges?: number; activeDays?: number;
  mastered?: number; starred?: number; custom?: number; nickname?: boolean;
  match?: { mode: string; outcome: 'win' | 'loss' | 'draw'; accuracy: number; attempts: number; bestCombo: number; forfeited: boolean; beatAdmin?: boolean };
}

/** Every achievement these facts earn (already-earned ones included). */
export function earnedAchievements(f: AchFacts): string[] {
  const out: string[] = [];
  const add = (id: string, ok: boolean) => { if (ok) out.push(id); };
  add('first-win', f.wins >= 1);
  add('veteran', f.wins >= 25);
  add('champion', f.wins >= 100);
  add('scholar', f.learned >= 100);
  add('archmage', f.learned >= 1000);
  add('devoted', f.bestStreak >= 7);
  add('eternal', f.bestStreak >= 30);
  add('fellowship', f.friends >= 1);
  add('seasonal', f.seasonal >= 1);
  add('grand-wizard', f.level >= 10);
  // 0.9.9.6
  const n = (x?: number) => x ?? 0;
  add('first-steps', n(f.reviews) >= 50); add('diligent', n(f.reviews) >= 1000); add('tireless', n(f.reviews) >= 10_000);
  add('word-hoard', f.learned >= 500);
  add('well-versed', n(f.mastered) >= 100); add('deep-roots', n(f.mastered) >= 500);
  add('quiz-whiz', n(f.quizzes) >= 10); add('quiz-master', n(f.quizzes) >= 100);
  add('bookworm', n(f.passages) >= 10); add('storyteller', n(f.passages) >= 50);
  add('daily-devotee', n(f.challenges) >= 10); add('daily-legend', n(f.challenges) >= 50);
  add('regular', n(f.activeDays) >= 30);
  add('steadfast', f.bestStreak >= 14); add('unbreakable', f.bestStreak >= 100);
  add('brawler', n(f.games) >= 10); add('warlord', n(f.games) >= 250);
  add('rising-star', f.level >= 5); add('living-legend', f.level >= 25);
  add('circle-of-friends', f.friends >= 5);
  add('collector', n(f.starred) >= 20); add('wordsmith', n(f.custom) >= 10);
  add('true-name', !!f.nickname);
  const m = f.match;
  if (m && !m.forfeited) {
    add('combo-5', m.bestCombo >= 5);
    add('combo-10', m.bestCombo >= 10);
    add('combo-20', m.bestCombo >= 20);
    const won = m.outcome === 'win';
    add('flawless', won && m.accuracy >= 1 && m.attempts >= 10);
    add('dragon-slayer', won && m.mode === 'boss');
    add('card-sage', won && m.mode === 'deck');
    add('calligrapher', won && m.mode === 'writing');
    add('quickdraw', won && m.mode === 'rapid');
    add('kingslayer', won && !!m.beatAdmin);
  }
  return out;
}

/** The combo milestones a battle can celebrate the moment they happen. */
export const COMBO_ACHIEVEMENTS: ReadonlyArray<[number, string]> = [[5, 'combo-5'], [10, 'combo-10'], [20, 'combo-20']];
