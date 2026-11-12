// 0.9.9.9.6.1: the league borders, drawn — no emoji. Each is one picture laid over the avatar (a ::before, 168% of
// its size): a ring, its ornaments and a plaque with the league at the foot. Kana: cherry blossom. N5: a jade laurel.
// N4: knight's steel, rivets and a shield. N3: moonlit violet, a crescent, stars and two feathers. N2: arcane gold,
// runes, a star and small golden wings. N1: the legend — ruby and gold, great golden wings and a crown with gems.
// The pictures are made here and put in the page as a style sheet once (data: URLs).

const C = 84; // the centre (viewBox 0 0 168 168; the avatar is the circle r = 50 in the middle)
const pt = (deg: number, r: number) => [C + r * Math.cos((deg * Math.PI) / 180), C + r * Math.sin((deg * Math.PI) / 180)] as const;
const f = (n: number) => n.toFixed(1);

function ring(stroke: string, inner: string, outer: string, w = 7) {
  return `<circle cx="${C}" cy="${C}" r="${53.5}" fill="none" stroke="${stroke}" stroke-width="${w}"/>`
    + `<circle cx="${C}" cy="${C}" r="50.4" fill="none" stroke="${inner}" stroke-width="1.4"/>`
    + `<circle cx="${C}" cy="${C}" r="${f(53.5 + w / 2 + 0.6)}" fill="none" stroke="${outer}" stroke-width="1.4"/>`;
}
function plaque(text: string, fill: string, stroke: string, ink: string, w = 46, jp = false) {
  return `<g><rect x="${f(C - w / 2)}" y="126" width="${w}" height="24" rx="8" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`
    + `<rect x="${f(C - w / 2 + 3)}" y="129" width="${w - 6}" height="18" rx="6" fill="none" stroke="${stroke}" stroke-opacity=".45" stroke-width="1"/>`
    + `<text x="${C}" y="143.5" text-anchor="middle" font-family="${jp ? "'Noto Sans JP','Hiragino Sans',sans-serif" : "'Segoe UI',system-ui,sans-serif"}" font-weight="900" font-size="${jp ? 14 : 15}" letter-spacing="${jp ? 0 : 1.5}" fill="${ink}">${text}</text></g>`;
}
/** a leaf (or a petal): an almond at (x, y) turned by `rot` degrees */
const leaf = (x: number, y: number, rot: number, len: number, wid: number, fill: string, vein?: string) =>
  `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(rot)})"><path d="M0 0 Q ${f(len / 2)} ${f(-wid)} ${f(len)} 0 Q ${f(len / 2)} ${f(wid)} 0 0Z" fill="${fill}"/>${vein ? `<path d="M1 0 L ${f(len - 2)} 0" stroke="${vein}" stroke-width=".8"/>` : ''}</g>`;
/** a laurel branch along the ring, from the foot up one side */
function laurel(side: 1 | -1, fill: string, vein: string, berry?: string) {
  let out = '';
  const from = 100, to = 215;
  for (let i = 0, n = 9; i < n; i++) {
    const a = from + ((to - from) * i) / (n - 1);
    const deg = side === 1 ? a : 180 - a;
    const [x, y] = pt(deg, 63);
    const tangent = deg + (side === 1 ? 90 : -90);
    const len = 15 - i * 0.6;
    out += leaf(x, y, tangent - side * 38, len, 4.2, fill, vein) + leaf(x, y, tangent + side * 38 + 180 - 180, len * 0.85, 3.8, fill, vein);
    if (berry && i % 3 === 1) { const [bx, by] = pt(deg, 58); out += `<circle cx="${f(bx)}" cy="${f(by)}" r="2.2" fill="${berry}"/>`; }
  }
  // the stem
  const pts = Array.from({ length: 12 }, (_, i) => { const a = from + ((to - from) * i) / 11; return pt(side === 1 ? a : 180 - a, 63); });
  out += `<path d="M ${pts.map(([x, y]) => `${f(x)} ${f(y)}`).join(' L ')}" fill="none" stroke="${vein}" stroke-width="1.6" stroke-linecap="round"/>`;
  return out;
}
/** a feather from (x, y), pointing `rot` degrees, `len` long */
function feather(x: number, y: number, rot: number, len: number, wid: number, fill: string, edge: string, quill: string) {
  const barbs = Array.from({ length: 6 }, (_, i) => { const t = 0.25 + i * 0.12; return `M ${f(len * t)} 0 L ${f(len * t + 5)} ${f(-wid * 0.8)} M ${f(len * t)} 0 L ${f(len * t + 5)} ${f(wid * 0.8)}`; }).join(' ');
  return `<g transform="translate(${f(x)} ${f(y)}) rotate(${f(rot)})">`
    + `<path d="M0 0 C ${f(len * 0.25)} ${f(-wid)} ${f(len * 0.8)} ${f(-wid * 1.1)} ${f(len)} 0 C ${f(len * 0.8)} ${f(wid * 1.1)} ${f(len * 0.25)} ${f(wid)} 0 0Z" fill="${fill}" stroke="${edge}" stroke-width="1"/>`
    + `<path d="${barbs}" stroke="${edge}" stroke-opacity=".55" stroke-width=".7"/>`
    + `<path d="M -3 0 L ${f(len - 2)} 0" stroke="${quill}" stroke-width="1.3" stroke-linecap="round"/></g>`;
}
/** a wing: feathers fanned out from the shoulder */
function wing(side: 1 | -1, n: number, fill: string, edge: string, quill: string, scale = 1) {
  const sx = side === -1 ? 34 : C * 2 - 34, sy = 86;
  let out = '';
  for (let i = 0; i < n; i++) {
    const a = side === -1 ? 180 + 62 - i * (100 / (n - 1)) : -62 + i * (100 / (n - 1));
    const len = (34 - Math.abs(i - (n - 1) * 0.35) * 3.2) * scale;
    out += feather(sx, sy, a, len, 6.2 * scale, fill, edge, quill);
  }
  return out;
}
const star = (x: number, y: number, r: number, fill: string, points = 4, inner = 0.38) => {
  const d = Array.from({ length: points * 2 }, (_, i) => { const rr = i % 2 ? r * inner : r; const a = (Math.PI * i) / points - Math.PI / 2; return `${f(x + rr * Math.cos(a))} ${f(y + rr * Math.sin(a))}`; }).join(' L ');
  return `<path d="M ${d}Z" fill="${fill}"/>`;
};
const blossom = (x: number, y: number, r: number, petal: string, heart: string) =>
  Array.from({ length: 5 }, (_, i) => `<ellipse cx="${f(x)}" cy="${f(y - r * 0.55)}" rx="${f(r * 0.42)}" ry="${f(r * 0.58)}" fill="${petal}" transform="rotate(${i * 72} ${f(x)} ${f(y)})"/>`).join('')
  + `<circle cx="${f(x)}" cy="${f(y)}" r="${f(r * 0.24)}" fill="${heart}"/>`;
const svg = (defs: string, body: string) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 168"><defs>${defs}</defs>${body}</svg>`;
const lin = (id: string, stops: string[], vertical = true) => `<linearGradient id="${id}" x1="0" y1="0" x2="${vertical ? 0 : 1}" y2="${vertical ? 1 : 0}">${stops.map((c, i) => `<stop offset="${(i / (stops.length - 1)).toFixed(2)}" stop-color="${c}"/>`).join('')}</linearGradient>`;

export const LEAGUE_FRAMES: Record<string, string> = {
  // Kana: cherry blossom — a pink ring, blossoms at the shoulders and the top, かな at the foot
  'lg-kana': svg(lin('r', ['#ffe3ef', '#f48fb8', '#c2406f']) + lin('p', ['#fff3f8', '#ffc2da']),
    ring('url(#r)', '#7a1e44', '#ffe3ef', 6)
    + blossom(...pt(225, 58), 9, '#ffd1e3', '#e0457f') + blossom(...pt(315, 58), 9, '#ffd1e3', '#e0457f') + blossom(C, 26, 7, '#ffe3ef', '#e0457f')
    + leaf(...pt(205, 64), 120, 9, 3.4, '#ffc2da') + leaf(...pt(335, 64), 60, 9, 3.4, '#ffc2da')
    + plaque('かな', 'url(#p)', '#c2406f', '#7a1e44', 48, true)),
  // N5: jade laurel, bronze ring
  'lg-n5': svg(lin('r', ['#f3d7a6', '#b07a3a', '#6b4418']) + lin('p', ['#e9fff0', '#7fd6a0']),
    laurel(1, '#3fbf7a', '#1d6b42', '#e8c36a') + laurel(-1, '#3fbf7a', '#1d6b42', '#e8c36a')
    + ring('url(#r)', '#3d2508', '#ffe9c2', 6)
    + plaque('N5', 'url(#p)', '#1d6b42', '#0f3d24')),
  // N4: knight's steel — riveted ring, a heater shield on top, crossed blades behind
  'lg-n4': svg(lin('r', ['#ffffff', '#a9b4c2', '#5b6675', '#2d3540']) + lin('s', ['#e8edf3', '#8c97a6', '#4a5462']) + lin('p', ['#ffffff', '#aab4c0', '#6f7b8a']),
    `<path d="M 36 132 L 132 36 M 132 132 L 36 36" stroke="#c9d3df" stroke-width="4" stroke-linecap="round" opacity=".55"/>`
    + ring('url(#r)', '#1c232c', '#f2f5f9', 8)
    + Array.from({ length: 12 }, (_, i) => { const [x, y] = pt(i * 30 + 15, 53.5); return `<circle cx="${f(x)}" cy="${f(y)}" r="1.9" fill="#f2f5f9" stroke="#2d3540" stroke-width=".8"/>`; }).join('')
    + `<path d="M ${C} 40 L ${C - 15} 33 L ${C - 15} 14 Q ${C} 9 ${C + 15} 14 L ${C + 15} 33 Z" fill="url(#s)" stroke="#1c232c" stroke-width="2"/>`
    + `<path d="M ${C} 14 L ${C} 39 M ${C - 13} 22 L ${C + 13} 22" stroke="#c0392b" stroke-width="3.2"/>`
    + plaque('N4', 'url(#p)', '#2d3540', '#1c232c')),
  // N3: moonlit violet — a crescent and stars on top, two pale feathers at the sides
  'lg-n3': svg(lin('r', ['#efe6ff', '#8a5cff', '#3a1d86']) + lin('m', ['#fffbe6', '#e7dcff']) + lin('p', ['#a37bff', '#3a1d86']),
    feather(...pt(195, 56), 200, 32, 7, '#efe6ff', '#8a5cff', '#6a3fd1') + feather(...pt(345, 56), -20, 32, 7, '#efe6ff', '#8a5cff', '#6a3fd1')
    + ring('url(#r)', '#1e0e45', '#f3eeff', 7)
    + `<path d="M ${C - 6} 6 A 17 17 0 1 0 ${C + 14} 33 A 13 13 0 1 1 ${C - 6} 6 Z" fill="url(#m)" stroke="#6a3fd1" stroke-width="1.2"/>`
    + star(C + 22, 12, 5, '#fffbe6') + star(C - 24, 18, 4, '#e7dcff') + star(C + 30, 30, 3, '#e7dcff')
    + plaque('N3', 'url(#p)', '#e7dcff', '#fffbe6')),
  // N2: arcane gold — runes round the ring, a star crown, small golden wings
  'lg-n2': svg(lin('r', ['#fff7d1', '#ffd23a', '#d99a00', '#6b4200']) + lin('w', ['#fff7d1', '#ffcf3a']) + lin('p', ['#fff7d1', '#ffd23a', '#d99a00']),
    wing(-1, 4, 'url(#w)', '#8a5a00', '#b37a00', 0.82) + wing(1, 4, 'url(#w)', '#8a5a00', '#b37a00', 0.82)
    + ring('url(#r)', '#3d2600', '#fff7d1', 8)
    + Array.from({ length: 24 }, (_, i) => { const [x1, y1] = pt(i * 15, 51.5), [x2, y2] = pt(i * 15, i % 2 ? 54.5 : 56); return `<path d="M ${f(x1)} ${f(y1)} L ${f(x2)} ${f(y2)}" stroke="#6b4200" stroke-width="1.1"/>`; }).join('')
    + star(C, 18, 15, 'url(#w)', 8, 0.45) + `<circle cx="${C}" cy="18" r="4" fill="#fff" opacity=".9"/>`
    + plaque('N2', 'url(#p)', '#6b4200', '#3d2600')),
  // N1: the legend — great golden wings, a crown with rubies, ruby and gold ring
  'lg-n1': svg(lin('r', ['#ffe27a', '#ff2e55', '#a3001f', '#ffcf3a']) + lin('w', ['#ffffff', '#ffe27a', '#e0a500']) + lin('k', ['#fff7d1', '#ffcf3a', '#b37a00']) + lin('p', ['#ff4d6d', '#a3001f', '#5c0013']),
    wing(-1, 6, 'url(#w)', '#8a5a00', '#c98a00', 1.15) + wing(1, 6, 'url(#w)', '#8a5a00', '#c98a00', 1.15)
    + `<circle cx="${C}" cy="${C}" r="60" fill="none" stroke="#ffcf3a" stroke-width="1.2" stroke-dasharray="2 4" opacity=".8"/>`
    + ring('url(#r)', '#5c0013', '#fff2c8', 9)
    + `<path d="M ${C - 20} 32 L ${C - 23} 12 L ${C - 11} 22 L ${C} 6 L ${C + 11} 22 L ${C + 23} 12 L ${C + 20} 32 Z" fill="url(#k)" stroke="#6b4200" stroke-width="1.6" stroke-linejoin="round"/>`
    + `<rect x="${C - 20}" y="29" width="40" height="5" rx="2" fill="#b37a00"/>`
    + `<circle cx="${C}" cy="17" r="3.4" fill="#ff2e55" stroke="#fff2c8" stroke-width=".8"/><circle cx="${C - 12}" cy="25" r="2.4" fill="#ff2e55"/><circle cx="${C + 12}" cy="25" r="2.4" fill="#ff2e55"/>`
    + `<circle cx="${C - 23}" cy="12" r="2.2" fill="#fff2c8"/><circle cx="${C + 23}" cy="12" r="2.2" fill="#fff2c8"/><circle cx="${C}" cy="6" r="2.2" fill="#fff2c8"/>`
    + plaque('N1', 'url(#p)', '#ffcf3a', '#fff6dc', 50)),
};

let injected = false;
/** the frames as a style sheet (once) */
export function injectBorderStyles() {
  if (injected) return;
  injected = true;
  const css = Object.entries(LEAGUE_FRAMES).map(([id, s]) => `.bd-${id}::before{background-image:url("data:image/svg+xml,${encodeURIComponent(s)}")}`).join('\n');
  const st = document.createElement('style');
  st.id = 'leagueFrames';
  st.textContent = css;
  document.head.append(st);
}
