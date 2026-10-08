// Original pixel-art wizard, drawn from a character map into a crisp SVG (no image files).
// Faces right; the opponent's copy is mirrored with CSS so both face each other.

export const WIZARD_MAP = [
  '......H.........',
  '.....HHh........',
  '.....HHh........',
  '....HHHHh.......',
  '....HYHHh....OO.',
  '...HHHHHHh..OOOO',
  '.YYYYYYYYYY..OO.',
  '...SSSSSS.....T.',
  '...SSESSE.....T.',
  '...SSSSSS.....T.',
  '...BBBBBB....ST.',
  '..RBBBBBBRRRRRT.',
  '.RRRBBBBRRRRr.T.',
  '.RRRRBBRRRrr..T.',
  '.RRRRRRRRRr...T.',
  '.RRRRRYRRRr...T.',
  '.RRRRRYRRRRr..T.',
  'RRRRRRYRRRRRr.T.',
  'RRRRRRYRRRRRrrT.',
  '..KKK...KKK...T.',
];

type Palette = Record<string, string>;
const COMMON: Palette = { Y: '#ffd479', S: '#f2c79e', E: '#1b1530', B: '#ece8f7', T: '#8a5a2b', K: '#2a2440' };
export const PALETTES: Record<'me' | 'opp', Palette> = {
  me: { ...COMMON, H: '#6d4bd8', h: '#432a9c', R: '#7a55e6', r: '#4b2fa6', O: '#6ee7ff' },
  opp: { ...COMMON, H: '#c2364d', h: '#7d1a2e', R: '#d6445c', r: '#8a1f34', O: '#ffb36b' },
};

export function wizardSvg(side: 'me' | 'opp'): string {
  const pal = PALETTES[side];
  const rects: string[] = [];
  WIZARD_MAP.forEach((row, y) => {
    // merge horizontal runs of the same colour to keep the SVG small
    for (let x = 0; x < row.length;) {
      const ch = row[x];
      let w = 1;
      while (row[x + w] === ch) w++;
      if (ch !== '.') rects.push(`<rect x="${x}" y="${y}" width="${w}" height="1" fill="${pal[ch]}"${ch === 'O' ? ' class="orb"' : ''}/>`);
      x += w;
    }
  });
  return `<svg viewBox="0 0 16 20" shape-rendering="crispEdges" aria-hidden="true">${rects.join('')}</svg>`;
}
