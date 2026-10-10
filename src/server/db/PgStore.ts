import postgres from 'postgres';
import type { Level, MatchDetail, MatchSummary, Role } from '../../shared/protocol';
import type { BackgroundId, FlameId, StaffId } from '../../shared/progress';
import type { CardState, SrsCard } from '../../shared/srs';
import { MATCH_HISTORY_LIMIT, UsernameTakenError, type ActivityDelta, type AvatarImage, type DailyResult, type DayActivity, type FriendLink, type NewUser, type Store, type UserPatch, type UserRecord } from './Store';

/**
 * Postgres store (Neon, or any Postgres). Set DATABASE_URL. Tables are created on first start.
 * Uses postgres.js (zero dependencies); all queries are parameterised by the tagged template.
 */
interface UserRow {
  id: string; username: string; password_hash: string; role: Role; banned: boolean; created_at: Date;
  xp: number; background: BackgroundId; study_levels: Level[]; last_new_date: string | null; new_notice: number;
  crit_count: number; crit_expires: string | number; wins: number; losses: number; avatar_v: number; flame: FlameId | null; staff: StaffId | null; tutorial_done: boolean | null; unlocks: string[] | null;
  login_day: string | null; streak: number | null; best_streak: number | null;
}
interface CardRow {
  vocab_id: string; state: CardState; step: number; ease: number; interval_days: number; due: string | number;
  reps: number; lapses: number; struggling: boolean; crit_day: string | null;
}

const toUser = (r: UserRow): UserRecord => ({
  id: r.id, username: r.username, passwordHash: r.password_hash, role: r.role, banned: r.banned,
  createdAt: new Date(r.created_at).toISOString(), xp: r.xp, background: r.background,
  studyLevels: r.study_levels ?? [], lastNewDate: r.last_new_date, newNotice: r.new_notice,
  critCount: r.crit_count ?? 0, critExpires: Number(r.crit_expires ?? 0),
  wins: r.wins ?? 0, losses: r.losses ?? 0, avatarV: r.avatar_v ?? 0, flame: r.flame ?? 'blue', staff: r.staff ?? 'verdant', tutorialDone: r.tutorial_done ?? true, unlocks: r.unlocks ?? [],
  loginDay: r.login_day ?? null, streak: r.streak ?? 0, bestStreak: r.best_streak ?? 0,
});
const toCard = (r: CardRow): SrsCard => ({
  vocabId: r.vocab_id, state: r.state, step: r.step, ease: r.ease, intervalDays: r.interval_days,
  due: Number(r.due), reps: r.reps, lapses: r.lapses, struggling: r.struggling, critDay: r.crit_day ?? null,
});

const COLUMNS: Record<keyof UserPatch, string> = {
  banned: 'banned', passwordHash: 'password_hash', background: 'background',
  studyLevels: 'study_levels', lastNewDate: 'last_new_date', newNotice: 'new_notice',
  critCount: 'crit_count', critExpires: 'crit_expires', flame: 'flame', staff: 'staff', tutorialDone: 'tutorial_done', unlocks: 'unlocks',
  loginDay: 'login_day', streak: 'streak', bestStreak: 'best_streak',
};

/**
 * Neon's copy-paste string ends in `&channel_binding=require`, a libpq-only option. postgres.js would
 * send it to the server as a setting and the server refuses to connect, so drop such options.
 */
const LIBPQ_ONLY = ['channel_binding', 'gssencmode', 'target_session_attrs'];
export function cleanUrl(raw: string): string {
  try {
    const u = new URL(raw.trim());
    for (const k of LIBPQ_ONLY) u.searchParams.delete(k);
    return u.toString();
  } catch { return raw.trim(); }
}

export class PgStore implements Store {
  readonly name = 'postgres';
  private readonly sql: postgres.Sql;

  constructor(rawUrl: string) {
    const url = cleanUrl(rawUrl);
    const local = /@(localhost|127\.0\.0\.1)[:/]/.test(url);
    this.sql = postgres(url, { ssl: local ? false : 'require', max: 5, idle_timeout: 20, onnotice: () => {} });
  }

  async init() {
    await this.sql`
      create table if not exists kw_users (
        id uuid primary key default gen_random_uuid(),
        username text not null unique,
        password_hash text not null,
        role text not null default 'user' check (role in ('user', 'admin')),
        banned boolean not null default false,
        created_at timestamptz not null default now(),
        xp integer not null default 0,
        background text not null default 'forest',
        study_levels text[] not null default '{}',
        last_new_date text,
        new_notice integer not null default 0
      )`;
    await this.sql`
      create table if not exists kw_cards (
        user_id uuid not null references kw_users(id) on delete cascade,
        vocab_id text not null,
        state text not null,
        step integer not null,
        ease integer not null,
        interval_days integer not null,
        due bigint not null,
        reps integer not null,
        lapses integer not null,
        struggling boolean not null default false,
        primary key (user_id, vocab_id)
      )`;
    await this.sql`create index if not exists kw_cards_due on kw_cards (user_id, due)`;
    // v0.5 made levels steeper. Rows saved before that (xp_scheme 1) get their XP converted once, so
    // everyone keeps the level they had. Nothing is ever dropped or reset by an update.
    await this.sql`alter table kw_users add column if not exists xp_scheme integer not null default 1`;
    // v0.6.3 daily crit (added columns only; existing data untouched)
    await this.sql`alter table kw_users add column if not exists crit_count integer not null default 0`;
    await this.sql`alter table kw_users add column if not exists crit_expires bigint not null default 0`;
    await this.sql`alter table kw_cards add column if not exists crit_day text`;
    // v0.7.5 wins/losses and profile pictures (pictures in their own table so user lookups stay small)
    await this.sql`alter table kw_users add column if not exists wins integer not null default 0`;
    await this.sql`alter table kw_users add column if not exists losses integer not null default 0`;
    await this.sql`alter table kw_users add column if not exists avatar_v integer not null default 0`;
    await this.sql`
      create table if not exists kw_avatars (
        user_id uuid primary key references kw_users(id) on delete cascade,
        mime text not null,
        data bytea not null
      )`;
    // v0.9.2 colour of the combo flames
    await this.sql`alter table kw_users add column if not exists flame text not null default 'blue'`;
    // v0.9.3 login streaks
    await this.sql`alter table kw_users add column if not exists login_day text`;
    await this.sql`alter table kw_users add column if not exists streak integer not null default 0`;
    await this.sql`alter table kw_users add column if not exists best_streak integer not null default 0`;
    // v0.9.5 magic staff skin
    await this.sql`alter table kw_users add column if not exists staff text not null default 'verdant'`;
    // v0.9.6 first-run tutorial (existing accounts count as done), seasonal unlocks, activity, daily challenge, friends
    await this.sql`alter table kw_users add column if not exists tutorial_done boolean not null default true`;
    await this.sql`alter table kw_users add column if not exists unlocks text[] not null default '{}'`;
    await this.sql`
      create table if not exists kw_activity (
        user_id uuid not null references kw_users(id) on delete cascade,
        day text not null,
        login boolean not null default false,
        reviews integer not null default 0,
        games integer not null default 0,
        wins integer not null default 0,
        xp integer not null default 0,
        primary key (user_id, day)
      )`;
    await this.sql`
      create table if not exists kw_daily (
        day text not null,
        user_id uuid not null references kw_users(id) on delete cascade,
        correct integer not null,
        ms integer not null,
        primary key (day, user_id)
      )`;
    await this.sql`create index if not exists kw_daily_rank on kw_daily (day, correct desc, ms asc)`;
    await this.sql`
      create table if not exists kw_friends (
        user_id uuid not null references kw_users(id) on delete cascade,
        friend_id uuid not null references kw_users(id) on delete cascade,
        status text not null check (status in ('pending', 'accepted')),
        primary key (user_id, friend_id)
      )`;
    // v0.7.7 match history (one row per player per match; the result screen is kept as JSON)
    await this.sql`
      create table if not exists kw_matches (
        id bigserial primary key,
        user_id uuid not null references kw_users(id) on delete cascade,
        played_at bigint not null,
        data jsonb not null
      )`;
    await this.sql`create index if not exists kw_matches_user on kw_matches (user_id, id desc)`;
    // v0.9.3: only the newest MATCH_HISTORY_LIMIT games per player are kept — clear out older ones once
    await this.sql`delete from kw_matches m using (
      select id, row_number() over (partition by user_id order by id desc) as n from kw_matches) r
      where m.id = r.id and r.n > ${MATCH_HISTORY_LIMIT}`;
    // one atomic statement (same maths as legacyXpToCurrent): level L = xp div 1000 keeps its progress
    const converted = await this.sql`
      update kw_users
      set xp = 500 * (xp / 1000) * (xp / 1000 + 1) + round((xp % 1000)::numeric * (xp / 1000 + 1)),
          xp_scheme = 2
      where xp_scheme < 2
      returning id`;
    if (converted.length) console.log(`Converted XP of ${converted.length} account(s) to the new level curve`);
  }

  async findByUsername(username: string) {
    const [r] = await this.sql<UserRow[]>`select * from kw_users where username = ${username.toLowerCase()}`;
    return r ? toUser(r) : null;
  }
  async findById(id: string) {
    if (!/^[0-9a-f-]{36}$/i.test(id)) return null; // not a uuid → no such user (avoids a cast error)
    const [r] = await this.sql<UserRow[]>`select * from kw_users where id = ${id}`;
    return r ? toUser(r) : null;
  }
  async create(u: NewUser) {
    try {
      const [r] = await this.sql<UserRow[]>`
        insert into kw_users (username, password_hash, role, xp_scheme, tutorial_done) values (${u.username.toLowerCase()}, ${u.passwordHash}, ${u.role}, 2, false)
        returning *`;
      return toUser(r);
    } catch (e) {
      if ((e as { code?: string }).code === '23505') throw new UsernameTakenError();
      throw e;
    }
  }
  async list() { return (await this.sql<UserRow[]>`select * from kw_users order by created_at`).map(toUser); }
  async update(id: string, patch: UserPatch) {
    const set: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(patch)) if (v !== undefined) set[COLUMNS[k as keyof UserPatch]] = v;
    if (Object.keys(set).length === 0) return this.findById(id);
    const [r] = await this.sql<UserRow[]>`update kw_users set ${this.sql(set)} where id = ${id} returning *`;
    return r ? toUser(r) : null;
  }
  async addXp(id: string, delta: number) {
    const [r] = await this.sql<{ xp: number }[]>`update kw_users set xp = greatest(0, xp + ${Math.round(delta)}) where id = ${id} returning xp`;
    return r?.xp ?? 0;
  }
  async cards(userId: string) {
    return (await this.sql<CardRow[]>`select * from kw_cards where user_id = ${userId}`).map(toCard);
  }
  async card(userId: string, vocabId: string) {
    const [r] = await this.sql<CardRow[]>`select * from kw_cards where user_id = ${userId} and vocab_id = ${vocabId}`;
    return r ? toCard(r) : null;
  }
  private row(userId: string, c: SrsCard) {
    return {
      user_id: userId, vocab_id: c.vocabId, state: c.state, step: c.step, ease: c.ease, interval_days: c.intervalDays,
      due: c.due, reps: c.reps, lapses: c.lapses, struggling: c.struggling, crit_day: c.critDay ?? null,
    };
  }
  async saveCard(userId: string, c: SrsCard) {
    const row = this.row(userId, c);
    await this.sql`
      insert into kw_cards ${this.sql(row)}
      on conflict (user_id, vocab_id) do update set
        state = excluded.state, step = excluded.step, ease = excluded.ease, interval_days = excluded.interval_days,
        due = excluded.due, reps = excluded.reps, lapses = excluded.lapses, struggling = excluded.struggling, crit_day = excluded.crit_day`;
  }
  async addCards(userId: string, cards: SrsCard[]) {
    if (cards.length === 0) return 0;
    const rows = cards.map((c) => this.row(userId, c));
    const res = await this.sql`insert into kw_cards ${this.sql(rows)} on conflict do nothing`;
    return res.count;
  }
  async markStruggling(userId: string, vocabIds: string[], now: number) {
    if (vocabIds.length === 0) return;
    const rows = vocabIds.map((id) => ({
      user_id: userId, vocab_id: id, state: 'new', step: 0, ease: 2500, interval_days: 0, due: now, reps: 0, lapses: 0, struggling: true,
    }));
    await this.sql`insert into kw_cards ${this.sql(rows)} on conflict (user_id, vocab_id) do update set struggling = true, due = least(kw_cards.due, excluded.due)`;
  }
  async learnedCount(userId: string) {
    const [r] = await this.sql<{ n: string }[]>`select count(*) as n from kw_cards where user_id = ${userId} and state = 'review'`;
    return Number(r.n);
  }
  async cardStats() {
    const rows = await this.sql<{ user_id: string; cards: string; learned: string }[]>`
      select user_id, count(*) as cards, count(*) filter (where state = 'review') as learned from kw_cards group by user_id`;
    return Object.fromEntries(rows.map((r) => [r.user_id, { cards: Number(r.cards), learned: Number(r.learned) }]));
  }
  async addResult(id: string, outcome: 'win' | 'loss' | 'draw') {
    if (outcome === 'win') await this.sql`update kw_users set wins = wins + 1 where id = ${id}`;
    else if (outcome === 'loss') await this.sql`update kw_users set losses = losses + 1 where id = ${id}`;
  }
  async setAvatar(id: string, img: AvatarImage | null) {
    if (!img) {
      await this.sql`delete from kw_avatars where user_id = ${id}`;
      await this.sql`update kw_users set avatar_v = 0 where id = ${id}`;
      return 0;
    }
    await this.sql`insert into kw_avatars (user_id, mime, data) values (${id}, ${img.mime}, ${img.data})
      on conflict (user_id) do update set mime = excluded.mime, data = excluded.data`;
    const [r] = await this.sql<{ avatar_v: number }[]>`update kw_users set avatar_v = avatar_v + 1 where id = ${id} returning avatar_v`;
    return r?.avatar_v ?? 0;
  }
  async getAvatar(id: string) {
    if (!/^[0-9a-f-]{36}$/i.test(id)) return null;
    const [r] = await this.sql<{ mime: AvatarImage['mime']; data: Buffer }[]>`select mime, data from kw_avatars where user_id = ${id}`;
    return r ? { mime: r.mime, data: Buffer.from(r.data) } : null;
  }
  async addMatch(userId: string, m: Omit<MatchDetail, 'id'>) {
    await this.sql`insert into kw_matches (user_id, played_at, data) values (${userId}, ${m.at}, ${this.sql.json(m as never)})`;
    await this.sql`delete from kw_matches where user_id = ${userId} and id not in (
      select id from kw_matches where user_id = ${userId} order by id desc limit ${MATCH_HISTORY_LIMIT})`;
  }
  async matches(userId: string, limit: number): Promise<MatchSummary[]> {
    const rows = await this.sql<{ id: string; data: MatchSummary }[]>`
      select id, data - 'players' - 'stats' as data from kw_matches where user_id = ${userId} order by id desc limit ${limit}`;
    return rows.map((r) => ({ ...r.data, id: String(r.id) }));
  }
  async match(userId: string, id: string): Promise<MatchDetail | null> {
    if (!/^\d{1,18}$/.test(id)) return null;
    const [r] = await this.sql<{ id: string; data: MatchDetail }[]>`select id, data from kw_matches where user_id = ${userId} and id = ${id}`;
    return r ? { ...r.data, id: String(r.id) } : null;
  }
  async addActivity(userId: string, day: string, d: ActivityDelta) {
    await this.sql`
      insert into kw_activity (user_id, day, login, reviews, games, wins, xp)
      values (${userId}, ${day}, ${!!d.login}, ${d.reviews ?? 0}, ${d.games ?? 0}, ${d.wins ?? 0}, ${d.xp ?? 0})
      on conflict (user_id, day) do update set
        login = kw_activity.login or excluded.login,
        reviews = kw_activity.reviews + excluded.reviews, games = kw_activity.games + excluded.games,
        wins = kw_activity.wins + excluded.wins, xp = kw_activity.xp + excluded.xp`;
  }
  async activity(userId: string, fromDay: string): Promise<DayActivity[]> {
    return this.sql<DayActivity[]>`select day, login, reviews, games, wins, xp from kw_activity where user_id = ${userId} and day >= ${fromDay} order by day`;
  }
  async saveDaily(day: string, userId: string, correct: number, ms: number) {
    const r = await this.sql`insert into kw_daily (day, user_id, correct, ms) values (${day}, ${userId}, ${correct}, ${ms}) on conflict do nothing returning day`;
    return r.length > 0;
  }
  async daily(day: string, userId: string) {
    const [r] = await this.sql<{ correct: number; ms: number }[]>`select correct, ms from kw_daily where day = ${day} and user_id = ${userId}`;
    return r ? { correct: r.correct, ms: r.ms } : null;
  }
  async dailyBoard(day: string, limit: number): Promise<DailyResult[]> {
    const rows = await this.sql<{ user_id: string; username: string; correct: number; ms: number }[]>`
      select d.user_id, u.username, d.correct, d.ms from kw_daily d join kw_users u on u.id = d.user_id
      where d.day = ${day} order by d.correct desc, d.ms asc limit ${limit}`;
    return rows.map((r) => ({ userId: r.user_id, username: r.username, correct: r.correct, ms: r.ms }));
  }
  async dailyBetter(day: string, correct: number, ms: number) {
    const [r] = await this.sql<{ n: string }[]>`select count(*) as n from kw_daily where day = ${day} and (correct > ${correct} or (correct = ${correct} and ms < ${ms}))`;
    return Number(r.n);
  }
  async friends(userId: string): Promise<FriendLink[]> {
    const rows = await this.sql<{ id: string; username: string; status: FriendLink['status'] }[]>`
      select f.friend_id as id, u.username, case when f.status = 'accepted' then 'accepted' else 'outgoing' end as status
        from kw_friends f join kw_users u on u.id = f.friend_id where f.user_id = ${userId}
      union all
      select f.user_id as id, u.username, 'incoming' as status
        from kw_friends f join kw_users u on u.id = f.user_id where f.friend_id = ${userId} and f.status = 'pending'
      order by username`;
    return rows.map((r) => ({ id: r.id, username: r.username, status: r.status }));
  }
  async requestFriend(from: string, to: string) {
    const [mine] = await this.sql`select 1 from kw_friends where user_id = ${from} and friend_id = ${to}`;
    if (mine) return 'exists' as const;
    const [theirs] = await this.sql<{ status: string }[]>`select status from kw_friends where user_id = ${to} and friend_id = ${from}`;
    if (theirs?.status === 'pending') {
      await this.sql`update kw_friends set status = 'accepted' where user_id = ${to} and friend_id = ${from}`;
      await this.sql`insert into kw_friends (user_id, friend_id, status) values (${from}, ${to}, 'accepted') on conflict do nothing`;
      return 'accepted' as const;
    }
    await this.sql`insert into kw_friends (user_id, friend_id, status) values (${from}, ${to}, 'pending') on conflict do nothing`;
    return 'requested' as const;
  }
  async acceptFriend(userId: string, fromId: string) {
    const r = await this.sql`update kw_friends set status = 'accepted' where user_id = ${fromId} and friend_id = ${userId} and status = 'pending' returning 1`;
    if (!r.length) return false;
    await this.sql`insert into kw_friends (user_id, friend_id, status) values (${userId}, ${fromId}, 'accepted') on conflict (user_id, friend_id) do update set status = 'accepted'`;
    return true;
  }
  async removeFriend(userId: string, otherId: string) {
    await this.sql`delete from kw_friends where (user_id = ${userId} and friend_id = ${otherId}) or (user_id = ${otherId} and friend_id = ${userId})`;
  }
  async close() { await this.sql.end({ timeout: 5 }); }
}
