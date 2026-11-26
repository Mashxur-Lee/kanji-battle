// 0.9.9.9.9.6: Kanji chess — chess where every piece is its kanji (王 后 城 僧 馬 兵). Play one of the four bot wizards
// (the Goblin 200, the Knight 400, the Witch 800, the Wizard 1600): they sit beside the board and talk about your
// moves in Japanese (furigana over every kanji, each one tappable for its meaning, the translation under it) — like a
// chess site's coach. Or play a friend by a room code, with clocks kept by the server.
import { BOTS, botMove, colorOf, inCheck, judgeMove, kindOf, legalMoves, makeMove, moveSan, moveUci, outcome, parseFen, PIECE_KANJI, PIECE_NAME, PIECE_READING, posKey, replay, sqName, START_FEN, type BotId, type Color, type Kind, type Move, type Position } from '../shared/chess';
import { lineFor, parseLine, type Moment } from '../shared/chesslines';
import type { ChessRoomView, ClientMessage } from '../shared/protocol';
import * as audio from './audio';
import { lang, tr } from './i18n';
import { showKanji } from './kanjihelp';
import * as ui from './ui';
import { heroSvg } from './wizard';

const $ = ui.$;
const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};
const HAN = /\p{Script=Han}/u;

// ── the game in play ──
type Mode = { kind: 'bot'; bot: BotId } | { kind: 'friend'; room: ChessRoomView };
let mode: Mode = { kind: 'bot', bot: 'goblin' };
let mine: Color = 'w';
let pos: Position = parseFen(START_FEN);
let moves: Move[] = [];
let sans: string[] = [];
let history: string[] = []; // position keys, for repetition
let selected = -1;
let over: { winner: Color | null; reason: string } | null = null;
let thinking = false;
let clocks = { w: 0, b: 0 }, base = 0, inc = 0, turnSince = 0, clockSkew = 0;
let clockTimer = 0;
let send: (m: ClientMessage) => void = () => {};
let pendingPromo: Move[] | null = null;

// ── setup ──
const TIMES: Array<[string, number, number]> = [['No clock', 0, 0], ['3 + 2', 180_000, 2000], ['5 + 0', 300_000, 0], ['10 + 0', 600_000, 0], ['15 + 10', 900_000, 10_000]];
let pickBot: BotId = 'goblin', pickColor: 'w' | 'b' | 'r' = 'r', pickTime = 0;

export function initChess(sender: (m: ClientMessage) => void) {
  send = sender;
  $('chessBack').onclick = () => { if (!$('chessGame').hidden && !over && moves.length) { void leaveGame(); return; } ui.show('games'); };
  $('chessStart').onclick = () => startBot();
  $('chessCreate').onclick = () => { const [, b, i] = TIMES[pickTime]; send({ type: 'chess_new', base: b, inc: i }); };
  $('chessJoin').onclick = () => { const c = $<HTMLInputElement>('chessCode').value.trim().toUpperCase(); if (c.length === 4) send({ type: 'chess_join', code: c }); else ui.toast(tr('Type the 4-letter code')); };
  $('chessFlip').onclick = () => { flipped = !flipped; draw(); };
  $('chessResign').onclick = () => void resign();
  $('chessDraw').onclick = () => { if (mode.kind === 'friend') send({ type: 'chess_draw', id: mode.room.id, offer: true }); };
  $('chessUndo').onclick = () => takeBack();
  $('chessAgain').onclick = () => { $('chessOver').hidden = true; if (mode.kind === 'bot') startBot(); else showSetup('friend'); };
  $('chessToSetup').onclick = () => { $('chessOver').hidden = true; showSetup(mode.kind === 'friend' ? 'friend' : 'bot'); };
  for (const b of document.querySelectorAll<HTMLElement>('#chessTabs [data-tab]')) b.onclick = () => showSetup(b.dataset.tab as 'bot' | 'friend');
  // the pieces, each tappable: its kanji and what it is
  $('chessLegend').replaceChildren(...(['k', 'q', 'r', 'b', 'n', 'p'] as Kind[]).map((k) => {
    const b = h('button', 'cl-piece', undefined, { type: 'button' });
    const r = h('ruby'); r.append(PIECE_KANJI[k], h('rt', '', PIECE_READING[k]));
    b.append(r, h('span', '', tr(PIECE_NAME[k])));
    b.onclick = () => void showKanji(PIECE_KANJI[k], b);
    return b;
  }));
  drawSetup();
}

export function openChess() {
  ui.show('chess');
  if ($('chessGame').hidden) showSetup('bot');
}
function showSetup(tab: 'bot' | 'friend') {
  $('chessSetup').hidden = false; $('chessGame').hidden = true;
  for (const b of document.querySelectorAll<HTMLElement>('#chessTabs [data-tab]')) b.setAttribute('aria-selected', String(b.dataset.tab === tab));
  $('chessBotSetup').hidden = tab !== 'bot'; $('chessFriendSetup').hidden = tab !== 'friend';
  $('chessWait').hidden = true;
  drawSetup();
}
function drawSetup() {
  $('chessBots').replaceChildren(...BOTS.map((b) => {
    const card = h('button', `cb-bot cb-${b.id}${b.id === pickBot ? ' on' : ''}`, undefined, { type: 'button', 'aria-pressed': String(b.id === pickBot) });
    const pic = h('span', 'cb-pic'); pic.innerHTML = heroSvg(b.id, 'opp');
    const name = h('span', 'cb-name');
    const r = h('ruby', '', undefined, { lang: 'ja' }); r.append(b.jp, h('rt', '', b.reading));
    name.append(h('b', '', tr(b.name)), r);
    card.append(pic, name, h('span', 'cb-elo', String(b.elo)));
    card.onclick = () => { pickBot = b.id; drawSetup(); };
    return card;
  }));
  const seg = (box: string, items: Array<[string, string]>, on: string, set: (v: string) => void) => {
    $(box).replaceChildren(...items.map(([v, label]) => { const b = h('button', `cs-opt${v === on ? ' on' : ''}`, tr(label), { type: 'button', 'aria-pressed': String(v === on) }); b.onclick = () => { set(v); drawSetup(); }; return b; }));
  };
  seg('chessColor', [['w', 'White'], ['r', 'Random'], ['b', 'Black']], pickColor, (v) => { pickColor = v as 'w' | 'b' | 'r'; });
  for (const id of ['chessTime', 'chessFriendTime']) seg(id, TIMES.map(([l], i) => [String(i), l] as [string, string]), String(pickTime), (v) => { pickTime = Number(v); });
}

// ── a game against a bot ──
function startBot() {
  mode = { kind: 'bot', bot: pickBot };
  mine = pickColor === 'r' ? (Math.random() < 0.5 ? 'w' : 'b') : pickColor;
  const [, b, i] = TIMES[pickTime];
  begin(b, i);
  say('hello');
  audio.sfx.go();
  if (pos.turn !== mine) botTurn();
}
function begin(b: number, i: number) {
  pos = parseFen(START_FEN); moves = []; sans = []; history = []; selected = -1; over = null; thinking = false; pendingPromo = null;
  base = b; inc = i; clocks = { w: b, b: b }; turnSince = Date.now(); clockSkew = 0;
  flipped = mine === 'b';
  $('chessSetup').hidden = true; $('chessGame').hidden = false; $('chessOver').hidden = true; $('chessPromo').hidden = true;
  $('chessUndo').hidden = mode.kind !== 'bot'; $('chessDraw').hidden = mode.kind !== 'friend';
  $('chessBubble').hidden = true;
  drawPlayers();
  draw();
  startClock();
}
function drawPlayers() {
  const opp = $('chessOpp'), me = $('chessMe');
  if (mode.kind === 'bot') {
    const b = BOTS.find((x) => x.id === (mode as { bot: BotId }).bot)!;
    opp.querySelector('.cp-pic')!.innerHTML = heroSvg(b.id, 'opp');
    const name = opp.querySelector('.cp-name')!;
    const r = h('ruby', '', undefined, { lang: 'ja' }); r.append(b.jp, h('rt', '', b.reading));
    name.replaceChildren(h('b', '', tr(b.name)), r, h('span', 'cp-elo', String(b.elo)));
  } else {
    const r = mode.room, them = mine === 'w' ? r.black : r.white;
    opp.querySelector('.cp-pic')!.innerHTML = heroSvg('wizard', 'opp');
    opp.querySelector('.cp-name')!.replaceChildren(h('b', '', them?.name ?? tr('Waiting…')));
  }
  me.querySelector('.cp-name')!.replaceChildren(h('b', '', tr('You')), h('span', 'cp-side', tr(mine === 'w' ? 'White' : 'Black')));
}
function botTurn() {
  if (mode.kind !== 'bot' || over || pos.turn === mine) return;
  thinking = true;
  $('chessGame').classList.add('thinking');
  const bot = mode.bot;
  // (a moment to see your move land, and the bot "thinks" a little — longer for the stronger ones)
  const wait = { goblin: 500, knight: 650, witch: 800, wizard: 900 }[bot] + Math.random() * 500;
  window.setTimeout(() => {
    if (over || mode.kind !== 'bot' || pos.turn === mine) { thinking = false; return; }
    const m = botMove(pos, bot);
    thinking = false;
    $('chessGame').classList.remove('thinking');
    if (!m) return;
    const took = m.captured;
    play(m);
    if (!over) {
      if (inCheck(pos) && Math.random() < 0.7) say('check');
      else if (took && ['q', 'r', 'b', 'n'].includes(kindOf(took)) && Math.random() < 0.6) say('take');
    }
  }, wait);
}

// ── moves ──
function play(m: Move) {
  const before = pos;
  history.push(posKey(pos));
  sans.push(moveSan(pos, m, true));
  if (base && !over) { clocks[pos.turn] = clocks[pos.turn] - (Date.now() - turnSince) + inc; turnSince = Date.now(); }
  pos = makeMove(pos, m);
  moves.push(m);
  selected = -1;
  if (m.captured) audio.sfx.impact(); else audio.sfx.flip();
  draw();
  if (mode.kind === 'bot') {
    const o = outcome(pos, history);
    if (o.over) finish(o.winner, o.reason);
    else if (pos.turn !== mine) { if (colorOf(m.piece) === mine) comment(before, m); botTurn(); }
  }
}
/** what the bot thinks of your move */
function comment(before: Position, m: Move) {
  if (mode.kind !== 'bot') return;
  if (m.castle && Math.random() < 0.6) { say('castle'); return; }
  if (m.promo) { say('promote'); return; }
  // (a moment later — the bot is reading the board)
  window.setTimeout(() => {
    if (over) return;
    const j = judgeMove(before, m, 2);
    const chance: Record<string, number> = { best: 0.45, good: 0.35, inaccuracy: 0.7, mistake: 0.9, blunder: 1 };
    if (Math.random() < chance[j.quality]) { say(j.quality as Moment); markMove(j.quality); }
  }, 60);
}
function markMove(q: string) {
  const last = $('chessMoves').lastElementChild?.lastElementChild as HTMLElement | null;
  if (last) last.dataset.q = q;
}
function tryMove(from: number, to: number) {
  if (over || thinking) return;
  const options = legalMoves(pos).filter((x) => x.from === from && x.to === to);
  if (!options.length) return false;
  if (options.length > 1) { askPromo(options); return true; }
  commit(options[0]);
  return true;
}
function commit(m: Move) {
  if (mode.kind === 'friend') { send({ type: 'chess_move', id: mode.room.id, uci: moveUci(m) }); selected = -1; pending = moveUci(m); play(m); return; }
  play(m);
}
let pending = '';
function askPromo(options: Move[]) {
  pendingPromo = options;
  const box = $('chessPromo');
  box.replaceChildren(h('b', '', tr('Promote to')), ...(['q', 'r', 'b', 'n'] as Kind[]).map((k) => {
    const b = h('button', `cpr-btn piece ${mine}`, PIECE_KANJI[k], { type: 'button', lang: 'ja', title: tr(PIECE_NAME[k]) });
    b.onclick = () => { box.hidden = true; const m = pendingPromo?.find((x) => x.promo === k); pendingPromo = null; if (m) commit(m); };
    return b;
  }));
  box.hidden = false;
}
function takeBack() {
  if (mode.kind !== 'bot' || thinking || !moves.length) return;
  // back to your last turn (your move and the bot's answer)
  const n = pos.turn === mine ? 2 : 1;
  const keep = moves.slice(0, Math.max(0, moves.length - n)).map(moveUci);
  const r = replay(keep);
  pos = r.positions[r.positions.length - 1];
  moves = r.moves; sans = r.moves.map((m, i) => moveSan(r.positions[i], m, true)); history = r.positions.slice(0, -1).map(posKey);
  over = null; selected = -1; $('chessOver').hidden = true;
  draw();
  if (pos.turn !== mine) botTurn();
}
async function resign() {
  if (over) return;
  if (!(await ui.confirmBox('Resign?', 'The game ends and your opponent wins.', 'Resign', 'Keep playing'))) return;
  if (mode.kind === 'friend') send({ type: 'chess_resign', id: mode.room.id });
  else finish(mine === 'w' ? 'b' : 'w', 'resigned');
}
async function leaveGame() {
  if (!(await ui.confirmBox('Leave the game?', mode.kind === 'friend' ? 'You lose the game.' : 'This game will be lost.', 'Leave', 'Stay'))) return;
  if (mode.kind === 'friend') send({ type: 'chess_leave', id: mode.room.id });
  over = { winner: mine === 'w' ? 'b' : 'w', reason: 'left' };
  stopClock();
  showSetup(mode.kind === 'friend' ? 'friend' : 'bot');
  ui.show('games');
}
const REASON: Record<string, string> = { checkmate: 'by checkmate', stalemate: 'stalemate', fifty: 'by the 50-move rule', repetition: 'by repetition', material: 'too little to mate', time: 'on time', resigned: 'by resignation', agreed: 'by agreement', left: 'they left' };
function finish(winner: Color | null, reason: string) {
  over = { winner, reason };
  stopClock();
  draw();
  const won = winner === mine, drawn = winner === null;
  if (mode.kind === 'bot') say(drawn ? 'draw' : won ? 'botLoses' : 'botWins');
  if (won) audio.sfx.win(); else if (!drawn) audio.sfx.lose();
  $('chessOverTitle').textContent = tr(drawn ? 'Draw' : won ? 'You won!' : 'You lost');
  $('chessOverTitle').className = drawn ? 'draw' : won ? 'win' : 'loss';
  $('chessOverWhy').textContent = tr(REASON[reason] ?? reason);
  window.setTimeout(() => { if (over) $('chessOver').hidden = false; }, 900);
}

// ── the board ──
let flipped = false;
function draw() {
  const board = $('chessBoard');
  const legal = selected >= 0 ? legalMoves(pos).filter((m) => m.from === selected) : [];
  const last = moves[moves.length - 1];
  const checked = inCheck(pos) ? pos.board.indexOf(pos.turn === 'w' ? 'K' : 'k') : -1;
  const cells: HTMLElement[] = [];
  for (let n = 0; n < 64; n++) {
    const i = flipped ? 63 - n : n;
    const r = Math.floor(i / 8), f = i % 8;
    const x = pos.board[i];
    const sq = h('button', `csq ${(r + f) % 2 ? 'dark' : 'light'}`, undefined, { type: 'button', 'data-sq': String(i), 'aria-label': `${sqName(i)}${x ? ` ${tr(colorOf(x) === 'w' ? 'white' : 'black')} ${tr(PIECE_NAME[kindOf(x)])}` : ''}` });
    if (last && (i === last.from || i === last.to)) sq.classList.add('last');
    if (i === selected) sq.classList.add('sel');
    if (i === checked) sq.classList.add('check');
    const target = legal.find((m) => m.to === i);
    if (target) sq.classList.add(target.captured ? 'cap' : 'dot');
    if (x) { const pc = h('span', `piece ${colorOf(x)}`, PIECE_KANJI[kindOf(x)], { lang: 'ja' }); sq.append(pc); }
    // the coordinates on the edge
    if (n % 8 === 0) sq.append(h('i', 'crank', String(8 - r)));
    if (n >= 56) sq.append(h('i', 'cfile', 'abcdefgh'[f]));
    sq.onclick = () => onSquare(i);
    cells.push(sq);
  }
  board.replaceChildren(...cells);
  // the move list: 1. 兵e4 兵e5 …
  const list = $('chessMoves');
  list.replaceChildren(...Array.from({ length: Math.ceil(sans.length / 2) }, (_, k) => {
    const row = h('li');
    row.append(h('span', 'cm-n', `${k + 1}.`), h('span', 'cm-w', sans[k * 2] ?? ''), h('span', 'cm-b', sans[k * 2 + 1] ?? ''));
    return row;
  }));
  list.scrollTop = list.scrollHeight;
  $('chessTurn').textContent = over ? '' : tr(pos.turn === mine ? 'Your move' : mode.kind === 'bot' ? 'Thinking…' : 'Their move');
  $('chessOpp').classList.toggle('to-move', !over && pos.turn !== mine);
  $('chessMe').classList.toggle('to-move', !over && pos.turn === mine);
  drawClocks();
}
function onSquare(i: number) {
  if (over || thinking || pos.turn !== mine) return;
  if (mode.kind === 'friend' && mode.room.status !== 'playing') return;
  const x = pos.board[i];
  if (selected >= 0 && selected !== i && tryMove(selected, i)) return;
  if (x && colorOf(x) === mine) { selected = selected === i ? -1 : i; draw(); return; }
  if (selected >= 0) { selected = -1; draw(); }
}

// ── clocks ──
const fmt = (ms: number) => { const s = Math.max(0, Math.ceil(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
function left(c: Color) { return c === pos.turn && !over && (mode.kind === 'bot' || mode.room.status === 'playing') ? clocks[c] - (Date.now() + clockSkew - turnSince) : clocks[c]; }
function drawClocks() {
  for (const [id, c] of [['chessOppClock', mine === 'w' ? 'b' : 'w'], ['chessMeClock', mine]] as const) {
    const el = $(id);
    el.hidden = !base;
    if (!base) continue;
    const t = left(c as Color);
    el.textContent = fmt(t);
    el.classList.toggle('low', t < 20_000);
    el.classList.toggle('run', c === pos.turn && !over);
  }
}
function startClock() {
  stopClock();
  if (!base) return;
  clockTimer = window.setInterval(() => {
    drawClocks();
    if (mode.kind === 'bot' && !over && left(pos.turn) <= 0) { clocks[pos.turn] = 0; finish(pos.turn === 'w' ? 'b' : 'w', 'time'); }
  }, 200);
}
function stopClock() { clearInterval(clockTimer); clockTimer = 0; }

// ── what the bot says ──
function say(moment: Moment) {
  if (mode.kind !== 'bot') return;
  const line = lineFor(mode.bot, moment);
  if (!line) return;
  const box = $('chessBubble');
  const jp = h('p', 'cbb-jp', undefined, { lang: 'ja' });
  for (const part of parseLine(line.jp)) {
    if (!part.reading) { jp.append(part.text); continue; }
    // the word with its reading over it; each kanji in it can be tapped for its meaning
    const r = h('ruby');
    for (const ch of part.text) {
      if (HAN.test(ch)) { const k = h('button', 'cbb-k', ch, { type: 'button', title: tr('Tap for its meaning') }); k.onclick = (e) => { e.stopPropagation(); void showKanji(ch, k); }; r.append(k); }
      else r.append(ch);
    }
    r.append(h('rt', '', part.reading));
    jp.append(r);
  }
  box.replaceChildren(jp, h('p', 'cbb-tr', lang() === 'ru' ? line.ru : line.en));
  box.hidden = false;
  box.classList.remove('pop'); void box.offsetWidth; box.classList.add('pop');
}

// ── a game with a friend (the server's room) ──
export function onChessRoom(room: ChessRoomView) {
  const fresh = mode.kind !== 'friend' || mode.room.id !== room.id;
  mode = { kind: 'friend', room };
  if (room.status === 'waiting') {
    ui.show('chess');
    showSetup('friend');
    $('chessWait').hidden = false;
    $('chessWaitCode').textContent = room.code;
    return;
  }
  mine = room.you ?? 'w';
  if (fresh || $('chessGame').hidden) {
    ui.show('chess');
    begin(room.base, room.inc);
    audio.sfx.go();
  }
  // bring the board to the server's moves (ours was played already; theirs comes now)
  const r = replay(room.moves);
  if (!r.ok) { ui.toast(tr('The game got out of step - reloading it')); }
  const had = moves.length;
  pos = r.positions[r.positions.length - 1];
  moves = r.moves; sans = r.moves.map((m, i) => moveSan(r.positions[i], m, true)); history = r.positions.slice(0, -1).map(posKey);
  if (moves.length > had && moveUci(moves[moves.length - 1]) !== pending) { const m = moves[moves.length - 1]; if (m.captured) audio.sfx.impact(); else audio.sfx.flip(); if (pos.turn === mine) audio.sfx.yourTurn(); }
  pending = '';
  clocks = { ...room.clocks }; base = room.base; inc = room.inc; turnSince = room.turnSince; clockSkew = room.now - Date.now();
  drawPlayers();
  $('chessDrawNote').hidden = !room.drawOffer || room.drawOffer === mine || room.status !== 'playing';
  $('chessDrawNote').onclick = () => send({ type: 'chess_draw', id: room.id, offer: true });
  if (room.status === 'over' && room.result && !over) finish(room.result.winner, room.result.reason);
  else draw();
}
export function onChessError(error: string) { ui.toast(tr(error), 3500); if (mode.kind === 'friend') send({ type: 'chess_sync', id: mode.room.id }); }
/** back online: the friend game picks up where it was */
export function chessReconnected() { if (mode.kind === 'friend' && !over) send({ type: 'chess_sync', id: mode.room.id }); }
