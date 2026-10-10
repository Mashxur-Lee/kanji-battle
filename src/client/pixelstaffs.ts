// Pixel-art versions of the magic staffs (the 3D ones live in staffs3d.ts), so the 2D characters hold the
// staff you equipped too. 5 × 20 pixels each; the hand grips row GRIP of the centre column; 'O' is the gem.

import { staffOf } from '../shared/progress';

export const STAFF_W = 5, STAFF_H = 20, GRIP = 10;

const MAPS: Record<string, string[]> = {
  verdant: [
    '.l.l.',
    'b.l.b',
    'b.O.b',
    'bOOOb',
    '.bOb.',
    '..w..',
    '.vwl.',
    '..wv.',
    '.vw..',
    '..wv.',
    '..w..',
    '.vw..',
    '..wv.',
    '.lw..',
    '..wv.',
    '.vw..',
    '..w..',
    '..wl.',
    '..w..',
    '..d..',
  ],
  ember: [
    '..F..',
    '.F.F.',
    'F.O.F',
    'fOOOf',
    '.dOd.',
    '..d..',
    '..w..',
    '.fw..',
    '..wf.',
    '.fw..',
    '..w..',
    '..wf.',
    '.fw..',
    '..wf.',
    '.fw..',
    '..w..',
    '..wf.',
    '..w..',
    '..d..',
    '..f..',
  ],
  tide: [
    '.ccc.',
    'c...c',
    'c.O..',
    'cOOO.',
    'c.O.c',
    '.ccc.',
    '..w..',
    '..wc.',
    '.cw..',
    '..ws.',
    '..w..',
    '.sw..',
    '..wc.',
    '.cw..',
    '..ws.',
    '..w..',
    '..w..',
    '.ccc.',
    '..c..',
    '..c..',
  ],
  storm: [
    '..s..',
    'r.s.r',
    's.O.s',
    'sOOOs',
    'r.O.r',
    '.sss.',
    '..w..',
    '..r..',
    '..w..',
    '.sws.',
    '..w..',
    '..r..',
    '..w..',
    '.sws.',
    '..w..',
    '..r..',
    '..w..',
    '..w..',
    '.rrr.',
    '..r..',
  ],
  void: [
    '*.c.*',
    '..c..',
    's.O.s',
    'sOOOs',
    '.cOc.',
    's.c.s',
    '.sws.',
    '..wc.',
    '.sw..',
    '..ws.',
    '.cw..',
    '..ws.',
    '.sw..',
    '..wc.',
    '.sw..',
    '..ws.',
    '..w..',
    '.ccc.',
    '..c..',
    '..c..',
  ],
};

const PALS: Record<string, Record<string, string>> = {
  verdant: { w: '#7a4e2d', d: '#4f311b', b: '#8a5a33', v: '#3f9a3a', l: '#6ad04e', O: '#6dff6a' },
  ember: { w: '#2e1e1a', d: '#160c0a', f: '#ff5a1a', F: '#ffb347', O: '#ff7a1a' },
  tide: { w: '#3a4250', s: '#c8d4e4', c: '#6fd0ff', O: '#3fb8ff' },
  storm: { w: '#2a2440', s: '#8c86a8', r: '#b26bff', O: '#d6b0ff' },
  void: { w: '#5a6688', s: '#e4e8f2', c: '#8fc8ff', O: '#4a7dff', '*': '#ffffff' },
};

/** #rrggbb blended towards another colour */
function mix(a: string, b: string, t: number) {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [x, y] = [p(a), p(b)];
  return `#${x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, '0')).join('')}`;
}

/** The staff as coloured pixels: [x, y, colour, isGem]. */
export function staffPixels(id: string | null | undefined): Array<[number, number, string, boolean]> {
  const def = staffOf(id);
  const shape = def.base ?? def.id;
  const map = MAPS[shape];
  const pal: Record<string, string> = { ...PALS[shape] };
  if (def.tint) for (const k of Object.keys(pal)) pal[k] = mix(pal[k], def.tint, k === 'O' ? 0 : 0.55);
  if (def.tint) pal.O = def.gem;
  const out: Array<[number, number, string, boolean]> = [];
  map.forEach((row, y) => [...row].forEach((ch, x) => { if (ch !== '.') out.push([x, y, pal[ch], ch === 'O']); }));
  return out;
}

/** The staff on its own, as a crisp SVG (Customize, tooltips). */
export function pixelStaffSvg(id: string | null | undefined): string {
  const rects = staffPixels(id).map(([x, y, c, gem]) => `<rect x="${x}" y="${y}" width="1" height="1" fill="${c}"${gem ? ' class="orb"' : ''}/>`);
  return `<svg viewBox="0 0 ${STAFF_W} ${STAFF_H}" shape-rendering="crispEdges" aria-hidden="true">${rects.join('')}</svg>`;
}
