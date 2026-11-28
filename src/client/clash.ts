// 0.9.9.9.9.6 (round 4): Grammar Clash — the grammar quiz for 2–8 players (the server: GrammarHub). Each question: a
// sentence with a gap, four choices marked with the elements (火 水 木 金), a timer; faster right answers score more,
// a streak adds a combo, some questions are worth double; then the answer, why it fits and everyone's pick, then the
// leaderboard; at the end the podium (and the rating change, ranked).
// Round 5: no lobby or menu of its own — it is a mode of the private game (the same lobby as every mode) and of the
// online queue; this page is the game itself, and Back to lobby goes back to the room.
import type { ClashView, ClientMessage } from '../shared/protocol';
import { flameColor } from '../shared/progress';
import type { ClashGame } from './api';
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

export function initClash(sender: (m: ClientMessage) => void) {
  send = sender;
  $('clashBack').onclick = () => { if (spectating) return stopSpectating(); if (room && room.status !== 'over') { void leaveGame(); return; } toLobby(); };
  $('clashAgain').onclick = () => { if (spectating) return stopSpectating(); toLobby(); };
  $('clashExit').onclick = () => { if (spectating) return stopSpectating(); room = null; stopTick(); send({ type: 'leave' }); };
  // (round 7: the chat at the side during the game too)
  for (const id of ['clashOverChatForm', 'clashChatForm']) {
    const f = $<HTMLFormElement>(id);
    f.onsubmit = (e) => { e.preventDefault(); const i = f.querySelector('input')!; const t = i.value.trim(); if (t) send({ type: 'clash_chat', text: t.slice(0, 200) }); i.value = ''; };
  }
}
/** the game is over: back to the room's lobby (Ready there for another game) */
function toLobby() { room = null; stopTick(); dispatchEvent(new Event('kw:room-lobby')); }
export function setClashUser(id: string) { myId = id; }
/**
 * 0.9.9.9.9.7 (round 3): watching a friend's Grammar Clash — the game from their seat (their score, their result),
 * the choices not pressable, the chat to read. '' = not watching
 */
let spectating = '', spectName = '';
/** whose seat the screen shows: yours, or the friend's you watch */
const seat = () => spectating || myId;
export function clashSpectate(friendId: string, name: string) {
  const was = spectating;
  spectating = friendId; spectName = name;
  $('clash').classList.toggle('spectate', !!friendId);
  $('clashBack').textContent = tr(friendId ? '← Games' : '← Lobby'); // (a watcher has no lobby here)
  if (!friendId && was) { room = null; stopTick(); if (ui.currentScreen() === 'clash') ui.show('games'); }
}
const stopSpectating = () => { send({ type: 'unwatch' }); clashSpectate('', ''); };
// (round 4's invites to a Clash room by code: rooms of the private game are invited the usual way now)
export async function onClashInvite(_from: { id: string; name: string }, _code: string) { /* no longer sent */ }
export function onClashQueue(_on: boolean, _waiting: number, _ranked: boolean) { /* the online queue's own screen says it */ }
export function onClashError(e: string) { ui.toast(tr(e), 3500); }
export function clashReconnected() {
  if (spectating) { if (room && room.status !== 'over') send({ type: 'watch', userId: spectating }); return; } // (round 3)
  if (room && room.status !== 'over') send({ type: 'clash_sync' });
}

async function leaveGame() {
  if (!(await ui.confirmBox('Leave the game?', room?.ranked ? 'You finish last in this ranked game.' : 'Your score stays on the board, but you can\'t come back to this game.', 'Leave', 'Stay'))) return;
  room = null; stopTick(); send({ type: 'leave' });
}

// ── the game, as the server tells it ──
export function onClashRoom(r: ClashView) {
  room = r; skew = r.now - Date.now();
  if (ui.currentScreen() !== 'clash') ui.show('clash');
  const changed = r.status !== lastStatus || r.n !== lastN;
  lastStatus = r.status; lastN = r.n;
  for (const id of ['clashPlay', 'clashBoard', 'clashOver']) $(id).hidden = true;
  if (r.status === 'lobby') return;
  // (round 7) the sides: the chat while the game is on; the grammar of your last mistake, until the next question
  const playing = r.status !== 'over';
  $('clashChatSide').hidden = !playing;
  if (playing) chat($('clashChat'), r);
  if (r.status === 'question' || r.status === 'starting' || !playing) { $('clashWhySide').hidden = true; $('clashWhySide').replaceChildren(); }
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
  // (round 7) three right in a row: Omnipotence round the player — (0.9.9.9.9.7) the battle's own flames, in the colour
  // they chose in Customize → Omnipotence (it was a rainbow ring of our own)
  const b = h('span', `${cls}${p.streak >= 3 ? ' gc-omni' : ''}`);
  // (the flame's colour, light to deep, from the colour chosen in Customize)
  const [r, g, bl] = (flameColor(p.flame).match(/[0-9a-f]{2}/gi) ?? ['78', 'e6', 'ff']).map((x) => parseInt(x, 16));
  const mix = (t: number, k: number) => [r, g, bl].map((c) => Math.round(k > 0 ? c + (255 - c) * k : c * (1 + k))).join(',');
  b.style.cssText = `--f0:${mix(0, 0.85)};--f1:${mix(0, 0.2)};--f2:${mix(0, -0.25)};--f3:${mix(0, -0.6)}`;
  b.innerHTML = pic(p.avatar, p.staff);
  b.prepend(h('span', 'aura'));
  return b;
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
  const me = r.players.find((p) => p.id === seat());
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
      else if (spectating) b.disabled = true; // (round 3: watching)
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
  // (0.9.9.9.9.7: the sentence's translation while you answer, under the hint)
  if (r.status === 'question') { $('clashFeedback').replaceChildren(h('span', 'gc-hint', spectating ? tr('Watching {name}').replace('{name}', spectName) : tr(q.mine === undefined ? 'Choose what goes in the gap.' : 'Waiting for the others…')), h('span', 'gc-tr', lang() === 'ru' ? (q.ru ?? '') : (q.en ?? ''))); }
  else {
    const last = me?.last;
    const fb = $('clashFeedback');
    fb.replaceChildren();
    if (last?.right) { fb.append(h('b', 'gc-good', `+${last.points}`)); if ((me?.streak ?? 0) >= 2) fb.append(h('span', 'gc-combo', tr(`Combo ×${me!.streak}`))); }
    else fb.append(h('b', 'gc-bad', tr(last?.k === null ? 'Too late' : 'Not this time')));
    fb.append(h('span', 'gc-tr', lang() === 'ru' ? (q.ru ?? '') : (q.en ?? '')));
    if ((me?.streak ?? 0) >= 3 && changed && last?.right) fb.append(h('span', 'gc-omni-note', tr('Omnipotence!')));
    // (round 5) the right answer, and why it is the one: its grammar point, what it means, how it is used.
    // (round 7) after a mistake it goes to the side, and stays there until the next question
    if (q.why && !last?.right) {
      const why = h('div', 'gc-why');
      const t = (x: { en: string; ru: string }) => (lang() === 'ru' ? x.ru : x.en);
      const head = h('div', 'gc-why-head');
      head.append(h('span', 'gc-why-lbl', tr('Why')), h('b', 'gc-why-ans', q.filled ?? ''), h('span', 'gc-why-pat', q.why.pattern), h('span', 'gc-why-lvl', q.why.level));
      head.querySelector('.gc-why-ans')!.setAttribute('lang', 'ja'); head.querySelector('.gc-why-pat')!.setAttribute('lang', 'ja');
      why.append(head, h('p', 'gc-why-mean', t(q.why.meaning)));
      if (q.why.rule) why.append(h('p', 'gc-why-rule', t(q.why.rule)));
      const side = $('clashWhySide');
      side.replaceChildren(h('h4', '', tr(spectating ? 'The answer' : 'Your mistake')), jpLine(q.jp.replace('＿＿', `【${q.filled}】`), 'gc-q gc-q-sm'), why);
      side.hidden = false;
    }
    if (changed && !spectating) { if (last?.right) audio.sfx.correct(Math.min(5, me?.streak ?? 1)); else audio.sfx.wrong(); }
  }
}
function ranking(r: ClashView) { return [...r.players].sort((a, b) => Number(a.left) - Number(b.left) || b.score - a.score || b.right - a.right); }
function drawBoard(r: ClashView) {
  $('clashBoard').hidden = false;
  $('clashBoardTitle').textContent = tr(`After question ${r.n} of ${r.total}`);
  const list = ranking(r);
  const top = list[0]?.score || 1;
  $('clashBoardList').replaceChildren(...list.map((p, i) => {
    const row = h('div', `gc-row${p.id === seat() ? ' me' : ''}${p.left ? ' gone' : ''}`);
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
    const c = h('div', `gc-pod p${i + 1}${p.id === seat() ? ' me' : ''}`);
    c.append(avatarBox(p, 'gc-av lg'), h('b', '', p.name), h('span', 'gc-pts', String(p.score)), h('span', 'gc-step', String(i + 1)));
    return c;
  }));
  const mine = list.findIndex((p) => p.id === seat());
  $('clashOverTitle').textContent = spectating ? tr('{name} won!').replace('{name}', list[0]?.name ?? '') : tr(mine === 0 ? 'You won!' : `You finished ${mine + 1} of ${list.length}`);
  $('clashOverList').replaceChildren(...list.map((p, i) => {
    const row = h('div', `gc-row${p.id === seat() ? ' me' : ''}`);
    row.append(h('span', 'gc-place', String(i + 1)), avatarBox(p, 'gc-av sm'), h('b', 'gc-name', p.name), h('span', 'hint', tr(`${p.right} right · best combo ${p.best}`)), h('span', 'gc-pts', String(p.score)));
    const ch = r.ratings?.[p.id];
    if (ch) { const d = ch.after - ch.before; row.append(h('span', `gc-rate ${d >= 0 ? 'up' : 'down'}`, `${d >= 0 ? '+' : ''}${d}`)); }
    return row;
  }));
  $('clashAgain').hidden = false; // (round 5: Back to lobby — the room's)
  if (changed && !spectating) { if (mine === 0) audio.sfx.win(); else audio.sfx.lose(); }
  chat($('clashOverChat'), r);
}

// ── 0.9.9.9.9.6 (round 7): Match history → Grammar Clash: the games, and each one's rounds (no replay) ──
export function showClashHistory(el: HTMLElement, games: ClashGame[] | null) {
  if (!games) { el.replaceChildren(h('p', 'hint', tr('Loading…'))); return; }
  if (!games.length) { el.replaceChildren(h('p', 'hint', tr('No Grammar Clash games yet - play one from the online queue or a private room.'))); return; }
  // (0.9.9.9.9.7: drawn like a match in Matches)
  el.replaceChildren(...games.map((g) => {
    const res = g.place === 1 ? 'win' : 'loss';
    const b = h('button', `hist-row ${res}`, undefined, { type: 'button' });
    const me = g.players.find((p) => p.id === myId) ?? g.players[g.place - 1];
    const fig = h('span', 'char-sprite'); fig.innerHTML = pic(me?.avatar ?? 'wizard', 'verdant');
    const text = h('span', 'hist-mode-text');
    const name = h('span', 'hist-mode-name', tr('Grammar Clash'));
    name.append(h('span', `hist-ranked${g.ranked ? ' on' : ''}`, tr(g.ranked ? 'Ranked' : 'Unranked')));
    const others = g.players.filter((p) => p.id !== me?.id).map((p) => p.name).join(', ');
    text.append(name, h('span', 'hist-vs-line', `vs ${others} · ${g.level === 'mix' ? tr('All levels') : g.level} · ${g.rounds.length} ${tr('questions')}`));
    const mode = h('span', 'hist-mode'); mode.append(ui.modeBadge('clash'), text);
    b.append(fig, mode, h('span', 'hist-result', g.place === 1 ? tr('VICTORY') : `#${g.place} / ${g.players.length}`), h('span', 'hist-date', ui.dateTime(g.at)));
    b.onclick = () => openClashGame(g);
    return b;
  }));
}
function openClashGame(g: ClashGame) {
  const d = h('dialog', 'friend-dialog clash-game-dialog') as HTMLDialogElement;
  const name = new Map(g.players.map((p) => [p.id, p.name]));
  const close = h('button', 'pill', tr('Close'), { type: 'button' }); close.onclick = () => d.close();
  const head = h('div', 'ld-head'); head.append(h('h3', '', tr('Grammar Clash')), close);
  const final = h('ol', 'gcg-final');
  for (const p of g.players) { const li = h('li', p.id === myId ? 'me' : ''); li.append(h('b', '', p.name), h('span', 'hint', tr(`${p.right} right · best combo ${p.best}`)), h('span', 'gc-pts', String(p.score))); final.append(li); }
  const rounds = h('div', 'gcg-rounds');
  g.rounds.forEach((r, i) => {
    const card = h('div', 'gcg-round');
    const top = h('div', 'gcg-top'); top.append(h('b', '', `${i + 1}`), ...(r.double ? [h('span', 'gc-double', '×2')] : []), h('span', 'gc-why-pat', r.pattern));
    card.append(top, jpLine(r.jp.replace('＿＿', `【${r.filled}】`), 'gc-q gc-q-sm'), h('p', 'gc-tr', lang() === 'ru' ? r.ru : r.en));
    const picks = h('ul', 'gcg-picks');
    for (const [id, p] of Object.entries(r.picks)) {
      const li = h('li', `${p.right ? 'ok' : 'no'}${id === myId ? ' me' : ''}`);
      li.append(h('b', '', name.get(id) ?? '?'), h('span', '', p.k === null ? tr('no answer') : r.options[p.k] ?? ''), h('span', 'gc-pts', p.right ? `+${p.points}` : '0'));
      li.querySelector('span')!.setAttribute('lang', 'ja');
      picks.append(li);
    }
    const stand = h('p', 'hint gcg-stand', `${tr('After this round')}: ${r.standings.map((s, k) => `${k + 1}. ${name.get(s.id) ?? '?'} ${s.score}`).join(' · ')}`);
    card.append(picks, stand);
    rounds.append(card);
  });
  d.append(head, final, rounds);
  d.addEventListener('close', () => d.remove());
  document.body.append(d);
  d.showModal();
}
