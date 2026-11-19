/**
 * 0.9.9.9.7.1: failures per key in a sliding window — wrong passwords per account, per address. `blocked` once `max`
 * fall within `windowMs`; each one expires on its own. Kept in memory (a restart forgives them all).
 */
export class Strikes {
  private hits = new Map<string, number[]>();
  constructor(readonly max: number, readonly windowMs: number) {}
  private recent(key: string, now: number) {
    const list = (this.hits.get(key) ?? []).filter((t) => now - t < this.windowMs);
    if (list.length) this.hits.set(key, list); else this.hits.delete(key);
    return list;
  }
  blocked(key: string, now = Date.now()) { return this.recent(key, now).length >= this.max; }
  add(key: string, now = Date.now()) {
    this.hits.set(key, [...this.recent(key, now), now].slice(-this.max));
    // memory guard: a flood of made-up keys drops the oldest
    if (this.hits.size > 20_000) for (const k of [...this.hits.keys()].slice(0, 5_000)) this.hits.delete(k);
  }
  /** ms until the oldest failure in the window expires (0: not blocked) */
  waitMs(key: string, now = Date.now()) {
    const list = this.recent(key, now);
    return list.length >= this.max ? Math.max(0, list[list.length - this.max] + this.windowMs - now) : 0;
  }
}
