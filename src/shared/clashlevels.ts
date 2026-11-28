// 0.9.9.9.9.7 (round 4, the owner: "in private lobby i still cant select multiple levels for grammar clash"): a Grammar
// Clash game's grammar can come from several JLPT levels. Carried as one string so the messages stay as they were:
// 'mix' (every level) or the levels joined by commas, from N5 up ('N5,N4').

export const CLASH_LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;
export type ClashLevelId = (typeof CLASH_LEVELS)[number];

/** the levels a setting means ('mix': all five); unknown parts are dropped */
export function clashLevels(v: string): ClashLevelId[] {
  if (v === 'mix') return [...CLASH_LEVELS];
  const parts = new Set(String(v).split(',').map((x) => x.trim()));
  return CLASH_LEVELS.filter((l) => parts.has(l));
}
/** a setting as stored: 'mix' for all five, else the levels in order; N5 when nothing valid was given */
export function cleanClashLevel(v: unknown): string {
  const ls = clashLevels(String(v ?? ''));
  return !ls.length ? 'N5' : ls.length === CLASH_LEVELS.length ? 'mix' : ls.join(',');
}
/** for people: "All levels" is the caller's to translate; otherwise "N5 · N4" */
export const clashLevelText = (v: string) => (v === 'mix' ? 'All levels' : clashLevels(v).join(' · '));
