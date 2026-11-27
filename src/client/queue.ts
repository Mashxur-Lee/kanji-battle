import { isKanaLevel, LEVELS, LEVEL_LABEL, MODE_LABEL, type GameMode, type Level, type ServerMessage } from '../shared/protocol';
import { viewH, viewW, zrect } from './zoom';
import { askNotifyPermission, attention } from './notify';
import { canPlay, lockText } from './tutorial';
import * as ui from './ui';
import * as audio from './audio';
import { renderDeckGuide } from './deckui';
import { tr } from './i18n';

// The online queue screen: pick modes + levels (or Deck Duel on its own) and search for a player.

// (0.9.9.9.9.6 round 5: Kanji chess and Grammar Clash too — ranked, and with no word levels)
const QUEUE_MODES: GameMode[] = ['reading', 'writing', 'rapid', 'boss', 'chess', 'clash'];
const NO_LEVELS = new Set<GameMode>(['chess', 'clash']);
const KEY = 'kb:queue';
type Saved = { modes: GameMode[]; levels: Level[]; pick?: 'battle' | 'deck' };
const load = (): Saved => { try { return { modes: ['reading', 'rapid'], levels: ['N5'], ...JSON.parse(localStorage.getItem(KEY) ?? '{}') }; } catch { return { modes: ['reading', 'rapid'], levels: ['N5'] }; } };
const save = (s: Saved) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* private mode */ } };

let send: (m: { type: 'queue'; modes: string[]; levels?: string[] } | { type: 'queue_cancel' } | { type: 'queue_accept'; matchId: number }) => void = () => {};
let me: () => string = () => '';
let tick = 0;
let searching = false;

/** Hovering (or focusing) a battle mode shows its mini instructions, like in a room's lobby. */
function guideHover(el: HTMLElement, mode: Exclude<GameMode, 'deck'>) {
  const pop = ui.$('guidePop');
  const open = () => {
    pop.replaceChildren(...ui.modeGuideNodes(mode));
    pop.hidden = false;
    const r = zrect(el);
    const w = Math.min(380, viewW() - 24);
    pop.style.width = `${w}px`;
    pop.style.left = `${Math.max(12, Math.min(viewW() - w - 12, r.left))}px`;
    const below = r.bottom + 10;
    pop.style.top = `${below + pop.offsetHeight > viewH() - 8 ? Math.max(8, r.top - 10 - pop.offsetHeight) : below}px`;
  };
  const close = () => { pop.hidden = true; document.removeEventListener('pointerdown', outside, true); };
  const outside = (e: Event) => { if (!pop.contains(e.target as Node) && e.target !== info) close(); };
  // 0.9.9.9.9.6: only the blue (!) opens it — picking a mode (a tap on a phone) opened it too, over the other modes
  const info = el.querySelector<HTMLElement>('.q-info')!;
  info.setAttribute('role', 'button'); info.tabIndex = 0; info.removeAttribute('aria-hidden'); info.setAttribute('aria-label', tr('How it works'));
  const toggle = (e: Event) => {
    e.preventDefault(); e.stopPropagation();
    if (!pop.hidden && pop.dataset.mode === mode) { close(); return; }
    pop.dataset.mode = mode; open();
    setTimeout(() => document.addEventListener('pointerdown', outside, true), 0);
  };
  info.addEventListener('click', toggle);
  info.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') toggle(e); if (e.key === 'Escape') close(); });
  el.addEventListener('mouseleave', () => { if (matchMedia('(pointer: fine)').matches) close(); });
}

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
function remember() { save({ modes: picked('qModes').filter((m) => m !== 'deck') as GameMode[], levels: picked('qLevels') as Level[], pick }); }
/** Battle modes or Deck Duel (it's queued on its own: picking it clears the others, and the other way round). */
function choose(p: 'battle' | 'deck', silent = false) {
  if (p === 'deck' && !canPlay('deck')) { if (!silent) ui.toast(lockText('deck'), 5000); p = 'battle'; }
  pick = p;
  for (const i of document.querySelectorAll<HTMLInputElement>('#qModes input')) {
    if (p === 'deck' ? i.value !== 'deck' : i.value === 'deck') { i.checked = false; i.closest('label')?.classList.remove('on'); }
  }
  ui.$('queuePick').classList.toggle('deck-picked', p === 'deck');
  remember();
}

export function initQueue(sender: typeof send, myId: () => string) {
  send = sender;
  me = myId;
  // "?" on Deck Duel: the same instructions as in a Deck Duel room
  ui.$('qDeckHelp').addEventListener('click', (e) => {
    e.stopPropagation();
    renderDeckGuide(ui.$('guideBody'));
    ui.$<HTMLDialogElement>('guideDialog').showModal();
  });
  ui.$('qDeckHelp').addEventListener('keydown', (e) => e.stopPropagation());
  ui.$('mfAccept').onclick = () => { if (foundId) send({ type: 'queue_accept', matchId: foundId }); };
  ui.$('queueBack').onclick = () => { if (searching) send({ type: 'queue_cancel' }); stopSearching(); ui.show('games'); }; // (0.9.9.9.9.6: back to Games)
  ui.$('qStart').onclick = () => {
    askNotifyPermission(); // so a found match can reach you in another tab
    if (pick === 'deck') return send({ type: 'queue', modes: ['deck'] });
    const modes = picked('qModes').filter((m) => m !== 'deck'), levels = picked('qLevels');
    if (!modes.length) return ui.toast('Tick at least one mode');
    if (!levels.length && modes.some((m) => !NO_LEVELS.has(m as GameMode))) return ui.toast('Tick at least one level');
    send({ type: 'queue', modes, levels });
  };
  ui.$('qCancel').onclick = () => send({ type: 'queue_cancel' });
}

/** 0.9.9.9.9.6 (round 5): straight into the queue for one mode (the chess page's Find an opponent) */
export function searchOnly(mode: GameMode) {
  openQueue();
  askNotifyPermission();
  send({ type: 'queue', modes: [mode], levels: [] });
}

export function openQueue() {
  const s = load();
  // 0.9.9.9.9.5: a tile per mode — its seal, its name, a (!) with its rules — Deck Duel among them
  ui.$('qModes').replaceChildren(...[...QUEUE_MODES, 'deck' as GameMode].map((m) => {
    const open = canPlay(m), isDeck = m === 'deck';
    const c = chip(m, '', open && (isDeck ? s.pick === 'deck' : s.pick !== 'deck' && s.modes.includes(m)), 'qm');
    c.classList.add('q-tile', `q-${m}`);
    c.lastChild?.remove(); // (the chip's empty label text)
    const tick = document.createElement('span'); tick.className = 'q-tick'; tick.setAttribute('aria-hidden', 'true');
    const name = document.createElement('span'); name.className = 'q-name'; name.textContent = tr(MODE_LABEL[m]);
    const info = document.createElement('span'); info.className = 'q-info'; info.textContent = '!'; info.setAttribute('aria-hidden', 'true');
    c.append(ui.modeBadge(m), name, info, tick);
    const box = c.querySelector('input')!;
    box.addEventListener('change', () => { if (box.checked) choose(isDeck ? 'deck' : 'battle'); });
    if (!open) { c.classList.add('locked'); box.disabled = true; c.title = lockText(m); }
    if (isDeck) info.onclick = (e) => { e.preventDefault(); e.stopPropagation(); ui.$('qDeckHelp').click(); };
    else guideHover(c, m as Exclude<GameMode, 'deck'>);
    return c;
  }));
  ui.$('qLevels').replaceChildren(...LEVELS.map((l) => ui.lockLevelChip(chip(l, LEVEL_LABEL[l], s.levels.includes(l) && (!ui.kanaBeginner() || isKanaLevel(l)), 'ql'), l)));
  choose(s.pick ?? 'battle', true);
  if (!searching) { ui.$('queuePick').hidden = false; ui.$('qSearching').hidden = true; }
  ui.show('queue');
}

// ── 0.9.9.9.6.6: nobody yet? after 20 s, an AI game while you wait (an AI, and it says so) ──
const AI_AFTER_S = 20;
let onPlayAi: ((mode: GameMode, level: string, levels: Level[]) => void) | null = null;
export function setPlayAi(fn: (mode: GameMode, level: string, levels: Level[]) => void) { onPlayAi = fn; }
let aiModes: GameMode[] = [];
function aiLevel(levels: Level[]): string {
  const jlpt = (['N1', 'N2', 'N3', 'N4', 'N5'] as const).find((l) => levels.includes(l));
  return jlpt ?? 'BEGINNER';
}
function showAiOffer(on: boolean) {
  let box = document.getElementById('qAi');
  const battles = aiModes.filter((m) => !NO_LEVELS.has(m)); // (round 5: no AI for chess / Grammar Clash here)
  if (!on || !battles.length) { if (box) box.hidden = true; return; }
  const levels = load().levels;
  const mode = battles.find((m) => m !== 'boss') ?? battles[0] ?? 'reading';
  const lv = aiLevel(mode === 'deck' ? ['N3'] : levels);
  if (!box) {
    box = document.createElement('div');
    box.id = 'qAi'; box.className = 'q-ai';
    ui.$('qCancel').before(box);
  }
  if (box.dataset.key === `${mode}|${lv}` && !box.hidden) return;
  box.dataset.key = `${mode}|${lv}`;
  const p = document.createElement('p');
  p.textContent = tr('No one yet - play a bot while you wait?');
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'pill primary q-ai-btn';
  b.append(ui.modeBadge(mode), document.createTextNode(` ${tr(MODE_LABEL[mode])} · ${tr('Bot')} ${lv === 'BEGINNER' ? tr('Beginner') : lv}`));
  b.onclick = () => { send({ type: 'queue_cancel' }); stopSearching(); onPlayAi?.(mode, lv, levels); };
  box.replaceChildren(p, b);
  box.hidden = false;
}

function stopSearching() {
  showAiOffer(false);
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
    attention('Match found!', `${MODE_LABEL[msg.mode!]} - press Accept`);
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
  const n = msg.players ?? 2;
  ui.$('mfStatus').textContent = n > 2
    ? `${accepted.length} / ${n} accepted${mine ? ' - waiting for the others…' : ''}`
    : mine ? 'Waiting for your opponent…' : accepted.length ? 'Your opponent accepted!' : '';
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
    if (msg.state === 'searching' && msg.requeued) ui.toast('Your opponent didn\'t accept - you\'re back in the queue.', 4000);
    if (msg.state === 'idle' && msg.reason === 'missed') ui.toast('You didn\'t accept in time - the queue stopped.', 4000);
  }
  if (msg.state === 'idle') return stopSearching();
  ui.$('queuePick').hidden = true;
  ui.$('qSearching').hidden = false;
  if (ui.currentScreen() !== 'queue') ui.show('queue');
  if (msg.state === 'matched') {
    searching = false;
    clearInterval(tick);
    ui.$('qTitle').textContent = `Player found - ${MODE_LABEL[msg.mode!]}!`;
    ui.$('qInfo').textContent = 'Starting…';
    ui.$('qCancel').hidden = true;
    return;
  }
  // searching: count up from when the search started (server clock → local clock)
  ui.$('qCancel').hidden = false;
  ui.$('qTitle').textContent = 'Searching for a player…';
  const started = Date.now() - ((msg.now ?? 0) - (msg.since ?? 0));
  const others = (msg.searching ?? 1) - 1;
  const boss = (msg.modes ?? []).includes('boss') ? ` · Boss needs 4 players: ${Math.min(4, msg.boss ?? 1)} / 4 queued` : '';
  aiModes = msg.modes ?? [];
  ui.$('qInfo').textContent = `${(msg.modes ?? []).map((m) => MODE_LABEL[m]).join(' · ')} - ${others > 0 ? `${others} other player${others === 1 ? '' : 's'} searching` : 'no one else searching yet'}${boss}`;
  if (!searching) {
    searching = true;
    clearInterval(tick);
    const paint = () => { const s = Math.floor((Date.now() - started) / 1000); ui.$('qTimer').textContent = `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; if (s >= AI_AFTER_S && searching) showAiOffer(true); };
    paint();
    tick = window.setInterval(paint, 500);
  }
}

/** A match was made and we're in a room now (or we left): reset the screen. */
export function resetQueue() { stopSearching(); ui.$('qCancel').hidden = false; }
