import { createHash, createHmac } from 'node:crypto';
import { isCorrectReading, isRomajiInput } from '../../shared/kana';
import type { Level, VocabEntry } from '../../shared/protocol';
import { displayReading } from '../../shared/vocab';
import type { DailyResult, Store, UserRecord } from '../db/Store';
import { VOCAB } from '../vocab';
import { offsetsFor, playerDay, resolveToday, shiftDay, TZ_MAX, TZ_MIN, type ProgressService } from './ProgressService';
import { isPaused } from './StudyService';
import { hash, seeded } from '../../shared/rng';
import { leaguePassed } from '../../shared/progress';

/**
 * Daily challenge: 0.9.9.7.3 — in leagues. Everyone starts in the Kana league (ひらがな and カタカナ); 7 / 10 or
 * better (0.9.9.9.5; was 9) moves you up one: Kana → N5 → N4 → N3 → N2 → N1. Each league has its own 10 words a day (the same
 * for everyone in it), easiest first, and its own leaderboard. One try per player; type each reading (kana or romaji) within 15 s. Answers are checked here
 * on the server, one word at a time (the next word is only sent after you answer), and the clock runs
 * on the server too. Ranked by correct answers, then total time.
 *
 * 0.9.9.9.7.1: played online only, on the server's real clock (it could be played offline and replayed with the
 * times the app reported — a cheat: 10 / 10 "in 2 seconds"); the words come from a secret seed; and each account
 * keeps one consistent clock (see `dayFor`), so it can't play yesterday's, today's and tomorrow's challenge in a row.
 */
export const DAILY_WORDS = 10;
export const DAILY_WORD_MS = 15_000;
const GRACE_MS = 1_500; // network slack
const XP_PER_CORRECT = 30;
export const LEAGUES = ['KANA', 'N5', 'N4', 'N3', 'N2', 'N1'] as const;
export type League = (typeof LEAGUES)[number];
/** 7 / 10 or better: up a league (0.9.9.9.5 — it was 9 / 10) */
export const PROMOTE_AT = 7;
export const isLeague = (x: unknown): x is League => LEAGUES.includes(x as League);
/** your league (kept in your unlocks as "dleague:N5" — no new column) */
export const leagueOf = (u: Pick<UserRecord, 'unlocks'>): League => { const l = (u.unlocks ?? []).find((x) => x.startsWith('dleague:'))?.slice(8); return isLeague(l) ? l : 'KANA'; };
/** the league you played today's challenge in ("dplayed:<day>:<league>"), if you did */
const playedOn = (u: Pick<UserRecord, 'unlocks'>, day: string): League | null => { const m = (u.unlocks ?? []).find((x) => x.startsWith(`dplayed:${day}:`))?.split(':')[2]; return isLeague(m) ? m : null; };
/** results are kept per day and league */
export const dailyKey = (day: string, league: League) => `${day}:${league}`;

/**
 * 0.9.9.9.7.1: an account's Daily clock ("dclock:<day>:<lo>:<hi>" in its unlocks) — the last day it started, and the
 * UTC offsets (minutes) every challenge it started fits. A real player's time zone is in all of them; a made-up date
 * has to fit too, so after the first play an account gets one challenge a day like everyone else.
 */
export interface DailyClock { day: string; lo: number; hi: number }
const CLOCK = 'dclock:';
export function clockOf(u: Pick<UserRecord, 'unlocks'>): DailyClock | null {
  const p = (u.unlocks ?? []).find((x) => x.startsWith(CLOCK))?.slice(CLOCK.length).split(':');
  if (!p || p.length !== 3) return null;
  const [day, lo, hi] = [p[0], Number(p[1]), Number(p[2])];
  return /^\d{4}-\d{2}-\d{2}$/.test(day) && Number.isInteger(lo) && Number.isInteger(hi) ? { day, lo, hi } : null;
}
/** summer time (the clock moves an hour) still fits; a longer trip plays on the old time zone for a few days */
export const CLOCK_SLACK_MIN = 60;
const DAY_MS = 86_400_000;
const rangeOf = (c: DailyClock | null): [number, number] => (c ? [Math.max(TZ_MIN, c.lo - CLOCK_SLACK_MIN), Math.min(TZ_MAX, c.hi + CLOCK_SLACK_MIN)] : [TZ_MIN, TZ_MAX]);

/**
 * 0.9.9.9.7.1: the seed of a day's words. The code is public, and the words came from the date alone — anyone could
 * work out any day's ten. With DAILY_SECRET (index.ts) `of` is an HMAC of the day under the secret; `id` tells one
 * secret from another (never the secret itself).
 */
export interface DailySeed { id: string; of(day: string, league: League): number }
const SEED_KEY = 'daily-seed';
/** the seed for DAILY_SECRET (at least 16 characters; shorter or none: undefined — the old, public seed) */
export function secretSeed(secret: string | undefined): DailySeed | undefined {
  const s = (secret ?? '').trim();
  if (s.length < 16) return undefined;
  return {
    id: createHash('sha256').update(`kanji-wizards daily id:${s}`).digest('hex').slice(0, 16),
    of: (day, league) => createHmac('sha256', s).update(`daily:${day}:${league}`).digest().readUInt32BE(0),
  };
}

export interface DailyWordView { index: number; total: number; kanji: string; level: Level; timeLimitMs: number }
export interface DailyAnswer {
  correct: boolean; kanji: string; reading: string; meaning: string; ms: number;
  next: DailyWordView | null;
  done: { correct: number; ms: number; rank: number; players: number; xp: number; league?: League; promoted?: League | null; /** 0.9.9.9.6.4: a league passed for the first time — its rewards are yours */ passed?: League | null } | null;
}
interface Attempt { day: string; league: League; index: number; shownAt: number; correct: number; ms: number; marks: string; /** 0.9.9.9.6.3: this player's ten */ words: VocabEntry[] }
/** 0.9.9.9.7.1: a run half played is kept in the store ("drun:<user>"), so a restart doesn't hand out a fresh start */
const runKey = (userId: string) => `drun:${userId}`;

export function dailyWords(day: string, league: League = 'N5', seed?: number): VocabEntry[] {
  const rnd = seeded(seed ?? hash(`kanji-wizards:${day}:${league}`));
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
  private seedFrom: string | null = null;
  private seedReady?: Promise<void>;

  /** 10 / 10: the 'Perfect Day' achievement (set in index.ts) */
  onPerfect?: (userId: string) => Promise<unknown>;
  /** `now`: 0.9.9.9.7.1 — the real clock (it was the request's, which a replayed call could set a week back) */
  constructor(private readonly store: Store, private readonly progress: ProgressService, private readonly now: () => number = () => Date.now(), private readonly opts: { seed?: DailySeed } = {}) {}

  /**
   * 0.9.9.9.5: the PLAYER's date — a new challenge at midnight where they live (with the daily tasks and the
   * streak), not at midnight UTC. The app sends its local date; it is kept to a date some time zone is on now.
   */
  today(clientDay?: unknown) { return resolveToday(clientDay, this.now()); }
  /**
   * 0.9.9.9.7.1: the day of this account's challenge: the app's date if it fits the account's Daily clock (a real
   * time zone has it now, it is no earlier than the last day started, and it fits the time zone of the earlier plays,
   * give or take an hour); otherwise the date in the account's own time zone.
   */
  dayFor(u: Pick<UserRecord, 'unlocks'>, clientDay?: unknown, t = this.now()): string {
    const c = clockOf(u);
    const [lo, hi] = rangeOf(c);
    if (typeof clientDay === 'string') {
      const o = offsetsFor(clientDay, t);
      if (o && o[0] <= hi && o[1] >= lo && (!c || clientDay >= c.day)) return clientDay;
    }
    // the middle of the account's time zones (a new account: the server's date, as before)
    const mid = c ? Math.round((lo + hi) / 2) : 0;
    const d = new Date(t + mid * 60_000).toISOString().slice(0, 10);
    return c && d < c.day ? c.day : d;
  }
  /** the clock after starting `day` at `t`: that day's time zones, within the earlier ones (give or take the slack) */
  private nextClock(u: Pick<UserRecord, 'unlocks'>, day: string, t: number): DailyClock | null {
    const o = offsetsFor(day, t);
    if (!o) return null;
    const [lo, hi] = rangeOf(clockOf(u));
    const a = Math.max(o[0], lo), b = Math.min(o[1], hi);
    return a <= b ? { day, lo: a, hi: b } : { day, lo: o[0], hi: o[1] };
  }

  /** the words are picked with the secret from `seedFrom` on (the first day no time zone had reached yet when it came) */
  private ready(): Promise<void> {
    const seed = this.opts.seed;
    if (!seed) return Promise.resolve();
    this.seedReady ??= (async () => {
      const [id, from] = (await this.store.getValue(SEED_KEY) ?? '').split('|');
      if (id === seed.id && /^\d{4}-\d{2}-\d{2}$/.test(from ?? '')) { this.seedFrom = from; return; }
      // (today's words never change halfway: the secret starts on the day after the latest date anyone is on)
      const start = shiftDay(new Date(this.now() + TZ_MAX * 60_000).toISOString().slice(0, 10), 1);
      await this.store.setValue(SEED_KEY, `${seed.id}|${start}`);
      this.seedFrom = start;
      this.cache.clear();
    })().catch((e) => { this.seedReady = undefined; throw e; });
    return this.seedReady;
  }
  private words(day: string, league: League) {
    const k = dailyKey(day, league);
    if (!this.cache.has(k)) {
      if (this.cache.size > 12) this.cache.clear();
      const seed = this.opts.seed && this.seedFrom && day >= this.seedFrom ? this.opts.seed.of(day, league) : undefined;
      this.cache.set(k, dailyWords(day, league, seed));
    }
    return this.cache.get(k)!;
  }
  /** the run in progress — from memory, or (after a restart) from the store */
  private async attemptOf(userId: string): Promise<Attempt | undefined> {
    const a = this.attempts.get(userId);
    if (a) return a;
    const raw = await this.store.getValue(runKey(userId));
    if (!raw) return undefined;
    try {
      const r = JSON.parse(raw) as Omit<Attempt, 'words'>;
      if (!isLeague(r.league) || !/^\d{4}-\d{2}-\d{2}$/.test(r.day)) throw new Error('bad run');
      const back: Attempt = { ...r, words: this.words(r.day, r.league) };
      this.attempts.set(userId, back);
      return back;
    } catch { await this.store.setValue(runKey(userId), null); return undefined; }
  }
  private async saveRun(userId: string, a: Attempt) {
    const { words: _, ...rest } = a;
    await this.store.setValue(runKey(userId), JSON.stringify(rest));
  }
  /** today's league for you: the one you played in, or your league now */
  private todays(u: UserRecord, day: string): League { return playedOn(u, day) ?? this.attempts.get(u.id)?.league ?? leagueOf(u); }
  /** the store key of your result today (the offline snapshot carries it) */
  keyFor(u: UserRecord, clientDay?: unknown) { const day = this.dayFor(u, clientDay); return dailyKey(day, this.todays(u, day)); }

  /** Today's board (your league's), your result (and then the words with their readings), and whether you can play. */
  async overview(u: UserRecord, clientDay?: unknown) {
    await this.ready();
    const day = this.dayFor(u, clientDay);
    const run = await this.attemptOf(u.id);
    const league = this.todays(u, day), key = dailyKey(day, league);
    const mine = await this.store.daily(key, u.id);
    const board = await this.store.dailyBoard(key, 20);
    // 0.9.9.8.2: every league's board (tabs on the page), not only yours
    const boards = Object.fromEntries(await Promise.all(LEAGUES.map(async (lg) => [lg, lg === league ? board.map(publicRow) : (await this.store.dailyBoard(dailyKey(day, lg), 20)).map(publicRow)] as const)));
    const rank = mine ? (await this.store.dailyBetter(key, mine.correct, mine.ms)) + 1 : null;
    const words = mine ? this.words(day, league).map((v, i) => ({ id: v.id, kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: v.level, ok: mine.marks ? mine.marks[i] === '1' : null })) : null;
    const ghost = await this.ghostFor(u, key);
    return { day, total: DAILY_WORDS, wordMs: DAILY_WORD_MS, mine, rank, ghost, board: board.map(publicRow), boards, words, inProgress: run?.day === day, league, nextLeague: leagueOf(u), promoteAt: PROMOTE_AT, passed: LEAGUES.filter((l) => leaguePassed(l, u.unlocks)) };
  }

  /**
   * 0.9.9.9.6.6: race a friend — the best of your friends who already played today's ten in your league (their
   * marks word by word and their time), shown beside you while you play
   */
  private async ghostFor(u: UserRecord, key: string): Promise<{ name: string; correct: number; ms: number; marks: string } | null> {
    const friends = (await this.store.friends(u.id)).filter((f) => f.status === 'accepted').slice(0, 60);
    let best: { name: string; correct: number; ms: number; marks: string } | null = null;
    for (const f of friends) {
      const r = await this.store.daily(key, f.id);
      if (!r) continue;
      if (!best || r.correct > best.correct || (r.correct === best.correct && r.ms < best.ms)) best = { name: f.name ?? f.username, correct: r.correct, ms: r.ms, marks: r.marks ?? '' };
    }
    return best;
  }

  /**
   * 0.9.9.9.6: an earlier day (yesterday, up to a week back) — every league's ten words with their readings, its
   * board, and your own answers in the league you played that day.
   * 0.9.9.9.7.1: only a day you can't play any more — you played it, you have started a later one, or it is over in
   * every time zone your clock allows (a phone saying "it's tomorrow already" showed today's words, answers and all).
   */
  async past(u: UserRecord, day: unknown, clientDay?: unknown) {
    await this.ready();
    const t = this.now();
    const today = this.dayFor(u, clientDay, t);
    const d = typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : shiftDay(today, -1);
    const back = Math.round((Date.parse(`${today}T00:00:00Z`) - Date.parse(`${d}T00:00:00Z`)) / 86_400_000);
    if (!(back >= 1 && back <= 7)) throw new DailyError('Only the last 7 days can be looked at');
    const leagues = Object.fromEntries(await Promise.all(LEAGUES.map(async (lg) => {
      const key = dailyKey(d, lg);
      const [board, mine] = await Promise.all([this.store.dailyBoard(key, 20), this.store.daily(key, u.id)]);
      const words = this.words(d, lg).map((v, i) => ({ id: v.id, kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: v.level, ok: mine?.marks ? mine.marks[i] === '1' : null }));
      return [lg, { board: board.map(publicRow), words, mine: mine ? { correct: mine.correct, ms: mine.ms } : null }] as const;
    })));
    const played = LEAGUES.find((lg) => leagues[lg].mine) ?? null;
    const c = clockOf(u);
    const over = t >= Date.parse(`${d}T00:00:00Z`) + DAY_MS - rangeOf(c)[0] * 60_000; // (the westmost time zone it allows)
    if (!played && !(c && d < c.day) && !over) throw new DailyError('That day isn\'t over everywhere yet — its words show in a few hours', 409);
    return { day: d, total: DAILY_WORDS, leagues, played, league: leagueOf(u) };
  }

  /** Start (or continue) today's run: returns the current word. */
  async start(u: UserRecord, clientDay?: unknown): Promise<DailyWordView> {
    await this.ready();
    const t = this.now();
    const day = this.dayFor(u, clientDay, t);
    let a = await this.attemptOf(u.id);
    // 0.9.9.9.7.1: a run of an earlier day left open counts as played (whatever is left, missed) — it used to be
    // dropped, and the day could be started afresh
    if (a && a.day !== day) { await this.finish(u, this.timeOut(a, true)); a = undefined; u = (await this.store.findById(u.id)) ?? u; }
    if (playedOn(u, day) || await this.store.daily(dailyKey(day, leagueOf(u)), u.id)) throw new DailyError('You already played today\'s challenge — come back tomorrow!', 409);
    if (!a) {
      a = { day, league: leagueOf(u), index: 0, shownAt: t, correct: 0, ms: 0, marks: '', words: this.words(day, leagueOf(u)) };
      this.attempts.set(u.id, a);
      // (0.9.9.9.7.1: the account's clock moves to this day)
      const clock = this.nextClock(u, day, t);
      if (clock) await this.store.update(u.id, { unlocks: [...(u.unlocks ?? []).filter((x) => !x.startsWith(CLOCK)), `${CLOCK}${clock.day}:${clock.lo}:${clock.hi}`] });
    }
    // a word left open too long (closed the tab to look it up?) counts as a miss
    this.timeOut(a);
    await this.saveRun(u.id, a);
    if (a.index >= DAILY_WORDS) throw new DailyError('Time ran out on the remaining words — send your answers to finish.', 409);
    return this.view(a);
  }
  /** words left open past their time count as missed (`all`: every word that is left) */
  private timeOut(a: Attempt, all = false): Attempt {
    while (a.index < DAILY_WORDS && (all || this.now() - a.shownAt > DAILY_WORD_MS + GRACE_MS)) {
      a.ms += DAILY_WORD_MS; a.index++; a.marks += '0'; a.shownAt = this.now();
    }
    return a;
  }

  /** Answer the current word (empty text = skip). */
  async answer(u: UserRecord, raw: unknown): Promise<DailyAnswer> {
    const a = await this.attemptOf(u.id);
    // (the run's own day: one started just before midnight is finished after it)
    if (!a || this.now() - a.shownAt > 6 * 3600_000) throw new DailyError('Start the challenge first');
    const text = typeof raw === 'string' ? raw.slice(0, 60) : '';
    const word = a.words[a.index];
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
    if (a.index < DAILY_WORDS) { await this.saveRun(u.id, a); return { ...base, next: this.view(a), done: null }; }
    return { ...base, next: null, done: await this.finish(u, a) };
  }

  /** Abandoned runs finish themselves: whatever is left counts as missed. */
  async finishStale(u: UserRecord) {
    const a = await this.attemptOf(u.id);
    if (!a) return null;
    a.ms += (DAILY_WORDS - a.index) * DAILY_WORD_MS;
    a.marks = a.marks.padEnd(DAILY_WORDS, '0');
    a.index = DAILY_WORDS;
    return this.finish(u, a);
  }

  private async finish(u: UserRecord, a: Attempt) {
    this.attempts.delete(u.id);
    await this.store.setValue(runKey(u.id), null);
    const key = dailyKey(a.day, a.league);
    const saved = await this.store.saveDaily(key, u.id, a.correct, a.ms, a.marks);
    // the league: today's is remembered; 9 / 10 or better moves you up one
    let promoted: League | null = null, passed: League | null = null;
    if (saved) {
      const fresh = (await this.store.findById(u.id)) ?? u;
      const i = LEAGUES.indexOf(a.league);
      // 0.9.9.9.6.4: passing a league (7 / 10) is what earns its rewards — the top one keeps a mark ("dpassed:N1")
      if (a.correct >= PROMOTE_AT && !leaguePassed(a.league, fresh.unlocks)) passed = a.league;
      if (a.correct >= PROMOTE_AT && i < LEAGUES.length - 1) promoted = LEAGUES[i + 1];
      const now = promoted ?? leagueOf(fresh);
      const rest = (fresh.unlocks ?? []).filter((x) => !x.startsWith('dleague:') && !x.startsWith('dplayed:') && !x.startsWith('dwords:')); // (dwords: 0.9.9.9.6.3's own-words lists, taken back)
      const mark = passed === 'N1' ? ['dpassed:N1'] : [];
      await this.store.update(u.id, { unlocks: [...rest, ...(now === 'KANA' ? [] : [`dleague:${now}`]), `dplayed:${a.day}:${a.league}`, ...mark] });
    }
    // the words you got wrong go to Struggling spells, like after a battle
    if (saved) {
      const missed = a.words.filter((_, i) => a.marks[i] !== '1').map((v) => v.id);
      // (adds the card if you didn't have it; 0.9.9.9.6.3: not while Struggling spells is paused)
      if (missed.length && !isPaused((await this.store.findById(u.id)) ?? u, 'struggling')) await this.store.markStruggling(u.id, missed, this.now());
    }
    const xp = saved ? a.correct * XP_PER_CORRECT + (a.correct === DAILY_WORDS ? 100 : 0) : 0;
    if (xp) await this.store.addXp(u.id, xp);
    if (saved) await this.progress.record(u.id, playerDay(u, this.now()), { xp, challenges: 1 }); // a daily task (the streak)
    if (saved && a.correct === DAILY_WORDS) await this.onPerfect?.(u.id);
    const rank = (await this.store.dailyBetter(key, a.correct, a.ms)) + 1;
    const players = (await this.store.dailyBoard(key, 100_000)).length;
    return { correct: a.correct, ms: a.ms, rank, players, xp, league: a.league, promoted, passed };
  }

  private view(a: Attempt): DailyWordView {
    const w = a.words[a.index];
    return { index: a.index, total: DAILY_WORDS, kanji: w.kanji, level: w.level, timeLimitMs: DAILY_WORD_MS };
  }
}

const publicRow = (r: DailyResult) => ({ id: r.userId, name: r.username, correct: r.correct, ms: r.ms });
