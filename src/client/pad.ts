import type { DrawnChar } from '../shared/protocol';

const MIN_DIST = 3; // px between kept points
const MAX_POINTS = 64; // per stroke (server limit)

/** Even subsample so long strokes stay under the server's per-stroke limit. */
function thin(points: Array<[number, number]>): Array<[number, number]> {
  if (points.length <= MAX_POINTS) return points;
  const out: Array<[number, number]> = [];
  for (let i = 0; i < MAX_POINTS; i++) out.push(points[Math.round((i * (points.length - 1)) / (MAX_POINTS - 1))]);
  return out;
}

/**
 * The drawing pad. A word is written in one go, left to right: the pad is one square cell per
 * character (faint dividers help spacing) and the server splits the strokes into characters.
 */
export class HandwritingPad {
  private strokes: DrawnChar = [];
  private current: Array<[number, number]> | null = null;
  private readonly ctx: CanvasRenderingContext2D;

  /** onDraw: called while a stroke is being drawn (for live spectating) */
  onDraw: () => void = () => {};

  constructor(private readonly canvas: HTMLCanvasElement, private readonly onChange: () => void = () => {}) {
    this.ctx = canvas.getContext('2d')!;
    canvas.addEventListener('pointerdown', (e) => this.down(e));
    canvas.addEventListener('pointermove', (e) => this.move(e));
    canvas.addEventListener('pointerup', () => this.up());
    canvas.addEventListener('pointercancel', () => this.up());
    canvas.addEventListener('pointerleave', () => this.up());
  }

  get strokeCount() { return this.strokes.length; }

  private cells = 1;
  /** Resize for a word of n characters (capped at 4 cells wide; longer words just write smaller). */
  setCells(n: number) {
    this.cells = Math.max(1, Math.min(4, n));
    this.canvas.width = 600 * this.cells;
    this.canvas.height = 600;
    this.canvas.style.setProperty('--cols', String(this.cells));
    this.canvas.classList.toggle('multi', this.cells > 1);
    this.clear();
  }

  /** The finished character, in canvas pixels (the server normalises size and position). */
  take(): DrawnChar {
    return this.strokes.map((s) => thin(s.map(([x, y]): [number, number] => [Math.round(x), Math.round(y)])));
  }

  get cellCount() { return this.cells; }

  /** Everything drawn so far, including the stroke in progress (for the opponent to watch). */
  ink(): DrawnChar {
    const all = this.current ? [...this.strokes, this.current] : this.strokes;
    return all.map((s) => thin(s.map(([x, y]): [number, number] => [Math.round(x), Math.round(y)])));
  }

  clear() { this.strokes = []; this.current = null; this.redraw(); this.onChange(); }
  undo() { this.strokes.pop(); this.redraw(); this.onChange(); }

  private point(e: PointerEvent): [number, number] {
    const r = this.canvas.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * this.canvas.width, ((e.clientY - r.top) / r.height) * this.canvas.height];
  }

  private down(e: PointerEvent) {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    e.preventDefault();
    this.canvas.setPointerCapture(e.pointerId);
    this.current = [this.point(e)];
    this.redraw();
  }

  private move(e: PointerEvent) {
    if (!this.current) return;
    const p = this.point(e);
    const last = this.current[this.current.length - 1];
    if (Math.hypot(p[0] - last[0], p[1] - last[1]) < MIN_DIST) return;
    this.current.push(p);
    this.redraw();
    this.onDraw();
  }

  private up() {
    if (!this.current) return;
    if (this.current.length === 1) this.current.push([this.current[0][0] + 1, this.current[0][1] + 1]); // a dot
    this.strokes.push(this.current);
    this.current = null;
    this.redraw();
    this.onChange();
  }

  private redraw() {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (this.cells > 1) {
      // guides: a dashed divider between characters and a faint centre cross in each cell
      ctx.save();
      ctx.strokeStyle = 'rgba(60, 50, 110, .28)';
      ctx.lineWidth = 3;
      ctx.setLineDash([18, 14]);
      for (let i = 1; i < this.cells; i++) { ctx.beginPath(); ctx.moveTo(i * 600, 20); ctx.lineTo(i * 600, 580); ctx.stroke(); }
      ctx.setLineDash([]);
      ctx.strokeStyle = 'rgba(60, 50, 110, .1)';
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, 300); ctx.lineTo(canvas.width, 300); ctx.stroke();
      for (let i = 0; i < this.cells; i++) { ctx.beginPath(); ctx.moveTo(i * 600 + 300, 0); ctx.lineTo(i * 600 + 300, 600); ctx.stroke(); }
      ctx.restore();
    }
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = canvas.height / 30;
    ctx.strokeStyle = '#1b1530';
    for (const s of [...this.strokes, ...(this.current ? [this.current] : [])]) {
      ctx.beginPath();
      s.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.stroke();
    }
  }
}
