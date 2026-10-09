import type { Level } from '../shared/protocol';
import { VOCAB } from './vocab';
import { DEFAULT_CONFIG } from './Game';

/**
 * Fair HP: your HP depends on how hard your OPPONENT hits, i.e. on the levels they chose.
 * HP = base + perHit × (opponent's average base damage), so an N1 caster faces ~1000 HP
 * while a かな/N5 caster faces ~250–300 HP. Easier words are answered faster, so the
 * low-level side needs a few more hits — that keeps the match even in practice.
 */
export interface BalanceConfig { base: number; perAvgDamage: number; min: number; max: number }
export const DEFAULT_BALANCE: BalanceConfig = { base: 130, perAvgDamage: 17, min: 150, max: 1200 };

export function averageBaseDamage(levels: readonly Level[], damagePerDifficulty = DEFAULT_CONFIG.damagePerDifficulty): number {
  const words = VOCAB.filter((v) => levels.includes(v.level));
  if (words.length === 0) return 0;
  // Each level is drawn from in proportion to its size, so weight by word count.
  return (words.reduce((s, v) => s + v.difficulty, 0) / words.length) * damagePerDifficulty;
}

export function hpAgainst(opponentLevels: readonly Level[], cfg: BalanceConfig = DEFAULT_BALANCE): number {
  const raw = cfg.base + cfg.perAvgDamage * averageBaseDamage(opponentLevels);
  return Math.min(cfg.max, Math.max(cfg.min, Math.round(raw / 10) * 10));
}

/**
 * Boss HP scales with the party: roughly 45 average hits per player (≈3 minutes of good play),
 * so a strong party and a beginner party both get a real fight.
 */
export const BOSS_HITS_PER_PLAYER = 45;
export function bossHp(partyLevels: ReadonlyArray<readonly Level[]>): number {
  const total = partyLevels.reduce((s, lv) => s + averageBaseDamage(lv) * 1.15 * BOSS_HITS_PER_PLAYER, 0);
  return Math.max(300, Math.round(total / 50) * 50);
}
export const BOSS_PLAYER_HP = 1000;

/** Rapid: both players race on the same words, so both get the same HP (~10 round wins to KO). */
export function rapidHp(levels: readonly Level[]): number {
  return Math.max(150, Math.round((averageBaseDamage(levels) * 1.15 * 10) / 10) * 10);
}
