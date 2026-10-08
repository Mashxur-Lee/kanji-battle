import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { Role } from '../../shared/protocol';

export interface UserRecord {
  id: string;
  username: string; // stored lower-case; unique
  passwordHash: string;
  role: Role;
  banned: boolean;
  createdAt: string;
}

/** Storage port. Swap the implementation without touching auth or game code. */
export interface UserStore {
  readonly name: string;
  findByUsername(username: string): Promise<UserRecord | null>;
  findById(id: string): Promise<UserRecord | null>;
  create(u: Omit<UserRecord, 'id' | 'createdAt'>): Promise<UserRecord>;
  list(): Promise<UserRecord[]>;
  setBanned(id: string, banned: boolean): Promise<UserRecord | null>;
  setPassword(id: string, passwordHash: string): Promise<void>;
}

export class UsernameTakenError extends Error {}

/** In-memory store (tests). */
export class MemoryUserStore implements UserStore {
  readonly name: string = 'memory';
  protected users = new Map<string, UserRecord>();

  async findByUsername(username: string) {
    const u = username.toLowerCase();
    for (const r of this.users.values()) if (r.username === u) return { ...r };
    return null;
  }
  async findById(id: string) { const r = this.users.get(id); return r ? { ...r } : null; }
  async create(u: Omit<UserRecord, 'id' | 'createdAt'>) {
    if (await this.findByUsername(u.username)) throw new UsernameTakenError();
    const rec: UserRecord = { ...u, username: u.username.toLowerCase(), id: randomUUID(), createdAt: new Date().toISOString() };
    this.users.set(rec.id, rec);
    this.persist();
    return { ...rec };
  }
  async list() { return [...this.users.values()].map((r) => ({ ...r })).sort((a, b) => a.createdAt.localeCompare(b.createdAt)); }
  async setBanned(id: string, banned: boolean) {
    const r = this.users.get(id);
    if (!r) return null;
    r.banned = banned;
    this.persist();
    return { ...r };
  }
  async setPassword(id: string, passwordHash: string) {
    const r = this.users.get(id);
    if (r) { r.passwordHash = passwordHash; this.persist(); }
  }
  protected persist() { /* memory only */ }
}

/**
 * JSON-file store. Fine for local play. NOTE: on Render's free plan the disk is wiped on every
 * deploy/restart — use SupabaseUserStore there (set SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY).
 */
export class FileUserStore extends MemoryUserStore {
  readonly name: string;
  constructor(private readonly file: string) {
    super();
    this.name = `file (${file})`;
    if (existsSync(file)) {
      for (const r of JSON.parse(readFileSync(file, 'utf8')) as UserRecord[]) this.users.set(r.id, r);
    }
  }
  protected persist() {
    mkdirSync(path.dirname(this.file), { recursive: true });
    const tmp = `${this.file}.tmp`;
    writeFileSync(tmp, JSON.stringify([...this.users.values()], null, 2));
    renameSync(tmp, this.file); // atomic replace
  }
}
