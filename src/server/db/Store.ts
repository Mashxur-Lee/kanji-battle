import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { Level, MatchDetail, MatchSummary, Role } from '../../shared/protocol';
import { legacyXpToCurrent, type BackgroundId, type FlameId, type StaffId } from '../../shared/progress';
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
  flame: FlameId; // colour of your combo flames
  staff: StaffId; // magic staff skin
  tutorialDone: boolean; // new players get the first-run tutorial (accounts from before 0.9.6: true)
  unlocks: string[]; // seasonal rewards earned (monthly goals), e.g. 'flame:harvest'
  loginDay: string | null; // YYYY-MM-DD (the player's local date) of the last day they played
  streak: number; // days in a row with a login
  bestStreak: number;
}
export interface AvatarImage { mime: 'image/png' | 'image/jpeg' | 'image/webp'; data: Buffer }
export type NewUser = Pick<UserRecord, 'username' | 'passwordHash' | 'role'>;
export type UserPatch = Partial<Pick<UserRecord, 'banned' | 'passwordHash' | 'background' | 'studyLevels' | 'lastNewDate' | 'newNotice' | 'critCount' | 'critExpires' | 'flame' | 'staff' | 'tutorialDone' | 'unlocks' | 'loginDay' | 'streak' | 'bestStreak'>>;

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
  /** Match history (the newest MATCH_HISTORY_LIMIT are kept per player). */
  addMatch(userId: string, m: Omit<MatchDetail, 'id'>): Promise<void>;
  matches(userId: string, limit: number): Promise<MatchSummary[]>;
  match(userId: string, id: string): Promise<MatchDetail | null>;
  /** Daily activity: add to today's counters (login is set, the numbers are added). */
  addActivity(userId: string, day: string, delta: ActivityDelta): Promise<void>;
  activity(userId: string, fromDay: string): Promise<DayActivity[]>;
  /** Daily challenge: one result per player per day (false if they already have one). */
  saveDaily(day: string, userId: string, correct: number, ms: number): Promise<boolean>;
  daily(day: string, userId: string): Promise<{ correct: number; ms: number } | null>;
  /** Best first: most correct, then fastest. */
  dailyBoard(day: string, limit: number): Promise<DailyResult[]>;
  /** How many results beat this one (rank = that + 1). */
  dailyBetter(day: string, correct: number, ms: number): Promise<number>;
  friends(userId: string): Promise<FriendLink[]>;
  /** A request from → to. If `to` had already asked `from`, they become friends at once. */
  requestFriend(from: string, to: string): Promise<'requested' | 'accepted' | 'exists'>;
  acceptFriend(userId: string, fromId: string): Promise<boolean>;
  removeFriend(userId: string, otherId: string): Promise<void>;
  close?(): Promise<void>;
}

export class UsernameTakenError extends Error {}

/** One player's activity on one of their local days (progress page, monthly goals). */
export interface DayActivity { day: string; login: boolean; reviews: number; games: number; wins: number; xp: number }
export type ActivityDelta = Partial<Omit<DayActivity, 'day'>>;
/** A daily-challenge result. */
export interface DailyResult { userId: string; username: string; correct: number; ms: number }
/** Friends: accepted both ways; a request is 'outgoing' for the sender and 'incoming' for the other player. */
export interface FriendLink { id: string; username: string; status: 'accepted' | 'incoming' | 'outgoing' }

export const MATCH_HISTORY_LIMIT = 15; // older games are deleted
const summaryOf = (m: MatchDetail): MatchSummary => ({ id: m.id, mode: m.mode, outcome: m.outcome, character: m.character, at: m.at, opponents: m.opponents });

const blankProgress = () => ({ xp: 0, background: 'forest' as BackgroundId, studyLevels: [] as Level[], lastNewDate: null, newNotice: 0, critCount: 0, critExpires: 0, wins: 0, losses: 0, avatarV: 0, flame: 'blue' as FlameId, staff: 'verdant' as StaffId, tutorialDone: true, unlocks: [] as string[], loginDay: null as string | null, streak: 0, bestStreak: 0 });

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
    const rec: UserRecord = { ...blankProgress(), tutorialDone: false, ...u, username: u.username.toLowerCase(), banned: false, id: randomUUID(), createdAt: new Date().toISOString() };
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
  protected history = new Map<string, MatchDetail[]>();
  private nextMatch = 1;
  async addMatch(userId: string, m: Omit<MatchDetail, 'id'>) {
    const list = this.history.get(userId) ?? [];
    list.unshift({ ...m, id: `${Date.now().toString(36)}${(this.nextMatch++).toString(36)}` });
    this.history.set(userId, list.slice(0, MATCH_HISTORY_LIMIT));
    this.persist();
  }
  async matches(userId: string, limit: number) { return (this.history.get(userId) ?? []).slice(0, limit).map(summaryOf); }
  async match(userId: string, id: string) { return (this.history.get(userId) ?? []).find((m) => m.id === id) ?? null; }
  protected activityLog = new Map<string, Map<string, DayActivity>>();
  async addActivity(userId: string, day: string, d: ActivityDelta) {
    const log = this.activityLog.get(userId) ?? new Map<string, DayActivity>();
    this.activityLog.set(userId, log);
    const a = log.get(day) ?? { day, login: false, reviews: 0, games: 0, wins: 0, xp: 0 };
    if (d.login) a.login = true;
    a.reviews += d.reviews ?? 0; a.games += d.games ?? 0; a.wins += d.wins ?? 0; a.xp += d.xp ?? 0;
    log.set(day, a);
    this.persist();
  }
  async activity(userId: string, fromDay: string) {
    return [...(this.activityLog.get(userId)?.values() ?? [])].filter((a) => a.day >= fromDay).sort((a, b) => a.day.localeCompare(b.day)).map((a) => ({ ...a }));
  }
  protected dailyResults = new Map<string, Map<string, { correct: number; ms: number }>>();
  async saveDaily(day: string, userId: string, correct: number, ms: number) {
    const d = this.dailyResults.get(day) ?? new Map();
    this.dailyResults.set(day, d);
    if (d.has(userId)) return false;
    d.set(userId, { correct, ms });
    this.persist();
    return true;
  }
  async daily(day: string, userId: string) { const r = this.dailyResults.get(day)?.get(userId); return r ? { ...r } : null; }
  async dailyBoard(day: string, limit: number) {
    return [...(this.dailyResults.get(day) ?? new Map<string, { correct: number; ms: number }>())]
      .map(([userId, r]) => ({ userId, username: this.users.get(userId)?.username ?? '?', ...r }))
      .sort((a, b) => b.correct - a.correct || a.ms - b.ms).slice(0, limit);
  }
  async dailyBetter(day: string, correct: number, ms: number) {
    return [...(this.dailyResults.get(day)?.values() ?? [])].filter((r) => r.correct > correct || (r.correct === correct && r.ms < ms)).length;
  }
  protected friendLinks = new Map<string, Map<string, 'pending' | 'accepted'>>(); // from → to → status
  private link(a: string, b: string) { return this.friendLinks.get(a)?.get(b); }
  private setLink(a: string, b: string, s: 'pending' | 'accepted' | null) {
    const m = this.friendLinks.get(a) ?? new Map();
    this.friendLinks.set(a, m);
    if (s) m.set(b, s); else m.delete(b);
  }
  async friends(userId: string) {
    const out: FriendLink[] = [];
    for (const [to, s] of this.friendLinks.get(userId) ?? []) {
      const u = this.users.get(to);
      if (u) out.push({ id: to, username: u.username, status: s === 'accepted' ? 'accepted' : 'outgoing' });
    }
    for (const [from, m] of this.friendLinks) {
      const u = this.users.get(from);
      if (u && m.get(userId) === 'pending') out.push({ id: from, username: u.username, status: 'incoming' });
    }
    return out.sort((a, b) => a.username.localeCompare(b.username));
  }
  async requestFriend(from: string, to: string) {
    if (this.link(from, to)) return 'exists' as const;
    if (this.link(to, from) === 'pending') { this.setLink(to, from, 'accepted'); this.setLink(from, to, 'accepted'); this.persist(); return 'accepted' as const; }
    this.setLink(from, to, 'pending'); this.persist();
    return 'requested' as const;
  }
  async acceptFriend(userId: string, fromId: string) {
    if (this.link(fromId, userId) !== 'pending') return false;
    this.setLink(fromId, userId, 'accepted'); this.setLink(userId, fromId, 'accepted'); this.persist();
    return true;
  }
  async removeFriend(userId: string, otherId: string) { this.setLink(userId, otherId, null); this.setLink(otherId, userId, null); this.persist(); }
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
      for (const [uid, list] of Object.entries((data.matches ?? {}) as Record<string, MatchDetail[]>)) this.history.set(uid, list);
      for (const [uid, days] of Object.entries((data.activity ?? {}) as Record<string, DayActivity[]>)) this.activityLog.set(uid, new Map(days.map((a) => [a.day, a])));
      for (const [day, rows] of Object.entries((data.daily ?? {}) as Record<string, Record<string, { correct: number; ms: number }>>)) this.dailyResults.set(day, new Map(Object.entries(rows)));
      for (const [from, links] of Object.entries((data.friends ?? {}) as Record<string, Record<string, 'pending' | 'accepted'>>)) this.friendLinks.set(from, new Map(Object.entries(links)));
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
    const activity = Object.fromEntries([...this.activityLog].map(([uid, m]) => [uid, [...m.values()]]));
    const daily = Object.fromEntries([...this.dailyResults].map(([day, m]) => [day, Object.fromEntries(m)]));
    const friends = Object.fromEntries([...this.friendLinks].map(([uid, m]) => [uid, Object.fromEntries(m)]));
    writeFileSync(tmp, JSON.stringify({ xpScheme: 2, users: [...this.users.values()], srs, avatars, matches: Object.fromEntries(this.history), activity, daily, friends }));
    renameSync(tmp, this.file); // atomic replace
  }
}
