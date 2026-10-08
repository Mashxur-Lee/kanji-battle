import type { Level, VocabEntry } from '../shared/protocol';
import { VOCAB } from '../shared/vocab';

export type Rng = () => number;

export function shuffle<T>(a: T[], rng: Rng = Math.random): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Strategy point for "what goes into a battle pool". Today: random words from the chosen levels.
 * Later: weakness battles, player-built spell decks with a power budget, daily challenges.
 */
export function pickPool(levels: readonly Level[], size: number, rng: Rng = Math.random, source = VOCAB, filter: (v: VocabEntry) => boolean = () => true): VocabEntry[] {
  const eligible = source.filter((v) => levels.includes(v.level) && filter(v));
  return shuffle([...eligible], rng).slice(0, size);
}

/**
 * Per-player challenge order, controlled by the server. Cycles through the pool without
 * immediate repeats; missed words are pushed back in a few cards later so they come back soon.
 */
export class ChallengeDeck {
  private queue: VocabEntry[] = [];
  private last?: VocabEntry;

  constructor(private readonly pool: readonly VocabEntry[], private readonly rng: Rng = Math.random) {}

  draw(): VocabEntry {
    if (this.queue.length === 0) {
      this.queue = shuffle([...this.pool], this.rng);
      if (this.queue.length > 1 && this.queue[0] === this.last) this.queue.push(this.queue.shift()!);
    }
    this.last = this.queue.shift()!;
    return this.last;
  }

  /** Bring a missed word back after `gap` other words. */
  requeue(entry: VocabEntry, gap: number) {
    const i = this.queue.indexOf(entry);
    if (i !== -1) this.queue.splice(i, 1);
    const others = this.pool.filter((v) => v !== entry);
    while (this.queue.length < gap && others.length > 0) this.queue.push(...shuffle([...others], this.rng));
    this.queue.splice(Math.min(gap, this.queue.length), 0, entry);
  }
}
