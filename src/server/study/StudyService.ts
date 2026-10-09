import type { AdminUserRow } from '../../shared/protocol';
import type { Level } from '../../shared/protocol';
import { LEVELS } from '../../shared/protocol';
import { BACKGROUNDS, critFor, isBackground, levelOf, unlocked, xpFor, type BackgroundId, type MatchOutcome } from '../../shared/progress';
import { answer, isDue, newCard, previewIntervals, RATINGS, type Rating, type SrsCard } from '../../shared/srs';
import { displayReading } from '../../shared/vocab';
import type { Store, UserRecord } from '../db/Store';
import { shuffle } from '../VocabPool';
import { VOCAB, VOCAB_BY_ID } from '../vocab';

export const DAILY_NEW = 25;
export type Deck = 'all' | 'struggling';

export interface Profile { xp: number; level: number; crit: number; learned: number; background: BackgroundId; studyLevels: Level[] }
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

  async profile(u: UserRecord): Promise<Profile> {
    const learned = await this.store.learnedCount(u.id);
    return { xp: u.xp, level: levelOf(u.xp), crit: critFor(learned), learned, background: u.background, studyLevels: u.studyLevels };
  }

  async crit(userId: string) { return critFor(await this.store.learnedCount(userId)); }

  async setBackground(u: UserRecord, bg: unknown) {
    if (!isBackground(bg)) throw new StudyError('Unknown background');
    if (!unlocked(bg, u.xp)) throw new StudyError(`Unlocks at level ${BACKGROUNDS.find((b) => b.id === bg)!.level}`, 403);
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

  async review(u: UserRecord, vocabId: unknown, rating: unknown, now = Date.now()) {
    if (typeof vocabId !== 'string' || !RATINGS.includes(rating as Rating)) throw new StudyError('Bad review');
    const card = await this.store.card(u.id, vocabId);
    if (!card) throw new StudyError('No such card', 404);
    const next = answer(card, rating as Rating, now);
    // a struggling word stops counting as struggling once it graduates with "Good"/"Easy"
    if (next.state === 'review' && (rating === 'good' || rating === 'easy')) next.struggling = false;
    await this.store.saveCard(u.id, next);
    return { card: next, crit: await this.crit(u.id) };
  }

  /** After a match: XP and the words you missed go to "Struggling spells". */
  /** Admin page: XP, level, crit and study-set size for every account, plus where it's all saved. */
  async adminStats(rows: AdminUserRow[]): Promise<{ users: AdminUserRow[]; storage: string; persistent: boolean }> {
    const stats = await this.store.cardStats();
    const users = rows.map((u) => {
      const s = stats[u.id] ?? { cards: 0, learned: 0 };
      const xp = u.xp ?? 0;
      return { ...u, xp, level: levelOf(xp), crit: critFor(s.learned), learned: s.learned, cards: s.cards };
    });
    return { users, storage: this.store.name, persistent: this.store.name === 'postgres' || !process.env.RENDER };
  }
  async recordMatch(userId: string, outcome: MatchOutcome, accuracy: number, mode: string, missedIds: string[], forfeited = false) {
    const gained = forfeited ? 0 : xpFor(outcome, accuracy, mode);
    const xp = gained ? await this.store.addXp(userId, gained) : (await this.store.findById(userId))?.xp ?? 0;
    const words = missedIds.filter((id) => VOCAB_BY_ID.has(id));
    if (words.length) await this.store.markStruggling(userId, words, Date.now());
    return { gained, xp };
  }

  private item(c: SrsCard, now: number): StudyItem {
    const v = VOCAB_BY_ID.get(c.vocabId)!;
    return { vocabId: v.id, kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: v.level, state: c.state, intervals: previewIntervals(c, now) };
  }
}

function counts(cards: SrsCard[], now: number): DeckCounts {
  return {
    new: cards.filter((c) => c.state === 'new').length,
    learning: cards.filter((c) => (c.state === 'learning' || c.state === 'relearning') && isDue(c, now)).length,
    due: cards.filter((c) => c.state === 'review' && isDue(c, now)).length,
    total: cards.length,
  };
}
