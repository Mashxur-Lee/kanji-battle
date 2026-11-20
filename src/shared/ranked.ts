// 0.9.9.9.9: the ranked ladder. Every 1v1 match from the online queue (Reading, Writing, Rapid, Deck Duel) moves both
// players' rating, Elo-style: beating someone rated higher gains more, losing to someone rated lower costs more.
// Not rated: private rooms, games against bots, Boss (a team against the dragon), and a rematch in the same room
// (two friends could trade wins there). Leaving a ranked match counts as a loss.
// Everyone starts at 1000. The first PLACEMENT games move the rating faster, then it settles.

export const START_RATING = 1000;
export const PLACEMENT = 5;
const K_NEW = 40, K = 24;
const FLOOR = 100;

/** the chance A beats B, from their ratings */
export const expected = (a: number, b: number) => 1 / (1 + 10 ** ((b - a) / 400));

export interface RatedSide { rating: number; games: number }
/** both players' changes for one match: `score` is A's result (1 win, 0.5 draw, 0 loss) */
export function rate(a: RatedSide, b: RatedSide, score: 0 | 0.5 | 1): [number, number] {
  const ea = expected(a.rating, b.rating);
  const ka = a.games < PLACEMENT ? K_NEW : K, kb = b.games < PLACEMENT ? K_NEW : K;
  let da = Math.round(ka * (score - ea)), db = Math.round(kb * ((1 - score) - (1 - ea)));
  // (a win always gains at least 1, a loss always costs at least 1 — a draw between equals is 0)
  if (score === 1) { da = Math.max(1, da); db = Math.min(-1, db); }
  if (score === 0) { da = Math.min(-1, da); db = Math.max(1, db); }
  return [Math.max(FLOOR, a.rating + da) - a.rating, Math.max(FLOOR, b.rating + db) - b.rating];
}

/** the tiers, from the lowest; a tier shows once the placement games are played */
export const TIERS = [
  { id: 'apprentice', name: 'Apprentice', min: 0, color: '#9aa3b5' },
  { id: 'adept', name: 'Adept', min: 900, color: '#7fd68b' },
  { id: 'mage', name: 'Mage', min: 1100, color: '#5fb8ff' },
  { id: 'archmage', name: 'Archmage', min: 1300, color: '#b98cff' },
  { id: 'sage', name: 'Sage', min: 1500, color: '#ffc95c' },
  { id: 'grand', name: 'Grand Sage', min: 1700, color: '#ff7a8a' },
] as const;
export type Tier = (typeof TIERS)[number];
export const tierOf = (rating: number): Tier => [...TIERS].reverse().find((t) => rating >= t.min) ?? TIERS[0];

/** what a player's card and the ladder show */
export interface RankView { rating: number; games: number; tier: Tier['id'] | null; placement: number | null; rank?: number | null }
export const rankView = (rating: number | undefined, games: number | undefined, rank?: number | null): RankView => {
  const r = rating ?? START_RATING, g = games ?? 0;
  return { rating: r, games: g, tier: g >= PLACEMENT ? tierOf(r).id : null, placement: g < PLACEMENT ? g : null, ...(rank !== undefined ? { rank } : {}) };
};
