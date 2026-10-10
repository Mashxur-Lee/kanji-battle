import { LEVELS, type Level } from '../../shared/protocol';
import { MONTH_GOALS, seasonOf, type MonthGoalId } from '../../shared/progress';
import type { DayActivity, Store, UserRecord } from '../db/Store';
import { VOCAB } from '../vocab';

/** How a word stands in your study set (Progress → mastery grid). */
export const Mastery = { Unseen: 0, New: 1, Learning: 2, Learned: 3, Mastered: 4 } as const;
/** A card counts as mastered once its review interval reaches three weeks. */
export const MASTERED_DAYS = 21;

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
  mastery: Record<Level, Array<[string, number]>>;
  month: MonthProgress;
}

const DAY_MS = 86_400_000;
export const shiftDay = (day: string, days: number) => new Date(Date.parse(day) + days * DAY_MS).toISOString().slice(0, 10);

/**
 * The player's day for things the server records without the browser's date (match results): their last
 * login day if it's within a day of the server's, otherwise the server's date.
 */
export function playerDay(u: Pick<UserRecord, 'loginDay'>, now = Date.now()) {
  const server = new Date(now).toISOString().slice(0, 10);
  if (u.loginDay && Math.abs(Date.parse(u.loginDay) - Date.parse(server)) <= DAY_MS) return u.loginDay;
  return server;
}

/** Activity log, the Progress page and the monthly goals (with their seasonal rewards). */
export class ProgressService {
  constructor(private readonly store: Store) {}

  /** Record something the player did today, then check this month's goals. Returns a newly earned reward, if any. */
  async record(userId: string, day: string, delta: Parameters<Store['addActivity']>[2]): Promise<string | null> {
    await this.store.addActivity(userId, day, delta);
    return this.checkSeason(userId, day);
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
    const cards = new Map((await this.store.cards(u.id)).map((c) => [c.vocabId, c]));
    const mastery = Object.fromEntries(LEVELS.map((l) => [l, [] as Array<[string, number]>])) as Record<Level, Array<[string, number]>>;
    for (const v of VOCAB) {
      const c = cards.get(v.id);
      const m = !c ? Mastery.Unseen
        : c.state === 'new' ? Mastery.New
        : c.state === 'review' ? (c.intervalDays >= MASTERED_DAYS ? Mastery.Mastered : Mastery.Learned)
        : Mastery.Learning;
      mastery[v.level]?.push([v.kanji, m]);
    }
    return { activity: await this.store.activity(u.id, shiftDay(day, -26 * 7)), mastery, month: await this.month(u, day) };
  }
}
