import { LEVELS, LEVEL_LABEL, MODE_LABEL, type GameMode, type Level, type ServerMessage } from '../shared/protocol';
import * as ui from './ui';
import * as audio from './audio';

// The online queue screen: pick modes + levels (or Deck Duel on its own) and search for a player.

const QUEUE_MODES: GameMode[] = ['reading', 'writing', 'rapid', 'boss'];
const KEY = 'kb:queue';
type Saved = { modes: GameMode[]; levels: Level[]; pick?: 'battle' | 'deck' };
const load = (): Saved => { try { return { modes: ['reading', 'rapid'], levels: ['N5'], ...JSON.parse(localStorage.getItem(KEY) ?? '{}') }; } catch { return { modes: ['reading', 'rapid'], levels: ['N5'] }; } };
const save = (s: Saved) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode */ } };

let send: (m: { type: 'queue'; modes: string[]; levels?: string[] } | { type: 'queue_cancel' } | { type: 'queue_accept'; matchId: number }) => void = () => {};
let me: () => string = () => '';
let tick = 0;
let searching = false;

function chip(value: string, label: string, on: boolean, group: string) {
  const l = document.createElement('label');
  l.className = 'chip' + (on ? ' on' : '');
  const box = document.createElement('input');
  box.type = 'checkbox'; box.value = value; box.checked = on; box.name = group;
  box.onchange = () => { l.classList.toggle('on', box.checked); remember(); };
  l.append(box, label);
  return l;
}
const picked = (id: string) => [...document.querySelectorAll<HTMLInputElement>(`#${id} input`)].filter((i) => i.checked).map((i) => i.value);
let pick: 'battle' | 'deck' = 'battle';
function remember() { save({ modes: picked('qModes') as GameMode[], levels: picked('qLevels') as Level[], pick }); }
/** Exactly one box is chosen: battle modes or Deck Duel. */
function choose(p: 'battle' | 'deck') {
  pick = p;
  document.querySelectorAll<HTMLElement>('#queuePick .queue-card').forEach((c) => {
    const on = c.dataset.q === p;
    c.classList.toggle('chosen', on);
    c.setAttribute('aria-checked', String(on));
  });
  ui.$('qStart').textContent = p === 'deck' ? '⚔ Start queue — Deck Duel' : '⚔ Start queue';
  remember();
}

export function initQueue(sender: typeof send, myId: () => string) {
  send = sender;
  me = myId;
  ui.$('mfAccept').onclick = () => { if (foundId) send({ type: 'queue_accept', matchId: foundId }); };
  ui.$('queueBack').onclick = () => { if (searching) send({ type: 'queue_cancel' }); stopSearching(); ui.show('menu'); };
  document.querySelectorAll<HTMLElement>('#queuePick .queue-card').forEach((c) => {
    c.addEventListener('click', () => choose(c.dataset.q as 'battle' | 'deck'));
    c.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); choose(c.dataset.q as 'battle' | 'deck'); } });
  });
  ui.$('qStart').onclick = () => {
    if (pick === 'deck') return send({ type: 'queue', modes: ['deck'] });
    const modes = picked('qModes'), levels = picked('qLevels');
    if (!modes.length) return ui.toast('Tick at least one mode');
    if (!levels.length) return ui.toast('Tick at least one level');
    send({ type: 'queue', modes, levels });
  };
  ui.$('qCancel').onclick = () => send({ type: 'queue_cancel' });
}

export function openQueue() {
  const s = load();
  ui.$('qModes').replaceChildren(...QUEUE_MODES.map((m) => chip(m, MODE_LABEL[m], s.modes.includes(m), 'qm')));
  ui.$('qLevels').replaceChildren(...LEVELS.map((l) => chip(l, LEVEL_LABEL[l], s.levels.includes(l), 'ql')));
  choose(s.pick ?? 'battle');
  if (!searching) { ui.$('queuePick').hidden = false; ui.$('qSearching').hidden = true; }
  ui.show('queue');
}

function stopSearching() {
  searching = false;
  clearInterval(tick);
  ui.$('queuePick').hidden = false;
  ui.$('qSearching').hidden = true;
}

// ── Match found: a box in the middle of the screen, 5 s to accept ──────────────
let foundId = 0;
let foundTimer = 0;
function showFound(msg: Extract<ServerMessage, { type: 'queue' }>) {
  const box = ui.$('matchFound');
  if (foundId !== msg.matchId) {
    // a fresh match: start the 5 s ring
    foundId = msg.matchId!;
    ui.$('mfBadge').replaceChildren(ui.modeBadge(msg.mode!));
    ui.$('mfMode').textContent = MODE_LABEL[msg.mode!];
    const until = Date.now() + (msg.acceptMs ?? 5000), total = msg.acceptMs ?? 5000;
    const arc = ui.$('mfArc');
    clearInterval(foundTimer);
    const paint = () => {
      const left = Math.max(0, until - Date.now());
      ui.$('mfSecs').textContent = String(Math.ceil(left / 1000));
      arc.style.strokeDashoffset = String(276.5 * (1 - left / total));
      if (left <= 0) clearInterval(foundTimer);
    };
    paint();
    foundTimer = window.setInterval(paint, 100);
    box.hidden = false;
    audio.sfx.go();
    ui.$<HTMLButtonElement>('mfAccept').focus();
  }
  const accepted = msg.accepted ?? [];
  const mine = accepted.includes(me());
  const btn = ui.$<HTMLButtonElement>('mfAccept');
  btn.disabled = mine;
  btn.textContent = mine ? '✓ Accepted' : 'Accept';
  ui.$('mfStatus').textContent = mine ? 'Waiting for your opponent…' : accepted.length ? 'Your opponent accepted!' : '';
}
function hideFound() {
  foundId = 0;
  clearInterval(foundTimer);
  ui.$('matchFound').hidden = true;
}

/** Server updates about the queue. */
export function onQueue(msg: Extract<ServerMessage, { type: 'queue' }>) {
  if (msg.state === 'found') return showFound(msg);
  if (foundId) {
    hideFound();
    if (msg.state === 'searching' && msg.requeued) ui.toast('Your opponent didn\'t accept — you\'re back in the queue.', 4000);
    if (msg.state === 'idle' && msg.reason === 'missed') ui.toast('You didn\'t accept in time — the queue stopped.', 4000);
  }
  if (msg.state === 'idle') return stopSearching();
  ui.$('queuePick').hidden = true;
  ui.$('qSearching').hidden = false;
  if (ui.currentScreen() !== 'queue') ui.show('queue');
  if (msg.state === 'matched') {
    searching = false;
    clearInterval(tick);
    ui.$('qTitle').textContent = `Player found — ${MODE_LABEL[msg.mode!]}!`;
    ui.$('qInfo').textContent = 'Starting…';
    ui.$('qCancel').hidden = true;
    return;
  }
  // searching: count up from when the search started (server clock → local clock)
  ui.$('qCancel').hidden = false;
  ui.$('qTitle').textContent = 'Searching for a player…';
  const started = Date.now() - ((msg.now ?? 0) - (msg.since ?? 0));
  const others = (msg.searching ?? 1) - 1;
  ui.$('qInfo').textContent = `${(msg.modes ?? []).map((m) => MODE_LABEL[m]).join(' · ')} — ${others > 0 ? `${others} other player${others === 1 ? '' : 's'} searching` : 'no one else searching yet'}`;
  if (!searching) {
    searching = true;
    clearInterval(tick);
    const paint = () => { const s = Math.floor((Date.now() - started) / 1000); ui.$('qTimer').textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
    paint();
    tick = window.setInterval(paint, 500);
  }
}

/** A match was made and we're in a room now (or we left): reset the screen. */
export function resetQueue() { stopSearching(); ui.$('qCancel').hidden = false; }
