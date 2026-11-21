import { knowPlayer, setMentionSelf } from './mentions';
import { initReminders, remindersSignedIn, remindersSignedOut } from './reminders';
import './support'; // error reporting first, so early errors are caught too
import { refreshOnline, reportLayout } from './support';
import { onTaskDone, quizMode, showMissedSave, startQuiz } from './decks';
import { initTasks, noteBattle, renderTasks, taskActions, tasksAtLogin } from './dailytasks';
import { checkRewards } from './rewards';
import { initWhatsNew } from './whatsnew';
initWhatsNew();
import { adminTab, onAdminSelfTest, refreshInboxBadge, setAdminTab } from './adminui';
import { gameKbAvailable, gameKbPref, gameKbReset, setGameKb, setGameKbPref } from './gamekb';
import { celebrate, celebrateNew, comboMilestone } from './achievements';
import { knownFriends, railScreen, refreshRail, setRailMe, setRailUser } from './friendrail';
import { dictRailScreen, setDictRailUser } from './dictrail';
import { initMenuVeil } from './menuveil';
import { inLocalRoom, initLocalGames, localSend, OFFLINE_MODES } from './offline/localgames';
initMenuVeil();
import { initTips } from './tips';
initTips(); // 0.9.9.9.9.2: explanations fold behind an (i)
import { initNav } from './nav';
initNav(); // 0.9.9.9.9.3: the sidebar / the tab bar
import { writeTargets, writeTemplate } from '../shared/kana';
import { initI18n, lang, setLang, tr } from './i18n';
import { applyUiZoom, centerScreens, setUiZoomPref, UI_ZOOMS, uiZoomPref } from './zoom';
import * as voice from './voice';
import { setPlayAi, initQueue, onQueue, openQueue, resetQueue } from './queue';
import { brushCursor } from './cursor';
import { VERSION } from '../shared/version';
import { STUDY_LOCK } from '../shared/progress';
import { arena, arenaLook, arenaTyping, arenaQuality, arenaScreen, arenaSupported, hasWebgl, preloadArena, primeArena, setArenaBackground, setArenaQuality, type ArenaQuality } from './arena';
import { LEVELS, MODE_LABEL, type ClientMessage, type DrawnChar, type GameMode, type Level, type PlayerId, type PlayerView, type PublicProfile, type PublicUser, type ServerMessage } from '../shared/protocol';
import { api, ApiError, getToken, setToken, type Friend, type Profile } from './api';
import * as audio from './audio';
import { getTimePref, paintBackground, resolveTime, setWeatherPref, untilNextStep, weatherPref, type Weather } from './backgrounds';
import { safetyRow, setPlayerViewer, showPlayer } from './playerview';
import { claimDialog, codeDialog, emailDialog, forgotDialog } from './account';
import { initInbox, inboxLeft, inboxReconnected, inboxUser, onDm, onDmGroup, onDmRead, onDmTyping, onDmUpdate, openInbox, setInboxSocket, setInviteJoin } from './inbox';
import { onLeagueEquip } from './leagueup';
import { chatMessages, chatTyping, clearChat, deckEvent, deckInk, initDeck, renderDeck, resetDeck } from './deckui';
import { GameSocket } from './net';
import { HandwritingPad } from './pad';
import { customizeHidden, onProfileChange, openCustomize, openStudy } from './study';
import * as ui from './ui';
import { openProgress } from './progressui';
import { dailyPending, openDaily } from './dailyui';
import { closeRematchAsk, initFriends, onFriendEvent, onFriendPresence, onInvite, onInviteDeclined, onRematchAsk, refreshFriendsBadge, renderLobbyInvites } from './friendsui';
import { alertsOn, pushSignedOut, registerPush, setAlerts } from './push';
import { initWatch, LEAVING, liveEnded, liveStarted, mayWhileWatching, playReplay, replayLink, stopWatching, watching, type ReplayState } from './watch';
import { renderRankBox } from './ladder';
import { canPlay, initTutorial, inTutorialBattle, lockText, setModeAccess, startTutorial, tutorialChallenge, tutorialScreen, tutorialTouring } from './tutorial';
import { askNotifyPermission } from './notify';
import { initSelects } from './selects';
import * as offline from './offline';
import { initKana, openKana, setKanaProgress } from './kanaui';
import { initMotion } from './motion';
import { initMenuCarousel } from './menucarousel';
import { initQuizzes, quizzesProfile } from './quizzesui';
import { initApp, checkBuild } from './appshell';
import './dictui'; // (the dictionary page; opened from the side panel)

applyUiZoom(); // before anything is laid out
centerScreens();
initReminders();

// ── state ────────────────────────────────────────────────────────────────────
let user: PublicUser | null = null;
let profile: Profile | null = null;
// 0.9.9.9.7.4: who looks at a player's card (Block / Report), and whom they've blocked ("block:<id>" in their unlocks)
setPlayerViewer(() => (user ? {
  id: user.id, guest: !!user.guest,
  blocked: () => (profile?.unlocks ?? []).filter((x) => x.startsWith('block:')).map((x) => x.slice(6)),
  setBlocked: (ids) => { if (profile) profile = { ...profile, unlocks: [...(profile.unlocks ?? []).filter((x) => !x.startsWith('block:')), ...ids.map((i) => `block:${i}`)] }; },
} : null));
let you: PlayerId = '';
let code = '';
let mode: GameMode = 'reading';
let players: PlayerView[] = [];
let minPlayers = 2;
let challengeId = 0;
let inRoom = false;
/** 0.9.9.9.9.1: a replay rebuilding a moment — its messages go in without sounds, banners or spells flying */
let quiet = false;
/** 0.9.9.9.9.1: the results coming up after a game_over (stopped when a replay jumps back, or you leave) */
let overTimers: number[] = [];
/** 0.9.9.9.9.1: what to do once the server says you've left the room (watch a replay) */
let afterLeft: (() => void) | null = null;
// writing (battle writing mode and Deck Duel casts)
let writing = false;
let charCount = 0;
let written: DrawnChar[] = [];

const store = {
  get(key: string) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key: string, v: string) { try { localStorage.setItem(key, v); } catch { /* ignore */ } },
};
const savedLevels = (): Level[] => {
  try {
    const raw = JSON.parse(store.get('kb:levels') ?? '[]');
    const lv = LEVELS.filter((l) => Array.isArray(raw) && raw.includes(l));
    if (ui.kanaBeginner()) return ['KANA']; // hiragana first
    return lv.length ? lv : ['N3', 'N2'];
  } catch { return ui.kanaBeginner() ? ['KANA'] : ['N3', 'N2']; }
};

// 0.9.9.9.6: a game against the AI started offline goes on when the connection comes back. The server may still
// keep a seat for you in a room from before (it hands it back on reconnecting) — that took you out of the battle
// and into that lobby. While a game here runs, the server's room messages are ignored and that seat is given up.
const NOT_ROOM = new Set(['welcome', 'auth_error', 'kicked', 'ping', 'friend', 'friend_presence', 'invite', 'invite_declined', 'notice', 'progress']);
function fromServer(m: ServerMessage) {
  if (inLocalRoom() && !NOT_ROOM.has(m.type)) {
    if (m.type === 'joined') toServerRaw?.({ type: 'leave' });
    return;
  }
  onMessage(m);
}
let toServerRaw: ((m: ClientMessage) => void) | null = null;
let wasDown = false;
const socket = new GameSocket(fromServer, (s) => {
  netState = s;
  if (s === 'online') {
    lastWhere = ''; tellWhere();
    // 0.9.9.9.7: back after the connection was lost (a sleeping server waking up, the app back from the background):
    // what came in meanwhile — messages, the badge, the profile — is fetched again (it stayed empty until a restart)
    if (wasDown && user) { void refreshProfile(); inboxReconnected(); }
    wasDown = false;
  } else if (s === 'reconnecting' || s === 'stopped') wasDown = true;
  if (s === 'reconnecting') void offline.probe();
  showNetStatus();
});
// 0.9.9.8.2: offline (or in a room made offline), games against the AI run in the app — see offline/localgames.ts
initLocalGames((m) => onMessage(m));
{
  const toServer = socket.send.bind(socket);
  toServerRaw = toServer;
  socket.send = (m: ClientMessage) => {
    // 0.9.9.9.9: watching (a friend's game, a replay): nothing that acts on a game goes out; leaving leaves the watching
    if (watching()) { if (LEAVING.has(m.type)) { stopWatching(); return; } if (!mayWhileWatching(m.type)) return; }
    if (user && (inLocalRoom() || (offline.isOffline() && m.type !== 'pong'))) void localSend(m, { id: user.id, name: user.name ?? user.username });
    else toServer(m);
  };
}
let netState = '';
// 0.9.9.4.3: tell the server where you are outside rooms (friends see "Studying spells", not "In the menus")
let lastWhere = '';
function tellWhere() {
  if (inRoom || !user) return;
  const where = ui.currentScreen() === 'quiz' && quizMode() === 'ono' ? 'onoquiz' : ui.currentScreen() ?? '';
  if (where === lastWhere) return;
  lastWhere = where;
  socket.send({ type: 'where', screen: where });
}
{
  let t = 0;
  const mo = new MutationObserver(() => { clearTimeout(t); t = window.setTimeout(tellWhere, 300); });
  for (const el of document.querySelectorAll('.screen')) mo.observe(el, { attributes: true, attributeFilter: ['hidden', 'open'] });
}
/** 0.9.9.4: offline → a calm "Offline" pill instead of "Reconnecting…" forever */
function showNetStatus() {
  if (offline.isOffline()) ui.setNetStatus(offline.pending() ? `Offline mode · ${offline.pending()} to sync` : 'Offline mode');
  else ui.setNetStatus(netState === 'reconnecting' ? 'Reconnecting…' : null);
}

/** Who is this player on screen? You are always on the left; in boss mode the other player is your ally. */
/** the preparation's "1/2 ready": the people only — the AI is always ready and isn't counted (0.9.9.9.2) */
function prepReady(readyIds: readonly PlayerId[]) {
  const humans = players.filter((p) => !p.bot);
  ui.setReady(humans.filter((p) => readyIds.includes(p.id)).length, humans.length, readyIds.includes(you));
}
const actorOf = (id: PlayerId | 'boss'): ui.Actor => (id === 'boss' ? 'boss' : id === you ? 'me' : mode === 'boss' ? `ally:${id}` : 'opp');
const nameOf = (id: PlayerId) => players.find((p) => p.id === id)?.name ?? 'Someone';

// Music only in menus (not during study phase, battles or the deck duel).
// battle theme while playing (study phase, battle, Deck Duel); the calm theme returns on the results screen and in menus
const GAME_SCREENS = new Set(['prep', 'battle', 'deck']);
let lastScreen = '';
ui.onScreen((s) => {
  audio.setScene(GAME_SCREENS.has(s) ? 'game' : 'menu');
  arenaScreen(s); // the 3D arena on battle screens
  if (s !== 'customize') customizeHidden(); // its little 3D preview stops drawing
  // the mode's name at the very top while playing
  const title = ui.$('modeTitle');
  title.hidden = !['prep', 'battle', 'deck'].includes(s);
  document.body.classList.toggle('mode-shown', !title.hidden);
  title.classList.toggle('in-game', s === 'battle'); // the clock takes the top centre; the name sits bottom-left
  title.classList.toggle('in-deck', s === 'deck'); // Deck Duel: under your name, top-left (the Omnipotence button is bottom-left)
  // leaving the battle: let go of the answer box (it stays enabled between words so the phone keyboard stays up)
  if (s !== 'battle' && document.activeElement?.id === 'answer') (document.activeElement as HTMLElement).blur();
  if (!title.hidden) title.replaceChildren(ui.modeBadge(s === 'deck' ? 'deck' : mode), document.createTextNode(MODE_LABEL[s === 'deck' ? 'deck' : mode]));
  if (s === 'menu' && profile) void refreshProfile(); // e.g. the study lock lifts after studying
  if (s !== 'lobby') void renderLobbyInvites(false);
  if (s !== 'inbox') inboxLeft(); // 0.9.9.9.6.4: "typing…" stops, menus close
  // 0.9.9.9.6.6: leaving Messages with the phone's keyboard up: let go of the message box, and once the keyboard has
  // gone measure the page again — the menu could scroll on into empty space after Messages
  if (s !== 'inbox' && document.activeElement?.closest?.('#inbox')) (document.activeElement as HTMLElement).blur();
  if (s !== 'inbox' && lastScreen === 'inbox') setTimeout(() => {
    applyUiZoom(); centerScreens();
    const se = document.scrollingElement;
    if (se && se.scrollTop > Math.max(0, se.scrollHeight - innerHeight)) se.scrollTop = Math.max(0, se.scrollHeight - innerHeight);
    // 0.9.9.9.6.7: on a computer the menu fits the window — if the page is taller anyway, tell the admin what made it
    // so (style.css keeps it from scrolling there now; this finds the cause)
    if (s === 'menu' && innerWidth >= 901 && se && se.scrollHeight > innerHeight + 40) {
      const tall = [...document.body.querySelectorAll<HTMLElement>('*')].map((e) => ({ e, b: e.getBoundingClientRect().bottom + se.scrollTop })).filter((x) => x.b > innerHeight + 40).sort((a, b) => b.b - a.b).slice(0, 5)
        .map(({ e, b }) => `${e.tagName.toLowerCase()}#${e.id}.${String(e.className).slice(0, 30)} ↓${Math.round(b)} ${getComputedStyle(e).position}${e.hidden ? ' hidden' : ''}`);
      reportLayout('Menu taller than the window after Messages', `page ${se.scrollHeight} > window ${innerHeight}\n${tall.join('\n')}`);
    }
  }, 450);
  lastScreen = s;
  railScreen(s);
  dictRailScreen(s); // 0.9.9.8: the dictionary side panel
  if (s !== 'results') closeRematchAsk(); // (a rematch card only means something there)
  if (s === 'menu' || s === 'queue') void refreshOnline();
  for (const b of document.querySelectorAll<HTMLElement>('[data-pause]')) b.hidden = !(soloVsAi && ['prep', 'battle', 'deck'].includes(s));
  if (!['prep', 'battle', 'deck'].includes(s)) setPaused(false);
  setGameKb(s === 'battle' && mode !== 'writing'); // phones: the compact battle keyboard
  tutorialScreen(s);
  setTimeout(() => applyBackground(!GAME_SCREENS.has(s)), 0); // catch up on the cycle after a game; the arena (or not) for this screen
});

/**
 * Paint the chosen background at the chosen time of day, with its ambient sounds. "Cycle" goes
 * day → sunset → night (5 min each) with a cross-fade — but never during a game (it would distract);
 * the picture catches up once the game is over.
 */
const NO_BG_CHANGE = new Set(['prep', 'battle', 'deck']);
let shownTime = '';
function applyBackground(fade = false) {
  const bg = profile?.background ?? 'forest';
  const time = resolveTime(getTimePref());
  if (fade && NO_BG_CHANGE.has(ui.currentScreen() ?? '')) return;
  // 0.9.9.8.1: outside the games, the place without its arena (the menu has no wizards in it any more)
  paintBackground(ui.$('bg'), bg, time, fade && shownTime !== '' && shownTime !== time, !GAME_SCREENS.has(ui.currentScreen() ?? 'menu'));
  setArenaBackground(bg, time);
  shownTime = time;
  audio.setAmbience(bg, time);
}
function scheduleCycle() {
  setTimeout(() => { applyBackground(true); scheduleCycle(); }, untilNextStep() + 50);
}
scheduleCycle();

let tutorialShown = false;
let pendingJoin = '';
const rematchSeen = new Set<string>(); // who already asked for a rematch this round (the card shows once each)
let soloVsAi = false; // you are the only human in the room → Pause
let writeShape = ''; // the word being written with its kanji hidden: 必ず → □ず
function applyProfile(p: Profile) {
  if (user) celebrateNew(user.id, p.unlocks); // new achievements: the celebration
  // (0.9.9.3: new unlocks — monthly rewards too — are shown by the reward box, rewards.ts)
  profile = p;
  ui.setProfile(p);
  ui.$('kanaRow').hidden = ui.$('kanaInfo').hidden = false;
  ui.$<HTMLInputElement>('kanaMastered').checked = !ui.kanaBeginner();
  setModeAccess(p.level, user?.role === 'admin', ui.kanaBeginner());
  if (!p.tutorialDone && !tutorialShown && user && !inRoom) { tutorialShown = true; startTutorial(); }
  void dailyPending().then((open) => { ui.$('dailyBadge').hidden = !open; });
  refreshFriendsBadge();
  renderTasks(p); // the daily streak tasks
  quizzesProfile(p, user?.id ?? ''); // (the Quizzes screen shows today's quiz task; 0.9.9.9.5.5: and the account's records)
  setKanaProgress(p.kana); // 0.9.9.9.5: the Kana section
  if (user && !inRoom && ui.currentScreen() === 'menu') checkRewards(user.id, p, user.role === 'admin', applyProfile); // something new unlocked → a reward box
  if (user && p.tutorialDone && !tutorialShown && !inRoom && ui.currentScreen() === 'menu') tasksAtLogin(p);
  if (user?.role === 'admin') void refreshInboxBadge(); // new bug reports / suggestions
  // too many struggling spells waiting → the game modes are locked until you study (the server checks too)
  const locked = user?.role !== 'admin' && (p.strugglingDue ?? 0) > STUDY_LOCK;
  ui.$('menu').classList.toggle('locked', locked);
  ui.$('studyLock').hidden = !locked;
  ui.$('studyLockText').textContent = locked ? `${p.strugglingDue} struggling spells are waiting. Study them down to ${STUDY_LOCK} to unlock the game modes.` : '';
  applyBackground();
  preloadArena();
}
onProfileChange(applyProfile);
onTaskDone.cb = applyProfile;
initTasks();
taskActions.learn = () => (ui.kanaBeginner() ? openKana() : ui.$('studyBtn').click());
taskActions.quiz = () => void startQuiz();
taskActions.daily = () => ui.$('dailyBtn').click();
taskActions.passage = () => ui.$('passageBtn').click();
taskActions.practice = () => void startQuiz(); // (0.9.9.9.6.9: Today's quiz step)
// 0.9.9.9.6.9: Today's battle — a Kanji Reading duel against the AI at your level
taskActions.battle = () => {
  if (!canPlay('reading')) { ui.toast(lockText('reading'), 5000); return; }
  const lv = savedLevels();
  pendingAi = { mode: 'reading', level: lv[0] ?? 'N5' };
  socket.send({ type: 'create', mode: 'reading', levels: lv.length ? lv : ['N5'] });
};

async function refreshProfile() {
  try { applyProfile((await api.me()).profile); } catch { /* offline: keep what we have */ }
}

// ── session lifecycle ────────────────────────────────────────────────────────
async function boot() {
  applyBackground();
  ui.setAudioButtons(audio.isRadioOn(), audio.isSfxOn());
  // 0.9.9.5.1: online but the server doesn't answer → it's probably asleep: wait for it with a progress bar
  // instead of dropping into offline mode for a minute
  // 0.9.9.7.3: the loading screen covers the first 8 s (a phone's first connection can be slow); only then is it a
  // sleeping server, and the waking-up screen takes over
  if (!offline.isOffline() && navigator.onLine && !(await serverAnswers(8000))) {
    ui.hideBootScreen();
    const r = await wakeServer();
    if (r === 'offline') { if (await offline.goOffline()) return void boot(); }
  }
  if (!getToken()) return showAuth();
  try {
    const { user: u, profile: p } = await api.me();
    applyProfile(p);
    signedIn(u);
  } catch (e) {
    if (e instanceof ApiError && (e.status === 401 || e.status === 403)) { setToken(''); showAuth(e.status === 403 ? e.message : ''); return; }
    // 0.9.9.4.2: no server, but this account is saved here → straight into offline mode
    if (!offline.isOffline() && await offline.canGoOffline() && await offline.goOffline()) return void boot();
    ui.show('auth');
    const canOffline = await offline.canGoOffline();
    ui.$('authError').textContent = canOffline ? 'The server can\'t be reached right now.'
      : e instanceof ApiError && e.status === 0 ? 'No internet connection. Sign in once while online - then Study spells and more work offline too.' : 'Server unreachable - try again in a moment.';
    ui.$('playOffline').hidden = !canOffline;
  }
}
/** Does the server answer at all within `ms`? */
async function serverAnswers(ms: number): Promise<boolean> {
  // (a plain timer, not AbortSignal.timeout — older Android WebViews don't have it, and the check failed at once,
  // so the "waking up" screen showed on every start — 0.9.9.7.3)
  // 0.9.9.9.5: a quick failure (the phone's network not ready yet, a blip) is tried again until `ms` is up — one
  // failed request at start showed "Waking up the server…" while the server was wide awake
  const end = Date.now() + ms;
  while (Date.now() < end) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), Math.max(500, end - Date.now()));
    try {
      const r = await fetch('/api/online', { cache: 'no-store', signal: ctl.signal });
      if (r.ok && /json/.test(r.headers.get('content-type') ?? '')) return true;
    } catch { /* not yet */ } finally { clearTimeout(t); }
    await new Promise((ok) => setTimeout(ok, 700));
  }
  return false;
}
const WAKE_KEY = 'kw:wake-secs';
/**
 * The "waking up" screen: asks the server every few seconds; the bar follows how long it took last time
 * (about a minute on a free plan). Resolves 'up', 'offline' (you chose to play offline) or 'gave-up' (2½ minutes).
 */
async function wakeServer(): Promise<'up' | 'offline' | 'gave-up'> {
  const scr = ui.$('wakeScreen'), bar = ui.$('wakeBar'), sec = ui.$('wakeSec'), off = ui.$<HTMLButtonElement>('wakeOffline');
  let est = 55;
  try { est = Math.max(15, Math.min(120, Number(localStorage.getItem(WAKE_KEY)) || 55)); } catch { /* private mode */ }
  scr.hidden = false;
  off.hidden = !(await offline.canGoOffline());
  const t0 = Date.now();
  const tick = window.setInterval(() => {
    const t = (Date.now() - t0) / 1000, k = t / est;
    bar.style.width = `${(k < 1 ? 92 * (1 - (1 - k) * (1 - k)) : 92 + 6 * (1 - Math.exp(-(k - 1)))).toFixed(1)}%`;
    sec.textContent = String(Math.floor(t));
  }, 250);
  let chose = false;
  const choice = new Promise<'offline'>((ok) => { off.onclick = () => { chose = true; ok('offline'); }; });
  const poll = (async (): Promise<'up' | 'gave-up'> => {
    while (Date.now() - t0 < 150_000 && !chose) {
      if (await serverAnswers(20_000)) return 'up';
      await new Promise((ok) => setTimeout(ok, 2500));
    }
    return 'gave-up';
  })();
  const r = await Promise.race([poll, choice]);
  clearInterval(tick);
  if (r === 'up') {
    try { localStorage.setItem(WAKE_KEY, String(Math.round((Date.now() - t0) / 1000))); } catch { /* private mode */ }
    bar.style.width = '100%';
    await new Promise((ok) => setTimeout(ok, 400));
  }
  scr.hidden = true;
  return r;
}

ui.$('playOffline').onclick = async () => {
  ui.$('playOffline').hidden = true;
  if (await offline.goOffline()) void boot();
  else ui.$('authError').textContent = 'Nothing saved on this device yet - sign in once while online.';
};

function signedIn(u: PublicUser) {
  user = u;
  setMentionSelf(u.id, u.username, u.name);
  remindersSignedIn();
  if (!offline.isOffline()) void offline.signedIn(u.id); // keep a copy of the account for offline use
  ui.setUser(u);
  setRailUser(true);
  setDictRailUser(true);
  socket.start(getToken());
  if (!inRoom) ui.show('menu');
  if (!profile) void refreshProfile();
  else applyProfile(profile); // now that we know who you are (admin? tutorial?)
}

function showAuth(message = '') {
  ui.$('playOffline').hidden = true;
  user = null;
  profile = null;
  inRoom = false;
  ui.setUser(null);
  setRailUser(false);
  setDictRailUser(false);
  ui.setAuthTab(authTab);
  ui.show('auth');
  let left = '';
  try { left = sessionStorage.getItem('kw:auth-msg') ?? ''; sessionStorage.removeItem('kw:auth-msg'); } catch { /* private mode */ }
  ui.$('authError').textContent = message || left;
  if (!watching()) replayFromLink(); // 0.9.9.9.9: a shared replay plays without signing in
}

function logout(message = '') {
  const reminders = remindersSignedOut(); // (before the token goes)
  const push = pushSignedOut();
  setToken('');
  socket.stop();
  // 0.9.9.6: start the page afresh, so nothing of this account (study plan, story limit, stars, settings
  // from the server) carries over to the next one who signs in
  try { sessionStorage.setItem('kw:auth-msg', message); } catch { /* private mode */ }
  void Promise.allSettled([reminders, push, offline.signedOut()]).finally(() => location.reload());
}

function backToMenu() {
  if (watching()) stopWatching(); // (0.9.9.9.9.1: a replay doesn't play on behind the menu)
  for (const t of overTimers) clearTimeout(t);
  overTimers = [];
  ui.setWatchers(0); // (0.9.9.9.9)
  inRoom = false;
  you = '';
  code = '';
  players = [];
  stopWriting();
  resetDeck();
  clearChat();
  ui.stopCountdown();
  if (ui.isLobbyAside()) ui.setLobbyAside(false); // (reading Messages: stay there; its back button now leads to the menu)
  else ui.show('menu');
}

// ── server messages ──────────────────────────────────────────────────────────
function onMessage(msg: ServerMessage) {
  switch (msg.type) {
    case 'queue':
      onQueue(msg);
      break;
    case 'ping':
      socket.send({ type: 'pong', t: msg.t });
      break;
    case 'net':
      ui.setNet(msg.rtt);
      break;
    case 'chat':
      chatMessages(msg.messages);
      break;
    case 'chat_typing':
      chatTyping(msg.id, msg.name, msg.on);
      break;
    case 'dm': // 0.9.9.9.6: the messenger
      onDm(msg.message, msg.fromName, msg.muted === true);
      break;
    case 'dm_read': // 0.9.9.9.6.1: ✓ → ✓✓
      onDmRead(msg.reader);
      break;
    case 'dm_update': // 0.9.9.9.6.4: edited, deleted, reacted to
      onDmUpdate(msg.message);
      break;
    case 'dm_typing': // 0.9.9.9.6.4: "typing…"
      onDmTyping(msg.conv, msg.from, msg.name, msg.on);
      break;
    case 'dm_group': // 0.9.9.9.6.4: a group changed (or you left it)
      onDmGroup(msg.group, msg.event);
      break;
    case 'look':
      arenaLook(msg.id, msg.yaw, msg.pitch);
      break;
    case 'typing':
      arenaTyping(msg.id, msg.on);
      break;
    case 'welcome':
      offline.serverSeen(); // 0.9.9.9.5: the server is there — leave offline mode now
      checkBuild(msg.build); // 0.9.9.9.6.4: an older app updates itself
      user = msg.user;
      setMentionSelf(msg.user.id, msg.user.username, msg.user.name);
      ui.setUser(msg.user);
      void refreshOnline(); // now this player counts too
      registerPush(msg.user.id); // 0.9.9.9.5: friends' invites reach this phone while the app is closed
      inboxUser(msg.user.id, msg.user.role === 'admin'); // 0.9.9.9.6: Messages (unread)
      askEmail(); // 0.9.9.9.6.6: an account from before emails adds one, once
      setRailMe(msg.user.id); // 0.9.9.9.6.3: friends in your room: "Playing with you"
      // 0.9.9.9.7.3: back after a long while away (the app in the background) and the room has closed meanwhile: to the
      // menu, saying so (the results screen stayed up with every button dead)
      // (not a game against the AI run offline, in the app; 0.9.9.9.9.1: nor a replay — it has no seat: back from the
      // background it sent you to the menu while the replay played on, its sounds too)
      if (msg.seated === false && inRoom && !inLocalRoom() && !watching()) { backToMenu(); ui.toast('The room closed while you were away'); }
      joinFromLink();
      break;
    case 'invite_declined':
      onInviteDeclined(msg);
      break;
    case 'watching': // 0.9.9.9.9: watching a friend's game (or not any more)
      if (msg.on) liveStarted(msg);
      else { liveEnded(); if (msg.reason) ui.toast(tr(msg.reason)); }
      break;
    case 'watchers': // 0.9.9.9.9: how many are watching your game
      ui.setWatchers(msg.count);
      break;
    case 'auth_error':
      logout(msg.message);
      break;
    case 'kicked':
      socket.stop();
      if (/banned/i.test(msg.message)) return logout(msg.message);
      backToMenu();
      ui.setError(`${msg.message} Refresh this page to play here.`);
      break;
    case 'joined':
      createDone();
      resetQueue();
      you = msg.you;
      code = msg.code;
      mode = msg.mode;
      inRoom = true;
      if (ui.isLobbyAside()) ui.show('lobby'); // (a different room: its lobby)
      ui.setError('');
      break;
    case 'left':
      if (afterLeft) { const go = afterLeft; afterLeft = null; backToMenu(); go(); break; } // (0.9.9.9.9.1: left to watch a replay)
      if (watching() === 'replay') break; // (a late one: it isn't the replay's to end)
      backToMenu();
      if (pendingJoin) { socket.send({ type: 'join', code: pendingJoin, levels: savedLevels() }); pendingJoin = ''; }
      if (pendingChallenge && !pendingChallenge.sent) { pendingChallenge.sent = true; socket.send({ type: 'create', mode: pendingChallenge.mode, levels: savedLevels() }); }
      break;
    case 'notice':
      ui.toast(msg.message);
      break;
    case 'friend_presence': // 0.9.9.9.5.3: a friend came online / left — the lists update now
      void refreshRail();
      onFriendPresence();
      break;
    case 'friend':
      onFriendEvent(msg);
      void refreshRail();
      break;
    case 'invite':
      onInvite(msg);
      break;
    case 'lobby':
      closeRematchAsk();
      // someone else went back to the lobby while you are still reading the results: stay, and let
      // "Back to lobby" take you there when you're ready
      if (ui.currentScreen() === 'results' && !lobbyRequested) {
        pendingLobby = msg;
        ui.$<HTMLButtonElement>('rematch').disabled = true;
        ui.$('rematchStatus').textContent = 'The room is back in its lobby - press Back to lobby when you\'re ready.';
        ui.$('resultLobby').classList.add('pulse');
        break;
      }
      lobbyRequested = false;
      pendingLobby = null;
      // a challenge from a friend's profile: the room is made — invite them right away
      if (pendingChallenge && msg.hostId === you && msg.mode === pendingChallenge.mode) {
        socket.send({ type: 'invite', friendId: pendingChallenge.friendId, challenge: true });
        ui.toast(`Challenge sent to ${pendingChallenge.name} - they get an invite to your ${MODE_LABEL[msg.mode]} room.`, 5000);
        pendingChallenge = null;
      }
      ui.$('resultLobby').classList.remove('pulse');
      players = msg.players;
      // only you against the AI (or a solo Boss run): the game can be paused
      soloVsAi = msg.players.filter((p) => !p.bot).length === 1;
      forfeitLabels();
      setPaused(false);
      mode = msg.mode;
      minPlayers = msg.minPlayers;
      stopWriting();
      resetDeck();
      ui.lockLobbyMode(inTutorialBattle());
      ui.showLobby(code, msg.mode, msg.players, you, msg.hostId, msg.maxPlayers, msg.minPlayers, msg.open === true);
      // 0.9.9.9.4: the room's chat, once somebody else (a person) is here — or has already written
      if (msg.players.filter((p) => !p.bot).length > 1 || ui.$('lobbyChatLog').childElementCount) ui.$('lobbyChat').hidden = false;
      void renderLobbyInvites(true, msg.players.map((p) => p.id));
      // 0.9.9.9.6.6: the AI game from the queue: the AI (a party of three against the dragon), then Ready
      if (pendingAi && msg.hostId === you && msg.mode === pendingAi.mode) {
        const bots = msg.players.filter((p) => p.bot).length;
        if (bots < (pendingAi.mode === 'boss' ? 3 : 1)) socket.send({ type: 'add_bot', level: pendingAi.level });
        else { pendingAi = null; socket.send({ type: 'lobby_ready', ready: true }); }
      }
      // the tutorial's first battle: add a beginner AI, then start
      if (inTutorialBattle() && msg.hostId === you) {
        if (msg.players.length < 2) socket.send({ type: 'add_bot', level: 'BEGINNER' });
        else socket.send({ type: 'start' });
      }
      break;
    case 'prep':
      players = msg.players;
      ui.showPrep(msg.pool, msg.durationMs, mode);
      prepReady(msg.readyIds);
      primeArena(mode, players, you); // 0.9.9.9.7.3: the arena is built while you study (its fly-in fits the 3-2-1 then)
      break;
    case 'prep_ready':
      prepReady(msg.readyIds);
      break;
    case 'battle_start':
      rematchSeen.clear(); closeRematchAsk();
      players = msg.players;
      mode = msg.mode;
      if (msg.resume && ui.currentScreen() === 'battle') { ui.resumeBattle(players, msg.boss, you, msg.durationMs); break; }
      pendingMissed = null;
      if (watching() !== 'live') ui.setWatchers(0); // (0.9.9.9.9: a new battle: the count comes again if anyone watches)
      ui.showBattle(msg.mode, players, msg.boss, you, msg.countdownMs, msg.durationMs, (n) => { if (!quiet) { if (n > 0) audio.sfx.tick(); else audio.sfx.go(); } });
      break;
    case 'challenge':
      challengeId = msg.id;
      arena()?.endIntro(); // 0.9.9.9.7.3: your word is up — no more fly-in (the AI could cast while you were still in it)
      arena()?.channel(0);
      ui.showChallenge({ kanji: msg.kanji, answer: msg.answer, timeLimitMs: msg.timeLimitMs, meaning: msg.meaning, reading: msg.reading, charCount: msg.charCount, flashMs: msg.flashMs, from: msg.from, hint: msg.hint, leftMs: msg.leftMs });
      tutorialChallenge(); // 0.9.9.9.6: the first word of the tutorial's battle: the tour of the battle screen
      gameKbReset();
      sendTyping(false); // a new word: nothing typed yet
      arena()?.oppChannel(true); // a word is up: the AI's staff traces ∞, a player's only while they type (0.9.9.7.2)
      if (msg.answer === 'writing') { flashMs = msg.flashMs ?? 3500; beginWriting(msg.id, msg.kanji); }
      break;
    case 'answer_result':
      if (msg.challengeId !== challengeId) break;
      if (!msg.retry) sendTyping(false); // answered: the staff rests until the next word
      if (msg.retry) { // rapid: wrong, keep going
        ui.setFeedback(msg);
        audio.sfx.wrong();
        arena()?.fizzle('me'); // the gem shatters; typing again builds a new one
        const input = ui.$<HTMLInputElement>('answer');
        ui.setAnswerLocked(false); input.value = ''; input.focus();
        break;
      }
      ui.lockInput();
      if (mode === 'writing') ui.setCharSlots(charCount, written.map(() => ''), false, writeShape);
      ui.setFeedback(msg);
      if (quiet) break; // (0.9.9.9.9.1: a replay rebuilding a moment: the answer shows, without its sounds)
      if (msg.correct) {
        // say the word first (romaji answers at the kana level: say the kana itself), then the success chime
        const kana = /[a-z]/i.test(msg.reading) ? msg.kanji : msg.reading;
        // (0.9.9.9.8: the sound of your staff — each has its own; 0.9.9.9.9.1: the enemy's HP decides how fierce)
        void voice.speak(kana).then(() => audio.sfx.cast(players.find((p) => p.id === you)?.staff ?? profile?.staff, msg.combo));
        if (mode !== 'deck') comboMilestone(msg.combo, profile?.unlocks); // "On Fire" / "Inferno" / "Unstoppable" right away
      } else { audio.sfx.wrong(); arena()?.fizzle('me'); }
      break;
    case 'battle_update':
      players = msg.players;
      onBattleEvent(msg);
      break;
    case 'deck_state':
      renderDeck(msg.view);
      break;
    case 'deck_event':
      deckEvent(msg.event);
      break;
    case 'deck_ink':
      deckInk(msg.castId, msg.strokes, msg.cells);
      break;
    case 'game_over': {
      if (!watching()) noteBattle(); // (0.9.9.9.6.9: Today's battle is done; 0.9.9.9.9: not by watching one)
      rematchSeen.clear();
      pendingLobby = null; lobbyRequested = false; ui.$('resultLobby').classList.remove('pulse');
      players = msg.players;
      ui.lockInput();
      stopWriting();
      const loud = !quiet;
      if (msg.mode !== 'deck') {
        overTimers.push(window.setTimeout(() => {
          ui.renderFighters(players, you, msg.boss);
          if (msg.mode === 'boss' && msg.teamWon) ui.knockOut('boss');
          if (msg.reason !== 'forfeit') for (const p of players) if (p.hp <= 0) ui.knockOut(actorOf(p.id));
        }, 450));
      }
      overTimers.push(window.setTimeout(() => {
        const won = msg.mode === 'boss' ? msg.teamWon : msg.winnerId === you;
        // (0.9.9.9.9.1: a replay jumping past the end shows the results without the fanfare)
        if (loud && won) audio.sfx.win();
        else if (loud && (msg.mode === 'boss' || msg.winnerId)) audio.sfx.lose();
        resetDeck();
        ui.showResults(msg.mode, msg.players, you, msg.winnerId, msg.teamWon, msg.reason, msg.stats);
        if (pendingMissed) { showMissedSave(pendingMissed); pendingMissed = null; } // the words you missed: untick to keep them out of the deck
      }, msg.reason === 'forfeit' ? 400 : 2000));
      break;
    }
    case 'paused':
      setPaused(msg.on);
      break;
    case 'progress':
      // the server's report usually arrives before the results screen is up: keep it until then
      if (msg.missed?.length) { if (ui.currentScreen() === 'results') showMissedSave(msg.missed); else pendingMissed = msg.missed; }
      lastReplay = msg.replay ?? null; showReplayRow(lastReplay, false); // 0.9.9.9.9
      setTimeout(() => {
        ui.showXp(msg.gained, msg.level, msg.levelUp);
        if (msg.rating) ui.showRating(msg.rating); // 0.9.9.9.9: a ranked match moved your rating
        if (msg.levelUp) ui.toast(`Level ${msg.level}! Check Customize for new unlocks.`, 5000);
        for (const id of msg.achievements ?? []) celebrate(id);
      }, 2100);
      void refreshProfile();
      break;
    case 'rematch_status': {
      ui.setRematchStatus(msg.votes, you, players.length, minPlayers);
      // 0.9.9.8.1: someone asked for a rematch and you haven't answered — a card like an invite
      const asker = msg.votes.find((id) => id !== you && !rematchSeen.has(id) && !players.find((p) => p.id === id)?.bot);
      for (const id of msg.votes) rematchSeen.add(id);
      if (msg.votes.includes(you) || !msg.votes.length) closeRematchAsk();
      else if (asker && ui.currentScreen() === 'results') onRematchAsk(players.find((p) => p.id === asker)?.name ?? 'Your opponent', () => ui.$('rematch').click());
      break;
    }
    case 'error':
      createDone();
      if (inRoom) { ui.$('lobbyStatus').textContent = msg.message; ui.toast(msg.message); }
      else if (ui.currentScreen() === 'queue') ui.toast(msg.message);
      else { ui.setError(msg.message); ui.show('menu'); }
      break;
  }
}

function onBattleEvent(msg: Extract<ServerMessage, { type: 'battle_update' }>) {
  const e = msg.event;
  const render = () => ui.renderFighters(players, you, msg.boss);
  switch (e.kind) {
    case 'hit': {
      const caster = actorOf(e.playerId);
      const target = actorOf(e.targetId);
      const friendly = caster !== 'opp';
      void ui.castSpell(caster, target, e.kanji, e.damage, friendly, !!e.crit).then(() => {
        render(); // HP bars update when the spell lands
        if (target === 'me') audio.sfx.hurt();
        else if (caster === 'me') audio.sfx.impact();
      });
      if (e.playerId !== you) ui.logLine(`${nameOf(e.playerId)} cast for ${e.damage}${e.crit ? ' (CRIT!)' : ''}${e.combo >= 2 ? ` (×${e.combo})` : ''}:`, e.kanji);
      // 0.9.9.9.5.3: a 30× combo (Godlike) — the arena trembles, and everyone in it feels it
      if (e.combo === 30) {
        ui.arenaTremble(); audio.sfx.quake();
        ui.toast(e.playerId === you ? '30× combo - the arena trembles!' : `${nameOf(e.playerId)} reached a 30× combo - the arena trembles!`);
      }
      break;
    }
    case 'miss':
      ui.fizzle(actorOf(e.playerId));
      render();
      if (e.playerId !== you) ui.logLine(`${nameOf(e.playerId)} fumbled:`, e.kanji);
      break;
    case 'claw':
      ui.clawHit(actorOf(e.playerId), e.damage);
      if (e.playerId === you) audio.sfx.claw();
      setTimeout(render, 200);
      if (e.playerId !== you) ui.logLine(`The dragon claws ${nameOf(e.playerId)} for ${e.damage}`);
      break;
    case 'breath_warning':
      ui.breathWarning(e.inMs);
      audio.sfx.inhale();
      break;
    case 'breath': {
      const immune = e.immune ?? [];
      const victims = (e.victims ? players.filter((p) => e.victims!.includes(p.id)) : players.filter((p) => !immune.includes(p.id) && p.hp > 0)).map((p) => actorOf(p.id));
      ui.breathFire(e.damage, victims, immune.map((id) => actorOf(id)));
      if (immune.includes(you)) ui.toast('You are on fire - immune to dragon breath!');
      audio.sfx.fire();
      setTimeout(render, 450);
      ui.logLine(immune.length ? `Fire breath! ${e.damage} damage - ${immune.map(nameOf).join(', ')} immune (on fire)` : `Fire breath! Everyone takes ${e.damage}`);
      break;
    }
  }
}

// ── writing (handwriting pad + Japanese keyboard) ────────────────────────────
const pad = new HandwritingPad(ui.$<HTMLCanvasElement>('pad'), () => shareInk());
let twitchAt = 0;
pad.onDraw = () => {
  shareInk();
  if (mode !== 'deck') arena()?.channel(Math.min(1, 0.45 + pad.strokeCount * 0.12));
  ui.gemBack();
  sendTyping(true);
  if (Date.now() - twitchAt > 140) { twitchAt = Date.now(); arena()?.twitch(); } // the staff moves as you write
};
/** missed words reported before the results screen opened */
let pendingMissed: import('../shared/protocol').MissedWord[] | null = null;
// 3D mouse look: the arena tells us where you look (throttled there); the other players' models turn their heads
addEventListener('kw:look', (e) => { const d = (e as CustomEvent<{ yaw: number; pitch: number }>).detail; socket.send({ type: 'look', yaw: d.yaw, pitch: d.pitch }); });
/** Deck Duel: the opponent watches your pad live (throttled, the last state always goes out). */
let inkTimer = 0, inkAt = 0;
function shareInk() {
  if (mode !== 'deck' || !writing) return;
  const send = () => { inkTimer = 0; inkAt = Date.now(); socket.send({ type: 'deck_ink', castId: challengeId, strokes: pad.ink(), cells: pad.cellCount }); };
  if (inkTimer) return;
  const wait = 120 - (Date.now() - inkAt);
  if (wait <= 0) send(); else inkTimer = window.setTimeout(send, wait);
}

function beginWriting(id: number, kanji: string) {
  challengeId = id;
  writing = true;
  charCount = writeTargets(kanji).length; // only the kanji: the kana around them are written for you
  writeShape = writeTemplate(kanji);
  // the kana that are written for you, big, beside the typing box: お□ → [お][ input ], □ず → [ input ][ず]
  const m = /^([^□]*)□+([^□]*)$/.exec(writeShape);
  const pre = m ? m[1] : '', post = m ? m[2] : writeShape.includes('□') && /[^□]/.test(writeShape) ? `(${writeShape})` : '';
  ui.$('imePre').textContent = pre; ui.$('imePre').hidden = !pre;
  ui.$('imePost').textContent = post; ui.$('imePost').hidden = !post;
  written = [];
  // write the whole word at once; the kana are already in their cells (□り□ → [ ][り][ ])
  if (writeShape.includes('□') && /[^□]/.test(writeShape)) pad.setLayout(writeShape); else pad.setCells(charCount);
  setEraser(false);
  arena()?.channel(0.35); // the staff starts to glow; brighter with every stroke
  if (mode === 'deck') ui.mountWriteArea('dkWrite');
  ui.setCharSlots(charCount, [], true, writeShape);
  const ime = ui.$<HTMLInputElement>('imeInput');
  ime.value = '';
  if (mode === 'deck') { ime.disabled = false; return; }
  // Kanji Writing: look at the kanji, then CAST! (or the look time runs out) → it vanishes, then you write
  clearTimeout(castGoTimer);
  castGoTimer = window.setTimeout(castGo, flashMs);
  ui.$('castGo').focus();
}
let castGoTimer = 0;
let flashMs = 3500;
function castGo() {
  clearTimeout(castGoTimer);
  if (!writing || ui.$('castGo').hidden) return;
  ui.startWritingStep();
  arena()?.thrust();
  ui.$<HTMLInputElement>('imeInput').focus();
}
ui.$('castGo').onclick = () => castGo();

function stopWriting() {
  writing = false;
  if (mode !== 'deck') arena()?.channel(0);
  ui.lockInput();
  if (mode === 'deck') ui.hideWriteArea();
}

function submitDrawing() {
  socket.send({ type: 'write', challengeId, chars: written });
  ui.lockInput();
  writing = false;
}

ui.$('padUndo').onclick = () => pad.undo();
const setEraser = (on: boolean) => { pad.setEraser(on); ui.$('padErase').setAttribute('aria-pressed', String(on)); ui.$('padErase').classList.toggle('on', on); };
ui.$('padErase').onclick = () => setEraser(!pad.eraser);
ui.$('padClear').onclick = () => pad.clear();
// typing a reading: the staff glows a little more with each letter
// 0.9.9.7.2: the others see your staff trace ∞ only while you type or write — tell them when that starts / stops
let typingSent = false;
function sendTyping(on: boolean) { if (on !== typingSent) { typingSent = on; socket.send({ type: 'typing', on }); } }
ui.$<HTMLInputElement>('answer').addEventListener('input', (e) => { const v = (e.target as HTMLInputElement).value; sendTyping(v.length > 0); arena()?.channel(Math.min(0.8, v.length * 0.15)); arena()?.twitch(); ui.gemBack(); });
ui.$<HTMLInputElement>('imeInput').addEventListener('input', () => { sendTyping(true); arena()?.channel(0.6); arena()?.twitch(); ui.gemBack(); });
ui.$('padSkip').onclick = () => skip();
ui.$('padNext').onclick = () => {
  if (pad.strokeCount === 0) return;
  written = [pad.take()]; // the whole word; the server splits it into characters
  submitDrawing();
};
// typed kanji with a Japanese IME (the first Enter confirms the conversion, the next one sends)
for (const id of ['imeInput', 'answer']) {
  for (const ev of ['paste', 'drop'] as const) ui.$(id).addEventListener(ev, (e) => { e.preventDefault(); ui.toast('Pasting is off - write it yourself!'); });
}
ui.$<HTMLInputElement>('imeInput').addEventListener('keydown', (e) => {
  const input = e.currentTarget as HTMLInputElement;
  if (e.key !== 'Enter' || e.isComposing || e.keyCode === 229 || input.disabled) return;
  e.stopPropagation();
  const text = input.value.trim();
  if (!text) return;
  socket.send({ type: 'answer', challengeId, text });
  ui.lockInput();
  writing = false;
});
addEventListener('keydown', (e) => {
  if (writing && !ui.$('castGo').hidden && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); castGo(); return; }
  if (!writing || e.target === ui.$('imeInput') || ui.$<HTMLButtonElement>('padNext').disabled) return;
  if (e.key === 'Enter') ui.$('padNext').click();
  else if (e.key === 'Escape') skip();
  else if ((e.ctrlKey || e.metaKey) && e.key === 'z') { e.preventDefault(); pad.undo(); }
  else if (e.key === 'e' || e.key === 'E') setEraser(!pad.eraser);
});

// ── auth screen ──────────────────────────────────────────────────────────────
let authTab: 'login' | 'register' = 'login';
ui.$('tabLogin').onclick = () => { authTab = 'login'; ui.setAuthTab('login'); };
ui.$('tabRegister').onclick = () => { authTab = 'register'; ui.setAuthTab('register'); };
ui.$('authForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = ui.$<HTMLInputElement>('authUser').value.trim();
  const password = ui.$<HTMLInputElement>('authPass').value;
  const btn = ui.$<HTMLButtonElement>('authSubmit');
  btn.disabled = true;
  ui.$('authError').textContent = '';
  try {
    const res = authTab === 'login' ? await api.login(username, password) : await api.register(username, password, ui.$<HTMLInputElement>('authEmail').value.trim());
    setToken(res.token);
    ui.$<HTMLInputElement>('authPass').value = '';
    signedIn(res.user);
    void refreshProfile();
    // 0.9.9.9.7: a new account — the code that went to its email
    const pending = (res as { pending?: string }).pending;
    if (pending) { emailAsked = true; codeDialog({ to: pending, onDone: emailSaved, onChange: changeEmail }); }
  } catch (err) {
    ui.$('authError').textContent = err instanceof Error ? err.message : 'Something went wrong';
  } finally {
    btn.disabled = false;
  }
});
ui.$('logout').onclick = () => {
  // 0.9.9.9.6.9: a guest who signs out can't come back to this account
  if (user?.guest && !confirm(tr('You are playing as a guest. If you log out now, this progress is gone - save it first (Save progress at the top). Log out anyway?'))) return;
  logout();
};
// ── 0.9.9.9.6.9: guests — play at once; save the account later ──
ui.$('guestPlay').onclick = async () => {
  const btn = ui.$<HTMLButtonElement>('guestPlay');
  btn.disabled = true;
  ui.$('authError').textContent = '';
  try {
    const res = await api.guest();
    setToken(res.token);
    signedIn(res.user);
    void refreshProfile();
  } catch (err) {
    ui.$('authError').textContent = err instanceof Error ? err.message : 'Something went wrong';
  } finally { btn.disabled = false; }
};
function saveGuest(why?: string) {
  claimDialog({ why, onDone: (_t, u) => { user = u; ui.setUser(u); setMentionSelf(u.id, u.username, u.name); emailLabel(); ui.toast(tr('Saved - this is your account now'), 3500); } });
}
ui.$('guestSave').onclick = () => saveGuest();
// messages and friends need an account: a guest is offered to save it first
ui.$('inboxBtn').addEventListener('click', (e) => {
  if (!user?.guest) return;
  e.preventDefault(); e.stopImmediatePropagation();
  saveGuest(tr('Messages and friends need an account. Save your progress - it takes a moment, and everything you have done so far stays.'));
}, true);
// 0.9.9.9.6.6: "Forgot password?" — a code by email; your email (added once by older accounts, changed in your profile)
ui.$('authForgot').onclick = () => forgotDialog(ui.$<HTMLInputElement>('authUser').value.trim(), (_t, u) => { ui.$<HTMLInputElement>('authPass').value = ''; signedIn(u); void refreshProfile(); ui.toast(tr('Password changed - you are signed in'), 3500); });
let emailAsked = false;
function emailLabel() { ui.$('emailChange').textContent = user?.email ? `${tr('Email')}: ${user.email}${user.emailVerified ? '' : ` (${tr('not confirmed')})`}` : tr('Add your email'); }
// 0.9.9.9.7: an email is confirmed with a code before it's the account's
function emailSaved(u: PublicUser) { if (user) user = { ...user, email: u.email, emailVerified: u.emailVerified }; emailLabel(); ui.toast(tr('Email confirmed'), 2500); }
function changeEmail() { emailDialog({ required: false, current: user?.email ?? null, onDone: emailSaved }); }
function askEmail() {
  emailLabel();
  if (!user || user.guest || emailAsked || offline.isOffline()) return; // (0.9.9.9.6.9: a guest saves the account instead)
  // an email from before 0.9.9.9.7, never confirmed: ask (once a session) — the code goes out only if they want it
  if (user.email && !user.emailVerified) { emailAsked = true; codeDialog({ to: user.email, ask: true, onDone: emailSaved, onChange: changeEmail }); return; }
  if (user.email) return;
  emailAsked = true;
  emailDialog({ required: true, onDone: emailSaved, onLogout: () => { emailAsked = false; logout(); } });
}
ui.$('emailChange').onclick = () => user?.email && !user.emailVerified ? codeDialog({ to: user.email, ask: true, onDone: emailSaved, onChange: changeEmail }) : emailDialog({ required: false, current: user?.email ?? null, onDone: emailSaved });
// 0.9.9.9.6.5: change your password (the current one first) — every other device is signed out
ui.$('pwChange').onclick = () => {
  const d = document.createElement('dialog');
  d.className = 'friend-dialog pw-dialog';
  const f = document.createElement('form');
  const field = (label: string, ac: AutoFill) => {
    const l = document.createElement('label'); l.className = 'pw-field';
    const i = document.createElement('input'); i.type = 'password'; i.autocomplete = ac; i.required = true; i.maxLength = 72;
    l.append(tr(label), i); return { l, i };
  };
  const cur = field('Current password', 'current-password'), nw = field('New password', 'new-password'), again = field('New password again', 'new-password');
  nw.i.minLength = 8; again.i.minLength = 8; // (0.9.9.9.8: 8)
  const msg = document.createElement('p'); msg.className = 'hint pw-msg'; msg.setAttribute('role', 'status');
  const note = document.createElement('p'); note.className = 'hint'; note.textContent = tr('You stay signed in here; every other device is signed out.');
  const row = document.createElement('div'); row.className = 'fb-actions';
  const cancel = document.createElement('button'); cancel.type = 'button'; cancel.className = 'pill'; cancel.textContent = tr('Cancel'); cancel.onclick = () => d.close();
  const ok = document.createElement('button'); ok.type = 'submit'; ok.className = 'big'; ok.textContent = tr('Change password');
  row.append(cancel, ok);
  const h3 = document.createElement('h3'); h3.textContent = tr('Change password');
  // 0.9.9.9.8: or keep the password and only sign the other devices out (a lost phone, a shared computer)
  const others = document.createElement('button'); others.type = 'button'; others.className = 'link pw-others'; others.textContent = tr('Sign out on all other devices');
  others.onclick = async () => {
    others.disabled = true;
    try { setToken((await api.signOutOthers()).token); d.close(); ui.toast(tr('Signed out on all other devices. You stay signed in here.'), 4000); }
    catch (err) { msg.textContent = (err as Error).message; others.disabled = false; }
  };
  f.append(h3, cur.l, nw.l, again.l, note, msg, row, others);
  f.onsubmit = async (e) => {
    e.preventDefault();
    if (nw.i.value !== again.i.value) { msg.textContent = tr('The new passwords don’t match'); return; }
    ok.disabled = true;
    try {
      const r = await api.changePassword(cur.i.value, nw.i.value);
      setToken(r.token);
      d.close();
      ui.toast(tr('Password changed'), 3000);
    } catch (err) { msg.textContent = (err as Error).message; ok.disabled = false; }
  };
  d.append(f);
  d.addEventListener('close', () => d.remove());
  document.body.append(d);
  d.showModal();
  cur.i.focus();
};
// 0.9.9.6: change your nickname (the name others see; your login stays for signing in)
ui.$('ppRename').onclick = () => {
  const f = ui.$('ppRenameForm');
  f.hidden = !f.hidden;
  if (!f.hidden) { const i = ui.$<HTMLInputElement>('ppRenameInput'); i.value = user?.nickname ?? ''; i.focus(); }
};
ui.$('ppRenameForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const i = ui.$<HTMLInputElement>('ppRenameInput');
  try {
    const r = await api.setNickname(i.value);
    user = r.user;
    setMentionSelf(r.user.id, r.user.username, r.user.name);
    ui.setUser(r.user);
    ui.$('ppRenameForm').hidden = true;
    ui.toast(r.user.nickname ? `${tr('Your nickname')}: ${r.user.nickname}` : tr('Nickname cleared - others see your login'));
  } catch (err) { ui.toast((err as Error).message, 5000); }
});

// ── menu ─────────────────────────────────────────────────────────────────────
ui.$('studyLockBtn').onclick = () => void openStudy();
ui.$('create').onclick = () => { ui.setError(''); ui.show('modes'); };
// 0.9.9.8.2: Private game is a page of its own; offline, it says what still works (the AI)
ui.$('privateBtn').onclick = () => { ui.setError(''); ui.$('pvOffline').hidden = !offline.isOffline(); ui.show('private'); };
ui.$('privateBack').onclick = () => ui.show('menu');
ui.$('queueBtn').onclick = () => { ui.setError(''); openQueue(); };
initQueue((m) => socket.send(m), () => user?.id ?? '');
// 0.9.9.9.6.6: nobody in the queue yet → an AI game while you wait: a room of that mode, the AI in it, Ready
let pendingAi: { mode: GameMode; level: string } | null = null;
setPlayAi((m, level, levels) => {
  if (!canPlay(m)) { ui.toast(lockText(m), 5000); return; }
  pendingAi = { mode: m, level };
  socket.send({ type: 'create', mode: m, levels: levels.length ? levels : savedLevels() });
});
// 0.9.9.6: picking a mode shows that it's working; if the server doesn't answer (a dead connection on a phone)
// the app reconnects and asks again, and says so if that doesn't help either
let creating: { timers: number[] } | null = null;
function createDone() {
  if (!creating) return;
  creating.timers.forEach(clearTimeout);
  creating = null;
  for (const c of document.querySelectorAll<HTMLButtonElement>('.mode-card')) c.classList.remove('busy');
}
for (const card of document.querySelectorAll<HTMLButtonElement>('.mode-card')) {
  card.onclick = () => {
    const m = card.dataset.mode as GameMode;
    if (!canPlay(m)) return ui.toast(lockText(m), 5000);
    if (offline.isOffline() && !OFFLINE_MODES.includes(m)) return ui.toast(tr('This mode needs internet - offline you can play Kanji Reading, Rapid or Boss Elimination against bots.'), 5000);
    if (creating) return; // already on its way
    if (m === 'deck') askNotifyPermission(); // "your turn" while you look at another tab
    const msg: ClientMessage = { type: 'create', mode: m, levels: savedLevels() };
    card.classList.add('busy');
    creating = { timers: [] };
    socket.send(msg);
    creating.timers.push(
      window.setTimeout(() => { if (creating && ui.currentScreen() === 'modes') socket.restart(msg); }, 4000),
      window.setTimeout(() => { if (!creating) return; createDone(); if (ui.currentScreen() === 'modes') ui.toast(tr('Couldn’t reach the game server - check your connection and try again.'), 5000); }, 12_000),
    );
  };
}
// new menu pages
ui.$('dailyBtn').onclick = () => { if (user) void openDaily(user.id); };
// ── challenge a friend: make a room for the mode you picked and invite them into it ──
let pendingChallenge: { friendId: string; name: string; mode: GameMode; sent?: boolean } | null = null;
function challengeFriend(friendId: string, name: string, mode: GameMode) {
  if (!canPlay(mode)) { ui.toast(lockText(mode), 5000); return; }
  pendingChallenge = { friendId, name, mode };
  if (inRoom) socket.send({ type: 'leave' }); // the room is made once you're out of this one ('left')
  else { pendingChallenge.sent = true; socket.send({ type: 'create', mode, levels: savedLevels() }); }
}

ui.$('progressBtn').onclick = () => void openProgress(profile?.unlocks ?? [], profile?.badges ?? [], (b) => { if (profile) { profile = { ...profile, badges: b }; ui.setBadges(b); } });
/**
 * 0.9.9.9.5: "Join" on an invite notification opens the app at …/?join=CODE: once signed in, straight into that room
 * (the link is cleared first, so a reload doesn't join again).
 */
function joinFromLink() {
  let c = '';
  // 0.9.9.9.6: a message notification tapped → that conversation
  let ib = '';
  try { ib = new URLSearchParams(location.search).get('inbox') ?? ''; } catch { /* no URL */ }
  if (ib) {
    try { history.replaceState(history.state, '', location.pathname + location.hash); } catch { /* fine */ }
    if (!inRoom) void openInbox(/^(g:)?[\w-]{1,64}$/.test(ib) && ib !== '1' ? ib : undefined); // (0.9.9.9.6.4: or a group)
    return;
  }
  if (replayFromLink()) return; // 0.9.9.9.9
  try { c = new URLSearchParams(location.search).get('join') ?? ''; } catch { /* no URL */ }
  if (!c) return;
  try { history.replaceState(history.state, '', location.pathname + location.hash); } catch { /* fine */ }
  if (!/^[A-Za-z0-9]{4}$/.test(c)) return;
  joinRoom(c.toUpperCase());
}
function joinRoom(c: string) {
  askNotifyPermission();
  if (!inRoom) return socket.send({ type: 'join', code: c, levels: savedLevels() });
  // in another room's lobby / results: leave it, then join (when the server says we've left)
  pendingJoin = c;
  socket.send({ type: 'leave' });
}
initFriends({
  send: (m) => socket.send(m),
  join: (c) => joinRoom(c),
  inRoom: () => inRoom,
});
initSelects();
initApp({
  // a new version is ready: reload when you're on the menu (or signed out), not in a room or a study session
  canReload: () => !inRoom && ['menu', 'auth'].includes(ui.currentScreen() ?? ''),
  backOnline: () => { ui.setError(''); void refreshProfile(); },
  netStatus: showNetStatus,
});
initMotion(); // 0.9.9.9.5: buttons give and spring back, new list items slide in
initMenuCarousel(); // 0.9.9.9.5.1: the menu's cards as a carousel on computers
initQuizzes(); // 0.9.9.9.5.2: the Quizzes screen
initInbox(); // 0.9.9.9.6: Messages
setInboxSocket((m) => socket.send(m)); // 0.9.9.9.6.4: "typing…"
setInviteJoin((c) => joinRoom(c), () => (inRoom && code ? code : null)); // 0.9.9.9.6.5: Join on an invite in the chat
ui.setModePicker((m) => { if (!canPlay(m)) { ui.toast(lockText(m), 5000); return; } socket.send({ type: 'set_mode', mode: m }); }); // 0.9.9.9.6.5: the host changes the room's mode
onLeagueEquip((p) => applyProfile(p)); // 0.9.9.9.6: the league-up screen's Equip buttons
onAdminSelfTest((p) => applyProfile(p)); // 0.9.9.9.6.3: the admin's test tools (streak, record)
// 0.9.9.9.8: Settings → Notifications → "Invites and messages" (on the phone app and in browsers; the tests are gone)
{
  const btn = ui.$<HTMLButtonElement>('alertsBtn');
  const draw = () => { const on = alertsOn(); btn.textContent = tr(on ? 'On' : 'Off'); btn.classList.toggle('on', on); btn.setAttribute('aria-pressed', String(on)); };
  draw();
  btn.onclick = async () => {
    const r = await setAlerts(!alertsOn(), user?.id ?? '');
    draw();
    if (r === 'blocked') ui.toast(tr('Notifications are blocked for this game. Allow them in your phone or browser settings.'), 6000);
    else ui.toast(tr(r === 'on' ? 'Invite and message notifications on' : 'Invite and message notifications off'));
  };
}
initTutorial({
  firstBattle: () => socket.send({ type: 'create', mode: 'reading', levels: ui.kanaBeginner() ? ['KANA'] : ['KANA', 'N5'], tutorial: true }),
  kana: async (mastered) => {
    try { applyProfile((await api.setKana(mastered)).profile); } catch (e) { ui.toast((e as Error).message); }
    if (!mastered) store.set('kb:levels', JSON.stringify(['KANA']));
  },
  pause: (on) => socket.send({ type: 'pause', on }), // 0.9.9.9.6: the battle screen's tour

});
ui.$('modesBack').onclick = () => ui.show('private');
const join = () => {
  const c = ui.$<HTMLInputElement>('joinCode').value.trim();
  if (c.length !== 4) return ui.setError('Room codes have 4 letters');
  socket.send({ type: 'join', code: c, levels: savedLevels() });
};
ui.$('join').onclick = join;
ui.$<HTMLInputElement>('joinCode').addEventListener('keydown', (e) => { if (e.key === 'Enter') join(); });
ui.$('howBtn').onclick = () => ui.$<HTMLDialogElement>('howDialog').showModal();
ui.$('studyBtn').onclick = () => {
  // 0.9.9.9.5.1: kanji words only — a かな beginner learns kana first
  if (ui.kanaBeginner()) {
    ui.toast('Master hiragana first - in Kana', 4000);
    const k = ui.$('kanaBtn');
    k.classList.remove('nudge'); void k.offsetWidth; k.classList.add('nudge');
    return;
  }
  void openStudy();
};
ui.$('quizzesBtn').onclick = () => ui.show('quizzes');
ui.$('quizzesBack').onclick = () => ui.show('menu');
// 0.9.9.9.5: the Kana section (a kana mastered for the first time gives XP: the level bar follows)
ui.$('kanaBtn').onclick = () => openKana();
initKana({
  saved: async () => {
    const was = ui.kanaBeginner();
    await refreshProfile();
    // all 46 basic hiragana mastered: the server lifted the beginner lock
    if (was && !ui.kanaBeginner()) { ui.toast('All basic hiragana mastered - kanji battles unlocked!', 5000); audio.sfx.win(); }
  },
});
ui.$('studyBack').onclick = () => ui.show('menu');
ui.$('customizeBtn').onclick = async () => { await refreshProfile(); if (profile) openCustomize(profile, user?.role === 'admin', () => applyBackground(true)); };
ui.$('customizeBack').onclick = () => ui.show('menu');

// ── admin ────────────────────────────────────────────────────────────────────
async function openAdmin() {
  try {
    const { users, storage, persistent } = await api.users();
    ui.showAdmin(users, user!, { storage, persistent }, async (u) => {
      try { await api.setBanned(u.id, !u.banned); await openAdmin(); } catch (e) { ui.$('adminInfo').textContent = (e as Error).message; }
    }, async (u) => {
      const promote = u.role !== 'admin';
      if (!confirm(promote ? `Make ${u.username} an admin? They will see the Admin page (users, inbox, stats) and can ban players.` : `Remove admin from ${u.username}?`)) return;
      try { await api.setRole(u.id, promote ? 'admin' : 'user'); await openAdmin(); } catch (e) { ui.$('adminInfo').textContent = (e as Error).message; }
    }, async (u) => {
      if (!confirm(`Delete the account “${u.username}” for good? Its XP, study cards, match history and friends are deleted too. This can’t be undone.`)) return;
      try { await api.deleteUser(u.id); ui.toast(`${u.username} deleted`); await openAdmin(); } catch (e) { ui.$('adminInfo').textContent = (e as Error).message; }
    });
  } catch (e) {
    ui.setError((e as Error).message);
  }
}
ui.$('adminBtn').onclick = () => { setAdminTab('users'); void openAdmin(); void refreshInboxBadge(); };
ui.$('adminRefresh').onclick = () => { if (adminTab() === 'users') void openAdmin(); else setAdminTab(adminTab()); };
// the Users page keeps itself up to date (who is online) while it's open
setInterval(() => { if (ui.currentScreen() === 'admin' && user?.role === 'admin' && adminTab() === 'users') void openAdmin(); }, 15_000);
ui.$('adminBack').onclick = () => ui.show('menu');

// ── lobby ────────────────────────────────────────────────────────────────────
ui.$('levelChips').addEventListener('change', (e) => {
  const levels = ui.selectedLevels();
  if (levels.length === 0) { (e.target as HTMLInputElement).checked = true; return; } // keep at least one
  store.set('kb:levels', JSON.stringify(levels));
  socket.send({ type: 'levels', levels });
});
// 0.9.9.9.5.5: "← Leave room" asks first
ui.$('leaveLobby').onclick = async () => {
  if (inTutorialBattle() || await ui.confirmBox('Leave the room?', players.filter((p) => !p.bot).length > 1 ? 'The others stay in the lobby without you.' : 'The room closes when you leave.')) socket.send({ type: 'leave' });
};
ui.$('lobbyOpen').onclick = () => {
  const sw = ui.$<HTMLButtonElement>('lobbyOpen');
  if (sw.disabled) return;
  socket.send({ type: 'set_open', open: !sw.classList.contains('on') });
};
ui.$('start').onclick = () => socket.send({ type: 'start' });
ui.$('addBotBtn').onclick = () => socket.send({ type: 'add_bot', level: ui.$<HTMLSelectElement>('botLevel').value });
ui.$('lobbyPlayers').addEventListener('click', (e) => {
  const id = (e.target as HTMLElement).closest<HTMLElement>('[data-remove-bot]')?.dataset.removeBot;
  if (id) socket.send({ type: 'remove_bot', id });
});
ui.$('readyBtn').onclick = () => socket.send({ type: 'lobby_ready', ready: !ui.$('readyBtn').dataset.ready });
ui.$('copyCode').onclick = async () => {
  try { await navigator.clipboard.writeText(code); ui.$('copyCode').textContent = 'Copied!'; } catch { ui.$('copyCode').textContent = code; }
  setTimeout(() => (ui.$('copyCode').textContent = 'Copy'), 1500);
};

// ── prep / battle ────────────────────────────────────────────────────────────
ui.$('ready').onclick = () => socket.send({ type: 'ready' });
ui.$('prepBack').onclick = () => socket.send({ type: 'back_to_lobby' });

function skip() {
  socket.send({ type: 'skip', challengeId });
  ui.lockInput();
  writing = false;
}
ui.$('skip').onclick = () => { if (!ui.answerLocked()) skip(); };

ui.$<HTMLInputElement>('answer').addEventListener('keydown', (e) => {
  const input = e.currentTarget as HTMLInputElement;
  if (ui.answerLocked()) { if (e.key === 'Enter') e.preventDefault(); return; }
  if (e.key === 'Escape' && !e.isComposing) { e.preventDefault(); return skip(); }
  // With a Japanese IME, the first Enter confirms the conversion — don't submit on that one.
  if (e.key !== 'Enter' || e.isComposing || e.keyCode === 229) return;
  const text = input.value.trim();
  if (!text) return;
  if (ui.currentAnswerMode() === 'romaji' && !/^[a-z' -]+$/i.test(text.normalize('NFKC'))) {
    ui.setInputHint('Use romaji for hiragana spells (switch your IME off)', true);
    return; // don't burn the attempt on a format slip
  }
  socket.send({ type: 'answer', challengeId, text: input.value });
  ui.lockInput(); // one attempt per challenge (rapid re-enables it on a wrong guess)
});

// Forfeit (two taps; no blocking confirm() dialogs) → everyone goes to the results screen
// 0.9.9.8: only you in the room (against AI, or a solo Boss run): it's a Leave button — straight back to the lobby
function armForfeit(btnId: string) {
  let armed = 0;
  ui.$(btnId).onclick = () => {
    const label = soloVsAi ? 'Leave' : 'Forfeit';
    if (Date.now() - armed < 3000) { socket.send(soloVsAi ? { type: 'leave_game' } : { type: 'forfeit' }); return; }
    armed = Date.now();
    ui.$(btnId).textContent = soloVsAi ? 'Tap again to leave' : 'Tap again to forfeit';
    setTimeout(() => (ui.$(btnId).textContent = label), 3000);
  };
}
function forfeitLabels() {
  for (const id of ['forfeit', 'dkForfeit']) {
    const b = ui.$(id);
    b.textContent = soloVsAi ? 'Leave' : 'Forfeit';
    b.classList.toggle('leave', soloVsAi);
  }
}
armForfeit('forfeit');
armForfeit('dkForfeit');

// ── deck duel ────────────────────────────────────────────────────────────────
ui.$('version').textContent = `v${VERSION}`;
document.documentElement.dataset.v = VERSION;
// 3D arena switch (in the sound/settings panel)
{
  const t = ui.$<HTMLSelectElement>('arena3dMode');
  const sync = () => {
    t.value = arenaQuality();
    t.disabled = !hasWebgl(); // you can pick it while holding a phone upright: it applies once you turn it sideways
    ui.$('arena3dInfo').textContent = !hasWebgl() ? 'Your browser has no WebGL - the classic 2D view is used.'
      : arenaSupported() ? 'First-person duel arena (move the mouse to look around). Low is lighter on phones and older computers; Off uses the classic 2D view.'
      : 'This screen is too small for the 3D arena - the classic 2D view is used.';
  };
  sync();
  t.onchange = () => { setArenaQuality(t.value as ArenaQuality); sync(); };
  addEventListener('kw:arena-lite', (e) => {
    const { lowRes } = (e as CustomEvent<{ lowRes: boolean }>).detail;
    ui.toast(lowRes ? '3D was slow - lowered its resolution. Settings → Graphics → 3D graphics → Off for the 2D view.' : '3D was slow on this device - switched to Low (Settings → Graphics).', 5000);
    sync();
  });
  ui.$('volBtn').addEventListener('click', sync);
}
// Phones: the compact battle keyboard, or the phone's own
{
  const sel = ui.$<HTMLSelectElement>('gameKbSel');
  ui.$('gameKbRow').hidden = !gameKbAvailable();
  sel.value = gameKbPref() ? 'game' : 'system';
  sel.onchange = () => { setGameKbPref(sel.value === 'game'); setGameKb(ui.currentScreen() === 'battle' && mode !== 'writing'); };
}
// Pause (only you against the AI): the server stops the clock; the overlay waits for Resume
function setPaused(on: boolean) {
  ui.$('pauseOverlay').hidden = !on || tutorialTouring(); // (the tutorial's tour pauses quietly)
  document.body.classList.toggle('paused', on);
  ui.setClocksPaused(on); // 0.9.9.7: the timers on screen stop too, and the arena freezes (arena3d checks the class)
}
for (const b of document.querySelectorAll<HTMLElement>('[data-pause]')) b.onclick = () => socket.send({ type: 'pause', on: true });
ui.$('resumeBtn').onclick = () => socket.send({ type: 'pause', on: false });
// "I've mastered hiragana": opens N5–N1 for a player who started as a かな beginner
ui.$<HTMLInputElement>('kanaMastered').onchange = async (e) => {
  const box = e.target as HTMLInputElement;
  try {
    applyProfile((await api.setKana(box.checked)).profile);
    ui.toast(box.checked ? 'Kanji battles unlocked - pick N5 when you queue!' : 'Back to かな only in battles.', 5000);
    if (!box.checked) store.set('kb:levels', JSON.stringify(['KANA']));
  } catch (err) { box.checked = !box.checked; ui.toast((err as Error).message); }
};
// 0.9.9.7: Theme — dark (as before) or light: light panels and buttons, dark text
{
  const sel = ui.$<HTMLSelectElement>('themeSel');
  // 0.9.9.7.1: battles stay dark — over the 3D arena, dark text and light boxes were hard to see
  const DARK_SCREENS = new Set(['battle', 'deck']);
  let pref = 'dark';
  const apply = (t: string) => {
    pref = t;
    const light = t === 'light' && !DARK_SCREENS.has(document.body.dataset.screen ?? '');
    if (light) document.documentElement.dataset.theme = 'light'; else delete document.documentElement.dataset.theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', light ? '#eef0fb' : '#0b0a1c');
  };
  new MutationObserver(() => apply(pref)).observe(document.body, { attributes: true, attributeFilter: ['data-screen'] });
  let saved = 'dark';
  try { saved = localStorage.getItem('kb:theme') === 'light' ? 'light' : 'dark'; } catch { /* private mode */ }
  sel.value = saved; apply(saved);
  sel.onchange = () => { try { localStorage.setItem('kb:theme', sel.value); } catch { /* private mode */ } apply(sel.value); };
}
// 0.9.9.9.9.1: the menu's weather — by itself (the place and the season, every 2 hours), or the one you like
{
  const sel = ui.$<HTMLSelectElement>('weatherSel');
  sel.value = weatherPref();
  sel.onchange = () => { setWeatherPref(sel.value as Weather | 'auto'); applyBackground(); };
}
// Language (English / Russian): reloads the page in the new language
{
  const sel = ui.$<HTMLSelectElement>('langSel');
  sel.value = lang();
  sel.onchange = () => setLang(sel.value === 'ru' ? 'ru' : 'en');
}
// UI size (default 80% again since 0.9.9.9)
{
  const sel = ui.$<HTMLSelectElement>('uiZoom');
  sel.replaceChildren(...UI_ZOOMS.map((z) => new Option(`${Math.round(z * 100)}%${z === 0.8 ? ' (default)' : ''}`, String(z))));
  sel.value = String(uiZoomPref());
  sel.onchange = () => setUiZoomPref(Number(sel.value));
}
ui.$('pad').style.cursor = brushCursor(); // pixel hand + brush; the ink tip draws

initDeck({
  send: (m) => socket.send(m),
  me: () => you,
  beginWriting: (castId, kanji) => { mode = 'deck'; beginWriting(castId, kanji); },
  stopWriting: () => stopWriting(),
});

// ── results ──────────────────────────────────────────────────────────────────
ui.$('rematch').onclick = () => socket.send({ type: 'rematch' });
// results → back to this room's lobby (same players, pick the next mode together)
let lobbyRequested = false;
let pendingLobby: Extract<ServerMessage, { type: 'lobby' }> | null = null;
ui.$('resultLobby').onclick = () => {
  lobbyRequested = true;
  if (pendingLobby) { const m = pendingLobby; pendingLobby = null; onMessage(m); }
  else socket.send({ type: 'back_to_lobby' });
};
ui.$('leave').onclick = () => socket.send({ type: 'leave' });

// ── match history ────────────────────────────────────────────────────────────
async function openHistory() {
  ui.showHistory(null, openMatch);
  try { ui.showHistory((await api.matches()).matches, openMatch); }
  catch (err) { ui.toast((err as Error).message); ui.show('menu'); }
}
async function openMatch(id: string) {
  try {
    const m = (await api.match(id)).match;
    ui.showResults(m.mode, m.players, m.you, m.winnerId, m.teamWon, m.reason, m.stats, { history: { at: m.at } });
    showReplayRow(m.replay ?? null, true, m.you); // 0.9.9.9.9: watch it again (two weeks)
  } catch (err) { ui.toast((err as Error).message); }
}
ui.$('historyBtn').onclick = () => void openHistory();
ui.$('historyBack').onclick = () => ui.show('menu');
ui.$('resultHistoryBack').onclick = () => void openHistory();
// 0.9.9.9.9.2: ← Back on the results: out of a replay, to the match history (an old match), to the room's lobby, or to
// the menu — whichever the results were opened from (the phone's back button presses it too)
ui.$('resultBack').onclick = () => {
  if (watching()) return stopWatching();
  if (!ui.$('historyBackRow').hidden) return void openHistory();
  const lobby = ui.$('resultLobby');
  if (inRoom && lobby.getClientRects().length && !(lobby as HTMLButtonElement).disabled) return lobby.click();
  if (inRoom) return ui.$('leave').click();
  ui.show('menu');
};

// ── 0.9.9.9.9: replays and watching ───────────────────────────────────────────
let lastReplay: string | null = null;
/** the results' Watch replay / Copy link (a fresh match: once the server says it's kept; history: kept two weeks) */
function showReplayRow(id: string | null, history: boolean, side?: string) {
  const row = ui.$('replayRow');
  row.hidden = !id;
  if (!id) return;
  ui.$('replayWatch').onclick = () => void openReplay(id, side ?? you);
  ui.$('replayCopy').onclick = async () => {
    try { await navigator.clipboard.writeText(replayLink(id)); ui.toast(tr('Replay link copied - anyone can watch it for two weeks'), 3000); }
    catch { prompt(tr('Replay link'), replayLink(id)); }
  };
}
async function openReplay(id: string, side?: string) {
  try {
    const r = (await api.replay(id)).replay;
    // 0.9.9.9.9.1: from the results you're still in the room — leave it first. The replay began at once, and the
    // server's "you left" came a moment later and cleared you out of it: you were in it without your HP, as the
    // default character with the default staff, until the next message put you back.
    if (inRoom && !watching()) {
      await new Promise<void>((done) => {
        afterLeft = done;
        socket.send({ type: 'leave' });
        setTimeout(() => { if (afterLeft === done) { afterLeft = null; backToMenu(); done(); } }, 2500);
      });
    }
    playReplay(id, r, side);
  } catch (e) { ui.toast((e as Error).message, 5000); }
}
/** 0.9.9.9.9.1: a replay jumped to a moment: the battle as it stood then, built quietly */
function restoreReplay(s: ReplayState) {
  quiet = true;
  try {
    for (const t of overTimers) clearTimeout(t);
    overTimers = [];
    ui.stopCountdown();
    onMessage(s.start); // the battle screen, the arena and the clocks as they were then
    if (s.start.countdownMs <= 0) arena()?.endIntro();
    players = s.players;
    ui.renderFighters(players, you, s.boss);
    if (mode === 'boss') for (const p of players) if (p.hp <= 0) ui.knockOut(actorOf(p.id));
    if (s.challenge) onMessage(s.challenge);
    if (s.answer) onMessage(s.answer);
    if (s.over) onMessage(s.over);
  } finally { quiet = false; }
}
/** ?replay=<id>: a shared link — it plays (signed in or not) */
function replayFromLink(): boolean {
  let id = '';
  try { id = new URLSearchParams(location.search).get('replay') ?? ''; } catch { /* no URL */ }
  if (!/^[\w-]{16}$/.test(id)) return false;
  try { history.replaceState(history.state, '', location.pathname + location.hash); } catch { /* fine */ }
  void openReplay(id);
  return true;
}
initWatch({
  feed: (m) => onMessage(m),
  restore: restoreReplay,
  leave: () => { backToMenu(); if (!user) showAuth(); },
  unwatch: () => socket.send({ type: 'unwatch' }),
  toast: (s) => ui.toast(s, 3000),
});
function watchFriend(id: string) { ui.hideProfileCard(); socket.send({ type: 'watch', userId: id }); }
addEventListener('kw:screenin', (e) => { if ((e as CustomEvent<string>).detail === 'queue') void renderRankBox(); });

// ── other players' profiles: click (or Enter on) any name marked with data-profile ──
// 0.9.9.9.6: the card opens at once — a profile seen in the last minutes (or fetched while the pointer was on the
// name) is shown straight away and refreshed behind it; the friends list is the rail's (it waited for both before)
{
  let shownFor = '';
  const cache = new Map<string, { p: PublicProfile; at: number }>();
  const inflight = new Map<string, Promise<PublicProfile>>();
  const fetchProfile = (id: string) => {
    let f = inflight.get(id);
    if (!f) {
      f = api.player(id).then((r) => { cache.set(id, { p: r.profile, at: Date.now() }); return r.profile; }).finally(() => inflight.delete(id));
      inflight.set(id, f);
    }
    return f;
  };
  const friendsNow = async (): Promise<Friend[]> => {
    const k = knownFriends();
    if (k && Date.now() - k.at < 60_000) return k.friends;
    try { return (await api.friends()).friends; } catch { return k?.friends ?? []; }
  };
  // (the pointer on a name, or a finger down on it: start fetching before the click)
  const warm = (e: Event) => {
    const el = (e.target as HTMLElement | null)?.closest?.<HTMLElement>('[data-profile]');
    const id = el?.dataset.profile;
    if (!id || el?.dataset.bot || /\((?:AI|Bot) /.test(el?.textContent ?? '')) return;
    const c = cache.get(id);
    if (!c || Date.now() - c.at > 60_000) void fetchProfile(id).catch(() => {});
  };
  addEventListener('pointerover', warm, { passive: true });
  addEventListener('pointerdown', warm, { passive: true });
  const open = async (el: HTMLElement) => {
    // 0.9.9.9.6.3: "@login" in a chat we hadn't met yet — find them by their login first
    if (!el.dataset.profile && el.dataset.mention) {
      const login = el.dataset.mention;
      shownFor = '@' + login;
      ui.showProfileCard(el, 'loading');
      try {
        const p = (await api.playerByLogin(login)).profile;
        cache.set(p.id, { p, at: Date.now() });
        knowPlayer(p.id, login, p.name);
        el.dataset.profile = p.id;
        if (shownFor !== '@' + login) return; // (closed meanwhile)
        shownFor = '';
      } catch { if (shownFor === '@' + login) { ui.hideProfileCard(); shownFor = ''; ui.toast(`${tr('No such player')}: @${login}`, 2500); } return; }
    }
    const id = el.dataset.profile!;
    if (shownFor === id && !ui.$('otherPop').hidden) { ui.hideProfileCard(); shownFor = ''; return; }
    shownFor = id;
    const name = el.dataset.name ?? el.textContent ?? '';
    const bot = el.dataset.bot ?? /\((?:AI|Bot) (N\d)\)$/.exec(name)?.[1];
    if (bot) return ui.showProfileCard(el, { bot, name });
    const cached = cache.get(id);
    if (cached) show(el, id, cached.p, knownFriends()?.friends ?? []);
    else ui.showProfileCard(el, 'loading');
    try {
      const fresh = !cached || Date.now() - cached.at > 20_000;
      const [p, friends] = await Promise.all([fresh ? fetchProfile(id) : Promise.resolve(cached.p), friendsNow()]);
      if (shownFor === id && (!cached || fresh)) show(el, id, p, friends);
    } catch { if (shownFor === id && !cached) ui.showProfileCard(el, 'missing'); }
  };
  const show = (el: HTMLElement, id: string, p: PublicProfile, friends: Friend[]) => {
      const link = friends.find((f) => f.id === id);
      const relation = id === you || id === user?.id ? 'self' : link?.status === 'accepted' ? 'friend' : link?.status ?? 'none';
      if (shownFor === id) ui.showProfileCard(el, p, {
        relation,
        addFriend: async () => { await api.addFriend(p.name); void refreshRail(); },
        accept: async () => { await api.acceptFriend(id); void refreshRail(); },
        challenge: (m) => challengeFriend(id, p.name, m),
        canChallenge: !['prep', 'battle', 'deck'].includes(ui.currentScreen() ?? ''),
        remove: async () => { await api.removeFriend(id); void refreshRail(); },
        view: () => showPlayer(p),
        safety: safetyRow(p), // (0.9.9.9.9.2: Block and Report on the card)
        // 0.9.9.9.6: Messages, at this friend
        message: link?.status === 'accepted' ? () => { ui.hideProfileCard(); void openInbox(id); } : undefined,
        // 0.9.9.9.5.5: their lobby is open (and has room): join it
        // 0.9.9.9.9: a friend in a game: watch it
        watch: link?.status === 'accepted' && link.online && /^Playing /.test(link.activity ?? '') && !/Deck Duel/.test(link.activity ?? '') && !inRoom ? () => watchFriend(id) : undefined,
        join: link?.status === 'accepted' && link.party?.code && link.party.code !== (inRoom ? code : '') && !['prep', 'battle', 'deck'].includes(ui.currentScreen() ?? '')
          ? { label: `${link.party.size}/${link.party.max}`, mode: link.party.mode, go: () => joinRoom(link.party!.code!) } : undefined,
      });
  };
  addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-profile], [data-mention]');
    if (el) { e.stopPropagation(); void open(el); return; }
    if (!ui.$('otherPop').contains(e.target as Node)) { ui.hideProfileCard(); shownFor = ''; }
  }, true);
  addEventListener('keydown', (e) => {
    const el = (e.target as HTMLElement).closest?.<HTMLElement>('[data-profile], [data-mention]');
    if (el && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); void open(el); }
    else if (e.key === 'Escape') ui.hideProfileCard();
  });
}

// ── audio ────────────────────────────────────────────────────────────────────
ui.$('radioBtn').onclick = () => { audio.setRadio(!audio.isRadioOn()); ui.setAudioButtons(audio.isRadioOn(), audio.isSfxOn()); };
ui.$('sfxBtn').onclick = () => { audio.setSfx(!audio.isSfxOn()); ui.setAudioButtons(audio.isRadioOn(), audio.isSfxOn()); };
// profile chip → stats popover, profile picture
{
  const pop = ui.$('profilePop');
  ui.$('whoBtn').onclick = (e) => { e.stopPropagation(); pop.hidden = !pop.hidden; ui.$('whoBtn').setAttribute('aria-expanded', String(!pop.hidden)); if (!pop.hidden) void refreshProfile(); };
  addEventListener('click', (e) => { if (!pop.hidden && !pop.contains(e.target as Node) && !ui.$('whoBtn').contains(e.target as Node)) pop.hidden = true; });
  ui.$<HTMLInputElement>('picInput').onchange = async (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    (e.target as HTMLInputElement).value = '';
    if (!file) return;
    try {
      const { profile } = await api.setAvatar(await squarePicture(file));
      ui.setProfile(profile);
      ui.toast('Profile picture updated');
    } catch (err) { ui.toast((err as Error).message || 'Could not use that picture'); }
  };
  ui.$('picRemove').onclick = async () => { try { ui.setProfile((await api.removeAvatar()).profile); } catch (err) { ui.toast((err as Error).message); } };
}

/** Crop to a centred square and shrink to 128×128 (WebP, or JPEG where WebP can't be encoded). */
async function squarePicture(file: File): Promise<string> {
  if (!file.type.startsWith('image/')) throw new Error('Please pick an image');
  const url = URL.createObjectURL(file);
  try {
    const img = new Image();
    await new Promise<void>((ok, fail) => { img.onload = () => ok(); img.onerror = () => fail(new Error('Could not read that image')); img.src = url; });
    const side = Math.min(img.naturalWidth, img.naturalHeight);
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    c.getContext('2d')!.drawImage(img, (img.naturalWidth - side) / 2, (img.naturalHeight - side) / 2, side, side, 0, 0, 128, 128);
    const webp = c.toDataURL('image/webp', 0.85);
    return webp.startsWith('data:image/webp') ? webp : c.toDataURL('image/jpeg', 0.85);
  } finally { URL.revokeObjectURL(url); }
}

// volume sliders (saved in this browser)
{
  const panel = ui.$('volPanel');
  const music = ui.$<HTMLInputElement>('musicVol'), fx = ui.$<HTMLInputElement>('sfxVol'), vo = ui.$<HTMLInputElement>('voiceVol');
  ui.$('voiceGet').onclick = () => {
    if (!voice.installAndroidVoice()) { ui.$('voiceHelp').textContent = voice.voiceHelp(); ui.$('voiceGet').hidden = true; }
  };
  // back in the app after installing it: say so
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && !ui.$('volPanel').closest('[hidden]')) setTimeout(show, 600); });
  const show = () => {
    const vp = voice.getVoicePrefs();
    vo.value = String(Math.round(vp.vol * 100));
    ui.$('voiceVolVal').textContent = `${vo.value}%`;
    // 0.9.9.9.5.5: the app said "no Japanese voice" even when Android's speaks Japanese; and with none, it can be downloaded
    const av = voice.androidVoice();
    const noVoice = av ? av === 'missing' : !vp.name;
    ui.$('voiceInfo').textContent = av === 'ready' ? 'Voice: Android text-to-speech (Japanese)' : !voice.voiceAvailable() ? 'This browser has no speech voice.' : vp.name ? `Voice: ${vp.name}${vp.male ? '' : ' (pitched down)'}` : 'No Japanese voice found on this device.';
    ui.$('voiceFix').hidden = !noVoice || !voice.voiceAvailable();
    ui.$('voiceGet').hidden = !av;
    ui.$('voiceHelp').textContent = av ? 'Downloads the Japanese voice for Android\'s text-to-speech (like the offline dictionary). Come back to the app when it\'s done.' : voice.voiceHelp();
    const v = audio.getVolumes();
    music.value = String(Math.round(v.music * 100)); fx.value = String(Math.round(v.sfx * 100));
    ui.$('musicVolVal').textContent = `${music.value}%`; ui.$('sfxVolVal').textContent = `${fx.value}%`;
    for (const r of [music, fx, vo]) r.style.setProperty('--p', `${r.value}%`); // (the filled part of the track)
    ui.setAudioButtons(audio.isRadioOn(), audio.isSfxOn());
  };
  // 0.9.9.9: Settings is a window with tabs. In a game against the AI only it pauses the game while open; with other
  // players the game goes on behind it (it can't be paused).
  let pausedBySettings = false;
  const inGame = () => GAME_SCREENS.has(ui.currentScreen() ?? '');
  const open = (on: boolean) => {
    if (panel.hidden === !on) return;
    panel.hidden = !on;
    document.body.classList.toggle('settings-open', on); // (0.9.9.9.6.2: phones stop drawing what's behind it)
    ui.$('volBtn').setAttribute('aria-expanded', String(on));
    if (on) {
      show();
      if (inGame() && soloVsAi && !document.body.classList.contains('paused')) { pausedBySettings = true; socket.send({ type: 'pause', on: true }); }
      ui.$('setPaused').hidden = !(inGame() && soloVsAi);
      (panel.querySelector<HTMLElement>('.set-tab[aria-selected="true"]'))?.focus({ preventScroll: true });
    } else if (pausedBySettings) {
      pausedBySettings = false;
      socket.send({ type: 'pause', on: false });
    }
  };
  ui.$('volBtn').onclick = (e) => { e.stopPropagation(); open(panel.hidden !== false); };
  ui.$('setClose').onclick = () => open(false);
  // the menu's Settings tile
  ui.$('menuSettingsBtn').onclick = (e) => { e.stopPropagation(); open(true); };
  for (const tab of panel.querySelectorAll<HTMLElement>('.set-tab')) {
    tab.onclick = () => {
      for (const t of panel.querySelectorAll<HTMLElement>('.set-tab')) t.setAttribute('aria-selected', String(t === tab));
      for (const sec of panel.querySelectorAll<HTMLElement>('.set-sec')) sec.hidden = sec.dataset.sec !== tab.dataset.tab;
    };
  }
  addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) { e.stopPropagation(); open(false); } }, true);
  music.oninput = () => { audio.setMusicVolume(Number(music.value) / 100); show(); };
  fx.oninput = () => { audio.setSfxVolume(Number(fx.value) / 100); show(); };
  fx.onchange = () => audio.previewSfx();
  vo.oninput = () => { voice.setVoiceVolume(Number(vo.value) / 100); show(); };
  vo.onchange = () => voice.say('かんじ');
  // a tap on the dimmed backdrop closes it
  panel.addEventListener('click', (e) => { if (e.target === panel) open(false); });
}
// Browsers only allow sound after a user gesture.
const firstGesture = () => audio.unlock();
addEventListener('pointerdown', firstGesture, { once: true });
addEventListener('keydown', firstGesture, { once: true });

initI18n();
void boot();
setTimeout(() => ui.hideBootScreen(), 20_000); // (never stuck behind the loading screen)
