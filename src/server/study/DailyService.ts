import { isCorrectReading, isRomajiInput } from '../../shared/kana';
import type { Level, VocabEntry } from '../../shared/protocol';
import { displayReading } from '../../shared/vocab';
import type { DailyResult, Store, UserRecord } from '../db/Store';
import { VOCAB } from '../vocab';
import { playerDay, type ProgressService } from './ProgressService';
import { now as clockNow } from '../now';
import { hash, seeded } from '../../shared/rng';

/**
 * Daily challenge: 0.9.9.7.3 — in leagues. Everyone starts in the Kana league (ひらがな and カタカナ); 9 / 10 or
 * better moves you up one: Kana → N5 → N4 → N3 → N2 → N1. Each league has its own 10 words a day (the same
 * for everyone in it), easiest first, and its own leaderboard. One try per player; type each reading (kana or romaji) within 15 s. Answers are checked here
 * on the server, one word at a time (the next word is only sent after you answer), and the clock runs
 * on the server too. Ranked by correct answers, then total time.
 */
export const DAILY_WORDS = 10;
export const DAILY_WORD_MS = 15_000;
const GRACE_MS = 1_500; // network slack
const XP_PER_CORRECT = 30;
export const LEAGUES = ['KANA', 'N5', 'N4', 'N3', 'N2', 'N1'] as const;
export type League = (typeof LEAGUES)[number];
/** 9 / 10 or better: up a league */
export const PROMOTE_AT = 9;
export const isLeague = (x: unknown): x is League => LEAGUES.includes(x as League);
/** your league (kept in your unlocks as "dleague:N5" — no new column) */
export const leagueOf = (u: Pick<UserRecord, 'unlocks'>): League => { const l = (u.unlocks ?? []).find((x) => x.startsWith('dleague:'))?.slice(8); return isLeague(l) ? l : 'KANA'; };
/** the league you played today's challenge in ("dplayed:<day>:<league>"), if you did */
const playedOn = (u: Pick<UserRecord, 'unlocks'>, day: string): League | null => { const m = (u.unlocks ?? []).find((x) => x.startsWith(`dplayed:${day}:`))?.split(':')[2]; return isLeague(m) ? m : null; };
/** results are kept per day and league */
export const dailyKey = (day: string, league: League) => `${day}:${league}`;

export interface DailyWordView { index: number; total: number; kanji: string; level: Level; timeLimitMs: number }
export interface DailyAnswer {
  correct: boolean; kanji: string; reading: string; meaning: string; ms: number;
  next: DailyWordView | null;
  done: { correct: number; ms: number; rank: number; players: number; xp: number; league?: League; promoted?: League | null } | null;
}
interface Attempt { day: string; league: League; index: number; shownAt: number; correct: number; ms: number; marks: string }

export function dailyWords(day: string, league: League = 'N5'): VocabEntry[] {
  const rnd = seeded(hash(`kanji-wizards:${day}:${league}`));
  const order: Level[] = league === 'KANA' ? ['KANA', 'KANA', 'KANA', 'KANA', 'KANA', 'KATA', 'KATA', 'KATA', 'KATA', 'KATA'] : Array(DAILY_WORDS).fill(league);
  const picked: VocabEntry[] = [];
  for (const level of order) {
    const pool = VOCAB.filter((v) => v.level === level && !picked.includes(v) && (league === 'KANA' || /[一-鿿]/.test(v.kanji)));
    picked.push(pool[Math.floor(rnd() * pool.length)]);
  }
  // easiest first (within the kana: hiragana, then katakana)
  return league === 'KANA' ? picked : picked.sort((a, b) => (a.difficulty ?? 0) - (b.difficulty ?? 0));
}

export class DailyError extends Error { constructor(message: string, readonly status = 400) { super(message); } }

export class DailyService {
  private attempts = new Map<string, Attempt>(); // userId → today's run in progress
  private cache = new Map<string, VocabEntry[]>();

  /** 10 / 10: the 'Perfect Day' achievement (set in index.ts) */
  onPerfect?: (userId: string) => Promise<unknown>;
  constructor(private readonly store: Store, private readonly progress: ProgressService, private readonly now: () => number = clockNow) {}

  today() { return new Date(this.now()).toISOString().slice(0, 10); }
  private words(day: string, league: League) {
    const k = dailyKey(day, league);
    if (!this.cache.has(k)) { if (this.cache.size > 12) this.cache.clear(); this.cache.set(k, dailyWords(day, league)); }
    return this.cache.get(k)!;
  }
  /** today's league for you: the one you played in, or your league now */
  private todays(u: UserRecord, day: string): League { return playedOn(u, day) ?? this.attempts.get(u.id)?.league ?? leagueOf(u); }
  /** the store key of your result today (the offline snapshot carries it) */
  keyFor(u: UserRecord) { const day = this.today(); return dailyKey(day, this.todays(u, day)); }

  /** Today's board (your league's), your result (and then the words with their readings), and whether you can play. */
  async overview(u: UserRecord) {
    const day = this.today();
    const league = this.todays(u, day), key = dailyKey(day, league);
    const mine = await this.store.daily(key, u.id);
    const board = await this.store.dailyBoard(key, 20);
    const rank = mine ? (await this.store.dailyBetter(key, mine.correct, mine.ms)) + 1 : null;
    const words = mine ? this.words(day, league).map((v, i) => ({ id: v.id, kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: v.level, ok: mine.marks ? mine.marks[i] === '1' : null })) : null;
    return { day, total: DAILY_WORDS, wordMs: DAILY_WORD_MS, mine, rank, board: board.map(publicRow), words, inProgress: this.attempts.get(u.id)?.day === day, league, nextLeague: leagueOf(u), promoteAt: PROMOTE_AT };
  }

  /** Start (or continue) today's run: returns the current word. */
  async start(u: UserRecord): Promise<DailyWordView> {
    const day = this.today();
    if (playedOn(u, day) || await this.store.daily(dailyKey(day, leagueOf(u)), u.id)) throw new DailyError('You already played today\'s challenge — come back tomorrow!', 409);
    let a = this.attempts.get(u.id);
    if (!a || a.day !== day) { a = { day, league: leagueOf(u), index: 0, shownAt: this.now(), correct: 0, ms: 0, marks: '' }; this.attempts.set(u.id, a); }
    // a word left open too long (closed the tab to look it up?) counts as a miss
    while (a.index < DAILY_WORDS && this.now() - a.shownAt > DAILY_WORD_MS + GRACE_MS) {
      a.ms += DAILY_WORD_MS; a.index++; a.marks += '0'; a.shownAt = this.now();
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
    const word = this.words(day, a.league)[a.index];
    const ms = Math.min(DAILY_WORD_MS, this.now() - a.shownAt);
    const inTime = this.now() - a.shownAt <= DAILY_WORD_MS + GRACE_MS;
    // the kana league is answered in romaji (typing a shown kana back with a Japanese keyboard would be too easy)
    const kana = word.level === 'KANA' || word.level === 'KATA';
    const correct = inTime && !!text.trim() && (!kana || isRomajiInput(text)) && isCorrectReading(text, [word.reading, ...(word.altReadings ?? [])]);
    if (correct) a.correct++;
    a.ms += ms; // the time you really took (0.9.9.3.2: a skip no longer counts the full 15 s)
    a.index++;
    a.marks += correct ? '1' : '0';
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
    a.marks = a.marks.padEnd(DAILY_WORDS, '0');
    a.index = DAILY_WORDS;
    return this.finish(u, a);
  }

  private async finish(u: UserRecord, a: Attempt) {
    this.attempts.delete(u.id);
    const key = dailyKey(a.day, a.league);
    const saved = await this.store.saveDaily(key, u.id, a.correct, a.ms, a.marks);
    // the league: today's is remembered; 9 / 10 or better moves you up one
    let promoted: League | null = null;
    if (saved) {
      const fresh = (await this.store.findById(u.id)) ?? u;
      const i = LEAGUES.indexOf(a.league);
      if (a.correct >= PROMOTE_AT && i < LEAGUES.length - 1) promoted = LEAGUES[i + 1];
      const now = promoted ?? leagueOf(fresh);
      const rest = (fresh.unlocks ?? []).filter((x) => !x.startsWith('dleague:') && !x.startsWith('dplayed:'));
      await this.store.update(u.id, { unlocks: [...rest, ...(now === 'KANA' ? [] : [`dleague:${now}`]), `dplayed:${a.day}:${a.league}`] });
    }
    // the words you got wrong go to Struggling spells, like after a battle
    if (saved) {
      const missed = this.words(a.day, a.league).filter((_, i) => a.marks[i] !== '1').map((v) => v.id);
      if (missed.length) await this.store.markStruggling(u.id, missed, this.now()); // (adds the card if you didn't have it)
    }
    const xp = saved ? a.correct * XP_PER_CORRECT + (a.correct === DAILY_WORDS ? 100 : 0) : 0;
    if (xp) await this.store.addXp(u.id, xp);
    if (saved) await this.progress.record(u.id, playerDay(u, this.now()), { xp, challenges: 1 }); // a daily task (the streak)
    if (saved && a.correct === DAILY_WORDS) await this.onPerfect?.(u.id);
    const rank = (await this.store.dailyBetter(key, a.correct, a.ms)) + 1;
    const players = (await this.store.dailyBoard(key, 100_000)).length;
    return { correct: a.correct, ms: a.ms, rank, players, xp, league: a.league, promoted };
  }

  private view(a: Attempt): DailyWordView {
    const w = this.words(a.day, a.league)[a.index];
    return { index: a.index, total: DAILY_WORDS, kanji: w.kanji, level: w.level, timeLimitMs: DAILY_WORD_MS };
  }
}

const publicRow = (r: DailyResult) => ({ id: r.userId, name: r.username, correct: r.correct, ms: r.ms });
