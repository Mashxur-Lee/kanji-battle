import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { Level, MatchDetail, MatchSummary, Role } from '../../shared/protocol';
import { legacyXpToCurrent, type BackgroundId, type FlameId, type StaffId } from '../../shared/progress';
import { deckOf, type CustomWord, type DeckId, type SrsCard } from '../../shared/srs';

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
  streak: number; // days in a row with all daily tasks done (0.9.9.3; before: with a login)
  streakDay: string | null; // the last day the daily tasks were all done
  border: string; // avatar border (Customize → Profile)
  bestStreak: number;
  dailyNew: number; // new words a day in "All spells" (10–150)
  newToday: number; // how many were added on lastNewDate
  badges: string[]; // up to 3 achievement ids shown under your name
}
export interface AvatarImage { mime: 'image/png' | 'image/jpeg' | 'image/webp'; data: Buffer }
export type NewUser = Pick<UserRecord, 'username' | 'passwordHash' | 'role'>;
export type UserPatch = Partial<Pick<UserRecord, 'banned' | 'passwordHash' | 'background' | 'studyLevels' | 'lastNewDate' | 'newNotice' | 'critCount' | 'critExpires' | 'flame' | 'staff' | 'tutorialDone' | 'unlocks' | 'loginDay' | 'streak' | 'streakDay' | 'border' | 'bestStreak' | 'role' | 'dailyNew' | 'newToday' | 'badges'>>;

/** Storage port: users, progress and flashcards. Swap the implementation without touching the rest. */
export interface Store {
  readonly name: string;
  init(): Promise<void>;
  findByUsername(username: string): Promise<UserRecord | null>;
  findById(id: string): Promise<UserRecord | null>;
  create(u: NewUser): Promise<UserRecord>;
  list(): Promise<UserRecord[]>;
  update(id: string, patch: UserPatch): Promise<UserRecord | null>;
  /** Delete an account and everything of it (cards, picture, history, friends …). */
  deleteUser(id: string): Promise<boolean>;
  addXp(id: string, delta: number): Promise<number>;
  /** Every card in every deck (each has `deck`). */
  cards(userId: string): Promise<SrsCard[]>;
  card(userId: string, deck: DeckId, vocabId: string): Promise<SrsCard | null>;
  saveCard(userId: string, card: SrsCard): Promise<void>;
  /** Insert cards that don't exist yet in their deck (existing ones are left alone). Returns the vocab ids added. */
  addCards(userId: string, cards: SrsCard[]): Promise<string[]>;
  removeCards(userId: string, deck: DeckId, vocabIds: string[]): Promise<number>;
  /** Missed words go to "Struggling spells" (new cards; ones already there are due again). Returns the ids that were new there. */
  markStruggling(userId: string, vocabIds: string[], now: number): Promise<string[]>;
  customWords(userId: string): Promise<CustomWord[]>;
  addCustomWord(userId: string, w: CustomWord): Promise<void>;
  deleteCustomWord(userId: string, id: string): Promise<void>;
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
  /** marks: one character per word, '1' right / '0' wrong (shown on the result) */
  saveDaily(day: string, userId: string, correct: number, ms: number, marks?: string): Promise<boolean>;
  daily(day: string, userId: string): Promise<{ correct: number; ms: number; marks?: string } | null>;
  /** Best first: most correct, then fastest. */
  dailyBoard(day: string, limit: number): Promise<DailyResult[]>;
  /** How many results beat this one (rank = that + 1). */
  dailyBetter(day: string, correct: number, ms: number): Promise<number>;
  friends(userId: string): Promise<FriendLink[]>;
  /** A request from → to. If `to` had already asked `from`, they become friends at once. */
  requestFriend(from: string, to: string): Promise<'requested' | 'accepted' | 'exists'>;
  acceptFriend(userId: string, fromId: string): Promise<boolean>;
  removeFriend(userId: string, otherId: string): Promise<void>;
  /** Bug reports and suggestions from players, and errors from the game (admin → Inbox). */
  addReport(r: Omit<Report, 'id' | 'done'>): Promise<void>;
  reports(limit: number): Promise<Report[]>;
  setReportDone(id: string, done: boolean): Promise<void>;
  deleteReport(id: string): Promise<void>;
  /** Measurement: one row per event (tutorial steps, games started / finished …). */
  addEvent(userId: string | null, name: string, at?: number): Promise<void>;
  events(since: number): Promise<GameEventRow[]>;
  /** Everyone's sign-up day and the days they were active (admin → Stats: retention). */
  activityAll(fromDay: string): Promise<Array<{ userId: string; day: string; games: number }>>;
  close?(): Promise<void>;
}

export type ReportKind = 'bug' | 'suggestion' | 'error';
export interface Report { id: string; kind: ReportKind; userId: string | null; username: string; text: string; meta: string; at: number; done: boolean }
export interface GameEventRow { userId: string | null; name: string; at: number }
export const REPORTS_KEPT = 500; // the newest; errors beyond that are dropped

export class UsernameTakenError extends Error {}

/** One player's activity on one of their local days (progress page, monthly goals). */
export interface DayActivity { day: string; login: boolean; reviews: number; games: number; wins: number; xp: number; quizzes: number; challenges: number; passages: number }
export type ActivityDelta = Partial<Omit<DayActivity, 'day'>>;
/** A daily-challenge result. */
export interface DailyResult { userId: string; username: string; correct: number; ms: number }
/** Friends: accepted both ways; a request is 'outgoing' for the sender and 'incoming' for the other player. */
export interface FriendLink { id: string; username: string; status: 'accepted' | 'incoming' | 'outgoing' }

export const MATCH_HISTORY_LIMIT = 15; // older games are deleted

/** 0.9.9.4: one player's data for the app's offline engine (GET /api/sync/snapshot). */
export const SNAPSHOT_V = 1;
export interface Snapshot {
  v: number; at: number; user: UserRecord; cards: SrsCard[]; custom: CustomWord[]; matches: MatchDetail[]; activity: DayActivity[];
  /** today's daily challenge (UTC day) and your result, if you played it */
  daily: { day: string; result: { correct: number; ms: number; marks?: string } | null } | null;
}
const summaryOf = (m: MatchDetail): MatchSummary => ({ id: m.id, mode: m.mode, outcome: m.outcome, character: m.character, at: m.at, opponents: m.opponents });

const blankProgress = () => ({ dailyNew: 25, newToday: 0, badges: [] as string[], xp: 0, background: 'forest' as BackgroundId, studyLevels: [] as Level[], lastNewDate: null, newNotice: 0, critCount: 0, critExpires: 0, wins: 0, losses: 0, avatarV: 0, flame: 'blue' as FlameId, staff: 'verdant' as StaffId, tutorialDone: true, unlocks: [] as string[], loginDay: null as string | null, streak: 0, streakDay: null as string | null, border: 'none', bestStreak: 0 });

/** In-memory store (tests); FileStore persists the same data as JSON. */
export class MemoryStore implements Store {
  readonly name: string = 'memory';
  protected users = new Map<string, UserRecord>();
  protected srs = new Map<string, Map<string, SrsCard>>(); // user → "deck|vocabId" → card
  protected custom = new Map<string, CustomWord[]>();

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
  async deleteUser(id: string) {
    if (!this.users.delete(id)) return false;
    this.srs.delete(id); this.custom.delete(id); this.avatars.delete(id); this.history.delete(id); this.activityLog.delete(id);
    for (const m of this.dailyResults.values()) m.delete(id);
    this.friendLinks.delete(id);
    for (const m of this.friendLinks.values()) m.delete(id);
    this.persist();
    return true;
  }
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
  async cards(userId: string) { return [...this.deck(userId).values()].map((c) => ({ ...c, deck: deckOf(c) })); }
  async card(userId: string, deck: DeckId, vocabId: string) { const c = this.deck(userId).get(`${deck}|${vocabId}`); return c ? { ...c, deck } : null; }
  async saveCard(userId: string, card: SrsCard) { const deck = deckOf(card); this.deck(userId).set(`${deck}|${card.vocabId}`, { ...card, deck, struggling: deck === 'struggling' }); this.persist(); }
  async addCards(userId: string, cards: SrsCard[]) {
    const d = this.deck(userId);
    const added: string[] = [];
    for (const c of cards) {
      const deck = deckOf(c), key = `${deck}|${c.vocabId}`;
      if (!d.has(key)) { d.set(key, { ...c, deck, struggling: deck === 'struggling' }); added.push(c.vocabId); }
    }
    this.persist();
    return added;
  }
  async removeCards(userId: string, deck: DeckId, vocabIds: string[]) {
    const d = this.deck(userId);
    let n = 0;
    for (const id of vocabIds) if (d.delete(`${deck}|${id}`)) n++;
    this.persist();
    return n;
  }
  async markStruggling(userId: string, vocabIds: string[], now: number) {
    const d = this.deck(userId);
    const added: string[] = [];
    for (const id of new Set(vocabIds)) {
      const c = d.get(`struggling|${id}`);
      if (c) c.due = Math.min(c.due, now); // missed again → review it now
      else { d.set(`struggling|${id}`, { vocabId: id, deck: 'struggling', addedAt: now, state: 'new', step: 0, ease: 2500, intervalDays: 0, due: now, reps: 0, lapses: 0, struggling: true }); added.push(id); }
    }
    this.persist();
    return added;
  }
  async customWords(userId: string) { return (this.custom.get(userId) ?? []).map((w) => ({ ...w })); }
  async addCustomWord(userId: string, w: CustomWord) { this.custom.set(userId, [...(this.custom.get(userId) ?? []).filter((x) => x.id !== w.id), { ...w }]); this.persist(); }
  async deleteCustomWord(userId: string, id: string) { this.custom.set(userId, (this.custom.get(userId) ?? []).filter((x) => x.id !== id)); this.persist(); }
  /** Learned = words that graduated to review in any deck (a word counts once). */
  async learnedCount(userId: string) { return new Set([...this.deck(userId).values()].filter((c) => c.state === 'review').map((c) => c.vocabId)).size; }
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
    return Object.fromEntries([...this.srs].map(([uid, d]) => [uid, { cards: d.size, learned: new Set([...d.values()].filter((c) => c.state === 'review').map((c) => c.vocabId)).size }]));
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
    const a = log.get(day) ?? { day, login: false, reviews: 0, games: 0, wins: 0, xp: 0, quizzes: 0, challenges: 0, passages: 0 };
    if (d.login) a.login = true;
    a.reviews += d.reviews ?? 0; a.games += d.games ?? 0; a.wins += d.wins ?? 0; a.xp += d.xp ?? 0;
    a.quizzes = (a.quizzes ?? 0) + (d.quizzes ?? 0); a.challenges = (a.challenges ?? 0) + (d.challenges ?? 0); a.passages = (a.passages ?? 0) + (d.passages ?? 0);
    log.set(day, a);
    this.persist();
  }
  async activity(userId: string, fromDay: string) {
    return [...(this.activityLog.get(userId)?.values() ?? [])].filter((a) => a.day >= fromDay).sort((a, b) => a.day.localeCompare(b.day)).map((a) => ({ ...a }));
  }
  protected dailyResults = new Map<string, Map<string, { correct: number; ms: number; marks?: string }>>();
  async saveDaily(day: string, userId: string, correct: number, ms: number, marks = '') {
    const d = this.dailyResults.get(day) ?? new Map();
    this.dailyResults.set(day, d);
    if (d.has(userId)) return false;
    d.set(userId, { correct, ms, marks });
    this.persist();
    return true;
  }
  async daily(day: string, userId: string) { const r = this.dailyResults.get(day)?.get(userId); return r ? { ...r } : null; }
  async dailyBoard(day: string, limit: number) {
    return [...(this.dailyResults.get(day) ?? new Map<string, { correct: number; ms: number }>())]
      .map(([userId, r]) => ({ userId, username: this.users.get(userId)?.username ?? '?', correct: r.correct, ms: r.ms }))
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
  protected reportList: Report[] = [];
  async addReport(r: Omit<Report, 'id' | 'done'>) {
    this.reportList.unshift({ ...r, id: randomUUID(), done: false });
    this.reportList.length = Math.min(this.reportList.length, REPORTS_KEPT);
    this.persist();
  }
  async reports(limit: number) { return this.reportList.slice(0, limit).map((r) => ({ ...r })); }
  async setReportDone(id: string, done: boolean) { const r = this.reportList.find((x) => x.id === id); if (r) { r.done = done; this.persist(); } }
  async deleteReport(id: string) { this.reportList = this.reportList.filter((x) => x.id !== id); this.persist(); }
  protected eventLog: GameEventRow[] = [];
  async addEvent(userId: string | null, name: string, at = Date.now()) { this.eventLog.push({ userId, name, at }); if (this.eventLog.length > 50_000) this.eventLog.splice(0, 10_000); this.persist(); }
  async events(since: number) { return this.eventLog.filter((e) => e.at >= since).map((e) => ({ ...e })); }
  async activityAll(fromDay: string) {
    const out: Array<{ userId: string; day: string; games: number }> = [];
    for (const [userId, days] of this.activityLog) for (const a of days.values()) if (a.day >= fromDay) out.push({ userId, day: a.day, games: a.games });
    return out;
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
      for (const [uid, list] of Object.entries((data.matches ?? {}) as Record<string, MatchDetail[]>)) this.history.set(uid, list);
      for (const [uid, days] of Object.entries((data.activity ?? {}) as Record<string, DayActivity[]>)) this.activityLog.set(uid, new Map(days.map((a) => [a.day, a])));
      for (const [day, rows] of Object.entries((data.daily ?? {}) as Record<string, Record<string, { correct: number; ms: number }>>)) this.dailyResults.set(day, new Map(Object.entries(rows)));
      for (const [from, links] of Object.entries((data.friends ?? {}) as Record<string, Record<string, 'pending' | 'accepted'>>)) this.friendLinks.set(from, new Map(Object.entries(links)));
      this.reportList = (data.reports ?? []) as Report[];
      this.eventLog = (data.events ?? []) as GameEventRow[];
      for (const [uid, cards] of Object.entries((data.srs ?? {}) as Record<string, SrsCard[]>)) {
        const m = new Map<string, SrsCard>();
        for (const c of cards) {
          if (c.deck) { m.set(`${c.deck}|${c.vocabId}`, c); continue; }
          // saved before 0.9.9 (one card per word, struggling = a flag): the card stays in All spells and a
          // struggling word also gets its own card in Struggling spells
          m.set(`all|${c.vocabId}`, { ...c, deck: 'all', struggling: false });
          if (c.struggling) m.set(`struggling|${c.vocabId}`, { ...c, deck: 'struggling' });
        }
        this.srs.set(uid, m);
      }
      for (const [uid, words] of Object.entries((data.custom ?? {}) as Record<string, CustomWord[]>)) this.custom.set(uid, words);
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
    writeFileSync(tmp, JSON.stringify({ xpScheme: 2, users: [...this.users.values()], srs, avatars, matches: Object.fromEntries(this.history), activity, daily, friends, reports: this.reportList, events: this.eventLog, custom: Object.fromEntries(this.custom) }));
    renameSync(tmp, this.file); // atomic replace
  }
}
