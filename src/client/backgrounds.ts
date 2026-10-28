import type { BackgroundId } from '../shared/progress';
import { characterSvg } from './art2d';

// Painted backgrounds: layered SVG scenes (no image files), each in three times of day.
// Small living details are animated with CSS classes (bg-*) defined in style.css.

export type TimeOfDay = 'day' | 'sunset' | 'night';
export type TimePref = 'auto' | TimeOfDay;
export const TIMES: Array<{ id: TimePref; name: string }> = [
  { id: 'auto', name: 'Cycle' }, { id: 'day', name: 'Day' }, { id: 'sunset', name: 'Sunset' }, { id: 'night', name: 'Night' },
];

/** Cycle ("auto"): day → sunset → night, 3 minutes each, then again. */
export const CYCLE_STEP_MS = 3 * 60_000;
const CYCLE: TimeOfDay[] = ['day', 'sunset', 'night'];
export function resolveTime(pref: TimePref, now = Date.now()): TimeOfDay {
  if (pref !== 'auto') return pref;
  return CYCLE[Math.floor(now / CYCLE_STEP_MS) % CYCLE.length];
}
/** ms until the cycle moves on */
export const untilNextStep = (now = Date.now()) => CYCLE_STEP_MS - (now % CYCLE_STEP_MS);

const W = 1600, H = 900;
let seed = 1;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const r = (a: number, b: number) => a + rnd() * (b - a);
const f = (n: number) => n.toFixed(1);

// ── shared painting helpers ───────────────────────────────────────────────────
type Stop = [number, string, number?];
const stopsOf = (stops: Stop[]) => stops.map(([o, c, a]) => `<stop offset="${o}" stop-color="${c}"${a !== undefined ? ` stop-opacity="${a}"` : ''}/>`).join('');
const grad = (id: string, stops: Stop[], vertical = true) => `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}">${stopsOf(stops)}</linearGradient>`;
const radial = (id: string, stops: Stop[]) => `<radialGradient id="${id}">${stopsOf(stops)}</radialGradient>`;
const DEFS = `<linearGradient id="haze" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="currentColor" stop-opacity="0"/><stop offset=".55" stop-color="currentColor" stop-opacity=".9"/><stop offset="1" stop-color="currentColor" stop-opacity="0"/></linearGradient>`
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
  return `<g class="${cls}" opacity="${op}">${Array.from({ length: n }, () => {
    const x = r(-100, W), y = r(yMin, yMax), s = r(0.6, 1.4);
    return `<g transform="translate(${f(x)} ${f(y)}) scale(${f(s)})" fill="${color}"><ellipse cx="0" cy="0" rx="90" ry="22"/><ellipse cx="-40" cy="-12" rx="46" ry="26"/><ellipse cx="30" cy="-18" rx="52" ry="30"/><ellipse cx="70" cy="-4" rx="40" ry="18"/></g>`;
  }).join('')}</g>`;
}
function mountains(y: number, amp: number, color: string, jag = 1) {
  let d = `M0 ${H} L0 ${y}`;
  for (let x = 0; x <= W + 60; x += 60) d += ` L${x} ${f(y - Math.abs(Math.sin(x / 260 + jag) * amp) - r(0, amp * 0.25))}`;
  return `<path d="${d} L${W} ${H} Z" fill="${color}"/>`;
}
function hills(y: number, amp: number, color: string, phase = 0) {
  let d = `M0 ${H} L0 ${y}`;
  for (let x = 0; x <= W; x += 40) d += ` L${x} ${f(y + Math.sin(x / 210 + phase) * amp + Math.sin(x / 90 + phase * 2) * amp * 0.25)}`;
  return `<path d="${d} L${W} ${H} Z" fill="${color}"/>`;
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
/** Pairs of red eyes in the dark between the trees; each pair blinks on its own rhythm. */
function eyes(n: number, yMin: number, yMax: number, op: number) {
  return Array.from({ length: n }, () => {
    const x = r(60, W - 60), y = r(yMin, yMax), gap = r(7, 12), s = r(2, 3.4);
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
  let s = `<path d="${d}" fill="${color}"/>`;
  // the light catches the left side; bark ridges; roots running into the ground
  s += `<path d="M${f(L(base - 160) + w * 0.06)} ${base - 160} L${f(L(top) + w * 0.06)} ${top} L${f(L(top) + w * 0.2)} ${top} L${f(L(base - 160) + w * 0.18)} ${base - 160} Z" fill="#ffffff" opacity=".06"/>`;
  for (let i = 0; i < 5; i++) { const bx = x - w * 0.3 + i * w * 0.15 + lean * 0.5; s += `<path d="M${f(bx)} ${base - 120} q${f(r(-8, 8))} -200 ${f(r(-10, 10))} -${f(r(300, 600))}" stroke="#000" stroke-width="${f(r(2, 5))}" opacity=".16" fill="none"/>`; }
  for (const sx of [-1, 1]) s += `<path d="M${f(x + sx * w * 0.3)} ${base - 60} Q${f(x + sx * w * 0.9)} ${base - 20} ${f(x + sx * w * 1.9)} ${base + 10}" stroke="${color}" stroke-width="${f(w * 0.18)}" fill="none" stroke-linecap="round"/>`;
  return s;
}
/** A rune monolith (the 3D plains and world tree): a tall stone with glowing slits. */
function monolith(x: number, base: number, h: number, w: number, stone: string, glow: string, lit: boolean) {
  let s = `<path d="M${x - w / 2} ${base} L${x - w / 2 + 4} ${base - h} L${x + w / 2 - 6} ${base - h - 8} L${x + w / 2} ${base} Z" fill="${stone}"/>`;
  s += `<path d="M${x + w * 0.1} ${base - h - 4} L${x + w / 2 - 6} ${base - h - 8} L${x + w / 2} ${base} L${x + w * 0.15} ${base} Z" fill="#000" opacity=".25"/>`;
  for (let i = 0; i < 3; i++) s += `<rect x="${f(x - 3)}" y="${f(base - h * (0.78 - i * 0.22))}" width="6" height="${f(h * 0.1)}" rx="2" fill="${glow}" opacity="${lit ? 0.95 : 0.55}"${lit ? ' filter="url(#glow)" class="bg-flicker slow"' : ''}/>`;
  return s;
}
/** A stone brazier with a flame. */
function brazier(x: number, base: number, s: number, stone: string, lit: boolean) {
  const flame = `<g class="bg-flicker" filter="url(#glow)"><path d="M${x - 9 * s} ${base - 34 * s} Q${x - 10 * s} ${base - 56 * s} ${x} ${base - 74 * s} Q${x + 10 * s} ${base - 56 * s} ${x + 9 * s} ${base - 34 * s} Z" fill="#ff9a2a"/><path d="M${x - 4 * s} ${base - 34 * s} Q${x - 4 * s} ${base - 48 * s} ${x} ${base - 58 * s} Q${x + 4 * s} ${base - 48 * s} ${x + 4 * s} ${base - 34 * s} Z" fill="#fff0a0"/></g>`;
  return `<path d="M${x - 14 * s} ${base} L${x - 9 * s} ${base - 26 * s} L${x - 16 * s} ${base - 34 * s} L${x + 16 * s} ${base - 34 * s} L${x + 9 * s} ${base - 26 * s} L${x + 14 * s} ${base} Z" fill="${stone}"/>${lit ? flame : `<ellipse cx="${x}" cy="${base - 36 * s}" rx="${12 * s}" ry="${4 * s}" fill="#ffb060" opacity=".7"/>`}`;
}
/** Grass tufts along a line (the near ground). */
function grass(n: number, y0: number, y1: number, color: string, hmin = 14, hmax = 34) {
  return `<g>${Array.from({ length: n }, () => {
    const x = r(0, W), y = r(y0, y1), h = r(hmin, hmax);
    return `<path d="M${f(x)} ${f(y)} q${f(r(-6, 2))} ${f(-h * 0.6)} ${f(r(-10, -2))} ${f(-h)} M${f(x + 3)} ${f(y)} q${f(r(0, 4))} ${f(-h * 0.7)} ${f(r(4, 10))} ${f(-h * 0.9)}" stroke="${color}" stroke-width="2.6" fill="none" stroke-linecap="round"/>`;
  }).join('')}</g>`;
}
/** A rock (low-poly: two faces). */
function rock(x: number, y: number, s: number, c: string) {
  return `<path d="M${x - 40 * s} ${y} L${x - 30 * s} ${y - 26 * s} L${x - 4 * s} ${y - 40 * s} L${x + 26 * s} ${y - 30 * s} L${x + 44 * s} ${y} Z" fill="${c}"/><path d="M${x - 4 * s} ${y - 40 * s} L${x + 26 * s} ${y - 30 * s} L${x + 44 * s} ${y} L${x + 4 * s} ${y} Z" fill="#000" opacity=".22"/>`;
}

function forest(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#7fb2d8'], [0.5, '#cfe4ec'], [1, '#f2f6ee']], [[0, '#2a1a44'], [0.4, '#8a4a6a'], [0.7, '#e88a5a'], [1, '#ffd49a']], [[0, '#050a16'], [0.55, '#0f2236'], [1, '#1c3c42']]);
  const far = pick(t, '#b8c8d4', '#a0707a', '#1e3644'), mid = pick(t, '#5e6a80', '#4a2e46', '#0f1e28'), near = pick(t, '#262838', '#1c1222', '#05090e');
  const stone = pick(t, ['#d8dce4', '#a8aebc', '#6a7080'], ['#8a6a78', '#5e4458', '#2e2030'], ['#3a4656', '#28323e', '#121820']);
  return `<defs>${grad('sk', sky)}${grad('cometTail', [[0, '#fff', 0.9], [1, '#9fd8ff', 0]], false)}${floorDefs(stone)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? milkyWay() + stars(160, 420) + comets(2) + moon(1200, 150, 54) : t === 'sunset' ? horizonGlow(560, '#ff8a4a') + sun(1080, 520, 70, '#ffd9a0', '#ff9a5a') : sun(1180, 120, 50, '#fffbe8', '#fff6c8')}
    ${Array.from({ length: 34 }, (_, i) => { const x = (i / 34) * W + r(-20, 20), w = r(14, 34); return `<rect x="${f(x)}" y="0" width="${f(w)}" height="700" fill="${far}" opacity="${f(r(0.35, 0.7))}"/>`; }).join('')}
    ${haze(560, pick(t, '#f2f6f4', '#ffc0a0', '#2a4a5a'), 0.75)}
    ${mist(600, pick(t, '#ffffff', '#ffd0b0', '#4e7a86'), pick(t, 0.6, 0.4, 0.35))}
    ${Array.from({ length: 12 }, (_, i) => { const x = (i / 12) * W + r(0, 90), w = r(40, 70); return `<path d="M${f(x)} 760 L${f(x + 8)} 0 L${f(x + w)} 0 L${f(x + w + 6)} 760Z" fill="${mid}" opacity=".9"/>`; }).join('')}
    ${t !== 'night' ? rays(t === 'day' ? 1180 : 1080, t === 'day' ? 120 : 520, pick(t, '#fffdf0', '#ffd39a', '#000'), pick(t, 0.32, 0.3, 0)) : ''}
    ${haze(700, pick(t, '#e8f0f0', '#d08a7a', '#1c3a40'), 0.35)}
    ${rock(300, 760, 1.3, pick(t, '#7a8090', '#4a3444', '#141a22'))}${rock(1290, 756, 1.1, pick(t, '#6e7484', '#40303e', '#111820'))}
    ${eyes(t === 'night' ? 6 : t === 'sunset' ? 3 : 1, 560, 700, t === 'day' ? 0.3 : 1)}
    ${trunk(90, 190, near, 30)}${trunk(1500, 210, near, -40)}${trunk(420, 110, mid, 20)}${trunk(1170, 120, mid, -10)}
    ${t !== 'day' ? fireflies(t === 'night' ? 28 : 12, 460, 760, '#e8ff9a') : ''}
    <path d="M0 740 Q400 724 800 726 Q1200 724 1600 740 L1600 900 L0 900 Z" fill="${pick(t, '#4e5a48', '#2a1c26', '#070d10')}"/>
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
    const b = (x1: number, y1: number, x2: number, y2: number, w: number) => `<path d="M${f(x1)} ${f(y1)} Q ${f((x1 + x2) / 2 + r(-15, 15))} ${f((y1 + y2) / 2)} ${f(x2)} ${f(y2)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" fill="none"/>`;
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
    ${mist(610, pick(t, '#f6f8ec', '#f8c8a8', '#7a9a7a'), pick(t, 0.6, 0.45, 0.4))}
    ${[110, 1440].map((x, i) => deadTree(x, 720, 340 + i * 40, tree)).join('')}
    <g opacity=".22" transform="translate(0 1440) scale(1 -1)">${[110, 1440].map((x, i) => deadTree(x, 720, 340 + i * 40, tree)).join('')}</g>
    ${Array.from({ length: 16 }, () => `<ellipse cx="${f(r(0, W))}" cy="${f(r(640, 720))}" rx="${f(r(16, 34))}" ry="5" fill="${pick(t, '#5a8a44', '#6a5a34', '#1f3a1a')}"/>`).join('')}
    ${reeds(26, 640, 720, tree)}
    ${monolith(270, 730, 120, 44, pick(t, '#4a5444', '#3a2a30', '#141c18'), '#9aff8a', lit)}${monolith(1330, 728, 130, 46, pick(t, '#4a5444', '#3a2a30', '#141c18'), '#9aff8a', lit)}
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
    ${village(240, 640, 0.6)}${village(1060, 634, 0.55)}
    <g transform="translate(1200 600)"><rect x="-6" y="0" width="12" height="80" fill="${pick(t, '#cbb79a', '#5a3a3a', '#1a1a28')}"/><g class="bg-spin">${[0, 90, 180, 270].map((a) => `<rect x="-4" y="-64" width="8" height="64" fill="${pick(t, '#8a6a4a', '#3a2228', '#141420')}" transform="rotate(${a + 20})"/>`).join('')}</g></g>
    ${hills(680, 26, pick(t, '#6a9a4c', '#4a5a3a', '#162418'), 1.7)}
    ${gob(280, 700, 0.42, 0)}${gob(380, 704, 0.38, 6)}${gob(1250, 706, 0.4, 3)}
    ${monolith(130, 760, 210, 70, mono, '#ffb070', lit)}${monolith(470, 735, 150, 54, mono, '#ffb070', lit)}${monolith(1130, 735, 150, 54, mono, '#ffb070', lit)}${monolith(1470, 760, 210, 70, mono, '#ffb070', lit)}
    ${brazier(330, 742, 1.2, mono, lit)}${brazier(1270, 742, 1.2, mono, lit)}
    ${grass(70, 700, 760, pick(t, '#3f6a2a', '#33472b', '#0b140c'))}
    ${arenaFloor(t, stone, pick(t, '#ffffff', '#ffe0c0', '#e8e6ff'), pick(t, '#4a3a6a', '#ffffff', '#ffffff'))}
    ${t === 'night' ? fireflies(14, 600, 800, '#fff2a0') : ''}`;
}

function castle(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#5a86c0'], [0.6, '#a8c2e0'], [1, '#e2eaf2']], [[0, '#1e0c24'], [0.4, '#7a2232'], [0.72, '#d0582e'], [1, '#f4a050']], [[0, '#04061c'], [0.6, '#161f4e'], [1, '#2e3474']]);
  const stoneC = pick(t, '#5e5e74', '#2c1a26', '#13132a'), roof = pick(t, '#3e3e5e', '#1c0e1a', '#1c1b36');
  const lit = t !== 'day';
  const tower = (x: number, w: number, h: number) => `<rect x="${x}" y="${640 - h}" width="${w}" height="${h}" fill="${stoneC}"/><rect x="${x + w * 0.62}" y="${640 - h}" width="${w * 0.38}" height="${h}" fill="#000" opacity=".2"/><polygon points="${x - 10},${640 - h} ${x + w / 2},${560 - h} ${x + w + 10},${640 - h}" fill="${roof}"/>`
    + Array.from({ length: Math.floor(h / 70) }, (_, i) => `<rect x="${x + w / 2 - 6}" y="${640 - h + 40 + i * 70}" width="12" height="20" rx="6" fill="${lit ? '#ffcf6a' : '#20202e'}" opacity="${lit ? (rnd() > 0.35 ? 0.95 : 0.2) : 0.6}"${lit ? ' class="bg-flicker slow"' : ''}/>`).join('')
    + `<line x1="${x + w / 2}" y1="${560 - h}" x2="${x + w / 2}" y2="${520 - h}" stroke="${roof}" stroke-width="3"/><path class="bg-flag" d="M${x + w / 2} ${520 - h} q 18 6 34 0 q -16 10 0 18 q -18 -6 -34 0 z" fill="#b8263a"/>`;
  const soldier = (x: number, y: number, s: number, flip: boolean, weapon: 'spear' | 'sword') => {
    const c = pick(t, '#2c3038', '#1a0c10', '#06070e');
    const g = `<circle cx="0" cy="-58" r="7"/><path d="M-7 -62 q7 -14 14 0 z"/><rect x="-8" y="-50" width="16" height="30" rx="4"/><rect x="-8" y="-22" width="6" height="22"/><rect x="2" y="-22" width="6" height="22"/><ellipse cx="-11" cy="-36" rx="7" ry="11"/>`
      + (weapon === 'spear' ? `<line x1="10" y1="-10" x2="16" y2="-92" stroke="${c}" stroke-width="3"/><polygon points="13,-92 16,-104 19,-92"/>` : `<g class="bg-swing"><line x1="8" y1="-40" x2="34" y2="-70" stroke="${c}" stroke-width="3"/></g>`);
    return `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})" fill="${c}" opacity="${pick(t, 0.6, 0.8, 0.85)}">${g}</g>`;
  };
  const army = (x0: number, flip: boolean) => Array.from({ length: 9 }, (_, i) => soldier(x0 + (flip ? -1 : 1) * (i * 34 + r(-6, 6)), 718 + (i % 3) * 6, 0.9 + (i % 3) * 0.08, flip, i % 4 === 3 ? 'sword' : 'spear')).join('');
  const banner = (x: number) => `<line x1="${x}" y1="720" x2="${x}" y2="470" stroke="${pick(t, '#3a3030', '#1a0c10', '#0a0a14')}" stroke-width="7"/><path class="bg-flag" d="M${x} 480 h62 v130 l-31 -22 l-31 22 Z" fill="${pick(t, '#a8243a', '#7a1424', '#5a1020')}"/>`;
  const stone = pick(t, ['#8a8494', '#5e5868', '#2e2a36'], ['#5a3a3a', '#3e2628', '#1e1012'], ['#2a2a40', '#1c1c30', '#0c0c18']);
  return `<defs>${grad('sk', sky)}${floorDefs(stone)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? milkyWay() + stars(160, 460) + moon(300, 150, 52, '#e8e6ff') : t === 'sunset' ? horizonGlow(560, '#ff5a2a') + sun(1250, 520, 90, '#ffb070', '#ff5a3a') + clouds(5, 120, 300, '#ff9a7a', 0.4) : sun(1280, 140, 44, '#fffbe6', '#ffffff') + clouds(7, 80, 280, '#ffffff', 0.85)}
    ${mountains(600, 110, pick(t, '#7686a2', '#3a1622', '#0e1030'), 1.3)}
    ${haze(620, pick(t, '#dfe8f4', '#ff7a5a', '#1a2050'), 0.5)}
    ${hills(640, 18, pick(t, '#4e5e4c', '#1a0a12', '#10122a'))}
    <rect x="560" y="430" width="480" height="210" fill="${stoneC}"/>
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${560 + i * 40}" y="414" width="22" height="18" fill="${stoneC}"/>`).join('')}
    ${tower(500, 90, 330)}${tower(1010, 90, 330)}${tower(740, 120, 420)}
    <path d="M760 640 L760 590 Q800 548 840 590 L840 640 Z" fill="${pick(t, '#2a2a38', '#0c0408', '#05050f')}"/>
    <path d="M400 712 C 440 660, 470 640, 492 636 L1108 636 C 1130 640, 1160 660, 1200 712 Z" fill="${pick(t, '#5a6c57', '#22101a', '#14162e')}"/>
    <path d="M488 634 L1112 634 L1124 652 L476 652 Z" fill="${dk2(stoneC, 0.25)}"/>
    <path d="M760 652 L840 652 L860 712 L740 712 Z" fill="${pick(t, '#8a7a62', '#3a2420', '#1c1a2a')}" opacity=".85"/>
    ${Array.from({ length: 9 }, (_, i) => `<ellipse cx="${f(470 + i * 82 + r(-10, 10))}" cy="${f(664 + r(0, 14))}" rx="${f(r(18, 30))}" ry="${f(r(7, 11))}" fill="${dk2(stoneC, 0.15)}" opacity=".7"/>`).join('')}
    ${lit ? `<g class="bg-flicker" filter="url(#glow)"><circle cx="740" cy="600" r="6" fill="#ffb347"/><circle cx="860" cy="600" r="6" fill="#ffb347"/></g>` : ''}
    ${haze(700, pick(t, '#e8eef6', '#ff8a5a', '#1a2050'), 0.25)}
    ${banner(380)}${banner(1158)}
    ${army(40, false)}${army(1560, true)}
    ${brazier(270, 740, 1.4, pick(t, '#4a4a56', '#2a1418', '#121222'), lit || true)}${brazier(1330, 740, 1.4, pick(t, '#4a4a56', '#2a1418', '#121222'), lit || true)}
    ${arenaFloor(t, stone, pick(t, '#ffb060', '#ffb060', '#a8a0ff'), pick(t, '#ffffff', '#fff0d0', '#e8e6ff'))}
    <g class="bg-spark" filter="url(#glow)"><circle cx="262" cy="700" r="5" fill="#fff6c0"/><circle cx="1338" cy="700" r="5" fill="#fff6c0" style="animation-delay:2.7s"/></g>
    ${t === 'night' ? fireflies(8, 520, 700, '#ffcf6a') : ''}`;
}

function worldtree(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#4a8ad8'], [0.5, '#9cd0f2'], [0.85, '#e8f6ff'], [1, '#ffffff']], [[0, '#2a1450'], [0.45, '#b04a78'], [0.8, '#f4a060'], [1, '#ffe0a0']], [[0, '#0b0626'], [0.45, '#2a1260'], [0.8, '#1d4f78'], [1, '#2c8a8a']]);
  const bark = pick(t, '#4a3626', '#3a2418', '#1a1424'), leaf = pick(t, ['#3f9a5a', '#56b86a', '#7ad68a'], ['#7a5a3a', '#a0703a', '#e0a050'], ['#14402f', '#1b5a3c', '#2f9e6a']);
  const lit = t !== 'day';
  const stone = pick(t, ['#7a8a8a', '#56645e', '#2a3430'], ['#6a5450', '#4a3a3a', '#22181a'], ['#1e3038', '#14222a', '#081016']);
  const canopy = (cx: number, cy: number, rx: number, ry: number) => [0, 1, 2].map((layer) => {
    // three layers for volume: the dark underside, the body, the sunlit top (towards the light, upper left)
    const n = [26, 30, 22][layer], k = [1, 0.85, 0.6][layer], dy = [40, 0, -40][layer], dx = [0, -10, -50][layer];
    const col = [dk2(leaf[0], 0.35), leaf[1], leaf[2]][layer];
    return Array.from({ length: n }, () => { const a = r(0, Math.PI * 2), d = Math.sqrt(rnd()); const x = cx + dx + Math.cos(a) * rx * k * d, y = cy + dy + Math.sin(a) * ry * k * d; const rad = r(34, 70) * (layer === 2 ? 0.8 : 1); return `<circle cx="${f(x)}" cy="${f(y)}" r="${f(rad)}" fill="${col}"/>${layer === 2 ? `<circle cx="${f(x - rad * 0.3)}" cy="${f(y - rad * 0.35)}" r="${f(rad * 0.45)}" fill="#ffffff" opacity=".08"/>` : ''}`; }).join('');
  }).join('');
  const island = (x: number, y: number, s: number) => `<g class="bg-float"><path d="M${x - 60 * s} ${y} Q${x} ${y - 16 * s} ${x + 60 * s} ${y} L${x + 20 * s} ${y + 50 * s} L${x} ${y + 80 * s} L${x - 24 * s} ${y + 46 * s} Z" fill="${pick(t, '#6a5a4a', '#5a3a2a', '#1e1a2a')}"/><ellipse cx="${x}" cy="${y - 4 * s}" rx="${62 * s}" ry="${12 * s}" fill="${leaf[1]}"/>${lit ? `<circle cx="${x}" cy="${y + 70 * s}" r="${4 * s}" fill="#9ff5c8" filter="url(#glow)" class="bg-flicker"/>` : ''}</g>`;
  const mono = pick(t, '#4a5a5a', '#3a2a30', '#122028');
  return `<defs>${grad('sk', sky)}${radial('glow2', [[0, pick(t, '#ffffff', '#ffe0a0', '#9ff5c8'), 0.55], [1, '#ffffff', 0]])}${grad('aurora', [[0, '#7affc8', 0], [0.5, '#7affc8', 0.35], [1, '#b07aff', 0]], false)}${floorDefs(stone)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? stars(200, 560, '#d7ccff') + `<g class="bg-aurora" filter="url(#blur20)"><path d="M-100 200 C 300 80, 700 260, 1100 140 S 1600 120, 1800 200 L1800 280 C 1300 200, 900 340, 500 240 S 0 260, -100 300 Z" fill="url(#aurora)"/></g>` + moon(1300, 150, 50, '#fff4d6')
      : t === 'sunset' ? horizonGlow(500, '#ffb070') + sun(300, 470, 80, '#fff0c0', '#ffb070') : sun(1300, 140, 50, '#ffffff', '#fff8d0') + rays(1300, 140, '#ffffff', 0.18)}
    ${mountains(600, 150, pick(t, '#7a9ac0', '#6a4a72', '#1a2a4a'), 0.2)}
    ${haze(620, pick(t, '#e8f4ff', '#ffc0a0', '#2a3a6a'), 0.5)}
    ${island(260, 300, 0.9)}${island(1340, 360, 0.7)}${island(1080, 220, 0.5)}
    <ellipse cx="800" cy="600" rx="700" ry="200" fill="url(#glow2)"/>
    ${clouds(8, 600, 660, pick(t, '#ffffff', '#ffd8c0', '#efeaff'), pick(t, 0.8, 0.55, 0.2), 'bg-drift slow')}
    <path d="M690 650 Q712 520 690 430 Q660 360 580 320 L640 318 Q720 350 750 290 Q760 360 800 330 Q840 360 850 290 Q880 350 960 318 L1020 320 Q940 360 910 430 Q888 520 910 650 Z" fill="${bark}"/>
    <path d="M800 650 L790 440 Q800 400 812 440 L820 650Z" fill="#000" opacity=".18"/><path d="M700 640 Q706 520 696 440 L720 440 Q728 520 724 640Z" fill="#fff" opacity=".07"/>
    ${canopy(800, 240, 470, 170)}
    ${hills(690, 20, pick(t, '#3a6a4a', '#4a3a2a', '#0e2420'), 1)}
    <path d="M560 716 C 640 680, 720 664, 800 662 C 880 664, 960 680, 1040 716 Z" fill="${dk2(pick(t, '#3a6a4a', '#4a3a2a', '#0e2420'), 0.12)}"/>
    <path d="M691 644 Q688 652 676 662 Q600 676 470 712 L540 716 Q630 694 716 684 Q740 704 700 724 L780 724 Q790 700 800 690 Q812 700 820 724 L900 724 Q860 704 884 684 Q970 694 1060 716 L1130 712 Q1000 676 924 662 Q912 652 909 644 Z" fill="${bark}"/>
    <path d="M676 664 Q600 680 500 712 M924 664 Q1000 680 1100 712" stroke="#000" stroke-opacity=".18" stroke-width="5" fill="none"/>
    ${lit ? `<g filter="url(#glow)" class="bg-flicker slow">${Array.from({ length: 7 }, (_, i) => `<path d="M${740 + i * 20} 680 q${r(-40, 40)} 30 ${r(-120, 120)} 50" stroke="#9ff5c8" stroke-width="2" fill="none" opacity=".7"/>`).join('')}</g>` : ''}
    ${monolith(180, 750, 190, 64, mono, '#7affd0', lit)}${monolith(1420, 750, 190, 64, mono, '#7affd0', lit)}${monolith(500, 720, 120, 44, mono, '#7affd0', lit)}${monolith(1100, 720, 120, 44, mono, '#7affd0', lit)}
    ${grass(60, 700, 760, pick(t, '#2f6a3a', '#4a3a24', '#0a1a14'))}
    ${fireflies(t === 'night' ? 50 : 20, 420, 760, pick(t, '#ffffff', '#fff0b0', '#b9ffd8'))}
    ${arenaFloor(t, stone, pick(t, '#2adfa0', '#7affd0', '#6affd0'), pick(t, '#0a5a40', '#f0fff8', '#e0fff4'))}
    ${t === 'night' ? fireflies(24, 80, 520, '#bff8ff') : ''}`;
}

const SCENES: Record<BackgroundId, (t: TimeOfDay) => string> = { forest, swamp, plains, castle, worldtree };

/** Gradient/filter ids are made unique per scene + time, so several scenes can be on one page. */
function scene(id: BackgroundId, t: TimeOfDay) {
  seed = [...(id + t)].reduce((s, c) => s + c.charCodeAt(0) * 97, 7);
  const key = `${id}-${t}`;
  return SCENES[id](t).replace(/id="(\w+)"/g, `id="${key}-$1"`).replace(/url\(#(\w+)\)/g, `url(#${key}-$1)`);
}

const cache = new Map<string, string>();
/** How long the time-of-day change takes: the scene fades out to dusk-dark, swaps, and fades back in. */
export const BG_FADE_MS = 3200;
let fadeTimer = 0;
/** Draws a background into the fixed #bg layer. `fade`: fade out and back in (the time of day changing). */
export function paintBackground(el: HTMLElement, id: BackgroundId, time: TimeOfDay = 'night', fade = false) {
  const key = `${id}-${time}`;
  if (el.dataset.key === key) return;
  el.dataset.key = key;
  if (!cache.has(key)) cache.set(key, `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" aria-hidden="true">${scene(id, time)}</svg>`);
  const swap = () => {
    const layer = document.createElement('div');
    layer.className = 'bg-layer';
    layer.innerHTML = cache.get(key)!;
    const old = el.querySelector('.bg-layer');
    if (old) old.replaceWith(layer); else el.prepend(layer);
    el.dataset.bg = id;
    el.dataset.time = time;
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
export function sceneSvg(id: BackgroundId, time: TimeOfDay): string {
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice">${scene(id, time)}</svg>`;
}

export function backgroundThumb(id: BackgroundId, time: TimeOfDay = 'night'): string {
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" class="still">${scene(id, time)}</svg>`;
}

// ── the player's time-of-day choice (saved in this browser) ──────────────────
const TIME_KEY = 'kb:bgtime';
export function getTimePref(): TimePref {
  try { const v = localStorage.getItem(TIME_KEY); return v === 'day' || v === 'sunset' || v === 'night' ? v : 'auto'; } catch { return 'auto'; }
}
export function setTimePref(t: TimePref) { try { localStorage.setItem(TIME_KEY, t); } catch { /* private mode */ } }
