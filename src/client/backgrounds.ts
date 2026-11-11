import type { BackgroundId } from '../shared/progress';
import { characterSvg } from './art2d';

// Painted backgrounds: layered SVG scenes (no image files), each in three times of day.
// Small living details are animated with CSS classes (bg-*) defined in style.css.

export type TimeOfDay = 'day' | 'sunset' | 'night';
export type TimePref = 'auto' | TimeOfDay;

/**
 * 0.9.9.6: the time of day follows your own clock — day from 6:00 to 17:00, sunset until 20:00, night until
 * 6:00 (it was a 3-minute cycle, or a fixed choice in Customize).
 */
const DAY_FROM = 6, SUNSET_FROM = 17, NIGHT_FROM = 20;
export function resolveTime(_pref: TimePref = 'auto', now = Date.now()): TimeOfDay {
  const h = new Date(now).getHours();
  return h >= DAY_FROM && h < SUNSET_FROM ? 'day' : h >= SUNSET_FROM && h < NIGHT_FROM ? 'sunset' : 'night';
}
/** ms until the next change (the next 6:00, 17:00 or 20:00 on your clock) */
export function untilNextStep(now = Date.now()) {
  const d = new Date(now);
  const next = new Date(d);
  next.setMinutes(0, 0, 0);
  const h = d.getHours();
  const at = [DAY_FROM, SUNSET_FROM, NIGHT_FROM].find((x) => x > h);
  if (at === undefined) { next.setDate(next.getDate() + 1); next.setHours(DAY_FROM); } else next.setHours(at);
  return Math.max(1000, next.getTime() - now);
}

const W = 1600, H = 900;
let seed = 1;
/** 0.9.9.8.1: painting the main-menu version — the same place without the arena (no stone dais, standing stones,
 * braziers or armies); a path, water or a pool leads into the scene instead */
let MENU = false;
let SCENE_ID: BackgroundId = 'forest';
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const r = (a: number, b: number) => a + rnd() * (b - a);
const f = (n: number) => n.toFixed(1);

// ── shared painting helpers ───────────────────────────────────────────────────
type Stop = [number, string, number?];
const stopsOf = (stops: Stop[]) => stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== undefined ? ` stop-opacity="${a}"` : ''}/>`).join('');
const grad = (id: string, stops: Stop[], vertical = true) => `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}">${stopsOf(stops)}</linearGradient>`;
const radial = (id: string, stops: Stop[]) => `<radialGradient id="${id}">${stopsOf(stops)}</radialGradient>`;
// 0.9.9.4.4.3: shapes are shaded with gradients (made per scene, gathered here and written into the scene's
// <defs>) instead of flat colour and outlines — softer and more painterly
let gdefs: string[] = [];
let gn = 0;
/** a linear gradient for this scene (objectBoundingBox: 0→1 across the shape); returns `url(#…)` */
function lin(stops: Stop[], x1 = 0, y1 = 0, x2 = 0, y2 = 1) { const id = `lg${gn++}`; gdefs.push(`<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stopsOf(stops)}</linearGradient>`); return `url(#${id})`; }
/** a radial gradient, its bright spot at (fx, fy) — light from the upper left by default */
function rad(stops: Stop[], fx = 0.35, fy = 0.3, rr = 0.75) { const id = `rg${gn++}`; gdefs.push(`<radialGradient id="${id}" cx="${fx}" cy="${fy}" r="${rr}" fx="${fx}" fy="${fy}">${stopsOf(stops)}</radialGradient>`); return `url(#${id})`; }
const DEFS = `<filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>`
  + `<linearGradient id="haze" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity="0"/><stop offset=".55" stop-color="currentColor" stop-opacity=".9"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient>`
  + `<filter id="blur20" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="20"/></filter>`
  + `<filter id="glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;

function stars(n: number, maxY: number, color = '#fff') {
  // two groups twinkle out of phase (cheap: one animation per group, not per star)
  const one = () => `<circle cx="${f(r(0, W))}" cy="${f(r(0, maxY))}" r="${f(r(0.5, 1.9))}" fill="${color}" opacity="${f(r(0.35, 0.95))}"/>`;
  return `<g class="bg-twinkle">${Array.from({ length: n >> 1 }, one).join('')}</g><g class="bg-twinkle b">${Array.from({ length: n >> 1 }, one).join('')}</g>`;
}
function moon(cx: number, cy: number, rad: number, tint = '#f3efd6') {
  return `<circle cx="${cx}" cy="${cy}" r="${rad * 3.2}" fill="${tint}" opacity=".06"/><circle cx="${cx}" cy="${cy}" r="${rad * 1.7}" fill="${tint}" opacity=".1"/>
    <circle cx="${cx}" cy="${cy}" r="${rad}" fill="${tint}"/>
    <circle cx="${cx - rad * 0.3}" cy="${cy - rad * 0.2}" r="${rad * 0.18}" fill="#000" opacity=".07"/><circle cx="${cx + rad * 0.25}" cy="${cy + rad * 0.3}" r="${rad * 0.12}" fill="#000" opacity=".06"/><circle cx="${cx + rad * 0.35}" cy="${cy - rad * 0.35}" r="${rad * 0.08}" fill="#000" opacity=".06"/>`;
}
function sun(cx: number, cy: number, rad: number, core: string, halo: string) {
  return `<circle cx="${cx}" cy="${cy}" r="${rad * 5}" fill="${halo}" opacity=".10"/><circle cx="${cx}" cy="${cy}" r="${rad * 2.4}" fill="${halo}" opacity=".18"/><circle cx="${cx}" cy="${cy}" r="${rad}" fill="${core}"/>`;
}
/** Soft god-rays fanning down from the sun. */
function rays(cx: number, cy: number, color: string, op: number) {
  return `<g class="bg-rays" opacity="${op}" filter="url(#blur20)">${Array.from({ length: 7 }, (_, i) => {
    const a = -0.95 + i * 0.32 + r(-0.06, 0.06), w = r(0.03, 0.07), len = 1300;
    const p = (ang: number) => `${f(cx + Math.sin(ang) * len)},${f(cy + Math.cos(ang) * len)}`;
    return `<polygon points="${cx},${cy} ${p(a - w)} ${p(a + w)}" fill="${color}"/>`;
  }).join('')}</g>`;
}
/** Night: a faint band of the Milky Way. */
function milkyWay() {
  return `<g opacity=".55" filter="url(#blur20)"><path d="M-100 420 C 300 260, 800 220, 1700 40 L1700 120 C 900 300, 400 330, -100 520 Z" fill="#8a9cff" opacity=".2"/><path d="M-100 450 C 400 300, 900 250, 1700 90" stroke="#d8dcff" stroke-width="40" opacity=".14" fill="none"/></g>`;
}
/** Sunset: a wide glow along the horizon. */
function horizonGlow(y: number, color: string) {
  return `<ellipse cx="800" cy="${y}" rx="1000" ry="130" fill="${color}" opacity=".4" filter="url(#blur20)"/>`;
}
/** Haze laid over a far layer, so nearer layers stand out (atmospheric depth). */
function haze(y: number, color: string, op: number) {
  return `<rect x="0" y="${y - 260}" width="${W}" height="${H - y + 260}" fill="url(#haze)" opacity="${op}" style="color:${color}"/>`;
}
function clouds(n: number, yMin: number, yMax: number, color: string, op: number, cls = 'bg-drift') {
  // 0.9.9.4.4.3: each puff lit from above (a radial gradient), a soft shaded underside and wispy edges — no outlines
  const fill = rad([[0, lighten(color, 0.5)], [0.55, color], [1, dk2(color, 0.2)]], 0.4, 0.25, 0.85);
  const under = dk2(color, 0.32);
  return `<g class="${cls}" opacity="${op}">${Array.from({ length: n }, () => {
    const x = r(-100, W), y = r(yMin, yMax), s = r(0.6, 1.4);
    const puffs = [[0, 0, 90, 22], [-40, -12, 46, 26], [30, -18, 52, 30], [70, -4, 40, 18], [-78, -2, 34, 16], [8, -30, 34, 22]].map(([cx, cy, rx, ry]) => [cx + r(-6, 6), cy + r(-4, 4), rx * r(0.9, 1.1), ry * r(0.9, 1.1)]);
    return `<g transform="translate(${f(x)} ${f(y)}) scale(${f(s)})"><ellipse cx="0" cy="8" rx="110" ry="16" fill="${under}" opacity=".45" filter="url(#soft)"/>`
      + puffs.map(([cx, cy, rx, ry]) => `<ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(rx)}" ry="${f(ry)}" fill="${fill}"/>`).join('')
      + `<ellipse cx="-120" cy="2" rx="40" ry="6" fill="${color}" opacity=".35"/><ellipse cx="130" cy="0" rx="46" ry="5" fill="${color}" opacity=".3"/></g>`;
  }).join('')}</g>`;
}
function mountains(y: number, amp: number, color: string, jag = 1) {
  // 0.9.9.4.4.3: aerial perspective (lighter towards the top), lit and shaded faces in gradients, snow on the
  // highest peaks and rock streaks down the faces
  const pts: Array<[number, number]> = [];
  for (let x = -60; x <= W + 180; x += r(70, 150)) {
    const k = pts.length % 3; // a peak, a shoulder, a saddle
    const hgt = Math.abs(Math.sin(x / 260 + jag)) * amp * r(0.7, 1.2) + amp * 0.2;
    pts.push([x, y - (k === 0 ? hgt : k === 1 ? hgt * r(0.45, 0.7) : r(0, amp * 0.3))]);
  }
  const ridge = pts.map(([x, py], i) => `${i ? 'L' : 'M'}${f(x)} ${f(py)}`).join(' ');
  const body = lin([[0, lighten(color, 0.14)], [0.5, color], [1, dk2(color, 0.12)]]);
  const shadeG = lin([[0, dk2(color, 0.22)], [1, dk2(color, 0.1), 0.6]]);
  const litG = lin([[0, lighten(color, 0.3), 0.8], [1, lighten(color, 0.1), 0]]);
  const top = Math.min(...pts.map((p) => p[1]));
  let s = `<path d="${ridge} L${W + 200} ${H} L-60 ${H} Z" fill="${body}"/>`;
  let streaks = '';
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i], [nx, ny] = pts[i + 1], [lx, ly] = pts[i - 1];
    if (py > ny || py > ly) continue; // valleys
    s += `<path d="M${f(px)} ${f(py)} L${f(nx)} ${f(ny)} L${f(nx - 20)} ${f(y + 40)} L${f(px + (nx - px) * 0.15)} ${f(y + 40)} Z" fill="${shadeG}"/>`;
    s += `<path d="M${f(px)} ${f(py)} L${f(px - (px - lx) * 0.4)} ${f(py + (ly - py) * 0.4)} L${f(px - (px - lx) * 0.12)} ${f(y + 10)} Z" fill="${litG}"/>`;
    // snow on the tall peaks
    if (py < top + amp * 0.35) {
      const k = 0.24;
      s += `<path d="M${f(px)} ${f(py)} L${f(px + (nx - px) * k)} ${f(py + (ny - py) * k)} l${f(-8)} ${f(6)} l-10 -4 l-8 7 L${f(px - (px - lx) * k)} ${f(py + (ly - py) * k)} Z" fill="${lighten(color, 0.55)}" opacity=".8"/>`;
    }
    for (let j = 0; j < 3; j++) { const sx = px + r(-30, 40), sy = py + r(14, 40); streaks += `M${f(sx)} ${f(sy)} l${f(r(-12, 12))} ${f(r(30, 70))} `; }
  }
  return s + `<path d="${streaks}" stroke="${dk2(color, 0.25)}" stroke-width="1.5" fill="none" opacity=".35"/>`;
}
/** a colour mixed towards white */
function lighten(c: string, t: number) { const p = [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16)); return `#${p.map((v) => Math.round(v + (255 - v) * t).toString(16).padStart(2, '0')).join('')}`; }
function hills(y: number, amp: number, color: string, phase = 0) {
  let d = `M0 ${H} L0 ${y}`;
  let top = '';
  for (let x = 0; x <= W; x += 40) { const py = f(y + Math.sin(x / 210 + phase) * amp + Math.sin(x / 90 + phase * 2) * amp * 0.25); d += ` L${x} ${py}`; top += `${x ? 'L' : 'M'}${x} ${py} `; }
  const g = lin([[0, lighten(color, 0.1)], [0.35, color], [1, dk2(color, 0.25)]]);
  return `<path d="${d} L${W} ${H} Z" fill="${g}"/><path d="${top}" stroke="${lighten(color, 0.3)}" stroke-width="2" fill="none" opacity=".35"/>`;
}
/** A pine with ragged tiers (prettier than a plain triangle). */
function pine(x: number, base: number, h: number, color: string) {
  const w = h * 0.42;
  let s = `<rect x="${f(x - w * 0.04)}" y="${f(base - h * 0.12)}" width="${f(w * 0.08)}" height="${f(h * 0.14)}" fill="${color}"/>`;
  for (let t = 0; t < 4; t++) {
    const top = base - h * (0.35 + t * 0.21), bw = w * (1 - t * 0.2), by = base - h * (0.08 + t * 0.2);
    s += `<polygon points="${f(x - bw / 2)},${f(by)} ${f(x - bw * 0.3)},${f(by - 6)} ${f(x)},${f(top)} ${f(x + bw * 0.3)},${f(by - 6)} ${f(x + bw / 2)},${f(by)}" fill="${color}"/>`;
  }
  return s;
}
function forestRow(base: number, count: number, minH: number, maxH: number, color: string) {
  let s = '';
  for (let i = 0; i < count; i++) s += pine((i / count) * W + r(-20, W / count), base + r(-6, 6), r(minH, maxH), color);
  return s + `<rect x="0" y="${base}" width="${W}" height="${H - base}" fill="${color}"/>`;
}
/**
 * Pairs of red eyes in the dark between the trees; each pair blinks on its own rhythm. 0.9.9.5: only in the
 * gaps between trunks (`trees`: [left, right] of each trunk), drawn behind the nearer trees.
 */
function eyes(n: number, yMin: number, yMax: number, op: number, trees: Array<[number, number]> = []) {
  const free = (x: number) => trees.every(([a, b]) => x + 18 < a || x - 6 > b);
  return Array.from({ length: n }, () => {
    let x = r(60, W - 60);
    for (let k = 0; k < 40 && !free(x); k++) x = r(60, W - 60);
    if (!free(x)) return '';
    const y = r(yMin, yMax), gap = r(7, 12), s = r(2, 3.4);
    return `<g class="bg-blink" style="animation-delay:${f(r(0, 9))}s;animation-duration:${f(r(5, 11))}s" opacity="${op}" filter="url(#glow)"><ellipse cx="${f(x)}" cy="${f(y)}" rx="${f(s)}" ry="${f(s * 0.7)}" fill="#ff2a2a"/><ellipse cx="${f(x + gap)}" cy="${f(y)}" rx="${f(s)}" ry="${f(s * 0.7)}" fill="#ff2a2a"/></g>`;
  }).join('');
}
function fireflies(n: number, yMin: number, yMax: number, color: string) {
  return `<g class="bg-float">${Array.from({ length: n }, () => `<circle cx="${f(r(0, W))}" cy="${f(r(yMin, yMax))}" r="${f(r(1.5, 3))}" fill="${color}" filter="url(#glow)" class="bg-flicker" style="animation-delay:${f(r(0, 4))}s"/>`).join('')}</g>`;
}
function comets(n: number) {
  return Array.from({ length: n }, (_, i) => {
    const y = r(40, 260), len = r(140, 220);
    return `<g class="bg-comet" style="animation-delay:${f(i * 7 + r(0, 4))}s;--cy:${f(y)}px"><line x1="0" y1="0" x2="${f(-len)}" y2="${f(-len * 0.32)}" stroke="url(#cometTail)" stroke-width="3" stroke-linecap="round"/><circle r="3.2" fill="#fff" filter="url(#glow)"/></g>`;
  }).join('');
}
function mist(y: number, color: string, op: number) {
  return `<g class="bg-mist" opacity="${op}" filter="url(#blur20)">${Array.from({ length: 6 }, (_, i) => `<ellipse cx="${f(i * 300 + r(-60, 60))}" cy="${f(y + r(-20, 20))}" rx="${f(r(220, 340))}" ry="${f(r(26, 46))}" fill="${color}"/>`).join('')}</g>`;
}

type Sky = Stop[];
const pick = <T,>(t: TimeOfDay, day: T, sunset: T, night: T) => (t === 'day' ? day : t === 'sunset' ? sunset : night);

const dk2 = (c: string, t: number) => { const p = [1, 3, 5].map((i) => parseInt(c.slice(i, i + 2), 16) * (1 - t)); return `#${p.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('')}`; };
// ── scenes (0.9.9.3: repainted after the 3D arenas; every scene ends in the stone arena the fighters stand on) ──

/**
 * The arena floor in the foreground: a round stone dais seen from the side (its top edge across the middle of
 * the lower screen), tiles, a glowing rune ring with kanji, and its front lip. The fighters' feet stand on it.
 */
function arenaFloor(t: TimeOfDay, stone: string[], accent: string, glyph = '#ffffff') {
  if (MENU) return menuFore(SCENE_ID, t);
  const [top, mid, edge] = stone;
  const cy = 940, rx = 1040, ry = 220; // the dais: its top edge at y ≈ 720
  let s = `<ellipse cx="800" cy="${cy + 22}" rx="${rx + 20}" ry="${ry + 16}" fill="#000" opacity=".35" filter="url(#blur20)"/>`;
  s += `<ellipse cx="800" cy="${cy + 20}" rx="${rx}" ry="${ry}" fill="${edge}"/>`; // the lip (its side)
  s += `<ellipse cx="800" cy="${cy}" rx="${rx}" ry="${ry}" fill="url(#floorG)"/>`;
  // tiles: rings and spokes, a few cracked slabs
  for (const k of [0.82, 0.62, 0.42]) s += `<ellipse cx="800" cy="${cy}" rx="${f(rx * k)}" ry="${f(ry * k)}" fill="none" stroke="${mid}" stroke-width="${f(3 * k + 1)}" opacity=".7"/>`;
  for (let i = 0; i < 18; i++) {
    const a = Math.PI + (i / 18) * Math.PI;
    s += `<line x1="${f(800 + Math.cos(a) * rx * 0.42)}" y1="${f(cy + Math.sin(a) * ry * 0.42)}" x2="${f(800 + Math.cos(a) * rx)}" y2="${f(cy + Math.sin(a) * ry)}" stroke="${mid}" stroke-width="2.5" opacity=".6"/>`;
  }
  for (let i = 0; i < 9; i++) { const x = r(150, 1450), y = r(740, 880); s += `<path d="M${f(x)} ${f(y)} l${f(r(20, 50))} ${f(r(-6, 6))} l${f(r(10, 30))} ${f(r(4, 14))}" stroke="${mid}" stroke-width="1.6" fill="none" opacity=".55"/>`; }
  // the rune ring: a glowing band with kanji, brighter at night
  const glow = pick(t, 0.55, 0.8, 1);
  const rr = 0.66;
  s += `<g filter="url(#glow)" opacity="${glow}"><ellipse cx="800" cy="${cy}" rx="${f(rx * rr)}" ry="${f(ry * rr)}" fill="none" stroke="${accent}" stroke-width="5"/>`
    + `<ellipse cx="800" cy="${cy}" rx="${f(rx * (rr - 0.07))}" ry="${f(ry * (rr - 0.07))}" fill="none" stroke="${accent}" stroke-width="2.5" opacity=".8"/>`
    + `<ellipse cx="800" cy="${cy}" rx="${f(rx * 0.2)}" ry="${f(ry * 0.2)}" fill="none" stroke="${accent}" stroke-width="3" opacity=".7"/></g>`;
  const glyphs = '火水木金土風雷光闇氷魔力';
  for (let i = 0; i < 9; i++) {
    const a = Math.PI + ((i + 0.5) / 9) * Math.PI, rk = rr - 0.035;
    const x = 800 + Math.cos(a) * rx * rk, y = cy + Math.sin(a) * ry * rk;
    s += `<text x="${f(x)}" y="${f(y + 9)}" font-size="34" text-anchor="middle" fill="${glyph}" opacity="${f(glow * 0.75)}" font-family="'Noto Serif JP','Yu Mincho',serif" transform="scale(1 .62) translate(0 ${f(y / 0.62 - y)})" filter="url(#glow)">${glyphs[i]}</text>`;
  }
  // a soft glow in the middle of the ring, light catching the front lip
  s += `<ellipse cx="800" cy="${cy - 30}" rx="420" ry="90" fill="${accent}" opacity="${f(glow * 0.12)}" filter="url(#blur20)"/>`;
  s += `<path d="M${800 - rx} ${cy} A ${rx} ${ry} 0 0 1 ${800 + rx} ${cy}" stroke="#ffffff" stroke-width="3" fill="none" opacity="${pick(t, 0.35, 0.22, 0.12)}"/>`;
  return s;
}
const floorDefs = (stone: string[]) => grad('floorG', [[0, stone[0]], [0.5, stone[1]], [1, stone[2]]]);

/** A huge forest trunk (the 3D forest's dark, twisted giants): flared roots, a slight twist, branches off the top. */
function trunk(x: number, w: number, color: string, lean = 0) {
  const top = -40, base = 760;
  const L = (k: number) => x - w / 2 + lean * (1 - k / 800) + Math.sin(k / 90) * w * 0.06, R = (k: number) => x + w / 2 + lean * (1 - k / 800) + Math.sin(k / 70 + 1) * w * 0.05;
  let d = `M${f(x - w * 1.5)} ${base} Q${f(x - w * 0.62)} ${base - 40} ${f(L(base - 160))} ${base - 160}`;
  for (let k = base - 240; k >= top; k -= 80) d += ` L${f(L(k))} ${k}`;
  d += ` L${f(R(top))} ${top}`;
  for (let k = top + 80; k <= base - 160; k += 80) d += ` L${f(R(k))} ${k}`;
  d += ` Q${f(x + w * 0.62)} ${base - 40} ${f(x + w * 1.5)} ${base} Z`;
  let s = `<ellipse cx="${x}" cy="${base}" rx="${f(w * 1.6)}" ry="${f(w * 0.12)}" fill="#000" opacity=".35" filter="url(#soft)"/><path d="${d}" fill="${lin([[0, lighten(color, 0.12)], [0.3, color], [0.75, dk2(color, 0.2)], [1, dk2(color, 0.35)]], 0, 0, 1, 0)}"/>`;
  // the light catches the left side; bark ridges; roots running into the ground
  s += `<path d="M${f(L(base - 160) + w * 0.06)} ${base - 160} L${f(L(top) + w * 0.06)} ${top} L${f(L(top) + w * 0.2)} ${top} L${f(L(base - 160) + w * 0.18)} ${base - 160} Z" fill="#ffffff" opacity=".06"/>`;
  for (let i = 0; i < 5; i++) { const bx = x - w * 0.3 + i * w * 0.15 + lean * 0.5; s += `<path d="M${f(bx)} ${base - 120} q${f(r(-8, 8))} -200 ${f(r(-10, 10))} -${f(r(300, 600))}" stroke="#000" stroke-width="${f(r(2, 5))}" opacity=".16" fill="none"/>`; }
  s += bark(x - w * 0.42 + lean * 0.4, top + 40, w * 0.84, base - 180 - top, color);
  for (const sx of [-1, 1]) s += `<path d="M${f(x + sx * w * 0.3)} ${base - 60} Q${f(x + sx * w * 0.9)} ${base - 20} ${f(x + sx * w * 1.9)} ${base + 10}" stroke="${color}" stroke-width="${f(w * 0.18)}" fill="none" stroke-linecap="round"/>`;
  return s;
}
/** A clump of foliage: a lobed, leafy outline (not a ball), shaded by `fill`, with a few darker leaf veins. */
function leafBlob(cx: number, cy: number, R: number, fill: string) {
  const n = 16 + Math.floor(rnd() * 6);
  const pt = (i: number, k: number) => { const a = (i / n) * Math.PI * 2; const rr = R * k; return [cx + Math.cos(a) * rr, cy + Math.sin(a) * rr * 0.88]; };
  const rs = Array.from({ length: n }, () => r(0.78, 0.98));
  let d = '';
  for (let i = 0; i < n; i++) {
    const [x0, y0] = pt(i, rs[i]);
    const a = ((i + 0.5) / n) * Math.PI * 2, lobe = R * r(1.02, 1.16);
    const [x1, y1] = pt(i + 1, rs[(i + 1) % n]);
    d += `${i ? '' : `M${f(x0)} ${f(y0)} `}Q${f(cx + Math.cos(a) * lobe)} ${f(cy + Math.sin(a) * lobe * 0.88)} ${f(x1)} ${f(y1)} `;
  }
  return `<path d="${d}Z" fill="${fill}"/>`;
}
/** Ivy hanging down a wall: a wavering vine with small leaves along it. */
function ivy(x: number, y: number, len: number, c: string) {
  let vine = `M${x} ${y}`, leaves = '', lit = '';
  let px = x, py = y;
  for (let k = 0; k < len; k += 10) {
    const nx = px + r(-4, 4), ny = py + 10;
    vine += ` L${f(nx)} ${f(ny)}`;
    for (let j = 0; j < 3; j++) {
      const lx = nx + r(-12, 12), ly = ny + r(-6, 6), sz = r(4, 7) * (1 - k / len * 0.45);
      const leaf = `M${f(lx)} ${f(ly)} q${f(sz)} ${f(-sz)} ${f(sz * 2)} 0 q${f(-sz)} ${f(sz)} ${f(-sz * 2)} 0 `;
      if (rnd() > 0.35) leaves += leaf; else lit += leaf;
    }
    px = nx; py = ny;
  }
  return `<path d="${vine}" stroke="${dk2(c, 0.35)}" stroke-width="1.5" fill="none"/><path d="${leaves}" fill="${c}"/><path d="${lit}" fill="${lighten(c, 0.25)}"/>`;
}
/** A leafy tree (0.9.9.4.4.3): a tapered trunk and a crown of lobed, lit clumps. */
function leafyTree(x: number, base: number, h: number, leaf: string, trunkC: string) {
  const w = h * 0.07;
  let s = `<ellipse cx="${x}" cy="${base}" rx="${f(h * 0.3)}" ry="${f(h * 0.04)}" fill="#000" opacity=".3" filter="url(#soft)"/>`;
  s += `<path d="M${f(x - w)} ${base} Q${f(x - w * 0.5)} ${f(base - h * 0.4)} ${f(x - w * 0.35)} ${f(base - h * 0.62)} L${f(x + w * 0.35)} ${f(base - h * 0.62)} Q${f(x + w * 0.5)} ${f(base - h * 0.4)} ${f(x + w)} ${base} Z" fill="${lin([[0, lighten(trunkC, 0.15)], [1, dk2(trunkC, 0.3)]], 0, 0, 1, 0)}"/>`;
  const dark = rad([[0, dk2(leaf, 0.1)], [1, dk2(leaf, 0.45)]]), mid = rad([[0, lighten(leaf, 0.15)], [0.6, leaf], [1, dk2(leaf, 0.3)]]), top = rad([[0, lighten(leaf, 0.35)], [1, leaf]]);
  const cy = base - h * 0.72, R = h * 0.3;
  for (let i = 0; i < 6; i++) s += leafBlob(x + r(-R, R) * 0.9, cy + r(-R * 0.4, R * 0.6), R * r(0.45, 0.6), dark);
  for (let i = 0; i < 7; i++) s += leafBlob(x + r(-R, R) * 0.75, cy + r(-R * 0.6, R * 0.3), R * r(0.4, 0.55), mid);
  for (let i = 0; i < 4; i++) s += leafBlob(x - R * 0.2 + r(-R, R) * 0.45, cy - R * 0.35 + r(-R * 0.3, R * 0.2), R * r(0.28, 0.4), top);
  return s;
}
/** A low leafy bush. */
function bush(x: number, base: number, sz: number, leaf: string) {
  const g = rad([[0, lighten(leaf, 0.2)], [0.6, leaf], [1, dk2(leaf, 0.35)]]);
  let s = `<ellipse cx="${x}" cy="${base}" rx="${f(sz * 1.3)}" ry="${f(sz * 0.18)}" fill="#000" opacity=".3" filter="url(#soft)"/>`;
  for (let i = 0; i < 5; i++) s += leafBlob(x + r(-sz, sz), base - sz * r(0.35, 0.7), sz * r(0.45, 0.65), g);
  return s;
}
/** Little bright leaf glints over a canopy (one path). */
function glints(cx: number, cy: number, rx: number, ry: number, c: string) {
  let d = '';
  for (let i = 0; i < 160; i++) { const a = r(0, Math.PI * 2), q = Math.sqrt(rnd()); const x = cx + Math.cos(a) * rx * q, y = cy + Math.sin(a) * ry * q - 10; d += `M${f(x)} ${f(y)} q3 -4 6 0 q-3 3 -6 0 `; }
  return `<path d="${d}" fill="${c}" opacity=".55"/>`;
}
/** Bark texture (0.9.9.4.4.2): fine vertical grain, a few knots — dark and light strokes, one path each. */
function bark(x: number, y: number, w: number, h: number, c: string) {
  let dark = '', light = '';
  for (let i = 0; i < Math.round(w / 3); i++) {
    const bx = x + r(0, w), by = y + r(0, h), len = r(20, 90);
    const p = `M${f(bx)} ${f(by)} q${f(r(-3, 3))} ${f(len / 2)} ${f(r(-2, 2))} ${f(len)} `;
    if (i % 3) dark += p; else light += p;
  }
  const knots = Array.from({ length: Math.max(1, Math.round(h / 260)) }, () => `<ellipse cx="${f(x + r(w * 0.2, w * 0.8))}" cy="${f(y + r(0, h))}" rx="${f(r(5, 9))}" ry="${f(r(8, 14))}" fill="none" stroke="${dk2(c, 0.5)}" stroke-width="2.5" opacity=".7"/>`).join('');
  return `<path d="${dark}" stroke="${dk2(c, 0.45)}" stroke-width="2" fill="none" opacity=".6"/><path d="${light}" stroke="${lighten(c, 0.2)}" stroke-width="1.5" fill="none" opacity=".35"/>${knots}`;
}
/** A rune monolith (the 3D plains and world tree): a tall stone with glowing slits. */
function monolith(x: number, base: number, h: number, w: number, stone: string, glow: string, lit: boolean, moss = '#4f8a3a') {
  // 0.9.9.4.4.2 (painted style): a rough-cut standing stone — lit and shaded faces, flecked texture, cracks,
  // moss on top running down, glowing runes carved down the front
  const outline = dk2(stone, 0.55);
  let s = `<ellipse cx="${x + w * 0.2}" cy="${base + 2}" rx="${f(w * 1.1)}" ry="${f(w * 0.2)}" fill="#000" opacity=".4" filter="url(#soft)"/>`;
  s += `<path d="M${x - w / 2} ${base} L${x - w / 2 + 4} ${base - h} L${x + w / 2 - 6} ${base - h - 8} L${x + w / 2} ${base} Z" fill="${lin([[0, lighten(stone, 0.18)], [0.45, stone], [1, dk2(stone, 0.3)]], 0, 0, 1, 0)}" stroke="${outline}" stroke-width="1" stroke-opacity=".5" stroke-linejoin="round"/>`
    + `<path d="M${x - w / 2} ${base} L${x + w / 2} ${base} L${x + w / 2 - 2} ${base - h * 0.3} L${x - w / 2 + 1} ${base - h * 0.3} Z" fill="${lin([[0, '#000', 0], [1, '#000', 0.35]])}"/>`;
  s += `<path d="M${x + w * 0.1} ${base - h - 4} L${x + w / 2 - 6} ${base - h - 8} L${x + w / 2} ${base} L${x + w * 0.15} ${base} Z" fill="#000" opacity=".28"/>`;
  s += `<path d="M${x - w / 2 + 4} ${base - h} L${x - w / 2 + 1} ${base}" stroke="${lighten(stone, 0.3)}" stroke-width="3" opacity=".5"/>`;
  s += speckle(x - w / 2 + 3, base - h, w - 8, h - 4, Math.round(h / 4), stone);
  s += `<path d="M${f(x - w * 0.3)} ${f(base - h * 0.4)} l${f(w * 0.12)} ${f(h * 0.08)} l${f(-w * 0.05)} ${f(h * 0.1)} M${f(x + w * 0.2)} ${f(base - h * 0.75)} l${f(-w * 0.1)} ${f(h * 0.06)}" stroke="${outline}" stroke-width="1.6" fill="none" opacity=".8"/>`;
  // moss: a cap with a few drips
  s += `<path d="M${x - w / 2 + 3} ${base - h + 10} Q${x - w * 0.2} ${base - h - 10} ${x + w / 2 - 6} ${base - h - 8} L${x + w / 2 - 4} ${base - h + 6} Q${x + w * 0.2} ${base - h + 16} ${x + w * 0.05} ${base - h + 8} Q${x - w * 0.15} ${base - h + 24} ${x - w * 0.25} ${base - h + 10} Z" fill="${lin([[0, lighten(moss, 0.25)], [1, dk2(moss, 0.25)]])}"/>`;
  s += `<path d="M${f(x - w * 0.25)} ${base - h + 12} q2 14 -1 26 M${f(x + w * 0.22)} ${base - h + 8} q-2 10 1 18" stroke="${moss}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
  s += `<path d="M${f(x - w * 0.3)} ${base} q${f(w * 0.2)} -14 ${f(w * 0.4)} -4 q${f(w * 0.2)} -10 ${f(w * 0.3)} 4 Z" fill="${moss}" opacity=".9"/>`;
  // runes: carved strokes that glow
  let rune = '';
  for (let i = 0; i < 3; i++) {
    const ry = base - h * (0.78 - i * 0.22), rh = h * 0.12;
    rune += `M${f(x)} ${f(ry)} v${f(rh)} M${f(x)} ${f(ry + rh * 0.35)} l${f(rnd() > 0.5 ? 5 : -5)} -4 M${f(x)} ${f(ry + rh * 0.7)} l${f(rnd() > 0.5 ? -5 : 5)} 4 `;
  }
  s += `<path d="${rune}" stroke="${glow}" stroke-width="3.2" stroke-linecap="round" fill="none" opacity="${lit ? 0.95 : 0.7}"${lit ? ' filter="url(#glow)" class="bg-flicker slow"' : ''}/>`;
  // 0.9.9.4.4.4: set into the ground — a low mound of earth, a few pebbles and grass tufts around the foot
  const earth = dk2(moss, 0.55);
  s += `<path d="M${f(x - w * 0.95)} ${base + 3} Q${f(x - w * 0.6)} ${base - 7} ${f(x - w * 0.3)} ${base - 5} Q${x} ${base - 9} ${f(x + w * 0.35)} ${base - 5} Q${f(x + w * 0.7)} ${base - 6} ${f(x + w * 1.05)} ${base + 3} Z" fill="${lin([[0, dk2(moss, 0.2)], [1, earth]])}"/>`;
  for (let i = 0; i < 4; i++) { const px = x + r(-w * 0.9, w * 0.9); s += `<ellipse cx="${f(px)}" cy="${f(base + r(-1, 3))}" rx="${f(r(2.5, 5))}" ry="${f(r(1.6, 3))}" fill="${lighten(stone, 0.12)}"/>`; }
  let tuft = '';
  for (let i = 0; i < 18; i++) { const gx = x + r(-w * 0.95, w * 0.95), gh = r(6, 16); tuft += `M${f(gx)} ${base + 2} q${f(r(-3, 3))} ${f(-gh / 2)} ${f(r(-5, 5))} ${f(-gh)} `; }
  s += `<path d="${tuft}" stroke="${moss}" stroke-width="1.8" fill="none" stroke-linecap="round"/>`;
  return s;
}
/**
 * 0.9.9.4.4.2: the four standing stones of the World Tree, in every arena, in the same places — two tall ones at
 * the sides and two smaller ones nearer the middle.
 */
function standingStones(stone: string, glow: string, lit: boolean, moss: string, inner = 720) {
  if (MENU) return '';
  return monolith(500, inner, 120, 44, stone, glow, lit, moss) + monolith(1100, inner, 120, 44, stone, glow, lit, moss)
    + monolith(180, 750, 190, 64, stone, glow, lit, moss) + monolith(1420, 750, 190, 64, stone, glow, lit, moss);
}
/** A stone brazier with a flame. */
function brazier(x: number, base: number, s: number, stone: string, lit: boolean) {
  if (MENU) return '';
  const flame = `<g class="bg-flicker" filter="url(#glow)"><path d="M${x - 9 * s} ${base - 34 * s} Q${x - 10 * s} ${base - 56 * s} ${x} ${base - 74 * s} Q${x + 10 * s} ${base - 56 * s} ${x + 9 * s} ${base - 34 * s} Z" fill="#ff9a2a"/><path d="M${x - 4 * s} ${base - 34 * s} Q${x - 4 * s} ${base - 48 * s} ${x} ${base - 58 * s} Q${x + 4 * s} ${base - 48 * s} ${x + 4 * s} ${base - 34 * s} Z" fill="#fff0a0"/></g>`;
  return `<path d="M${x - 14 * s} ${base} L${x - 9 * s} ${base - 26 * s} L${x - 16 * s} ${base - 34 * s} L${x + 16 * s} ${base - 34 * s} L${x + 9 * s} ${base - 26 * s} L${x + 14 * s} ${base} Z" fill="${stone}"/>${lit ? flame : `<ellipse cx="${x}" cy="${base - 36 * s}" rx="${12 * s}" ry="${4 * s}" fill="#ffb060" opacity=".7"/>`}`;
}
/** Grass tufts along a line (the near ground). */
function grass(n: number, y0: number, y1: number, color: string, hmin = 14, hmax = 34) {
  // 0.9.9.4.4.2 (painted style): a dense meadow edge — many thin blades in three shades (one path per shade, so it
  // stays cheap to draw), and a few tiny flowers
  const shades = [dk2(color, 0.25), color, lighten(color, 0.22)];
  const d = ['', '', ''];
  for (let i = 0; i < n * 6; i++) {
    const x = r(-10, W + 10), y = r(y0, y1), h = r(hmin, hmax) * r(0.6, 1.2), lean = r(-9, 9);
    d[i % 3] += `M${f(x)} ${f(y)} q${f(lean * 0.3)} ${f(-h * 0.55)} ${f(lean)} ${f(-h)} `;
  }
  const flowers = Array.from({ length: Math.round(n / 3) }, () => `<circle cx="${f(r(0, W))}" cy="${f(r(y0 - 6, y1 - 4))}" r="${f(r(1.6, 2.8))}" fill="${['#fff8e0', '#ffe27a', '#ffb3d0', '#d6e4ff'][Math.floor(rnd() * 4)]}"/>`).join('');
  return `<g fill="none" stroke-linecap="round">${d.map((p, i) => `<path d="${p}" stroke="${shades[i]}" stroke-width="${[2.4, 2, 1.6][i]}"/>`).join('')}</g><g opacity=".85">${flowers}</g>`;
}
/** A rock (low-poly: two faces). */
function rock(x: number, y: number, s: number, c: string) {
  return `<ellipse cx="${x}" cy="${y + 2}" rx="${f(50 * s)}" ry="${f(8 * s)}" fill="#000" opacity=".3" filter="url(#soft)"/><path d="M${x - 40 * s} ${y} L${x - 30 * s} ${y - 26 * s} L${x - 4 * s} ${y - 40 * s} L${x + 26 * s} ${y - 30 * s} L${x + 44 * s} ${y} Z" fill="${lin([[0, lighten(c, 0.15)], [1, dk2(c, 0.2)]], 0, 0, 1, 1)}" stroke="${dk2(c, 0.4)}" stroke-width="1" stroke-opacity=".5"/><path d="M${x - 4 * s} ${y - 40 * s} L${x + 26 * s} ${y - 30 * s} L${x + 44 * s} ${y} L${x + 4 * s} ${y} Z" fill="#000" opacity=".22"/>`
    + `<path d="M${x - 30 * s} ${y - 26 * s} L${x - 4 * s} ${y - 40 * s}" stroke="${lighten(c, 0.35)}" stroke-width="2.5" opacity=".6"/>${speckle(x - 30 * s, y - 34 * s, 70 * s, 30 * s, 14, c)}`;
}
/** Stone texture: small light and dark flecks in a box (one path each). */
function speckle(x: number, y: number, w: number, h: number, n: number, c: string) {
  let dark = '', light = '';
  for (let i = 0; i < n; i++) {
    const px = x + r(0, w), py = y + r(0, h), s = r(1, 2.6);
    const p = `M${f(px)} ${f(py)} h${f(s)} v${f(s * 0.8)} h${f(-s)}Z `;
    if (i % 2) dark += p; else light += p;
  }
  return `<path d="${dark}" fill="${dk2(c, 0.4)}" opacity=".7"/><path d="${light}" fill="${lighten(c, 0.3)}" opacity=".55"/>`;
}

function forest(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#7fb2d8'], [0.5, '#cfe4ec'], [1, '#f2f6ee']], [[0, '#2a1a44'], [0.4, '#8a4a6a'], [0.7, '#e88a5a'], [1, '#ffd49a']], [[0, '#050a16'], [0.55, '#0f2236'], [1, '#1c3c42']]);
  const far = pick(t, '#b8c8d4', '#a0707a', '#1e3644'), mid = pick(t, '#5e6a80', '#4a2e46', '#0f1e28'), near = pick(t, '#262838', '#1c1222', '#05090e');
  const stone = pick(t, ['#d8dce4', '#a8aebc', '#6a7080'], ['#8a6a78', '#5e4458', '#2e2030'], ['#3a4656', '#28323e', '#121820']);
  // 0.9.9.5: the middle row of trunks is laid out first, so the eyes can peer out from the gaps between them
  const mids = Array.from({ length: 12 }, (_, i) => [(i / 12) * W + r(0, 90), r(40, 70)] as [number, number]);
  const trees: Array<[number, number]> = [...mids.map(([x, w]) => [x - 4, x + w + 10] as [number, number]),
    ...([[90, 190, 30], [1500, 210, -40], [420, 110, 20], [1170, 120, -10]] as const).map(([x, w, lean]) => [x - w / 2 - Math.abs(lean) - 30, x + w / 2 + Math.abs(lean) + 30] as [number, number])];
  return `<defs>${grad('sk', sky)}${grad('cometTail', [[0, '#fff', 0.9], [1, '#9fd8ff', 0]], false)}${floorDefs(stone)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? milkyWay() + stars(160, 420) + comets(2) + moon(1200, 150, 54) : t === 'sunset' ? horizonGlow(560, '#ff8a4a') + sun(1080, 520, 70, '#ffd9a0', '#ff9a5a') : sun(1180, 120, 50, '#fffbe8', '#fff6c8')}
    ${(() => { const g = lin([[0, lighten(far, 0.12)], [0.5, far], [1, dk2(far, 0.12)]], 0, 0, 1, 0); return Array.from({ length: 34 }, (_, i) => { const x = (i / 34) * W + r(-20, 20), w = r(14, 34); return `<path d="M${f(x)} 700 L${f(x + w * 0.15)} 0 H${f(x + w * 0.85)} L${f(x + w)} 700 Z" fill="${g}" opacity="${f(r(0.35, 0.7))}"/>`; }).join(''); })()}
    ${haze(560, pick(t, '#f2f6f4', '#ffc0a0', '#2a4a5a'), 0.75)}
    ${mist(600, pick(t, '#ffffff', '#ffd0b0', '#4e7a86'), pick(t, 0.6, 0.4, 0.35))}
    ${eyes(t === 'night' ? 6 : t === 'sunset' ? 3 : 1, 560, 700, t === 'day' ? 0.3 : 1, trees)}
    ${(() => { const g = lin([[0, lighten(mid, 0.14)], [0.4, mid], [1, dk2(mid, 0.3)]], 0, 0, 1, 0); return mids.map(([x, w]) => `<path d="M${f(x)} 760 L${f(x + 8)} 0 L${f(x + w)} 0 L${f(x + w + 6)} 760Z" fill="${g}" opacity=".92"/>${bark(x + 8, 40, w - 10, 680, mid)}`).join(''); })()}
    ${t !== 'night' ? rays(t === 'day' ? 1180 : 1080, t === 'day' ? 120 : 520, pick(t, '#fffdf0', '#ffd39a', '#000'), pick(t, 0.32, 0.3, 0)) : ''}
    ${haze(700, pick(t, '#e8f0f0', '#d08a7a', '#1c3a40'), 0.35)}
    ${rock(300, 760, 1.3, pick(t, '#7a8090', '#4a3444', '#141a22'))}${rock(1290, 756, 1.1, pick(t, '#6e7484', '#40303e', '#111820'))}
    ${trunk(90, 190, near, 30)}${trunk(1500, 210, near, -40)}${trunk(420, 110, mid, 20)}${trunk(1170, 120, mid, -10)}
    ${t !== 'day' ? fireflies(t === 'night' ? 28 : 12, 460, 760, '#e8ff9a') : ''}
    ${(() => { const lf = pick(t, '#3e5e34', '#3a2a30', '#0c1a14'); const g = rad([[0, lighten(lf, 0.18)], [0.6, lf], [1, dk2(lf, 0.4)]], 0.4, 0.7); let c = ''; for (let i = 0; i < 26; i++) c += leafBlob(r(-40, W + 40), r(-30, 70), r(60, 120), g); return `<g class="bg-sway-soft">${c}</g>`; })()}
    <path d="M0 740 Q400 724 800 726 Q1200 724 1600 740 L1600 900 L0 900 Z" fill="${pick(t, '#4e5a48', '#2a1c26', '#070d10')}"/>
    ${[60, 330, 610, 1000, 1260, 1540].map((x) => bush(x + r(-30, 30), 748, r(26, 42), pick(t, '#4a6e3a', '#4a3a34', '#10201a'))).join('')}
    ${standingStones(pick(t, '#5e6670', '#3a2a34', '#121a20'), '#6ec8ff', t !== 'day', pick(t, '#4f8a3a', '#6a6a34', '#1e4a2c'), 742)}
    ${grass(60, 720, 770, pick(t, '#5a7a4a', '#4a3a3a', '#0e1a12'))}
    ${arenaFloor(t, stone, pick(t, '#3a9cff', '#7ac8ff', '#5ab0ff'), pick(t, '#2a6ad0', '#e8f4ff', '#cfe8ff'))}
    ${mist(880, pick(t, '#ffffff', '#ffd8b8', '#2a4f56'), 0.18)}`;
}

function swamp(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#8fb0a4'], [0.55, '#cfdcc0'], [1, '#eef0d8']], [[0, '#3a2040'], [0.45, '#9a5a5a'], [0.75, '#e8a868'], [1, '#f6d49a']], [[0, '#06080e'], [0.5, '#14222a'], [1, '#22383a']]);
  const tree = pick(t, '#2f3d2c', '#24182a', '#06090a');
  const water = pick(t, ['#8aa898', '#4a6656'], ['#c4865e', '#5a3438'], ['#24383a', '#081212']);
  const stone = pick(t, ['#7a8a74', '#56644e', '#2e3628'], ['#6a5450', '#4a3638', '#22181c'], ['#2a3632', '#1c2624', '#0a100e']);
  const deadTree = (x: number, y: number, h: number, c: string) => {
    // 0.9.9.4.4.2 (painted style): each limb has a dark outline and a lit edge
    const b = (x1: number, y1: number, x2: number, y2: number, w: number) => { const mx = f((x1 + x2) / 2 + r(-15, 15)), my = f((y1 + y2) / 2); const d = `M${f(x1)} ${f(y1)} Q ${mx} ${my} ${f(x2)} ${f(y2)}`; return `<path d="${d}" stroke="${dk2(c, 0.28)}" stroke-width="${f(w + 1.5)}" opacity=".9" stroke-linecap="round" fill="none"/><path d="${d}" stroke="${c}" stroke-width="${f(w)}" stroke-linecap="round" fill="none"/><path d="${d}" transform="translate(${f(-w * 0.22)} 0)" stroke="${lighten(c, 0.25)}" stroke-width="${f(Math.max(1, w * 0.18))}" stroke-linecap="round" fill="none" opacity=".5"/>`; };
    let s = b(x, y, x + 8, y - h, h * 0.06) + b(x + 4, y - h * 0.55, x - h * 0.38, y - h * 0.86, h * 0.026) + b(x + 6, y - h * 0.72, x + h * 0.42, y - h * 0.98, h * 0.022) + b(x - h * 0.2, y - h * 0.74, x - h * 0.32, y - h * 1.02, h * 0.014) + b(x + 8, y - h, x + 34, y - h * 1.16, h * 0.014);
    for (let i = 0; i < 6; i++) { const mx = x + r(-h * 0.35, h * 0.4), my = y - h * r(0.7, 1); s += `<path class="bg-sway" d="M${f(mx)} ${f(my)} q 4 ${f(r(20, 40))} -2 ${f(r(40, 80))}" stroke="${pick(t, '#6e8a5a', '#5c4a42', '#2a3e26')}" stroke-width="3" fill="none" opacity=".85"/>`; }
    return s;
  };
  const reeds = (n: number, y0: number, y1: number, c: string) => Array.from({ length: n }, () => { const x = r(0, W), y = r(y0, y1), h = r(50, 110); return `<g><line x1="${f(x)}" y1="${f(y)}" x2="${f(x + r(-6, 6))}" y2="${f(y - h)}" stroke="${c}" stroke-width="2.6"/><ellipse cx="${f(x + r(-3, 3))}" cy="${f(y - h * 0.82)}" rx="4" ry="12" fill="${c}"/></g>`; }).join('');
  const lit = t !== 'day';
  return `<defs>${grad('sk', sky)}${grad('wt', [[0, water[0]], [1, water[1]]])}${radial('wisp', [[0, '#cfff9a', 0.9], [1, '#cfff9a', 0]])}${floorDefs(stone)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? stars(80, 320, '#cfe8b0') + moon(420, 160, 46, '#dfe9a8') : t === 'sunset' ? horizonGlow(560, '#ff8a5a') + sun(420, 520, 66, '#ffe0a8', '#ff9a60') + clouds(4, 120, 260, '#f0a888', 0.5) : sun(400, 130, 40, '#fbfbe6', '#ffffff') + clouds(5, 90, 240, '#f6f8ee', 0.6)}
    ${hills(570, 20, pick(t, '#6e8a72', '#5a3a4a', '#13201a'))}
    ${[160, 420, 700, 1000, 1260, 1480].map((x, i) => deadTree(x, 600, 140 + (i % 3) * 30, pick(t, '#5a6a5a', '#5a3a48', '#0e1614'))).join('')}
    ${haze(600, pick(t, '#eef4e6', '#f0b090', '#2e4a3a'), 0.6)}
    <rect x="0" y="600" width="${W}" height="300" fill="url(#wt)"/>
    <g class="bg-drift slow" stroke="${lighten(water[0], 0.35)}" stroke-width="2" fill="none" opacity=".45">${Array.from({ length: 22 }, () => { const x = r(0, W), y = r(612, 720), w = r(30, 90); return `<path d="M${f(x)} ${f(y)} q${f(w / 2)} -3 ${f(w)} 0"/>`; }).join('')}</g>
    ${mist(610, pick(t, '#f6f8ec', '#f8c8a8', '#7a9a7a'), pick(t, 0.6, 0.45, 0.4))}
    ${[110, 1440].map((x, i) => deadTree(x, 720, 340 + i * 40, tree)).join('')}
    <g opacity=".22" transform="translate(0 1440) scale(1 -1)">${[110, 1440].map((x, i) => deadTree(x, 720, 340 + i * 40, tree)).join('')}</g>
    ${(() => { const c = pick(t, '#5a8a44', '#6a5a34', '#1f3a1a'); const g = rad([[0, lighten(c, 0.25)], [1, dk2(c, 0.2)]], 0.4, 0.3, 0.8); return Array.from({ length: 18 }, () => { const x = r(0, W), y = r(640, 720), w = r(16, 34); return `<path d="M${f(x)} ${f(y)} L${f(x + w)} ${f(y - 2)} A${f(w)} ${f(w * 0.22)} 0 1 1 ${f(x + w * 0.9)} ${f(y + 3)} Z" fill="${g}"/>${rnd() > 0.7 ? `<circle cx="${f(x - w * 0.3)}" cy="${f(y - 3)}" r="3.5" fill="${pick(t, '#ffd0e0', '#ffc0a0', '#c8a0ff')}"/>` : ''}`; }).join(''); })()}
    ${[40, 360, 1240, 1560].map((x) => bush(x, 660, r(30, 44), pick(t, '#4a6a3a', '#4a3a30', '#0e1a14'))).join('')}
    ${reeds(26, 640, 720, tree)}
    ${standingStones(pick(t, '#5a6454', '#3a2a30', '#141c18'), '#9aff8a', lit, pick(t, '#4f8a3a', '#6a6a34', '#1e4a2c'))}
    ${t !== 'day' ? `<g class="bg-float">${Array.from({ length: t === 'night' ? 7 : 3 }, () => `<circle cx="${f(r(100, W - 100))}" cy="${f(r(420, 660))}" r="${f(r(14, 24))}" fill="url(#wisp)" class="bg-flicker" style="animation-delay:${f(r(0, 3))}s"/>`).join('')}</g>` : ''}
    ${fireflies(t === 'night' ? 30 : 10, 380, 700, '#d8ff7a')}
    ${arenaFloor(t, stone, pick(t, '#4aff7a', '#9aff8a', '#7affa0'), pick(t, '#1a7a3a', '#f0ffe0', '#d8ffe0'))}
    ${reeds(14, 880, 900, tree)}
    ${mist(860, pick(t, '#ffffff', '#ffd8c0', '#9ab89a'), pick(t, 0.25, 0.2, 0.16))}`;
}

function plains(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#4a8ed8'], [0.55, '#9ccaee'], [1, '#e6f2fa']], [[0, '#2e1c48'], [0.45, '#b0586e'], [0.75, '#f2a868'], [1, '#f8d48e']], [[0, '#060b1e'], [0.6, '#18244e'], [1, '#2c325a']]);
  const lit = t !== 'day';
  const stone = pick(t, ['#8a84a4', '#625c7c', '#34304a'], ['#7a5a72', '#54405a', '#2a1e30'], ['#2a2a48', '#1c1c34', '#0c0c1a']);
  const house = (x: number, y: number, s: number, wall: string, roof: string) => {
    const w = 46 * s, h = 30 * s;
    const win = lit ? `<rect x="${f(x + w * 0.2)}" y="${f(y - h * 0.62)}" width="${f(w * 0.18)}" height="${f(h * 0.3)}" fill="#ffcf6a" class="bg-flicker slow"/><rect x="${f(x + w * 0.6)}" y="${f(y - h * 0.62)}" width="${f(w * 0.18)}" height="${f(h * 0.3)}" fill="#ffcf6a"/>` : '';
    return `<rect x="${f(x)}" y="${f(y - h)}" width="${f(w)}" height="${f(h)}" fill="${wall}"/><polygon points="${f(x - 5 * s)},${f(y - h)} ${f(x + w / 2)},${f(y - h - 22 * s)} ${f(x + w + 5 * s)},${f(y - h)}" fill="${roof}"/>${win}`;
  };
  const wall = pick(t, '#e8dcc0', '#c99a7a', '#3a3550'), roof = pick(t, '#a04a3a', '#6e2e3a', '#1f1a30');
  const village = (x: number, y: number, s: number) => Array.from({ length: 5 }, (_, i) => house(x + i * 58 * s + r(-8, 8), y + r(-4, 6), s * r(0.85, 1.1), wall, roof)).join('');
  const gob = (x: number, y: number, s: number, delay: number) => `<g class="bg-walk" style="animation-delay:${delay}s"><g transform="translate(${f(x)} ${f(y - 200 * s)}) scale(${s})" opacity="${pick(t, 0.85, 0.7, 0.55)}">${characterSvg('goblin', 'opp', 'ember').replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '')}</g></g>`;
  const mono = pick(t, '#5a566e', '#3a2a40', '#14142a');
  return `<defs>${grad('sk', sky)}${floorDefs(stone)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? milkyWay() + stars(150, 460) + moon(260, 140, 44) : t === 'sunset' ? horizonGlow(580, '#ffa060') + sun(820, 560, 110, '#ffe2a0', '#ffb070') + clouds(6, 120, 320, '#f7c7b0', 0.55) : sun(1300, 130, 50, '#fffbe0', '#fff6c0') + clouds(8, 70, 300, '#ffffff', 0.9)}
    ${mountains(540, 120, pick(t, '#8aa0c0', '#7a5070', '#1c2244'), 2)}
    ${haze(560, pick(t, '#e6f0fa', '#ffb890', '#2a3060'), 0.5)}
    ${mountains(590, 70, pick(t, '#6f86a8', '#5a3a58', '#151a36'), 0.6)}
    ${haze(620, pick(t, '#e6f0fa', '#ffb890', '#2a3060'), 0.4)}
    ${hills(630, 24, pick(t, '#86a868', '#7a5a5a', '#1e2a2a'), 0.5)}
    ${[[180, 0.7], [560, 0.85], [700, 0.6], [930, 0.75], [1420, 0.8]].map(([x, k]) => `<path d="M${f(x - 90 * k)} ${f(646)} L${f(x + 90 * k)} 640 L${f(x + 110 * k)} 660 L${f(x - 70 * k)} 668 Z" fill="${pick(t, '#c8b456', '#a07040', '#2a2a24')}" opacity=".75"/><path d="M${f(x - 80 * k)} 652 L${f(x + 96 * k)} 646 M${f(x - 76 * k)} 659 L${f(x + 102 * k)} 653" stroke="${pick(t, '#a8923e', '#7a5030', '#1a1a18')}" stroke-width="2" opacity=".6"/>`).join('')}
    ${village(240, 640, 0.6)}${village(1060, 634, 0.55)}
    ${[[120, 640, 70], [420, 650, 90], [640, 636, 60], [900, 642, 80], [1180, 644, 64], [1360, 650, 96], [1540, 642, 72]].map(([x, y, h]) => leafyTree(x, y, h, pick(t, '#4f8a3a', '#6a6034', '#132a1e'), pick(t, '#5a4030', '#3a2420', '#141418'))).join('')}
    <g transform="translate(1200 600)"><rect x="-6" y="0" width="12" height="80" fill="${pick(t, '#cbb79a', '#5a3a3a', '#1a1a28')}"/><g class="bg-spin">${[0, 90, 180, 270].map((a) => `<rect x="-4" y="-64" width="8" height="64" fill="${pick(t, '#8a6a4a', '#3a2228', '#141420')}" transform="rotate(${a + 20})"/>`).join('')}</g></g>
    ${hills(680, 26, pick(t, '#6a9a4c', '#4a5a3a', '#162418'), 1.7)}
    ${[90, 380, 720, 890, 1210, 1500].map((x) => bush(x + r(-20, 20), 700 + r(0, 10), r(18, 30), pick(t, '#4a7a34', '#5a4a2e', '#10241a'))).join('')}
    ${gob(280, 700, 0.42, 0)}${gob(380, 704, 0.38, 6)}${gob(1250, 706, 0.4, 3)}
    ${standingStones(mono, '#ffb070', lit, pick(t, '#4f8a3a', '#6a6a34', '#1e4a2c'))}
    ${brazier(330, 742, 1.2, mono, lit)}${brazier(1270, 742, 1.2, mono, lit)}
    ${grass(70, 700, 760, pick(t, '#3f6a2a', '#33472b', '#0b140c'))}
    ${arenaFloor(t, stone, pick(t, '#ffffff', '#ffe0c0', '#e8e6ff'), pick(t, '#4a3a6a', '#ffffff', '#ffffff'))}
    ${t === 'night' ? fireflies(14, 600, 800, '#fff2a0') : ''}`;
}

function castle(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#5a86c0'], [0.6, '#a8c2e0'], [1, '#e2eaf2']], [[0, '#1e0c24'], [0.4, '#7a2232'], [0.72, '#d0582e'], [1, '#f4a050']], [[0, '#04061c'], [0.6, '#161f4e'], [1, '#2e3474']]);
  const stoneC = pick(t, '#5e5e74', '#2c1a26', '#13132a'), roof = pick(t, '#3e3e5e', '#1c0e1a', '#1c1b36');
  const lit = t !== 'day';
  const wallG = lin([[0, lighten(stoneC, 0.14)], [0.55, stoneC], [1, dk2(stoneC, 0.25)]], 0, 0, 1, 0);
  const footG = lin([[0, '#000', 0], [1, '#000', 0.35]]);
  const roofG = lin([[0, lighten(roof, 0.15)], [0.5, roof], [1, dk2(roof, 0.3)]], 0, 0, 1, 0);
  const tower = (x: number, w: number, h: number) => `<rect x="${x}" y="${640 - h}" width="${w}" height="${h}" fill="${wallG}"/><rect x="${x}" y="${640 - h * 0.35}" width="${w}" height="${h * 0.35}" fill="${footG}"/><rect x="${x}" y="${640 - h}" width="${w}" height="${h}" fill="url(#bricks)"/><rect x="${x + w * 0.62}" y="${640 - h}" width="${w * 0.38}" height="${h}" fill="#000" opacity=".2"/><rect x="${x + 3}" y="${640 - h}" width="5" height="${h}" fill="#fff" opacity=".07"/><polygon points="${x - 10},${640 - h} ${x + w / 2},${560 - h} ${x + w + 10},${640 - h}" fill="${roofG}"/><path d="M${x - 4} ${640 - h - 14} H${x + w + 4} M${x + 6} ${640 - h - 34} H${x + w - 6} M${x + 16} ${640 - h - 54} H${x + w - 16}" stroke="${dk2(roof, 0.35)}" stroke-width="1.5" opacity=".6"/><rect x="${x - 6}" y="${640 - h}" width="${w + 12}" height="6" fill="${dk2(stoneC, 0.2)}"/>`
    + Array.from({ length: Math.floor(h / 70) }, (_, i) => `<rect x="${x + w / 2 - 6}" y="${640 - h + 40 + i * 70}" width="12" height="20" rx="6" fill="${lit ? '#ffcf6a' : '#20202e'}" opacity="${lit ? (rnd() > 0.35 ? 0.95 : 0.2) : 0.6}"${lit ? ' class="bg-flicker slow"' : ''}/>`).join('')
    + `<line x1="${x + w / 2}" y1="${560 - h}" x2="${x + w / 2}" y2="${520 - h}" stroke="${roof}" stroke-width="3"/><path class="bg-flag" d="M${x + w / 2} ${520 - h} q 18 6 34 0 q -16 10 0 18 q -18 -6 -34 0 z" fill="#b8263a"/>`;
  const soldier = (x: number, y: number, s: number, flip: boolean, weapon: 'spear' | 'sword') => {
    const c = pick(t, '#2c3038', '#1a0c10', '#06070e');
    const g = `<circle cx="0" cy="-58" r="7"/><path d="M-7 -62 q7 -14 14 0 z"/><rect x="-8" y="-50" width="16" height="30" rx="4"/><rect x="-8" y="-22" width="6" height="22"/><rect x="2" y="-22" width="6" height="22"/><ellipse cx="-11" cy="-36" rx="7" ry="11"/>`
      + (weapon === 'spear' ? `<line x1="10" y1="-10" x2="16" y2="-92" stroke="${c}" stroke-width="3"/><polygon points="13,-92 16,-104 19,-92"/>` : `<g class="bg-swing"><line x1="8" y1="-40" x2="34" y2="-70" stroke="${c}" stroke-width="3"/></g>`);
    return `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})" fill="${lin([[0, lighten(c, 0.2)], [1, c]], 0, 0, 1, 0)}" opacity="${pick(t, 0.75, 0.85, 0.9)}">${g}<rect x="-8" y="-50" width="5" height="30" fill="#fff" opacity=".12"/></g>`;
  };
  const army = (x0: number, flip: boolean) => Array.from({ length: 9 }, (_, i) => soldier(x0 + (flip ? -1 : 1) * (i * 34 + r(-6, 6)), 718 + (i % 3) * 6, 0.9 + (i % 3) * 0.08, flip, i % 4 === 3 ? 'sword' : 'spear')).join('');
  const cloth = pick(t, '#a8243a', '#7a1424', '#5a1020'), gold = pick(t, '#e8c060', '#c89a40', '#8a7040');
  const banner = (x: number) => `<line x1="${x}" y1="720" x2="${x}" y2="470" stroke="${pick(t, '#3a3030', '#1a0c10', '#0a0a14')}" stroke-width="7"/><circle cx="${x}" cy="466" r="6" fill="${gold}"/>`
    + `<g class="bg-flag"><path d="M${x} 480 h62 v130 l-31 -22 l-31 22 Z" fill="${lin([[0, lighten(cloth, 0.15)], [0.5, cloth], [1, dk2(cloth, 0.3)]], 0, 0, 1, 0)}"/><path d="M${x + 4} 486 h54 v118 l-27 -19 l-27 19 Z" fill="none" stroke="${gold}" stroke-width="2.5"/>`
    + `<circle cx="${x + 31}" cy="530" r="15" fill="none" stroke="${gold}" stroke-width="2.5"/><path d="M${x + 31} 518 l4 9 h9 l-7 6 l3 9 l-9 -5 l-9 5 l3 -9 l-7 -6 h9 z" fill="${gold}"/></g>`;
  const stone = pick(t, ['#8a8494', '#5e5868', '#2e2a36'], ['#5a3a3a', '#3e2628', '#1e1012'], ['#2a2a40', '#1c1c30', '#0c0c18']);
  // masonry: courses of stone blocks, the joints offset every other course, a few lighter and darker blocks
  const bricks = `<pattern id="bricks" width="44" height="28" patternUnits="userSpaceOnUse"><path d="M0 0.5 H44 M0 14.5 H44 M22 0 V14 M0 14 V28 M44 14 V28" stroke="${dk2(stoneC, 0.45)}" stroke-width="1.6" fill="none" opacity=".7"/><rect x="2" y="2" width="18" height="11" fill="#fff" opacity=".05"/><rect x="24" y="16" width="18" height="11" fill="#000" opacity=".08"/><path d="M2 2.5 H20 M24 16.5 H42" stroke="#fff" stroke-width="1" opacity=".12"/></pattern>`;
  return `<defs>${grad('sk', sky)}${floorDefs(stone)}${DEFS}${bricks}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? milkyWay() + stars(160, 460) + moon(300, 150, 52, '#e8e6ff') : t === 'sunset' ? horizonGlow(560, '#ff5a2a') + sun(1250, 520, 90, '#ffb070', '#ff5a3a') + clouds(5, 120, 300, '#ff9a7a', 0.4) : sun(1280, 140, 44, '#fffbe6', '#ffffff') + clouds(7, 80, 280, '#ffffff', 0.85)}
    ${mountains(600, 110, pick(t, '#7686a2', '#3a1622', '#0e1030'), 1.3)}
    ${haze(620, pick(t, '#dfe8f4', '#ff7a5a', '#1a2050'), 0.5)}
    ${hills(640, 18, pick(t, '#4e5e4c', '#1a0a12', '#10122a'))}
    <rect x="560" y="430" width="480" height="210" fill="${lin([[0, lighten(stoneC, 0.08)], [1, dk2(stoneC, 0.15)]])}"/><rect x="560" y="430" width="480" height="210" fill="url(#bricks)"/><rect x="560" y="560" width="480" height="80" fill="${lin([[0, '#000', 0], [1, '#000', 0.3]])}"/>
    ${[[596, 432, 150], [640, 432, 90], [985, 432, 170], [508, 330, 260], [1092, 320, 220], [770, 220, 120]].map(([ix, iy, len]) => ivy(ix, iy, len, pick(t, '#4f7d3a', '#3e3e22', '#14281a'))).join('')}
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${560 + i * 40}" y="414" width="22" height="18" fill="${stoneC}"/>`).join('')}
    ${tower(500, 90, 330)}${tower(1010, 90, 330)}${tower(740, 120, 420)}
    <path d="M760 640 L760 590 Q800 548 840 590 L840 640 Z" fill="${pick(t, '#2a2a38', '#0c0408', '#05050f')}"/>
    <path d="M770 586 V640 M784 572 V640 M798 568 V640 M812 570 V640 M826 578 V640 M762 600 H838 M762 616 H838 M762 630 H838" stroke="${pick(t, '#55505e', '#3a2a22', '#2a2a40')}" stroke-width="2.5"/>
    <path d="M752 640 L752 588 Q800 538 848 588 L848 640" stroke="${dk2(stoneC, 0.3)}" stroke-width="6" fill="none"/>
    <rect x="560" y="430" width="480" height="10" fill="#000" opacity=".22"/>
    <path d="M400 712 C 440 660, 470 640, 492 636 L1108 636 C 1130 640, 1160 660, 1200 712 Z" fill="${pick(t, '#5a6c57', '#22101a', '#14162e')}"/>
    <path d="M488 634 L1112 634 L1124 652 L476 652 Z" fill="${dk2(stoneC, 0.25)}"/>
    <path d="M760 652 L840 652 L860 712 L740 712 Z" fill="${pick(t, '#8a7a62', '#3a2420', '#1c1a2a')}" opacity=".85"/>
    ${Array.from({ length: 9 }, (_, i) => `<ellipse cx="${f(470 + i * 82 + r(-10, 10))}" cy="${f(664 + r(0, 14))}" rx="${f(r(18, 30))}" ry="${f(r(7, 11))}" fill="${dk2(stoneC, 0.15)}" opacity=".7"/>`).join('')}
    ${lit ? `<g class="bg-flicker" filter="url(#glow)"><circle cx="740" cy="600" r="6" fill="#ffb347"/><circle cx="860" cy="600" r="6" fill="#ffb347"/></g>` : ''}
    ${haze(700, pick(t, '#e8eef6', '#ff8a5a', '#1a2050'), 0.25)}
    ${grass(30, 655, 715, pick(t, '#5e7a48', '#3a2a24', '#121a22'), 10, 22)}
    ${banner(380)}${banner(1158)}
    ${MENU ? '' : army(40, false) + army(1560, true)}
    ${standingStones(pick(t, '#6a6878', '#3a2228', '#16162a'), '#ffb060', lit, pick(t, '#4f8a3a', '#6a6a34', '#1e4a2c'))}
    ${brazier(270, 740, 1.4, pick(t, '#4a4a56', '#2a1418', '#121222'), lit || true)}${brazier(1330, 740, 1.4, pick(t, '#4a4a56', '#2a1418', '#121222'), lit || true)}
    ${arenaFloor(t, stone, pick(t, '#ffb060', '#ffb060', '#a8a0ff'), pick(t, '#ffffff', '#fff0d0', '#e8e6ff'))}
    ${MENU ? '' : `<g class="bg-spark" filter="url(#glow)"><circle cx="262" cy="700" r="5" fill="#fff6c0"/><circle cx="1338" cy="700" r="5" fill="#fff6c0" style="animation-delay:2.7s"/></g>`}
    ${t === 'night' ? fireflies(8, 520, 700, '#ffcf6a') : ''}`;
}

function worldtree(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#4a8ad8'], [0.5, '#9cd0f2'], [0.85, '#e8f6ff'], [1, '#ffffff']], [[0, '#2a1450'], [0.45, '#b04a78'], [0.8, '#f4a060'], [1, '#ffe0a0']], [[0, '#0b0626'], [0.45, '#2a1260'], [0.8, '#1d4f78'], [1, '#2c8a8a']]);
  const bark0 = pick(t, '#6a4a32', '#4a2e1c', '#1e1828');
  const barkC = bark0, leaf = pick(t, ['#3f9a5a', '#56b86a', '#7ad68a'], ['#7a5a3a', '#a0703a', '#e0a050'], ['#14402f', '#1b5a3c', '#2f9e6a']);
  const lit = t !== 'day';
  const stone = pick(t, ['#7a8a8a', '#56645e', '#2a3430'], ['#6a5450', '#4a3a3a', '#22181a'], ['#1e3038', '#14222a', '#081016']);
  // 0.9.9.4.4.4: the crown is one full mass — big dark clumps (a ring at the edge and more inside) give a solid
  // silhouette, then four layers of smaller clumps on top, each lighter and further up-left, so it reads round and
  // nothing hangs loose in the air. Branches show through the lower gaps.
  const canopy = (cx: number, cy: number, rx: number, ry: number) => {
    const ball = (base: string, hi: number) => rad([[0, lighten(base, hi)], [0.55, base], [1, dk2(base, 0.4)]]);
    const deep = dk2(leaf[0], 0.5);
    let s = '';
    const limbs = [[790, 330, 560, 250], [790, 330, 690, 170], [810, 330, 900, 150], [810, 330, 1050, 240], [800, 330, 360, 270], [800, 330, 1240, 280]];
    s += limbs.map(([x0, y0, x1, y1]) => `<path d="M${x0} ${y0} Q${f((x0 + x1) / 2)} ${f(Math.min(y0, y1) - 30)} ${x1} ${y1}" stroke="${dk2(barkC, 0.25)}" stroke-width="16" fill="none" stroke-linecap="round"/>`).join('');
    // the silhouette
    for (let i = 0; i < 22; i++) { const a = (i / 22) * Math.PI * 2 + r(-0.1, 0.1); s += leafBlob(cx + Math.cos(a) * rx * 0.78, cy + 20 + Math.sin(a) * ry * 0.72, r(70, 95), ball(deep, 0.1)); }
    for (let i = 0; i < 18; i++) { const a = r(0, Math.PI * 2), d = Math.sqrt(rnd()); s += leafBlob(cx + Math.cos(a) * rx * 0.6 * d, cy + 20 + Math.sin(a) * ry * 0.55 * d, r(80, 110), ball(deep, 0.1)); }
    const layers: [number, number, number, number, number, number, string, number][] = [
      // n, k (how far out), dx, dy, rMin, rMax, colour, highlight
      [70, 0.92, 0, 30, 38, 60, dk2(leaf[0], 0.2), 0.12],
      [80, 0.8, -15, 0, 32, 52, leaf[1], 0.18],
      [60, 0.62, -45, -35, 26, 44, leaf[2], 0.25],
      [34, 0.42, -80, -65, 16, 28, lighten(leaf[2], 0.15), 0.3],
    ];
    for (const [n, k, dx, dy, r0, r1, c, hi] of layers) {
      const g = ball(c, hi);
      for (let i = 0; i < n; i++) {
        const a = r(0, Math.PI * 2), d = Math.sqrt(rnd());
        // upper clumps sit inside the crown; lower ones tuck under the mass
        s += leafBlob(cx + dx + Math.cos(a) * rx * 0.82 * k * d, cy + dy + Math.sin(a) * ry * 0.78 * k * d, r(r0, r1), g);
      }
    }
    return s + glints(cx - 40, cy - 30, rx * 0.6, ry * 0.5, lighten(leaf[2], 0.35));
  };
  const island = (x: number, y: number, s: number) => {
    const dirt = pick(t, '#7a5a42', '#5a3a2a', '#1e1a2a');
    const bits = Array.from({ length: 4 }, (_, i) => `<rect x="${f(x + r(-20, 20) * s)}" y="${f(y + (80 + i * 14) * s)}" width="${f(r(3, 6) * s)}" height="${f(r(3, 6) * s)}" fill="${dirt}" transform="rotate(${f(r(0, 45))} ${f(x)} ${f(y + 90 * s)})"/>`).join('');
    return `<g class="bg-float"><ellipse cx="${x}" cy="${y + 40 * s}" rx="${70 * s}" ry="${30 * s}" fill="${pick(t, '#9ff5ff', '#ffd0a0', '#7affd0')}" opacity=".25" filter="url(#blur20)"/>`
      + `<path d="M${x - 60 * s} ${y} Q${x} ${y - 16 * s} ${x + 60 * s} ${y} L${x + 20 * s} ${y + 50 * s} L${x} ${y + 80 * s} L${x - 24 * s} ${y + 46 * s} Z" fill="${lin([[0, lighten(dirt, 0.12)], [1, dk2(dirt, 0.45)]], 0, 0, 0.6, 1)}"/>`
      + `<path d="M${x - 30 * s} ${y + 10 * s} L${x - 10 * s} ${y + 40 * s} M${x + 20 * s} ${y + 8 * s} L${x + 6 * s} ${y + 50 * s}" stroke="${dk2(dirt, 0.35)}" stroke-width="2" fill="none"/>`
      + `<ellipse cx="${x}" cy="${y - 4 * s}" rx="${62 * s}" ry="${12 * s}" fill="${rad([[0, lighten(leaf[1], 0.2)], [1, dk2(leaf[1], 0.2)]], 0.4, 0.3, 0.8)}"/><path d="M${x - 40 * s} ${y + 4 * s} q4 ${12 * s} 0 ${20 * s} M${x + 30 * s} ${y + 4 * s} q-3 ${10 * s} 1 ${16 * s}" stroke="${leaf[0]}" stroke-width="3" fill="none" stroke-linecap="round"/>`
      + `<g class="bg-flicker">${bits}</g>${lit ? `<circle cx="${x}" cy="${y + 70 * s}" r="${4 * s}" fill="#9ff5c8" filter="url(#glow)" class="bg-flicker"/>` : ''}</g>`;
  };
  const mono = pick(t, '#4a5a5a', '#3a2a30', '#122028');
  return `<defs>${grad('sk', sky)}${radial('glow2', [[0, pick(t, '#ffffff', '#ffe0a0', '#9ff5c8'), 0.55], [1, '#ffffff', 0]])}${grad('aurora', [[0, '#7affc8', 0], [0.5, '#7affc8', 0.35], [1, '#b07aff', 0]], false)}${floorDefs(stone)}${DEFS}<clipPath id="trunkClip"><path d="M690 650 Q712 520 690 430 L910 430 Q888 520 910 650 Z"/></clipPath></defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? stars(200, 560, '#d7ccff') + `<g class="bg-aurora" filter="url(#blur20)"><path d="M-100 200 C 300 80, 700 260, 1100 140 S 1600 120, 1800 200 L1800 280 C 1300 200, 900 340, 500 240 S 0 260, -100 300 Z" fill="url(#aurora)"/></g>` + moon(1300, 150, 50, '#fff4d6')
      : t === 'sunset' ? horizonGlow(500, '#ffb070') + sun(300, 470, 80, '#fff0c0', '#ffb070') : sun(1300, 140, 50, '#ffffff', '#fff8d0') + rays(1300, 140, '#ffffff', 0.18)}
    ${mountains(600, 150, pick(t, '#7a9ac0', '#6a4a72', '#1a2a4a'), 0.2)}
    ${haze(620, pick(t, '#e8f4ff', '#ffc0a0', '#2a3a6a'), 0.5)}
    ${island(260, 300, 0.9)}${island(1340, 360, 0.7)}${island(1080, 220, 0.5)}
    <ellipse cx="800" cy="600" rx="700" ry="200" fill="url(#glow2)"/>
    ${clouds(8, 600, 660, pick(t, '#ffffff', '#ffd8c0', '#efeaff'), pick(t, 0.8, 0.55, 0.2), 'bg-drift slow')}
    <path d="M690 650 Q712 520 690 430 Q660 360 580 320 L640 318 Q720 350 750 290 Q760 360 800 330 Q840 360 850 290 Q880 350 960 318 L1020 320 Q940 360 910 430 Q888 520 910 650 Z" fill="${lin([[0, lighten(barkC, 0.15)], [0.35, barkC], [0.8, dk2(barkC, 0.3)], [1, dk2(barkC, 0.45)]], 0, 0, 1, 0)}"/>
    <path d="M800 650 L790 440 Q800 400 812 440 L820 650Z" fill="#000" opacity=".18"/><path d="M700 640 Q706 520 696 440 L720 440 Q728 520 724 640Z" fill="#fff" opacity=".07"/>
    <g clip-path="url(#trunkClip)">${bark(690, 420, 220, 240, bark0)}</g>
    ${canopy(800, 240, 470, 170)}
    ${hills(690, 20, pick(t, '#3a6a4a', '#4a3a2a', '#0e2420'), 1)}
    <path d="M560 716 C 640 680, 720 664, 800 662 C 880 664, 960 680, 1040 716 Z" fill="${dk2(pick(t, '#3a6a4a', '#4a3a2a', '#0e2420'), 0.12)}"/>
    <path d="M691 644 Q688 652 676 662 Q600 676 470 712 L540 716 Q630 694 716 684 Q740 704 700 724 L780 724 Q790 700 800 690 Q812 700 820 724 L900 724 Q860 704 884 684 Q970 694 1060 716 L1130 712 Q1000 676 924 662 Q912 652 909 644 Z" fill="${lin([[0, lighten(barkC, 0.15)], [0.35, barkC], [0.8, dk2(barkC, 0.3)], [1, dk2(barkC, 0.45)]], 0.1667, 0, 0.8333, 0)}"/>
    <path d="M691 644 Q688 652 676 662 Q600 676 470 712 L540 716 Q630 694 716 684 Q740 704 700 724 L780 724 Q790 700 800 690 Q812 700 820 724 L900 724 Q860 704 884 684 Q970 694 1060 716 L1130 712 Q1000 676 924 662 Q912 652 909 644 Z" fill="${lin([[0, '#000', 0], [0.4, '#000', 0.05], [1, '#000', 0.4]])}"/>
    <path d="M690 652 Q640 672 520 706 M700 662 Q650 680 560 708 M716 690 Q726 706 712 720 M800 696 Q796 708 790 722 M884 690 Q874 706 888 720 M910 652 Q960 672 1080 706 M900 662 Q950 680 1040 708" stroke="${lighten(barkC, 0.32)}" stroke-width="3.5" fill="none" stroke-linecap="round" opacity=".75"/>
    <path d="M694 670 Q640 686 580 704 M906 670 Q960 686 1020 704 M760 680 Q770 700 760 716 M840 680 Q830 700 842 716" stroke="${dk2(barkC, 0.5)}" stroke-width="2.5" fill="none" stroke-linecap="round" opacity=".6"/>
    ${[[600, 696, 26], [740, 684, 18], [858, 688, 20], [1000, 698, 24]].map(([mx, my, mw]) => `<ellipse cx="${mx}" cy="${my}" rx="${mw}" ry="5" fill="${pick(t, '#4f8a3a', '#6a6a34', '#1e4a2c')}" opacity=".8"/>`).join('')}
    <path d="M676 664 Q600 680 500 712 M924 664 Q1000 680 1100 712" stroke="#000" stroke-opacity=".18" stroke-width="5" fill="none"/>
    ${lit ? `<g filter="url(#glow)" class="bg-flicker slow">${Array.from({ length: 7 }, (_, i) => `<path d="M${740 + i * 20} 680 q${r(-40, 40)} 30 ${r(-120, 120)} 50" stroke="#9ff5c8" stroke-width="2" fill="none" opacity=".7"/>`).join('')}</g>` : ''}
    ${standingStones(mono, '#7affd0', lit, pick(t, '#4f8a3a', '#6a6a34', '#1e4a2c'))}
    ${grass(60, 700, 760, pick(t, '#2f6a3a', '#4a3a24', '#0a1a14'))}
    ${fireflies(t === 'night' ? 50 : 20, 420, 760, pick(t, '#ffffff', '#fff0b0', '#b9ffd8'))}
    ${arenaFloor(t, stone, pick(t, '#2adfa0', '#7affd0', '#6affd0'), pick(t, '#0a5a40', '#f0fff8', '#e0fff4'))}
    ${t === 'night' ? fireflies(24, 80, 520, '#bff8ff') : ''}`;
}

// ── 0.9.9.8.1: the main menu's paintings — each arena's place without the arena ───────────────────────────────
/** the ground of the near field, from the horizon line down */
function meadow(top: string, bottom: string, y = 716) {
  return `<path d="M0 ${y} Q400 ${y - 10} 800 ${y - 4} Q1200 ${y - 10} 1600 ${y} V${H} H0 Z" fill="${lin([[0, top], [1, bottom]])}"/>`;
}
/** the centre line of the winding way into the picture (bottom middle → the horizon), and its width there */
function trailAt(k: number, end = 800) {
  const P = [[end, 722], [end + 90, 772], [end - 110, 830], [end - 10, 906]];
  const u = 1 - k;
  const x = u * u * u * P[0][0] + 3 * u * u * k * P[1][0] + 3 * u * k * k * P[2][0] + k * k * k * P[3][0];
  const y = u * u * u * P[0][1] + 3 * u * u * k * P[1][1] + 3 * u * k * k * P[2][1] + k * k * k * P[3][1];
  return { x, y, w: 6 + Math.pow(k, 1.6) * 420 };
}
/** a winding path: dirt (or cobbles) narrowing into the distance, with darker edges and stones */
function trail(t: TimeOfDay, c: string, cobble = false, end = 800) {
  const N = 28, L: string[] = [], R: string[] = [];
  for (let i = 0; i <= N; i++) { const p = trailAt(i / N, end); L.push(`${f(p.x - p.w / 2)} ${f(p.y)}`); R.push(`${f(p.x + p.w / 2)} ${f(p.y)}`); }
  const d = `M${L.join(' L')} L${R.reverse().join(' L')} Z`;
  let s = `<path d="${d}" fill="${lin([[0, lighten(c, 0.25)], [0.5, c], [1, dk2(c, 0.25)]])}"/>`;
  s += `<path d="${d}" fill="none" stroke="${dk2(c, 0.4)}" stroke-width="3" opacity=".55"/>`;
  // the light on its middle, ruts, pebbles or cobbles
  let stones = '';
  for (let i = 0; i < (cobble ? 170 : 60); i++) {
    const k = Math.sqrt(rnd()), p = trailAt(k, end), ox = r(-0.45, 0.45) * p.w, sz = 1 + p.w / (cobble ? 26 : 60);
    stones += cobble
      ? `<ellipse cx="${f(p.x + ox)}" cy="${f(p.y + r(-4, 4) * k)}" rx="${f(sz * r(1, 1.5))}" ry="${f(sz * 0.55)}" fill="${rnd() > 0.5 ? lighten(c, 0.18) : dk2(c, 0.12)}" stroke="${dk2(c, 0.45)}" stroke-width="1" stroke-opacity=".6"/>`
      : `<ellipse cx="${f(p.x + ox)}" cy="${f(p.y)}" rx="${f(sz * r(0.8, 1.6))}" ry="${f(sz * 0.6)}" fill="${rnd() > 0.5 ? lighten(c, 0.3) : dk2(c, 0.3)}" opacity=".8"/>`;
  }
  s += stones;
  if (!cobble) {
    let rut = '';
    for (const side of [-0.18, 0.18]) { const pts = Array.from({ length: 20 }, (_, i) => { const p = trailAt(i / 19, end); return `${f(p.x + side * p.w)} ${f(p.y)}`; }); rut += `M${pts.join(' L')} `; }
    s += `<path d="${rut}" stroke="${dk2(c, 0.3)}" stroke-width="3" fill="none" opacity=".35" stroke-linecap="round"/>`;
  }
  return s;
}
/** is (x, y) on the trail (keeps flowers off it) */
const onTrail = (x: number, y: number, end = 800) => { const k = Math.max(0, Math.min(1, (y - 722) / 184)); const p = trailAt(k, end); return Math.abs(x - p.x) < p.w / 2 + 14; };
/** little flowers that get bigger towards you */
function flowerField(n: number, y0: number, y1: number, colors: string[], avoid: boolean | ((x: number, y: number) => boolean) = true, end = 800) {
  let s = '';
  for (let i = 0; i < n; i++) {
    const y = y0 + Math.pow(rnd(), 0.7) * (y1 - y0), x = r(0, W);
    if (avoid === true ? onTrail(x, y, end) : avoid && avoid(x, y)) continue;
    const k = (y - y0) / (y1 - y0), sz = 1.4 + k * 4.2, c = colors[Math.floor(rnd() * colors.length)];
    s += `<g transform="translate(${f(x)} ${f(y)})"><path d="M0 0 v${f(-sz * 2.2)}" stroke="#3e6a2e" stroke-width="${f(0.6 + k)}"/>${[0, 72, 144, 216, 288].map((a) => `<ellipse cx="0" cy="${f(-sz * 2.2 - sz * 0.7)}" rx="${f(sz * 0.45)}" ry="${f(sz * 0.75)}" fill="${c}" transform="rotate(${a} 0 ${f(-sz * 2.2)})"/>`).join('')}<circle cx="0" cy="${f(-sz * 2.2)}" r="${f(sz * 0.38)}" fill="#ffd65a"/></g>`;
  }
  return s;
}
/** a fern spreading from a point (near-corner framing) */
function fern(x: number, y: number, s: number, c: string, flip = false) {
  let out = '';
  for (let i = 0; i < 7; i++) {
    const a = (flip ? 180 : 0) + (flip ? 1 : -1) * (12 + i * 22), len = s * r(0.75, 1.1);
    const rad0 = (a * Math.PI) / 180, ex = x + Math.cos(rad0) * len, ey = y - Math.abs(Math.sin(rad0)) * len;
    const mx = (x + ex) / 2, my = Math.min(y, ey) - len * 0.25;
    out += `<path d="M${f(x)} ${f(y)} Q${f(mx)} ${f(my)} ${f(ex)} ${f(ey)}" stroke="${dk2(c, 0.15)}" stroke-width="${f(s * 0.03)}" fill="none" stroke-linecap="round"/>`;
    for (let j = 1; j < 9; j++) {
      const q = j / 9, u = 1 - q, px = u * u * x + 2 * u * q * mx + q * q * ex, py = u * u * y + 2 * u * q * my + q * q * ey, lf = s * 0.16 * (1 - q * 0.7);
      out += `<path d="M${f(px)} ${f(py)} q${f(lf * 0.4)} ${f(-lf)} ${f(lf * 0.1)} ${f(-lf * 1.5)} M${f(px)} ${f(py)} q${f(-lf * 0.6)} ${f(-lf * 0.4)} ${f(-lf * 1.2)} ${f(-lf * 0.6)}" stroke="${j % 2 ? c : lighten(c, 0.12)}" stroke-width="${f(Math.max(1.4, s * 0.025))}" fill="none" stroke-linecap="round"/>`;
    }
  }
  return out;
}
function mushroom(x: number, y: number, s: number, cap: string, glow: boolean) {
  return `<ellipse cx="${x}" cy="${y}" rx="${f(10 * s)}" ry="${f(2.5 * s)}" fill="#000" opacity=".3"/><path d="M${f(x - 3 * s)} ${y} Q${f(x - 2 * s)} ${f(y - 10 * s)} ${f(x - 2.5 * s)} ${f(y - 14 * s)} L${f(x + 2.5 * s)} ${f(y - 14 * s)} Q${f(x + 2 * s)} ${f(y - 10 * s)} ${f(x + 3 * s)} ${y} Z" fill="#efe6d4"/>`
    + `<path d="M${f(x - 11 * s)} ${f(y - 13 * s)} Q${x} ${f(y - 30 * s)} ${f(x + 11 * s)} ${f(y - 13 * s)} Z" fill="${rad([[0, lighten(cap, 0.3)], [1, dk2(cap, 0.25)]], 0.4, 0.2)}"${glow ? ' filter="url(#glow)" class="bg-flicker slow"' : ''}/>`
    + `<circle cx="${f(x - 4 * s)}" cy="${f(y - 20 * s)}" r="${f(1.6 * s)}" fill="#fff" opacity=".8"/><circle cx="${f(x + 4 * s)}" cy="${f(y - 17 * s)}" r="${f(1.2 * s)}" fill="#fff" opacity=".7"/>`;
}
function lantern(x: number, y: number, h: number, wood: string, lit: boolean) {
  return `<rect x="${f(x - 3)}" y="${f(y - h)}" width="6" height="${f(h)}" fill="${wood}"/><path d="M${f(x)} ${f(y - h)} h18 v6" stroke="${wood}" stroke-width="3" fill="none"/>`
    + `<rect x="${f(x + 11)}" y="${f(y - h + 6)}" width="14" height="18" rx="3" fill="${lit ? '#ffcf6a' : '#5a5040'}" stroke="${dk2(wood, 0.3)}" stroke-width="2"${lit ? ' filter="url(#glow)" class="bg-flicker slow"' : ''}/>`
    + (lit ? `<circle cx="${f(x + 18)}" cy="${f(y - h + 15)}" r="40" fill="#ffcf6a" opacity=".12"/>` : '');
}
/** the menu's near field, one per place */
function menuFore(id: BackgroundId, t: TimeOfDay): string {
  const lit = t !== 'day';
  const frame = (leaf: string) => fern(60, 905, 230, leaf) + fern(1545, 905, 250, leaf, true) + bush(-10, 912, 90, dk2(leaf, 0.15)) + bush(1620, 912, 100, dk2(leaf, 0.15));
  if (id === 'forest') {
    const g = pick(t, '#56724a', '#38262e', '#0b1612');
    return meadow(g, dk2(g, 0.45)) + trail(t, pick(t, '#a08a66', '#6a4a3e', '#25222a'))
      + grass(60, 726, 900, pick(t, '#5a7a4a', '#4a3a3a', '#10201a'), 16, 40)
      + `<path d="M150 836 Q260 818 430 828 L436 852 Q260 846 148 860 Z" fill="${lin([[0, pick(t, '#6a5240', '#3a2622', '#14121a')], [1, pick(t, '#3e2e22', '#1e1212', '#08080c')]])}"/><ellipse cx="434" cy="840" rx="7" ry="12" fill="${pick(t, '#c8a880', '#7a5040', '#2a2428')}"/>${bark(160, 822, 270, 30, pick(t, '#6a5240', '#3a2622', '#14121a'))}`
      + [[300, 822, 1.1], [330, 828, 0.8], [1140, 800, 1], [1170, 806, 0.7], [1260, 860, 1.5], [520, 880, 1.6]].map(([x, y, k]) => mushroom(x, y, k, pick(t, '#c8402e', '#b0503a', '#3ac8d8'), t === 'night')).join('')
      + flowerField(70, 740, 895, pick(t, ['#ffffff', '#ffe27a', '#c9b8ff'], ['#ffd0a0', '#ffb0c0'], ['#9ff5ff', '#c9b8ff']))
      + frame(pick(t, '#3e6a32', '#3a3028', '#0c2018'))
      + (lit ? fireflies(t === 'night' ? 26 : 10, 700, 880, '#e8ff9a') : '');
  }
  if (id === 'swamp') {
    const water = pick(t, ['#8aa898', '#3e5a4c'], ['#c4865e', '#4a2c30'], ['#24383a', '#050c0c']);
    const wood = pick(t, '#7a6048', '#4a3028', '#1a1614');
    // the boardwalk: planks from your feet out to the middle of the water
    let planks = '';
    for (let i = 0; i < 22; i++) {
      const k0 = i / 22, k1 = (i + 0.82) / 22;
      const a = trailAt(k0, 760), b = trailAt(k1, 760), w0 = a.w * 0.62 + 4, w1 = b.w * 0.62 + 4;
      planks += `<path d="M${f(a.x - w0 / 2)} ${f(a.y)} L${f(a.x + w0 / 2)} ${f(a.y)} L${f(b.x + w1 / 2)} ${f(b.y)} L${f(b.x - w1 / 2)} ${f(b.y)} Z" fill="${i % 2 ? wood : lighten(wood, 0.08)}" stroke="${dk2(wood, 0.4)}" stroke-width="1"/>`;
    }
    const sunX = pick(t, 400, 420, 420);
    const glint = pick(t, '#fffbe6', '#ffd9a0', '#dfe9a8');
    let shine = '';
    for (let i = 0; i < 24; i++) { const y = 726 + i * 7.5, w = 14 + i * 3.5; shine += `<rect x="${f(sunX - w / 2 + r(-10, 10))}" y="${f(y)}" width="${f(w * r(0.5, 1))}" height="2" fill="${glint}" opacity="${f(0.55 - i * 0.018)}"/>`; }
    return `<rect x="0" y="712" width="${W}" height="${H - 712}" fill="${lin([[0, water[0]], [1, water[1]]])}"/>`
      + `<g class="bg-drift slow">${shine}</g>`
      + `<g stroke="${lighten(water[0], 0.35)}" stroke-width="2" fill="none" opacity=".4">${Array.from({ length: 30 }, () => { const y = r(724, 896), k = (y - 716) / 184, x = r(0, W), w = 20 + k * 120; return `<path d="M${f(x)} ${f(y)} q${f(w / 2)} -3 ${f(w)} 0"/>`; }).join('')}</g>`
      + Array.from({ length: 26 }, () => { const y = r(730, 890), k = (y - 716) / 184, x = r(0, W); if (Math.abs(x - 760) < 40 + k * 120) return ''; const w = 10 + k * 40; const c = pick(t, '#5a8a44', '#6a5a34', '#1f3a1a'); return `<path d="M${f(x)} ${f(y)} L${f(x + w)} ${f(y - 2)} A${f(w)} ${f(w * 0.24)} 0 1 1 ${f(x + w * 0.9)} ${f(y + 3)} Z" fill="${rad([[0, lighten(c, 0.25)], [1, dk2(c, 0.2)]], 0.4, 0.3, 0.8)}"/>${rnd() > 0.6 ? `<circle cx="${f(x - w * 0.2)}" cy="${f(y - 2 - k * 4)}" r="${f(2 + k * 4)}" fill="${pick(t, '#ffd0e0', '#ffc0a0', '#c8a0ff')}"/>` : ''}`; }).join('')
      + planks
      + lantern(trailAt(0.5, 760).x - trailAt(0.5, 760).w * 0.34 - 4, trailAt(0.5, 760).y, 80, wood, lit) + lantern(trailAt(0.82, 760).x + trailAt(0.82, 760).w * 0.32, trailAt(0.82, 760).y, 140, wood, lit)
      + frame(pick(t, '#3e6a32', '#4a3a28', '#0c2018'))
      + (lit ? fireflies(t === 'night' ? 30 : 12, 690, 880, '#d8ff7a') : '');
  }
  if (id === 'plains') {
    const g = pick(t, '#6a9a4c', '#5a5a3a', '#14261a');
    const wood = pick(t, '#8a6a4a', '#4a3028', '#16141a');
    let fence = '';
    for (let i = 0; i < 9; i++) {
      const k = 0.12 + i * 0.1, p = trailAt(Math.min(1, k)), x = p.x + p.w / 2 + 16 + k * 40, h = 10 + k * 70;
      fence += `<rect x="${f(x)}" y="${f(p.y - h)}" width="${f(2 + k * 8)}" height="${f(h)}" fill="${wood}"/>`;
      if (i) { const q = trailAt(0.12 + (i - 1) * 0.1), qx = q.x + q.w / 2 + 16 + (0.12 + (i - 1) * 0.1) * 40, qh = 10 + (0.12 + (i - 1) * 0.1) * 70; fence += `<path d="M${f(qx)} ${f(q.y - qh * 0.75)} L${f(x)} ${f(p.y - h * 0.75)} M${f(qx)} ${f(q.y - qh * 0.35)} L${f(x)} ${f(p.y - h * 0.35)}" stroke="${wood}" stroke-width="${f(1 + k * 4)}"/>`; }
    }
    return meadow(g, dk2(g, 0.35)) + trail(t, pick(t, '#c8ae7e', '#8a6a52', '#2a2830'))
      + grass(70, 724, 900, pick(t, '#4f7a34', '#4a4a2a', '#0e1c12'), 16, 44)
      + flowerField(170, 734, 898, pick(t, ['#ffe27a', '#ffffff', '#c9a0ff', '#ff9ab0'], ['#ffd0a0', '#ff9a8a', '#ffe0a0'], ['#c9b8ff', '#9fd8ff', '#ffffff']))
      + fence
      + `<g transform="translate(300 812)"><ellipse cx="0" cy="22" rx="56" ry="10" fill="#000" opacity=".25"/><path d="M-50 20 Q-54 -26 0 -30 Q54 -26 50 20 Z" fill="${lin([[0, pick(t, '#e8c868', '#c08a50', '#3a3424')], [1, pick(t, '#a8823a', '#7a4a2a', '#1c1a14')]])}"/><path d="M-40 -6 Q0 -14 40 -6 M-46 8 Q0 0 46 8" stroke="${pick(t, '#a8823a', '#7a4a2a', '#1c1a14')}" stroke-width="2" fill="none"/></g>`
      + frame(pick(t, '#3e7a32', '#4a4a28', '#0c2018'))
      + (t === 'night' ? fireflies(18, 700, 880, '#fff2a0') : '');
  }
  if (id === 'castle') {
    const g = pick(t, '#5a7050', '#2a1418', '#121628');
    const stoneC = pick(t, '#8a8494', '#4a2a2c', '#22223a');
    let posts = '';
    for (const k of [0.3, 0.55, 0.85]) {
      const p = trailAt(k), h = 30 + k * 120;
      for (const side of [-1, 1]) { const x = p.x + side * (p.w / 2 + 20 + k * 30); posts += `<rect x="${f(x - 2 - k * 3)}" y="${f(p.y - h)}" width="${f(4 + k * 6)}" height="${f(h)}" fill="${pick(t, '#3a3030', '#1a0c10', '#0a0a14')}"/>` + (lit ? `<g filter="url(#glow)" class="bg-flicker"><ellipse cx="${f(x)}" cy="${f(p.y - h - 6 - k * 6)}" rx="${f(3 + k * 5)}" ry="${f(6 + k * 10)}" fill="#ffb347"/></g><circle cx="${f(x)}" cy="${f(p.y - h)}" r="${f(30 + k * 40)}" fill="#ffb347" opacity=".1"/>` : `<rect x="${f(x - 4 - k * 4)}" y="${f(p.y - h - 6)}" width="${f(8 + k * 8)}" height="${f(6 + k * 4)}" fill="#2a2a2a"/>`); }
    }
    const wall = (x0: number, x1: number, y: number, h: number) => `<rect x="${x0}" y="${y - h}" width="${x1 - x0}" height="${h}" fill="${lin([[0, lighten(stoneC, 0.1)], [1, dk2(stoneC, 0.3)]])}"/><rect x="${x0}" y="${y - h}" width="${x1 - x0}" height="${h}" fill="url(#bricks)"/>${Array.from({ length: Math.floor((x1 - x0) / 40) }, (_, i) => `<rect x="${x0 + i * 40 + 4}" y="${y - h - 14}" width="24" height="14" fill="${stoneC}"/>`).join('')}`;
    return meadow(g, dk2(g, 0.4)) + trail(t, pick(t, '#9a94a4', '#5a3a3a', '#2a2a40'), true)
      + grass(50, 724, 900, pick(t, '#5e7a48', '#3a2a24', '#121a22'), 14, 36)
      + wall(-20, 330, 880, 70) + wall(1270, 1620, 880, 70)
      + posts
      + flowerField(60, 740, 860, pick(t, ['#ffffff', '#ffe27a'], ['#ffb070', '#ffe0a0'], ['#c9b8ff', '#ffffff']))
      + (t === 'night' ? fireflies(14, 700, 860, '#ffcf6a') : '');
  }
  // the World Tree: a still pool at its roots that mirrors the sky, stepping stones, glowing flowers
  const g = pick(t, '#3e7a4e', '#4a3a2a', '#0e2420');
  const pool = pick(t, ['#bfe6ff', '#5a9ac0'], ['#ffc890', '#7a4a6a'], ['#2c8a8a', '#0b1a3a']);
  return meadow(g, dk2(g, 0.45), 712)
    + `<ellipse cx="800" cy="812" rx="430" ry="70" fill="${lin([[0, pool[0]], [1, pool[1]]])}"/><ellipse cx="800" cy="812" rx="430" ry="70" fill="none" stroke="${dk2(g, 0.3)}" stroke-width="4"/>`
    + `<ellipse cx="800" cy="800" rx="300" ry="30" fill="${pick(t, '#ffffff', '#fff0c0', '#9ff5c8')}" opacity="${pick(t, 0.35, 0.3, 0.45)}" filter="url(#blur20)"/>`
    + `<g stroke="${lighten(pool[0], 0.4)}" stroke-width="2" fill="none" opacity=".5" class="bg-drift slow">${Array.from({ length: 12 }, () => { const x = r(440, 1120), y = r(770, 860), w = r(30, 80); return `<path d="M${f(x)} ${f(y)} q${f(w / 2)} -3 ${f(w)} 0"/>`; }).join('')}</g>`
    + [[620, 880, 1.6], [720, 852, 1.2], [880, 860, 1.3], [1000, 884, 1.7]].map(([x, y, k]) => `<ellipse cx="${x}" cy="${y + 4 * k}" rx="${f(36 * k)}" ry="${f(8 * k)}" fill="#000" opacity=".3"/><ellipse cx="${x}" cy="${y}" rx="${f(34 * k)}" ry="${f(10 * k)}" fill="${lin([[0, pick(t, '#a8b0a8', '#7a5a50', '#2a3a40')], [1, pick(t, '#6a726a', '#4a3030', '#121c22')]])}"/>`).join('')
    + grass(60, 722, 900, pick(t, '#3f8a4a', '#5a4a2a', '#0e2a1e'), 16, 40)
    + flowerField(110, 730, 898, pick(t, ['#ffffff', '#ffe27a', '#9fd8ff'], ['#ffd0a0', '#ffb0c0'], ['#9ff5c8', '#c9b8ff', '#7affd0']), (x, y) => ((x - 800) / 450) ** 2 + ((y - 812) / 82) ** 2 < 1)
    + frame(pick(t, '#2f6a3a', '#4a4028', '#0c2a1e'))
    + (lit ? `<g class="bg-float">${Array.from({ length: t === 'night' ? 36 : 14 }, () => `<circle cx="${f(r(300, 1300))}" cy="${f(r(560, 860))}" r="${f(r(1.5, 3.2))}" fill="#9ff5c8" filter="url(#glow)" class="bg-flicker" style="animation-delay:${f(r(0, 4))}s"/>`).join('')}</g>` : '');
}

const SCENES: Record<BackgroundId, (t: TimeOfDay) => string> = { forest, swamp, plains, castle, worldtree };

/** Gradient/filter ids are made unique per scene + time, so several scenes can be on one page. */
function scene(id: BackgroundId, t: TimeOfDay, menu = false) {
  seed = [...(id + t)].reduce((s, c) => s + c.charCodeAt(0) * 97, 7);
  const key = `${id}-${t}${menu ? '-m' : ''}`;
  gdefs = []; gn = 0;
  MENU = menu; SCENE_ID = id;
  let body: string;
  try { body = SCENES[id](t); } finally { MENU = false; }
  return (body + `<defs>${gdefs.join('')}</defs>`).replace(/id="(\w+)"/g, `id="${key}-$1"`).replace(/url\(#(\w+)\)/g, `url(#${key}-$1)`);
}

// ── 0.9.9.9.5.1: painted pictures (public/bg/<place>-<time>.webp) with the animated details on top ───────────
// The picture and its details sit in one box with the picture's own shape (1672 × 940), scaled to cover the screen
// from the bottom centre — so a torch flame stays on its torch on any screen. Everything moves with transform /
// opacity only (no filters, nothing redrawn each frame), and phones get fewer details.
export const artUrl = (id: BackgroundId, t: TimeOfDay, small = false) => `/bg/${id}-${t}${small ? '-s' : ''}.webp`;
interface ArtSpots {
  /** the four rune stones: x and the top / bottom of their runes (% of the picture) */
  stones: Array<[number, number, number]>;
  /** torch flames (% of the picture) */
  torches: Array<[number, number]>;
  /** the colour of the runes and the floor circle; the top of the circle (% of the height) */
  rune: string; ringTop: number;
  /** when fireflies fly; a band of mist (its top, % of the height); sun rays through the trees */
  flies: TimeOfDay[]; mist?: number; rays?: boolean;
  /** 0.9.9.9.5.2: falling leaves (their colour by time of day), birds crossing the sky, glints on the water (top of the band, %) */
  leaves?: Partial<Record<TimeOfDay, string>>; birds?: boolean; water?: number;
}
const SPOTS: Record<BackgroundId, ArtSpots> = {
  castle: { stones: [[11.3, 66, 79], [31, 68, 77], [68.8, 68, 77], [88.7, 66, 79]], torches: [[17, 72], [82.8, 72]], rune: '#ffb347', ringTop: 87, flies: [], birds: true },
  plains: { stones: [[11.8, 58, 76], [31, 60, 73], [68.8, 60, 73], [88.5, 58, 76]], torches: [[18.8, 68.5], [81, 68.5]], rune: '#ffb347', ringTop: 85, flies: ['night'], birds: true, leaves: { day: '#9bd16a', sunset: '#f2a35a' } },
  forest: { stones: [[11.7, 61, 77], [32, 63, 75], [68.6, 63, 75], [88.8, 61, 77]], torches: [], rune: '#5fb8ff', ringTop: 83, flies: ['sunset', 'night'], mist: 62, rays: true, leaves: { day: '#8cc85a', sunset: '#e8914a', night: '#6f8fb8' } },
  swamp: { stones: [[11.7, 54, 72], [31.3, 57, 71], [69, 57, 71], [89, 54, 72]], torches: [], rune: '#5dff8a', ringTop: 84, flies: ['sunset', 'night'], mist: 55, water: 74 },
  worldtree: { stones: [[11.1, 60, 77], [31.5, 62, 75], [69.4, 62, 75], [89, 60, 77]], torches: [], rune: '#45f0a0', ringTop: 87, flies: ['sunset', 'night'], birds: true, leaves: { day: '#ffc2dc', sunset: '#ffb28a', night: '#7dffc4' } },
};
const lite = () => matchMedia('(pointer: coarse)').matches;

// ── 0.9.9.9.5.5: the weather ────────────────────────────────────────────────
// Each place has its own weather by the season, and it changes every few hours: autumn leaves, rain (now and then a
// thunderstorm), snow in winter, cherry petals in spring, dandelion seeds over the plains, glowing spores in the swamp.
export type Weather = 'clear' | 'leaves' | 'rain' | 'storm' | 'snow' | 'petals' | 'seeds' | 'spores';
const WEATHERS: Record<BackgroundId, Record<'winter' | 'spring' | 'summer' | 'autumn', Weather[]>> = {
  castle: { winter: ['snow', 'snow', 'clear', 'rain'], spring: ['petals', 'clear', 'rain'], summer: ['clear', 'rain', 'storm'], autumn: ['leaves', 'rain', 'leaves', 'storm'] },
  plains: { winter: ['snow', 'snow', 'clear'], spring: ['petals', 'seeds', 'rain'], summer: ['seeds', 'clear', 'rain', 'storm'], autumn: ['leaves', 'leaves', 'rain', 'seeds'] },
  forest: { winter: ['snow', 'snow', 'leaves'], spring: ['leaves', 'rain', 'petals'], summer: ['leaves', 'rain', 'storm'], autumn: ['leaves', 'leaves', 'rain'] },
  swamp: { winter: ['snow', 'rain', 'spores'], spring: ['rain', 'spores', 'clear'], summer: ['spores', 'rain', 'storm'], autumn: ['rain', 'spores', 'leaves'] },
  worldtree: { winter: ['snow', 'petals'], spring: ['petals', 'petals', 'spores'], summer: ['petals', 'spores', 'rain'], autumn: ['leaves', 'petals', 'spores'] },
};
const WEATHER_LIST: Weather[] = ['clear', 'leaves', 'rain', 'storm', 'snow', 'petals', 'seeds', 'spores'];
export function weatherFor(id: BackgroundId, d = new Date()): Weather {
  try { const w = localStorage.getItem('kb:weather') as Weather | null; if (w && WEATHER_LIST.includes(w)) return w; } catch { /* no storage */ }
  const m = d.getMonth();
  const season = m === 11 || m <= 1 ? 'winter' : m <= 4 ? 'spring' : m <= 7 ? 'summer' : 'autumn';
  const list = WEATHERS[id]?.[season] ?? ['clear'];
  const slot = `${d.getFullYear()}-${m}-${d.getDate()}-${Math.floor(d.getHours() / 4)}-${id}`; // (every 4 hours)
  const hsh = [...slot].reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 11);
  return list[hsh % list.length];
}
const AUTUMN = ['#e8914a', '#d9573a', '#f2c14a', '#b8642a', '#c9452f'];

function artStage(id: BackgroundId, t: TimeOfDay, onFail: () => void): HTMLElement {
  const sp = SPOTS[id];
  let r = [...(id + t)].reduce((a, c) => a * 31 + c.charCodeAt(0), 7) >>> 0;
  const rnd = () => ((r = (r * 1664525 + 1013904223) >>> 0) / 4294967296);
  const few = lite();
  const stage = document.createElement('div');
  stage.className = 'art-stage';
  const img = document.createElement('img');
  img.className = 'art-img'; img.alt = ''; img.decoding = 'async';
  img.onerror = onFail; // (no picture: the drawn scene)
  img.src = artUrl(id, t);
  stage.append(img);
  const fx = document.createElement('div');
  fx.className = `art-fx t-${t}`;
  fx.style.setProperty('--rune', sp.rune);
  const add = (cls: string, x: number, y: number, vars: Record<string, string | number> = {}) => {
    const e = document.createElement('i');
    e.className = cls;
    e.style.left = `${x}%`; e.style.top = `${y}%`;
    for (const [k, v] of Object.entries(vars)) e.style.setProperty(k, String(v));
    fx.append(e);
    return e;
  };
  // the floor circle breathes; the runes on the stones glow in turn
  add('fx-ring', 50, sp.ringTop);
  sp.stones.forEach(([x, y0, y1], i) => add('fx-rune', x, y0, { '--h': `${y1 - y0}%`, '--d': `${i * 0.9}s` }));
  // torches: the flame flickers, sparks rise
  for (const [x, y] of sp.torches) {
    add('fx-torch', x, y, { '--d': `${(rnd() * 1.5).toFixed(2)}s` });
    for (let k = 0; k < (few ? 2 : 5); k++) add('fx-ember', x + (rnd() - 0.5) * 1.2, y - 1, { '--d': `${(rnd() * 3).toFixed(2)}s`, '--dx': `${((rnd() - 0.5) * 40).toFixed(0)}px`, '--dur': `${(2.2 + rnd() * 1.6).toFixed(2)}s` });
  }
  // mist drifting over the water / between the trees
  if (sp.mist !== undefined) for (let k = 0; k < 2; k++) add('fx-mist', -20 + k * 45, sp.mist + k * 3, { '--d': `${-k * 18}s`, '--o': t === 'day' ? 0.35 : 0.5 });
  // light through the trees, slowly breathing
  if (sp.rays) add('fx-rays', 40, 0, { '--o': t === 'night' ? 0.28 : 0.4 });
  // fireflies
  if (sp.flies.includes(t)) for (let k = 0; k < (few ? 9 : 22); k++) {
    add('fx-fly', 4 + rnd() * 92, 38 + rnd() * 44, { '--d': `${(rnd() * 6).toFixed(2)}s`, '--dur': `${(5 + rnd() * 6).toFixed(2)}s`, '--dx': `${((rnd() - 0.5) * 70).toFixed(0)}px`, '--dy': `${((rnd() - 0.5) * 50).toFixed(0)}px` });
  }
  // the night sky: twinkling stars and now and then a shooting star
  if (t === 'night') {
    for (let k = 0; k < (few ? 10 : 26); k++) add('fx-star', rnd() * 100, rnd() * 34, { '--d': `${(rnd() * 4).toFixed(2)}s`, '--dur': `${(2 + rnd() * 3).toFixed(2)}s`, '--s': (0.6 + rnd() * 0.9).toFixed(2) });
    add('fx-comet', 20 + rnd() * 50, 4 + rnd() * 12, { '--d': `${(3 + rnd() * 6).toFixed(1)}s` });
    if (!few) add('fx-comet', 10 + rnd() * 60, 6 + rnd() * 10, { '--d': `${(11 + rnd() * 6).toFixed(1)}s` });
  } else {
    // day / sunset: motes drifting up in the light
    for (let k = 0; k < (few ? 6 : 16); k++) add('fx-mote', rnd() * 100, 45 + rnd() * 45, { '--d': `${(rnd() * 8).toFixed(2)}s`, '--dur': `${(7 + rnd() * 6).toFixed(2)}s`, '--dx': `${((rnd() - 0.5) * 60).toFixed(0)}px` });
  }
  // 0.9.9.9.5.2: clouds sailing by, birds crossing, leaves (or the world tree's glowing petals) falling, glints on the water
  if (t !== 'night') for (let k = 0; k < (few ? 2 : 4); k++) {
    add('fx-cloud', -30, 2 + rnd() * 22, { '--d': `${(-rnd() * 120).toFixed(1)}s`, '--dur': `${(110 + rnd() * 70).toFixed(0)}s`, '--w': `${(18 + rnd() * 16).toFixed(1)}%`, '--o': (t === 'day' ? 0.5 : 0.38) + rnd() * 0.2 });
  }
  if (sp.birds && t !== 'night') for (let k = 0; k < (few ? 1 : 2); k++) {
    const flock = add('fx-flock', -8, 8 + rnd() * 18, { '--d': `${(4 + k * 13 + rnd() * 6).toFixed(1)}s`, '--dur': `${(26 + rnd() * 10).toFixed(0)}s`, '--rise': `${((rnd() - 0.5) * 8).toFixed(1)}%` });
    for (let b = 0; b < (few ? 3 : 5); b++) {
      const bird = document.createElement('b');
      bird.style.left = `${(b % 2 ? -1 : 1) * Math.ceil(b / 2) * 14 + 30}px`; bird.style.top = `${Math.ceil(b / 2) * 9}px`;
      bird.style.animationDelay = `${(rnd() * 0.6).toFixed(2)}s`;
      flock.append(bird);
    }
  }
  // 0.9.9.9.5.5: the weather (leaves bigger and easier to see; rain, storms, snow, petals, seeds, spores)
  const weather = weatherFor(id);
  fx.dataset.weather = weather;
  const night = t === 'night' ? 1 : 0;
  const leafCol = (k: number) => (new Date().getMonth() >= 8 && new Date().getMonth() <= 10 ? AUTUMN[k % AUTUMN.length] : sp.leaves?.[t] ?? (t === 'night' ? '#6f8fb8' : '#8cc85a'));
  if (weather === 'leaves') for (let k = 0; k < (few ? 9 : 24); k++) {
    add('fx-leaf', rnd() * 100, -4 - rnd() * 10, { '--c': leafCol(k), '--d': `${(-rnd() * 16).toFixed(2)}s`, '--dur': `${(10 + rnd() * 8).toFixed(1)}s`, '--dx': `${((rnd() - 0.3) * 200).toFixed(0)}px`, '--s': (0.9 + rnd() * 0.9).toFixed(2), '--glow': night, '--fl': `${(1.2 + rnd() * 1.4).toFixed(2)}s` });
  } else if (weather === 'petals') for (let k = 0; k < (few ? 10 : 28); k++) {
    add('fx-petal', rnd() * 100, -4 - rnd() * 10, { '--c': ['#ffc2dc', '#ffd6e7', '#ff9ec7', '#fff0f6'][k % 4], '--d': `${(-rnd() * 14).toFixed(2)}s`, '--dur': `${(9 + rnd() * 7).toFixed(1)}s`, '--dx': `${((rnd() - 0.2) * 240).toFixed(0)}px`, '--s': (0.8 + rnd() * 0.8).toFixed(2), '--glow': night, '--fl': `${(0.8 + rnd() * 0.9).toFixed(2)}s` });
  } else if (weather === 'snow') {
    for (let k = 0; k < (few ? 22 : 60); k++) add('fx-snow', rnd() * 104 - 2, -4 - rnd() * 8, { '--d': `${(-rnd() * 18).toFixed(2)}s`, '--dur': `${(9 + rnd() * 10).toFixed(1)}s`, '--dx': `${((rnd() - 0.5) * 90).toFixed(0)}px`, '--s': (0.5 + rnd() * 1.3).toFixed(2), '--sw': `${(2.4 + rnd() * 2).toFixed(2)}s` });
    add('fx-frost', 0, 0);
  } else if (weather === 'rain' || weather === 'storm') {
    add('fx-dim', 0, 0, { '--o': weather === 'storm' ? 0.42 : 0.26 });
    for (let k = 0; k < (few ? 26 : 70); k++) add('fx-rain', rnd() * 115 - 10, -12 - rnd() * 10, { '--d': `${(-rnd() * 2).toFixed(2)}s`, '--dur': `${(0.55 + rnd() * 0.45).toFixed(2)}s`, '--s': (0.6 + rnd() * 0.8).toFixed(2), '--o': (0.35 + rnd() * 0.4).toFixed(2) });
    for (let k = 0; k < (few ? 8 : 22); k++) add('fx-splash', rnd() * 100, 78 + rnd() * 20, { '--d': `${(rnd() * 1.6).toFixed(2)}s`, '--dur': `${(0.7 + rnd() * 0.7).toFixed(2)}s` });
    if (weather === 'storm') add('fx-flash', 0, 0, { '--d': `${(2 + rnd() * 4).toFixed(1)}s`, '--dur': `${(9 + rnd() * 6).toFixed(1)}s` });
  } else if (weather === 'seeds') for (let k = 0; k < (few ? 8 : 20); k++) {
    add('fx-seed', rnd() * 100, 30 + rnd() * 60, { '--d': `${(-rnd() * 20).toFixed(2)}s`, '--dur': `${(14 + rnd() * 10).toFixed(1)}s`, '--dx': `${(60 + rnd() * 220).toFixed(0)}px`, '--dy': `${(-40 - rnd() * 160).toFixed(0)}px`, '--s': (0.7 + rnd() * 0.7).toFixed(2) });
  } else if (weather === 'spores') for (let k = 0; k < (few ? 10 : 26); k++) {
    add('fx-spore', rnd() * 100, 40 + rnd() * 55, { '--c': id === 'swamp' ? ['#9dff7a', '#5dff8a', '#d4ff6a'][k % 3] : ['#7dffc4', '#b8a4ff', '#ffe9a8'][k % 3], '--d': `${(-rnd() * 12).toFixed(2)}s`, '--dur': `${(8 + rnd() * 8).toFixed(1)}s`, '--dx': `${((rnd() - 0.5) * 120).toFixed(0)}px`, '--s': (0.6 + rnd() * 1.1).toFixed(2) });
  }
  if (sp.water !== undefined) for (let k = 0; k < (few ? 6 : 16); k++) {
    add('fx-glint', 6 + rnd() * 88, sp.water + rnd() * 12, { '--d': `${(rnd() * 5).toFixed(2)}s`, '--dur': `${(2.6 + rnd() * 2.4).toFixed(2)}s` });
  }
  stage.append(fx);
  return stage;
}

const cache = new Map<string, string>();
/** phones and tablets: the background as a still picture (0.9.9.9.5: "reduce motion" no longer stills it) */
export const stillBackground = () => matchMedia('(pointer: coarse)').matches;
const stillUrls = new Map<string, string>();
/** How long the time-of-day change takes: the scene fades out to dusk-dark, swaps, and fades back in. */
export const BG_FADE_MS = 3200;
let fadeTimer = 0;
/** Draws a background into the fixed #bg layer. `fade`: fade out and back in (the time of day changing). */
export function paintBackground(el: HTMLElement, id: BackgroundId, time: TimeOfDay = 'night', fade = false, menu = false) {
  const key = `${id}-${time}${menu ? '-m' : ''}`;
  if (el.dataset.key === key) return;
  // the menu and the other screens show the same picture: only the menu look changes
  const sameArt = el.dataset.key?.replace(/-m$/, '') === `${id}-${time}` && !!el.querySelector('.bg-layer.art');
  el.dataset.key = key;
  if (sameArt) { el.classList.toggle('menu-art', menu); return; }
  // (the drawn scene is made only when needed — a picture that failed to load)
  const svgOf = () => { if (!cache.has(key)) cache.set(key, `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" aria-hidden="true">${scene(id, time, menu)}</svg>`); return cache.get(key)!; };
  const swap = () => {
    const layer = document.createElement('div');
    layer.className = 'bg-layer';
    // 0.9.9.9.5.1: the painted picture (the drawn scene only if it can't load)
    const drawn = () => { layer.className = 'bg-layer'; layer.replaceChildren(); drawScene(layer); };
    layer.classList.add('art');
    const stage = artStage(id, time, drawn);
    layer.append(stage);
    const put = () => {
      if (el.dataset.key !== key) return; // (another picture was asked for meanwhile)
      const old = el.querySelector('.bg-layer');
      if (old) old.replaceWith(layer); else el.prepend(layer);
      el.dataset.bg = id;
      el.dataset.time = time;
      el.classList.toggle('menu-art', menu);
    };
    // the old picture stays until the new one is ready (no dark flash between them)
    const img = stage.querySelector('img')!;
    if (!el.querySelector('.bg-layer')) return put();
    let done = false;
    const once = () => { if (!done) { done = true; put(); } };
    img.decode().then(once, once);
    window.setTimeout(once, 1500);
  };
  const drawScene = (layer: HTMLElement) => {
    if (stillBackground()) {
      // 0.9.9.7.1: phones get the scene as one still picture — the live SVG (dozens of animated parts with glow
      // filters, redrawn every frame under blurred panels) flickered and lagged in the Android app
      const img = document.createElement('img');
      img.alt = ''; img.decoding = 'async'; img.className = 'bg-still';
      const svg = svgOf().replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ').replace(/(<svg[^>]*>)/, '$1<style>.bg-comet,.bg-spark circle{display:none}</style>');
      if (stillUrls.has(key)) img.src = stillUrls.get(key)!;
      else { const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' })); stillUrls.set(key, url); img.src = url; }
      layer.append(img);
    } else layer.innerHTML = svgOf();
  };
  clearTimeout(fadeTimer);
  el.querySelector('.bg-veil')?.remove();
  if (!fade || !el.querySelector('.bg-layer')) return swap(); // a fade is not motion: it plays even with "reduce motion"
  // a dark veil fades in, the scene changes behind it, and the veil fades away
  const veil = document.createElement('div');
  veil.className = 'bg-veil';
  veil.style.animationDuration = `${BG_FADE_MS}ms`;
  el.append(veil);
  fadeTimer = window.setTimeout(() => {
    swap();
    fadeTimer = window.setTimeout(() => veil.remove(), BG_FADE_MS / 2 + 100);
  }, BG_FADE_MS / 2);
}

/** The whole scene as standalone SVG markup (the 3D arena paints it far behind the fighters). */
export function sceneSvg(id: BackgroundId, time: TimeOfDay, menu = false): string {
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">${scene(id, time, menu)}</svg>`;
}

/**
 * A small picture of a background. 0.9.9.7.3: as an <img> of its own — inline, the scenes' gradients and shapes
 * share names (#sky, #glow …), so one picture took another's (the World Tree thumbnail came out broken).
 */
const thumbUrls = new Map<string, string>();
export function backgroundThumb(id: BackgroundId, time: TimeOfDay = 'night'): string {
  // 0.9.9.9.5.1: the painted picture, small
  return `<img class="bg-thumb-img" src="${artUrl(id, time, true)}" alt="" decoding="async">`;
}
/** the drawn scene as a small picture (before 0.9.9.9.5.1) */
export function drawnThumb(id: BackgroundId, time: TimeOfDay = 'night'): string {
  const key = `${id}-${time}`;
  if (!thumbUrls.has(key)) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice"><style>.bg-comet,.bg-spark circle{display:none}</style>${scene(id, time)}</svg>`;
    thumbUrls.set(key, URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' })));
  }
  return `<img class="bg-thumb-img" src="${thumbUrls.get(key)}" alt="" decoding="async">`;
}

// ── the player's time-of-day choice (saved in this browser) ──────────────────
const TIME_KEY = 'kb:bgtime';
export function getTimePref(): TimePref {
  void TIME_KEY;
  return 'auto'; // 0.9.9.6: always your clock (an old saved choice is ignored)
}

// (screenshots of every place: the harness paints them itself — only with this local flag)
try {
  if (localStorage.getItem('kb:debugui') === '1') {
    (window as unknown as { __kwPaint: (id: BackgroundId, t: TimeOfDay) => void }).__kwPaint = (id, t) => paintBackground(document.getElementById('bg')!, id, t);
  }
} catch { /* no storage */ }
