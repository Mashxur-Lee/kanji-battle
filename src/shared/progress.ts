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

// ── seasons: each month has goals; completing them unlocks that month's reward (a flame or a staff) ──
/** Twelve themes, one per calendar month; even months give a flame, odd months a staff. */
export const SEASONS = [
  { month: 1, name: 'Frost', reward: 'staff:frost' },
  { month: 2, name: 'Sakura', reward: 'flame:sakura' },
  { month: 3, name: 'Blossom', reward: 'staff:blossom' },
  { month: 4, name: 'Rain', reward: 'flame:rain' },
  { month: 5, name: 'Jade', reward: 'staff:jade' },
  { month: 6, name: 'Sun', reward: 'flame:sun' },
  { month: 7, name: 'Abyss', reward: 'staff:abyss' },
  { month: 8, name: 'Thunder', reward: 'flame:thunder' },
  { month: 9, name: 'Moon', reward: 'staff:moon' },
  { month: 10, name: 'Harvest', reward: 'flame:harvest' },
  { month: 11, name: 'Maple', reward: 'staff:maple' },
  { month: 12, name: 'Starlight', reward: 'flame:starlight' },
] as const;
/** The same three goals every month (counted on the player's own calendar days). */
export const MONTH_GOALS = [
  { id: 'days', label: 'Play on 12 different days', target: 12 },
  { id: 'wins', label: 'Win 10 games', target: 10 },
  { id: 'reviews', label: 'Pass 150 flashcards in Study spells', target: 150 },
] as const;
export type MonthGoalId = (typeof MONTH_GOALS)[number]['id'];
export const seasonOf = (day: string) => SEASONS[Number(day.slice(5, 7)) - 1] ?? SEASONS[0];

// ── combo flames (5+ in a row, and Deck Duel powers): by level, or a month's reward ───────────────
export interface FlameDef { id: string; name: string; level: number; color: string; season?: number }
export const FLAMES: readonly FlameDef[] = [
  { id: 'blue', name: 'Light blue', level: 0, color: '#6ee7ff' },
  { id: 'purple', name: 'Purple', level: 5, color: '#b26bff' },
  { id: 'sakura', name: 'Sakura', level: 0, color: '#ff8ccf', season: 2 },
  { id: 'rain', name: 'Rain', level: 0, color: '#3fd9c4', season: 4 },
  { id: 'sun', name: 'Sun', level: 0, color: '#ffd23f', season: 6 },
  { id: 'thunder', name: 'Thunder', level: 0, color: '#e8e2ff', season: 8 },
  { id: 'harvest', name: 'Harvest', level: 0, color: '#ff8a2a', season: 10 },
  { id: 'starlight', name: 'Starlight', level: 0, color: '#fff0a0', season: 12 },
];
export type FlameId = string;
export const isFlame = (x: unknown): x is FlameId => FLAMES.some((f) => f.id === x);
export const flameUnlocked = (f: FlameId, xp: number, unlocks: readonly string[] = []) => {
  const d = FLAMES.find((x) => x.id === f);
  if (!d) return false;
  return d.season ? unlocks.includes(`flame:${d.id}`) : levelOf(xp) >= d.level;
};
export const flameColor = (f: string | null | undefined) => (FLAMES.find((x) => x.id === f) ?? FLAMES[0]).color;
/** The four fire shades (tips → base, "r,g,b") the 2D flames are drawn with, from a flame's colour. */
export function flameShades(f: string | null | undefined): [string, string, string, string] {
  const hex = flameColor(f).slice(1);
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
  const h = d === 0 ? 0 : max === r ? ((g - b) / d + 6) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  const hue = h * 60;
  const pale = l > 0.85; // starlight / thunder: a whiter fire
  const rgb = (s: number, li: number) => {
    const c = (1 - Math.abs(2 * li - 1)) * s, x = c * (1 - Math.abs(((hue / 60) % 2) - 1)), m = li - c / 2;
    const [a, bb, cc] = hue < 60 ? [c, x, 0] : hue < 120 ? [x, c, 0] : hue < 180 ? [0, c, x] : hue < 240 ? [0, x, c] : hue < 300 ? [x, 0, c] : [c, 0, x];
    return [a, bb, cc].map((v) => Math.round((v + m) * 255)).join(',');
  };
  return pale
    ? [rgb(1, 0.97), rgb(1, 0.86), rgb(0.85, 0.7), rgb(0.7, 0.45)]
    : [rgb(1, 0.93), rgb(1, 0.72), rgb(0.9, 0.55), rgb(0.85, 0.36)];
}

// ── magic staffs: by best login streak, or a month's reward (a recoloured classic staff) ──────────
export interface StaffDef { id: string; name: string; streak: number; gem: string; blurb: string; season?: number; base?: string; tint?: string }
export const STAFFS: readonly StaffDef[] = [
  { id: 'verdant', name: 'Verdant Staff', streak: 0, gem: '#6dff6a', blurb: 'Carved from an ancient tree. It channels the natural energy of the earth and life.' },
  { id: 'ember', name: 'Ember Staff', streak: 5, gem: '#ff7a1a', blurb: 'Forged from volcanic rock and blessed by fire spirits.' },
  { id: 'tide', name: 'Tide Staff', streak: 10, gem: '#3fb8ff', blurb: 'Crafted from crystal and oceanic runes. It flows with the tides.' },
  { id: 'storm', name: 'Storm Staff', streak: 15, gem: '#b26bff', blurb: 'A relic of the sky temples. It channels lightning.' },
  { id: 'void', name: 'Void Staff', streak: 20, gem: '#4a7dff', blurb: 'An ancient, otherworldly artifact. It bends reality and commands the unknown.' },
  { id: 'frost', name: 'Frost Staff', streak: 0, season: 1, base: 'tide', tint: '#d8f4ff', gem: '#bfefff', blurb: 'January reward. Rimed with ice that never melts.' },
  { id: 'blossom', name: 'Blossom Staff', streak: 0, season: 3, base: 'verdant', tint: '#ffb8d8', gem: '#ff7ab8', blurb: 'March reward. A branch that flowers whenever it casts.' },
  { id: 'jade', name: 'Jade Staff', streak: 0, season: 5, base: 'ember', tint: '#7dffb0', gem: '#3dff8a', blurb: 'May reward. Carved from one piece of temple jade.' },
  { id: 'abyss', name: 'Abyss Staff', streak: 0, season: 7, base: 'tide', tint: '#3a5cff', gem: '#2a4dff', blurb: 'July reward. Pulled from the deepest trench of the sea.' },
  { id: 'moon', name: 'Moon Staff', streak: 0, season: 9, base: 'verdant', tint: '#f2f0ff', gem: '#fff6c8', blurb: 'September reward. Silver light of the harvest moon.' },
  { id: 'maple', name: 'Maple Staff', streak: 0, season: 11, base: 'ember', tint: '#ff5a3a', gem: '#ff3a2a', blurb: 'November reward. Burning red like autumn leaves.' },
];
export type StaffId = string;
export const isStaff = (x: unknown): x is StaffId => STAFFS.some((s) => s.id === x);
/** Classic staffs unlock by your best login streak (a broken streak never takes one away); seasonal ones by monthly goals. */
export const staffUnlocked = (s: StaffId, bestStreak: number, unlocks: readonly string[] = []) => {
  const d = STAFFS.find((x) => x.id === s);
  if (!d) return false;
  return d.season ? unlocks.includes(`staff:${d.id}`) : (bestStreak ?? 0) >= d.streak;
};
export const staffOf = (s: string | null | undefined) => STAFFS.find((x) => x.id === s) ?? STAFFS[0];

// ── gradual unlocks: new players start with Reading and Rapid ──────────────────────────────────
/** Level needed to create a room or queue for a mode (joining a friend's room by code or invite is always allowed). */
export const MODE_LEVEL: Record<string, number> = { reading: 0, rapid: 0, writing: 1, boss: 1, deck: 2 };
export const modeUnlocked = (mode: string, xp: number, admin = false) => admin || levelOf(xp) >= (MODE_LEVEL[mode] ?? 0);

/** More "Struggling spells" waiting than this → the game modes lock until you study them. */
export const STUDY_LOCK = 100;

// ── characters ─────────────────────────────────────────────────────────────────
export type { Avatar };
const AVATAR_BY_LEVEL: Record<Level, Avatar> = { KANA: 'goblin', N5: 'kid', N4: 'human', N3: 'knight', N2: 'witch', N1: 'wizard' };
const ORDER: Level[] = ['KANA', 'N5', 'N4', 'N3', 'N2', 'N1'];
/** Your fighter is decided by the hardest level you picked. */
export function avatarFor(levels: readonly Level[]): Avatar {
  const top = [...levels].sort((a, b) => ORDER.indexOf(b) - ORDER.indexOf(a))[0] ?? 'N5';
  return AVATAR_BY_LEVEL[top];
}
export const AVATAR_LABEL: Record<Avatar, string> = { goblin: 'Goblin', kid: 'Apprentice', human: 'Adventurer', knight: 'Knight', witch: 'Witch', wizard: 'Wizard' };

// ── hiragana first: a new player who hasn't mastered かな yet only gets かな words (Settings → "I've mastered hiragana") ──
export const KANA_BEGINNER = 'flag:kana-beginner';
export const isKanaBeginner = (unlocks?: readonly string[] | null) => !!unlocks?.includes(KANA_BEGINNER);
/** A beginner's levels: only かな (and at least かな). */
export function levelsFor<T extends string>(levels: readonly T[], beginner: boolean): T[] {
  if (!beginner) return [...levels];
  return ['KANA' as T];
}

/** ISO week number of a day ('YYYY-MM-DD'): weeks start on Monday, week 1 holds the year's first Thursday. */
export function isoWeek(day: string): number {
  const d = new Date(`${day}T00:00:00Z`);
  const dow = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dow); // the Thursday of this week decides the year
  const yearStart = Date.UTC(d.getUTCFullYear(), 0, 1);
  return Math.ceil(((d.getTime() - yearStart) / 86_400_000 + 1) / 7);
}
