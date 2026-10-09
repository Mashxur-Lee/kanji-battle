import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { Level, Role } from '../../shared/protocol';
import { legacyXpToCurrent, type BackgroundId } from '../../shared/progress';
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
  critCount: number; // spells learned today (daily crit)
  critExpires: number; // epoch ms of the player's next local midnight; after it the crit is back to 1%
  wins: number;
  losses: number;
  avatarV: number; // profile picture version (0 = none); the picture itself is stored separately
}
export interface AvatarImage { mime: 'image/png' | 'image/jpeg' | 'image/webp'; data: Buffer }
export type NewUser = Pick<UserRecord, 'username' | 'passwordHash' | 'role'>;
export type UserPatch = Partial<Pick<UserRecord, 'banned' | 'passwordHash' | 'background' | 'studyLevels' | 'lastNewDate' | 'newNotice' | 'critCount' | 'critExpires'>>;

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
  /** Per user: study-set size and learned (graduated) cards — for the admin page. */
  cardStats(): Promise<Record<string, { cards: number; learned: number }>>;
  /** Count a finished match (draws aren't counted). */
  addResult(id: string, outcome: 'win' | 'loss' | 'draw'): Promise<void>;
  /** Set or remove (null) the profile picture; returns the new version (0 = none). */
  setAvatar(id: string, img: AvatarImage | null): Promise<number>;
  getAvatar(id: string): Promise<AvatarImage | null>;
  learnedCount(userId: string): Promise<number>;
  close?(): Promise<void>;
}

export class UsernameTakenError extends Error {}

const blankProgress = () => ({ xp: 0, background: 'forest' as BackgroundId, studyLevels: [] as Level[], lastNewDate: null, newNotice: 0, critCount: 0, critExpires: 0, wins: 0, losses: 0, avatarV: 0 });

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
  protected avatars = new Map<string, AvatarImage>();
  async addResult(id: string, outcome: 'win' | 'loss' | 'draw') {
    const r = this.users.get(id);
    if (!r || outcome === 'draw') return;
    if (outcome === 'win') r.wins++; else r.losses++;
    this.persist();
  }
  async setAvatar(id: string, img: AvatarImage | null) {
    const r = this.users.get(id);
    if (!r) return 0;
    if (img) { this.avatars.set(id, img); r.avatarV = (r.avatarV || 0) + 1; } else { this.avatars.delete(id); r.avatarV = 0; }
    this.persist();
    return r.avatarV;
  }
  async getAvatar(id: string) { return this.avatars.get(id) ?? null; }
  async cardStats() {
    return Object.fromEntries([...this.srs].map(([uid, d]) => [uid, { cards: d.size, learned: [...d.values()].filter((c) => c.state === 'review').length }]));
  }
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
      const legacy = Array.isArray(data) || data.xpScheme !== 2; // saved before the steeper levels
      for (const r of users) this.users.set(r.id, { ...blankProgress(), ...r, xp: legacy ? legacyXpToCurrent(r.xp ?? 0) : r.xp ?? 0 });
      for (const [uid, a] of Object.entries((data.avatars ?? {}) as Record<string, { mime: AvatarImage['mime']; b64: string }>)) {
        this.avatars.set(uid, { mime: a.mime, data: Buffer.from(a.b64, 'base64') });
      }
      for (const [uid, cards] of Object.entries((data.srs ?? {}) as Record<string, SrsCard[]>)) {
        this.srs.set(uid, new Map(cards.map((c) => [c.vocabId, c])));
      }
    }
  }
  protected persist() {
    mkdirSync(path.dirname(this.file), { recursive: true });
    const tmp = `${this.file}.tmp`;
    const srs = Object.fromEntries([...this.srs].map(([uid, d]) => [uid, [...d.values()]]));
    const avatars = Object.fromEntries([...this.avatars].map(([uid, a]) => [uid, { mime: a.mime, b64: a.data.toString('base64') }]));
    writeFileSync(tmp, JSON.stringify({ xpScheme: 2, users: [...this.users.values()], srs, avatars }));
    renameSync(tmp, this.file); // atomic replace
  }
}
