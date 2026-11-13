// 0.9.9.9.6.1: the Kana league's border, drawn — cherry blossom: a pink ring, blossoms and かな at its foot. It is one
// picture laid over the avatar (a ::before, 168% of its size). (0.9.9.9.6.2: N5–N1 are the player's own animated
// paintings, public/frames/lg-*.webp — style.css.)
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
  // (0.9.9.9.6.2: N5–N1 are the player's own animated paintings — public/frames/lg-*.webp, style.css)
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
