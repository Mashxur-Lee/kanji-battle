import type { ReportKind, Store, UserRecord } from '../db/Store';

/**
 * Closed-beta tools for the admin:
 * - Feedback: players send bug reports and suggestions (Menu → Feedback); the admin reads them in the Inbox.
 * - Errors: the game reports its own crashes (browser errors and server errors) into the same Inbox.
 * - Measurement: a few events (sign-ups, tutorial steps, games) and the daily activity give the Stats page:
 *   new players, daily active players, day-1 / day-7 return rates, the tutorial funnel and games per mode.
 */
export class InsightsError extends Error { constructor(message: string, readonly status = 400) { super(message); } }

/** Events the browser may send (everything else is recorded by the server itself). */
export const CLIENT_EVENTS = ['tutorial_start', 'tutorial_kana_yes', 'tutorial_kana_no', 'tutorial_battle', 'tutorial_skip', 'tutorial_done'] as const;
const DAY = 86_400_000;
const dayOf = (t: number) => new Date(t).toISOString().slice(0, 10);
const plusDays = (day: string, n: number) => dayOf(Date.parse(`${day}T12:00:00Z`) + n * DAY);

export class InsightsService {
  private recent = new Map<string, number[]>(); // who → send times (feedback rate limit)
  private lastErrors = new Map<string, number>(); // same error → last time (no floods)

  constructor(private readonly store: Store, private readonly now: () => number = Date.now) {}

  /** A bug report or a suggestion from a player: at most 5 in 10 minutes. */
  async feedback(u: UserRecord, kind: unknown, text: unknown, meta: unknown) {
    const k: ReportKind = kind === 'suggestion' ? 'suggestion' : 'bug';
    const t = typeof text === 'string' ? text.trim().slice(0, 2000) : '';
    if (t.length < 3) throw new InsightsError('Write a few words first');
    const times = (this.recent.get(u.id) ?? []).filter((x) => this.now() - x < 10 * 60_000);
    if (times.length >= 5) throw new InsightsError('Thanks! That\'s a lot at once — try again in a few minutes', 429);
    this.recent.set(u.id, [...times, this.now()]);
    await this.store.addReport({ kind: k, userId: u.id, username: u.username, text: t, meta: typeof meta === 'string' ? meta.slice(0, 500) : '', at: this.now() });
  }

  /** An error from the browser or the server. The same message is kept at most once a minute. */
  async error(message: unknown, details: unknown, who: { id: string; username: string } | null) {
    const msg = typeof message === 'string' ? message.slice(0, 300) : 'Unknown error';
    const key = msg;
    const last = this.lastErrors.get(key);
    if (last !== undefined && this.now() - last < 60_000) return;
    this.lastErrors.set(key, this.now());
    if (this.lastErrors.size > 500) this.lastErrors.clear();
    await this.store.addReport({ kind: 'error', userId: who?.id ?? null, username: who?.username ?? '', text: msg, meta: typeof details === 'string' ? details.slice(0, 2000) : '', at: this.now() }).catch(() => {});
  }

  async event(userId: string | null, name: string) { await this.store.addEvent(userId, name, this.now()).catch(() => {}); }

  /** The admin's Stats page. */
  async stats(users: UserRecord[], onlineNow: number) {
    const today = dayOf(this.now());
    const from = plusDays(today, -44);
    const activity = await this.store.activityAll(from);
    const active = new Map<string, Set<string>>(); // day → players active that day
    for (const a of activity) { if (!active.has(a.day)) active.set(a.day, new Set()); active.get(a.day)!.add(a.userId); }
    const days = Array.from({ length: 14 }, (_, i) => plusDays(today, i - 13));
    const signupDay = new Map(users.map((u) => [u.id, u.createdAt.slice(0, 10)]));
    const daily = days.map((d) => ({ day: d, signups: users.filter((u) => signupDay.get(u.id) === d).length, active: active.get(d)?.size ?? 0 }));
    // returning players: of those who signed up on day d, how many were back on day d+1 / d+7
    const back = (n: number) => {
      const cohort = users.filter((u) => { const d = signupDay.get(u.id)!; return d >= plusDays(today, -30) && plusDays(d, n) <= today; });
      const returned = cohort.filter((u) => active.get(plusDays(signupDay.get(u.id)!, n))?.has(u.id));
      return { players: cohort.length, returned: returned.length };
    };
    const events = await this.store.events(this.now() - 30 * DAY);
    const who = (name: string) => new Set(events.filter((e) => e.name === name).map((e) => e.userId)).size;
    const funnel = ['signup', 'tutorial_start', 'tutorial_kana_yes', 'tutorial_kana_no', 'tutorial_battle', 'tutorial_done', 'tutorial_skip'].map((name) => ({ name, players: who(name) }));
    const week = events.filter((e) => e.at >= this.now() - 7 * DAY);
    const modes: Record<string, { started: number; finished: number }> = {};
    for (const e of week) {
      const m = /^game_(start|end):(\w+)$/.exec(e.name);
      if (!m) continue;
      modes[m[2]] ??= { started: 0, finished: 0 };
      if (m[1] === 'start') modes[m[2]].started++; else modes[m[2]].finished++;
    }
    return { onlineNow, players: users.length, daily, day1: back(1), day7: back(7), funnel, modes };
  }
}
