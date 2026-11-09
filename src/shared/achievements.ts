// Achievements: 50 badges shown on the Progress page (locked until earned; hover says how). Earned ones are
// stored in the account's `unlocks` as "ach:<id>" and checked on the server — after every match, and
// whenever the profile loads (streaks, spells learned, friends, level, monthly rewards).
// 0.9.9.9.5: the set reworked to 50 — the ones that were just a click (a nickname, 20 stars, 10 custom words, 50
// cards, 10 games, 30 days, a 14-day streak next to 7 and 30) gave way to feats: a last stand, an untouchable
// win, beating the N1 AI or someone 5 levels up, a 30× combo, perfect quizzes, the Kana section, a year of fire.

export type AchIcon = 'sword' | 'swords' | 'crown' | 'flame' | 'flame2' | 'comet' | 'target' | 'dragon' | 'cards' | 'brush' | 'bolt'
  | 'book' | 'tome' | 'kana' | 'sun' | 'moon' | 'calendar' | 'people' | 'leaf' | 'star' | 'kingslayer'
  | 'hourglass' | 'scroll' | 'shield' | 'gem' | 'quill' | 'bookmark' | 'tag' | 'mountain' | 'check'
  | 'nova' | 'heart' | 'feather' | 'stopwatch' | 'robot' | 'ace' | 'kata' | 'infinity' | 'wand';
export interface AchievementDef { id: string; name: string; how: string; icon: AchIcon; color: string; tier: 1 | 2 | 3 }

export const ACHIEVEMENTS: readonly AchievementDef[] = [
  // ── battles ──
  { id: 'first-win', name: 'First Victory', how: 'Win a battle.', icon: 'sword', color: '#ff6b6b', tier: 1 },
  { id: 'veteran', name: 'Veteran', how: 'Win 25 battles.', icon: 'swords', color: '#ff8f5a', tier: 2 },
  { id: 'champion', name: 'Champion', how: 'Win 100 battles.', icon: 'crown', color: '#ffd479', tier: 3 },
  { id: 'warlord', name: 'Warlord', how: 'Play 250 battles.', icon: 'shield', color: '#ff6b6b', tier: 3 },
  { id: 'combo-5', name: 'On Fire', how: 'Cast 5 correct spells in a row in a battle.', icon: 'flame', color: '#6ee7ff', tier: 1 },
  { id: 'combo-10', name: 'Inferno', how: 'Reach a 10× combo in a battle.', icon: 'flame2', color: '#b26bff', tier: 2 },
  { id: 'combo-20', name: 'Unstoppable', how: 'Reach a 20× combo in a battle.', icon: 'comet', color: '#ff4fd8', tier: 3 },
  { id: 'combo-30', name: 'Godlike', how: 'Reach a 30× combo in a battle. The arena trembles.', icon: 'nova', color: '#fff27a', tier: 3 },
  { id: 'flawless', name: 'Flawless', how: 'Win a battle with 100% accuracy (at least 10 answers).', icon: 'target', color: '#3ddc84', tier: 2 },
  { id: 'untouchable', name: 'Untouchable', how: 'Win a battle without losing a single HP (at least 10 answers).', icon: 'feather', color: '#bfe9ff', tier: 2 },
  { id: 'last-stand', name: 'Last Stand', how: 'Win a battle with 10% HP or less left.', icon: 'heart', color: '#ff4d6d', tier: 2 },
  { id: 'lightning', name: 'Lightning Reflexes', how: 'Win a battle answering in under 2 seconds on average (at least 15 right).', icon: 'stopwatch', color: '#ffe14d', tier: 3 },
  { id: 'giant-slayer', name: 'Giant Slayer', how: 'Beat a player 5 or more levels above you.', icon: 'mountain', color: '#ffa94d', tier: 3 },
  { id: 'machine-breaker', name: 'Machine Breaker', how: 'Beat the N1 AI.', icon: 'robot', color: '#7df9ff', tier: 2 },
  { id: 'kingslayer', name: 'Kingslayer', how: 'Beat an admin in a battle.', icon: 'kingslayer', color: '#ff3d6e', tier: 3 },
  // ── the modes ──
  { id: 'quickdraw', name: 'Quickdraw', how: 'Win a Rapid duel.', icon: 'bolt', color: '#ffe14d', tier: 1 },
  { id: 'calligrapher', name: 'Calligrapher', how: 'Win a Kanji Writing duel.', icon: 'brush', color: '#e8d5a8', tier: 1 },
  { id: 'dragon-slayer', name: 'Dragon Slayer', how: 'Defeat the Black Dragon in Boss Elimination.', icon: 'dragon', color: '#ff5a3a', tier: 2 },
  { id: 'card-sage', name: 'Card Sage', how: 'Win a Deck Duel.', icon: 'cards', color: '#5aa8e8', tier: 2 },
  { id: 'all-schools', name: 'Master of All Schools', how: 'Earn Quickdraw, Calligrapher, Dragon Slayer and Card Sage.', icon: 'wand', color: '#d6a8ff', tier: 3 },
  // ── studying ──
  { id: 'scholar', name: 'Scholar', how: 'Learn 100 spells in Study spells.', icon: 'book', color: '#7fd1ff', tier: 1 },
  { id: 'word-hoard', name: 'Word Hoard', how: 'Learn 500 spells.', icon: 'book', color: '#ffb84d', tier: 2 },
  { id: 'archmage', name: 'Archmage', how: 'Learn 1,000 spells.', icon: 'tome', color: '#a98bff', tier: 3 },
  { id: 'well-versed', name: 'Well Versed', how: 'Master 100 spells (a review interval of 3 weeks or more).', icon: 'gem', color: '#4dd6c8', tier: 2 },
  { id: 'deep-roots', name: 'Deep Roots', how: 'Master 500 spells.', icon: 'gem', color: '#ff8ccf', tier: 3 },
  { id: 'diligent', name: 'Diligent', how: 'Answer 1,000 study cards.', icon: 'hourglass', color: '#5aa8ff', tier: 2 },
  { id: 'tireless', name: 'Tireless', how: 'Answer 10,000 study cards.', icon: 'hourglass', color: '#b26bff', tier: 3 },
  { id: 'marathon', name: 'Marathon Mind', how: 'Answer 300 study cards in one day.', icon: 'stopwatch', color: '#ff9a5a', tier: 2 },
  // ── kana ──
  { id: 'graduate', name: 'Kana Graduate', how: 'Master the 46 basic hiragana in Kana.', icon: 'kana', color: '#ff9ec7', tier: 1 },
  { id: 'hiragana-hero', name: 'Hiragana Hero', how: 'Master all 104 hiragana in Kana — voiced and combinations too.', icon: 'kana', color: '#ff6fa8', tier: 2 },
  { id: 'katakana-knight', name: 'Katakana Knight', how: 'Master all 104 katakana in Kana.', icon: 'kata', color: '#6fc8ff', tier: 2 },
  // ── quizzes, passages, the Daily challenge ──
  { id: 'quiz-whiz', name: 'Quiz Whiz', how: 'Pass 10 JLPT quizzes (7/10 or better).', icon: 'check', color: '#8be37a', tier: 1 },
  { id: 'quiz-master', name: 'Quiz Master', how: 'Pass 100 JLPT quizzes.', icon: 'check', color: '#ffd479', tier: 3 },
  { id: 'ace', name: 'Ace', how: 'Get 10 / 10 in a JLPT quiz.', icon: 'ace', color: '#ff7a7a', tier: 1 },
  { id: 'bookworm', name: 'Bookworm', how: 'Finish 10 reading passages (4/8 or better).', icon: 'scroll', color: '#e8d5a8', tier: 1 },
  { id: 'storyteller', name: 'Storyteller', how: 'Finish 50 reading passages.', icon: 'scroll', color: '#ff9a5a', tier: 2 },
  { id: 'every-word', name: 'Every Word in Place', how: 'Fill in all 8 blanks of a reading passage right.', icon: 'quill', color: '#a98bff', tier: 1 },
  { id: 'perfect-day', name: 'Perfect Day', how: 'Get 10 / 10 in the Daily challenge.', icon: 'calendar', color: '#4dd6c8', tier: 2 },
  { id: 'daily-devotee', name: 'Daily Devotee', how: 'Play the Daily challenge 10 times.', icon: 'calendar', color: '#7fd1ff', tier: 1 },
  { id: 'daily-legend', name: 'Daily Legend', how: 'Play the Daily challenge 50 times.', icon: 'calendar', color: '#ff5a3a', tier: 3 },
  // ── streaks ──
  { id: 'devoted', name: 'Devoted', how: 'Keep a 7-day daily streak.', icon: 'sun', color: '#ffb84d', tier: 1 },
  { id: 'eternal', name: 'Eternal Flame', how: 'Keep a 30-day daily streak.', icon: 'moon', color: '#ff7a1a', tier: 2 },
  { id: 'unbreakable', name: 'Unbreakable', how: 'Keep a 100-day daily streak.', icon: 'flame2', color: '#ff3d6e', tier: 3 },
  { id: 'year-of-fire', name: 'A Year of Fire', how: 'Keep a 365-day daily streak. Legendary.', icon: 'infinity', color: '#fff0a8', tier: 3 },
  // ── levels and friends ──
  { id: 'rising-star', name: 'Rising Star', how: 'Reach level 5.', icon: 'star', color: '#9fd8ff', tier: 1 },
  { id: 'grand-wizard', name: 'Grand Wizard', how: 'Reach level 10.', icon: 'star', color: '#ffd479', tier: 2 },
  { id: 'living-legend', name: 'Living Legend', how: 'Reach level 25.', icon: 'crown', color: '#ff4fd8', tier: 3 },
  { id: 'fellowship', name: 'Fellowship', how: 'Make a friend.', icon: 'people', color: '#8be37a', tier: 1 },
  { id: 'circle-of-friends', name: 'Circle of Friends', how: 'Have 5 friends.', icon: 'people', color: '#ffb84d', tier: 2 },
  { id: 'seasonal', name: 'Seasonal', how: 'Complete a month\'s goals and earn its reward.', icon: 'leaf', color: '#ff8ccf', tier: 2 },
];
export const ACH_PREFIX = 'ach:';
export const achById = (id: string) => ACHIEVEMENTS.find((a) => a.id === id);

/** What the server knows about a player when it checks achievements. */
export interface AchFacts {
  wins: number; level: number; bestStreak: number; learned: number; friends: number; seasonal: number;
  /** 0.9.9.6: lifetime totals (from the daily activity), and a few counts */
  reviews?: number; games?: number; quizzes?: number; passages?: number; challenges?: number; activeDays?: number;
  mastered?: number; starred?: number; custom?: number; nickname?: boolean;
  /** 0.9.9.9.5: Kana section mastery (the 46 basic hiragana; all 104 hiragana; all 104 katakana); the most study cards in a day */
  kanaBasic?: number; kanaHira?: number; kanaKata?: number; bestDay?: number;
  match?: {
    mode: string; outcome: 'win' | 'loss' | 'draw'; accuracy: number; attempts: number; bestCombo: number; forfeited: boolean; beatAdmin?: boolean;
    /** 0.9.9.9.5: your HP at the end (0–1), average answer time and right answers, the N1 AI beaten, a player 5+ levels up beaten */
    hpLeft?: number; avgMs?: number | null; correct?: number; beatN1Bot?: boolean; giant?: boolean;
  };
}

/**
 * 0.9.9.6.1: the counted achievements — which number they follow and the goal — so each badge can show how far
 * along you are ("12 / 50"). The rest (a combo in a battle, a mode won, a perfect Daily) are done in one go.
 */
export type AchMetric = 'wins' | 'level' | 'bestStreak' | 'learned' | 'friends' | 'seasonal' | 'reviews' | 'games' | 'quizzes' | 'passages' | 'challenges' | 'activeDays' | 'mastered' | 'starred' | 'custom'
  | 'kanaBasic' | 'kanaHira' | 'kanaKata' | 'bestDay';
export const ACH_GOALS: Readonly<Record<string, [AchMetric, number]>> = {
  'first-win': ['wins', 1], veteran: ['wins', 25], champion: ['wins', 100], warlord: ['games', 250],
  scholar: ['learned', 100], 'word-hoard': ['learned', 500], archmage: ['learned', 1000],
  'well-versed': ['mastered', 100], 'deep-roots': ['mastered', 500], diligent: ['reviews', 1000], tireless: ['reviews', 10_000], marathon: ['bestDay', 300],
  graduate: ['kanaBasic', 46], 'hiragana-hero': ['kanaHira', 104], 'katakana-knight': ['kanaKata', 104],
  'quiz-whiz': ['quizzes', 10], 'quiz-master': ['quizzes', 100], bookworm: ['passages', 10], storyteller: ['passages', 50],
  'daily-devotee': ['challenges', 10], 'daily-legend': ['challenges', 50],
  devoted: ['bestStreak', 7], eternal: ['bestStreak', 30], unbreakable: ['bestStreak', 100], 'year-of-fire': ['bestStreak', 365],
  'rising-star': ['level', 5], 'grand-wizard': ['level', 10], 'living-legend': ['level', 25],
  fellowship: ['friends', 1], 'circle-of-friends': ['friends', 5], seasonal: ['seasonal', 1],
};
/** the numbers the counted achievements follow (sent with the Progress page) */
export type AchCounts = Partial<Record<AchMetric, number>>;
export const achCounts = (f: AchFacts): AchCounts => ({
  wins: f.wins, level: f.level, bestStreak: f.bestStreak, learned: f.learned, friends: f.friends, seasonal: f.seasonal,
  reviews: f.reviews, games: f.games, quizzes: f.quizzes, passages: f.passages, challenges: f.challenges, activeDays: f.activeDays,
  mastered: f.mastered, starred: f.starred, custom: f.custom, kanaBasic: f.kanaBasic, kanaHira: f.kanaHira, kanaKata: f.kanaKata, bestDay: f.bestDay,
});

/** Every achievement these facts earn (already-earned ones included; `had`: earned before, for the ones made of others). */
export function earnedAchievements(f: AchFacts, had: readonly string[] = []): string[] {
  const out: string[] = [];
  const add = (id: string, ok: boolean) => { if (ok) out.push(id); };
  const n = (x?: number) => x ?? 0;
  // everything counted (ACH_GOALS) — its number reached
  const counts = achCounts(f);
  for (const [id, [metric, goal]] of Object.entries(ACH_GOALS)) add(id, n(counts[metric]) >= goal);
  const m = f.match;
  if (m && !m.forfeited) {
    add('combo-5', m.bestCombo >= 5);
    add('combo-10', m.bestCombo >= 10);
    add('combo-20', m.bestCombo >= 20);
    add('combo-30', m.bestCombo >= 30);
    const won = m.outcome === 'win';
    add('flawless', won && m.accuracy >= 1 && m.attempts >= 10);
    add('untouchable', won && m.attempts >= 10 && m.hpLeft !== undefined && m.hpLeft >= 1);
    add('last-stand', won && m.hpLeft !== undefined && m.hpLeft > 0 && m.hpLeft <= 0.1);
    add('lightning', won && m.avgMs != null && m.avgMs > 0 && m.avgMs < 2000 && n(m.correct) >= 15);
    add('giant-slayer', won && !!m.giant);
    add('machine-breaker', won && !!m.beatN1Bot);
    add('dragon-slayer', won && m.mode === 'boss');
    add('card-sage', won && m.mode === 'deck');
    add('calligrapher', won && m.mode === 'writing');
    add('quickdraw', won && m.mode === 'rapid');
    add('kingslayer', won && !!m.beatAdmin);
  }
  // made of others
  const have = new Set([...had, ...out]);
  add('all-schools', ['quickdraw', 'calligrapher', 'dragon-slayer', 'card-sage'].every((x) => have.has(x)));
  return out;
}

/** The combo milestones a battle can celebrate the moment they happen. */
export const COMBO_ACHIEVEMENTS: ReadonlyArray<[number, string]> = [[5, 'combo-5'], [10, 'combo-10'], [20, 'combo-20'], [30, 'combo-30']];
