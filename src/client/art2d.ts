// The 2D characters, dragon and staffs (0.9.9.3): vector paintings after the character concept sheets — the
// same people as the 3D models (faceted, low-poly look, light from the upper left), replacing the old pixel
// sprites. Each is one SVG string (no image files). Characters are 160 × 200 and face right (the opponent's
// copy is mirrored with CSS); feet on y = 197; the staff is held in the hand at the right.

import { staffOf } from '../shared/progress';

let uid = 0;
/** gradient ids must be unique on the page (several characters are drawn at once) */
const nid = () => `a${(uid++).toString(36)}`;

// ── colour helpers ────────────────────────────────────────────────────────────────
const hexRgb = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
const rgbHex = (c: number[]) => `#${c.map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('')}`;
export const mix = (a: string, b: string, t: number) => { const x = hexRgb(a), y = hexRgb(b); return rgbHex(x.map((v, i) => v + (y[i] - v) * t)); };
const dk = (c: string, t = 0.3) => mix(c, '#0a0612', t);
const lt = (c: string, t = 0.3) => mix(c, '#ffffff', t);

/** Small SVG builder: defs (gradients) + shapes. */
class Pic {
  defs: string[] = [];
  body: string[] = [];
  /** a left-lit gradient across a shape: light, base, shadow */
  lit(c: string, angle: 'h' | 'v' | 'd' = 'h', amt = 0.28): string {
    const id = nid();
    const [x2, y2] = angle === 'h' ? [1, 0] : angle === 'v' ? [0, 1] : [1, 1];
    this.defs.push(`<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${lt(c, amt * 0.7)}"/><stop offset=".45" stop-color="${c}"/><stop offset="1" stop-color="${dk(c, amt)}"/></linearGradient>`);
    return `url(#${id})`;
  }
  radial(stops: Array<[number, string, number?]>, cx = 0.5, cy = 0.5, r = 0.5): string {
    const id = nid();
    this.defs.push(`<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}">${stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== undefined ? ` stop-opacity="${a}"` : ''}/>`).join('')}</radialGradient>`);
    return `url(#${id})`;
  }
  linear(stops: Array<[number, string, number?]>, x2 = 0, y2 = 1): string {
    const id = nid();
    this.defs.push(`<linearGradient id="${id}" x1="0" y1="0" x2="${x2}" y2="${y2}">${stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== undefined ? ` stop-opacity="${a}"` : ''}/>`).join('')}</linearGradient>`);
    return `url(#${id})`;
  }
  p(d: string, fill: string, extra = '') { this.body.push(`<path d="${d}" fill="${fill}"${extra ? ' ' + extra : ''}/>`); return this; }
  /** a stroked path (no fill) */
  s(d: string, stroke: string, w: number, extra = '') { this.body.push(`<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"${extra ? ' ' + extra : ''}/>`); return this; }
  e(cx: number, cy: number, rx: number, ry: number, fill: string, extra = '') { this.body.push(`<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}"${extra ? ' ' + extra : ''}/>`); return this; }
  raw(s: string) { this.body.push(s); return this; }
  svg(w: number, h: number, cls = 'art') { return `<svg viewBox="0 0 ${w} ${h}" class="${cls}" aria-hidden="true"><defs>${this.defs.join('')}</defs>${this.body.join('')}</svg>`; }
  inner() { return `<defs>${this.defs.join('')}</defs>${this.body.join('')}`; }
}

/** facets: a few light/dark triangles over an area, for the low-poly look */
function facets(pic: Pic, pts: Array<[number, number, number, number, number, number]>, light: boolean[]) {
  pts.forEach((t, i) => pic.p(`M${t[0]} ${t[1]}L${t[2]} ${t[3]}L${t[4]} ${t[5]}Z`, light[i] ? '#ffffff' : '#000000', `opacity="${light[i] ? 0.09 : 0.12}"`));
}

// ── staffs (50 × 200; the hand grips at y = 100, x = 25) ─────────────────────────
export const STAFF_VW = 50, STAFF_VH = 200, STAFF_GRIP = 100;

interface StaffPal { wood: string; wood2: string; metal: string; gem: string; glow: string; leaf: string }
function staffPal(id: string): { shape: string; pal: StaffPal } {
  const def = staffOf(id);
  const shape = def.base ?? def.id;
  const base: Record<string, StaffPal> = {
    verdant: { wood: '#8a5a32', wood2: '#5e3a1e', metal: '#c9a35a', gem: '#6dff6a', glow: '#b8ff9a', leaf: '#4fc24a' },
    ember: { wood: '#3a2a2a', wood2: '#1e1414', metal: '#d06a2a', gem: '#ff7a1a', glow: '#ffcf6a', leaf: '#ff4a1a' },
    tide: { wood: '#2f6f9a', wood2: '#1d4466', metal: '#cfe8f4', gem: '#3fb8ff', glow: '#bff0ff', leaf: '#7fe0ff' },
    storm: { wood: '#4a4a62', wood2: '#2a2a3e', metal: '#c8c8e0', gem: '#b26bff', glow: '#e8d0ff', leaf: '#ffe36a' },
    void: { wood: '#1e1a30', wood2: '#0c0a18', metal: '#5a6aa8', gem: '#4a7dff', glow: '#b8ccff', leaf: '#8a5cff' },
  };
  const pal = { ...(base[shape] ?? base.verdant) };
  if (def.tint) for (const k of ['wood', 'wood2', 'metal', 'leaf'] as const) pal[k] = mix(pal[k], def.tint, 0.55);
  if (def.tint) { pal.gem = def.gem; pal.glow = lt(def.gem, 0.6); }
  return { shape: base[shape] ? shape : 'verdant', pal };
}

/** The staff's shapes in staff space (0..50 × 0..200), to be placed by the caller. */
function staffBody(pic: Pic, id: string) {
  const { shape, pal } = staffPal(id);
  const shaft = pic.lit(pal.wood, 'h', 0.45);
  const glow = pic.radial([[0, pal.glow, 0.95], [0.35, pal.gem, 0.55], [1, pal.gem, 0]]);
  const gemF = pic.radial([[0, '#ffffff'], [0.3, pal.glow], [1, pal.gem]], 0.35, 0.3, 0.7);
  pic.e(25, 26, 26, 26, glow, 'class="orb-glow"');
  if (shape === 'verdant') {
    // a twisted branch; at the top it splits into a cradle of branches round the gem, with leaves
    pic.p('M22 198 C20 170 27 150 23 120 C20 95 28 75 24 50 L28 50 C32 76 25 96 28 121 C31 150 24 172 28 198 Z', shaft);
    pic.s('M24 180 C27 170 22 160 26 150 M23 130 C27 118 22 108 26 95', pal.wood2, 1.2, 'opacity=".7"');
    for (const [d, w] of [['M25 52 C12 46 9 30 14 12', 3.2], ['M26 52 C38 46 41 30 36 12', 3.2], ['M25 50 C22 36 20 26 24 6', 2.6], ['M26 50 C30 36 31 24 28 4', 2.4]] as Array<[string, number]>) pic.s(d, pal.wood, w);
    pic.e(25, 28, 9.5, 10, gemF, 'class="orb"');
    for (const [x, y, a] of [[12, 14, -40], [38, 13, 40], [16, 40, -70], [36, 42, 60], [22, 90, -60], [29, 140, 50], [21, 166, -50]]) pic.raw(`<ellipse cx="${x}" cy="${y}" rx="5" ry="2.4" fill="${pal.leaf}" transform="rotate(${a} ${x} ${y})"/>`);
    pic.s('M23 60 C30 70 18 82 27 96 C33 108 19 118 27 132', mix(pal.leaf, '#2a5a1a', 0.35), 1.4);
  } else if (shape === 'ember') {
    // dark volcanic rock, cracks of fire, three prongs holding a burning gem
    pic.p('M21 198 L23 60 L27 60 L29 198 Z', shaft);
    pic.s('M24 180 L26 168 L24 150 M25 120 L27 106 L24 92', pal.metal, 1.1, 'opacity=".85"');
    pic.p('M14 62 L25 50 L36 62 L31 68 L19 68 Z', pic.lit(pal.wood, 'h', 0.5));
    for (const [d] of [['M17 60 C8 46 10 26 16 14 L19 16 C15 30 15 44 21 56 Z'], ['M33 60 C42 46 40 26 34 14 L31 16 C35 30 35 44 29 56 Z'], ['M24 54 L23 16 L27 16 L26 54 Z']]) pic.p(d, pic.lit(pal.wood, 'h', 0.5));
    pic.p('M25 12 L34 28 L25 44 L16 28 Z', gemF, 'class="orb"');
    pic.p('M25 12 L34 28 L25 28 Z', '#ffffff', 'opacity=".25"');
    pic.e(25, 196, 5, 3, pal.metal);
  } else if (shape === 'tide') {
    // pale crystal shaft, a wave curling round a blue orb, silver bands
    pic.p('M22 198 L22 58 Q25 54 28 58 L28 198 Z', shaft);
    for (const y of [70, 110, 150, 186]) pic.p(`M20 ${y} h10 v5 h-10 Z`, pic.lit(pal.metal, 'h', 0.4));
    pic.s('M25 58 C10 54 6 34 16 22 C24 14 34 18 32 28', pal.metal, 3.4);
    pic.s('M25 58 C40 54 44 36 38 22', lt(pal.wood, 0.4), 2.6);
    pic.e(25, 32, 10, 10, gemF, 'class="orb"');
    pic.e(22, 28, 3, 2, '#ffffff', 'opacity=".7"');
  } else if (shape === 'storm') {
    // dark metal, a forked crown like lightning, a purple orb
    pic.p('M22 198 L22 60 L28 60 L28 198 Z', shaft);
    for (const y of [64, 100, 140]) pic.p(`M19 ${y} h12 l-2 6 h-8 Z`, pic.lit(pal.metal, 'h', 0.4));
    pic.p('M25 60 L12 40 L16 39 L8 18 L20 34 L17 35 L25 48 L33 35 L30 34 L42 18 L34 39 L38 40 Z', pic.lit(pal.metal, 'h', 0.4));
    pic.e(25, 26, 9, 9, gemF, 'class="orb"');
    pic.s('M25 26 L21 31 L26 31 L22 37', '#ffffff', 1.2, 'opacity=".8"');
  } else {
    // void: a black spiral shaft, a ring orbiting a blue-violet core
    pic.p('M22 198 C18 160 30 130 22 100 C16 80 28 70 25 56 L29 58 C30 72 22 82 27 100 C34 130 22 162 28 198 Z', shaft);
    pic.s('M23 188 C30 176 20 168 27 154 C33 140 21 128 26 116', pal.leaf, 1, 'opacity=".55"');
    pic.e(25, 30, 15, 6, 'none', `stroke="${pal.metal}" stroke-width="2.4" transform="rotate(-25 25 30)"`);
    pic.e(25, 30, 9, 9, gemF, 'class="orb"');
    pic.e(25, 30, 15, 6, 'none', `stroke="${lt(pal.metal, 0.3)}" stroke-width="1.2" transform="rotate(35 25 30)" opacity=".8"`);
    pic.p('M25 58 L19 46 L25 42 L31 46 Z', pal.metal);
  }
}

/** The staff on its own (Customize, the reward box): 50 × 200. */
export function staffSvg(id: string | null | undefined): string {
  const pic = new Pic();
  staffBody(pic, id ?? 'verdant');
  return pic.svg(STAFF_VW, STAFF_VH, 'art staff-art');
}
/** The staff drawn into a character: the grip at (hx, hy), `s` = scale. */
function placeStaff(pic: Pic, id: string | null | undefined, hx: number, hy: number, s = 0.92, tilt = 4) {
  const sub = new Pic();
  staffBody(sub, id ?? 'verdant');
  pic.defs.push(...sub.defs);
  pic.raw(`<g transform="translate(${hx} ${hy}) rotate(${tilt}) scale(${s}) translate(${-25} ${-STAFF_GRIP})">${sub.body.join('')}</g>`);
}

// ── faces ─────────────────────────────────────────────────────────────────────
interface FaceOpts { skin: string; eye: string; brow: string; lid: number; browTilt: number; mouth?: 'calm' | 'snarl' | 'lips'; lips?: string; glow?: boolean; lashes?: boolean }
/** a face looking a little to the right, centred on (cx, cy), unit = head half-width */
function face(pic: Pic, cx: number, cy: number, w: number, h: number, o: FaceOpts) {
  pic.e(cx, cy, w, h, pic.radial([[0, lt(o.skin, 0.12)], [0.65, o.skin], [1, dk(o.skin, 0.22)]], 0.4, 0.35, 0.75));
  // cheek and jaw shading on the far (right) side, a soft nose
  pic.p(`M${cx + w * 0.55} ${cy - h * 0.2} Q${cx + w * 1.02} ${cy + h * 0.2} ${cx + w * 0.4} ${cy + h * 0.95} Q${cx + w * 0.75} ${cy + h * 0.3} ${cx + w * 0.55} ${cy - h * 0.2}Z`, dk(o.skin, 0.35), 'opacity=".35"');
  pic.p(`M${cx + w * 0.12} ${cy - h * 0.05} L${cx + w * 0.3} ${cy + h * 0.32} L${cx + w * 0.08} ${cy + h * 0.36}Z`, dk(o.skin, 0.3), 'opacity=".5"');
  for (const sx of [-1, 1]) {
    const ex = cx + sx * w * 0.42 + w * 0.08, ey = cy - h * 0.06, ew = w * 0.26, eh = h * 0.13;
    pic.e(ex, ey, ew, eh, o.glow ? '#ffd23a' : '#f4f0ea');
    pic.e(ex + ew * 0.25, ey + eh * 0.1, eh * 0.95, eh * 0.95, o.eye);
    pic.e(ex + ew * 0.25, ey + eh * 0.1, o.glow ? eh * 0.25 : eh * 0.45, eh * 0.7, '#140c14');
    if (!o.glow) pic.e(ex + ew * 0.05, ey - eh * 0.35, eh * 0.22, eh * 0.22, '#ffffff', 'opacity=".85"');
    // the upper lid (how narrowed the eyes are) and the brow
    pic.p(`M${ex - ew * 1.1} ${ey - eh * 1.4} L${ex + ew * 1.1} ${ey - eh * 1.4} L${ex + ew * 1.1} ${ey - eh * (1 - o.lid * 1.6)} Q${ex} ${ey - eh * (1.3 - o.lid * 1.8)} ${ex - ew * 1.1} ${ey - eh * (0.6 - o.lid)} Z`, o.skin);
    pic.s(`M${ex - ew * 1.05} ${ey - eh * (0.55 - o.lid)} Q${ex} ${ey - eh * (1.25 - o.lid * 1.8)} ${ex + ew * 1.08} ${ey - eh * (0.95 - o.lid * 1.6)}`, '#1c1418', h * 0.045);
    if (o.lashes) pic.s(`M${ex + ew * 0.8} ${ey - eh * (0.9 - o.lid * 1.6)} l${ew * 0.35} ${-eh * 0.45}`, '#1c1418', h * 0.03);
    const inner = sx < 0 ? ex + ew : ex - ew, outer = sx < 0 ? ex - ew * 1.1 : ex + ew * 1.15;
    const by = ey - eh * 2.3;
    pic.s(`M${inner} ${by + o.browTilt * eh} Q${(inner + outer) / 2} ${by - eh * 0.7} ${outer} ${by - o.browTilt * eh * 0.5}`, o.brow, h * 0.09);
  }
  const my = cy + h * 0.55;
  if (o.mouth === 'snarl') {
    pic.p(`M${cx - w * 0.3} ${my} Q${cx + w * 0.1} ${my - h * 0.12} ${cx + w * 0.5} ${my} L${cx + w * 0.42} ${my + h * 0.14} Q${cx + w * 0.1} ${my + h * 0.2} ${cx - w * 0.22} ${my + h * 0.12} Z`, '#2a1416');
    pic.p(`M${cx - w * 0.24} ${my + h * 0.01} L${cx + w * 0.44} ${my + h * 0.01} L${cx + w * 0.4} ${my + h * 0.07} L${cx - w * 0.2} ${my + h * 0.07}Z`, '#ece4cc');
    pic.s(`M${cx - w * 0.05} ${my} v${h * 0.07} M${cx + w * 0.15} ${my} v${h * 0.07}`, '#2a1416', 0.5);
  } else if (o.mouth === 'lips') {
    pic.p(`M${cx - w * 0.25} ${my} Q${cx + w * 0.1} ${my - h * 0.1} ${cx + w * 0.45} ${my} Q${cx + w * 0.1} ${my + h * 0.16} ${cx - w * 0.25} ${my}Z`, o.lips ?? '#7a3a5a');
  } else {
    pic.s(`M${cx - w * 0.15} ${my} Q${cx + w * 0.12} ${my + h * 0.04} ${cx + w * 0.38} ${my - h * 0.02}`, dk(o.skin, 0.55), h * 0.05);
  }
}

/** long wavy hair as a column of lobes (behind the head or over a shoulder) */
function wavyHair(pic: Pic, x: number, y0: number, y1: number, w: number, c: string, lobes = 5) {
  const n = lobes, step = (y1 - y0) / n;
  let d = `M${x - w / 2} ${y0}`;
  for (let i = 0; i < n; i++) d += ` Q${x - w / 2 - w * 0.35} ${y0 + step * (i + 0.5)} ${x - w / 2 + (i % 2 ? w * 0.12 : -w * 0.05)} ${y0 + step * (i + 1)}`;
  d += ` L${x + w * 0.1} ${y1 + step * 0.4}`;
  for (let i = n - 1; i >= 0; i--) d += ` Q${x + w / 2 + w * 0.35} ${y0 + step * (i + 0.5)} ${x + w / 2 + (i % 2 ? -w * 0.12 : w * 0.05)} ${y0 + step * i}`;
  pic.p(d + 'Z', pic.lit(c, 'h', 0.35));
  for (let i = 1; i < n; i++) pic.s(`M${x - w * 0.25} ${y0 + step * i - 3} q${w * 0.2} ${step * 0.4} ${w * 0.05} ${step * 0.8}`, dk(c, 0.25), 0.8, 'opacity=".6"');
}

/** a hand gripping the staff at (x, y) — drawn over the shaft */
function fist(pic: Pic, x: number, y: number, c: string, glove?: string) {
  const g = glove ?? c;
  pic.p(`M${x - 6} ${y - 6} Q${x - 7} ${y + 6} ${x - 2} ${y + 7} L${x + 6} ${y + 6} Q${x + 8} ${y} ${x + 6} ${y - 6} Q${x} ${y - 9} ${x - 6} ${y - 6}Z`, pic.lit(g, 'h', 0.4));
  for (const k of [-3, 0, 3]) pic.s(`M${x - 4} ${y + k} h7`, dk(g, 0.45), 0.6, 'opacity=".7"');
  pic.p(`M${x - 6} ${y - 6} Q${x - 9} ${y - 2} ${x - 5} ${y + 1}`, 'none', `stroke="${dk(g, 0.35)}" stroke-width=".8"`);
  if (glove && glove !== c) pic.e(x + 1, y - 7, 2.5, 1.6, c);
}
/** an open hand hanging down at (x, y) */
function openHand(pic: Pic, x: number, y: number, c: string) {
  pic.p(`M${x - 5} ${y - 4} Q${x - 6} ${y + 6} ${x - 2} ${y + 9} Q${x + 1} ${y + 11} ${x + 4} ${y + 8} Q${x + 6} ${y + 2} ${x + 5} ${y - 4}Z`, pic.lit(c, 'h', 0.35));
  pic.s(`M${x - 1} ${y + 3} v5 M${x + 2} ${y + 3} v5`, dk(c, 0.35), 0.6);
}

// ── the characters ─────────────────────────────────────────────────────────────
export type ArtKind = 'wizard' | 'witch' | 'knight' | 'goblin' | 'kid' | 'human';
type Side = 'me' | 'opp' | 'ally' | 'rival';

function shadow(pic: Pic, cx = 74, w = 50) { pic.e(cx, 196, w, 5, '#000', 'opacity=".32"'); }

function wizard(pic: Pic, side: Side, staff: string | null | undefined) {
  const robe = side === 'ally' ? '#2f9070' : side === 'rival' ? '#a8304a' : '#2f5ac4', deep = dk(robe, 0.35), cream = '#efe5cc', gold = '#e4b84c', skin = '#f2ddcf', hair = '#f2f0ec';
  const band = (x0: number, x1: number, y: number, h: number, flip = false) => {
    // the gold diamond lattice of the concept, along a hem
    const n = Math.max(2, Math.round((x1 - x0) / 9)), dx = (x1 - x0) / n;
    let d = '';
    for (let i = 0; i < n; i++) { const a = x0 + i * dx; d += `M${a} ${y + h / 2} L${a + dx / 2} ${y} L${a + dx} ${y + h / 2} L${a + dx / 2} ${y + h} Z `; }
    pic.p(d, 'none', `stroke="${gold}" stroke-width="1.1"${flip ? '' : ''}`);
  };
  shadow(pic);
  wavyHair(pic, 72, 64, 128, 40, '#dcd9d2', 5); // the long hair down the back
  // the cloak's back, the hood bunched behind the shoulders
  lp(pic, 'M46 92 Q30 140 18 192 L128 192 Q114 140 98 92 Z', deep, 9);
  pic.p('M50 86 Q72 98 94 86 Q100 98 92 104 Q72 112 52 104 Q44 98 50 86Z', pic.lit(robe, 'v', 0.3));
  // boots
  pic.p('M54 186 Q52 196 46 197 L66 197 L66 186Z', pic.lit('#2c4f9c', 'h'));
  pic.p('M78 186 L78 197 L98 197 Q92 195 90 186Z', pic.lit('#2c4f9c', 'h'));
  // the robe: blue, a cream front panel, lattice + cream band at the hem
  lp(pic, 'M54 96 L90 96 L104 190 L40 190 Z', robe, 8);
  pic.p('M66 104 L76 104 L82 190 L62 190 Z', pic.lit(cream, 'h', 0.2));
  pic.p('M41 184 L103 184 L104 190 L40 190Z', cream);
  band(43, 101, 172, 10);
  // the belt and its long tail, a gold diamond buckle
  pic.p('M53 122 L91 122 L92 129 L52 129Z', pic.lit('#75492a', 'v'));
  pic.p('M74 129 L80 129 L81 168 L77 172 L73 168Z', pic.lit('#6a4024', 'h'));
  pic.p('M72 119 L77 125.5 L72 132 L67 125.5Z', pic.lit(gold, 'd', 0.4));
  // the cloak's front panels: open, with cream edges and the lattice at the hem
  lp(pic, 'M50 90 Q40 140 22 192 L52 192 Q54 150 58 100 Z', robe, 8);
  lp(pic, 'M94 90 Q104 140 122 192 L92 192 Q90 150 86 100 Z', dk(robe, 0.2), 8);
  pic.p('M58 100 Q54 150 52 192 L56 192 Q58 150 61 101Z', cream);
  pic.p('M86 100 Q90 150 92 192 L88 192 Q86 150 83 101Z', cream);
  pic.p('M22 188 L52 188 L52 192 L22 192Z', cream); pic.p('M92 188 L122 188 L122 192 L92 192Z', cream);
  band(25, 51, 174, 10); band(93, 120, 174, 10);
  facets(pic, [[30, 150, 46, 120, 40, 170], [100, 120, 112, 160, 96, 150]], [true, false]);
  // the left arm hanging: a wide bell sleeve, cream cuff, lattice
  pic.p('M50 94 Q38 120 34 150 L54 152 Q56 124 58 100 Z', pic.lit(robe, 'h', 0.3));
  pic.p('M34 150 Q30 160 28 166 L58 166 Q56 158 54 152Z', pic.lit(robe, 'h', 0.3));
  band(31, 56, 152, 8);
  pic.p('M28 162 L58 162 L59 168 L27 168Z', cream);
  openHand(pic, 43, 170, skin);
  // the head: neck, the face (calm, narrowed eyes, white brows), the side locks, beard and moustache
  pic.p('M64 76 L80 76 L79 90 L65 90Z', dk(skin, 0.1));
  wavyHair(pic, 54, 58, 108, 13, hair, 4);
  wavyHair(pic, 90, 58, 104, 12, '#e2dfd8', 4);
  face(pic, 72, 66, 13, 15, { skin, eye: '#5d7590', brow: '#f4f2ee', lid: 0.45, browTilt: 0.25 });
  // the beard: full from the cheeks, long, wavy, to a point at the belt
  pic.p('M58 66 Q58 80 62 90 Q64 108 70 124 Q72 130 74 124 Q82 106 84 90 Q88 80 87 66 Q84 78 78 79 Q72 82 66 79 Q60 77 58 66Z', pic.lit(hair, 'h', 0.25));
  pic.s('M66 88 q2 10 4 18 M74 88 q1 12 0 22 M80 86 q-1 10 -3 16', '#cfcbc4', 0.8);
  pic.p('M64 76 Q70 72 72 75 Q75 72 82 76 Q78 80 72 77.5 Q67 80 64 76Z', '#f8f6f2');
  // the hat: a brim, a tall crown bending back at the tip, a gold band and diamond star
  pic.p('M36 54 Q72 44 110 54 Q74 64 36 54Z', pic.lit(robe, 'v', 0.4));
  lp(pic, 'M54 52 Q60 30 70 12 Q78 2 92 6 Q84 10 82 18 Q86 34 92 52 Q72 58 54 52Z', robe, 7);
  pic.p('M55 46 Q72 50 91 46 L92 52 Q72 57 54 52Z', gold);
  pic.p('M72 26 L75 33 L82 36 L75 39 L72 46 L69 39 L62 36 L69 33Z', pic.lit(gold, 'd', 0.3));
  facets(pic, [[56, 50, 66, 20, 66, 50], [80, 20, 90, 50, 84, 50]], [true, false]);
  // the right arm: forward, holding the staff
  placeStaff(pic, staff, 122, 126);
  pic.p('M90 94 Q104 104 116 120 L110 132 Q98 118 86 108Z', pic.lit(robe, 'h', 0.3));
  pic.p('M110 116 Q120 112 128 120 L118 140 Q112 136 108 130Z', pic.lit(robe, 'h', 0.3));
  pic.p('M118 120 L128 124 L124 133 L114 129Z', cream);
  fist(pic, 122, 128, skin);
}

function witch(pic: Pic, side: Side, staff: string | null | undefined) {
  const robe = side === 'ally' ? '#3a9a7c' : '#7a56bd', deep = dk(robe, 0.35), trim = lt(robe, 0.35), dress = '#2e2838', skin = '#f0dedb', hair = '#cfc2e4';
  shadow(pic);
  wavyHair(pic, 72, 58, 134, 44, '#b9acd2', 6);
  // the long open coat, back
  lp(pic, 'M46 90 Q30 140 16 186 L130 186 Q114 140 98 90Z', deep, 9);
  // heeled boots, slim legs through the slit
  pic.p('M62 150 L68 150 L67 190 L63 190Z', pic.lit('#3b3446', 'h'));
  pic.p('M58 190 L68 188 L70 196 L56 196Z', '#2a2432'); pic.p('M60 196 L59 190 L57 196Z', '#1a1620');
  pic.p('M76 150 L82 150 L83 190 L78 190Z', pic.lit('#3b3446', 'h'));
  pic.p('M77 188 L86 190 L88 196 L76 196Z', '#2a2432');
  // the black dress with its slit
  lp(pic, 'M56 96 L88 96 L100 184 L80 184 L74 146 L70 146 L64 184 L44 184 Z', dress, 8, 0.4);
  pic.p('M70 146 L74 146 L80 184 L64 184Z', '#5a4a62', 'opacity=".6"');
  // the belt, a crescent buckle
  pic.p('M55 118 L89 118 L90 124 L54 124Z', '#40344c');
  pic.raw(`<path d="M75 116 a5 5 0 1 0 0 10 a3.6 3.6 0 1 1 0 -10z" fill="#f0e6c0"/>`);
  // the coat's front: zig-zag hem with the lighter trim
  const hem = (x0: number, x1: number, y: number) => { let d = ''; const n = 4, dx = (x1 - x0) / n; for (let i = 0; i < n; i++) d += ` L${x0 + dx * (i + 0.5)} ${y + 8} L${x0 + dx * (i + 1)} ${y}`; return d; };
  lp(pic, `M50 90 Q40 140 20 180${hem(20, 54, 180)} Q56 140 60 100Z`, robe, 8);
  lp(pic, `M94 90 Q104 140 124 180 L124 180${hem(124, 90, 180)} Q88 140 84 100Z`, dk(robe, 0.22), 8);
  pic.s(`M60 100 Q56 140 54 180${hem(54, 20, 180)}`, trim, 2.4);
  pic.s(`M84 100 Q88 140 90 180${hem(90, 124, 180)}`, trim, 2.4);
  facets(pic, [[30, 150, 46, 118, 42, 170], [100, 120, 114, 160, 98, 150]], [true, false]);
  // the high collar
  pic.p('M54 84 Q72 96 90 84 L92 94 Q72 104 52 94Z', pic.lit(robe, 'v', 0.3));
  // the left arm: a bell sleeve with a pointed cuff, the hand
  pic.p('M50 94 Q38 120 32 150 L56 150 Q58 120 60 100Z', pic.lit(robe, 'h', 0.3));
  pic.p('M32 148 L56 148 L58 164 L50 158 L44 168 L38 158 L28 164Z', pic.lit(robe, 'h', 0.3));
  pic.s('M28 164 L38 158 L44 168 L50 158 L58 164', trim, 2);
  openHand(pic, 44, 168, skin);
  // the head: neck, long side locks, the face (dark, heavy-lidded eyes, dark lips)
  pic.p('M65 74 L79 74 L78 88 L66 88Z', dk(skin, 0.1));
  wavyHair(pic, 56, 56, 112, 14, hair, 5);
  wavyHair(pic, 89, 56, 108, 13, '#c2b4da', 5);
  face(pic, 72, 64, 12, 15, { skin, eye: '#4a3a5c', brow: '#4a3a55', lid: 0.5, browTilt: 0.45, mouth: 'lips', lips: '#6b3058', lashes: true });
  pic.e(64, 59, 3.4, 1.4, '#7a5590', 'opacity=".35"'); pic.e(81, 59, 3.4, 1.4, '#7a5590', 'opacity=".35"'); // eyeshadow
  pic.p('M58 52 Q72 46 87 52 Q86 58 72 54 Q60 58 58 52Z', pic.lit(hair, 'h'));
  // the hat: a wide drooping brim, a tall crown bent back, the band with a crescent moon
  pic.p('M24 54 Q72 40 120 52 Q114 60 100 58 Q72 66 44 60 Q30 60 24 54Z', pic.lit(robe, 'v', 0.45));
  lp(pic, 'M54 50 Q58 28 66 12 Q72 2 84 4 Q92 6 96 14 Q86 10 82 18 Q84 34 90 50 Q72 56 54 50Z', robe, 7);
  pic.p('M55 44 Q72 48 89 44 L90 50 Q72 55 54 50Z', trim);
  pic.raw('<path d="M72 37 a6 6 0 1 0 0 12 a4.2 4.2 0 1 1 0 -12z" fill="#f0e6c0" transform="rotate(25 72 43)"/>');
  facets(pic, [[56, 48, 64, 20, 66, 48], [78, 18, 88, 48, 82, 48]], [true, false]);
  // the right arm holds the staff
  placeStaff(pic, staff, 122, 126);
  pic.p('M88 94 Q102 104 114 120 L108 132 Q96 118 84 106Z', pic.lit(robe, 'h', 0.3));
  pic.p('M108 116 Q118 110 128 118 L120 138 Q112 134 106 128Z', pic.lit(robe, 'h', 0.3));
  pic.s('M120 138 L128 118', trim, 2);
  fist(pic, 122, 128, skin);
}

function knight(pic: Pic, side: Side, staff: string | null | undefined) {
  const plate = '#d6cfbf', plateLo = dk(plate, 0.3), red = side === 'ally' ? '#2f9a6c' : '#c2302c', under = '#4a3122', leather = '#6e4426', sash = '#6f6a3a';
  const P = (d: string, c = plate, _a: 'h' | 'v' | 'd' = 'h') => lp(pic, d, c, 6, 0.32);
  shadow(pic, 74, 52);
  // the sword on the back: the hilt over the left shoulder
  pic.raw(`<g transform="rotate(-28 72 120)"><rect x="70" y="60" width="5" height="110" fill="${pic.lit('#4f2f19', 'h')}"/><rect x="62" y="56" width="21" height="4" rx="1" fill="#c39a48"/><rect x="70.5" y="40" width="4" height="16" fill="#4a2c18"/><circle cx="72.5" cy="38" r="3.4" fill="#c39a48"/></g>`);
  // legs: greaves, knee cops, pointed sabatons
  for (const x of [58, 86]) {
    P(`M${x - 7} 140 L${x + 7} 140 L${x + 6} 186 L${x - 6} 186Z`);
    pic.e(x, 158, 8, 6, pic.lit(plate, 'd', 0.35));
    P(`M${x - 7} 184 L${x + 7} 184 L${x + 14} 194 L${x + 16} 197 L${x - 8} 197Z`, plateLo);
    pic.s(`M${x - 6} 168 h12 M${x - 6} 176 h12`, dk(plate, 0.45), 0.7);
  }
  // the dark under-skirt, the white tabard skirt with red stripes (split at the front)
  pic.p('M48 118 L96 118 L104 168 L40 168Z', pic.lit(under, 'h'));
  pic.p('M50 116 L70 116 L68 172 L46 176 L40 160Z', pic.lit('#f0ece2', 'h', 0.2));
  pic.p('M74 116 L94 116 L104 160 L98 176 L76 172Z', pic.lit('#f0ece2', 'h', 0.3));
  for (const y of [158, 166]) { pic.p(`M41 ${y} L68.5 ${y - 2} L68.3 ${y + 2.5} L42 ${y + 4.5}Z`, red); pic.p(`M76 ${y - 2} L102 ${y} L101 ${y + 4.5} L76 ${y + 2.5}Z`, red); }
  // the torso: a breastplate with a ridge; faulds; the olive sash
  P('M50 84 Q72 78 94 84 L92 118 L52 118Z', plate, 'h');
  pic.p('M71 84 L73 84 L73 116 L71 116Z', lt(plate, 0.4));
  for (const y of [110, 116]) pic.p(`M51 ${y} L93 ${y} L94 ${y + 5} L50 ${y + 5}Z`, pic.lit(plateLo, 'h'));
  pic.p('M48 112 Q72 118 96 112 L97 122 Q72 128 47 122Z', pic.lit(sash, 'v', 0.3));
  pic.p('M52 120 L60 120 L58 146 L50 144Z', pic.lit(sash, 'h', 0.3));
  // the leather straps crossing the chest, a brass buckle
  pic.p('M52 86 L58 84 L94 112 L90 116Z', pic.lit(leather, 'h'));
  pic.p('M92 86 L86 84 L50 112 L54 116Z', pic.lit(leather, 'h'));
  pic.p('M72 94 L77 99 L72 104 L67 99Z', '#c39a48');
  // the gorget, the great helm: visor slit, breaths, the red plume
  P('M60 76 L84 76 L86 86 L58 86Z', plateLo);
  pic.raw(`<g class="plume"><path d="M72 34 Q86 24 100 30 Q110 36 112 56 Q104 46 96 44 Q102 54 100 64 Q92 50 84 46 Q80 40 72 40Z" fill="${pic.lit(red, 'h', 0.35)}"/></g>`);
  P('M58 44 Q58 32 72 30 Q86 32 86 44 L86 72 Q72 78 58 72Z', plate, 'h');
  pic.p('M60 52 L84 52 L84 55.5 L60 55.5Z', '#15120f');
  pic.p('M71 32 L73 32 L73 76 L71 76Z', lt(plate, 0.35), 'opacity=".8"');
  for (const [x, y] of [[77, 62], [80, 62], [77, 66], [80, 66]]) pic.p(`M${x} ${y} h1.6 v1.6 h-1.6Z`, '#15120f');
  pic.p('M70 30 L74 30 L74 36 L70 36Z', '#c39a48');
  facets(pic, [[58, 44, 66, 34, 64, 70], [80, 36, 86, 46, 84, 70]], [true, false]);
  // the left arm: pauldron, plated arm, gauntlet
  pic.e(48, 88, 13, 10, pic.lit(plate, 'd', 0.4));
  pic.e(42, 90, 4, 4, pic.lit(lt(plate, 0.3), 'd'));
  P('M36 94 L54 94 L51 116 L52 138 L38 138 L39 116Z');
  pic.e(45, 117, 8, 6.5, pic.lit(plate, 'd'));
  pic.p('M37 132 L53 132 L52 139 L38 139Z', pic.lit(under, 'h'));
  P('M37 138 L53 138 L54 154 L50 162 L42 163 L36 154Z', plateLo);
  pic.s('M40 156 v5 M44 157 v6 M48 157 v5', dk(plate, 0.5), 0.7);
  // the right arm forward, the gauntlet round the staff
  placeStaff(pic, staff, 122, 124);
  pic.e(96, 88, 13, 10, pic.lit(plate, 'd', 0.4));
  pic.e(102, 90, 4, 4, pic.lit(lt(plate, 0.3), 'd'));
  P('M90 92 Q108 100 120 116 L108 128 Q96 116 84 106Z');
  pic.e(104, 108, 8, 6.5, pic.lit(plate, 'd'));
  fist(pic, 122, 126, plate, plateLo);
}

function goblin(pic: Pic, side: Side, staff: string | null | undefined) {
  const skin = '#84933f', skinLo = dk(skin, 0.3), red = side === 'ally' ? '#2c8f8a' : '#b3352b', leather = '#7a4e2c', wrap = '#a88a62', shorts = '#3a332f';
  shadow(pic, 74, 44);
  // bare feet, wrapped shins
  for (const x of [62, 84]) {
    pic.p(`M${x - 5} 150 L${x + 5} 150 L${x + 4} 188 L${x - 4} 188Z`, pic.lit(skin, 'h'));
    pic.p(`M${x - 6} 158 L${x + 6} 158 L${x + 5.5} 186 L${x - 5.5} 186Z`, pic.lit(wrap, 'h'));
    pic.s(`M${x - 6} 164 l12 -3 M${x - 6} 171 l12 -3 M${x - 6} 178 l12 -3`, dk(wrap, 0.4), 0.9);
    pic.p(`M${x - 6} 186 L${x + 6} 186 Q${x + 14} 190 ${x + 15} 196 L${x - 6} 197Z`, pic.lit(skin, 'h'));
    for (const t of [0, 4, 8]) pic.e(x + 3 + t, 196, 2.2, 1.6, skinLo);
  }
  // dark shorts, a belt, the torn red loincloth
  pic.p('M54 116 L90 116 L96 150 L76 152 L72 136 L68 152 L48 150Z', pic.lit(shorts, 'h'));
  pic.p('M54 114 L90 114 L91 121 L53 121Z', pic.lit(leather, 'v'));
  pic.p('M68 113 L76 113 L76 122 L68 122Z', 'none', 'stroke="#b99245" stroke-width="1.6"');
  pic.p('M64 122 L80 122 L82 150 L78 146 L76 160 L72 152 L69 162 L66 148 L62 152Z', pic.lit(red, 'h', 0.3));
  // the lean torso: chest and abs (faceted), the straps crossing with a buckle
  lp(pic, 'M54 82 Q72 76 90 82 L92 100 Q90 112 88 116 L56 116 Q54 112 52 100Z', skin, 6, 0.3);
  pic.s('M62 92 Q72 96 82 92 M72 96 L72 114 M64 104 h16 M65 110 h14', skinLo, 0.8, 'opacity=".8"');
  pic.p('M56 84 L62 82 L90 108 L86 112Z', pic.lit(leather, 'h'));
  pic.p('M88 84 L82 82 L54 108 L58 112Z', pic.lit(leather, 'h'));
  pic.p('M68 92 L76 92 L76 100 L68 100Z', 'none', 'stroke="#b99245" stroke-width="1.6"');
  // the red scarf, its hood down behind the neck
  pic.p('M56 74 Q72 66 88 74 Q92 84 84 88 Q72 92 60 88 Q52 84 56 74Z', pic.lit(red, 'v', 0.35));
  pic.p('M60 86 L68 88 L66 104 L60 100Z', pic.lit(red, 'h', 0.35));
  // the left arm: wiry, a wrapped bracer, a fingerless glove; the leather pad on the shoulder
  pic.p('M52 84 Q44 104 42 130 L50 132 Q52 108 58 90Z', pic.lit(skin, 'h'));
  pic.p('M41 118 L51 118 L50 134 L42 134Z', pic.lit(leather, 'h'));
  pic.s('M41 122 l10 -2 M41 127 l10 -2 M41 132 l10 -2', dk(leather, 0.4), 0.8);
  openHand(pic, 46, 138, '#5a3a20');
  pic.p('M42 80 Q50 72 60 78 L58 92 Q48 92 42 88Z', pic.lit(leather, 'd', 0.35));
  pic.s('M44 84 Q50 80 57 82', dk(leather, 0.4), 0.8);
  // the head: neck, the long pointed ears, the face (glaring yellow-red eyes, bared teeth), messy dark hair
  pic.p('M66 66 L78 66 L77 76 L67 76Z', skinLo);
  pic.p('M60 56 Q48 50 34 40 Q44 54 58 64Z', pic.lit(skin, 'h'));
  pic.p('M58 58 Q48 52 40 46 Q48 56 58 62Z', '#a36a5a', 'opacity=".7"');
  pic.p('M84 56 Q96 50 110 40 Q100 54 86 64Z', pic.lit(skin, 'h', 0.4));
  pic.p('M86 58 Q96 52 104 46 Q96 56 86 62Z', '#a36a5a', 'opacity=".6"');
  face(pic, 72, 58, 13, 13.5, { skin, eye: '#d2401c', brow: '#2a221c', lid: 0.2, browTilt: 0.9, mouth: 'snarl', glow: true });
  pic.p('M58 52 Q56 36 66 36 Q64 32 72 32 Q76 28 80 34 Q88 32 86 40 Q92 42 88 52 Q84 44 80 48 Q78 42 72 46 Q68 40 64 48 Q62 44 58 52Z', pic.lit('#2c2420', 'h', 0.3));
  // the right arm holds the staff
  placeStaff(pic, staff, 118, 118, 0.84);
  pic.p('M86 84 Q100 92 112 108 L106 118 Q96 104 84 96Z', pic.lit(skin, 'h'));
  pic.p('M104 104 L114 110 L110 122 L100 116Z', pic.lit(leather, 'h'));
  fist(pic, 118, 120, skin, '#5a3a20');
}

function kid(pic: Pic, side: Side, staff: string | null | undefined) {
  // the apprentice (N5): a young student in a red tunic and blue trousers, a satchel strap
  const tunic = side === 'ally' ? '#3aa57c' : '#d65a4a', skin = '#f2c79e';
  shadow(pic, 74, 40);
  for (const x of [64, 82]) { pic.p(`M${x - 5} 150 L${x + 5} 150 L${x + 5} 188 L${x - 5} 188Z`, pic.lit('#3d5ca8', 'h')); pic.p(`M${x - 6} 186 L${x + 6} 186 L${x + 10} 196 L${x - 6} 196Z`, pic.lit('#4a2c18', 'h')); }
  pic.p('M56 104 Q73 98 90 104 L94 152 L52 152Z', pic.lit(tunic, 'h', 0.3));
  pic.p('M54 140 L92 140 L93 146 L53 146Z', '#5a3a1e');
  pic.p('M60 104 L66 102 L90 140 L84 142Z', pic.lit('#7a4e2d', 'h'));
  pic.p('M54 106 Q46 124 46 140 L53 141 Q55 124 60 110Z', pic.lit(tunic, 'h'));
  openHand(pic, 49, 146, skin);
  pic.p('M66 92 L80 92 L79 102 L67 102Z', dk(skin, 0.1));
  face(pic, 73, 80, 14, 15, { skin, eye: '#3a2a1a', brow: '#5a3a1e', lid: 0.1, browTilt: 0, mouth: 'calm' });
  pic.p('M58 78 Q56 60 72 58 Q90 58 88 78 Q84 68 76 70 Q70 64 66 72 Q60 70 58 78Z', pic.lit('#7a4a24', 'h'));
  placeStaff(pic, staff, 116, 126, 0.8);
  pic.p('M88 106 Q102 114 110 124 L104 132 Q96 120 86 114Z', pic.lit(tunic, 'h'));
  fist(pic, 116, 128, skin);
}

function human(pic: Pic, side: Side, staff: string | null | undefined) {
  // the adventurer (N4): a green tunic, a leather belt and boots, a short cape
  const tunic = side === 'ally' ? '#2f9070' : '#3e8e5e', skin = '#f2c79e';
  shadow(pic, 74, 44);
  pic.p('M50 92 Q38 140 40 172 L104 172 Q106 140 94 92Z', pic.lit('#7a3a2a', 'h', 0.3)); // the cape behind
  for (const x of [62, 84]) { pic.p(`M${x - 6} 140 L${x + 6} 140 L${x + 6} 184 L${x - 6} 184Z`, pic.lit('#4a4a6a', 'h')); pic.p(`M${x - 7} 172 L${x + 7} 172 L${x + 8} 196 L${x - 7} 196Z`, pic.lit('#5a3a1e', 'h')); }
  pic.p('M52 90 Q72 84 92 90 L96 144 L48 144Z', pic.lit(tunic, 'h', 0.3));
  pic.p('M49 124 L95 124 L96 131 L48 131Z', pic.lit('#5a3a1e', 'v'));
  pic.p('M69 123 L76 123 L76 132 L69 132Z', 'none', 'stroke="#ffd479" stroke-width="1.4"');
  pic.p('M50 92 Q40 116 40 138 L48 139 Q50 116 56 98Z', pic.lit(tunic, 'h'));
  openHand(pic, 44, 144, skin);
  pic.p('M65 76 L79 76 L78 90 L66 90Z', dk(skin, 0.1));
  face(pic, 72, 64, 13, 15, { skin, eye: '#3a2a1a', brow: '#3b2a20', lid: 0.2, browTilt: 0.2, mouth: 'calm' });
  pic.p('M57 62 Q54 44 72 42 Q90 42 87 62 Q82 52 74 54 Q68 48 64 56 Q60 54 57 62Z', pic.lit('#3b2a20', 'h'));
  placeStaff(pic, staff, 120, 120, 0.88);
  pic.p('M90 94 Q104 102 114 116 L106 126 Q96 112 86 104Z', pic.lit(tunic, 'h'));
  fist(pic, 120, 122, skin);
}

const DRAW: Record<ArtKind, (pic: Pic, side: Side, staff: string | null | undefined) => void> = { wizard, witch, knight, goblin, kid, human };

/** A character, holding their staff: 160 × 200, facing right. */
export function characterSvg(kind: ArtKind, side: Side, staff?: string | null): string {
  const pic = new Pic();
  (DRAW[kind] ?? wizard)(pic, side, staff);
  return pic.svg(160, 200, `art char-art ${kind}`);
}

// ── low-poly fill: a jittered triangle mesh clipped to a shape, lit from the upper left ─────────────
let rs = 1;
const rand = () => ((rs = (rs * 16807) % 2147483647) / 2147483647);
function lowpoly(pic: Pic, d: string, box: [number, number, number, number], base: string, cell: number, light = 0.22, seed = 7) {
  rs = seed;
  const id = nid();
  pic.defs.push(`<clipPath id="${id}"><path d="${d}"/></clipPath>`);
  const [x0, y0, x1, y1] = box;
  const nx = Math.ceil((x1 - x0) / cell) + 1, ny = Math.ceil((y1 - y0) / cell) + 1;
  const pts: number[][][] = [];
  for (let j = 0; j <= ny; j++) { pts.push([]); for (let i = 0; i <= nx; i++) pts[j].push([x0 + (i + (j % 2) * 0.5 - 0.25 + (rand() - 0.5) * 0.6) * cell, y0 + (j + (rand() - 0.5) * 0.6) * cell]); }
  let out = `<g clip-path="url(#${id})"><path d="${d}" fill="${base}"/>`;
  const tri = (a: number[], b: number[], c: number[]) => {
    const mx = (a[0] + b[0] + c[0]) / 3, my = (a[1] + b[1] + c[1]) / 3;
    const k = 0.5 - ((mx - x0) / (x1 - x0 + 1)) * 0.6 - ((my - y0) / (y1 - y0 + 1)) * 0.4 + (rand() - 0.5) * 0.5; // light from the upper left
    const col = k > 0 ? mix(base, '#ffffff', k * light) : mix(base, '#000000', -k * light * 1.4);
    return `<path d="M${a[0].toFixed(1)} ${a[1].toFixed(1)}L${b[0].toFixed(1)} ${b[1].toFixed(1)}L${c[0].toFixed(1)} ${c[1].toFixed(1)}Z" fill="${col}" stroke="${col}" stroke-width=".4"/>`;
  };
  for (let j = 0; j < ny; j++) for (let i = 0; i < nx; i++) {
    const a = pts[j][i], b = pts[j][i + 1], c = pts[j + 1][i], e = pts[j + 1][i + 1];
    out += j % 2 ? tri(a, e, c) + tri(a, b, e) : tri(a, b, c) + tri(b, e, c);
  }
  pic.raw(out + '</g>');
}

/** low-poly fill with the box taken from the path's own (absolute) coordinates */
function lp(pic: Pic, d: string, base: string, cell = 7, light = 0.26) {
  const n = (d.match(/-?\d+(\.\d+)?/g) ?? []).map(Number);
  const xs = n.filter((_, i) => i % 2 === 0), ys = n.filter((_, i) => i % 2 === 1);
  let h = 0; for (const c of d) h = (h * 31 + c.charCodeAt(0)) % 99991;
  lowpoly(pic, d, [Math.min(...xs) - 2, Math.min(...ys) - 2, Math.max(...xs) + 2, Math.max(...ys) + 2], base, cell, light, h + 1);
}

// ── the Black Dragon (boss): 400 × 300, faces left towards the players ───────────────────────────
export function dragonArt(): string {
  const pic = new Pic();
  const K = '#2a2733', W = '#3a3446', belly = '#4a4452', horn = '#b8b29c', claw = '#d8d2bc';
  pic.e(250, 290, 120, 9, '#000', 'opacity=".35"');
  // the far wing (behind), then the tail
  const wing = (sx: number, sy: number, tips: Array<[number, number]>, bottom: Array<[number, number]>, c: string, seed: number) => {
    const d = `M${sx} ${sy} ` + tips.map(([x, y]) => `L${x} ${y}`).join(' ') + ' ' + bottom.map(([x, y], i) => i % 2 ? `Q${x} ${y}` : `${x} ${y}`).join(' ') + ' Z';
    lowpoly(pic, d, [Math.min(sx, ...tips.map((t) => t[0]), ...bottom.map((t) => t[0])) - 5, Math.min(sy, ...tips.map((t) => t[1])) - 5, Math.max(sx, ...tips.map((t) => t[0]), ...bottom.map((t) => t[0])) + 5, Math.max(sy, ...bottom.map((t) => t[1])) + 5], c, 26, 0.3, seed);
    // the wing's arm and finger bones
    const [wx, wy] = tips[0];
    pic.s(`M${sx} ${sy} L${wx} ${wy}`, dk(c, 0.4), 4);
    for (let i = 1; i < tips.length; i++) pic.s(`M${wx} ${wy} L${tips[i][0]} ${tips[i][1]}`, dk(c, 0.35), 2.2);
    for (let i = 0; i < bottom.length; i += 2) pic.s(`M${wx} ${wy} L${bottom[i][0]} ${bottom[i][1]}`, dk(c, 0.3), 1.3, 'opacity=".8"');
  };
  wing(232, 118, [[196, 30], [150, 8], [214, 10], [262, 34]], [[150, 8], [130, 70], [150, 86], [156, 110], [184, 108], [196, 140], [228, 120]], dk(W, 0.15), 3);
  const tail = 'M268 222 Q330 228 360 250 Q392 272 384 290 Q360 296 330 288 Q352 282 354 270 Q330 252 286 252 Z';
  lowpoly(pic, tail, [260, 215, 395, 298], K, 14, 0.25, 11);
  for (let i = 0; i < 6; i++) { const t = i / 6, x = 300 + t * 80, y = 230 + t * 40; pic.p(`M${x} ${y} l6 -12 l5 12Z`, dk(K, 0.2)); }
  // hind leg (far), body, hind leg (near)
  lowpoly(pic, 'M280 220 Q300 250 296 276 L306 290 L272 292 L276 262 Q262 246 262 226Z', [255, 215, 310, 295], dk(K, 0.15), 12, 0.25, 5);
  const body = 'M196 128 Q240 104 282 140 Q306 176 296 220 Q280 252 236 254 Q200 248 186 214 Q176 170 196 128Z';
  lowpoly(pic, body, [170, 100, 310, 258], K, 15, 0.3, 17);
  lowpoly(pic, 'M200 150 Q214 140 222 160 Q232 200 226 244 Q206 240 196 212 Q190 180 200 150Z', [186, 136, 236, 248], belly, 10, 0.3, 21);
  for (let y = 158; y < 240; y += 12) pic.s(`M${200 + (y - 150) * 0.05} ${y} Q212 ${y + 4} ${226} ${y}`, dk(belly, 0.4), 1, 'opacity=".7"');
  lowpoly(pic, 'M248 214 Q280 216 284 246 Q282 270 270 280 L288 292 L240 294 L246 270 Q232 240 248 214Z', [228, 208, 292, 296], K, 11, 0.3, 23);
  for (const x of [242, 254, 266, 278]) pic.p(`M${x} 290 l4 -8 l4 8 q-4 4 -8 0Z`, claw);
  // the near front leg, reaching forward
  lowpoly(pic, 'M204 196 Q186 214 182 246 Q180 270 170 282 L196 290 L196 262 Q206 232 222 212Z', [165, 190, 226, 294], K, 10, 0.3, 29);
  for (const x of [166, 176, 186]) pic.p(`M${x} 290 l3 -8 l4 8 q-4 4 -7 0Z`, claw);
  // the neck: an S from the chest up to the head, spines along it
  const neck = 'M206 140 Q178 128 168 104 Q158 80 136 70 L120 76 Q144 92 150 112 Q160 144 194 166 Z';
  lowpoly(pic, neck, [115, 62, 212, 170], K, 10, 0.32, 31);
  for (const [x, y, a] of [[134, 66, -10], [148, 76, 0], [160, 92, 10], [168, 108, 15], [182, 122, 20], [196, 128, 30], [214, 122, 40], [234, 116, 55], [254, 122, 70], [272, 134, 80]]) pic.raw(`<path d="M${x - 5} ${y + 4} L${x} ${y - 12} L${x + 5} ${y + 4}Z" fill="${dk(K, 0.25)}" transform="rotate(${a} ${x} ${y})"/>`);
  // the near wing, raised high
  wing(256, 124, [[300, 26], [266, 4], [340, 2], [392, 40], [396, 100]], [[396, 100], [372, 120], [372, 150], [350, 150], [338, 176], [312, 162], [284, 168]], W, 9);
  // the head: angular, the snout to the left, swept-back horns, a glowing green eye, teeth
  pic.p('M120 46 Q136 26 160 14 Q146 34 132 52Z', pic.lit(horn, 'h', 0.4));
  pic.p('M128 54 Q150 40 176 34 Q156 50 136 60Z', pic.lit(dk(horn, 0.15), 'h', 0.4));
  const head = 'M58 80 L76 64 L104 52 L126 50 L138 62 L136 78 L120 88 L96 92 L72 92 L60 88Z';
  lowpoly(pic, head, [55, 45, 142, 96], K, 9, 0.35, 37);
  lowpoly(pic, 'M64 90 L96 92 L118 88 L112 100 L86 104 L68 98Z', [60, 85, 120, 106], dk(K, 0.15), 7, 0.3, 41);
  for (const x of [70, 78, 86, 94]) pic.p(`M${x} 91 l3 6 l3 -6Z`, claw);
  pic.p('M86 60 L104 58 L100 64 L88 66Z', '#14101a');
  pic.raw(`<g class="eye"><path d="M88 62 L102 59.5 L99 63.5 L89 64.5Z" fill="#39ff7a"/><path d="M94 60.5 L95.5 60.3 L95 64 L93.8 64.1Z" fill="#0b2a12"/></g>`);
  pic.e(95, 62, 10, 6, pic.radial([[0, '#39ff7a', 0.6], [1, '#39ff7a', 0]]), 'class="eye"');
  pic.p('M62 78 L66 77 L65 80Z', '#000', 'opacity=".6"');
  for (const [x, y] of [[106, 50], [114, 48], [100, 52]]) pic.p(`M${x} ${y} l3 -9 l3 9Z`, dk(K, 0.2));
  return pic.svg(400, 300, 'art dragon-art');
}
