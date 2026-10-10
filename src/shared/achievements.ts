// Achievements: 20 badges shown on the Progress page (locked until earned; hover says how). Earned ones are
// stored in the account's `unlocks` as "ach:<id>" and checked on the server — after every match, and
// whenever the profile loads (streaks, spells learned, friends, level, monthly rewards).

export type AchIcon = 'sword' | 'swords' | 'crown' | 'flame' | 'flame2' | 'comet' | 'target' | 'dragon' | 'cards' | 'brush' | 'bolt'
  | 'book' | 'tome' | 'kana' | 'sun' | 'moon' | 'calendar' | 'people' | 'leaf' | 'star';
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
];
export const ACH_PREFIX = 'ach:';
export const achById = (id: string) => ACHIEVEMENTS.find((a) => a.id === id);

/** What the server knows about a player when it checks achievements. */
export interface AchFacts {
  wins: number; level: number; bestStreak: number; learned: number; friends: number; seasonal: number;
  match?: { mode: string; outcome: 'win' | 'loss' | 'draw'; accuracy: number; attempts: number; bestCombo: number; forfeited: boolean };
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
  }
  return out;
}

/** The combo milestones a battle can celebrate the moment they happen. */
export const COMBO_ACHIEVEMENTS: ReadonlyArray<[number, string]> = [[5, 'combo-5'], [10, 'combo-10'], [20, 'combo-20']];
