// 0.9.9.9.9.6 (round 4): Grammar Clash — the grammar quiz for 2–8 players (the server: GrammarHub). A room by code
// with a lobby (everyone's own character, Ready, the host's settings, a chat), or Quick match / Ranked from the queue.
// Each question: a sentence with a gap, four choices marked with the elements (火 水 木 金), a timer; faster right
// answers score more, a streak adds a combo, some questions are worth double; then the answer and everyone's pick,
// then the leaderboard; at the end the podium (and the rating change, ranked).
import type { ClashView, ClientMessage } from '../shared/protocol';
import * as audio from './audio';
import { jpLine } from './grammarui';
import { lang, tr } from './i18n';
import * as ui from './ui';
import { avatarSvg } from './wizard';
import type { Avatar } from '../shared/protocol';

const $ = ui.$;
const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};
const AVATARS = new Set(['goblin', 'kid', 'human', 'knight', 'witch', 'wizard']);
const pic = (a: string, staff: string) => avatarSvg((AVATARS.has(a) ? a : 'wizard') as Avatar, 'opp', staff);
/** the four choices, each marked with an element (and its colour) */
const MARKS: Array<[string, string]> = [['火', 'fire'], ['水', 'water'], ['木', 'wood'], ['金', 'metal']];

let send: (m: ClientMessage) => void = () => {};
let myId = '';
let room: ClashView | null = null;
let skew = 0, tick = 0, lastStatus = '', lastN = 0, lastBeep = 0;
let pickLevel = 'N5', pickCount = 10;

export function initClash(sender: (m: ClientMessage) => void) {
  send = sender;
  $('clashBack').onclick = () => { if (room && room.status !== 'over' && room.status !== 'lobby') { void leaveGame(); return; } if (room) send({ type: 'clash_leave' }); room = null; showSetup(); ui.show('games'); };
  $('clashQuick').onclick = () => send({ type: 'clash_queue', on: true, ranked: false });
  $('clashRanked').onclick = () => send({ type: 'clash_queue', on: true, ranked: true });
  $('clashQueueCancel').onclick = () => send({ type: 'clash_queue', on: false });
  $('clashCreate').onclick = () => send({ type: 'clash_new', level: pickLevel, count: pickCount });
  $('clashJoin').onclick = () => { const c = $<HTMLInputElement>('clashCode').value.trim().toUpperCase(); if (c.length === 4) send({ type: 'clash_join', code: c }); else ui.toast(tr('Type the 4-letter code')); };
  $('clashReady').onclick = () => { if (!room) return; const me = room.players.find((p) => p.id === myId); send({ type: 'clash_ready', on: !me?.ready }); };
  $('clashStart').onclick = () => send({ type: 'clash_start' });
  $('clashLeave').onclick = () => { send({ type: 'clash_leave' }); room = null; showSetup(); };
  $('clashCopy').onclick = () => { if (room) void navigator.clipboard?.writeText(room.code).then(() => ui.toast(tr('Copied!'))).catch(() => ui.toast(room?.code ?? '')); };
  $('clashAgain').onclick = () => send({ type: 'clash_again' });
  $('clashExit').onclick = () => { send({ type: 'clash_leave' }); room = null; showSetup(); };
  for (const id of ['clashChatForm', 'clashOverChatForm']) {
    const f = $<HTMLFormElement>(id);
    f.onsubmit = (e) => { e.preventDefault(); const i = f.querySelector('input')!; const t = i.value.trim(); if (t) send({ type: 'clash_chat', text: t.slice(0, 200) }); i.value = ''; };
  }
  drawSetup();
}
export function setClashUser(id: string) { myId = id; }
export function openClash() { ui.show('clash'); if (!room) showSetup(); }
/** (from a friend's profile) a room for the two of you; they are asked to join */
export function challengeClash(friendId: string) { ui.show('clash'); send({ type: 'clash_new', level: pickLevel, count: pickCount, invite: friendId }); }
export async function onClashInvite(from: { id: string; name: string }, code: string) {
  audio.sfx.yourTurn();
  if (['prep', 'battle', 'deck'].includes(ui.currentScreen() ?? '') || (room && room.status !== 'lobby' && room.status !== 'over')) { ui.toast(`${from.name}: ${tr('Grammar Clash')} - ${tr('Your code')} ${code}`, 6000); return; }
  if (!(await ui.confirmBox('Grammar Clash', `${from.name} ${tr('asks you to a game of Grammar Clash.')}`, 'Join', 'Not now', false))) return;
  ui.show('clash');
  send({ type: 'clash_join', code });
}
export function onClashQueue(on: boolean, waiting: number, ranked: boolean) {
  $('clashQueue').hidden = !on;
  $('clashQuick').toggleAttribute('disabled', on); $('clashRanked').toggleAttribute('disabled', on);
  if (on) $('clashQueueText').textContent = tr(`${ranked ? 'Ranked' : 'Quick match'}: ${waiting} of 8 players - the game starts with 2 or more`);
}
export function onClashError(e: string) { ui.toast(tr(e), 3500); }
export function clashReconnected() { if (room && room.status !== 'over') send({ type: 'clash_sync' }); }

function showSetup() {
  for (const id of ['clashLobby', 'clashPlay', 'clashBoard', 'clashOver']) $(id).hidden = true;
  $('clashSetup').hidden = false;
  stopTick();
  drawSetup();
}
function seg(box: string, items: Array<[string, string]>, on: string, set: ((v: string) => void) | null) {
  $(box).replaceChildren(...items.map(([v, label]) => {
    const b = h('button', `cs-opt${v === on ? ' on' : ''}`, tr(label), { type: 'button', 'aria-pressed': String(v === on) }) as HTMLButtonElement;
    if (set) b.onclick = () => set(v); else b.disabled = v !== on;
    return b;
  }));
}
const LEVELS: Array<[string, string]> = [['N5', 'N5'], ['N4', 'N4'], ['mix', 'Mixed']];
const COUNTS: Array<[string, string]> = [['5', '5'], ['10', '10'], ['15', '15'], ['20', '20']];
function drawSetup() {
  seg('clashLevel', LEVELS, pickLevel, (v) => { pickLevel = v; drawSetup(); });
  seg('clashCount', COUNTS, String(pickCount), (v) => { pickCount = Number(v); drawSetup(); });
}

async function leaveGame() {
  if (!(await ui.confirmBox('Leave the game?', room?.ranked ? 'You finish last in this ranked game.' : 'Your score stays on the board, but you can\'t come back to this game.', 'Leave', 'Stay'))) return;
  send({ type: 'clash_leave' }); room = null; showSetup(); ui.show('games');
}

// ── the room, as the server tells it ──
export function onClashRoom(r: ClashView) {
  const fresh = !room || room.id !== r.id;
  room = r; skew = r.now - Date.now();
  if (fresh || ui.currentScreen() !== 'clash') ui.show('clash');
  $('clashSetup').hidden = true;
  const changed = r.status !== lastStatus || r.n !== lastN;
  lastStatus = r.status; lastN = r.n;
  for (const id of ['clashLobby', 'clashPlay', 'clashBoard', 'clashOver']) $(id).hidden = true;
  if (r.status === 'lobby') { stopTick(); return drawLobby(r); }
  if (r.status === 'starting') { drawStarting(r); startTick(); if (changed) audio.sfx.chessStart(); return; }
  if (r.status === 'question' || r.status === 'reveal') { drawPlay(r, changed); startTick(); return; }
  if (r.status === 'board') { drawBoard(r); startTick(); return; }
  stopTick(); drawOver(r, changed);
}
const left = () => Math.max(0, (room?.endsAt ?? 0) - (Date.now() + skew));
function startTick() {
  if (tick) return;
  tick = window.setInterval(() => {
    if (!room) return stopTick();
    const ms = left();
    if (room.status === 'question') {
      const frac = ms / room.limitMs;
      $('clashBar').style.width = `${frac * 100}%`;
      $('clashBar').classList.toggle('low', ms < 5000);
      $('clashSecs').textContent = String(Math.ceil(ms / 1000));
      const s = Math.ceil(ms / 1000);
      if (s <= 5 && s > 0 && s !== lastBeep && room.q?.mine === undefined) { lastBeep = s; audio.sfx.tick(); }
    } else if (room.status === 'starting') {
      $('clashCount3').textContent = String(Math.max(1, Math.ceil(ms / 1000)));
    }
  }, 100);
}
function stopTick() { clearInterval(tick); tick = 0; }

function avatarBox(p: ClashView['players'][number], cls = 'gc-av') {
  const b = h('span', cls);
  b.innerHTML = pic(p.avatar, p.staff);
  return b;
}
function drawLobby(r: ClashView) {
  $('clashLobby').hidden = false;
  $('clashLobbyCode').textContent = r.code;
  const host = r.host === myId;
  $('clashSeats').replaceChildren(...r.players.map((p) => {
    const s = h('div', `gc-seat${p.ready || p.id === r.host ? ' ready' : ''}`);
    s.append(avatarBox(p), h('b', '', p.id === myId ? `${p.name} (${tr('You')})` : p.name), h('span', 'cl-state', tr(p.id === r.host ? 'Host' : p.ready ? 'Ready' : 'Not ready')));
    return s;
  }), ...Array.from({ length: Math.max(0, 2 - r.players.length) }, () => { const s = h('div', 'gc-seat empty'); s.append(h('span', 'gc-av'), h('b', '', tr('Waiting…'))); return s; }));
  seg('clashLobbyLevel', LEVELS, r.level, host ? (v) => send({ type: 'clash_settings', level: v }) : null);
  seg('clashLobbyCount', COUNTS, String(r.count), host ? (v) => send({ type: 'clash_settings', count: Number(v) }) : null);
  const me = r.players.find((p) => p.id === myId);
  $('clashReady').hidden = host; $('clashStart').hidden = !host;
  $('clashReady').textContent = tr(me?.ready ? 'Not ready' : 'Ready');
  $('clashReady').classList.toggle('on', !!me?.ready);
  const allReady = r.players.length >= 2 && r.players.every((p) => p.id === r.host || p.ready);
  ($('clashStart') as HTMLButtonElement).disabled = !allReady;
  $('clashLobbyHint').textContent = tr(r.players.length < 2 ? 'Send your friends the code - 2 to 8 players.' : allReady ? (host ? 'Everyone is ready - start when you like.' : 'Everyone is ready - the host starts the game.') : 'The host starts when everyone is ready.');
  chat($('clashChat'), r);
}
function chat(list: HTMLElement, r: ClashView) {
  list.replaceChildren(...r.chat.map((c) => {
    const li = h('li', c.from ? (c.from === myId ? 'cc-me' : '') : 'cc-sys');
    if (c.from) li.append(h('b', '', c.name));
    li.append(h('span', '', c.from ? c.text : `${c.name} ${tr(c.text)}`));
    return li;
  }));
  list.scrollTop = list.scrollHeight;
}
function drawStarting(r: ClashView) {
  $('clashPlay').hidden = false;
  $('clashTop').replaceChildren(h('b', '', tr(r.ranked ? 'Ranked' : r.quick ? 'Quick match' : 'Grammar Clash')), h('span', 'hint', tr(`${r.total} questions`)));
  $('clashQ').replaceChildren(h('div', 'gc-count', undefined, { id: 'clashCount3' }));
  $('clashCount3').textContent = String(Math.ceil(left() / 1000));
  $('clashOpts').replaceChildren(...r.players.map((p) => { const s = h('div', 'gc-chip'); s.append(avatarBox(p, 'gc-av sm'), h('b', '', p.name)); return s; }));
  $('clashOpts').className = 'gc-chips';
  $('clashFeedback').textContent = tr('Get ready…');
  $('clashTimerRow').hidden = true;
}
function drawPlay(r: ClashView, changed: boolean) {
  $('clashPlay').hidden = false;
  const q = r.q!;
  const me = r.players.find((p) => p.id === myId);
  const answered = r.players.filter((p) => p.answered || p.last).length, live = r.players.filter((p) => !p.left).length;
  const top: HTMLElement[] = [h('b', '', `${r.n} / ${r.total}`)];
  if (q.double) top.push(h('span', 'gc-double', '×2'));
  if (r.status === 'question') top.push(h('span', 'hint', tr(`${r.players.filter((p) => p.answered).length} of ${live} answered`)));
  top.push(h('span', 'gc-myscore', `${me?.score ?? 0}`));
  $('clashTop').replaceChildren(...top);
  void answered;
  $('clashTimerRow').hidden = r.status !== 'question';
  if (changed) {
    $('clashQ').replaceChildren(jpLine(r.status === 'question' ? q.jp : q.jp.replace('＿＿', `【${q.filled}】`), 'gc-q'));
    if (r.status === 'question' && q.double) { audio.sfx.go(); }
  } else if (r.status === 'reveal') $('clashQ').replaceChildren(jpLine(q.jp.replace('＿＿', `【${q.filled}】`), 'gc-q'));
  const opts = $('clashOpts');
  opts.className = 'gc-opts';
  opts.replaceChildren(...q.options.map((o, k) => {
    const [mark, el] = MARKS[k];
    const b = h('button', `gc-opt gc-${el}`, undefined, { type: 'button' }) as HTMLButtonElement;
    b.append(h('span', 'gc-mark', mark), h('span', 'gc-text', o));
    b.querySelector('.gc-mark')!.setAttribute('lang', 'ja'); b.querySelector('.gc-text')!.setAttribute('lang', 'ja');
    if (r.status === 'question') {
      if (q.mine !== undefined) { b.disabled = true; b.classList.toggle('mine', q.mine === k); b.classList.toggle('dim', q.mine !== k); }
      else b.onclick = () => { send({ type: 'clash_answer', i: r.n - 1, k }); audio.sfx.flip(); for (const x of opts.querySelectorAll<HTMLButtonElement>('button')) { x.disabled = true; x.classList.toggle('dim', x !== b); } b.classList.add('mine'); $('clashFeedback').textContent = tr('Waiting for the others…'); };
    } else {
      b.disabled = true;
      if (k === q.answer) b.classList.add('right'); else b.classList.add('dim');
      if (q.mine === k && k !== q.answer) b.classList.add('wrong');
      // who picked it: their faces on the choice
      const who = h('span', 'gc-who');
      for (const p of r.players) if (p.last?.k === k) who.append(avatarBox(p, 'gc-av xs'));
      b.append(who);
    }
    return b;
  }));
  if (r.status === 'question') { if (q.mine === undefined) $('clashFeedback').textContent = tr('Choose what goes in the gap.'); else $('clashFeedback').textContent = tr('Waiting for the others…'); }
  else {
    const last = me?.last;
    const fb = $('clashFeedback');
    fb.replaceChildren();
    if (last?.right) { fb.append(h('b', 'gc-good', `+${last.points}`)); if ((me?.streak ?? 0) >= 2) fb.append(h('span', 'gc-combo', tr(`Combo ×${me!.streak}`))); }
    else fb.append(h('b', 'gc-bad', tr(last?.k === null ? 'Too late' : 'Not this time')));
    fb.append(h('span', 'gc-tr', lang() === 'ru' ? (q.ru ?? '') : (q.en ?? '')));
    if (changed) { if (last?.right) audio.sfx.correct(Math.min(5, me?.streak ?? 1)); else audio.sfx.wrong(); }
  }
}
function ranking(r: ClashView) { return [...r.players].sort((a, b) => Number(a.left) - Number(b.left) || b.score - a.score || b.right - a.right); }
function drawBoard(r: ClashView) {
  $('clashBoard').hidden = false;
  $('clashBoardTitle').textContent = tr(`After question ${r.n} of ${r.total}`);
  const list = ranking(r);
  const top = list[0]?.score || 1;
  $('clashBoardList').replaceChildren(...list.map((p, i) => {
    const row = h('div', `gc-row${p.id === myId ? ' me' : ''}${p.left ? ' gone' : ''}`);
    const bar = h('span', 'gc-bar'); const fill = h('i'); fill.style.width = `${Math.max(4, (p.score / top) * 100)}%`; bar.append(fill);
    row.append(h('span', 'gc-place', String(i + 1)), avatarBox(p, 'gc-av sm'), h('b', 'gc-name', p.name), bar, h('span', 'gc-pts', String(p.score)));
    if (p.last?.right && p.last.points) row.append(h('span', 'gc-gain', `+${p.last.points}`));
    if (p.streak >= 2) row.append(h('span', 'gc-combo', `×${p.streak}`));
    row.style.animationDelay = `${i * 70}ms`;
    return row;
  }));
}
function drawOver(r: ClashView, changed: boolean) {
  $('clashOver').hidden = false;
  const list = (r.order ?? ranking(r).map((p) => p.id)).map((id) => r.players.find((p) => p.id === id)!).filter(Boolean);
  const pod = $('clashPodium');
  pod.replaceChildren(...[1, 0, 2].filter((i) => list[i]).map((i) => {
    const p = list[i];
    const c = h('div', `gc-pod p${i + 1}${p.id === myId ? ' me' : ''}`);
    c.append(avatarBox(p, 'gc-av lg'), h('b', '', p.name), h('span', 'gc-pts', String(p.score)), h('span', 'gc-step', String(i + 1)));
    return c;
  }));
  const mine = list.findIndex((p) => p.id === myId);
  $('clashOverTitle').textContent = tr(mine === 0 ? 'You won!' : `You finished ${mine + 1} of ${list.length}`);
  $('clashOverList').replaceChildren(...list.map((p, i) => {
    const row = h('div', `gc-row${p.id === myId ? ' me' : ''}`);
    row.append(h('span', 'gc-place', String(i + 1)), avatarBox(p, 'gc-av sm'), h('b', 'gc-name', p.name), h('span', 'hint', tr(`${p.right} right · best combo ${p.best}`)), h('span', 'gc-pts', String(p.score)));
    const ch = r.ratings?.[p.id];
    if (ch) { const d = ch.after - ch.before; row.append(h('span', `gc-rate ${d >= 0 ? 'up' : 'down'}`, `${d >= 0 ? '+' : ''}${d}`)); }
    return row;
  }));
  $('clashAgain').hidden = r.quick || r.host !== myId;
  if (changed) { if (mine === 0) audio.sfx.win(); else audio.sfx.lose(); }
  chat($('clashOverChat'), r);
}
