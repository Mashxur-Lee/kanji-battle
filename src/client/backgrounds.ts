import type { BackgroundId } from '../shared/progress';

// Layered silhouette scenes drawn as SVG (no image files). 1600×900, anchored to the bottom.

let seed = 1;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
const W = 1600, H = 900;

function sky(id: string, stops: Array<[number, string]>) {
  return `<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">${stops.map(([o, c]) => `<stop offset="${o}" stop-color="${c}"/>`).join('')}</linearGradient>`;
}
function stars(n: number, maxY: number, color = '#fff') {
  let s = '';
  for (let i = 0; i < n; i++) s += `<circle cx="${(rnd() * W).toFixed(0)}" cy="${(rnd() * maxY).toFixed(0)}" r="${(rnd() * 1.6 + 0.4).toFixed(1)}" fill="${color}" opacity="${(rnd() * 0.6 + 0.3).toFixed(2)}"/>`;
  return s;
}
function pines(y: number, count: number, minH: number, maxH: number, color: string) {
  let s = '';
  for (let i = 0; i < count; i++) {
    const x = (i / count) * W + rnd() * (W / count) - 20;
    const h = minH + rnd() * (maxH - minH);
    const w = h * 0.38;
    s += `<polygon points="${x},${y} ${x + w / 2},${y - h} ${x + w},${y}" fill="${color}"/>`;
    s += `<polygon points="${x + w * 0.12},${y - h * 0.35} ${x + w / 2},${y - h * 1.02} ${x + w * 0.88},${y - h * 0.35}" fill="${color}"/>`;
  }
  return s + `<rect x="0" y="${y}" width="${W}" height="${H - y}" fill="${color}"/>`;
}
function hills(y: number, amp: number, color: string, phase = 0) {
  let d = `M0 ${H} L0 ${y}`;
  for (let x = 0; x <= W; x += 40) d += ` L${x} ${(y + Math.sin(x / 210 + phase) * amp + Math.sin(x / 90 + phase * 2) * amp * 0.25).toFixed(1)}`;
  return `<path d="${d} L${W} ${H} Z" fill="${color}"/>`;
}
function deadTree(x: number, y: number, h: number, color: string) {
  const b = (x1: number, y1: number, x2: number, y2: number, w: number) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-linecap="round"/>`;
  return b(x, y, x + 6, y - h, 14) + b(x + 4, y - h * 0.55, x - h * 0.35, y - h * 0.85, 7) + b(x + 5, y - h * 0.7, x + h * 0.4, y - h * 0.95, 6)
    + b(x - h * 0.2, y - h * 0.75, x - h * 0.3, y - h, 4) + b(x + 6, y - h, x + 30, y - h * 1.15, 4);
}

const SCENES: Record<BackgroundId, () => string> = {
  forest: () => `
    <defs>${sky('sk', [[0, '#0b1d2a'], [0.55, '#1f4a4a'], [1, '#3d6b52']])}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>${stars(70, 380)}
    <circle cx="1220" cy="170" r="70" fill="#f1edd0" opacity=".9"/><circle cx="1220" cy="170" r="120" fill="#f1edd0" opacity=".06"/>
    ${pines(640, 22, 260, 420, '#173c35')}${pines(720, 18, 200, 330, '#0f2a25')}${pines(820, 14, 160, 260, '#081a17')}`,
  swamp: () => `
    <defs>${sky('sk', [[0, '#14121f'], [0.5, '#2c3a2e'], [1, '#4b5a3a']])}
      <linearGradient id="wt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f3d2c"/><stop offset="1" stop-color="#121a12"/></linearGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>${stars(40, 300, '#cfe8b0')}
    <circle cx="380" cy="190" r="55" fill="#d9e6a6" opacity=".55"/>
    ${hills(560, 26, '#1d2a1e')}
    ${[160, 520, 980, 1380].map((x, i) => deadTree(x, 640, 260 + i * 25, '#141c14')).join('')}
    <rect x="0" y="640" width="${W}" height="260" fill="url(#wt)"/>
    ${Array.from({ length: 14 }, () => `<ellipse cx="${(rnd() * W).toFixed(0)}" cy="${(660 + rnd() * 200).toFixed(0)}" rx="${(20 + rnd() * 30).toFixed(0)}" ry="7" fill="#3f6b33" opacity=".8"/>`).join('')}
    ${Array.from({ length: 26 }, () => `<circle cx="${(rnd() * W).toFixed(0)}" cy="${(380 + rnd() * 380).toFixed(0)}" r="2.5" fill="#d8ff7a" opacity=".85"/>`).join('')}
    <rect y="560" width="${W}" height="120" fill="#a8b89a" opacity=".07"/>`,
  plains: () => `
    <defs>${sky('sk', [[0, '#2a1a45'], [0.45, '#a8506a'], [0.75, '#f0a060'], [1, '#f6d08a']])}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>
    <circle cx="800" cy="560" r="120" fill="#ffe2a0" opacity=".9"/>
    ${Array.from({ length: 6 }, (_, i) => `<ellipse cx="${200 + i * 260}" cy="${150 + (i % 3) * 50}" rx="${90 + (i % 2) * 40}" ry="18" fill="#f7c7b0" opacity=".35"/>`).join('')}
    ${hills(600, 30, '#6a4a6a', 0.5)}${hills(660, 34, '#4a5a3a', 1.7)}${hills(740, 26, '#33472b', 3)}
    <rect x="1180" y="560" width="14" height="110" fill="#2a2a2a"/><g transform="translate(1187 560)" fill="#2a2a2a">${[0, 90, 180, 270].map((a) => `<rect x="-4" y="-80" width="8" height="80" transform="rotate(${a + 20})"/>`).join('')}</g>
    ${Array.from({ length: 70 }, () => { const x = rnd() * W, y = 760 + rnd() * 140; return `<line x1="${x.toFixed(0)}" y1="${y.toFixed(0)}" x2="${(x + 4).toFixed(0)}" y2="${(y - 18).toFixed(0)}" stroke="#23331d" stroke-width="3"/>`; }).join('')}`,
  castle: () => {
    const tower = (x: number, w: number, h: number) => `<rect x="${x}" y="${640 - h}" width="${w}" height="${h}" fill="#141327"/><polygon points="${x - 10},${640 - h} ${x + w / 2},${560 - h} ${x + w + 10},${640 - h}" fill="#1b1a33"/>`
      + Array.from({ length: Math.floor(h / 70) }, (_, i) => `<rect x="${x + w / 2 - 6}" y="${640 - h + 40 + i * 70}" width="12" height="20" fill="#ffcf6a" opacity="${rnd() > 0.35 ? 0.9 : 0.15}"/>`).join('');
    return `
    <defs>${sky('sk', [[0, '#070a1e'], [0.6, '#1c2554'], [1, '#3a3f78']])}</defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>${stars(120, 450)}
    <circle cx="300" cy="150" r="60" fill="#e8e6ff" opacity=".85"/>
    ${hills(640, 18, '#10122a')}
    <rect x="560" y="430" width="480" height="210" fill="#141327"/>
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${560 + i * 40}" y="414" width="22" height="18" fill="#141327"/>`).join('')}
    ${tower(500, 90, 330)}${tower(1010, 90, 330)}${tower(740, 120, 420)}
    <polygon points="760,640 800,560 840,640" fill="#2a2140"/>
    <line x1="800" y1="140" x2="800" y2="96" stroke="#141327" stroke-width="4"/><polygon points="800,96 840,106 800,116" fill="#c2364d"/>
    ${hills(760, 14, '#0b0c1c', 2)}`;
  },
  worldtree: () => {
    // standing on the crown of a giant glowing tree, above the clouds
    const leaves = (y: number, n: number, rmin: number, rmax: number, col: string, op: number) =>
      Array.from({ length: n }, (_, i) => `<circle cx="${((i / n) * W + rnd() * 80).toFixed(0)}" cy="${(y + rnd() * 50).toFixed(0)}" r="${(rmin + rnd() * (rmax - rmin)).toFixed(0)}" fill="${col}" opacity="${op}"/>`).join('');
    return `
    <defs>${sky('sk', [[0, '#0b0626'], [0.45, '#2a1260'], [0.8, '#1d4f78'], [1, '#2c8a8a']])}
      <radialGradient id="glow"><stop offset="0" stop-color="#9ff5c8" stop-opacity=".5"/><stop offset="1" stop-color="#9ff5c8" stop-opacity="0"/></radialGradient></defs>
    <rect width="${W}" height="${H}" fill="url(#sk)"/>${stars(170, 560, '#d7ccff')}
    <circle cx="1240" cy="170" r="54" fill="#fff4d6" opacity=".9"/><circle cx="1240" cy="170" r="130" fill="#fff4d6" opacity=".07"/>
    <ellipse cx="800" cy="620" rx="900" ry="200" fill="url(#glow)"/>
    ${Array.from({ length: 10 }, (_, i) => `<ellipse cx="${i * 180}" cy="${600 + (i % 3) * 22}" rx="220" ry="40" fill="#efeaff" opacity=".22"/>`).join('')}
    ${leaves(640, 26, 50, 90, '#14402f', 1)}
    ${leaves(690, 30, 45, 80, '#1b5a3c', 1)}
    <path d="M-40 800 C 300 730, 650 760, 820 740 S 1300 735, 1640 780 L1640 900 L-40 900 Z" fill="#3a2418"/>
    <path d="M-40 840 C 400 800, 760 820, 940 800 S 1400 810, 1640 840 L1640 900 L-40 900 Z" fill="#2b190f"/>
    ${leaves(760, 22, 26, 46, '#2f9e6a', 0.9)}
    ${Array.from({ length: 60 }, () => `<circle cx="${(rnd() * W).toFixed(0)}" cy="${(600 + rnd() * 220).toFixed(0)}" r="${(2 + rnd() * 3).toFixed(1)}" fill="${rnd() > 0.5 ? '#b9ffd8' : '#9ae7ff'}" opacity=".9"/>`).join('')}
    ${Array.from({ length: 30 }, () => `<circle cx="${(rnd() * W).toFixed(0)}" cy="${(80 + rnd() * 500).toFixed(0)}" r="2" fill="#bff8ff" opacity=".8"/>`).join('')}`;
  },
};

/** Draws the chosen background into the fixed #bg layer (cached per id). */
const cache = new Map<string, string>();
/** Gradient ids must be unique per scene, or several scenes on one page share the first one's sky. */
function scene(id: BackgroundId) {
  seed = [...id].reduce((s, c) => s + c.charCodeAt(0) * 97, 1);
  return SCENES[id]().replace(/id="(\w+)"/g, `id="${id}-$1"`).replace(/url\(#(\w+)\)/g, `url(#${id}-$1)`);
}
export function paintBackground(el: HTMLElement, id: BackgroundId) {
  if (!cache.has(id)) cache.set(id, `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMax slice" aria-hidden="true">${scene(id)}</svg>`);
  el.innerHTML = cache.get(id)!;
  el.dataset.bg = id;
}

export function backgroundThumb(id: BackgroundId): string {
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${scene(id)}</svg>`;
}
