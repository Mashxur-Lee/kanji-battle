import { applyUiZoom, setUiZoomPref, UI_ZOOMS, uiZoomPref } from './zoom';
import * as voice from './voice';
import { initQueue, onQueue, openQueue, resetQueue } from './queue';
import { brushCursor } from './cursor';
import { VERSION } from '../shared/version';
import { STUDY_LOCK } from '../shared/progress';
import { arena, arenaQuality, arenaScreen, arenaSupported, preloadArena, setArenaBackground, setArenaQuality, type ArenaQuality } from './arena';
import { LEVELS, MODE_LABEL, type DrawnChar, type GameMode, type Level, type PlayerId, type PlayerView, type PublicUser, type ServerMessage } from '../shared/protocol';
import { api, ApiError, getToken, setToken, type Profile } from './api';
import * as audio from './audio';
import { getTimePref, paintBackground, resolveTime, untilNextStep } from './backgrounds';
import { chatMessages, clearChat, deckEvent, deckInk, initDeck, renderDeck, resetDeck } from './deckui';
import { GameSocket } from './net';
import { HandwritingPad } from './pad';
import { onProfileChange, openCustomize, openStudy } from './study';
import * as ui from './ui';
import { openProgress } from './progressui';
import { dailyPending, openDaily } from './dailyui';
import { initFriends, onFriendEvent, onInvite, openFriends, refreshFriendsBadge, renderLobbyInvites } from './friendsui';
import { canPlay, initTutorial, inTutorialBattle, lockText, setModeAccess, startTutorial, tutorialScreen } from './tutorial';
import { askNotifyPermission } from './notify';
import { FLAMES as ALL_FLAMES, STAFFS as ALL_STAFFS } from '../shared/progress';

applyUiZoom(); // before anything is laid out

// ── state ────────────────────────────────────────────────────────────────────
let user: PublicUser | null = null;
let profile: Profile | null = null;
let you: PlayerId = '';
let code = '';
let mode: GameMode = 'reading';
let players: PlayerView[] = [];
let minPlayers = 2;
let challengeId = 0;
let inRoom = false;
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
    return lv.length ? lv : ['N3', 'N2'];
  } catch { return ['N3', 'N2']; }
};

const socket = new GameSocket(onMessage, (s) => {
  ui.setNetStatus(s === 'reconnecting' ? 'Reconnecting…' : null);
});

/** Who is this player on screen? You are always on the left; in boss mode the other player is your ally. */
const actorOf = (id: PlayerId | 'boss'): ui.Actor => (id === 'boss' ? 'boss' : id === you ? 'me' : mode === 'boss' ? `ally:${id}` : 'opp');
const nameOf = (id: PlayerId) => players.find((p) => p.id === id)?.name ?? 'Someone';

// Music only in menus (not during study phase, battles or the deck duel).
// battle theme while playing (study phase, battle, Deck Duel); the calm theme returns on the results screen and in menus
const GAME_SCREENS = new Set(['prep', 'battle', 'deck']);
ui.onScreen((s) => {
  audio.setScene(GAME_SCREENS.has(s) ? 'game' : 'menu');
  arenaScreen(s); // the 3D arena on battle screens
  // the mode's name at the very top while playing
  const title = ui.$('modeTitle');
  title.hidden = !['prep', 'battle', 'deck'].includes(s);
  if (!title.hidden) title.replaceChildren(ui.modeBadge(s === 'deck' ? 'deck' : mode), document.createTextNode(MODE_LABEL[s === 'deck' ? 'deck' : mode]));
  if (s === 'menu' && profile) void refreshProfile(); // e.g. the study lock lifts after studying
  if (s !== 'lobby') void renderLobbyInvites(false);
  tutorialScreen(s);
  if (!GAME_SCREENS.has(s)) setTimeout(() => applyBackground(true), 0); // catch up on the cycle after a game
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
  paintBackground(ui.$('bg'), bg, time, fade && shownTime !== '' && shownTime !== time);
  setArenaBackground(bg, time);
  shownTime = time;
  audio.setAmbience(bg, time);
}
function scheduleCycle() {
  setTimeout(() => { applyBackground(true); scheduleCycle(); }, untilNextStep() + 50);
}
scheduleCycle();

let tutorialShown = false;
function applyProfile(p: Profile) {
  // a monthly reward just unlocked → say so
  const before = profile?.unlocks ?? null;
  if (before) for (const r of p.unlocks ?? []) if (!before.includes(r)) {
    const [kind, id] = r.split(':');
    const name = kind === 'flame' ? `${ALL_FLAMES.find((f) => f.id === id)?.name} flames` : ALL_STAFFS.find((x) => x.id === id)?.name;
    ui.toast(`Monthly goals complete! ${name} unlocked — equip it in Customize.`, 7000);
  }
  profile = p;
  ui.setProfile(p);
  setModeAccess(p.level, user?.role === 'admin');
  if (!p.tutorialDone && !tutorialShown && user && !inRoom) { tutorialShown = true; startTutorial(); }
  void dailyPending().then((open) => { ui.$('dailyBadge').hidden = !open; });
  refreshFriendsBadge();
  // too many struggling spells waiting → the game modes are locked until you study (the server checks too)
  const locked = user?.role !== 'admin' && (p.strugglingDue ?? 0) > STUDY_LOCK;
  ui.$('menu').classList.toggle('locked', locked);
  ui.$('studyLock').hidden = !locked;
  ui.$('studyLockText').textContent = locked ? `${p.strugglingDue} struggling spells are waiting. Study them down to ${STUDY_LOCK} to unlock the game modes.` : '';
  applyBackground();
  preloadArena();
}
onProfileChange(applyProfile);

async function refreshProfile() {
  try { applyProfile((await api.me()).profile); } catch { /* offline: keep what we have */ }
}

// ── session lifecycle ────────────────────────────────────────────────────────
async function boot() {
  applyBackground();
  ui.paintScenes();
  ui.setAudioButtons(audio.isRadioOn(), audio.isSfxOn());
  if (!getToken()) return showAuth();
  try {
    const { user: u, profile: p } = await api.me();
    applyProfile(p);
    signedIn(u);
  } catch (e) {
    if (e instanceof ApiError && (e.status === 401 || e.status === 403)) { setToken(''); showAuth(e.status === 403 ? e.message : ''); }
    else { ui.show('auth'); ui.$('authError').textContent = 'Server unreachable — try again in a moment.'; }
  }
}

function signedIn(u: PublicUser) {
  user = u;
  ui.setUser(u);
  socket.start(getToken());
  if (!inRoom) ui.show('menu');
  if (!profile) void refreshProfile();
  else applyProfile(profile); // now that we know who you are (admin? tutorial?)
}

function showAuth(message = '') {
  user = null;
  profile = null;
  inRoom = false;
  ui.setUser(null);
  ui.setAuthTab(authTab);
  ui.show('auth');
  ui.$('authError').textContent = message;
}

function logout(message = '') {
  setToken('');
  socket.stop();
  showAuth(message);
}

function backToMenu() {
  inRoom = false;
  you = '';
  code = '';
  players = [];
  stopWriting();
  resetDeck();
  clearChat();
  ui.stopCountdown();
  ui.show('menu');
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
    case 'welcome':
      user = msg.user;
      ui.setUser(msg.user);
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
      resetQueue();
      you = msg.you;
      code = msg.code;
      mode = msg.mode;
      inRoom = true;
      ui.setError('');
      break;
    case 'left':
      backToMenu();
      break;
    case 'notice':
      ui.toast(msg.message);
      break;
    case 'friend':
      onFriendEvent(msg);
      break;
    case 'invite':
      onInvite(msg);
      break;
    case 'lobby':
      players = msg.players;
      mode = msg.mode;
      minPlayers = msg.minPlayers;
      stopWriting();
      resetDeck();
      ui.showLobby(code, msg.mode, msg.players, you, msg.hostId, msg.maxPlayers, msg.minPlayers);
      void renderLobbyInvites(true);
      // the tutorial's first battle: add a beginner AI, then start
      if (inTutorialBattle() && msg.hostId === you) {
        if (msg.players.length < 2) socket.send({ type: 'add_bot', level: 'N5' });
        else socket.send({ type: 'start' });
      }
      break;
    case 'prep':
      players = msg.players;
      ui.showPrep(msg.pool, msg.durationMs, mode);
      ui.setReady(msg.readyIds.length, players.length, msg.readyIds.includes(you));
      break;
    case 'prep_ready':
      ui.setReady(msg.readyIds.length, players.length, msg.readyIds.includes(you));
      break;
    case 'battle_start':
      players = msg.players;
      mode = msg.mode;
      ui.showBattle(msg.mode, players, msg.boss, you, msg.countdownMs, msg.durationMs, (n) => (n > 0 ? audio.sfx.tick() : audio.sfx.go()));
      break;
    case 'challenge':
      challengeId = msg.id;
      arena()?.channel(0);
      ui.showChallenge({ kanji: msg.kanji, answer: msg.answer, timeLimitMs: msg.timeLimitMs, meaning: msg.meaning, reading: msg.reading, charCount: msg.charCount, flashMs: msg.flashMs });
      if (msg.answer === 'writing') { flashMs = msg.flashMs ?? 3500; beginWriting(msg.id, msg.kanji); }
      break;
    case 'answer_result':
      if (msg.challengeId !== challengeId) break;
      if (msg.retry) { // rapid: wrong, keep going
        ui.setFeedback(msg);
        audio.sfx.wrong();
        arena()?.fizzle('me'); // the gem shatters; typing again builds a new one
        const input = ui.$<HTMLInputElement>('answer');
        input.disabled = false; input.value = ''; input.focus();
        break;
      }
      ui.lockInput();
      if (mode === 'writing') ui.setCharSlots(charCount, written.map(() => ''), false);
      ui.setFeedback(msg);
      if (msg.correct) {
        // say the word first (romaji answers at the kana level: say the kana itself), then the success chime
        const kana = /[a-z]/i.test(msg.reading) ? msg.kanji : msg.reading;
        void voice.speak(kana).then(() => audio.sfx.correct(msg.combo));
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
      players = msg.players;
      ui.lockInput();
      stopWriting();
      if (msg.mode !== 'deck') {
        setTimeout(() => {
          ui.renderFighters(players, you, msg.boss);
          if (msg.mode === 'boss' && msg.teamWon) ui.knockOut('boss');
          if (msg.reason !== 'forfeit') for (const p of players) if (p.hp <= 0) ui.knockOut(actorOf(p.id));
        }, 450);
      }
      setTimeout(() => {
        const won = msg.mode === 'boss' ? msg.teamWon : msg.winnerId === you;
        if (won) audio.sfx.win();
        else if (msg.mode === 'boss' || msg.winnerId) audio.sfx.lose();
        resetDeck();
        ui.showResults(msg.mode, msg.players, you, msg.winnerId, msg.teamWon, msg.reason, msg.stats);
      }, msg.reason === 'forfeit' ? 400 : 2000);
      break;
    }
    case 'progress':
      setTimeout(() => {
        ui.showXp(msg.gained, msg.level, msg.levelUp);
        if (msg.levelUp) ui.toast(`Level ${msg.level}! Check Customize for new unlocks.`, 5000);
      }, 2100);
      void refreshProfile();
      break;
    case 'rematch_status':
      ui.setRematchStatus(msg.votes, you, players.length, minPlayers);
      break;
    case 'error':
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
      const victims = players.filter((p) => !immune.includes(p.id) && (p.hp > 0 || p.hp + e.damage > 0)).map((p) => actorOf(p.id));
      ui.breathFire(e.damage, victims, immune.map((id) => actorOf(id)));
      if (immune.includes(you)) ui.toast('You are on fire — immune to dragon breath!');
      audio.sfx.fire();
      setTimeout(render, 450);
      ui.logLine(immune.length ? `Fire breath! ${e.damage} damage — ${immune.map(nameOf).join(', ')} immune (on fire)` : `Fire breath! Everyone takes ${e.damage}`);
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
  if (Date.now() - twitchAt > 140) { twitchAt = Date.now(); arena()?.twitch(); } // the staff moves as you write
};
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
  charCount = [...kanji].length;
  written = [];
  pad.setCells(charCount); // write the whole word at once
  setEraser(false);
  arena()?.channel(0.35); // the staff starts to glow; brighter with every stroke
  if (mode === 'deck') ui.mountWriteArea('dkWrite');
  ui.setCharSlots(charCount, [], true);
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
ui.$<HTMLInputElement>('answer').addEventListener('input', (e) => { arena()?.channel(Math.min(0.8, (e.target as HTMLInputElement).value.length * 0.15)); arena()?.twitch(); ui.gemBack(); });
ui.$<HTMLInputElement>('imeInput').addEventListener('input', () => { arena()?.channel(0.6); arena()?.twitch(); ui.gemBack(); });
ui.$('padSkip').onclick = () => skip();
ui.$('padNext').onclick = () => {
  if (pad.strokeCount === 0) return;
  written = [pad.take()]; // the whole word; the server splits it into characters
  submitDrawing();
};
// typed kanji with a Japanese IME (the first Enter confirms the conversion, the next one sends)
for (const id of ['imeInput', 'answer']) {
  for (const ev of ['paste', 'drop'] as const) ui.$(id).addEventListener(ev, (e) => { e.preventDefault(); ui.toast('Pasting is off — write it yourself!'); });
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
    const res = authTab === 'login' ? await api.login(username, password) : await api.register(username, password);
    setToken(res.token);
    ui.$<HTMLInputElement>('authPass').value = '';
    signedIn(res.user);
    void refreshProfile();
  } catch (err) {
    ui.$('authError').textContent = err instanceof Error ? err.message : 'Something went wrong';
  } finally {
    btn.disabled = false;
  }
});
ui.$('logout').onclick = () => logout();

// ── menu ─────────────────────────────────────────────────────────────────────
ui.$('studyLockBtn').onclick = () => void openStudy();
ui.$('create').onclick = () => { ui.setError(''); ui.show('modes'); };
ui.$('privateBtn').onclick = () => {
  const box = ui.$('privateBox');
  box.hidden = !box.hidden;
  ui.$('privateBtn').setAttribute('aria-expanded', String(!box.hidden));
  if (!box.hidden && matchMedia('(pointer: fine)').matches) ui.$('joinCode').focus({ preventScroll: true }); // no surprise keyboard on phones
};
ui.$('queueBtn').onclick = () => { ui.setError(''); openQueue(); };
initQueue((m) => socket.send(m), () => user?.id ?? '');
for (const card of document.querySelectorAll<HTMLButtonElement>('.mode-card')) {
  card.onclick = () => {
    const m = card.dataset.mode as GameMode;
    if (!canPlay(m)) return ui.toast(lockText(m), 5000);
    if (m === 'deck') askNotifyPermission(); // "your turn" while you look at another tab
    socket.send({ type: 'create', mode: m, levels: savedLevels() });
  };
}
// new menu pages
ui.$('dailyBtn').onclick = () => { if (user) void openDaily(user.id); };
ui.$('progressBtn').onclick = () => void openProgress();
ui.$('friendsBtn').onclick = () => void openFriends();
initFriends({
  send: (m) => socket.send(m),
  join: (c) => { askNotifyPermission(); socket.send({ type: 'join', code: c, levels: savedLevels() }); },
  inRoom: () => inRoom,
});
initTutorial({ firstBattle: () => socket.send({ type: 'create', mode: 'reading', levels: ['N5'] }) });
ui.$('modesBack').onclick = () => ui.show('menu');
const join = () => {
  const c = ui.$<HTMLInputElement>('joinCode').value.trim();
  if (c.length !== 4) return ui.setError('Room codes have 4 letters');
  socket.send({ type: 'join', code: c, levels: savedLevels() });
};
ui.$('join').onclick = join;
ui.$<HTMLInputElement>('joinCode').addEventListener('keydown', (e) => { if (e.key === 'Enter') join(); });
ui.$('howBtn').onclick = () => ui.$<HTMLDialogElement>('howDialog').showModal();
ui.$('studyBtn').onclick = () => void openStudy();
ui.$('studyBack').onclick = () => ui.show('menu');
ui.$('customizeBtn').onclick = async () => { await refreshProfile(); if (profile) openCustomize(profile, user?.role === 'admin', () => applyBackground(true)); };
ui.$('customizeBack').onclick = () => ui.show('menu');

// ── admin ────────────────────────────────────────────────────────────────────
async function openAdmin() {
  try {
    const { users, storage, persistent } = await api.users();
    ui.showAdmin(users, user!, { storage, persistent }, async (u) => {
      try { await api.setBanned(u.id, !u.banned); await openAdmin(); } catch (e) { ui.$('adminInfo').textContent = (e as Error).message; }
    });
  } catch (e) {
    ui.setError((e as Error).message);
  }
}
ui.$('adminBtn').onclick = () => void openAdmin();
ui.$('adminRefresh').onclick = () => void openAdmin();
// the Users page keeps itself up to date (who is online) while it's open
setInterval(() => { if (ui.currentScreen() === 'admin' && user?.role === 'admin') void openAdmin(); }, 15_000);
ui.$('adminBack').onclick = () => ui.show('menu');

// ── lobby ────────────────────────────────────────────────────────────────────
ui.$('levelChips').addEventListener('change', (e) => {
  const levels = ui.selectedLevels();
  if (levels.length === 0) { (e.target as HTMLInputElement).checked = true; return; } // keep at least one
  store.set('kb:levels', JSON.stringify(levels));
  socket.send({ type: 'levels', levels });
});
ui.$('leaveLobby').onclick = () => socket.send({ type: 'leave' });
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
ui.$('skip').onclick = () => { if (!ui.$<HTMLInputElement>('answer').disabled) skip(); };

ui.$<HTMLInputElement>('answer').addEventListener('keydown', (e) => {
  const input = e.currentTarget as HTMLInputElement;
  if (input.disabled) return;
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
function armForfeit(btnId: string) {
  let armed = 0;
  ui.$(btnId).onclick = () => {
    if (Date.now() - armed < 3000) { socket.send({ type: 'forfeit' }); return; }
    armed = Date.now();
    ui.$(btnId).textContent = 'Tap again to forfeit';
    setTimeout(() => (ui.$(btnId).textContent = 'Forfeit'), 3000);
  };
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
    t.disabled = !arenaSupported();
    ui.$('arena3dInfo').textContent = arenaSupported() ? 'First-person duel arena (move the mouse to look around). Lite is lighter on phones and older computers.' : 'Needs WebGL and a landscape screen — the classic 2D view is used (turn your phone sideways for 3D).';
  };
  sync();
  t.onchange = () => setArenaQuality(t.value as ArenaQuality);
  ui.$('volBtn').addEventListener('click', sync);
}
// UI size (default 80% on computers)
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
  } catch (err) { ui.toast((err as Error).message); }
}
ui.$('historyBtn').onclick = () => void openHistory();
ui.$('historyBack').onclick = () => ui.show('menu');
ui.$('resultHistoryBack').onclick = () => void openHistory();

// ── other players' profiles: click (or Enter on) any name marked with data-profile ──
{
  let shownFor = '';
  const open = async (el: HTMLElement) => {
    const id = el.dataset.profile!;
    if (shownFor === id && !ui.$('otherPop').hidden) { ui.hideProfileCard(); shownFor = ''; return; }
    shownFor = id;
    const name = el.dataset.name ?? el.textContent ?? '';
    const bot = el.dataset.bot ?? /\(AI (N\d)\)$/.exec(name)?.[1];
    if (bot) return ui.showProfileCard(el, { bot, name });
    ui.showProfileCard(el, 'loading');
    try {
      const { profile } = await api.player(id);
      if (shownFor === id) ui.showProfileCard(el, profile);
    } catch { if (shownFor === id) ui.showProfileCard(el, 'missing'); }
  };
  addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>('[data-profile]');
    if (el) { e.stopPropagation(); void open(el); return; }
    if (!ui.$('otherPop').contains(e.target as Node)) { ui.hideProfileCard(); shownFor = ''; }
  }, true);
  addEventListener('keydown', (e) => {
    const el = (e.target as HTMLElement).closest?.<HTMLElement>('[data-profile]');
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
  const show = () => {
    const vp = voice.getVoicePrefs();
    vo.value = String(Math.round(vp.vol * 100));
    ui.$('voiceVolVal').textContent = `${vo.value}%`;
    ui.$('voiceInfo').textContent = !voice.voiceAvailable() ? 'This browser has no speech voice.' : vp.name ? `Voice: ${vp.name}${vp.male ? '' : ' (pitched down)'}` : 'No Japanese voice found on this device.';
    const v = audio.getVolumes();
    music.value = String(Math.round(v.music * 100)); fx.value = String(Math.round(v.sfx * 100));
    ui.$('musicVolVal').textContent = `${music.value}%`; ui.$('sfxVolVal').textContent = `${fx.value}%`;
    ui.setAudioButtons(audio.isRadioOn(), audio.isSfxOn());
  };
  ui.$('volBtn').onclick = (e) => { e.stopPropagation(); panel.hidden = !panel.hidden; ui.$('volBtn').setAttribute('aria-expanded', String(!panel.hidden)); show(); };
  music.oninput = () => { audio.setMusicVolume(Number(music.value) / 100); show(); };
  fx.oninput = () => { audio.setSfxVolume(Number(fx.value) / 100); show(); };
  fx.onchange = () => audio.previewSfx();
  vo.oninput = () => { voice.setVoiceVolume(Number(vo.value) / 100); show(); };
  vo.onchange = () => voice.say('かんじ');
  addEventListener('click', (e) => { if (!panel.hidden && !panel.contains(e.target as Node)) panel.hidden = true; });
}
// Browsers only allow sound after a user gesture.
const firstGesture = () => audio.unlock();
addEventListener('pointerdown', firstGesture, { once: true });
addEventListener('keydown', firstGesture, { once: true });

void boot();
