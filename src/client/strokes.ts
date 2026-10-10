// Stroke-order animation: each stroke of a kanji drawn in order, numbered, over a faint copy of the
// whole character. The stroke data are the handwriting recogniser's reference strokes (in stroke order),
// fetched from /api/strokes and cached.

import { api } from './api';

type Strokes = number[][][];
const cache = new Map<string, Strokes | null>();

async function load(chars: string[]): Promise<void> {
  const missing = [...new Set(chars)].filter((c) => !cache.has(c));
  if (!missing.length) return;
  try {
    const { strokes } = await api.strokes(missing.join(''));
    for (const c of missing) cache.set(c, strokes[c] ?? null);
  } catch { for (const c of missing) cache.set(c, null); }
}

const SVG_NS = 'http://www.w3.org/2000/svg';
const el = <K extends keyof SVGElementTagNameMap>(tag: K, attrs: Record<string, string | number> = {}) => {
  const e = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, String(v));
  return e;
};

/** Smooth path through the points (quadratic curves between midpoints). */
function pathOf(pts: number[][]): string {
  if (pts.length < 3) return `M${pts.map((p) => p.join(' ')).join(' L')}`;
  let d = `M${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2;
    d += ` Q${pts[i][0]} ${pts[i][1]} ${mx.toFixed(1)} ${my.toFixed(1)}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L${last[0]} ${last[1]}`;
}

/** One character's diagram (SVG 100×100), or a plain glyph when there's no stroke data. */
function diagram(ch: string, strokes: Strokes | null, stepMs: number, delay: number): Element {
  if (!strokes || !strokes.length) {
    const s = el('svg', { viewBox: '0 0 100 100', class: 'so-svg' });
    s.append(gridLines());
    const t = el('text', { x: 50, y: 52, 'text-anchor': 'middle', 'dominant-baseline': 'central', class: 'so-glyph' });
    t.textContent = ch;
    s.append(t);
    return s;
  }
  // fit every stroke into the box, keeping the proportions
  const all = strokes.flat();
  const xs = all.map((p) => p[0]), ys = all.map((p) => p[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  const scale = 76 / Math.max(x1 - x0, y1 - y0, 1);
  const ox = 50 - ((x0 + x1) / 2) * scale, oy = 50 - ((y0 + y1) / 2) * scale;
  const fit = (s: number[][]) => s.map(([x, y]) => [+(x * scale + ox).toFixed(1), +(y * scale + oy).toFixed(1)]);
  const svg = el('svg', { viewBox: '0 0 100 100', class: 'so-svg' });
  svg.append(gridLines());
  const ghost = el('g', { class: 'so-ghost' });
  const ink = el('g', { class: 'so-ink' });
  const nums = el('g', { class: 'so-nums' });
  strokes.forEach((raw, i) => {
    const pts = fit(raw);
    const d = pathOf(pts);
    ghost.append(el('path', { d }));
    const p = el('path', { d, pathLength: 1, style: `animation-delay:${delay + i * stepMs}ms;animation-duration:${stepMs * 0.85}ms` });
    ink.append(p);
    const n = el('text', { x: pts[0][0] - 4, y: pts[0][1] - 3, style: `animation-delay:${delay + i * stepMs}ms` });
    n.textContent = String(i + 1);
    nums.append(n);
  });
  svg.append(ghost, ink, nums);
  return svg;
}

function gridLines() {
  const g = el('g', { class: 'so-grid' });
  g.append(el('line', { x1: 50, y1: 4, x2: 50, y2: 96 }), el('line', { x1: 4, y1: 50, x2: 96, y2: 50 }), el('rect', { x: 2, y: 2, width: 96, height: 96, rx: 6 }));
  return g;
}

/**
 * Show the stroke order of a word in `box` (kana are shown as they are). Returns once drawn; the
 * animation plays by itself, and the Replay button restarts it.
 */
export async function showStrokeOrder(box: HTMLElement, word: string, o: { stepMs?: number; caption?: string } = {}) {
  const chars = [...word];
  const stepMs = o.stepMs ?? 520;
  box.classList.add('stroke-order');
  box.replaceChildren(Object.assign(document.createElement('div'), { className: 'so-loading', textContent: '…' }));
  await load(chars.filter((c) => /[\p{Script=Han}々]/u.test(c)));
  const row = document.createElement('div');
  row.className = 'so-row';
  let delay = 0;
  for (const ch of chars) {
    const strokes = /[\p{Script=Han}々]/u.test(ch) ? cache.get(ch) ?? null : null;
    const cell = document.createElement('div');
    cell.className = 'so-cell';
    cell.append(diagram(ch, strokes, stepMs, delay));
    row.append(cell);
    delay += (strokes?.length ?? 0) * stepMs + (strokes ? 250 : 0);
  }
  const foot = document.createElement('div');
  foot.className = 'so-foot';
  if (o.caption) foot.append(Object.assign(document.createElement('span'), { textContent: o.caption }));
  const replay = Object.assign(document.createElement('button'), { className: 'pill so-replay', type: 'button', textContent: '↻ Replay' });
  replay.onclick = () => {
    // restart the CSS animations
    for (const n of row.querySelectorAll<SVGElement>('.so-ink path, .so-nums text')) { n.style.animationName = 'none'; void (n as unknown as HTMLElement).offsetWidth; n.style.animationName = ''; }
  };
  foot.append(replay);
  box.replaceChildren(row, foot);
}
