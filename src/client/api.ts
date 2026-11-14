import type { QuizStats } from '../shared/quizstats';
import type { DmView } from '../shared/protocol';
/** 0.9.9.9.6: one conversation of the messenger */
export interface Conversation { id: string; name: string; pic: string | null; online: boolean; support: boolean; last: DmView; unread: number; friend: boolean; muted?: boolean }
import type { KanaProgress } from '../shared/kanachart';
import type { AdminUserRow, Device, Level, MatchDetail, MatchSummary, OnoType, PublicProfile, PublicUser } from '../shared/protocol';
import type { BackgroundId, DailyTaskState, FlameId, StaffId } from '../shared/progress';
import type { CardState, DeckId, Rating } from '../shared/srs';

export interface Profile { xp: number; level: number; crit: number; learned: number; learnedToday: number; wins: number; losses: number; pic: string | null; background: BackgroundId; studyLevels: Level[]; flame: FlameId; staff: StaffId; strugglingDue: number; streak: number; bestStreak: number;
  tutorialDone: boolean; unlocks: string[]; month: MonthProgress; dailyNew?: number; badges?: string[];
  tasks?: DailyTaskState[]; streakDay?: string | null; border?: string; starred?: string[]; kana?: KanaProgress; /** 0.9.9.9.5.5 */ quizStats?: QuizStats }
export interface MonthProgress { month: string; name: string; reward: string; goals: Array<{ id: string; label: string; target: number; value: number }>; done: boolean; unlocked: boolean }
export interface DayActivity { day: string; login: boolean; reviews: number; games: number; wins: number; xp: number }
/** 0.9.9.7: a dictionary word (server/study/DictService.ts) */
export interface DictEntry { i: number; kanji: string[]; kana: string[]; romaji: string; senses: Array<[string[], string, string[], string]>; ru: string[]; common: boolean; vocabId?: string; level?: Level }
export interface ProgressPage { activity: DayActivity[]; mastery: Record<Level, Array<[kanji: string, mastery: number, progress: number]>>; month: MonthProgress; achCounts?: Partial<Record<string, number>> }
export interface DailyWord { index: number; total: number; kanji: string; level: Level; timeLimitMs: number }
export interface DailyDone { correct: number; ms: number; rank: number; players: number; xp: number; league?: string; promoted?: string | null }
export interface DailyOverview { league?: string; nextLeague?: string; promoteAt?: number; day: string; total: number; wordMs: number; mine: { correct: number; ms: number } | null; rank: number | null; inProgress: boolean;
  board: Array<{ id: string; name: string; correct: number; ms: number }>;
  /** 0.9.9.8.2: every league's board */
  boards?: Record<string, Array<{ id: string; name: string; correct: number; ms: number }>>; words: Array<{ id?: string; kanji: string; reading: string; meaning: string; level: Level; ok: boolean | null }> | null }
export interface DailyPast { day: string; total: number; played: string | null; league: string;
  leagues: Record<string, { board: Array<{ id: string; name: string; correct: number; ms: number }>; words: Array<{ id?: string; kanji: string; reading: string; meaning: string; level: Level; ok: boolean | null }>; mine: { correct: number; ms: number } | null }> }
export interface DailyAnswer { correct: boolean; kanji: string; reading: string; meaning: string; ms: number; next: DailyWord | null; done: DailyDone | null }
export interface Friend { id: string; username: string; name?: string; status: 'accepted' | 'incoming' | 'outgoing'; online: boolean; away?: boolean; activity?: string; lastSeen?: number | null; pic?: string | null; level?: number; device?: Device; /** 0.9.9.9.5: has the app with push — an invite reaches their phone */ push?: boolean; /** 0.9.9.9.5.5: the room they're in (a code when it's open to friends) */ party?: { size: number; max: number; mode: string; code?: string; /** 0.9.9.9.6.3: the room (not its code) and who's in it */ id?: string; members?: string[] } }
export interface DeckCounts { new: number; learning: number; due: number; total: number }
export interface StudySummary { studyLevels: Level[]; notice: number; decks: Record<DeckId, DeckCounts>; dailyNew: number; onoDaily?: number; dailyByLevel?: Partial<Record<Level, number>>; studyXpToday?: number; profile: Profile; /** 0.9.9.9.6.3 */ paused?: { all: boolean; ono: boolean; struggling: boolean } }
export interface StudyCard { vocabId: string; kanji: string; reading: string; meaning: string; level: Level; state: CardState; intervals: Record<Rating, string>; custom?: boolean; ono?: OnoType }
export interface DeckRow { vocabId: string; kanji: string; reading: string; meaning: string; level: Level; custom: boolean; state: CardState; addedAt: number | null; due: number; intervalDays: number; starred?: boolean }
export interface WordHit { id: string; kanji: string; reading: string; meaning: string; level: Level; custom: boolean }
export type { QuizQuestion } from '../shared/quiz';
import type { QuizQuestion } from '../shared/quiz';
/** The player's local calendar date (daily new cards follow their day, not the server's). */
export const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };

const TOKEN_KEY = 'kb:token';
export const getToken = () => { try { return localStorage.getItem(TOKEN_KEY) ?? ''; } catch { return ''; } };
export const setToken = (t: string) => { try { t ? localStorage.setItem(TOKEN_KEY, t) : localStorage.removeItem(TOKEN_KEY); } catch { /* private mode */ } };

import * as offline from './offline';
export interface StoryUsage { enabled: boolean; used: number; limit: number }
export interface StoryData { title: { ja: string; en: string; ru: string }; lines: Array<{ ja: string; en: string; ru: string; words: number[] }> }

export class ApiError extends Error { constructor(message: string, readonly status: number) { super(message); } }

export interface AdminReport { id: string; kind: 'bug' | 'suggestion' | 'error'; userId: string | null; username: string; text: string; meta: string; at: number; done: boolean; count?: number }
export interface AdminStats {
  onlineNow: number; players: number; daily: Array<{ day: string; signups: number; active: number }>;
  day1: { players: number; returned: number }; day7: { players: number; returned: number };
  funnel: Array<{ name: string; players: number }>; modes: Record<string, { started: number; finished: number }>;
  /** 0.9.9.9.5.1: push to the Android app set up on the server; accounts with a phone that can get it */
  push?: { on: boolean; phones: number };
}
/** Network trouble (no answer at all), as opposed to the server saying no. */
const isNetworkError = (e: unknown) => e instanceof TypeError || (e instanceof DOMException && e.name === 'AbortError');

async function call<T>(method: string, url: string, body?: unknown, again?: { op?: string }): Promise<T> {
  // 0.9.9.4.2: every change that also works offline carries an id; if it times out here and is done again
  // offline (and later replayed), the server recognises the id and doesn't do it twice
  const op = again ? again.op : method !== 'GET' && offline.handles(method, url) ? uuid() : undefined;
  // 0.9.9.4: offline → the calls that work alone are answered by the app itself (offline/), the rest can't
  if (offline.isOffline()) return local<T>(method, url, body, op);
  let res: Response;
  try {
    // a call that hangs (no signal, or the server still waking up) gives up after a while when we can go offline
    const ctl = new AbortController();
    const t = offline.handles(method, url) ? window.setTimeout(() => ctl.abort(), method === 'GET' ? 12_000 : 10_000) : 0;
    res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json', ...(getToken() ? { Authorization: `Bearer ${getToken()}` } : {}), ...(op ? { 'X-KW-Op': op } : {}) },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: ctl.signal,
    }).finally(() => clearTimeout(t));
  } catch (e) {
    // 0.9.9.4.3: in the background (or just back from it) a phone's connection blips — that isn't "offline":
    // try once more when the app is on screen, and only then switch
    if (isNetworkError(e) && offline.handles(method, url) && await stillDown()) {
      if (await offline.goOffline()) return local<T>(method, url, body, op);
    } else if (isNetworkError(e) && offline.handles(method, url) && !again && (method === 'GET' || op)) return call<T>(method, url, body, { op });
    if (isNetworkError(e)) throw new ApiError(OFFLINE_TEXT, 0);
    throw e;
  }
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new ApiError(data.error ?? `Error ${res.status}`, res.status);
  offline.changedOnline(method, url, body);
  return data as T;
}
/** Is the server really gone? Waits until the app is visible, gives the network a moment, then asks the server. */
async function stillDown(): Promise<boolean> {
  if (document.visibilityState !== 'visible') await new Promise<void>((r) => { const f = () => { if (document.visibilityState === 'visible') { document.removeEventListener('visibilitychange', f); r(); } }; document.addEventListener('visibilitychange', f); });
  if (!navigator.onLine) return true;
  await new Promise((r) => setTimeout(r, 1500));
  const ctl = new AbortController(); const t = setTimeout(() => ctl.abort(), 6000); // (no AbortSignal.timeout: older WebViews)
  try { return !(await fetch('/api/online', { cache: 'no-store', signal: ctl.signal })).ok; } catch { return true; } finally { clearTimeout(t); }
}
/** crypto.randomUUID needs https; plain-http LAN testing gets a random fallback */
export const uuid = () => (typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, () => (Math.random() * 16 | 0).toString(16)));
export const OFFLINE_TEXT = 'You\'re offline — this needs an internet connection.';
async function local<T>(method: string, url: string, body?: unknown, op?: string): Promise<T> {
  if (!offline.handles(method, url)) throw new ApiError(OFFLINE_TEXT, 0);
  const out = await offline.call(method, url, body, op);
  if (out.status >= 400) throw new ApiError(out.body?.error ?? `Error ${out.status}`, out.status);
  return out.body as T;
}

export const api = {
  login: (username: string, password: string) => call<{ token: string; user: PublicUser }>('POST', '/api/login', { username, password }),
  register: (username: string, password: string) => call<{ token: string; user: PublicUser }>('POST', '/api/register', { username, password }),
  me: () => call<{ user: PublicUser; profile: Profile }>('GET', `/api/me?today=${today()}`),
  setAvatar: (image: string) => call<{ profile: Profile }>('PUT', '/api/me/avatar', { image }),
  removeAvatar: () => call<{ profile: Profile }>('DELETE', '/api/me/avatar'),
  setPose: (pose: string) => call<{ profile: Profile }>('PUT', '/api/me/pose', { pose }),
  setCharacter: (character: string) => call<{ profile: Profile }>('PUT', '/api/me/character', { character }),
  setFlame: (flame: FlameId) => call<{ profile: Profile }>('PUT', '/api/me/flame', { flame }),
  setStaff: (staff: StaffId) => call<{ profile: Profile }>('PUT', '/api/me/staff', { staff }),
  setBackground: (background: BackgroundId) => call<{ profile: Profile }>('PUT', '/api/me/background', { background }),
  study: () => call<StudySummary>('GET', `/api/study?today=${today()}`),
  setStudyLevels: (levels: Level[]) => call<StudySummary>('PUT', '/api/study/levels', { levels, today: today() }),
  queue: (deck: DeckId) => call<{ cards: StudyCard[] }>('GET', `/api/study/queue?deck=${deck}&today=${today()}`),
  review: (vocabId: string, rating: Rating, deck: DeckId = 'all') => call<{ crit: number; xp?: number }>('POST', '/api/study/review', { vocabId, rating, deck, today: today(), tz: new Date().getTimezoneOffset() }),
  undo: (vocabId: string, deck: DeckId = 'all') => call<{ crit: number }>('POST', '/api/study/undo', { vocabId, deck }),
  deckWords: (deck: DeckId) => call<{ words: DeckRow[] }>('GET', `/api/study/deck?deck=${deck}`),
  deckRemove: (deck: DeckId, ids: string[]) => call<{ removed: number }>('POST', '/api/study/deck/remove', { deck, ids }),
  deckAdd: (deck: DeckId, ids: string[]) => call<{ added: string[] }>('POST', '/api/study/deck/add', { deck, ids }),
  dict: (q: string, tags = false) => call<{ words: DictEntry[]; tags?: Record<string, string> }>('GET', `/api/dict?q=${encodeURIComponent(q)}${tags ? '&tags=1' : ''}`),
  dictWord: (i: number) => call<{ word: DictEntry; withKanji: Record<string, DictEntry[]> }>('GET', `/api/dict/${i}`),
  searchWords: (q: string) => call<{ words: WordHit[] }>('GET', `/api/study/search?q=${encodeURIComponent(q)}`),
  // the app names a new custom word itself (0.9.9.4), so one added offline keeps its id on the server
  addCustom: (w: { vocabId?: string; kanji?: string; reading?: string; meaning?: string }) => call<{ added: boolean; word: WordHit }>('POST', '/api/study/custom', { ...w, id: `u:${uuid().slice(0, 13)}` }),
  /** 0.9.9.9.5: the Android app's push token (friends' invites while the app is closed) */
  pushRegister: (token: string, lang?: string) => call<{ ok: boolean }>('PUT', '/api/push', { token, lang }),
  pushUnregister: (token: string) => call<{ ok: boolean }>('DELETE', '/api/push', { token }),
  /** 0.9.9.9.5.2: a test push to this account's phones, and what happened */
  pushTest: (delay = 0) => call<{ ok: boolean; reason?: string; sent?: number; phones?: number; errors?: string[] }>('POST', '/api/push/test', { delay }),
  quiz: (n = 10, deck?: string, levels?: string[]) => call<{ questions: QuizQuestion[] }>('GET', `/api/study/quiz?n=${n}${deck ? `&deck=${deck}` : ''}${levels?.length ? `&levels=${levels.join(',')}` : ''}`),
  /** 0.9.9.4.4.1: one story with these words (null when the AI is off or failed) */
  story: (words: Array<{ id?: string; kanji: string; reading: string; meaning: string }>, level?: string) => call<{ story: { title: { ja: string; en: string; ru: string }; lines: Array<{ ja: string; en: string; ru: string; words: number[] }> } | null; why?: string; usage?: StoryUsage }>('POST', '/api/study/story', { words, level, today: today() }),
  /** 0.9.9.5.1: start a story in the background (returns a job id), then ask for it until it's there */
  storyStart: (words: Array<{ id?: string; kanji: string; reading: string; meaning: string }>, level?: string) => call<{ job?: string; story?: StoryData | null; why?: string; usage?: StoryUsage }>('POST', '/api/study/story', { words, level, today: today(), async: true }),
  storyJob: (id: string) => call<{ pending?: boolean; story?: StoryData | null; why?: string; usage?: StoryUsage }>('GET', `/api/study/story/job?id=${encodeURIComponent(id)}&today=${today()}`),
  /** 0.9.9.5: ★ a word (the reading passage uses starred words first) */
  setStar: (vocabId: string, on: boolean) => call<{ starred: string[] }>('PUT', '/api/study/star', { vocabId, on }),
  /** 0.9.9.4.4.5: AI stories today — how many you've had and the daily cap */
  storyUsage: () => call<StoryUsage>('GET', `/api/study/story?today=${today()}`),
  /** a daily task done here (the quiz, a passage): counts towards today's streak */
  task: (task: 'quiz' | 'passage', score: number, total: number) => call<Profile>('POST', '/api/study/task', { task, today: today(), score, total }),
  setDailyNew: (n: number) => call<StudySummary>('PUT', '/api/study/daily-new', { n, today: today() }),
  /** 0.9.9.4.4: new words a day per level */
  setOnoDaily: (n: number) => call<StudySummary>('PUT', '/api/study/ono-daily', { n, today: today() }),
  /** 0.9.9.9.6.3: pause / resume a deck's new words */
  setPaused: (deck: 'all' | 'ono' | 'struggling', on: boolean) => call<StudySummary>('PUT', '/api/study/pause', { deck, on, today: today() }),
  setDailyLevels: (levels: Partial<Record<Level, number>>) => call<StudySummary>('PUT', '/api/study/daily-levels', { levels, today: today() }),
  setBorder: (border: string) => call<{ profile: Profile }>('PUT', '/api/me/border', { border }),
  setBadges: (badges: string[]) => call<{ badges: string[] }>('PUT', '/api/me/badges', { badges }),
  matches: () => call<{ matches: MatchSummary[] }>('GET', '/api/matches'),
  match: (id: string) => call<{ match: MatchDetail }>('GET', `/api/matches/${encodeURIComponent(id)}`),
  player: (id: string) => call<{ profile: PublicProfile }>('GET', `/api/users/${encodeURIComponent(id)}`),
  users: () => call<{ users: AdminUserRow[]; storage: string; persistent: boolean }>('GET', '/api/admin/users'),
  inbox: () => call<{ reports: AdminReport[] }>('GET', '/api/admin/inbox'),
  inboxDone: (id: string, done: boolean) => call<{ ok: boolean }>('POST', `/api/admin/inbox/${encodeURIComponent(id)}`, { done }),
  inboxDelete: (id: string) => call<{ ok: boolean }>('DELETE', `/api/admin/inbox/${encodeURIComponent(id)}`),
  adminStats: () => call<AdminStats>('GET', '/api/admin/stats'),
  /** 0.9.9.9.6.3: an admin's own account, for testing — a streak of any length, or the win/loss record wiped */
  adminSelfTest: (b: { streak?: number; resetRecord?: boolean }) => call<{ user: PublicUser; profile: Profile }>('POST', '/api/admin/self-test', b),
  // 0.9.9.9.6: the messenger (?as=support: an admin, the team's conversations)
  conversations: (support = false) => call<{ conversations: Conversation[]; unread: number; mutedAll?: boolean }>('GET', `/api/messages${support ? '?as=support' : ''}`),
  muteMessages: (who: string, on: boolean) => call<{ muted: boolean }>('PUT', '/api/messages/mute', { who, on }),
  messagesUnread: () => call<{ unread: number; support?: number }>('GET', '/api/messages/unread'),
  thread: (other: string, support = false, before?: number) => call<{ messages: DmView[]; with: Conversation | null }>('GET', `/api/messages/${encodeURIComponent(other)}?${support ? 'as=support&' : ''}${before ? `before=${before}` : ''}`),
  sendMessage: (other: string, text: string, support = false) => call<{ message: DmView }>('POST', `/api/messages/${encodeURIComponent(other)}${support ? '?as=support' : ''}`, { text }),
  feedback: (kind: 'bug' | 'suggestion', text: string, meta: string) => call<{ ok: boolean }>('POST', '/api/feedback', { kind, text, meta }),
  event: (name: string) => call<{ ok: boolean }>('POST', '/api/event', { name }).catch(() => ({ ok: false })),
  online: () => call<{ online: number }>('GET', '/api/online'),
  tutorialDone: () => call<{ ok: boolean }>('PUT', '/api/me/tutorial'),
  /** 0.9.9.6: for reminders — today's tasks, the Daily challenge, reviews due */
  notifyStatus: () => call<{ day: string; tasksLeft: number; tasksTotal: number; challengeDone: boolean; allDue: number; streak: number }>('GET', `/api/notify/status?today=${today()}`),
  /** 0.9.9.6: the name others see (empty: your login) */
  setNickname: (nickname: string) => call<{ user: PublicUser }>('PUT', '/api/me/nickname', { nickname }),
  /** 0.9.9.9.5.5: the Quizzes screen's records, with the account */
  recordQuiz: (kind: string, score: number, total: number, ms: number) => call<{ quizStats: QuizStats }>('POST', '/api/me/quiz', { kind, score, total, ms }),
  mergeQuizStats: (stats: QuizStats) => call<{ quizStats: QuizStats }>('PUT', '/api/me/quizstats', { stats }),
  setKana: (mastered: boolean) => call<{ profile: Profile }>('PUT', '/api/me/kana', { mastered }),
  /** 0.9.9.9.5: the Kana section's stars (only the kana that changed) */
  saveKana: (changes: KanaProgress) => call<{ kana: KanaProgress; xp: number }>('PUT', '/api/kana', { kana: changes, today: today() }),
  progress: () => call<ProgressPage>('GET', `/api/progress?today=${today()}`),
  strokes: (chars: string) => call<{ strokes: Record<string, number[][][] | null> }>('GET', `/api/strokes?k=${encodeURIComponent(chars)}`),
  daily: () => call<DailyOverview>('GET', `/api/daily?today=${today()}`), // (0.9.9.9.5: your own date)
  dailyStart: () => call<{ word: DailyWord }>('POST', '/api/daily/start', { today: today() }),
  /** 0.9.9.9.6: an earlier day (yesterday by default), every league */
  dailyPast: (day?: string) => call<DailyPast>('GET', `/api/daily/past?today=${today()}${day ? `&day=${day}` : ''}`),
  dailyAnswer: (text: string) => call<DailyAnswer>('POST', '/api/daily/answer', { text }),
  dailyFinish: () => call<{ done: DailyDone | null }>('POST', '/api/daily/finish'),
  friends: () => call<{ friends: Friend[] }>('GET', '/api/friends'),
  addFriend: (username: string) => call<{ result: 'requested' | 'accepted' | 'exists'; friends: Friend[] }>('POST', '/api/friends', { username }),
  acceptFriend: (id: string) => call<{ friends: Friend[] }>('POST', `/api/friends/${encodeURIComponent(id)}/accept`),
  removeFriend: (id: string) => call<{ friends: Friend[] }>('DELETE', `/api/friends/${encodeURIComponent(id)}`),
  setRole: (id: string, role: 'admin' | 'user') => call<{ user: AdminUserRow }>('POST', `/api/admin/users/${encodeURIComponent(id)}/role`, { role }),
  deleteUser: (id: string) => call<{ ok: boolean }>('DELETE', `/api/admin/users/${encodeURIComponent(id)}`),
  setBanned: (id: string, banned: boolean) => call<{ user: AdminUserRow }>('POST', `/api/admin/users/${encodeURIComponent(id)}/ban`, { banned }),
};
