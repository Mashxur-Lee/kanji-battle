// A game clock that can be paused (private games against the AI only): while paused, time stands still —
// `now()` stops, and every pending timer keeps its remaining time until `resume()`.

export type TimerHandle = number;
export interface Timers {
  setTimeout(fn: () => void, ms: number): TimerHandle;
  clearTimeout(h: TimerHandle | undefined): void;
}

export class PausableClock implements Timers {
  private offset = 0; // how long the game has been paused in total
  private pausedAt: number | null = null;
  private seq = 0;
  private pending = new Map<TimerHandle, { fn: () => void; due: number; handle: ReturnType<typeof setTimeout> | null }>();

  constructor(private readonly real: () => number = Date.now) {}

  /** Game time: stands still while paused. */
  readonly now = () => (this.pausedAt ?? this.real()) - this.offset;
  get paused() { return this.pausedAt !== null; }

  readonly setTimeout = (fn: () => void, ms: number): TimerHandle => {
    const id = ++this.seq;
    const t = { fn, due: this.now() + Math.max(0, ms), handle: null as ReturnType<typeof setTimeout> | null };
    this.pending.set(id, t);
    if (!this.paused) this.arm(id);
    return id;
  };
  readonly clearTimeout = (id: TimerHandle | undefined) => {
    if (id === undefined) return;
    const t = this.pending.get(id);
    if (t?.handle) clearTimeout(t.handle);
    this.pending.delete(id);
  };

  pause() {
    if (this.paused) return;
    this.pausedAt = this.real();
    for (const t of this.pending.values()) { if (t.handle) clearTimeout(t.handle); t.handle = null; }
  }
  resume() {
    if (this.pausedAt === null) return;
    this.offset += this.real() - this.pausedAt;
    this.pausedAt = null;
    for (const id of this.pending.keys()) this.arm(id);
  }
  /** Drop every pending timer (the game is over). */
  dispose() { for (const id of [...this.pending.keys()]) this.clearTimeout(id); }

  private arm(id: TimerHandle) {
    const t = this.pending.get(id)!;
    const h = setTimeout(() => { this.pending.delete(id); t.fn(); }, Math.max(0, t.due - this.now()));
    h.unref?.();
    t.handle = h;
  }
}

/** Plain timers (tests, and anything that never pauses). */
export const REAL_TIMERS: Timers = {
  setTimeout: (fn, ms) => setTimeout(fn, ms) as unknown as TimerHandle,
  clearTimeout: (h) => { if (h !== undefined) clearTimeout(h as unknown as ReturnType<typeof setTimeout>); },
};
