import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { Level, Role } from '../../shared/protocol';
import type { BackgroundId } from '../../shared/progress';
import type { SrsCard } from '../../shared/srs';

export interface UserRecord {
  id: string;
  username: string; // stored lower-case; unique
  passwordHash: string;
  role: Role;
  banned: boolean;
  createdAt: string;
  xp: number;
  background: BackgroundId;
  studyLevels: Level[]; // "All spells": which levels feed the daily new cards
  lastNewDate: string | null; // YYYY-MM-DD of the last daily batch
  newNotice: number; // new cards added that the player hasn't been told about yet
}
export type NewUser = Pick<UserRecord, 'username' | 'passwordHash' | 'role'>;
export type UserPatch = Partial<Pick<UserRecord, 'banned' | 'passwordHash' | 'background' | 'studyLevels' | 'lastNewDate' | 'newNotice'>>;

/** Storage port: users, progress and flashcards. Swap the implementation without touching the rest. */
export interface Store {
  readonly name: string;
  init(): Promise<void>;
  findByUsername(username: string): Promise<UserRecord | null>;
  findById(id: string): Promise<UserRecord | null>;
  create(u: NewUser): Promise<UserRecord>;
  list(): Promise<UserRecord[]>;
  update(id: string, patch: UserPatch): Promise<UserRecord | null>;
  addXp(id: string, delta: number): Promise<number>;
  cards(userId: string): Promise<SrsCard[]>;
  card(userId: string, vocabId: string): Promise<SrsCard | null>;
  saveCard(userId: string, card: SrsCard): Promise<void>;
  /** Insert cards that don't exist yet (existing ones are left alone). Returns how many were added. */
  addCards(userId: string, cards: SrsCard[]): Promise<number>;
  /** Flag words as struggling (creating new cards if needed). */
  markStruggling(userId: string, vocabIds: string[], now: number): Promise<void>;
  learnedCount(userId: string): Promise<number>;
  close?(): Promise<void>;
}

export class UsernameTakenError extends Error {}

const blankProgress = () => ({ xp: 0, background: 'forest' as BackgroundId, studyLevels: [] as Level[], lastNewDate: null, newNotice: 0 });

/** In-memory store (tests); FileStore persists the same data as JSON. */
export class MemoryStore implements Store {
  readonly name: string = 'memory';
  protected users = new Map<string, UserRecord>();
  protected srs = new Map<string, Map<string, SrsCard>>();

  async init() {}
  async findByUsername(username: string) {
    const u = username.toLowerCase();
    for (const r of this.users.values()) if (r.username === u) return { ...r };
    return null;
  }
  async findById(id: string) { const r = this.users.get(id); return r ? { ...r } : null; }
  async create(u: NewUser) {
    if (await this.findByUsername(u.username)) throw new UsernameTakenError();
    const rec: UserRecord = { ...blankProgress(), ...u, username: u.username.toLowerCase(), banned: false, id: randomUUID(), createdAt: new Date().toISOString() };
    this.users.set(rec.id, rec);
    this.persist();
    return { ...rec };
  }
  async list() { return [...this.users.values()].map((r) => ({ ...r })).sort((a, b) => a.createdAt.localeCompare(b.createdAt)); }
  async update(id: string, patch: UserPatch) {
    const r = this.users.get(id);
    if (!r) return null;
    Object.assign(r, patch);
    this.persist();
    return { ...r };
  }
  async addXp(id: string, delta: number) {
    const r = this.users.get(id);
    if (!r) return 0;
    r.xp = Math.max(0, r.xp + Math.round(delta));
    this.persist();
    return r.xp;
  }
  private deck(userId: string) {
    let d = this.srs.get(userId);
    if (!d) { d = new Map(); this.srs.set(userId, d); }
    return d;
  }
  async cards(userId: string) { return [...this.deck(userId).values()].map((c) => ({ ...c })); }
  async card(userId: string, vocabId: string) { const c = this.deck(userId).get(vocabId); return c ? { ...c } : null; }
  async saveCard(userId: string, card: SrsCard) { this.deck(userId).set(card.vocabId, { ...card }); this.persist(); }
  async addCards(userId: string, cards: SrsCard[]) {
    const d = this.deck(userId);
    let n = 0;
    for (const c of cards) if (!d.has(c.vocabId)) { d.set(c.vocabId, { ...c }); n++; }
    this.persist();
    return n;
  }
  async markStruggling(userId: string, vocabIds: string[], now: number) {
    const d = this.deck(userId);
    for (const id of vocabIds) {
      const c = d.get(id);
      if (c) { c.struggling = true; c.due = Math.min(c.due, now); } // missed in battle → review it now
      else d.set(id, { vocabId: id, state: 'new', step: 0, ease: 2500, intervalDays: 0, due: now, reps: 0, lapses: 0, struggling: true });
    }
    this.persist();
  }
  async learnedCount(userId: string) { return [...this.deck(userId).values()].filter((c) => c.state === 'review').length; }
  protected persist() { /* memory only */ }
}

/** JSON-file store for local play. On Render's free plan the disk is wiped — use Postgres (Neon) there. */
export class FileStore extends MemoryStore {
  readonly name: string;
  constructor(private readonly file: string) {
    super();
    this.name = `file (${file})`;
    if (existsSync(file)) {
      const data = JSON.parse(readFileSync(file, 'utf8'));
      const users: UserRecord[] = Array.isArray(data) ? data : data.users; // older files were a plain user array
      for (const r of users) this.users.set(r.id, { ...blankProgress(), ...r });
      for (const [uid, cards] of Object.entries((data.srs ?? {}) as Record<string, SrsCard[]>)) {
        this.srs.set(uid, new Map(cards.map((c) => [c.vocabId, c])));
      }
    }
  }
  protected persist() {
    mkdirSync(path.dirname(this.file), { recursive: true });
    const tmp = `${this.file}.tmp`;
    const srs = Object.fromEntries([...this.srs].map(([uid, d]) => [uid, [...d.values()]]));
    writeFileSync(tmp, JSON.stringify({ users: [...this.users.values()], srs }));
    renameSync(tmp, this.file); // atomic replace
  }
}
