import type { Avatar } from '../shared/protocol';

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
  me: { ...COMMON, H: '#2f6fe0', h: '#1d47a6', R: '#3b82f6', r: '#1e4fb8', O: '#6ee7ff' },
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

// ── Level characters (16×20, face right): goblin = かな, kid = N5, human = N4, knight = N3, wizard = N2/N1 ──
const GOBLIN_MAP = [
    '................',
    '................',
    '................',
    '......gGGg......',
    '....gGGGGGGg....',
    '.gg.GGGGGGGG.gg.',
    '..gGGEGGGEGGGg..',
    '...gGGGGGGGGg...',
    '....GTGTGTGG....',
    '.....gGGGGg..C..',
    '....bBBBBBBb.CC.',
    '...GbBBBBBBbGC..',
    '...GbBBbbBBbGC..',
    '....bBBBBBBb.C..',
    '....bBBBBBBb.C..',
    '....bbBBBBbb....',
    '.....GG..GG.....',
    '.....GG..GG.....',
    '....KKK..KKK....',
    '................',
];
const GOBLIN_PAL: Palette = { G: '#6fbf4a', g: '#3f7d2a', E: '#ffe066', T: '#f4f1e6', B: '#7a4e2d', b: '#4f311b', C: '#a0703e', K: '#2a2440' };
const KID_MAP = [
    '................',
    '................',
    '................',
    '................',
    '.....HHHHH......',
    '....HHHHHHH.....',
    '....HSSSSSH.....',
    '....SSESESS.....',
    '....SSSSSSS.....',
    '.....SSmSS...Y..',
    '......SSS...YTY.',
    '....RRRRRRRSST..',
    '...SRRRRRRR..T..',
    '...SRRRRRRR..T..',
    '....RRRRRRR.....',
    '....DDDDDDD.....',
    '....DDD.DDD.....',
    '.....SS..SS.....',
    '....KKK..KKK....',
    '................',
];
const KID_PAL: Palette = { H: '#7a4a24', S: '#f2c79e', E: '#1b1530', m: '#b5654a', R: '#d65a4a', D: '#3d5ca8', Y: '#ffd479', T: '#8a5a2b', K: '#2a2440' };
const HUMAN_MAP = [
    '................',
    '................',
    '.....HHHHH......',
    '....HHHHHHH..V..',
    '....HSSSSSH..V..',
    '....SSESESS..V..',
    '....SSSSSSS..V..',
    '.....SSmSS...V..',
    '......SSS....V..',
    '...RRRRRRRR..V..',
    '..RRRRRRRRRRYYY.',
    '..SRRRRRRRRSS...',
    '..S.RRRRRRR.....',
    '....LLLLLLL.....',
    '....RRRRRRR.....',
    '....DDDDDDD.....',
    '....DDD.DDD.....',
    '....DDD.DDD.....',
    '...KKKK.KKKK....',
    '................',
];
const HUMAN_PAL: Palette = { H: '#3b2a20', S: '#f2c79e', E: '#1b1530', m: '#b5654a', R: '#3e8e5e', L: '#5a3a1e', D: '#4a4a6a', V: '#d9dde8', Y: '#ffd479', K: '#2a2440' };
const KNIGHT_MAP = [
    '......PP........',
    '.....PPP........',
    '.....MMMM.......',
    '....MMMMMM......',
    '....MMMMMMM.....',
    '....MmEEEEM.....',
    '....MMMMMMM.....',
    '....mMMMMMm.....',
    '.....mMMMm......',
    '...mMMMMMMMAAAA.',
    '..mMMMMMMMMAYYA.',
    '..MMMMMMMMMAYYA.',
    '..M.MMMMMMMAAAA.',
    '..S.mmmmmmm.AA..',
    '....MMMMMMM.....',
    '....mMMMMMm.....',
    '....MMM.MMM.....',
    '....mmm.mmm.....',
    '...KKKK.KKKK....',
    '................',
];
const KNIGHT_PAL: Palette = { P: '#d64545', M: '#b8c0cc', m: '#6e7686', E: '#14121c', A: '#3d5ca8', Y: '#ffd479', S: '#f2c79e', K: '#2a2440' };

const WITCH_PAL: Palette = { ...COMMON, H: '#2a1f3d', h: '#140e20', Y: '#9b59ff', S: '#a8d88a', E: '#2a1430', B: '#3a2a4a', R: '#5b2a86', r: '#3d1a5c', O: '#b6ff5a' };
/** Deck Duel heroes: goblin, knight, witch, wizard. */
export function heroSvg(hero: 'goblin' | 'knight' | 'witch' | 'wizard', side: 'me' | 'opp'): string {
  if (hero === 'witch') return pixelSvg(WIZARD_MAP, WITCH_PAL, { O: 'orb' });
  return avatarSvg(hero, side);
}

export const CHARACTER_MAPS = { goblin: GOBLIN_MAP, kid: KID_MAP, human: HUMAN_MAP, knight: KNIGHT_MAP, wizard: WIZARD_MAP };

/** The fighter for a player: their level's character. Wizards are blue for you, red for the opponent, green for an ally. */
export function avatarSvg(avatar: Avatar, side: 'me' | 'opp' | 'ally'): string {
  switch (avatar) {
    case 'goblin': return pixelSvg(GOBLIN_MAP, GOBLIN_PAL);
    case 'kid': return pixelSvg(KID_MAP, KID_PAL, { Y: 'orb' });
    case 'human': return pixelSvg(HUMAN_MAP, HUMAN_PAL, { V: 'orb' });
    case 'knight': return pixelSvg(KNIGHT_MAP, KNIGHT_PAL, { Y: 'orb' });
    default: return wizardSvg(side);
  }
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
