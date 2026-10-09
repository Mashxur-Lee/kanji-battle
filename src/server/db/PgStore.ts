import postgres from 'postgres';
import type { Level, Role } from '../../shared/protocol';
import type { BackgroundId } from '../../shared/progress';
import type { CardState, SrsCard } from '../../shared/srs';
import { UsernameTakenError, type AvatarImage, type NewUser, type Store, type UserPatch, type UserRecord } from './Store';

/**
 * Postgres store (Neon, or any Postgres). Set DATABASE_URL. Tables are created on first start.
 * Uses postgres.js (zero dependencies); all queries are parameterised by the tagged template.
 */
interface UserRow {
  id: string; username: string; password_hash: string; role: Role; banned: boolean; created_at: Date;
  xp: number; background: BackgroundId; study_levels: Level[]; last_new_date: string | null; new_notice: number;
  crit_count: number; crit_expires: string | number; wins: number; losses: number; avatar_v: number;
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
  wins: r.wins ?? 0, losses: r.losses ?? 0, avatarV: r.avatar_v ?? 0,
});
const toCard = (r: CardRow): SrsCard => ({
  vocabId: r.vocab_id, state: r.state, step: r.step, ease: r.ease, intervalDays: r.interval_days,
  due: Number(r.due), reps: r.reps, lapses: r.lapses, struggling: r.struggling, critDay: r.crit_day ?? null,
});

const COLUMNS: Record<keyof UserPatch, string> = {
  banned: 'banned', passwordHash: 'password_hash', background: 'background',
  studyLevels: 'study_levels', lastNewDate: 'last_new_date', newNotice: 'new_notice',
  critCount: 'crit_count', critExpires: 'crit_expires',
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
        insert into kw_users (username, password_hash, role, xp_scheme) values (${u.username.toLowerCase()}, ${u.passwordHash}, ${u.role}, 2)
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
  async close() { await this.sql.end({ timeout: 5 }); }
}
