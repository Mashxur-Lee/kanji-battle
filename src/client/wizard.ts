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

/** Renders a character map as a crisp SVG; `classes` tags certain pixels for CSS animation. */
function pixelSvg(map: string[], pal: Palette, classes: Record<string, string> = {}): string {
  const rects: string[] = [];
  map.forEach((row, y) => {
    // merge horizontal runs of the same colour to keep the SVG small
    for (let x = 0; x < row.length;) {
      const ch = row[x];
      let w = 1;
      while (row[x + w] === ch) w++;
      if (ch !== '.') rects.push(`<rect x="${x}" y="${y}" width="${w}" height="1" fill="${pal[ch]}"${classes[ch] ? ` class="${classes[ch]}"` : ''}/>`);
      x += w;
    }
  });
  return `<svg viewBox="0 0 ${map[0].length} ${map.length}" shape-rendering="crispEdges" aria-hidden="true">${rects.join('')}</svg>`;
}

export const PALETTES_ALLY: Palette = { ...COMMON, H: '#2f8f6b', h: '#1c5c44', R: '#3aa57c', r: '#22684e', O: '#c6ff7a' };

export function wizardSvg(side: 'me' | 'opp' | 'ally'): string {
  return pixelSvg(WIZARD_MAP, side === 'ally' ? PALETTES_ALLY : PALETTES[side], { O: 'orb' });
}


// ── Black Dragon (boss): 40×30, faces left toward the players. Original design. ──
export const DRAGON_MAP = [
  '........................................',
  '.............H.........WwwwwwwwWWW......',
  '........H...HH.......wwwwwWWWWWwwwwW....',
  '........H..HH........wWWWwWWWWWwWWWww...',
  '.......HH.HHH........wwWWWwWWWWWwWWwwww.',
  '.......HKGHH........WwwWWWwWWWWWwWWWwWWw',
  '.....GGHKHHK........WwwWWWWwWWWWWwWWwWW.',
  '....GKeeKKKKG.......WwWwWWWwWWWWWwWWww..',
  '.GGGKKEEKKKKKG......wWWwWWWWwWWWWWw.Ww..',
  '.kkkkKKKKKKKKKG.....wWWWwWWWwWWWWW......',
  '.....KKKKKKKKKKGH...wWWWwWWWWwWWWW......',
  '..TMTMTMMMKKKKKKK..WwWWWwwWWW...W.......',
  '...TkTkTkkkKKKKKKG.WwWHWWHWWW...........',
  '...........kKKKKKKGHKGKGGKGGH...........',
  '............kKKKKKKKKKKKKKKKKGGH........',
  '.............kKKKKKKKKKKKKKKKKKK........',
  '..............kKKKKKKKKKKKKKKKKKG.......',
  '...............KKKKKKKKKKKKKKKKKK.......',
  '..............GKKKKKKKKKKKKKKKKKKG......',
  '..............KKKKKKKKKKKKKKKKKKKKG.....',
  '..............KKKKKSKKSKKSKKSKKKKKKG....',
  '..............KKKKSKKSKKSKKSKKKkkkkKG...',
  '..............KKKSkkSKKSKKSKKSK....kKG..',
  '.............GKKKK..kkkkkkKKSKK.....kKG.',
  '.............KKKKK........KKKKK......HHH',
  '.............KKKKk........KKKKk......kHH',
  '.............KKKK.........KKKK.........H',
  '...........C.kkkkGG.....C.kkkkGG........',
  '...........C.C.C.C......C.C.C.C.........',
  '........................................',
];

const DRAGON_PALETTE: Palette = {
  K: '#1c1926', k: '#0c0a12', G: '#3d3754', S: '#2a2636', W: '#2b2238', w: '#4b4262',
  H: '#b8b29c', T: '#efe9d8', E: '#39ff7a', e: '#1f9c4c', C: '#cfc9b6', M: '#4a0f16',
};

export function dragonSvg(): string {
  return pixelSvg(DRAGON_MAP, DRAGON_PALETTE, { E: 'eye' });
}
