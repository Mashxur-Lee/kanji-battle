import type { Role } from '../../shared/protocol';
import { UsernameTakenError, type UserRecord, type UserStore } from './UserStore';

/**
 * Users in a Supabase (hosted Postgres) table via its REST API — no extra npm packages.
 * Create the table once in Supabase → SQL editor (see README "Accounts on Render").
 * Uses the service-role key, so it must only ever live in server environment variables.
 */
interface Row { id: string; username: string; password_hash: string; role: Role; banned: boolean; created_at: string }
const toRecord = (r: Row): UserRecord => ({
  id: r.id, username: r.username, passwordHash: r.password_hash, role: r.role, banned: r.banned, createdAt: r.created_at,
});

export class SupabaseUserStore implements UserStore {
  readonly name = 'supabase';
  private readonly base: string;

  constructor(url: string, private readonly key: string, private readonly fetchImpl: typeof fetch = fetch) {
    this.base = `${url.replace(/\/$/, '')}/rest/v1/kb_users`;
  }

  private async req(query: string, init: RequestInit = {}): Promise<Row[]> {
    const res = await this.fetchImpl(`${this.base}${query}`, {
      ...init,
      headers: {
        apikey: this.key,
        Authorization: `Bearer ${this.key}`,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
        ...(init.headers ?? {}),
      },
    });
    if (res.status === 409) throw new UsernameTakenError();
    if (!res.ok) throw new Error(`Supabase ${res.status}: ${await res.text()}`);
    const text = await res.text();
    return text ? (JSON.parse(text) as Row[]) : [];
  }

  async findByUsername(username: string) {
    const rows = await this.req(`?username=eq.${encodeURIComponent(username.toLowerCase())}&limit=1`);
    return rows[0] ? toRecord(rows[0]) : null;
  }
  async findById(id: string) {
    const rows = await this.req(`?id=eq.${encodeURIComponent(id)}&limit=1`);
    return rows[0] ? toRecord(rows[0]) : null;
  }
  async create(u: Omit<UserRecord, 'id' | 'createdAt'>) {
    const rows = await this.req('', {
      method: 'POST',
      body: JSON.stringify({ username: u.username.toLowerCase(), password_hash: u.passwordHash, role: u.role, banned: u.banned }),
    });
    return toRecord(rows[0]);
  }
  async list() { return (await this.req('?order=created_at.asc')).map(toRecord); }
  async setBanned(id: string, banned: boolean) {
    const rows = await this.req(`?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify({ banned }) });
    return rows[0] ? toRecord(rows[0]) : null;
  }
  async setPassword(id: string, passwordHash: string) {
    await this.req(`?id=eq.${encodeURIComponent(id)}`, { method: 'PATCH', body: JSON.stringify({ password_hash: passwordHash }) });
  }
}

export const SUPABASE_SCHEMA_SQL = `create table if not exists kb_users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  password_hash text not null,
  role text not null default 'user' check (role in ('user', 'admin')),
  banned boolean not null default false,
  created_at timestamptz not null default now()
);
alter table kb_users enable row level security; -- only the server (service-role key) can read/write`;
