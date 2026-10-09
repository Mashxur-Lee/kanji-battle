import type { BackgroundId } from '../shared/progress';
import { spriteRects } from './wizard';

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

// ── scenes ────────────────────────────────────────────────────────────────────
function forest(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#4f95d0'], [0.5, '#9fd0ea'], [1, '#e6f2d8']], [[0, '#22163f'], [0.4, '#7a3a68'], [0.7, '#e2774f'], [1, '#ffcf8a']], [[0, '#040914'], [0.55, '#0c1e33'], [1, '#183a3c']]);
  const rows = pick(t, ['#5f8f86', '#3e6e5d', '#24503f', '#123222'], ['#5a3d5c', '#3f2c48', '#2a1e33', '#140f1c'], ['#1a3b3d', '#11292b', '#0a1c1d', '#040f10']);
  return `<defs>${grad('sk', sky)}${grad('cometTail', [[0, '#fff', 0.9], [1, '#9fd8ff', 0]], false)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? milkyWay() + stars(180, 520) + comets(3) + moon(1220, 160, 58) : t === 'sunset' ? stars(30, 200, '#ffe7c4') + horizonGlow(560, '#ff8a4a') + sun(1080, 560, 70, '#ffd9a0', '#ff9a5a') : sun(1260, 150, 46, '#fff6d8', '#fff2b0') + clouds(6, 80, 260, '#ffffff', 0.75)}
    ${mountains(520, 90, pick(t, '#86aac0', '#6b4a72', '#132a3a'), 0.4)}
    ${haze(560, pick(t, '#dff0f4', '#ffb08a', '#2a4a5a'), 0.6)}
    ${mist(560, pick(t, '#e8f4f0', '#ffcfb0', '#4e7a86'), pick(t, 0.5, 0.35, 0.3))}
    ${forestRow(620, 24, 240, 400, rows[0])}
    ${haze(640, pick(t, '#cfe6dc', '#c87a6a', '#1c3a40'), 0.45)}
    ${t !== 'night' ? rays(t === 'day' ? 1260 : 1080, t === 'day' ? 150 : 560, pick(t, '#fffbe0', '#ffd39a', '#000'), pick(t, 0.22, 0.3, 0)) : ''}
    ${forestRow(700, 20, 200, 330, rows[1])}
    ${t !== 'day' ? fireflies(t === 'night' ? 26 : 12, 520, 820, '#e8ff9a') : ''}
    ${forestRow(780, 16, 160, 270, rows[2])}
    ${eyes(t === 'night' ? 7 : t === 'sunset' ? 4 : 2, 700, 800, t === 'day' ? 0.35 : 1)}
    ${forestRow(860, 12, 120, 210, rows[3])}
    ${mist(860, pick(t, '#ffffff', '#ffd8b8', '#2a4f56'), 0.25)}`;
}

function swamp(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#7fa59a'], [0.55, '#c1d2b4'], [1, '#e2e6c8']], [[0, '#2a1838'], [0.45, '#7a4058'], [0.75, '#d0835a'], [1, '#e8b86e']], [[0, '#07080f'], [0.5, '#141f22'], [1, '#1f3426']]);
  const tree = pick(t, '#2f3d2c', '#24182a', '#080d0a');
  const water = pick(t, ['#6d8a73', '#33493a'], ['#7a4e4e', '#2a1a22'], ['#1b2b22', '#060b08']);
  const deadTree = (x: number, y: number, h: number) => {
    const b = (x1: number, y1: number, x2: number, y2: number, w: number) => `<path d="M${f(x1)} ${f(y1)} Q ${f((x1 + x2) / 2 + r(-15, 15))} ${f((y1 + y2) / 2)} ${f(x2)} ${f(y2)}" stroke="${tree}" stroke-width="${w}" stroke-linecap="round" fill="none"/>`;
    let s = b(x, y, x + 8, y - h, 18) + b(x + 4, y - h * 0.55, x - h * 0.38, y - h * 0.86, 8) + b(x + 6, y - h * 0.72, x + h * 0.42, y - h * 0.98, 7) + b(x - h * 0.2, y - h * 0.74, x - h * 0.32, y - h * 1.02, 4) + b(x + 8, y - h, x + 34, y - h * 1.16, 4);
    for (let i = 0; i < 6; i++) { // hanging moss
      const mx = x + r(-h * 0.35, h * 0.4), my = y - h * r(0.7, 1);
      s += `<path class="bg-sway" d="M${f(mx)} ${f(my)} q 4 ${f(r(20, 40))} -2 ${f(r(40, 80))}" stroke="${pick(t, '#5e7a4a', '#4c3a3a', '#2a3e26')}" stroke-width="3" fill="none" opacity=".85"/>`;
    }
    return s;
  };
  const trees = [140, 470, 980, 1380].map((x, i) => deadTree(x, 650, 250 + i * 28)).join('');
  return `<defs>${grad('sk', sky)}${grad('wt', [[0, water[0]], [1, water[1]]])}${radial('wisp', [[0, '#cfff9a', 0.9], [1, '#cfff9a', 0]])}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? stars(70, 320, '#cfe8b0') + moon(380, 170, 48, '#dfe9a8') : t === 'sunset' ? horizonGlow(560, '#ff7a5a') + sun(420, 520, 60, '#ffcf96', '#ff8a60') : sun(380, 140, 40, '#fbfbe6', '#ffffff') + clouds(4, 90, 220, '#f4f6ea', 0.55)}
    ${hills(560, 24, pick(t, '#56715a', '#3c2a3c', '#132018'))}
    ${haze(600, pick(t, '#eef4e6', '#e8a088', '#2e4a3a'), 0.55)}
    ${mist(580, pick(t, '#f0f4e6', '#f2c2a6', '#6c8a6a'), pick(t, 0.55, 0.4, 0.35))}
    ${trees}
    <rect x="0" y="640" width="${W}" height="260" fill="url(#wt)"/>
    <g opacity=".25" transform="translate(0 1290) scale(1 -1)">${trees}</g>
    ${Array.from({ length: 14 }, () => `<ellipse cx="${f(r(0, W))}" cy="${f(r(680, 880))}" rx="${f(r(20, 46))}" ry="7" fill="${pick(t, '#4f7a3c', '#5a4a30', '#1f3a1a')}" opacity=".9"/>`).join('')}
    ${Array.from({ length: 22 }, () => { const x = r(0, W), y = r(640, 700); return `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + r(-4, 4))}" y2="${f(y - r(40, 90))}" stroke="${tree}" stroke-width="3"/><ellipse cx="${f(x + r(-3, 3))}" cy="${f(y - r(60, 90))}" rx="4" ry="11" fill="${pick(t, '#4a3a22', '#2a1a14', '#0a0a06')}"/>`; }).join('')}
    ${Array.from({ length: 6 }, () => { const x = r(80, W - 80), y = r(700, 860); return `<g fill="${pick(t, '#3d5a2a', '#2c2418', '#0c1408')}"><ellipse cx="${f(x)}" cy="${f(y)}" rx="11" ry="7"/><circle cx="${f(x - 6)}" cy="${f(y - 6)}" r="3.5"/><circle cx="${f(x + 6)}" cy="${f(y - 6)}" r="3.5"/></g>${t === 'night' ? `<g class="bg-flicker slow"><circle cx="${f(x - 6)}" cy="${f(y - 6)}" r="1.4" fill="#e8ff7a"/><circle cx="${f(x + 6)}" cy="${f(y - 6)}" r="1.4" fill="#e8ff7a"/></g>` : ''}`; }).join('')}
    ${t !== 'day' ? `<g class="bg-float">${Array.from({ length: t === 'night' ? 7 : 3 }, () => `<circle cx="${f(r(100, W - 100))}" cy="${f(r(480, 760))}" r="${f(r(14, 24))}" fill="url(#wisp)" class="bg-flicker" style="animation-delay:${f(r(0, 3))}s"/>`).join('')}</g>` : ''}
    ${fireflies(t === 'night' ? 30 : 10, 420, 760, '#d8ff7a')}
    ${mist(700, pick(t, '#ffffff', '#ffd8c0', '#9ab89a'), pick(t, 0.35, 0.28, 0.22))}`;
}

function plains(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#3f86d6'], [0.55, '#8fc4ee'], [1, '#dff0fb']], [[0, '#2a1a45'], [0.45, '#a8506a'], [0.75, '#f0a060'], [1, '#f6d08a']], [[0, '#050a1c'], [0.6, '#16224a'], [1, '#2a2f58']]);
  const lit = t !== 'day';
  const house = (x: number, y: number, s: number, wall: string, roof: string) => {
    const w = 46 * s, h = 30 * s;
    const win = lit
      ? `<rect x="${f(x + w * 0.2)}" y="${f(y - h * 0.62)}" width="${f(w * 0.18)}" height="${f(h * 0.3)}" fill="#ffcf6a" class="bg-flicker slow"/><rect x="${f(x + w * 0.6)}" y="${f(y - h * 0.62)}" width="${f(w * 0.18)}" height="${f(h * 0.3)}" fill="#ffcf6a"/>`
      : `<rect x="${f(x + w * 0.2)}" y="${f(y - h * 0.62)}" width="${f(w * 0.18)}" height="${f(h * 0.3)}" fill="#2a3040" opacity=".6"/>`;
    const smoke = `<g class="bg-smoke" style="animation-delay:${f(r(0, 4))}s">${[0, 1, 2].map((i) => `<circle cx="${f(x + w * 0.78 + i * 4)}" cy="${f(y - h - 26 * s - i * 14)}" r="${f(4 + i * 3)}" fill="${pick(t, '#ffffff', '#f2d4c2', '#8a8fa8')}" opacity="${f(0.5 - i * 0.12)}"/>`).join('')}</g>`;
    return `${smoke}<rect x="${f(x)}" y="${f(y - h)}" width="${f(w)}" height="${f(h)}" fill="${wall}"/><polygon points="${f(x - 5 * s)},${f(y - h)} ${f(x + w / 2)},${f(y - h - 22 * s)} ${f(x + w + 5 * s)},${f(y - h)}" fill="${roof}"/><rect x="${f(x + w * 0.72)}" y="${f(y - h - 24 * s)}" width="${f(6 * s)}" height="${f(14 * s)}" fill="${roof}"/>${win}`;
  };
  const wall = pick(t, '#e8dcc0', '#c99a7a', '#3a3550'), roof = pick(t, '#a04a3a', '#6e2e3a', '#1f1a30');
  const village = (x: number, y: number, s: number) => Array.from({ length: 5 }, (_, i) => house(x + i * 58 * s + r(-8, 8), y + r(-4, 6), s * r(0.85, 1.1), wall, roof)).join('');
  const gob = spriteRects('goblin');
  const goblin = (x: number, y: number, s: number, delay: number) => `<g class="bg-walk" style="animation-delay:${delay}s"><g transform="translate(${f(x)} ${f(y - gob.h * s)}) scale(${s})" opacity="${t === 'night' ? 0.8 : 0.95}">${gob.rects}</g></g>`;
  return `<defs>${grad('sk', sky)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? milkyWay() + stars(150, 480) + moon(260, 140, 44) : t === 'sunset' ? horizonGlow(580, '#ffa060') + sun(820, 560, 110, '#ffe2a0', '#ffb070') + clouds(6, 120, 320, '#f7c7b0', 0.5) : sun(1300, 130, 50, '#fffbe0', '#fff6c0') + clouds(8, 70, 300, '#ffffff', 0.85)}
    ${mountains(560, 70, pick(t, '#7d98b8', '#6a4a6a', '#1c2240'), 2)}
    ${haze(600, pick(t, '#e6f0fa', '#ffb890', '#2a3060'), 0.55)}
    ${hills(600, 30, pick(t, '#7aa060', '#7a5a5a', '#1e2a2a'), 0.5)}
    ${village(260, 612, 0.7)}${village(1040, 604, 0.6)}
    <g transform="translate(1180 560)"><rect x="-7" y="0" width="14" height="110" fill="${pick(t, '#cbb79a', '#5a3a3a', '#1a1a28')}"/><g class="bg-spin">${[0, 90, 180, 270].map((a) => `<rect x="-4" y="-84" width="8" height="84" fill="${pick(t, '#8a6a4a', '#3a2228', '#141420')}" transform="rotate(${a + 20})"/>`).join('')}</g></g>
    ${hills(660, 34, pick(t, '#5f8f45', '#4a5a3a', '#162418'), 1.7)}
    ${goblin(300, 692, 2.6, 0)}${goblin(400, 698, 2.3, 6)}${goblin(1240, 702, 2.5, 3)}
    ${t === 'night' ? `<g class="bg-flicker" filter="url(#glow)"><polygon points="1380,742 1392,712 1404,742" fill="#ffb347"/><polygon points="1386,742 1392,722 1398,742" fill="#fff0a0"/></g>${goblin(1330, 744, 2.2, 9)}${goblin(1420, 744, 2.2, 12)}` : ''}
    ${hills(740, 26, pick(t, '#4a7a35', '#33472b', '#0e180e'), 3)}
    ${Array.from({ length: 80 }, () => { const x = r(0, W), y = r(760, 900); return `<line x1="${f(x)}" y1="${f(y)}" x2="${f(x + r(-3, 6))}" y2="${f(y - r(12, 26))}" stroke="${pick(t, '#2f5a22', '#23331d', '#08100a')}" stroke-width="3" class="bg-sway"/>`; }).join('')}
    ${t === 'night' ? fireflies(14, 640, 860, '#fff2a0') : ''}`;
}

function castle(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#4a78b8'], [0.6, '#9ab8dc'], [1, '#d8e4ee']], [[0, '#1a0a1e'], [0.4, '#6a1a2a'], [0.72, '#c2452a'], [1, '#f08a3a']], [[0, '#03051a'], [0.6, '#141d4a'], [1, '#2c3270']]);
  const stone = pick(t, '#5a5a6e', '#2a1a24', '#121126'), roof = pick(t, '#3a3a58', '#1a0e18', '#1b1a33');
  const lit = t !== 'day';
  const tower = (x: number, w: number, h: number) => `<rect x="${x}" y="${640 - h}" width="${w}" height="${h}" fill="${stone}"/><polygon points="${x - 10},${640 - h} ${x + w / 2},${560 - h} ${x + w + 10},${640 - h}" fill="${roof}"/>`
    + Array.from({ length: Math.floor(h / 70) }, (_, i) => `<rect x="${x + w / 2 - 6}" y="${640 - h + 40 + i * 70}" width="12" height="20" rx="6" fill="${lit ? '#ffcf6a' : '#20202e'}" opacity="${lit ? (rnd() > 0.35 ? 0.95 : 0.2) : 0.6}"${lit ? ' class="bg-flicker slow"' : ''}/>`).join('')
    + `<line x1="${x + w / 2}" y1="${560 - h}" x2="${x + w / 2}" y2="${520 - h}" stroke="${roof}" stroke-width="3"/><path class="bg-flag" d="M${x + w / 2} ${520 - h} q 18 6 34 0 q -16 10 0 18 q -18 -6 -34 0 z" fill="#b8263a"/>`;
  const dragon = spriteRects('dragon');
  // soldiers: dark, low-contrast silhouettes on both sides; the two in front cross swords now and then
  const soldier = (x: number, y: number, s: number, flip: boolean, weapon: 'spear' | 'sword') => {
    const c = pick(t, '#2c3038', '#1a0c10', '#06070e');
    const g = `<circle cx="0" cy="-58" r="7"/><path d="M-7 -62 q7 -14 14 0 z"/><rect x="-8" y="-50" width="16" height="30" rx="4"/><rect x="-8" y="-22" width="6" height="22"/><rect x="2" y="-22" width="6" height="22"/><ellipse cx="-11" cy="-36" rx="7" ry="11"/>`
      + (weapon === 'spear' ? `<line x1="10" y1="-10" x2="16" y2="-92" stroke="${c}" stroke-width="3"/><polygon points="13,-92 16,-104 19,-92"/>` : `<g class="bg-swing"><line x1="8" y1="-40" x2="34" y2="-70" stroke="${c}" stroke-width="3"/></g>`);
    return `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})" fill="${c}" opacity="${pick(t, 0.55, 0.75, 0.8)}">${g}</g>`;
  };
  const left = [soldier(70, 860, 1.5, false, 'spear'), soldier(140, 868, 1.4, false, 'spear'), soldier(230, 856, 1.6, false, 'sword')];
  const right = [soldier(1530, 860, 1.5, true, 'spear'), soldier(1460, 868, 1.4, true, 'spear'), soldier(1370, 856, 1.6, true, 'sword')];
  return `<defs>${grad('sk', sky)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? milkyWay() + stars(160, 480) + moon(300, 150, 52, '#e8e6ff') : t === 'sunset' ? horizonGlow(560, '#ff5a2a') + sun(1250, 520, 90, '#ffb070', '#ff5a3a') + clouds(5, 120, 300, '#ff9a7a', 0.35) : sun(1280, 140, 44, '#fffbe6', '#ffffff') + clouds(7, 80, 280, '#ffffff', 0.8)}
    ${mountains(600, 110, pick(t, '#6c7a96', '#3a1622', '#0e1030'), 1.3)}
    ${haze(620, pick(t, '#dfe8f4', '#ff7a5a', '#1a2050'), 0.5)}
    <g class="bg-dragon"><g transform="scale(${f(170 / dragon.w)})">${dragon.rects}</g></g>
    ${hills(640, 18, pick(t, '#4a5a48', '#1a0a12', '#10122a'))}
    <rect x="560" y="430" width="480" height="210" fill="${stone}"/>
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${560 + i * 40}" y="414" width="22" height="18" fill="${stone}"/>`).join('')}
    ${tower(500, 90, 330)}${tower(1010, 90, 330)}${tower(740, 120, 420)}
    <path d="M760 640 L760 590 Q800 548 840 590 L840 640 Z" fill="${pick(t, '#2a2a38', '#0c0408', '#05050f')}"/>
    ${Array.from({ length: 5 }, (_, i) => `<line x1="${768 + i * 16}" y1="${i === 0 || i === 4 ? 600 : 568}" x2="${768 + i * 16}" y2="640" stroke="${pick(t, '#4a4a5a', '#2a1418', '#14142a')}" stroke-width="3"/>`).join('')}
    <rect x="0" y="650" width="${W}" height="16" fill="${pick(t, '#5a7a9a', '#5a1a1a', '#10183a')}" opacity=".55"/>
    <polygon points="740,640 860,640 900,700 700,700" fill="${pick(t, '#6a5a48', '#2a1810', '#14121e')}"/>
    ${lit ? `<g class="bg-flicker" filter="url(#glow)"><circle cx="740" cy="600" r="6" fill="#ffb347"/><circle cx="860" cy="600" r="6" fill="#ffb347"/></g>` : ''}
    ${hills(780, 22, pick(t, '#3a4a38', '#14080c', '#0b0c1c'), 2)}
    ${left.join('')}${right.join('')}
    <g class="bg-spark" filter="url(#glow)"><circle cx="262" cy="788" r="5" fill="#fff6c0"/><circle cx="1338" cy="788" r="5" fill="#fff6c0" style="animation-delay:2.7s"/></g>
    ${t === 'night' ? fireflies(8, 520, 700, '#ffcf6a') : ''}`;
}

function worldtree(t: TimeOfDay) {
  const sky: Sky = pick(t, [[0, '#4a8ad8'], [0.5, '#9cd0f2'], [0.85, '#e8f6ff'], [1, '#ffffff']], [[0, '#2a1450'], [0.45, '#b04a78'], [0.8, '#f4a060'], [1, '#ffe0a0']], [[0, '#0b0626'], [0.45, '#2a1260'], [0.8, '#1d4f78'], [1, '#2c8a8a']]);
  const leaves = (y: number, n: number, rmin: number, rmax: number, col: string, op: number) =>
    Array.from({ length: n }, (_, i) => `<circle cx="${f((i / n) * W + r(0, 80))}" cy="${f(y + r(0, 50))}" r="${f(r(rmin, rmax))}" fill="${col}" opacity="${op}"/>`).join('');
  const leafA = pick(t, '#3f9a5a', '#7a5a3a', '#14402f'), leafB = pick(t, '#56b86a', '#a0703a', '#1b5a3c'), leafC = pick(t, '#7ad68a', '#e0a050', '#2f9e6a');
  return `<defs>${grad('sk', sky)}${radial('glow2', [[0, pick(t, '#ffffff', '#ffe0a0', '#9ff5c8'), 0.55], [1, '#ffffff', 0]])}${grad('aurora', [[0, '#7affc8', 0], [0.5, '#7affc8', 0.35], [1, '#b07aff', 0]], false)}${DEFS}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    ${t === 'night' ? stars(200, 560, '#d7ccff') + `<g class="bg-aurora" filter="url(#blur20)"><path d="M-100 200 C 300 80, 700 260, 1100 140 S 1600 120, 1800 200 L1800 280 C 1300 200, 900 340, 500 240 S 0 260, -100 300 Z" fill="url(#aurora)"/></g>` + moon(1240, 170, 54, '#fff4d6')
      : t === 'sunset' ? horizonGlow(500, '#ffb070') + sun(380, 470, 80, '#fff0c0', '#ffb070') : sun(1240, 150, 50, '#ffffff', '#fff8d0') + rays(1240, 150, '#ffffff', 0.18)}
    <ellipse cx="800" cy="640" rx="900" ry="200" fill="url(#glow2)"/>
    ${clouds(10, 590, 660, pick(t, '#ffffff', '#ffd8c0', '#efeaff'), pick(t, 0.85, 0.6, 0.22), 'bg-drift slow')}
    ${leaves(640, 26, 50, 90, leafA, 1)}
    ${leaves(690, 30, 45, 80, leafB, 1)}
    <path d="M-40 800 C 300 730, 650 760, 820 740 S 1300 735, 1640 780 L1640 900 L-40 900 Z" fill="${pick(t, '#5a3a24', '#4a2a18', '#3a2418')}"/>
    <path d="M-40 840 C 400 800, 760 820, 940 800 S 1400 810, 1640 840 L1640 900 L-40 900 Z" fill="${pick(t, '#462c1a', '#36200f', '#2b190f')}"/>
    ${leaves(760, 22, 26, 46, leafC, 0.9)}
    ${fireflies(t === 'night' ? 60 : 24, 560, 820, pick(t, '#ffffff', '#fff0b0', '#b9ffd8'))}
    ${t === 'night' ? fireflies(30, 80, 560, '#bff8ff') : ''}`;
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
