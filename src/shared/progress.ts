import type { Avatar, Level } from './protocol';

// ── XP & levels ────────────────────────────────────────────────────────────────
/** Level n is reached at n × 1000 XP (1000 → level 1, 2000 → level 2, …). */
export const XP_PER_LEVEL = 1000;
export const levelOf = (xp: number) => Math.floor(Math.max(0, xp) / XP_PER_LEVEL);
export const levelProgress = (xp: number) => (Math.max(0, xp) % XP_PER_LEVEL) / XP_PER_LEVEL;

export type MatchOutcome = 'win' | 'loss' | 'draw';
/** Win: 300 + accuracy%; loss: 50 + accuracy%; draw in between. Deck mode pays more (spec). */
export function xpFor(outcome: MatchOutcome, accuracy: number, mode: string): number {
  const acc = Math.round(Math.max(0, Math.min(1, accuracy)) * 100);
  if (mode === 'deck') return outcome === 'win' ? 4000 : outcome === 'draw' ? 2500 : 1500;
  return (outcome === 'win' ? 300 : outcome === 'draw' ? 150 : 50) + acc;
}

// ── crit ───────────────────────────────────────────────────────────────────────
/** Every learned spell (graduated flashcard) adds 0.1% crit, capped at 50%. Crits hit ×1.5. */
export const CRIT_PER_WORD = 0.001;
export const CRIT_CAP = 0.5;
export const CRIT_MULTIPLIER = 1.5;
export const critFor = (learnedWords: number) => Math.min(CRIT_CAP, Math.max(0, learnedWords) * CRIT_PER_WORD);
export const critText = (crit: number) => `${(crit * 100).toFixed(1).replace(/\.0$/, '')}%`;

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
