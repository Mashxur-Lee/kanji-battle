import type { AdminUserRow, MatchDetail, PublicProfile } from '../../shared/protocol';
import type { Level } from '../../shared/protocol';
import { LEVELS } from '../../shared/protocol';
import { BACKGROUNDS, CRIT_BASE, critFor, dailyCrit, FLAMES, flameUnlocked, isBackground, isFlame, isStaff, STAFFS, staffUnlocked, levelOf, nextLocalMidnight, STUDY_LOCK, unlocked, xpFor, type BackgroundId, type FlameId, type MatchOutcome, type StaffId } from '../../shared/progress';
import { answer, isDue, newCard, previewIntervals, RATINGS, type Rating, type SrsCard } from '../../shared/srs';
import { displayReading } from '../../shared/vocab';
import { MATCH_HISTORY_LIMIT, type Store, type UserRecord } from '../db/Store';
import { shuffle } from '../VocabPool';
import { VOCAB, VOCAB_BY_ID } from '../vocab';

export const DAILY_NEW = 25;
/** Matches with an AI player give half XP (an easy AI shouldn't be an XP farm). */
export const AI_XP_FACTOR = 0.5;
export type Deck = 'all' | 'struggling';

export interface Profile { xp: number; level: number; crit: number; learned: number; learnedToday: number; background: BackgroundId; studyLevels: Level[]; wins: number; losses: number; pic: string | null; flame: FlameId; staff: StaffId; strugglingDue: number; streak: number; bestStreak: number }

/** Public URL of a profile picture (versioned, so browsers can cache it forever). */
export const picUrl = (u: { id: string; avatarV: number }) => (u.avatarV > 0 ? `/api/avatar/${u.id}?v=${u.avatarV}` : null);
const MAX_AVATAR_BYTES = 60 * 1024;
export interface DeckCounts { new: number; learning: number; due: number; total: number }
export interface StudyItem {
  vocabId: string; kanji: string; reading: string; meaning: string; level: Level;
  state: SrsCard['state']; intervals: Record<Rating, string>;
}

export class StudyError extends Error { constructor(message: string, readonly status = 400) { super(message); } }

/** YYYY-MM-DD; the client's local date is trusted only within a day of the server's. */
export function resolveToday(clientToday: unknown, now = Date.now()): string {
  const server = new Date(now).toISOString().slice(0, 10);
  if (typeof clientToday !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(clientToday)) return server;
  const diff = Math.abs(Date.parse(clientToday) - Date.parse(server));
  return diff <= 86_400_000 ? clientToday : server;
}

export class StudyService {
  constructor(private readonly store: Store, private readonly rng: () => number = Math.random) {}

  async profile(u: UserRecord, now = Date.now()): Promise<Profile> {
    const learned = await this.store.learnedCount(u.id);
    const learnedToday = now < u.critExpires ? u.critCount : 0;
    return {
      xp: u.xp, level: levelOf(u.xp), crit: dailyCrit(u.critCount, u.critExpires, now), learned, learnedToday, background: u.background,
      studyLevels: u.studyLevels, wins: u.wins, losses: u.losses, pic: picUrl(u), flame: u.flame ?? 'blue', staff: u.staff ?? 'verdant', strugglingDue: await this.strugglingDue(u.id, now),
      streak: liveStreak(u, new Date(now).toISOString().slice(0, 10)), bestStreak: u.bestStreak ?? 0,
    };
  }

  /**
   * Daily login streak: called when the app opens (with the player's local date). Same day: nothing;
   * the day after: +1; a gap: back to 1.
   */
  async touchLogin(u: UserRecord, today: string): Promise<UserRecord> {
    if (u.loginDay === today) return u;
    const streak = u.loginDay === dayBefore(today) ? (u.streak ?? 0) + 1 : 1;
    return (await this.store.update(u.id, { loginDay: today, streak, bestStreak: Math.max(u.bestStreak ?? 0, streak) })) ?? u;
  }

  /** Struggling spells waiting to be studied (new, learning or due). */
  async strugglingDue(userId: string, now = Date.now()) {
    const c = counts((await this.store.cards(userId)).filter((x) => x.struggling && VOCAB_BY_ID.has(x.vocabId)), now);
    return c.new + c.learning + c.due;
  }

  /** null, or why this player may not start a game right now (too many struggling spells waiting). Admins are never locked. */
  async playLock(u: { id: string; role: string }): Promise<string | null> {
    if (u.role === 'admin') return null;
    const n = await this.strugglingDue(u.id);
    return n > STUDY_LOCK ? `You have ${n} struggling spells waiting — study them down to ${STUDY_LOCK} to play again (📖 Study spells → Struggling).` : null;
  }

  /** Colour of the combo flames (Purple from level 5; admins have all). */
  async setFlame(u: UserRecord, f: unknown) {
    if (!isFlame(f)) throw new StudyError('Unknown flame');
    if (u.role !== 'admin' && !flameUnlocked(f, u.xp)) throw new StudyError(`Unlocks at level ${FLAMES.find((x) => x.id === f)!.level}`, 403);
    await this.store.update(u.id, { flame: f });
  }

  /** Magic staff skin (unlocked by your best login streak; admins have all). */
  async setStaff(u: UserRecord, s: unknown) {
    if (!isStaff(s)) throw new StudyError('Unknown staff');
    if (u.role !== 'admin' && !staffUnlocked(s, u.bestStreak ?? 0)) throw new StudyError(`Unlocks with a ${STAFFS.find((x) => x.id === s)!.streak}-day login streak`, 403);
    await this.store.update(u.id, { staff: s });
  }

  /** Today's crit chance (1% + 1% per spell learned today, max 50%; back to 1% at the player's midnight). */
  async crit(userId: string, now = Date.now()) {
    const u = await this.store.findById(userId);
    return u ? dailyCrit(u.critCount, u.critExpires, now) : CRIT_BASE;
  }

  /** What other players see when they click your name. */
  async publicProfile(id: string): Promise<PublicProfile | null> {
    const u = await this.store.findById(id);
    if (!u || u.banned) return null;
    return { id: u.id, name: u.username, level: levelOf(u.xp), wins: u.wins, losses: u.losses, learned: await this.store.learnedCount(u.id), pic: picUrl(u), since: u.createdAt, streak: liveStreak(u, new Date().toISOString().slice(0, 10)), bestStreak: u.bestStreak ?? 0 };
  }

  matches(userId: string) { return this.store.matches(userId, MATCH_HISTORY_LIMIT); }
  match(userId: string, id: string) { return this.store.match(userId, id); }

  /** Profile picture: a small PNG/JPEG/WebP (the browser resizes it to 128×128 before upload). null removes it. */
  async setAvatar(u: UserRecord, dataUrl: unknown) {
    if (dataUrl === null) { await this.store.setAvatar(u.id, null); return; }
    const m = typeof dataUrl === 'string' ? /^data:(image\/(?:png|jpeg|webp));base64,([A-Za-z0-9+/]+={0,2})$/.exec(dataUrl) : null;
    if (!m) throw new StudyError('Pictures must be PNG, JPEG or WebP');
    const data = Buffer.from(m[2], 'base64');
    if (data.length > MAX_AVATAR_BYTES) throw new StudyError('Picture is too large');
    const magic = m[1] === 'image/png' ? data.subarray(0, 4).toString('hex') === '89504e47'
      : m[1] === 'image/jpeg' ? data.subarray(0, 3).toString('hex') === 'ffd8ff'
      : data.subarray(0, 4).toString('latin1') === 'RIFF' && data.subarray(8, 12).toString('latin1') === 'WEBP';
    if (!magic) throw new StudyError('That file is not a valid picture');
    await this.store.setAvatar(u.id, { mime: m[1] as 'image/png', data });
  }
  avatar(id: string) { return this.store.getAvatar(id); }

  async setBackground(u: UserRecord, bg: unknown) {
    if (!isBackground(bg)) throw new StudyError('Unknown background');
    if (u.role !== 'admin' && !unlocked(bg, u.xp)) throw new StudyError(`Unlocks at level ${BACKGROUNDS.find((b) => b.id === bg)!.level}`, 403);
    await this.store.update(u.id, { background: bg });
  }

  /** "All spells": pick the levels that feed the daily new cards. Picking levels adds today's batch right away. */
  async setStudyLevels(u: UserRecord, raw: unknown, today: string) {
    const levels = Array.isArray(raw) ? LEVELS.filter((l) => raw.includes(l)) : [];
    const rec = (await this.store.update(u.id, { studyLevels: levels, lastNewDate: levels.length ? u.lastNewDate : null }))!;
    if (levels.length && rec.lastNewDate !== today) await this.addDaily(rec, today);
  }

  /** Adds up to 25 new random words from the chosen levels, once per day. */
  private async addDaily(u: UserRecord, today: string): Promise<number> {
    const have = new Set((await this.store.cards(u.id)).map((c) => c.vocabId));
    const fresh = shuffle(VOCAB.filter((v) => u.studyLevels.includes(v.level) && !have.has(v.id)), this.rng).slice(0, DAILY_NEW);
    const now = Date.now();
    const added = await this.store.addCards(u.id, fresh.map((v) => newCard(v.id, now)));
    await this.store.update(u.id, { lastNewDate: today, newNotice: u.newNotice + added });
    return added;
  }

  /** Opening the study screen: top up today's new cards, report counts, and hand over any "new spells" notice once. */
  async summary(u: UserRecord, today: string, now = Date.now()) {
    if (u.studyLevels.length && u.lastNewDate !== today) await this.addDaily(u, today);
    const fresh = (await this.store.findById(u.id))!;
    const notice = fresh.newNotice;
    if (notice) await this.store.update(u.id, { newNotice: 0 });
    const cards = (await this.store.cards(u.id)).filter((c) => VOCAB_BY_ID.has(c.vocabId));
    return {
      studyLevels: fresh.studyLevels,
      notice,
      decks: { all: counts(cards, now), struggling: counts(cards.filter((c) => c.struggling), now) },
      profile: await this.profile(fresh),
    };
  }

  /** Cards to study now, Anki order: (re)learning due → reviews due → new. */
  async queue(u: UserRecord, deck: Deck, now = Date.now(), limit = 60): Promise<StudyItem[]> {
    const cards = (await this.store.cards(u.id)).filter((c) => VOCAB_BY_ID.has(c.vocabId) && (deck === 'all' || c.struggling));
    const rank = (c: SrsCard) => (c.state === 'learning' || c.state === 'relearning' ? 0 : c.state === 'review' ? 1 : 2);
    return cards
      .filter((c) => c.state === 'new' || isDue(c, now))
      .sort((a, b) => rank(a) - rank(b) || a.due - b.due)
      .slice(0, limit)
      .map((c) => this.item(c, now));
  }

  async review(u: UserRecord, vocabId: unknown, rating: unknown, now = Date.now(), today = resolveToday(undefined, now), tzOffsetMin = 0) {
    if (typeof vocabId !== 'string' || !RATINGS.includes(rating as Rating)) throw new StudyError('Bad review');
    const card = await this.store.card(u.id, vocabId);
    if (!card) throw new StudyError('No such card', 404);
    const next = answer(card, rating as Rating, now);
    // a struggling word stops counting as struggling once it graduates with "Good"/"Easy"
    if (next.state === 'review' && (rating === 'good' || rating === 'easy')) next.struggling = false;
    // daily crit: a passed card (anything but Again) counts once per day
    if (rating !== 'again' && card.critDay !== today) {
      next.critDay = today;
      const fresh = (await this.store.findById(u.id)) ?? u;
      const newDay = now >= fresh.critExpires;
      await this.store.update(u.id, {
        critCount: newDay ? 1 : fresh.critCount + 1,
        critExpires: newDay ? nextLocalMidnight(today, tzOffsetMin) : fresh.critExpires,
      });
    }
    await this.store.saveCard(u.id, next);
    return { card: next, crit: await this.crit(u.id, now) };
  }

  /** After a match: XP and the words you missed go to "Struggling spells". */
  /** Admin page: XP, level, crit and study-set size for every account, plus where it's all saved. */
  async adminStats(rows: AdminUserRow[]): Promise<{ users: AdminUserRow[]; storage: string; persistent: boolean }> {
    const stats = await this.store.cardStats();
    const users = rows.map((u) => {
      const s = stats[u.id] ?? { cards: 0, learned: 0 };
      const xp = u.xp ?? 0;
      return { ...u, xp, level: levelOf(xp), crit: u.crit ?? CRIT_BASE, learned: s.learned, cards: s.cards };
    });
    return { users, storage: this.store.name, persistent: this.store.name === 'postgres' || !process.env.RENDER };
  }
  /** Forfeits give nobody XP; matches with AI players give half. */
  async recordMatch(userId: string, outcome: MatchOutcome, accuracy: number, mode: string, missedIds: string[], forfeited = false, vsAi = false, record?: Omit<MatchDetail, 'id'>, seen: string[] = []) {
    if (record) await this.store.addMatch(userId, record);
    const gained = forfeited ? 0 : Math.round(xpFor(outcome, accuracy, mode) * (vsAi ? AI_XP_FACTOR : 1));
    const xp = gained ? await this.store.addXp(userId, gained) : (await this.store.findById(userId))?.xp ?? 0;
    await this.store.addResult(userId, outcome);
    const words = missedIds.filter((id) => VOCAB_BY_ID.has(id));
    if (words.length) await this.store.markStruggling(userId, words, Date.now());
    // Deck Duel: every kanji of the duel joins All spells as a new card (cards you already have are left alone)
    const met = seen.filter((id) => VOCAB_BY_ID.has(id));
    if (met.length) {
      const added = await this.store.addCards(userId, met.map((id) => newCard(id, Date.now())));
      const u = added ? await this.store.findById(userId) : null;
      if (u) await this.store.update(userId, { newNotice: u.newNotice + added });
    }
    return { gained, xp };
  }

  private item(c: SrsCard, now: number): StudyItem {
    const v = VOCAB_BY_ID.get(c.vocabId)!;
    return { vocabId: v.id, kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: v.level, state: c.state, intervals: previewIntervals(c, now) };
  }
}

const dayBefore = (d: string) => new Date(Date.parse(d) - 86_400_000).toISOString().slice(0, 10);
/** A streak still counts if the last login was today or yesterday (a day of slack for time zones). */
function liveStreak(u: UserRecord, today: string) {
  if (!u.loginDay) return 0;
  return u.loginDay >= dayBefore(dayBefore(today)) ? u.streak ?? 0 : 0;
}

function counts(cards: SrsCard[], now: number): DeckCounts {
  return {
    new: cards.filter((c) => c.state === 'new').length,
    learning: cards.filter((c) => (c.state === 'learning' || c.state === 'relearning') && isDue(c, now)).length,
    due: cards.filter((c) => c.state === 'review' && isDue(c, now)).length,
    total: cards.length,
  };
}
