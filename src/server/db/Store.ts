import type { KanaProgress } from '../../shared/kanachart';
import type { QuizStats } from '../../shared/quizstats';
import { randomUUID } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import type { Level, MatchDetail, MatchSummary, Role } from '../../shared/protocol';
import { legacyXpToCurrent, type BackgroundId, type FlameId, type StaffId } from '../../shared/progress';
import { deckOf, type CustomWord, type DeckId, type SrsCard } from '../../shared/srs';

/** 0.9.9.9.9.5: a replay saved to an account (shown in match history's Saved tab) */
export interface SavedReplay { id: string; savedAt: number; at: number; mode: string; label: string }

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
  /** 0.9.9.5: words you starred (★) — the reading passage puts them in first */
  starred?: string[];
  /** 0.9.9.9.5: the Kana section — stars and mastery per hiragana / katakana */
  kana?: KanaProgress;
  /** 0.9.9.9.5.5: the Quizzes screen's records (best / last / plays / times), the same on every device */
  quizStats?: QuizStats;
  /** 0.9.9.9.5: the Android app's push tokens (Firebase) — friends' invites reach the phone while the app is closed */
  pushTokens?: string[];
  /** 0.9.9.6: the name others see (null: the login) */
  nickname?: string | null;
  /** 0.9.9.9: when they were last connected (epoch ms; friends see "last online …") */
  lastSeen?: number | null;
  /** 0.9.9.9.6.6: the account's email (lower case) and its mailbox key (one account per key — auth/email.ts) */
  email?: string | null;
  emailKey?: string | null;
  /** 0.9.9.4.4: new words a day per level (All spells), and how many of each were added on `day` */
  dailyPlan: DailyPlan | null;
  /** 0.9.9.9.9: the ranked ladder — the rating (1000 to start) and how many ranked matches were played */
  rating?: number;
  rated?: number;
}
export interface DailyPlan { per: Partial<Record<Level, number>>; day: string | null; done: Partial<Record<Level, number>> }
export interface AvatarImage { mime: 'image/png' | 'image/jpeg' | 'image/webp'; data: Buffer }
export type NewUser = Pick<UserRecord, 'username' | 'passwordHash' | 'role'> & { email?: string | null; emailKey?: string | null };
export type UserPatch = Partial<Pick<UserRecord, 'banned' | 'passwordHash' | 'background' | 'studyLevels' | 'lastNewDate' | 'newNotice' | 'critCount' | 'critExpires' | 'flame' | 'staff' | 'tutorialDone' | 'unlocks' | 'loginDay' | 'streak' | 'streakDay' | 'border' | 'bestStreak' | 'role' | 'dailyNew' | 'newToday' | 'badges' | 'dailyPlan' | 'starred' | 'nickname' | 'lastSeen' | 'kana' | 'pushTokens' | 'quizStats' | 'wins' | 'losses' | 'email' | 'emailKey' | 'username' | 'rating' | 'rated'>>;

/** Storage port: users, progress and flashcards. Swap the implementation without touching the rest. */
export interface Store {
  readonly name: string;
  init(): Promise<void>;
  findByUsername(username: string): Promise<UserRecord | null>;
  /** 0.9.9.9.6.6: the account with this mailbox key */
  findByEmailKey(key: string): Promise<UserRecord | null>;
  findById(id: string): Promise<UserRecord | null>;
  create(u: NewUser): Promise<UserRecord>;
  list(): Promise<UserRecord[]>;
  /** 0.9.9.9.5: the accounts that have this phone's push token (one phone signs in as one account at a time) */
  usersWithPushToken?(token: string): Promise<UserRecord[]>;
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
  /**
   * 0.9.9.9.7.3: the lifetime totals the achievements are checked against, added up by the store — every profile loaded
   * the player's whole activity history, every card and every friend to count them
   */
  achStats(userId: string, masteredDays: number): Promise<AchStats>;
  /** 0.9.9.9.7.3: how many played (it fetched the whole board — up to 100,000 rows — to count them) */
  dailyCount(day: string): Promise<number>;
  /** 0.9.9.9.7.3: these players' results, in one go (the friends' race asked once per friend) */
  dailyOf(day: string, userIds: string[]): Promise<Map<string, { correct: number; ms: number; marks?: string }>>;
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
  /** 0.9.9.9.6: the messenger — direct messages between players, and with the team (SUPPORT) */
  addMessage(m: Omit<DirectMessage, 'id' | 'readAt'>): Promise<DirectMessage>;
  /** the newest `limit` between a and b (before `before`), oldest first */
  messagesBetween(a: string, b: string, limit: number, before?: number): Promise<DirectMessage[]>;
  /** each conversation of `me`: the other side, the last message, how many unread from them */
  conversations(me: string, limit: number): Promise<ConversationRow[]>;
  /** messages from `other` to `me` read now; how many */
  markRead(me: string, other: string, at: number): Promise<number>;
  unreadMessages(me: string): Promise<number>;
  // ── 0.9.9.9.6.4: the messenger, like Telegram — edits, reactions, photos, group chats ──
  message(id: string): Promise<DirectMessage | null>;
  updateMessage(id: string, patch: MessagePatch): Promise<void>;
  /** a group's messages (sent "to" g:<id>), the newest `limit` before `before`, oldest first */
  messagesTo(toId: string, limit: number, before?: number): Promise<DirectMessage[]>;
  /** each group's last message and how many came after `since` (not from `me`), by group */
  groupSummaries(groups: Array<{ to: string; since: number }>, me: string): Promise<Map<string, { last: DirectMessage | null; unread: number }>>;
  createGroup(g: Omit<ChatGroup, 'id'>, members: Array<Omit<GroupMember, 'groupId'>>): Promise<ChatGroup>;
  group(id: string): Promise<ChatGroup | null>;
  updateGroup(id: string, patch: Partial<Pick<ChatGroup, 'name' | 'pic' | 'ownerId' | 'perms'>>): Promise<void>;
  /** the group, its members and its messages */
  deleteGroup(id: string): Promise<void>;
  groupMembers(groupId: string): Promise<GroupMember[]>;
  groupsOf(userId: string): Promise<Array<{ group: ChatGroup; me: GroupMember }>>;
  addGroupMember(m: GroupMember): Promise<void>;
  updateGroupMember(groupId: string, userId: string, patch: Partial<Pick<GroupMember, 'role' | 'lastRead'>>): Promise<void>;
  removeGroupMember(groupId: string, userId: string): Promise<void>;
  addMedia(m: MediaFile): Promise<void>;
  media(id: string): Promise<MediaFile | null>;
  mediaCountSince(ownerId: string, since: number): Promise<number>;
  /** 0.9.9.9.7.3: the bytes of the photos a player uploaded since then */
  mediaBytesSince(ownerId: string, since: number): Promise<number>;
  /**
   * 0.9.9.9.7.3: removes photos uploaded before `before` that no message and no group picture uses (a deleted message's
   * photo, one uploaded and never sent); returns how many. Photos were kept forever.
   */
  sweepMedia(before: number): Promise<number>;
  /** Measurement: one row per event (tutorial steps, games started / finished …). */
  addEvent(userId: string | null, name: string, at?: number): Promise<void>;
  events(since: number): Promise<GameEventRow[]>;
  /** Everyone's sign-up day and the days they were active (admin → Stats: retention). */
  activityAll(fromDay: string): Promise<Array<{ userId: string; day: string; games: number }>>;
  /**
   * 0.9.9.9.7.1: small things the server must not forget when it restarts (a deploy): a password-reset or email code
   * on its way, a Daily challenge run half played, from which day the Daily's words are picked with the secret.
   * null removes it.
   */
  getValue(key: string): Promise<string | null>;
  setValue(key: string, value: string | null): Promise<void>;
  /** 0.9.9.9.9: the ranked ladder — players with at least `minGames` ranked matches, highest rating first (not banned) */
  ladder(limit: number, minGames: number): Promise<UserRecord[]>;
  /** how many such players are rated above `rating` */
  ratedAbove(rating: number, minGames: number): Promise<number>;
  /** 0.9.9.9.9: a match's replay (compressed), by its id; removed after a while (sweepReplays) */
  saveReplay(id: string, at: number, data: Buffer): Promise<void>;
  replay(id: string): Promise<Buffer | null>;
  sweepReplays(before: number): Promise<number>;
  /** 0.9.9.9.9.2: keep only the newest `keep` replays; how many went */
  trimReplays(keep: number): Promise<number>;
  /** 0.9.9.9.9.5: replays a player saved to their account — kept for good (sweepReplays / trimReplays leave them), at most a
   *  few each; newest first */
  savedReplays(userId: string): Promise<SavedReplay[]>;
  /** false: already saved */
  addSavedReplay(userId: string, r: SavedReplay): Promise<boolean>;
  removeSavedReplay(userId: string, replayId: string): Promise<boolean>;
  /** 0.9.9.9.9.6: a kanji's AI memory picture (made once, for everyone) */
  mnemonicPic(ch: string): Promise<{ mime: string; data: Buffer } | null>;
  saveMnemonicPic(ch: string, mime: string, data: Buffer): Promise<void>;
  close?(): Promise<void>;
}

export type ReportKind = 'bug' | 'suggestion' | 'error' | 'report'; // (0.9.9.9.7.4: + a player reported by another)
/** 0.9.9.9.6: `kind` — bug / suggestion when it came from Feedback; `by` — which admin wrote it for the team */
export interface DirectMessage { id: string; fromId: string; toId: string; text: string; at: number; readAt: number | null; kind?: string | null; by?: string | null;
  /** 0.9.9.9.6.4: when it was last edited; who reacted with what; a photo (a media id); forwarded from (a name); deleted */
  editedAt?: number | null; reactions?: Record<string, string[]> | null; media?: string | null; fwd?: string | null; deleted?: boolean }
export type MessagePatch = Partial<Pick<DirectMessage, 'text' | 'editedAt' | 'reactions' | 'deleted' | 'media'>>;
/** 0.9.9.9.6.4: group chats — the owner, admins (who manage it) and members; what members may do */
export type GroupRole = 'owner' | 'admin' | 'member';
export interface GroupPerms { /** add people */ invite: 'all' | 'admins'; /** change the name and picture */ info: 'all' | 'admins'; /** write */ send: 'all' | 'admins' }
export const DEFAULT_PERMS: GroupPerms = { invite: 'all', info: 'admins', send: 'all' };
export interface ChatGroup { id: string; name: string; pic: string | null; ownerId: string; createdAt: number; perms: GroupPerms }
export interface GroupMember { groupId: string; userId: string; role: GroupRole; joinedAt: number; lastRead: number }
/** a photo sent in a chat (or a group's picture) */
export interface MediaFile { id: string; ownerId: string; mime: string; data: Buffer; at: number }
export interface ConversationRow { other: string; last: DirectMessage; unread: number }
/** the team's side of the messenger (admins read and answer for it) */
export const SUPPORT_ID = 'support';
/** `count`: how many times this same error happened while it was open (0.9.9.9.5 — repeats are one row) */
export interface Report { id: string; kind: ReportKind; userId: string | null; username: string; text: string; meta: string; at: number; done: boolean; count?: number }
export interface GameEventRow { userId: string | null; name: string; at: number }
export const REPORTS_KEPT = 500; // the newest; errors beyond that are dropped

export class UsernameTakenError extends Error {}
/** 0.9.9.9.6.6: that mailbox already has an account */
export class EmailTakenError extends Error {}

/** One player's activity on one of their local days (progress page, monthly goals). */
export interface DayActivity { day: string; login: boolean; reviews: number; games: number; wins: number; xp: number; quizzes: number; challenges: number; passages: number; /** XP from study cards (0.9.9.4.4.2) */ studyXp?: number;
  /** 0.9.9.9.6.6: answers to learned cards (in review) — remembered, and forgotten (Again): how well you remember */ recalled?: number; forgot?: number }
export type ActivityDelta = Partial<Omit<DayActivity, 'day'>>;
/** A daily-challenge result. */
export interface DailyResult { userId: string; username: string; correct: number; ms: number }
/** Friends: accepted both ways; a request is 'outgoing' for the sender and 'incoming' for the other player. */
/** 0.9.9.9.7.3: lifetime totals for the achievements (Store.achStats) */
export interface AchStats { reviews: number; games: number; quizzes: number; passages: number; challenges: number; activeDays: number; bestDay: number; mastered: number; custom: number; friends: number }
export interface FriendLink { id: string; username: string; status: 'accepted' | 'incoming' | 'outgoing'; /** the name to show (0.9.9.6) */ name?: string }
/** the name others see: the nickname, or the login (0.9.9.6) */
export const displayName = (u: { username: string; nickname?: string | null }) => u.nickname?.trim() || u.username;

export const MATCH_HISTORY_LIMIT = 15; // older games are deleted

/** 0.9.9.4: one player's data for the app's offline engine (GET /api/sync/snapshot). */
export const SNAPSHOT_V = 1;
export interface Snapshot {
  v: number; at: number; user: UserRecord; cards: SrsCard[]; custom: CustomWord[]; matches: MatchDetail[]; activity: DayActivity[];
  /** today's daily challenge (UTC day) and your result, if you played it */
  daily: { day: string; result: { correct: number; ms: number; marks?: string } | null } | null;
}
const summaryOf = (m: MatchDetail): MatchSummary => ({ id: m.id, mode: m.mode, outcome: m.outcome, character: m.character, at: m.at, opponents: m.opponents });

const blankProgress = () => ({ dailyNew: 25, newToday: 0, badges: [] as string[], starred: [] as string[], dailyPlan: null as DailyPlan | null, xp: 0, background: 'forest' as BackgroundId, studyLevels: [] as Level[], lastNewDate: null, newNotice: 0, critCount: 0, critExpires: 0, wins: 0, losses: 0, avatarV: 0, flame: 'blue' as FlameId, staff: 'verdant' as StaffId, tutorialDone: true, unlocks: [] as string[], loginDay: null as string | null, streak: 0, streakDay: null as string | null, border: 'none', bestStreak: 0 });

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
  async findByEmailKey(key: string) {
    for (const r of this.users.values()) if (r.emailKey && r.emailKey === key) return { ...r };
    return null;
  }
  async findById(id: string) { const r = this.users.get(id); return r ? { ...r } : null; }
  async create(u: NewUser) {
    if (await this.findByUsername(u.username)) throw new UsernameTakenError();
    if (u.emailKey && (await this.findByEmailKey(u.emailKey))) throw new EmailTakenError();
    const rec: UserRecord = { ...blankProgress(), tutorialDone: false, ...u, username: u.username.toLowerCase(), banned: false, id: randomUUID(), createdAt: new Date().toISOString() };
    this.users.set(rec.id, rec);
    this.persist();
    return { ...rec };
  }
  async list() { return [...this.users.values()].map((r) => ({ ...r })).sort((a, b) => a.createdAt.localeCompare(b.createdAt)); }
  async usersWithPushToken(token: string) { return [...this.users.values()].filter((r) => r.pushTokens?.includes(token)).map((r) => ({ ...r })); }
  async deleteUser(id: string) {
    if (!this.users.delete(id)) return false;
    this.srs.delete(id); this.custom.delete(id); this.avatars.delete(id); this.history.delete(id); this.activityLog.delete(id);
    for (const m of this.dailyResults.values()) m.delete(id);
    this.friendLinks.delete(id);
    for (const m of this.friendLinks.values()) m.delete(id);
    this.members = this.members.filter((m) => m.userId !== id);
    this.dms = this.dms.filter((m) => m.fromId !== id && m.toId !== id);
    this.saved.delete(id);
    this.values.delete(`udecks:${id}`); // (0.9.9.9.9.6: their own decks)
    this.persist();
    return true;
  }
  async update(id: string, patch: UserPatch) {
    const r = this.users.get(id);
    if (!r) return null;
    if (patch.emailKey) for (const o of this.users.values()) if (o.id !== id && o.emailKey === patch.emailKey) throw new EmailTakenError();
    // 0.9.9.9.6.9: a guest saving their account picks a login
    if (patch.username !== undefined) { patch = { ...patch, username: patch.username.toLowerCase() }; for (const o of this.users.values()) if (o.id !== id && o.username === patch.username) throw new UsernameTakenError(); }
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
  /** Learned = words that graduated to review, or that you've answered right at least once (0.9.9.4.4.6: today's count too) — in any deck, a word counts once. */
  async learnedCount(userId: string) { return new Set([...this.deck(userId).values()].filter((c) => c.state === 'review' || !!c.critDay).map((c) => c.vocabId)).size; }
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
    // (0.9.9.9.2: a new picture always gets a new address — the version never goes back to one used before)
    if (img) { this.avatars.set(id, img); r.avatarV = Math.max(Math.abs(r.avatarV || 0) + 1, Math.floor(Date.now() / 1000)); } else { this.avatars.delete(id); r.avatarV = -Math.abs(r.avatarV || 0); }
    this.persist();
    return Math.max(0, r.avatarV);
  }
  async getAvatar(id: string) { return this.avatars.get(id) ?? null; }
  async cardStats() {
    return Object.fromEntries([...this.srs].map(([uid, d]) => [uid, { cards: d.size, learned: new Set([...d.values()].filter((c) => c.state === 'review' || !!c.critDay).map((c) => c.vocabId)).size }]));
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
    a.quizzes = (a.quizzes ?? 0) + (d.quizzes ?? 0); a.challenges = (a.challenges ?? 0) + (d.challenges ?? 0); a.passages = (a.passages ?? 0) + (d.passages ?? 0); a.studyXp = (a.studyXp ?? 0) + (d.studyXp ?? 0); a.recalled = (a.recalled ?? 0) + (d.recalled ?? 0); a.forgot = (a.forgot ?? 0) + (d.forgot ?? 0);
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
      .map(([userId, r]) => ({ userId, username: ((u) => (u ? displayName(u) : '?'))(this.users.get(userId)), correct: r.correct, ms: r.ms }))
      .sort((a, b) => b.correct - a.correct || a.ms - b.ms).slice(0, limit);
  }
  async dailyBetter(day: string, correct: number, ms: number) {
    return [...(this.dailyResults.get(day)?.values() ?? [])].filter((r) => r.correct > correct || (r.correct === correct && r.ms < ms)).length;
  }
  async dailyCount(day: string) { return this.dailyResults.get(day)?.size ?? 0; }
  async achStats(userId: string, masteredDays: number): Promise<AchStats> {
    const days = await this.activity(userId, '0000-01-01');
    const sum = (k: 'reviews' | 'games' | 'quizzes' | 'passages' | 'challenges') => days.reduce((a, d) => a + (d[k] ?? 0), 0);
    const cards = await this.cards(userId);
    return {
      reviews: sum('reviews'), games: sum('games'), quizzes: sum('quizzes'), passages: sum('passages'), challenges: sum('challenges'),
      activeDays: days.filter((d) => d.login || d.reviews > 0 || d.games > 0).length, bestDay: days.reduce((a, d) => Math.max(a, d.reviews ?? 0), 0),
      mastered: new Set(cards.filter((c) => c.state === 'review' && c.intervalDays >= masteredDays).map((c) => c.vocabId)).size,
      custom: cards.filter((c) => deckOf(c) === 'custom').length,
      friends: (await this.friends(userId)).filter((f) => f.status === 'accepted').length,
    };
  }
  async dailyOf(day: string, userIds: string[]) {
    const out = new Map<string, { correct: number; ms: number; marks?: string }>();
    const d = this.dailyResults.get(day);
    for (const id of userIds) { const r = d?.get(id); if (r) out.set(id, { ...r }); }
    return out;
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
      if (u) out.push({ id: to, username: u.username, name: displayName(u), status: s === 'accepted' ? 'accepted' : 'outgoing' });
    }
    for (const [from, m] of this.friendLinks) {
      const u = this.users.get(from);
      if (u && m.get(userId) === 'pending') out.push({ id: from, username: u.username, name: displayName(u), status: 'incoming' });
    }
    return out.sort((a, b) => (a.name ?? a.username).localeCompare(b.name ?? b.username));
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
    // 0.9.9.9.5: the same error again while its row is still open: counted on that row (and moved to the top)
    const same = r.kind === 'error' ? this.reportList.findIndex((x) => x.kind === 'error' && !x.done && x.text === r.text) : -1;
    if (same >= 0) {
      const [row] = this.reportList.splice(same, 1);
      this.reportList.unshift({ ...row, at: r.at, meta: r.meta, userId: r.userId, username: r.username, count: (row.count ?? 1) + 1 });
      this.persist();
      return;
    }
    this.reportList.unshift({ ...r, id: randomUUID(), done: false, count: 1 });
    this.reportList.length = Math.min(this.reportList.length, REPORTS_KEPT);
    this.persist();
  }
  async reports(limit: number) { return this.reportList.slice(0, limit).map((r) => ({ ...r })); }
  async setReportDone(id: string, done: boolean) { const r = this.reportList.find((x) => x.id === id); if (r) { r.done = done; this.persist(); } }
  async deleteReport(id: string) { this.reportList = this.reportList.filter((x) => x.id !== id); this.persist(); }
  protected dms: DirectMessage[] = [];
  async addMessage(m: Omit<DirectMessage, 'id' | 'readAt'>) {
    const msg: DirectMessage = { ...m, id: randomUUID(), readAt: null };
    this.dms.push(msg);
    if (this.dms.length > 50_000) this.dms.splice(0, 10_000);
    this.persist();
    return { ...msg };
  }
  async messagesBetween(a: string, b: string, limit: number, before = Infinity) {
    const all = this.dms.filter((m) => ((m.fromId === a && m.toId === b) || (m.fromId === b && m.toId === a)) && m.at < before);
    return all.slice(-limit).map((m) => ({ ...m }));
  }
  async conversations(me: string, limit: number) {
    const by = new Map<string, ConversationRow>();
    for (const m of this.dms) {
      if ((m.fromId !== me && m.toId !== me) || m.toId.startsWith('g:')) continue; // (0.9.9.9.6.4: group messages are the groups')
      const other = m.fromId === me ? m.toId : m.fromId;
      const row = by.get(other) ?? { other, last: m, unread: 0 };
      if (m.at >= row.last.at) row.last = m;
      if (m.toId === me && m.readAt === null) row.unread++;
      by.set(other, row);
    }
    return [...by.values()].sort((x, y) => y.last.at - x.last.at).slice(0, limit).map((r) => ({ ...r, last: { ...r.last } }));
  }
  async markRead(me: string, other: string, at: number) {
    let n = 0;
    for (const m of this.dms) if (m.toId === me && m.fromId === other && m.readAt === null) { m.readAt = at; n++; }
    if (n) this.persist();
    return n;
  }
  async unreadMessages(me: string) { return this.dms.filter((m) => m.toId === me && m.readAt === null).length; }
  // ── 0.9.9.9.6.4 ──
  protected groups = new Map<string, ChatGroup>();
  protected members: GroupMember[] = [];
  protected mediaFiles = new Map<string, MediaFile>();
  async message(id: string) { const m = this.dms.find((x) => x.id === id); return m ? { ...m } : null; }
  async updateMessage(id: string, patch: MessagePatch) { const m = this.dms.find((x) => x.id === id); if (m) { Object.assign(m, patch); this.persist(); } }
  async messagesTo(toId: string, limit: number, before = Infinity) { return this.dms.filter((m) => m.toId === toId && m.at < before).slice(-limit).map((m) => ({ ...m })); }
  async groupSummaries(groups: Array<{ to: string; since: number }>, me: string) {
    const out = new Map<string, { last: DirectMessage | null; unread: number }>();
    for (const g of groups) {
      let last: DirectMessage | null = null, unread = 0;
      for (const m of this.dms) if (m.toId === g.to) { if (!last || m.at >= last.at) last = m; if (m.at > g.since && m.fromId !== me && !m.deleted) unread++; }
      out.set(g.to, { last: last ? { ...last } : null, unread });
    }
    return out;
  }
  async createGroup(g: Omit<ChatGroup, 'id'>, members: Array<Omit<GroupMember, 'groupId'>>) {
    const group: ChatGroup = { ...g, id: randomUUID(), perms: { ...g.perms } };
    this.groups.set(group.id, group);
    for (const m of members) this.members.push({ ...m, groupId: group.id });
    this.persist();
    return { ...group, perms: { ...group.perms } };
  }
  async group(id: string) { const g = this.groups.get(id); return g ? { ...g, perms: { ...g.perms } } : null; }
  async updateGroup(id: string, patch: Partial<Pick<ChatGroup, 'name' | 'pic' | 'ownerId' | 'perms'>>) { const g = this.groups.get(id); if (g) { Object.assign(g, patch); this.persist(); } }
  async deleteGroup(id: string) { this.groups.delete(id); this.members = this.members.filter((m) => m.groupId !== id); this.dms = this.dms.filter((m) => m.toId !== `g:${id}`); this.persist(); }
  async groupMembers(groupId: string) { return this.members.filter((m) => m.groupId === groupId).map((m) => ({ ...m })); }
  async groupsOf(userId: string) { return this.members.filter((m) => m.userId === userId && this.groups.has(m.groupId)).map((m) => ({ group: { ...this.groups.get(m.groupId)!, perms: { ...this.groups.get(m.groupId)!.perms } }, me: { ...m } })); }
  async addGroupMember(m: GroupMember) { if (!this.members.some((x) => x.groupId === m.groupId && x.userId === m.userId)) { this.members.push({ ...m }); this.persist(); } }
  async updateGroupMember(groupId: string, userId: string, patch: Partial<Pick<GroupMember, 'role' | 'lastRead'>>) { const m = this.members.find((x) => x.groupId === groupId && x.userId === userId); if (m) { Object.assign(m, patch); this.persist(); } }
  async removeGroupMember(groupId: string, userId: string) { this.members = this.members.filter((x) => !(x.groupId === groupId && x.userId === userId)); this.persist(); }
  async addMedia(m: MediaFile) { this.mediaFiles.set(m.id, { ...m }); if (this.mediaFiles.size > 2000) this.mediaFiles.delete(this.mediaFiles.keys().next().value!); this.persist(); }
  async media(id: string) { const m = this.mediaFiles.get(id); return m ? { ...m } : null; }
  async mediaCountSince(ownerId: string, since: number) { let n = 0; for (const m of this.mediaFiles.values()) if (m.ownerId === ownerId && m.at >= since) n++; return n; }
  async mediaBytesSince(ownerId: string, since: number) { let n = 0; for (const m of this.mediaFiles.values()) if (m.ownerId === ownerId && m.at >= since) n += m.data.length; return n; }
  async sweepMedia(before: number) {
    const used = new Set<string>();
    for (const m of this.dms) if (m.media && !m.deleted) used.add(m.media);
    for (const g of this.groups.values()) if (g.pic) used.add(g.pic);
    let n = 0;
    for (const [id, m] of this.mediaFiles) if (m.at < before && !used.has(id)) { this.mediaFiles.delete(id); n++; }
    if (n) this.persist();
    return n;
  }
  protected eventLog: GameEventRow[] = [];
  async addEvent(userId: string | null, name: string, at = Date.now()) { this.eventLog.push({ userId, name, at }); if (this.eventLog.length > 50_000) this.eventLog.splice(0, 10_000); this.persist(); }
  async events(since: number) { return this.eventLog.filter((e) => e.at >= since).map((e) => ({ ...e })); }
  async activityAll(fromDay: string) {
    const out: Array<{ userId: string; day: string; games: number }> = [];
    for (const [userId, days] of this.activityLog) for (const a of days.values()) if (a.day >= fromDay) out.push({ userId, day: a.day, games: a.games });
    return out;
  }
  protected values = new Map<string, string>(); // 0.9.9.9.7.1
  async getValue(key: string) { return this.values.get(key) ?? null; }
  async setValue(key: string, value: string | null) { if (value === null) this.values.delete(key); else this.values.set(key, value); this.persist(); }
  protected persist() { /* memory only */ }
  // 0.9.9.9.9: the ladder and replays (replays aren't written to the local file: big, and kept two weeks anyway)
  async ladder(limit: number, minGames: number) {
    return [...this.users.values()].filter((r) => !r.banned && (r.rated ?? 0) >= minGames).sort((a, b) => (b.rating ?? 1000) - (a.rating ?? 1000) || a.username.localeCompare(b.username)).slice(0, limit).map((r) => ({ ...r }));
  }
  async ratedAbove(rating: number, minGames: number) { let n = 0; for (const r of this.users.values()) if (!r.banned && (r.rated ?? 0) >= minGames && (r.rating ?? 1000) > rating) n++; return n; }
  protected replays = new Map<string, { at: number; data: Buffer }>();
  async saveReplay(id: string, at: number, data: Buffer) { this.replays.set(id, { at, data }); }
  async replay(id: string) { return this.replays.get(id)?.data ?? null; }
  async sweepReplays(before: number) { const kept = this.keptIds(); let n = 0; for (const [id, r] of this.replays) if (r.at < before && !kept.has(id)) { this.replays.delete(id); n++; } return n; }
  async trimReplays(keep: number) {
    const kept = this.keptIds();
    const old = [...this.replays].filter(([id]) => !kept.has(id)).sort((a, b) => b[1].at - a[1].at).slice(Math.max(0, keep));
    for (const [id] of old) this.replays.delete(id);
    return old.length;
  }
  // 0.9.9.9.9.6: the AI memory pictures
  protected mnemonicPics = new Map<string, { mime: string; data: Buffer }>();
  async mnemonicPic(ch: string) { return this.mnemonicPics.get(ch) ?? null; }
  async saveMnemonicPic(ch: string, mime: string, data: Buffer) { this.mnemonicPics.set(ch, { mime, data }); }
  // 0.9.9.9.9.5: replays saved to accounts
  protected saved = new Map<string, SavedReplay[]>();
  private keptIds() { const s = new Set<string>(); for (const l of this.saved.values()) for (const r of l) s.add(r.id); return s; }
  async savedReplays(userId: string) { return [...(this.saved.get(userId) ?? [])].sort((a, b) => b.savedAt - a.savedAt).map((r) => ({ ...r })); }
  async addSavedReplay(userId: string, r: SavedReplay) {
    const l = this.saved.get(userId) ?? [];
    if (l.some((x) => x.id === r.id)) return false;
    l.push({ ...r }); this.saved.set(userId, l); return true;
  }
  async removeSavedReplay(userId: string, replayId: string) {
    const l = this.saved.get(userId) ?? [], left = l.filter((x) => x.id !== replayId);
    this.saved.set(userId, left); return left.length !== l.length;
  }
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
      this.dms = (data.messages ?? []) as DirectMessage[];
      for (const g of (data.groups ?? []) as ChatGroup[]) this.groups.set(g.id, g);
      this.members = (data.groupMembers ?? []) as GroupMember[];
      for (const m of (data.media ?? []) as Array<Omit<MediaFile, 'data'> & { b64: string }>) this.mediaFiles.set(m.id, { id: m.id, ownerId: m.ownerId, mime: m.mime, at: m.at, data: Buffer.from(m.b64, 'base64') });
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
      for (const [k, v] of Object.entries((data.values ?? {}) as Record<string, string>)) this.values.set(k, v); // 0.9.9.9.7.1
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
    writeFileSync(tmp, JSON.stringify({ xpScheme: 2, users: [...this.users.values()], srs, avatars, matches: Object.fromEntries(this.history), activity, daily, friends, reports: this.reportList, events: this.eventLog, messages: this.dms, custom: Object.fromEntries(this.custom), groups: [...this.groups.values()], groupMembers: this.members, media: [...this.mediaFiles.values()].map((m) => ({ id: m.id, ownerId: m.ownerId, mime: m.mime, at: m.at, b64: m.data.toString('base64') })), values: Object.fromEntries(this.values) }));
    renameSync(tmp, this.file); // atomic replace
  }
}
