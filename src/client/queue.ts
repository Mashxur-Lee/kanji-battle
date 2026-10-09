import { LEVELS, LEVEL_LABEL, MODE_LABEL, type GameMode, type Level, type ServerMessage } from '../shared/protocol';
import * as ui from './ui';

// The online queue screen: pick modes + levels (or Deck Duel on its own) and search for a player.

const QUEUE_MODES: GameMode[] = ['reading', 'writing', 'rapid', 'boss'];
const KEY = 'kb:queue';
type Saved = { modes: GameMode[]; levels: Level[] };
const load = (): Saved => { try { return { modes: ['reading', 'rapid'], levels: ['N5'], ...JSON.parse(localStorage.getItem(KEY) ?? '{}') }; } catch { return { modes: ['reading', 'rapid'], levels: ['N5'] }; } };
const save = (s: Saved) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode */ } };

let send: (m: { type: 'queue'; modes: string[]; levels?: string[] } | { type: 'queue_cancel' }) => void = () => {};
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
function remember() { save({ modes: picked('qModes') as GameMode[], levels: picked('qLevels') as Level[] }); }

export function initQueue(sender: typeof send) {
  send = sender;
  ui.$('queueBack').onclick = () => { if (searching) send({ type: 'queue_cancel' }); stopSearching(); ui.show('menu'); };
  ui.$('qFind').onclick = () => {
    const modes = picked('qModes'), levels = picked('qLevels');
    if (!modes.length) return ui.toast('Tick at least one mode');
    if (!levels.length) return ui.toast('Tick at least one level');
    send({ type: 'queue', modes, levels });
  };
  ui.$('qDeck').onclick = () => send({ type: 'queue', modes: ['deck'] });
  ui.$('qCancel').onclick = () => send({ type: 'queue_cancel' });
}

export function openQueue() {
  const s = load();
  ui.$('qModes').replaceChildren(...QUEUE_MODES.map((m) => chip(m, MODE_LABEL[m], s.modes.includes(m), 'qm')));
  ui.$('qLevels').replaceChildren(...LEVELS.map((l) => chip(l, LEVEL_LABEL[l], s.levels.includes(l), 'ql')));
  if (!searching) { ui.$('queuePick').hidden = false; ui.$('qSearching').hidden = true; }
  ui.show('queue');
}

function stopSearching() {
  searching = false;
  clearInterval(tick);
  ui.$('queuePick').hidden = false;
  ui.$('qSearching').hidden = true;
}

/** Server updates about the queue. */
export function onQueue(msg: Extract<ServerMessage, { type: 'queue' }>) {
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
