import { isCorrectReading } from '../../shared/kana';
import type { Level, VocabEntry } from '../../shared/protocol';
import { displayReading } from '../../shared/vocab';
import type { DailyResult, Store, UserRecord } from '../db/Store';
import { VOCAB } from '../vocab';
import { playerDay, type ProgressService } from './ProgressService';

/**
 * Daily challenge: the same 10 words for everyone each (UTC) day — two each from N5 up to N1, easiest
 * first. One try per player; type each reading (kana or romaji) within 15 s. Answers are checked here
 * on the server, one word at a time (the next word is only sent after you answer), and the clock runs
 * on the server too. Ranked by correct answers, then total time.
 */
export const DAILY_WORDS = 10;
export const DAILY_WORD_MS = 15_000;
const GRACE_MS = 1_500; // network slack
const XP_PER_CORRECT = 30;
const LEVEL_ORDER: Level[] = ['N5', 'N5', 'N4', 'N4', 'N3', 'N3', 'N2', 'N2', 'N1', 'N1'];

export interface DailyWordView { index: number; total: number; kanji: string; level: Level; timeLimitMs: number }
export interface DailyAnswer {
  correct: boolean; kanji: string; reading: string; meaning: string; ms: number;
  next: DailyWordView | null;
  done: { correct: number; ms: number; rank: number; players: number; xp: number } | null;
}
interface Attempt { day: string; index: number; shownAt: number; correct: number; ms: number }

/** Mulberry32: a tiny seeded random generator (the same day → the same words). */
function seeded(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const hash = (s: string) => [...s].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619) >>> 0, 2166136261);

export function dailyWords(day: string): VocabEntry[] {
  const rnd = seeded(hash(`kanji-wizards:${day}`));
  const picked: VocabEntry[] = [];
  for (const level of LEVEL_ORDER) {
    const pool = VOCAB.filter((v) => v.level === level && !picked.includes(v) && /[一-鿿]/.test(v.kanji));
    picked.push(pool[Math.floor(rnd() * pool.length)]);
  }
  return picked;
}

export class DailyError extends Error { constructor(message: string, readonly status = 400) { super(message); } }

export class DailyService {
  private attempts = new Map<string, Attempt>(); // userId → today's run in progress
  private cache: { day: string; words: VocabEntry[] } | null = null;

  constructor(private readonly store: Store, private readonly progress: ProgressService, private readonly now: () => number = Date.now) {}

  today() { return new Date(this.now()).toISOString().slice(0, 10); }
  private words(day: string) {
    if (this.cache?.day !== day) this.cache = { day, words: dailyWords(day) };
    return this.cache.words;
  }

  /** Today's board, your result (and then the words with their readings), and whether you can play. */
  async overview(u: UserRecord) {
    const day = this.today();
    const mine = await this.store.daily(day, u.id);
    const board = await this.store.dailyBoard(day, 20);
    const rank = mine ? (await this.store.dailyBetter(day, mine.correct, mine.ms)) + 1 : null;
    const words = mine ? this.words(day).map((v) => ({ kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: v.level })) : null;
    return { day, total: DAILY_WORDS, wordMs: DAILY_WORD_MS, mine, rank, board: board.map(publicRow), words, inProgress: this.attempts.get(u.id)?.day === day };
  }

  /** Start (or continue) today's run: returns the current word. */
  async start(u: UserRecord): Promise<DailyWordView> {
    const day = this.today();
    if (await this.store.daily(day, u.id)) throw new DailyError('You already played today\'s challenge — come back tomorrow!', 409);
    let a = this.attempts.get(u.id);
    if (!a || a.day !== day) { a = { day, index: 0, shownAt: this.now(), correct: 0, ms: 0 }; this.attempts.set(u.id, a); }
    // a word left open too long (closed the tab to look it up?) counts as a miss
    while (a.index < DAILY_WORDS && this.now() - a.shownAt > DAILY_WORD_MS + GRACE_MS) {
      a.ms += DAILY_WORD_MS; a.index++; a.shownAt = this.now();
    }
    if (a.index >= DAILY_WORDS) throw new DailyError('Time ran out on the remaining words — send your answers to finish.', 409);
    return this.view(a);
  }

  /** Answer the current word (empty text = skip). */
  async answer(u: UserRecord, raw: unknown): Promise<DailyAnswer> {
    const day = this.today();
    const a = this.attempts.get(u.id);
    if (!a || a.day !== day) throw new DailyError('Start the challenge first');
    const text = typeof raw === 'string' ? raw.slice(0, 60) : '';
    const word = this.words(day)[a.index];
    const ms = Math.min(DAILY_WORD_MS, this.now() - a.shownAt);
    const inTime = this.now() - a.shownAt <= DAILY_WORD_MS + GRACE_MS;
    const correct = inTime && !!text.trim() && isCorrectReading(text, [word.reading, ...(word.altReadings ?? [])]);
    if (correct) a.correct++;
    a.ms += correct ? ms : DAILY_WORD_MS; // misses cost the full time
    a.index++;
    a.shownAt = this.now();
    const base = { correct, kanji: word.kanji, reading: displayReading(word), meaning: word.meaning, ms };
    if (a.index < DAILY_WORDS) return { ...base, next: this.view(a), done: null };
    return { ...base, next: null, done: await this.finish(u, a) };
  }

  /** Abandoned runs finish themselves: whatever is left counts as missed. */
  async finishStale(u: UserRecord) {
    const a = this.attempts.get(u.id);
    if (!a || a.day !== this.today()) return null;
    a.ms += (DAILY_WORDS - a.index) * DAILY_WORD_MS;
    a.index = DAILY_WORDS;
    return this.finish(u, a);
  }

  private async finish(u: UserRecord, a: Attempt) {
    this.attempts.delete(u.id);
    const saved = await this.store.saveDaily(a.day, u.id, a.correct, a.ms);
    const xp = saved ? a.correct * XP_PER_CORRECT + (a.correct === DAILY_WORDS ? 100 : 0) : 0;
    if (xp) {
      await this.store.addXp(u.id, xp);
      await this.progress.record(u.id, playerDay(u, this.now()), { xp });
    }
    const rank = (await this.store.dailyBetter(a.day, a.correct, a.ms)) + 1;
    const players = (await this.store.dailyBoard(a.day, 100_000)).length;
    return { correct: a.correct, ms: a.ms, rank, players, xp };
  }

  private view(a: Attempt): DailyWordView {
    const w = this.words(a.day)[a.index];
    return { index: a.index, total: DAILY_WORDS, kanji: w.kanji, level: w.level, timeLimitMs: DAILY_WORD_MS };
  }
}

const publicRow = (r: DailyResult) => ({ id: r.userId, name: r.username, correct: r.correct, ms: r.ms });
