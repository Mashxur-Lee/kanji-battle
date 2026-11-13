// 0.9.9.9.6.2: the streak flame — the player's own 30 weekly flames (public/flames/week-NN.webp, made by the player;
// see their README). The fire changes every week (7 streak days): six shapes — classic, sparks, hitodama, arcane,
// blaze, trident — and then the next colour — orange, red, blue, green, purple. Week 1 is orange classic … week 30
// purple trident, and it stays there. No streak: the grey flame (public/flames/lost-classic.webp).
export const FLAME_SHAPES = ['classic', 'sparks', 'hitodama', 'arcane', 'blaze', 'trident'] as const;
export const FLAME_COLOURS = ['orange', 'red', 'blue', 'green', 'purple'] as const;
const SHAPE_NAME: Record<string, string> = { classic: 'Classic flame', sparks: 'Sparks', hitodama: 'Hitodama', arcane: 'Arcane flame', blaze: 'Blaze', trident: 'Trident' };
const COLOUR_HEX: Record<string, string> = { orange: '#ff8a2a', red: '#ff4057', blue: '#3aa0ff', green: '#3ddc84', purple: '#a66bff' };
export const FLAME_WEEKS = 30;
/** the flame's week: days 1–7 week 1, 8–14 week 2 … (no streak: 0; after week 30 it stays 30) */
export const flameWeek = (n: number) => (n < 1 ? 0 : Math.min(FLAME_WEEKS, Math.floor((n - 1) / 7) + 1));
/** the first streak day of a week */
export const weekStart = (w: number) => (w - 1) * 7 + 1;
export function flameOf(n: number) {
  const week = flameWeek(n);
  if (!week) return { week, shape: 'classic', colour: '', hex: '#9a9aae', src: '/flames/lost-classic.webp', name: 'No flame yet' };
  const shape = FLAME_SHAPES[(week - 1) % 6], colour = FLAME_COLOURS[Math.floor((week - 1) / 6)];
  return { week, shape, colour, hex: COLOUR_HEX[colour], src: `/flames/week-${String(week).padStart(2, '0')}.webp`, name: SHAPE_NAME[shape] };
}
