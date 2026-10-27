import { LEVELS, studyLevelOf, type Level } from '../../shared/protocol';
import { DAILY_TASKS, MONTH_GOALS, seasonOf, type DailyTaskState, type MonthGoalId } from '../../shared/progress';
import type { DayActivity, Store, UserRecord } from '../db/Store';
import { VOCAB } from '../vocab';
import { now } from '../now';

/** How a word stands in your study set (Progress → mastery grid). */
export const Mastery = { Unseen: 0, New: 1, Learning: 2, Learned: 3, Mastered: 4 } as const;
/** A card counts as mastered once its review interval reaches three weeks. */
export const MASTERED_DAYS = 21;
/** 0–100: how far along a word is (0.9.9.4.2: the bar under each tile) — mastered at a 3-week interval. */
export function progressOf(c?: { state: string; intervalDays: number; reps: number } | null): number {
  if (!c) return 0;
  if (c.state === 'new') return 4;
  if (c.state !== 'review') return Math.min(30, 10 + c.reps * 5);
  return Math.round(35 + 65 * Math.min(1, Math.log1p(c.intervalDays) / Math.log1p(MASTERED_DAYS)));
}

export interface MonthProgress {
  month: string; // YYYY-MM
  name: string; // the season's theme
  reward: string; // 'flame:harvest' / 'staff:maple'
  goals: Array<{ id: MonthGoalId; label: string; target: number; value: number }>;
  done: boolean;
  unlocked: boolean;
}
export interface ProgressPage {
  /** last 26 weeks of activity (only days with something in them) */
  activity: DayActivity[];
  /** per level: every word as [kanji, Mastery] in the vocab order */
  mastery: Record<Level, Array<[string, number, number]>>;
  month: MonthProgress;
}

const DAY_MS = 86_400_000;
/** XP for completing the day's four streak tasks */
export const STREAK_XP = 500;
export const shiftDay = (day: string, days: number) => new Date(Date.parse(day) + days * DAY_MS).toISOString().slice(0, 10);

/**
 * The player's day for things the server records without the browser's date (match results): their last
 * login day if it's within a day of the server's, otherwise the server's date.
 */
export function playerDay(u: Pick<UserRecord, 'loginDay'>, at = now()) {
  const server = new Date(at).toISOString().slice(0, 10);
  if (u.loginDay && Math.abs(Date.parse(u.loginDay) - Date.parse(server)) <= DAY_MS) return u.loginDay;
  return server;
}

/** Activity log, the Progress page and the monthly goals (with their seasonal rewards). */
export class ProgressService {
  constructor(private readonly store: Store) {}

  /** Record something the player did today, then check this month's goals. Returns a newly earned reward, if any. */
  async record(userId: string, day: string, delta: Parameters<Store['addActivity']>[2]): Promise<string | null> {
    await this.store.addActivity(userId, day, delta);
    await this.checkStreak(userId, day);
    return this.checkSeason(userId, day);
  }

  /** Today's daily tasks (Study 10 spells, a quiz, the daily challenge, a passage) and how far along each is. */
  async tasks(userId: string, day: string): Promise<DailyTaskState[]> {
    const a = (await this.store.activity(userId, day)).find((r) => r.day === day);
    const value: Record<string, number> = { learn: a?.reviews ?? 0, quiz: a?.quizzes ?? 0, daily: a?.challenges ?? 0, passage: a?.passages ?? 0 };
    return DAILY_TASKS.map((t) => ({ id: t.id, label: t.label, target: t.target, value: Math.min(t.target, value[t.id] ?? 0) }));
  }

  /** All four tasks done today → the streak goes up (once a day; a missed day starts it over). */
  async checkStreak(userId: string, day: string) {
    if (!(await this.tasks(userId, day)).every((t) => t.value >= t.target)) return;
    const u = await this.store.findById(userId);
    if (!u || u.streakDay === day) return;
    const streak = u.streakDay === shiftDay(day, -1) ? (u.streak ?? 0) + 1 : 1;
    await this.store.update(userId, { streakDay: day, streak, bestStreak: Math.max(u.bestStreak ?? 0, streak) });
    // the day's reward (0.9.9.3.3)
    await this.store.addXp(userId, STREAK_XP);
    await this.store.addActivity(userId, day, { xp: STREAK_XP });
  }

  async month(u: UserRecord, day: string): Promise<MonthProgress> {
    const first = `${day.slice(0, 8)}01`;
    const rows = await this.store.activity(u.id, first);
    const inMonth = rows.filter((r) => r.day.slice(0, 7) === day.slice(0, 7));
    const value: Record<MonthGoalId, number> = {
      days: inMonth.filter((r) => r.login || r.games > 0 || r.reviews > 0).length,
      wins: inMonth.reduce((n, r) => n + r.wins, 0),
      reviews: inMonth.reduce((n, r) => n + r.reviews, 0),
    };
    const season = seasonOf(day);
    const goals = MONTH_GOALS.map((g) => ({ id: g.id, label: g.label, target: g.target, value: Math.min(g.target, value[g.id]) }));
    return { month: day.slice(0, 7), name: season.name, reward: season.reward, goals, done: goals.every((g) => g.value >= g.target), unlocked: (u.unlocks ?? []).includes(season.reward) };
  }

  /** All three goals done → this month's reward is added to the player's unlocks (once). */
  async checkSeason(userId: string, day: string): Promise<string | null> {
    const u = await this.store.findById(userId);
    if (!u) return null;
    const m = await this.month(u, day);
    if (!m.done || m.unlocked) return null;
    await this.store.update(u.id, { unlocks: [...(u.unlocks ?? []), m.reward] });
    return m.reward;
  }

  async page(u: UserRecord, day: string): Promise<ProgressPage> {
    // a word can be in several decks: its best card counts (furthest along, longest interval)
    const score = (c: { state: string; intervalDays: number }) => (c.state === 'review' ? 1000 + c.intervalDays : c.state === 'new' ? 0 : 1);
    const cards = new Map<string, Awaited<ReturnType<Store['cards']>>[number]>();
    for (const c of await this.store.cards(u.id)) { const was = cards.get(c.vocabId); if (!was || score(c) > score(was)) cards.set(c.vocabId, c); }
    const mastery = Object.fromEntries(LEVELS.map((l) => [l, [] as Array<[string, number, number]>])) as Record<Level, Array<[string, number, number]>>;
    for (const v of VOCAB) {
      const c = cards.get(v.id);
      const m = !c ? Mastery.Unseen
        : c.state === 'new' ? Mastery.New
        : c.state === 'review' ? (c.intervalDays >= MASTERED_DAYS ? Mastery.Mastered : Mastery.Learned)
        : Mastery.Learning;
      mastery[studyLevelOf(v)]?.push([v.kanji, m, progressOf(c)]);
    }
    return { activity: await this.store.activity(u.id, shiftDay(day, -26 * 7)), mastery, month: await this.month(u, day) };
  }
}
