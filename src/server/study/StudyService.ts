import { displayName } from '../db/Store';
import { randomUUID } from 'node:crypto';
import type { AdminUserRow, MatchDetail, MissedWord, PublicProfile, VocabEntry } from '../../shared/protocol';
import type { Level, OnoType } from '../../shared/protocol';
import { LEVELS, studyLevelOf } from '../../shared/protocol';
import { ACH_PREFIX, earnedAchievements, type AchFacts } from '../../shared/achievements';
import { taskPassed, BETA_BORDER, BORDERS, borderUnlocked, isBorder, type DailyTaskState, isKanaBeginner, KANA_BEGINNER, levelsFor, BACKGROUNDS, CRIT_BASE, critFor, dailyCrit, FLAMES, flameUnlocked, isBackground, isFlame, isStaff, STAFFS, staffUnlocked, levelOf, nextLocalMidnight, STUDY_LOCK, unlocked, xpFor, type BackgroundId, type FlameId, type MatchOutcome, type StaffId, isPose, POSE_DEFS, poseUnlocked, isCharacter, CHARACTER_DEFS, characterUnlocked, characterOf, poseOf } from '../../shared/progress';
import { answer, CUSTOM_PREFIX, deckOf, isDeck, isDue, newCard, previewIntervals, RATINGS, type CustomWord, type DeckId, type Rating, type SrsCard } from '../../shared/srs';
import { isCorrectReading } from '../../shared/kana';
import { displayReading } from '../../shared/vocab';
import { buildQuiz, kanaQuestion, type QuizQuestion } from '../../shared/quiz';
import { MATCH_HISTORY_LIMIT, SNAPSHOT_V, type DailyPlan, type Snapshot, type Store, type UserRecord } from '../db/Store';
import { shuffle } from '../VocabPool';
import { kanjiFacts, VOCAB, VOCAB_BY_ID } from '../vocab';
import { cleanKana, isKanaChar, kanaCells, masteredCount, type KanaProgress } from '../../shared/kanachart';
import { MASTERED_DAYS, playerDay, ProgressService, shiftDay, type MonthProgress, resolveToday } from './ProgressService';
import { now as clockNow } from '../now';
import { seededRng } from '../../shared/rng';
import { addPlay, cleanStats, isQuizKind, mergeStats, type QuizStats } from '../../shared/quizstats';

export const DAILY_NEW = 25; // default new words a day in "All spells"
export const DAILY_NEW_MIN = 10, DAILY_NEW_MAX = 150;
export const BADGES_MAX = 3;
/** a custom word's id: CUSTOM_PREFIX + 13 characters (a slice of a UUID) */
export const CUSTOM_ID = /^u:[0-9a-f-]{13}$/;
/** Matches with an AI player give half XP (an easy AI shouldn't be an XP farm). */
export const AI_XP_FACTOR = 0.5;
export type Deck = DeckId;
/** A word as the study screens see it: from the dictionary or one of your custom words. */
interface WordInfo { id: string; kanji: string; reading: string; meaning: string; level: Level; custom: boolean }
const fromVocab = (v: VocabEntry): WordInfo => ({ id: v.id, kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: studyLevelOf(v), custom: false });
const fromCustom = (w: CustomWord): WordInfo => ({ id: w.id, kanji: w.kanji, reading: w.reading, meaning: w.meaning, level: 'N5', custom: true });
/** One row of a deck's word list (Study → open a deck). */
export interface DeckRow { vocabId: string; kanji: string; reading: string; meaning: string; level: Level; custom: boolean; state: SrsCard['state']; addedAt: number | null; due: number; intervalDays: number; starred?: boolean }
/** A JLPT-style question: pick 1 of 4. */
export type { QuizQuestion } from '../../shared/quiz';

export interface Profile { xp: number; level: number; crit: number; learned: number; learnedToday: number; background: BackgroundId; studyLevels: Level[]; wins: number; losses: number; pic: string | null; flame: FlameId; staff: StaffId; strugglingDue: number; streak: number; bestStreak: number;
  tutorialDone: boolean; unlocks: string[]; month: MonthProgress; dailyNew: number; badges: string[]; quizStats: QuizStats;
  tasks: DailyTaskState[]; streakDay: string | null; border: string; starred: string[]; kana: KanaProgress }

/** Public URL of a profile picture (versioned, so browsers can cache it forever). */
export const picUrl = (u: { id: string; avatarV: number }) => (u.avatarV > 0 ? `/api/avatar/${u.id}?v=${u.avatarV}` : null);
const MAX_AVATAR_BYTES = 60 * 1024;
export interface DeckCounts { new: number; learning: number; due: number; total: number }
export interface StudyItem {
  vocabId: string; kanji: string; reading: string; meaning: string; level: Level;
  state: SrsCard['state']; intervals: Record<Rating, string>; custom?: boolean;
  /** onomatopoeia: which kind */
  ono?: OnoType;
}

export class StudyError extends Error { constructor(message: string, readonly status = 400) { super(message); } }

/** YYYY-MM-DD; the client's local date is trusted only within a day of the server's. */
export { resolveToday }; // (lives in ProgressService since 0.9.9.9.5 — the daily challenge uses it too)

/** 0.9.9.4.4: what an answer changed, so "Undo" can put it back (newest last, a few per player). */
interface UndoEntry { deck: DeckId; before: SrsCard; today: string; counted: boolean; critCounted: boolean; xp: number }
const UNDO_MAX = 30;
export const STAR_MAX = 300;

export class StudyService {
  readonly progress: ProgressService;
  private readonly undos = new Map<string, UndoEntry[]>();
  constructor(private readonly store: Store, private readonly rng: () => number = Math.random) {
    this.progress = new ProgressService(store);
  }

  async profile(u: UserRecord, now = clockNow()): Promise<Profile> {
    u = await this.migrateKana(u); // 0.9.9.9.5: kana leave the decks for the Kana section (once per account)
    // achievements earned outside a match (streaks, spells learned, friends, level, monthly rewards)
    if ((await this.grantAchievements(u.id)).length) u = (await this.store.findById(u.id)) ?? u;
    // the Beta border: everyone who has finished the tutorial (0.9.9.3.1)
    if ((u.tutorialDone ?? true) && !(u.unlocks ?? []).includes(BETA_BORDER)) u = (await this.store.update(u.id, { unlocks: [...(u.unlocks ?? []), BETA_BORDER] })) ?? u;
    const learned = await this.store.learnedCount(u.id);
    const learnedToday = now < u.critExpires ? u.critCount : 0;
    return {
      xp: u.xp, level: levelOf(u.xp), crit: dailyCrit(u.critCount, u.critExpires, now), learned, learnedToday, background: u.background,
      studyLevels: u.studyLevels, wins: u.wins, losses: u.losses, pic: picUrl(u), flame: u.flame ?? 'blue', staff: u.staff ?? 'verdant', strugglingDue: await this.strugglingDue(u.id, now),
      streak: liveStreak(u, playerDay(u, now)), bestStreak: u.bestStreak ?? 0, // (0.9.9.9.5: on the player's date)
      tutorialDone: u.tutorialDone ?? true, unlocks: u.unlocks ?? [], month: await this.progress.month(u, playerDay(u, now)),
      dailyNew: u.dailyNew ?? DAILY_NEW, badges: u.badges ?? [],
      tasks: await this.progress.tasks(u.id, playerDay(u, now)), streakDay: u.streakDay ?? null, border: u.border ?? 'none', starred: u.starred ?? [],
      kana: u.kana ?? {},
      quizStats: u.quizStats ?? {}, // 0.9.9.9.5.5
    };
  }

  /**
   * Daily login streak: called when the app opens (with the player's local date). Same day: nothing;
   * the day after: +1; a gap: back to 1.
   */
  async touchLogin(u: UserRecord, today: string): Promise<UserRecord> {
    if (u.loginDay === today) return u;
    // 0.9.9.3: logging in no longer counts for the streak — the four daily tasks do (ProgressService.checkStreak)
    const rec = (await this.store.update(u.id, { loginDay: today })) ?? u;
    await this.progress.record(u.id, today, { login: true });
    return (await this.store.findById(u.id)) ?? rec;
  }

  /** A daily task done in the browser (the JLPT quiz, a reading passage) — counts towards today's streak. */
  async recordTask(u: UserRecord, task: unknown, today: string, score?: unknown, total?: unknown) {
    if (task !== 'quiz' && task !== 'passage') throw new StudyError('Unknown task');
    // 0.9.9.4.3: only a good enough result counts (7/10 quiz, 4/8 passage); older apps send no score
    if (typeof score === 'number' && typeof total === 'number' && !taskPassed(task, score, total)) return this.profile(u);
    await this.progress.record(u.id, today, task === 'quiz' ? { quizzes: 1 } : { passages: 1 });
    // 0.9.9.9.5: a perfect quiz (10 / 10) or passage (8 / 8)
    if (typeof score === 'number' && typeof total === 'number' && score === total) {
      if (task === 'quiz' && total >= 10) await this.grantAchievements(u.id, undefined, ['ace']);
      if (task === 'passage' && total >= 8) await this.grantAchievements(u.id, undefined, ['every-word']);
    }
    return this.profile((await this.store.findById(u.id)) ?? u);
  }

  /**
   * 0.9.9.6: what a reminder needs to know — today's daily tasks, whether the Daily challenge is played, and how
   * many All spells cards are due for review (new cards not counted).
   */
  async notifyStatus(u: UserRecord, today: string, now = clockNow()) {
    const tasks = await this.progress.tasks(u.id, today);
    const all = counts((await this.store.cards(u.id)).filter((x) => deckOf(x) === 'all' && !!this.info(x.vocabId, new Map())), now);
    return {
      day: today,
      tasksLeft: tasks.filter((t) => t.value < t.target).length, tasksTotal: tasks.length,
      challengeDone: tasks.some((t) => t.id === 'daily' && t.value >= t.target),
      allDue: all.learning + all.due,
      streak: liveStreak(u, today),
    };
  }

  /** Struggling spells waiting to be studied (new, learning or due). */
  async strugglingDue(userId: string, now = clockNow()) {
    const c = counts((await this.store.cards(userId)).filter((x) => deckOf(x) === 'struggling' && VOCAB_BY_ID.has(x.vocabId)), now);
    return c.new + c.learning + c.due;
  }

  /** null, or why this player may not start a game right now (too many struggling spells waiting). Admins are never locked. */
  async playLock(u: { id: string; role: string }): Promise<string | null> {
    if (u.role === 'admin') return null;
    const n = await this.strugglingDue(u.id);
    return n > STUDY_LOCK ? `You have ${n} struggling spells waiting — study them down to ${STUDY_LOCK} to play again (Study spells → Struggling).` : null;
  }

  /** Colour of the combo flames (Purple from level 5; admins have all). */
  async setFlame(u: UserRecord, f: unknown) {
    if (!isFlame(f)) throw new StudyError('Unknown flame');
    const def = FLAMES.find((x) => x.id === f)!;
    if (u.role !== 'admin' && !flameUnlocked(f, u.xp, u.unlocks)) throw new StudyError(def.season ? 'A monthly reward: complete that month\'s goals' : `Unlocks at level ${def.level}`, 403);
    await this.store.update(u.id, { flame: f });
  }

  /** 0.9.9.7: the combo pose (kept in unlocks as "pose:<id>"; 0.9.9.7.1: unlocked by spells learned — 100 / 200 / 300; admins have all). */
  async setPose(u: UserRecord, p: unknown) {
    if (!isPose(p)) throw new StudyError('Unknown pose');
    const def = POSE_DEFS.find((x) => x.id === p)!;
    if (u.role !== 'admin' && !poseUnlocked(p, (await this.profile(u)).learned)) throw new StudyError(`Unlocks when you have learned ${def.learned} spells`, 403);
    await this.store.update(u.id, { unlocks: [...(u.unlocks ?? []).filter((x) => !x.startsWith('pose:')), ...(p === 'none' ? [] : [`pose:${p}`])] });
  }

  /** 0.9.9.9.5.2: your character (kept in unlocks as "char:<id>"; unlocked by your Daily challenge league; admins have all). */
  async setCharacter(u: UserRecord, c: unknown) {
    if (!isCharacter(c)) throw new StudyError('Unknown character');
    const def = CHARACTER_DEFS.find((x) => x.id === c)!;
    if (u.role !== 'admin' && !characterUnlocked(c, u.unlocks)) throw new StudyError(`Unlocks when you reach the ${def.league} league in the Daily challenge`, 403);
    await this.store.update(u.id, { unlocks: [...(u.unlocks ?? []).filter((x) => !x.startsWith('char:')), ...(c === 'goblin' ? [] : [`char:${c}`])] });
  }

  /** Magic staff skin (unlocked by your best login streak; admins have all). */
  async setStaff(u: UserRecord, s: unknown) {
    if (!isStaff(s)) throw new StudyError('Unknown staff');
    const def = STAFFS.find((x) => x.id === s)!;
    if (u.role !== 'admin' && !staffUnlocked(s, u.bestStreak ?? 0, u.unlocks)) throw new StudyError(def.season ? 'A monthly reward: complete that month\'s goals' : `Unlocks with a ${def.streak}-day daily streak`, 403);
    await this.store.update(u.id, { staff: s });
  }

  /** Today's crit chance (1% + 1% per spell learned today, max 50%; back to 1% at the player's midnight). */
  async crit(userId: string, now = clockNow()) {
    const u = await this.store.findById(userId);
    return u ? dailyCrit(u.critCount, u.critExpires, now) : CRIT_BASE;
  }

  /** What other players see when they click your name. */
  async publicProfile(id: string): Promise<PublicProfile | null> {
    const u = await this.store.findById(id);
    if (!u || u.banned) return null;
    return { id: u.id, name: displayName(u), login: u.nickname?.trim() ? u.username : undefined, level: levelOf(u.xp), wins: u.wins, losses: u.losses, learned: await this.store.learnedCount(u.id), pic: picUrl(u), since: u.createdAt, streak: liveStreak(u, playerDay(u, clockNow())), bestStreak: u.bestStreak ?? 0, badges: u.badges ?? [], border: u.border ?? 'none',
      // 0.9.9.9.5.5: "View profile" — what they wear (as Customize shows it) and the achievements they have
      look: { character: characterOf(u.unlocks), staff: u.staff ?? 'verdant', arena: u.background, flame: u.flame ?? 'blue', pose: poseOf(u.unlocks), border: u.border ?? 'none' },
      achievements: (u.unlocks ?? []).filter((x) => x.startsWith(ACH_PREFIX)).map((x) => x.slice(ACH_PREFIX.length)) };
  }

  matches(userId: string) { return this.store.matches(userId, MATCH_HISTORY_LIMIT); }
  match(userId: string, id: string) { return this.store.match(userId, id); }

  /** 0.9.9.4: your own data, for the app to keep working offline (client/offline). */
  async snapshot(u: UserRecord, dailyDay?: string): Promise<Snapshot> {
    const at = clockNow();
    const day = new Date(at).toISOString().slice(0, 10);
    const list = await this.store.matches(u.id, MATCH_HISTORY_LIMIT);
    const matches = (await Promise.all(list.map((m) => this.store.match(u.id, m.id)))).filter((m): m is MatchDetail => !!m);
    return {
      v: SNAPSHOT_V, at, user: { ...u, passwordHash: '' },
      cards: await this.store.cards(u.id), custom: await this.store.customWords(u.id), matches,
      activity: await this.store.activity(u.id, shiftDay(day, -400)),
      daily: dailyDay ? { day: dailyDay, result: await this.store.daily(dailyDay, u.id) } : null,
    };
  }

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
    // (0.9.9.9.5: kana are learned in the Kana section — never in All spells)
    const levels = Array.isArray(raw) ? LEVELS.filter((l) => raw.includes(l) && !isKanaLevel(l)) : [];
    // (older app versions) the levels share your "new spells a day"
    const per = splitDaily(levels, clampDaily(u.dailyNew));
    const rec = (await this.store.update(u.id, { studyLevels: levels, lastNewDate: levels.length ? u.lastNewDate : null, dailyPlan: { ...planOf(u, today), per } }))!;
    if (levels.length) await this.addDaily(rec, today);
  }

  /**
   * 0.9.9.4.4 — "All spells": how many new words of each level are added a day (0–150 each; 0 = not that level).
   * Raising a number today adds the difference right away.
   */
  async setDailyLevels(u: UserRecord, raw: unknown, today: string) {
    const per: Partial<Record<Level, number>> = {};
    const obj = raw && typeof raw === 'object' ? raw as Record<string, unknown> : {};
    const old = planOf(u, today).per;
    for (const l of LEVELS) {
      if (isKanaLevel(l)) continue; // 0.9.9.9.5: kana are learned in the Kana section
      const n = Math.round(Number(obj[l]));
      if (!Number.isFinite(n) || n <= 0) continue;
      per[l] = Math.min(DAILY_LEVEL_MAX, n);
    }
    if (old.ONO) per.ONO = old.ONO; // 0.9.9.7: the Onomatopoeia number has its own setting
    const levels = openLevels(per);
    const total = levels.reduce((a, l) => a + per[l]!, 0);
    const rec = (await this.store.update(u.id, {
      studyLevels: levels, dailyNew: clampDaily(total || u.dailyNew), lastNewDate: levels.length ? u.lastNewDate : null, dailyPlan: { ...planOf(u, today), per },
    }))!;
    if (levels.length) await this.addDaily(rec, today);
    return per;
  }

  // ── 0.9.9.9.5: push tokens (the Android app) ───────────────────────────────
  /** A phone's Firebase token: friends' invites reach it while the app is closed (the newest 4 phones). */
  async addPushToken(u: UserRecord, raw: unknown, lang?: unknown) {
    const token = typeof raw === 'string' ? raw.trim() : '';
    if (!/^[\w:.-]{20,400}$/.test(token)) throw new StudyError('Not a push token');
    // one phone, one account: signing in as someone else on it takes the token away from the first account
    for (const other of await this.store.usersWithPushToken?.(token) ?? []) if (other.id !== u.id) await this.store.update(other.id, { pushTokens: (other.pushTokens ?? []).filter((t) => t !== token) });
    const fresh = (await this.store.findById(u.id)) ?? u;
    // 0.9.9.9.5.3: and the game's language on that phone (the notification is written in it), as "plang:ru"
    const unlocks = lang === 'ru' || lang === 'en' ? [...(fresh.unlocks ?? []).filter((x) => !x.startsWith('plang:')), `plang:${lang}`] : fresh.unlocks;
    await this.store.update(u.id, { pushTokens: [...(fresh.pushTokens ?? []).filter((t) => t !== token), token].slice(-4), ...(unlocks !== fresh.unlocks ? { unlocks } : {}) });
  }
  async dropPushToken(u: UserRecord, raw: unknown) {
    const fresh = (await this.store.findById(u.id)) ?? u;
    await this.store.update(u.id, { pushTokens: (fresh.pushTokens ?? []).filter((t) => t !== raw) });
  }

  // ── 0.9.9.9.5: the Kana section ────────────────────────────────────────────
  /**
   * Once per account: the hiragana / katakana cards of All spells and Struggling spells become Kana section
   * progress (a card well learned = mastered, one being learned = a star or two) and leave those decks; the
   * kana levels leave the daily plan. Runs where the account is (the server, or the app offline) — the flag
   * makes it happen once.
   */
  async migrateKana(u: UserRecord): Promise<UserRecord> {
    if ((u.unlocks ?? []).includes(KANA_MIGRATED)) return u;
    const kana: KanaProgress = { ...(u.kana ?? {}) };
    const byDeck = new Map<DeckId, string[]>();
    for (const c of await this.store.cards(u.id)) {
      if (!isKanaId(c.vocabId)) continue;
      const deck = deckOf(c);
      if (deck === 'all' || deck === 'struggling') byDeck.set(deck, [...(byDeck.get(deck) ?? []), c.vocabId]);
      const ch = VOCAB_BY_ID.get(c.vocabId)?.kanji;
      if (!ch || !isKanaChar(ch)) continue;
      const stars = c.state === 'review' ? (c.intervalDays >= 7 ? 3 : 2) : c.state === 'new' ? 0 : 1;
      const was = kana[ch] ?? { s: 0 };
      const s = Math.max(was.s, stars);
      kana[ch] = was.m || (c.state === 'review' && c.intervalDays >= 7) ? { s, m: true } : { s };
    }
    for (const [deck, ids] of byDeck) await this.store.removeCards(u.id, deck, ids);
    const plan = u.dailyPlan ? { ...u.dailyPlan, per: Object.fromEntries(Object.entries(u.dailyPlan.per).filter(([l]) => !isKanaLevel(l as Level))) } : u.dailyPlan;
    return (await this.store.update(u.id, {
      kana: cleanKana(kana), studyLevels: u.studyLevels.filter((l) => !isKanaLevel(l)), dailyPlan: plan,
      unlocks: [...(u.unlocks ?? []), KANA_MIGRATED],
    })) ?? u;
  }

  /**
   * The Kana section saves its stars. A kana mastered for the first time gives 5 XP; kana that got a star count
   * as studied today (the daily task, the month's goal). All 46 basic hiragana mastered: a かな beginner graduates.
   */
  async setKana(u: UserRecord, raw: unknown, today: string) {
    const changes = cleanKana(raw);
    const kana: KanaProgress = { ...(u.kana ?? {}) };
    let newlyMastered = 0;
    for (const [ch, v] of Object.entries(changes)) {
      const was = kana[ch] ?? { s: 0 };
      if (v.m && !was.m) newlyMastered++;
      kana[ch] = was.m || v.m ? { s: v.s, m: true } : { s: v.s }; // mastered stays mastered
    }
    await this.store.update(u.id, { kana });
    const xp = newlyMastered * KANA_MASTER_XP;
    if (xp) await this.store.addXp(u.id, xp);
    // 0.9.9.9.5.4: every kana practised counts for the day (the activity calendar, friends, the streak task) —
    // it counted only the ones that gained a star, so a session of mixed answers could leave no trace
    const practised = Object.keys(changes).length;
    if (practised || xp) await this.progress.record(u.id, today, { reviews: practised, xp });
    if (isKanaBeginner(u.unlocks) && kanaCells('hira', 'basic').every((c) => kana[c.ch]?.m)) await this.setKanaMastered((await this.store.findById(u.id)) ?? u, true);
    return { kana, xp };
  }

  /** "I've mastered hiragana" (Settings) — or, for a new player who says they're a beginner, not yet. */
  async setKanaMastered(u: UserRecord, mastered: boolean) {
    const rest = (u.unlocks ?? []).filter((x) => x !== KANA_BEGINNER);
    await this.store.update(u.id, { unlocks: mastered ? rest : [...rest, KANA_BEGINNER] });
    if (mastered && isKanaBeginner(u.unlocks)) await this.grantAchievements(u.id, undefined, ['graduate']);
    // 0.9.9.9.5: a beginner learns kana in the Kana section (All spells keeps its words either way); nothing else changes
  }

  /**
   * Adds today's new words to All spells: for each level, its "new a day" (0.9.9.4.4; before: one number shared
   * by the levels you ticked); tops up if you raised a number.
   */
  private async addDaily(u: UserRecord, today: string): Promise<number> {
    const plan = planOf(u, today);
    const done = { ...plan.done };
    const have = new Set((await this.store.cards(u.id)).filter((c) => deckOf(c) === 'all').map((c) => c.vocabId));
    const now = clockNow();
    let added = 0;
    for (const l of u.studyLevels) {
      if (isKanaLevel(l)) continue; // 0.9.9.9.5: kana are learned in the Kana section
      const want = Math.max(0, (plan.per[l] ?? 0) - (done[l] ?? 0));
      if (!want) continue;
      // seeded by player + day + level (0.9.9.4): the app offline and the server pick the same words, so study
      // done offline on today's new cards replays cleanly
      const fresh = shuffle(VOCAB.filter((v) => studyLevelOf(v) === l && !have.has(v.id)), seededRng(`${u.id}:${today}:${l}:${done[l] ?? 0}`)).slice(0, want);
      const n = (await this.store.addCards(u.id, fresh.map((v) => newCard(v.id, now, 'all')))).length;
      done[l] = (done[l] ?? 0) + (fresh.length < want ? want : n); // a level with nothing left counts as done
      added += n;
    }
    const before = u.lastNewDate === today ? u.newToday ?? 0 : 0;
    await this.store.update(u.id, { lastNewDate: today, newToday: before + added, newNotice: u.newNotice + added, dailyPlan: { per: plan.per, day: today, done } });
    return added;
  }

  /** Study → "New spells a day" (10–150), older app versions: shared by the ticked levels. */
  /** 0.9.9.7: new Onomatopoeia words a day (0 = none; it held every word as new before). */
  async setOnoDaily(u: UserRecord, raw: unknown, today: string) {
    const n = Math.max(0, Math.min(ONO_DAILY_MAX, Math.round(Number(raw)) || 0));
    const plan = planOf(u, today);
    await this.store.update(u.id, { dailyPlan: { ...plan, per: { ...plan.per, ONO: n } } });
    return n;
  }
  /** new Onomatopoeia words still allowed today */
  private onoLeft(u: UserRecord, today: string) {
    const plan = planOf(u, today);
    return Math.max(0, (plan.per.ONO ?? 0) - (plan.done.ONO ?? 0));
  }

  async setDailyNew(u: UserRecord, raw: unknown, today: string) {
    const n = clampDaily(Number(raw));
    const rec = (await this.store.update(u.id, { dailyNew: n, dailyPlan: { ...planOf(u, today), per: splitDaily(u.studyLevels, n) } }))!;
    if (rec.studyLevels.length && rec.lastNewDate === today) await this.addDaily(rec, today);
    return n;
  }

  // ── decks: word lists, removing, adding, custom words ─────────────────────
  private async words(userId: string): Promise<Map<string, WordInfo>> {
    const custom = await this.store.customWords(userId);
    return new Map(custom.map((w) => [w.id, fromCustom(w)]));
  }
  private info(id: string, custom: Map<string, WordInfo>): WordInfo | null {
    const v = VOCAB_BY_ID.get(id);
    return v ? fromVocab(v) : custom.get(id) ?? null;
  }

  /** Study → open a deck: every word in it, newest first. */
  async deckList(u: UserRecord, deck: unknown): Promise<DeckRow[]> {
    if (!isDeck(deck)) throw new StudyError('Unknown deck');
    if (deck === 'ono') await this.fillOno(u.id);
    const custom = await this.words(u.id);
    const stars = new Set(u.starred ?? []);
    return (await this.store.cards(u.id)).filter((c) => deckOf(c) === deck).flatMap((c) => {
      const w = this.info(c.vocabId, custom);
      return w ? [{ vocabId: w.id, kanji: w.kanji, reading: w.reading, meaning: w.meaning, level: w.level, custom: w.custom, state: c.state, addedAt: c.addedAt ?? null, due: c.due, intervalDays: c.intervalDays, starred: stars.has(w.id) }] : [];
    }).sort((a, b) => (b.addedAt ?? 0) - (a.addedAt ?? 0));
  }

  /** ★ a word (0.9.9.5): starred words go into your reading passages first. At most STAR_MAX. */
  async setStar(u: UserRecord, id: unknown, on: unknown): Promise<string[]> {
    if (typeof id !== 'string' || !id || id.length > 64) throw new StudyError('Unknown word');
    const rest = (u.starred ?? []).filter((x) => x !== id);
    if (on === true && rest.length >= STAR_MAX) throw new StudyError(`You can star up to ${STAR_MAX} words`);
    const starred = on === true ? [...rest, id] : rest;
    await this.store.update(u.id, { starred });
    return starred;
  }

  async removeFromDeck(u: UserRecord, deck: unknown, ids: unknown) {
    if (!isDeck(deck)) throw new StudyError('Unknown deck');
    const list = Array.isArray(ids) ? ids.filter((x): x is string => typeof x === 'string').slice(0, 500) : [];
    const n = await this.store.removeCards(u.id, deck, list);
    // a custom word removed from Custom spells (and in no other deck) is gone for good
    if (deck === 'custom') {
      const still = new Set((await this.store.cards(u.id)).map((c) => c.vocabId));
      for (const id of list) if (id.startsWith(CUSTOM_PREFIX) && !still.has(id)) await this.store.deleteCustomWord(u.id, id);
    }
    return n;
  }

  /** Put words in a deck (dictionary or your custom words). Returns the ids that were new there. */
  async addToDeck(u: UserRecord, deck: unknown, ids: unknown): Promise<string[]> {
    if (!isDeck(deck)) throw new StudyError('Unknown deck');
    const custom = await this.words(u.id);
    // (kana live in the Kana section, never in a deck — 0.9.9.9.5.1: the quiz's kana misses were offered to one)
    const list = (Array.isArray(ids) ? ids : []).filter((x): x is string => typeof x === 'string' && !isKanaId(x) && !!this.info(x, custom)).slice(0, 500);
    const now = clockNow();
    return this.store.addCards(u.id, [...new Set(list)].map((id) => newCard(id, now, deck)));
  }

  /** Search the dictionary (kanji, kana reading or English meaning) for Custom spells. */
  search(q: unknown, limit = 20): WordInfo[] {
    const s = String(q ?? '').trim().toLowerCase().normalize('NFKC');
    if (!s) return [];
    const out: WordInfo[] = [];
    const exact: WordInfo[] = [];
    for (const v of VOCAB) {
      const reading = displayReading(v);
      const hit = v.kanji === s || reading === s ? 'exact' : v.kanji.includes(s) || reading.includes(s) || v.meaning.toLowerCase().includes(s) ? 'part' : null;
      if (hit === 'exact') exact.push(fromVocab(v)); else if (hit && out.length < limit) out.push(fromVocab(v));
    }
    return [...exact, ...out].slice(0, limit);
  }

  /**
   * Custom spells: add a word. A dictionary word (by its id, or kanji [+ reading]) is used as it is;
   * anything else becomes your own word — then a reading (kana) and a meaning are needed.
   */
  async addCustom(u: UserRecord, body: { vocabId?: unknown; kanji?: unknown; reading?: unknown; meaning?: unknown; id?: unknown }) {
    if (typeof body.vocabId === 'string' && VOCAB_BY_ID.has(body.vocabId)) return { added: (await this.addToDeck(u, 'custom', [body.vocabId])).length > 0, word: fromVocab(VOCAB_BY_ID.get(body.vocabId)!) };
    const kanji = String(body.kanji ?? '').trim().normalize('NFKC').slice(0, 16);
    const reading = String(body.reading ?? '').trim().normalize('NFKC').slice(0, 32);
    const meaning = String(body.meaning ?? '').trim().slice(0, 120);
    if (!kanji) throw new StudyError('Write the word (kanji or kana)');
    const known = VOCAB.find((v) => v.kanji === kanji && (!reading || isCorrectReading(reading, [v.reading, ...(v.altReadings ?? [])])));
    if (known) return { added: (await this.addToDeck(u, 'custom', [known.id])).length > 0, word: fromVocab(known) };
    if (!/^[぀-ゟ゠-ヿー]+$/.test(reading)) throw new StudyError('Not in the dictionary — add its reading in kana (e.g. まほう)');
    if (!meaning) throw new StudyError('Add a meaning');
    const mine = await this.store.customWords(u.id);
    if (mine.length >= 1000) throw new StudyError('Custom spells are full (1000 words)');
    const dupe = mine.find((w) => w.kanji === kanji && w.reading === reading);
    // the app picks the id itself (0.9.9.4), so a word added offline keeps it when the outbox is replayed
    const asked = typeof body.id === 'string' && CUSTOM_ID.test(body.id) && !mine.some((x) => x.id === body.id) ? body.id : null;
    const w: CustomWord = dupe ?? { id: asked ?? CUSTOM_PREFIX + randomUUID().slice(0, 13), kanji, reading, meaning, createdAt: clockNow() };
    if (!dupe) await this.store.addCustomWord(u.id, w);
    return { added: (await this.addToDeck(u, 'custom', [w.id])).length > 0, word: fromCustom(w) };
  }

  /**
   * JLPT-style quiz from the words you have studied (answered at least once): reading, meaning or "which kanji" —
   * 4 choices, made-up near misses like the real test's (0.9.9.9.5). Like the reading passage, it can take its words
   * from one deck and the JLPT levels you tick (your own typed words always count); none given = every deck / level.
   */
  async quiz(u: UserRecord, n = 10, opts: { deck?: unknown; levels?: unknown } = {}): Promise<QuizQuestion[]> {
    const deck = isDeck(opts.deck) && opts.deck !== 'ono' ? opts.deck : null;
    // 0.9.9.9.5.1: "KANA" = hiragana and katakana (the Kana section's), so a beginner can take the quiz too
    const wantKana = Array.isArray(opts.levels) && (opts.levels as unknown[]).includes('KANA');
    const levels = Array.isArray(opts.levels) ? LEVELS.filter((l) => l !== 'KANA' && l !== 'KATA' && (opts.levels as unknown[]).includes(l)) : [];
    if (wantKana) {
      // the kana you have met in Kana (all 46 basic hiragana while you have met fewer than 4), with the levels' words
      const met = Object.entries(u.kana ?? {}).filter(([ch, k]) => isKanaChar(ch) && (k.s > 0 || k.m)).map(([ch]) => ch);
      const kana = met.length >= 4 ? met : kanaCells('hira', 'basic').map((c) => c.ch);
      const words = levels.length ? await this.quiz(u, n, { deck: opts.deck, levels }) : [];
      const kq = shuffle(kana, this.rng).slice(0, n).map((ch) => kanaQuestion(ch, this.rng)).filter((q): q is QuizQuestion => !!q);
      // both: a fair mix (kana for about half when there are enough words)
      const take = words.length ? Math.min(kq.length, Math.max(n - words.length, Math.round(n / 2))) : kq.length;
      return shuffle([...kq.slice(0, take), ...words.slice(0, n - take)], this.rng).slice(0, n);
    }
    const custom = await this.words(u.id);
    const cards = (await this.store.cards(u.id)).filter((c) => !deck || deckOf(c) === deck);
    const fits = (w: WordInfo | null): w is WordInfo => !!w && w.level !== 'ONO' && !isKanaId(w.id) && (w.custom || !levels.length || levels.includes(w.level));
    const studied = new Map<string, WordInfo>();
    // (onomatopoeia have their own quiz; kana have the Kana section)
    for (const c of cards) if (c.reps > 0 || c.state !== 'new') { const w = this.info(c.vocabId, custom); if (fits(w)) studied.set(w.id, w); }
    if (studied.size < 4) for (const c of cards) { const w = this.info(c.vocabId, custom); if (fits(w)) studied.set(w.id, w); }
    const pool = shuffle([...studied.values()], this.rng).slice(0, Math.max(1, Math.min(30, n)));
    return buildQuiz(pool, VOCAB, this.rng, (id) => VOCAB_BY_ID.get(id), kanjiFacts);
  }

  /** Quiz / results: words you got wrong → a deck of your choice. */
  async saveMissed(u: UserRecord, deck: unknown, ids: unknown) { return this.addToDeck(u, deck, ids); }

  /** Opening the study screen: top up today's new cards, report counts, and hand over any "new spells" notice once. */
  async summary(u: UserRecord, today: string, now = clockNow()) {
    if (u.studyLevels.length && u.lastNewDate !== today) await this.addDaily(u, today);
    const fresh = (await this.store.findById(u.id))!;
    const notice = fresh.newNotice;
    if (notice) await this.store.update(u.id, { newNotice: 0 });
    const custom = await this.words(u.id);
    await this.fillOno(u.id);
    const cards = (await this.store.cards(u.id)).filter((c) => !!this.info(c.vocabId, custom));
    return {
      studyLevels: fresh.studyLevels,
      notice,
      decks: { all: counts(cards.filter((c) => deckOf(c) === 'all'), now), struggling: counts(cards.filter((c) => deckOf(c) === 'struggling'), now), custom: counts(cards.filter((c) => deckOf(c) === 'custom'), now), ono: onoCounts(counts(cards.filter((c) => deckOf(c) === 'ono'), now), this.onoLeft(fresh, today)) },
      onoDaily: planOf(fresh, today).per.ONO ?? 0,
      dailyNew: fresh.dailyNew ?? DAILY_NEW,
      dailyByLevel: planOf(fresh, today).per,
      studyXpToday: (await this.store.activity(u.id, today)).find((a) => a.day === today)?.studyXp ?? 0,
      profile: await this.profile(fresh),
    };
  }

  /** Cards to study now, Anki order: (re)learning due → reviews due → new. */
  async queue(u: UserRecord, deck: Deck, now = clockNow(), limit = 500, today = resolveToday(undefined, now)): Promise<StudyItem[]> { // 0.9.9.4.3: was 60 — a big day came in two sessions
    if (!isDeck(deck)) throw new StudyError('Unknown deck');
    const custom = await this.words(u.id);
    if (deck === 'ono') await this.fillOno(u.id);
    const cards = (await this.store.cards(u.id)).filter((c) => deckOf(c) === deck && !!this.info(c.vocabId, custom));
    const rank = (c: SrsCard) => (c.state === 'learning' || c.state === 'relearning' ? 0 : c.state === 'review' ? 1 : 2);
    // Onomatopoeia: the deck holds every word; new ones come as many a day as you set (0.9.9.7), in your own fixed order
    const onoNew = deck === 'ono' ? this.onoLeft((await this.store.findById(u.id)) ?? u, today) : 0;
    const order = deck === 'ono' ? new Map(shuffle(cards.map((c) => c.vocabId).sort(), seededRng(`${u.id}:ono`)).map((id, i) => [id, i])) : null;
    let fresh = 0;
    return cards
      .filter((c) => c.state === 'new' || isDue(c, now))
      .sort((a, b) => rank(a) - rank(b) || (order && a.state === 'new' && b.state === 'new' ? order.get(a.vocabId)! - order.get(b.vocabId)! : a.due - b.due))
      .filter((c) => !order || c.state !== 'new' || fresh++ < onoNew)
      .slice(0, limit)
      .map((c) => this.item(c, now, custom));
  }

  async review(u: UserRecord, vocabId: unknown, rating: unknown, now = clockNow(), today = resolveToday(undefined, now), tzOffsetMin = 0, deck: unknown = 'all') {
    if (typeof vocabId !== 'string' || !RATINGS.includes(rating as Rating)) throw new StudyError('Bad review');
    const d: DeckId = isDeck(deck) ? deck : 'all';
    const card = await this.store.card(u.id, d, vocabId);
    if (!card) throw new StudyError('No such card', 404);
    const next = answer(card, rating as Rating, now);
    // 0.9.9.4.4.2: every card you answer gives STUDY_XP (up to STUDY_XP_DAILY a day)
    const todayXp = (await this.store.activity(u.id, today)).find((a) => a.day === today)?.studyXp ?? 0;
    const xp = todayXp + STUDY_XP <= STUDY_XP_DAILY ? STUDY_XP : 0;
    if (xp) { await this.store.addXp(u.id, xp); await this.store.addActivity(u.id, today, { studyXp: xp, xp }); }
    const stack = this.undos.get(u.id) ?? [];
    stack.push({ deck: d, before: card, today, counted: rating !== 'again', critCounted: rating !== 'again' && card.critDay !== today, xp });
    if (stack.length > UNDO_MAX) stack.shift();
    this.undos.set(u.id, stack);
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
    if (d === 'ono' && card.state === 'new') { // 0.9.9.7: one of today's new Onomatopoeia words
      const fresh = (await this.store.findById(u.id)) ?? u;
      const plan = planOf(fresh, today);
      await this.store.update(u.id, { dailyPlan: { ...plan, done: { ...plan.done, ONO: (plan.done.ONO ?? 0) + 1 } } });
    }
    if (rating !== 'again') await this.progress.record(u.id, today, { reviews: 1 });
    return { card: next, crit: await this.crit(u.id, now), xp };
  }

  /**
   * 0.9.9.4.4: "Undo" in a study session — the last answer to this card goes back to how it was (its schedule,
   * the day's review count and crit). Only the newest answer can be undone, one at a time.
   */
  async undo(u: UserRecord, vocabId: unknown, deck: unknown = 'all') {
    const stack = this.undos.get(u.id) ?? [];
    const last = stack[stack.length - 1];
    const d: DeckId = isDeck(deck) ? deck : 'all';
    if (!last || last.before.vocabId !== vocabId || last.deck !== d) throw new StudyError('Nothing to undo', 409);
    stack.pop();
    await this.store.saveCard(u.id, last.before);
    if (d === 'ono' && last.before.state === 'new') { // a new Onomatopoeia word goes back to today's allowance
      const fresh = (await this.store.findById(u.id)) ?? u;
      const plan = planOf(fresh, last.today);
      await this.store.update(u.id, { dailyPlan: { ...plan, done: { ...plan.done, ONO: Math.max(0, (plan.done.ONO ?? 0) - 1) } } });
    }
    if (last.counted) await this.store.addActivity(u.id, last.today, { reviews: -1 });
    if (last.xp) { await this.store.addXp(u.id, -last.xp); await this.store.addActivity(u.id, last.today, { studyXp: -last.xp, xp: -last.xp }); }
    if (last.critCounted) {
      const fresh = (await this.store.findById(u.id)) ?? u;
      if (fresh.critCount > 0) await this.store.update(u.id, { critCount: fresh.critCount - 1 });
    }
    return { card: last.before, crit: await this.crit(u.id) };
  }

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
  async recordMatch(userId: string, outcome: MatchOutcome, accuracy: number, mode: string, missedIds: string[], forfeited = false, vsAi = false, record?: Omit<MatchDetail, 'id'>, seen: string[] = [], beatAdmin = false) {
    if (record) await this.store.addMatch(userId, record);
    const gained = forfeited ? 0 : Math.round(xpFor(outcome, accuracy, mode) * (vsAi ? AI_XP_FACTOR : 1));
    const xp = gained ? await this.store.addXp(userId, gained) : (await this.store.findById(userId))?.xp ?? 0;
    await this.store.addResult(userId, outcome);
    const who = await this.store.findById(userId);
    if (who) await this.progress.record(userId, playerDay(who), { games: 1, wins: outcome === 'win' ? 1 : 0, xp: gained });
    // missed words go to Struggling spells right away (pre-ticked); the results screen can undo it or move them
    // (0.9.9.9.5: kana aren't put in decks — they're practised in the Kana section)
    const words = [...new Set(missedIds.filter((id) => VOCAB_BY_ID.has(id) && !isKanaId(id)))];
    const added = new Set(words.length ? await this.store.markStruggling(userId, words, clockNow()) : []);
    const missed: MissedWord[] = words.map((id) => { const v = VOCAB_BY_ID.get(id)!; return { id, kanji: v.kanji, reading: displayReading(v), meaning: v.meaning, level: v.level, added: added.has(id) }; });
    // Deck Duel: every kanji of the duel joins All spells as a new card (cards you already have are left alone)
    const met = seen.filter((id) => VOCAB_BY_ID.has(id) && !isKanaId(id));
    if (met.length) {
      const n = (await this.store.addCards(userId, met.map((id) => newCard(id, clockNow(), 'all')))).length;
      const u = n ? await this.store.findById(userId) : null;
      if (u) await this.store.update(userId, { newNotice: u.newNotice + n });
    }
    const st = record?.stats[userId];
    // 0.9.9.9.5: the feats — your HP at the end, how fast, who you beat
    const me = record?.players.find((p) => p.id === userId);
    const won = outcome === 'win';
    const achievements = await this.grantAchievements(userId, {
      mode, outcome, accuracy, attempts: st?.attempts ?? 0, bestCombo: st?.bestCombo ?? 0, forfeited, beatAdmin,
      hpLeft: me && me.maxHp > 0 ? Math.max(0, me.hp) / me.maxHp : undefined, avgMs: st?.avgResponseMs ?? null, correct: st?.correct ?? 0,
      beatN1Bot: won && !!record?.players.some((p) => p.bot === 'N1'),
      giant: won && !!me && !!record?.players.some((p) => !p.bot && p.id !== userId && p.level >= me.level + 5),
    });
    return { gained, xp, achievements, missed };
  }

  /** Grants every achievement the player has now earned (plus `extra`); returns the new ones. */
  /** what the achievements are checked against (0.9.9.6.1: also sent to the Progress page, for "12 / 50") */
  async achFacts(u: UserRecord, match?: AchFacts['match']): Promise<AchFacts> {
    const userId = u.id;
    const unlocks = u.unlocks ?? [];
    // 0.9.9.6: lifetime totals from the daily activity, mastered and custom words, stars, a nickname
    const days = await this.store.activity(userId, '0000-01-01');
    const sum = (k: 'reviews' | 'games' | 'quizzes' | 'passages' | 'challenges') => days.reduce((a, d) => a + (d[k] ?? 0), 0);
    const cards = await this.store.cards(userId);
    return {
      wins: u.wins, level: levelOf(u.xp), bestStreak: u.bestStreak ?? 0, learned: await this.store.learnedCount(userId),
      friends: (await this.store.friends(userId)).filter((f) => f.status === 'accepted').length,
      seasonal: unlocks.filter((x) => x.startsWith('flame:') || x.startsWith('staff:')).length, match,
      reviews: sum('reviews'), games: sum('games'), quizzes: sum('quizzes'), passages: sum('passages'), challenges: sum('challenges'),
      activeDays: days.filter((d) => d.login || d.reviews > 0 || d.games > 0).length,
      mastered: new Set(cards.filter((c) => c.state === 'review' && c.intervalDays >= MASTERED_DAYS).map((c) => c.vocabId)).size,
      starred: (u.starred ?? []).length, custom: cards.filter((c) => deckOf(c) === 'custom').length, nickname: !!u.nickname?.trim(),
      // 0.9.9.9.5: the Kana section, and the most study cards answered in one day
      kanaBasic: masteredCount(u.kana ?? {}, kanaCells('hira', 'basic')), kanaHira: masteredCount(u.kana ?? {}, kanaCells('hira')),
      kanaKata: masteredCount(u.kana ?? {}, kanaCells('kata')), bestDay: days.reduce((a, d) => Math.max(a, d.reviews ?? 0), 0),
    };
  }

  async grantAchievements(userId: string, match?: AchFacts['match'], extra: string[] = []): Promise<string[]> {
    const u = await this.store.findById(userId);
    if (!u) return [];
    const unlocks = u.unlocks ?? [];
    const facts = await this.achFacts(u, match);
    const had = unlocks.filter((x) => x.startsWith(ACH_PREFIX)).map((x) => x.slice(ACH_PREFIX.length));
    const fresh = [...new Set([...earnedAchievements(facts, had), ...extra])].filter((id) => !unlocks.includes(ACH_PREFIX + id));
    if (fresh.length) await this.store.update(userId, { unlocks: [...unlocks, ...fresh.map((id) => ACH_PREFIX + id)] });
    return fresh;
  }

  private item(c: SrsCard, now: number, custom: Map<string, WordInfo>): StudyItem {
    const w = this.info(c.vocabId, custom)!;
    const ono = VOCAB_BY_ID.get(c.vocabId)?.ono;
    return { vocabId: w.id, kanji: w.kanji, reading: w.reading, meaning: w.meaning, level: w.level, state: c.state, intervals: previewIntervals(c, now), custom: w.custom, ...(ono ? { ono } : {}) };
  }

  /** 0.9.9.4.4: the Onomatopoeia deck holds every onomatopoeia word — put them in when it is empty (new words too) */
  private async fillOno(userId: string) {
    // only an empty deck is filled (a word you took out stays out)
    if ((await this.store.cards(userId)).some((c) => deckOf(c) === 'ono')) return;
    const now = clockNow();
    await this.store.addCards(userId, onoWords().map((v) => newCard(v.id, now, 'ono')));
  }

  /** Avatar border (Customize → Profile), unlocked by level; admins have all. */
  async setBorder(u: UserRecord, b: unknown) {
    if (!isBorder(b)) throw new StudyError('Unknown border');
    const def = BORDERS.find((x) => x.id === b)!;
    if (u.role !== 'admin' && !borderUnlocked(b, levelOf(u.xp), u.unlocks)) throw new StudyError(def.league ? `Reach the ${def.league === 'KANA' ? 'Kana' : def.league} league in the Daily challenge first` : def.unlock ? 'Finish the tutorial to get the Beta border' : `Unlocks at level ${def.level}`, 403);
    await this.store.update(u.id, { border: b });
    return this.profile((await this.store.findById(u.id)) ?? u);
  }

  /** 0.9.9.9.5.5: a finished quiz (Quizzes screen records — with the account, the same on every device) */
  async recordQuiz(u: UserRecord, kind: unknown, score: unknown, total: unknown, ms: unknown): Promise<QuizStats> {
    if (!isQuizKind(kind)) throw new StudyError('No such quiz');
    const t = Number(total), sc = Number(score), time = Number(ms) || 0;
    if (!Number.isInteger(t) || t < 1 || t > 200 || !Number.isInteger(sc) || sc < 0 || sc > t) throw new StudyError('Bad score');
    const now = (await this.store.findById(u.id)) ?? u;
    const stats: QuizStats = { ...(now.quizStats ?? {}), [kind]: addPlay(now.quizStats?.[kind], sc, t, Number.isFinite(time) ? time : 0, clockNow()) };
    await this.store.update(u.id, { quizStats: stats });
    return stats;
  }
  /** 0.9.9.9.5.5: a device's records from before (they were kept only there) — added to the account's, once */
  async mergeQuizStats(u: UserRecord, local: unknown): Promise<QuizStats> {
    const now = (await this.store.findById(u.id)) ?? u;
    const stats = mergeStats(now.quizStats ?? {}, cleanStats(local));
    await this.store.update(u.id, { quizStats: stats });
    return stats;
  }

  /** Profile badges: up to 3 of your achievements, shown under your name. */
  async setBadges(u: UserRecord, raw: unknown) {
    const have = new Set((u.unlocks ?? []).filter((x) => x.startsWith(ACH_PREFIX)).map((x) => x.slice(ACH_PREFIX.length)));
    const list = [...new Set(Array.isArray(raw) ? raw.filter((x): x is string => typeof x === 'string') : [])];
    if (list.length > BADGES_MAX) throw new StudyError(`Pick up to ${BADGES_MAX} badges`);
    if (list.some((id) => !have.has(id))) throw new StudyError('You can only show achievements you have earned');
    await this.store.update(u.id, { badges: list });
    return list;
  }
}

export const DAILY_LEVEL_MAX = 150;
/** XP for each study card you answer, and the most a day from cards */
export const STUDY_XP = 5, STUDY_XP_DAILY = 500;
/** new onomatopoeia cards a day: at most (0.9.9.7: you choose; it was 20 a session) */
export const ONO_DAILY_MAX = 100;
/** the Onomatopoeia deck's "new": only as many as today still allows */
const onoCounts = (c: DeckCounts, left: number): DeckCounts => ({ ...c, new: Math.min(c.new, left) });
// (a function: in the app's offline engine the word list loads after this module)
const onoWords = () => VOCAB.filter((v) => v.level === 'ONO');
/** one "new a day" number shared by levels (before 0.9.9.4.4) → per level */
export function splitDaily(levels: readonly Level[], total: number): Partial<Record<Level, number>> {
  const per: Partial<Record<Level, number>> = {};
  levels.forEach((l, i) => { per[l] = Math.floor(total / levels.length) + (i < total % levels.length ? 1 : 0); });
  return per;
}
/** a player's per-level plan for `today` (an account from before 0.9.9.4.4: its levels share its daily number) */
/** The levels that add words each day: those with a number above 0 — only かな ones for a beginner. */
function openLevels(per: Partial<Record<Level, number>>): Level[] {
  return LEVELS.filter((l) => (per[l] ?? 0) > 0 && !isKanaLevel(l)); // (0.9.9.9.5: never kana — the Kana section)
}
const isKanaLevel = (l: Level) => l === 'KANA' || l === 'KATA';
/** a hiragana / katakana entry of the word list (kana:あ, kata:ア) */
const isKanaId = (id: string) => id.startsWith('kana:') || id.startsWith('kata:');
const KANA_MIGRATED = 'mig:kana-section';
const KANA_MASTER_XP = 5;

export function planOf(u: Pick<UserRecord, 'dailyPlan' | 'studyLevels' | 'dailyNew' | 'lastNewDate' | 'newToday'>, today: string): DailyPlan {
  const per = u.dailyPlan?.per ?? splitDaily(u.studyLevels, clampDaily(u.dailyNew));
  if (u.dailyPlan?.day === today) return { per, day: today, done: { ...u.dailyPlan.done } };
  // the day this version arrives: what the old single counter added today counts as done
  const legacy = !u.dailyPlan && u.lastNewDate === today && (u.newToday ?? 0) > 0;
  return { per, day: today, done: legacy ? { ...per } : {} };
}
const clampDaily = (n: number) => Math.max(DAILY_NEW_MIN, Math.min(DAILY_NEW_MAX, Math.round(Number.isFinite(n) ? n : DAILY_NEW)));
const dayBefore = (d: string) => new Date(Date.parse(d) - 86_400_000).toISOString().slice(0, 10);
/** A streak still counts if the last login was today or yesterday (a day of slack for time zones). */
function liveStreak(u: UserRecord, today: string) {
  if (!u.streakDay) return 0;
  return u.streakDay >= dayBefore(dayBefore(today)) ? u.streak ?? 0 : 0; // done today or yesterday (a day of slack for time zones)
}

function counts(cards: SrsCard[], now: number): DeckCounts {
  return {
    new: cards.filter((c) => c.state === 'new').length,
    learning: cards.filter((c) => (c.state === 'learning' || c.state === 'relearning') && isDue(c, now)).length,
    due: cards.filter((c) => c.state === 'review' && isDue(c, now)).length,
    total: cards.length,
  };
}
