import type { Avatar, Level } from './protocol';

// ── XP & levels ────────────────────────────────────────────────────────────────
/**
 * Each level costs 1000 XP more than the last: 1000 to reach Lv 1, then 2000 more for Lv 2, 3000 more
 * for Lv 3 … so reaching level n takes 1000 × n(n+1)/2 XP in total (Lv 5 = 15k, Lv 10 = 55k, Lv 20 = 210k).
 */
export const XP_PER_LEVEL = 1000;
/** XP needed to go from level n to n+1. */
export const xpToNext = (level: number) => XP_PER_LEVEL * (level + 1);
/** Total XP at which level n starts. */
export const xpForLevel = (level: number) => (XP_PER_LEVEL * level * (level + 1)) / 2;
export function levelOf(xp: number) {
  let n = Math.floor((Math.sqrt(1 + (8 * Math.max(0, xp)) / XP_PER_LEVEL) - 1) / 2);
  while (xpForLevel(n + 1) <= xp) n++; // guard against float rounding at exact thresholds
  while (n > 0 && xpForLevel(n) > xp) n--;
  return n;
}
/**
 * Before v0.5 every level cost a flat 1000 XP. Saved XP from then is converted once so nobody loses the
 * level (and the progress inside it) they had already earned.
 */
export function legacyXpToCurrent(xp: number) {
  const level = Math.floor(Math.max(0, xp) / XP_PER_LEVEL);
  const frac = (Math.max(0, xp) % XP_PER_LEVEL) / XP_PER_LEVEL;
  return xpForLevel(level) + Math.round(frac * xpToNext(level));
}
/** XP earned inside the current level, and how much that level needs. */
export function levelXp(xp: number) {
  const level = levelOf(xp);
  return { level, into: Math.max(0, xp) - xpForLevel(level), need: xpToNext(level) };
}
export const levelProgress = (xp: number) => { const l = levelXp(xp); return l.into / l.need; };

export type MatchOutcome = 'win' | 'loss' | 'draw';
/** Win: 300 + accuracy%; loss: 50 + accuracy%; draw in between. Deck mode pays more (spec). */
export function xpFor(outcome: MatchOutcome, accuracy: number, mode: string): number {
  const acc = Math.round(Math.max(0, Math.min(1, accuracy)) * 100);
  if (mode === 'deck') return outcome === 'win' ? 4000 : outcome === 'draw' ? 2500 : 1500;
  return (outcome === 'win' ? 300 : outcome === 'draw' ? 150 : 50) + acc;
}

// ── crit ───────────────────────────────────────────────────────────────────────
/**
 * Daily crit: everyone starts the day at 1%. Every spell learned today (a flashcard passed — Hard, Okay
 * or Easy — counted once per card per day) adds +1%, up to 50%. At local midnight it drops back to 1%.
 * A crit hits ×1.5.
 */
export const CRIT_BASE = 0.01;
export const CRIT_PER_WORD = 0.01;
export const CRIT_CAP = 0.5;
export const CRIT_MULTIPLIER = 1.5;
export const critFor = (learnedToday: number) => Math.min(CRIT_CAP, CRIT_BASE + Math.max(0, learnedToday) * CRIT_PER_WORD);
/** Today's crit from the stored counter (`expiresAt` = the player's next local midnight). */
export const dailyCrit = (count: number, expiresAt: number, now = Date.now()) => (now < expiresAt ? critFor(count) : CRIT_BASE);
export const critText = (crit: number) => `${(crit * 100).toFixed(1).replace(/\.0$/, '')}%`;
/** The UTC instant of the next local midnight, from the player's YYYY-MM-DD and getTimezoneOffset(). */
export function nextLocalMidnight(today: string, tzOffsetMin: number): number {
  const [y, m, d] = today.split('-').map(Number);
  return Date.UTC(y, m - 1, d + 1) + tzOffsetMin * 60_000;
}

// ── backgrounds ────────────────────────────────────────────────────────────────
export const BACKGROUNDS = [
  { id: 'forest', name: 'Forest', level: 0 },
  { id: 'swamp', name: 'Swamp', level: 5 },
  { id: 'plains', name: 'Plains', level: 10 },
  { id: 'castle', name: 'Castle', level: 15 },
  { id: 'worldtree', name: 'World Tree', level: 20 },
] as const;
export type BackgroundId = (typeof BACKGROUNDS)[number]['id'];
export const isBackground = (x: unknown): x is BackgroundId => BACKGROUNDS.some((b) => b.id === x);
export const unlocked = (bg: BackgroundId, xp: number) => levelOf(xp) >= BACKGROUNDS.find((b) => b.id === bg)!.level;

// ── characters ─────────────────────────────────────────────────────────────────
export type { Avatar };
const AVATAR_BY_LEVEL: Record<Level, Avatar> = { KANA: 'goblin', N5: 'kid', N4: 'human', N3: 'knight', N2: 'wizard', N1: 'wizard' };
const ORDER: Level[] = ['KANA', 'N5', 'N4', 'N3', 'N2', 'N1'];
/** Your fighter is decided by the hardest level you picked. */
export function avatarFor(levels: readonly Level[]): Avatar {
  const top = [...levels].sort((a, b) => ORDER.indexOf(b) - ORDER.indexOf(a))[0] ?? 'N5';
  return AVATAR_BY_LEVEL[top];
}
export const AVATAR_LABEL: Record<Avatar, string> = { goblin: 'Goblin', kid: 'Apprentice', human: 'Adventurer', knight: 'Knight', wizard: 'Wizard' };
