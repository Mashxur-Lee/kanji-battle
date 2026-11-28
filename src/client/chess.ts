// 0.9.9.9.9.6: Kanji chess — chess where every piece is its kanji (王 后 城 僧 馬 兵). Play one of the four bot wizards
// (the Goblin 200, the Knight 400, the Witch 800, the Wizard 1600): they sit beside the board and talk about your
// moves in Japanese (furigana over every kanji, each one tappable for its meaning, the translation under it) — like a
// chess site's coach. Or play a friend by a room code, with clocks kept by the server.
// Round 4: a friend game has a lobby like the private rooms' (both players, Ready, the host sets the clock, a chat
// that goes on into the game); a friend can be challenged from their profile; every game is kept in Match history →
// Chess and can be watched again; the pieces taken and who is ahead; how long each move took; pieces shaped like
// chess pieces; their own sounds; the wizards speak their lines in their own voices, with a face to go with them.
import { toFen, BOTS, botMove, colorOf, inCheck, judgeMove, kindOf, legalMoves, makeMove, moveSan, moveUci, outcome, parseFen, PIECE_KANJI, PIECE_NAME, PIECE_READING, posKey, replay, sqName, START_FEN, type BotId, type Color, type Kind, type Move, type Position } from '../shared/chess';
import { LINES, parseLine, voiceClip, type Moment } from '../shared/chesslines';
import type { ChessRoomView, ClientMessage } from '../shared/protocol';
import { api, type ChessGame } from './api';
import * as audio from './audio';
import { miniPiece, pieceSvg } from './chesspieces';
import { lang, tr } from './i18n';
import { showKanji, wordsTappable } from './kanjihelp';
import * as ui from './ui';
import { playClip, speakAs } from './voice';
import { dragonSvg, heroSvg } from './wizard';
import { preloadPieces } from './chesspieces';
/** a bot's portrait (round 5: the Dragon is the boss's own) */
const botPic = (id: BotId) => (id === 'dragon' ? dragonSvg() : heroSvg(id, 'opp'));

const $ = ui.$;
const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = text;
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};

// ── the game in play ──
type Mode = { kind: 'bot'; bot: BotId } | { kind: 'friend'; room: ChessRoomView };
let mode: Mode = { kind: 'bot', bot: 'goblin' };
let mine: Color = 'w';
let pos: Position = parseFen(START_FEN);
let moves: Move[] = [];
let sans: string[] = [];
let times: number[] = []; // (round 4) how long each move took, in ms
let history: string[] = []; // position keys, for repetition
let selected = -1;
let over: { winner: Color | null; reason: string } | null = null;
let thinking = false;
let clocks = { w: 0, b: 0 }, base = 0, inc = 0, turnSince = 0, clockSkew = 0;
let moveSince = 0; // (round 4) when the side to move began thinking (a bot game: for the move times)
let clockTimer = 0;
let send: (m: ClientMessage) => void = () => {};
let pendingPromo: Move[] | null = null;
let saved = false; // (round 4) this bot game is in your history already

// ── setup ──
const TIMES: Array<[string, number, number]> = [['No clock', 0, 0], ['3 + 2', 180_000, 2000], ['5 + 0', 300_000, 0], ['10 + 0', 600_000, 0], ['15 + 10', 900_000, 10_000]];
let pickBot: BotId = 'goblin', pickColor: 'w' | 'b' | 'r' = 'r', pickTime = 0;
const VOICE_KEY = 'kb:chessVoice';
let voiceOn = (() => { try { return localStorage.getItem(VOICE_KEY) !== 'off'; } catch { return true; } })();

export function initChess(sender: (m: ClientMessage) => void) {
  send = sender;
  $('chessBack').onclick = () => {
    if (spectating) return stopSpectating();
    if (!$('chessGame').hidden && !over && moves.length) { void leaveGame(); return; }
    ui.show('games');
  };
  $('chessStart').onclick = () => startBot();
  // (round 5) a friend game: a room of the private game, or the online queue (main.ts does both)
  $('chessCreate').onclick = () => dispatchEvent(new CustomEvent('kw:room', { detail: 'chess' }));
  $('chessQueue').onclick = () => dispatchEvent(new CustomEvent('kw:queue', { detail: 'chess' }));
  $('chessFlip').onclick = () => { flipped = !flipped; draw(); };
  $('chessResign').onclick = () => void resign();
  $('chessDraw').onclick = () => { if (mode.kind === 'friend') send({ type: 'chess_draw', id: mode.room.id, offer: true }); };
  $('chessUndo').onclick = () => takeBack();
  $('chessVoice').onclick = () => { voiceOn = !voiceOn; try { localStorage.setItem(VOICE_KEY, voiceOn ? 'on' : 'off'); } catch { /* private mode */ } drawVoice(); };
  $('chessAgain').onclick = () => {
    $('chessOver').hidden = true;
    if (spectating) return stopSpectating();
    if (mode.kind === 'bot') { $('chessAgain').textContent = tr('Play again'); return startBot(); }
    // (round 5) a room's game: back to its lobby (Ready there for another)
    if (mode.room.bound) { mode = { kind: 'bot', bot: pickBot }; dispatchEvent(new Event('kw:room-lobby')); return; }
    send({ type: 'chess_again', id: mode.room.id });
  };
  $('chessToSetup').onclick = () => {
    $('chessOver').hidden = true;
    if (spectating) return stopSpectating();
    if (mode.kind === 'friend' && mode.room.bound) { mode = { kind: 'bot', bot: pickBot }; send({ type: 'leave' }); showSetup('friend'); return; }
    if (mode.kind === 'friend') { send({ type: 'chess_leave', id: mode.room.id }); mode = { kind: 'bot', bot: pickBot }; showSetup('friend'); } else showSetup('bot');
  };
  for (const b of document.querySelectorAll<HTMLElement>('#chessTabs [data-tab]')) b.onclick = () => showSetup(b.dataset.tab as 'bot' | 'friend');
  // the lobby
  // (round 5: the lobby is the private game's; the chat beside the board stays)
  for (const id of ['chessChatForm']) {
    const f = $<HTMLFormElement>(id);
    f.onsubmit = (e) => {
      e.preventDefault();
      const input = f.querySelector('input')!;
      const text = input.value.trim();
      if (!text || mode.kind !== 'friend') return;
      send({ type: 'chess_chat', id: mode.room.id, text: text.slice(0, 200) });
      input.value = '';
    };
  }
  // the pieces, each tappable: its kanji and what it is
  $('chessLegend').replaceChildren(...(['k', 'q', 'r', 'b', 'n', 'p'] as Kind[]).map((k) => {
    const b = h('button', 'cl-piece', undefined, { type: 'button' });
    const r = h('ruby'); r.append(PIECE_KANJI[k], h('rt', '', PIECE_READING[k]));
    const pic = h('span', 'cl-shape'); pic.innerHTML = pieceSvg('w', k);
    b.append(pic, r, h('span', '', tr(PIECE_NAME[k])));
    b.onclick = () => void showKanji(PIECE_KANJI[k], b);
    return b;
  }));
  drawSetup();
  drawVoice();
  preloadPieces(); // (round 5: the pieces are pictures now)
  audio.preloadChessSounds(); // (0.9.9.9.9.7: the wooden recordings)
}

let myId = '';
/** the signed-in player's id (the lobby's Ready button and the chat need it) */
export function setChessUser(id: string) { myId = id; }
/**
 * 0.9.9.9.9.7 (round 3): watching a friend's game — the board from their side, nothing to move, no resign or draw,
 * the chat to read. '' = not watching (Back stops it)
 */
let spectating = '', spectName = '';
export function chessSpectate(friendId: string, name: string) {
  const was = spectating;
  spectating = friendId; spectName = name;
  if (!friendId && was) { $('chessGame').classList.remove('spectate'); if (mode.kind === 'friend') mode = { kind: 'bot', bot: pickBot }; if (ui.currentScreen() === 'chess') ui.show('games'); }
}
const stopSpectating = () => { send({ type: 'unwatch' }); chessSpectate('', ''); };
const meId = () => myId;

export function openChess() {
  ui.show('chess');
  if ($('chessGame').hidden) showSetup('bot');
}
/** (round 4) a friend asks you to a game */
export async function onChessInvite(from: { id: string; name: string }, code: string) {
  audio.sfx.yourTurn();
  const busy = ['prep', 'battle', 'deck'].includes(ui.currentScreen() ?? '');
  if (busy) { ui.toast(`${from.name}: ${tr('Kanji chess')} - ${tr('Your code')} ${code}`, 6000); return; }
  if (!$('chessGame').hidden && !over && moves.length) { ui.toast(`${from.name}: ${tr('Kanji chess')} - ${tr('Your code')} ${code}`, 6000); return; }
  if (!(await ui.confirmBox('A game of Kanji chess', `${from.name} ${tr('asks you to a game of Kanji chess.')}`, 'Join', 'Not now', false))) return;
  ui.show('chess');
  send({ type: 'chess_join', code });
}
function showSetup(tab: 'bot' | 'friend') {
  $('chessSetup').hidden = false; $('chessGame').hidden = true;
  for (const b of document.querySelectorAll<HTMLElement>('#chessTabs [data-tab]')) b.setAttribute('aria-selected', String(b.dataset.tab === tab));
  $('chessBotSetup').hidden = tab !== 'bot'; $('chessFriendSetup').hidden = tab !== 'friend';
  drawSetup();
}
function seg(box: string, items: Array<[string, string]>, on: string, set: ((v: string) => void) | null) {
  $(box).replaceChildren(...items.map(([v, label]) => {
    const b = h('button', `cs-opt${v === on ? ' on' : ''}`, tr(label), { type: 'button', 'aria-pressed': String(v === on) }) as HTMLButtonElement;
    if (set) b.onclick = () => set(v); else b.disabled = v !== on;
    return b;
  }));
}
function drawSetup() {
  $('chessBots').replaceChildren(...BOTS.map((b) => {
    const card = h('button', `cb-bot cb-${b.id}${b.id === pickBot ? ' on' : ''}`, undefined, { type: 'button', 'aria-pressed': String(b.id === pickBot) });
    const pic = h('span', 'cb-pic'); pic.innerHTML = botPic(b.id);
    const name = h('span', 'cb-name');
    const r = h('ruby', '', undefined, { lang: 'ja' }); r.append(b.jp, h('rt', '', b.reading));
    name.append(h('b', '', tr(b.name)), r);
    card.append(pic, name, h('span', 'cb-elo', String(b.elo)));
    card.onclick = () => { pickBot = b.id; drawSetup(); };
    return card;
  }));
  seg('chessColor', [['w', 'White'], ['r', 'Random'], ['b', 'Black']], pickColor, (v) => { pickColor = v as 'w' | 'b' | 'r'; drawSetup(); });
  seg('chessTime', TIMES.map(([l], i) => [String(i), l] as [string, string]), String(pickTime), (v) => { pickTime = Number(v); drawSetup(); });
}
function drawVoice() {
  const b = $('chessVoice');
  b.textContent = tr(voiceOn ? 'Voice on' : 'Voice off');
  b.setAttribute('aria-pressed', String(voiceOn));
}

// ── a game against a bot ──
function startBot() {
  mode = { kind: 'bot', bot: pickBot };
  mine = pickColor === 'r' ? (Math.random() < 0.5 ? 'w' : 'b') : pickColor;
  const [, b, i] = TIMES[pickTime];
  begin(b, i);
  say('hello');
  audio.sfx.chessStart();
  if (pos.turn !== mine) botTurn();
}
function begin(b: number, i: number) {
  saidThisGame.clear(); lastRemark = 0;
  pos = parseFen(START_FEN); moves = []; sans = []; times = []; history = []; selected = -1; over = null; thinking = false; pendingPromo = null; saved = false;
  base = b; inc = i; clocks = { w: b, b: b }; turnSince = Date.now(); moveSince = Date.now(); clockSkew = 0;
  flipped = mine === 'b';
  $('chessSetup').hidden = true; $('chessGame').hidden = false; $('chessOver').hidden = true; $('chessPromo').hidden = true;
  const friend = mode.kind === 'friend';
  $('chessUndo').hidden = friend; $('chessDraw').hidden = !friend; $('chessVoice').hidden = friend;
  $('chessChatBox').hidden = !friend;
  $('chessGame').classList.toggle('vs-friend', friend);
  $('chessGame').classList.toggle('spectate', !!spectating); // (round 3: watching — no resign, draw or chat box to type in)
  $('chessResign').hidden = !!spectating; if (spectating) $('chessDraw').hidden = true;
  $('chessBubble').hidden = true;
  setMood('calm');
  drawPlayers();
  draw();
  startClock();
}
function drawPlayers() {
  const opp = $('chessOpp'), me = $('chessMe');
  if (mode.kind === 'bot') {
    const b = BOTS.find((x) => x.id === (mode as { bot: BotId }).bot)!;
    opp.querySelector('.cp-pic')!.innerHTML = botPic(b.id);
    (opp.querySelector('.cp-pic') as HTMLElement).dataset.bot = b.id; // (0.9.9.9.9.7 round 2: the Dragon is framed its own way)
    const name = opp.querySelector('.cp-name')!;
    const r = h('ruby', '', undefined, { lang: 'ja' }); r.append(b.jp, h('rt', '', b.reading));
    name.replaceChildren(h('b', '', tr(b.name)), r, h('span', 'cp-elo', String(b.elo)));
  } else {
    const r = mode.room, them = mine === 'w' ? r.black : r.white;
    opp.querySelector('.cp-pic')!.innerHTML = heroSvg('wizard', 'opp');
    (opp.querySelector('.cp-pic') as HTMLElement).dataset.bot = '';
    opp.querySelector('.cp-name')!.replaceChildren(h('b', '', them?.name ?? tr('Waiting…')), h('span', 'cp-side', tr(mine === 'w' ? 'Black' : 'White')));
  }
  const meName = spectating && mode.kind === 'friend' ? (mine === 'w' ? mode.room.white : mode.room.black)?.name ?? spectName : '';
  me.querySelector('.cp-name')!.replaceChildren(h('b', '', meName || tr('You')), h('span', 'cp-side', tr(mine === 'w' ? 'White' : 'Black')));
}
function botTurn() {
  if (mode.kind !== 'bot' || over || pos.turn === mine) return;
  thinking = true;
  $('chessGame').classList.add('thinking');
  const bot = mode.bot;
  // (a moment to see your move land, and the bot "thinks" a little — longer for the stronger ones)
  const wait = { goblin: 500, knight: 650, witch: 800, wizard: 900, dragon: 300 }[bot] + Math.random() * 500;
  const at = pos;
  window.setTimeout(async () => {
    if (over || mode.kind !== 'bot' || pos.turn === mine) { thinking = false; return; }
    const m = await thinkOff(at, bot);
    if (over || mode.kind !== 'bot' || pos !== at) { thinking = false; return; } // (taken back, or left, meanwhile)
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

/** (round 5) the bot's move, worked out in the worker (the page keeps running); on the page itself if there is none */
let worker: Worker | null | undefined;
let asked = 0;
const answers = new Map<number, (uci: string | null) => void>();
function thinkOff(p: Position, bot: BotId): Promise<Move | null> {
  if (worker === undefined) {
    try { worker = new Worker('chessworker.js'); worker.onmessage = (e) => { answers.get(e.data.id)?.(e.data.uci); answers.delete(e.data.id); }; worker.onerror = () => { worker = null; for (const f of answers.values()) f(null); answers.clear(); }; }
    catch { worker = null; }
  }
  if (!worker) return Promise.resolve(botMove(p, bot));
  const id = ++asked;
  return new Promise((done) => {
    answers.set(id, (uci) => { const m = uci ? legalMoves(p).find((x) => moveUci(x) === uci) ?? null : null; done(m ?? botMove(p, bot === 'dragon' ? 'wizard' : bot)); });
    worker!.postMessage({ id, fen: toFen(p), bot });
  });
}

// ── moves ──
function moveSound(m: Move, after: Position) {
  const o = outcome(after);
  if (o.over && o.reason === 'checkmate') audio.sfx.chessMate();
  else if (inCheck(after)) audio.sfx.chessCheck();
  else if (m.promo) audio.sfx.chessPromote(); // (round 7)
  else if (m.captured) audio.sfx.chessCapture();
  else if (m.castle) audio.sfx.chessCastle(); // (round 7)
  else audio.sfx.chessMove();
}
function play(m: Move) {
  const before = pos;
  history.push(posKey(pos));
  sans.push(moveSan(pos, m, true));
  times.push(Date.now() - moveSince); moveSince = Date.now();
  if (base && !over) { clocks[pos.turn] = clocks[pos.turn] - (Date.now() - turnSince) + inc; turnSince = Date.now(); }
  pos = makeMove(pos, m);
  moves.push(m);
  selected = -1;
  moveSound(m, pos);
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
  const all = $('chessMoves').querySelectorAll<HTMLElement>('.cm-mv');
  const last = all[all.length - 1];
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
    const b = h('button', `cpr-btn piece ${mine}`, undefined, { type: 'button', title: tr(PIECE_NAME[k]) });
    b.innerHTML = pieceSvg(mine, k);
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
  times = times.slice(0, moves.length); moveSince = Date.now();
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
  saveBotGame();
  stopClock();
  const tab = mode.kind === 'friend' ? 'friend' : 'bot';
  mode = { kind: 'bot', bot: pickBot };
  showSetup(tab);
  ui.show('games');
}
const REASON: Record<string, string> = { checkmate: 'by checkmate', stalemate: 'stalemate', fifty: 'by the 50-move rule', repetition: 'by repetition', material: 'too little to mate', time: 'on time', resigned: 'by resignation', agreed: 'by agreement', left: 'they left' };
function finish(winner: Color | null, reason: string) {
  over = { winner, reason };
  stopClock();
  draw();
  const won = winner === mine, drawn = winner === null;
  if (spectating) { // (round 3: watching — who won, no fanfare; the button says Back)
    $('chessOverTitle').textContent = tr(drawn ? 'Draw' : winner === 'w' ? 'White wins' : 'Black wins');
    $('chessOverTitle').className = 'draw';
    $('chessOverWhy').textContent = tr(REASON[reason] ?? reason);
    $('chessAgain').textContent = tr('Back');
    $('chessToSetup').hidden = true;
    window.setTimeout(() => { if (over) $('chessOver').hidden = false; }, 900);
    return;
  }
  $('chessToSetup').hidden = false;
  if (mode.kind === 'bot') { say(drawn ? 'draw' : won ? 'botLoses' : 'botWins'); saveBotGame(); }
  if (reason !== 'checkmate') { if (won) audio.sfx.win(); else if (!drawn) audio.sfx.lose(); }
  else window.setTimeout(() => { if (won) audio.sfx.win(); else audio.sfx.lose(); }, 900);
  $('chessOverTitle').textContent = tr(drawn ? 'Draw' : won ? 'You won!' : 'You lost');
  $('chessOverTitle').className = drawn ? 'draw' : won ? 'win' : 'loss';
  $('chessOverWhy').textContent = tr(REASON[reason] ?? reason);
  window.setTimeout(() => { if (over) $('chessOver').hidden = false; }, 900);
}
/** (round 4) a game against a wizard goes into Match history → Chess (friend games the server keeps itself) */
function saveBotGame() {
  if (mode.kind !== 'bot' || saved || moves.length < 2 || !over) return;
  saved = true;
  const won = over.winner === mine;
  void api.saveChessGame({ bot: mode.bot, color: mine, moves: moves.map(moveUci), times, base, inc, reason: over.reason, result: over.winner === null ? 'draw' : won ? 'win' : 'loss' }).catch(() => { /* offline: not kept */ });
}

// ── the board ──
let flipped = false;
/** the 64 squares of a position (the game's board, and a replay's) */
function boardCells(p: Position, o: { flipped: boolean; last?: Move; selected?: number; legal?: Move[]; onTap?: (i: number) => void }) {
  const checked = inCheck(p) ? p.board.indexOf(p.turn === 'w' ? 'K' : 'k') : -1;
  const cells: HTMLElement[] = [];
  for (let n = 0; n < 64; n++) {
    const i = o.flipped ? 63 - n : n;
    const r = Math.floor(i / 8), f = i % 8;
    const x = p.board[i];
    const sq = h(o.onTap ? 'button' : 'span', `csq ${(r + f) % 2 ? 'dark' : 'light'}`, undefined, { 'data-sq': String(i), 'aria-label': `${sqName(i)}${x ? ` ${tr(colorOf(x) === 'w' ? 'white' : 'black')} ${tr(PIECE_NAME[kindOf(x)])}` : ''}` });
    if (o.onTap) sq.setAttribute('type', 'button');
    if (o.last && (i === o.last.from || i === o.last.to)) sq.classList.add('last');
    if (i === o.selected) sq.classList.add('sel');
    if (i === checked) sq.classList.add('check');
    const target = o.legal?.find((m) => m.to === i);
    if (target) sq.classList.add(target.captured ? 'cap' : 'dot');
    if (x) { const pc = h('span', `piece ${colorOf(x)} k-${kindOf(x)}`, undefined, { lang: 'ja' }); pc.innerHTML = pieceSvg(colorOf(x) as Color, kindOf(x)); sq.append(pc); }
    // the coordinates on the edge
    if (n % 8 === 0) sq.append(h('i', 'crank', String(8 - r)));
    if (n >= 56) sq.append(h('i', 'cfile', 'abcdefgh'[f]));
    if (o.onTap) { const tap = o.onTap; sq.onclick = () => tap(i); }
    cells.push(sq);
  }
  return cells;
}
const VALUE: Record<Kind, number> = { k: 0, q: 9, r: 5, b: 3, n: 3, p: 1 };
const START_COUNT: Record<Kind, number> = { k: 1, q: 1, r: 2, b: 2, n: 2, p: 8 };
/** (round 4) the pieces each side has taken, and who is ahead in points (pawn 1, knight and bishop 3, rook 5, queen 9) */
export function material(p: Position) {
  const have = { w: { k: 0, q: 0, r: 0, b: 0, n: 0, p: 0 }, b: { k: 0, q: 0, r: 0, b: 0, n: 0, p: 0 } } as Record<Color, Record<Kind, number>>;
  let score = 0;
  for (const x of p.board) if (x) { const c = colorOf(x) as Color; have[c][kindOf(x)]++; score += (c === 'w' ? 1 : -1) * VALUE[kindOf(x)]; }
  const took = (c: Color): Kind[] => {
    const them: Color = c === 'w' ? 'b' : 'w';
    const out: Kind[] = [];
    for (const k of ['q', 'r', 'b', 'n', 'p'] as Kind[]) for (let i = have[them][k]; i < START_COUNT[k]; i++) out.push(k);
    return out;
  };
  return { w: took('w'), b: took('b'), lead: score };
}
function drawMaterial(el: HTMLElement, c: Color, m: ReturnType<typeof material>) {
  const them: Color = c === 'w' ? 'b' : 'w';
  el.innerHTML = m[c].map((k) => miniPiece(them, k)).join('');
  const lead = c === 'w' ? m.lead : -m.lead;
  if (lead > 0) el.append(h('b', 'cp-lead', `+${lead}`));
}
const secs = (ms: number) => (ms < 10_000 ? `${(ms / 1000).toFixed(1)}s` : ms < 60_000 ? `${Math.round(ms / 1000)}s` : `${Math.floor(ms / 60_000)}:${String(Math.round((ms % 60_000) / 1000)).padStart(2, '0')}`);
/** the move list: 1. 兵e4 (2.1s) 兵e5 (0.8s) … */
function moveList(list: HTMLElement, s: string[], t: number[], at = -1, onPick?: (i: number) => void) {
  list.replaceChildren(...Array.from({ length: Math.ceil(s.length / 2) }, (_, k) => {
    const row = h('li');
    row.append(h('span', 'cm-n', `${k + 1}.`));
    for (const j of [k * 2, k * 2 + 1]) {
      const cell = h(onPick ? 'button' : 'span', `cm-mv cm-${j % 2 ? 'b' : 'w'}${j === at ? ' at' : ''}`);
      if (onPick) { cell.setAttribute('type', 'button'); cell.onclick = () => onPick(j); }
      if (s[j]) { cell.append(h('span', 'cm-san', s[j])); if (t[j] !== undefined) cell.append(h('small', 'cm-t', secs(t[j]))); }
      row.append(cell);
    }
    return row;
  }));
}
function draw() {
  const legal = selected >= 0 ? legalMoves(pos).filter((m) => m.from === selected) : [];
  $('chessBoard').replaceChildren(...boardCells(pos, { flipped, last: moves[moves.length - 1], selected, legal, onTap: onSquare }));
  const list = $('chessMoves');
  moveList(list, sans, times);
  list.scrollTop = list.scrollHeight;
  const m = material(pos);
  drawMaterial($('chessOppMat'), mine === 'w' ? 'b' : 'w', m);
  drawMaterial($('chessMeMat'), mine, m);
  $('chessTurn').textContent = over ? '' : spectating ? tr(pos.turn === 'w' ? 'White to move' : 'Black to move') : tr(pos.turn === mine ? 'Your move' : mode.kind === 'bot' ? 'Thinking…' : 'Their move');
  $('chessOpp').classList.toggle('to-move', !over && pos.turn !== mine);
  $('chessMe').classList.toggle('to-move', !over && pos.turn === mine);
  drawClocks();
}
function onSquare(i: number) {
  if (over || thinking || pos.turn !== mine || spectating) return;
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

// ── what the bot says, how it says it, and its face ──
/** each wizard's voice: [rate, pitch] — the Goblin quick and squeaky, the Knight slow and deep, the Witch sly, the Wizard old and grave */
const VOICES: Record<BotId, [number, number]> = { goblin: [1.25, 1.8], knight: [0.88, 0.7], witch: [1.02, 1.35], wizard: [0.82, 0.5], dragon: [0.72, 0.2] };
/** the face that goes with a moment, and its kanji (a seal by the portrait) */
const MOOD: Record<string, [string, string]> = {
  hello: ['happy', '喜'], best: ['amazed', '驚'], good: ['happy', '良'], inaccuracy: ['smug', '笑'], mistake: ['smug', '笑'], blunder: ['laugh', '笑'],
  botWins: ['laugh', '勝'], botLoses: ['sad', '負'], draw: ['calm', '和'], check: ['fierce', '攻'], take: ['fierce', '取'], castle: ['calm', '守'], promote: ['amazed', '驚'],
};
let moodTimer = 0;
function setMood(mood: string, mark = '') {
  const pic = $('chessOpp').querySelector<HTMLElement>('.cp-pic')!;
  pic.dataset.mood = mood;
  pic.classList.remove('mood-go'); void pic.offsetWidth; pic.classList.add('mood-go');
  const seal = $('chessMood');
  seal.textContent = mark; seal.hidden = !mark;
  seal.classList.remove('pop'); void seal.offsetWidth; seal.classList.add('pop');
  clearTimeout(moodTimer);
  if (mood !== 'calm') moodTimer = window.setTimeout(() => { pic.dataset.mood = 'calm'; seal.hidden = true; }, 3200);
}
// 0.9.9.9.9.6 (round 7): each line is said once a game (the owner: "they keep repeating the same voice line again and
// again"); when a moment's lines are used up the wizard keeps quiet, and between remarks there's a short pause
const saidThisGame = new Set<string>();
let lastRemark = 0;
const ALWAYS: Moment[] = ['hello', 'botWins', 'botLoses', 'draw'];
function say(moment: Moment) {
  if (mode.kind !== 'bot') return;
  if (!ALWAYS.includes(moment) && moment !== 'check' && Date.now() - lastRemark < 9000) return;
  const fresh = (LINES[mode.bot][moment] ?? []).filter((l) => !saidThisGame.has(l.jp));
  const line = fresh.length ? fresh[Math.floor(Math.random() * fresh.length)] : null;
  if (!line) return;
  saidThisGame.add(line.jp);
  lastRemark = Date.now();
  const box = $('chessBubble');
  const jp = h('p', 'cbb-jp', undefined, { lang: 'ja' });
  const parts = parseLine(line.jp);
  for (const part of parts) {
    if (!part.reading) { jp.append(part.text); continue; }
    // the word with its reading over it — tapped, the whole word's meaning (round 7: it split 勝負 into 勝 and 負), and its
    // kanji one tap further
    const r = h('ruby');
    r.append(part.text);
    r.append(h('rt', '', part.reading));
    jp.append(r);
  }
  box.replaceChildren(jp, h('p', 'cbb-tr', lang() === 'ru' ? line.ru : line.en));
  wordsTappable(jp);
  box.hidden = false;
  box.classList.remove('pop'); void box.offsetWidth; box.classList.add('pop');
  const [mood, mark] = MOOD[moment] ?? ['calm', ''];
  setMood(mood, mark);
  // said aloud — the readings, so the voice can't misread a kanji
  // (0.9.9.9.9.6 round 6: in their own recorded voice; the device's voice if the recording can't play)
  if (voiceOn) { const bot = mode.bot; const [rate, pitch] = VOICES[bot]; playClip(voiceClip(bot, line.jp), () => speakAs(parts.map((x) => x.reading ?? x.text).join(''), rate, pitch)); }
}

// ── a game with a friend (the server's room) ──
function chatList(list: HTMLElement, room: ChessRoomView) {
  const near = list.scrollHeight - list.scrollTop - list.clientHeight < 40;
  list.replaceChildren(...room.chat.map((c) => {
    const li = h('li', c.from ? (c.from === meId() ? 'cc-me' : '') : 'cc-sys');
    if (c.from) li.append(h('b', '', c.name));
    li.append(h('span', '', c.from ? c.text : `${c.name} ${tr(c.text)}`));
    return li;
  }));
  if (near || list.dataset.n !== String(room.chat.length)) list.scrollTop = list.scrollHeight;
  list.dataset.n = String(room.chat.length);
}
let chatSeen = 0;
export function onChessRoom(room: ChessRoomView) {
  const fresh = mode.kind !== 'friend' || mode.room.id !== room.id;
  const prev = mode.kind === 'friend' ? mode.room : null;
  mode = { kind: 'friend', room };
  // a new chat line from them: a soft tick
  if (!fresh && room.chat.length > chatSeen && room.chat[room.chat.length - 1].from && room.chat[room.chat.length - 1].from !== meId()) audio.sfx.tick();
  chatSeen = room.chat.length;
  if (room.status === 'waiting' || room.status === 'lobby') return; // (round 5: games come from the private game's rooms)
  void prev;
  mine = room.you ?? (spectating && room.black?.id === spectating ? 'b' : 'w'); // (round 3: watching — from your friend's side)
  if (fresh || $('chessGame').hidden || (room.status === 'playing' && over && room.moves.length === 0)) {
    ui.show('chess');
    begin(room.base, room.inc);
    audio.sfx.chessStart();
  }
  chatList($('chessChat'), room);
  // bring the board to the server's moves (ours was played already; theirs comes now)
  const r = replay(room.moves);
  if (!r.ok) { ui.toast(tr('The game got out of step - reloading it')); }
  const had = moves.length;
  pos = r.positions[r.positions.length - 1];
  moves = r.moves; sans = r.moves.map((m, i) => moveSan(r.positions[i], m, true)); history = r.positions.slice(0, -1).map(posKey);
  times = room.times.slice(0, moves.length);
  if (moves.length > had && moveUci(moves[moves.length - 1]) !== pending) { moveSound(moves[moves.length - 1], pos); if (pos.turn === mine && !inCheck(pos) && !spectating) audio.sfx.yourTurn(); }
  pending = '';
  clocks = { ...room.clocks }; base = room.base; inc = room.inc; turnSince = room.turnSince; clockSkew = room.now - Date.now();
  drawPlayers();
  $('chessDrawNote').hidden = !room.drawOffer || room.drawOffer === mine || room.status !== 'playing' || !!spectating; // (round 3: not for watchers)
  $('chessDrawNote').onclick = () => send({ type: 'chess_draw', id: room.id, offer: true });
  $('chessAgain').textContent = tr(room.bound ? 'Back to lobby' : 'Play again');
  $('chessToSetup').textContent = tr(room.bound ? 'Leave the room' : 'Change the game');
  if (room.status === 'over' && room.result && !over) finish(room.result.winner, room.result.reason);
  else draw();
  const ch = room.ratings?.[meId()];
  if (ch && over) { const d = ch.after - ch.before; $('chessOverWhy').textContent = `${tr(REASON[over.reason] ?? over.reason)} · ${tr('Rating')} ${ch.before} → ${ch.after} (${d >= 0 ? '+' : ''}${d})`; }
}
export function onChessError(error: string) {
  ui.toast(tr(error), 3500);
  // (round 4) the room is gone (its host left): back to the friend setup
  if (error === 'The host left the room') { if (mode.kind === 'friend') mode = { kind: 'bot', bot: pickBot }; return; }
  if (mode.kind === 'friend') send({ type: 'chess_sync', id: mode.room.id });
}
/** back online: the friend game picks up where it was */
export function chessReconnected() {
  if (spectating) { if (!over) send({ type: 'watch', userId: spectating }); return; } // (round 3: watching again after a dropped connection)
  if (mode.kind === 'friend' && !over) send({ type: 'chess_sync', id: mode.room.id });
}

// ── (round 4) Match history → Chess: your games, each one to watch again ──
export function showChessHistory(el: HTMLElement, games: ChessGame[] | null) {
  if (!games) { el.replaceChildren(h('p', 'hint', tr('Loading…'))); return; }
  if (!games.length) { el.replaceChildren(h('p', 'hint', tr('No chess games yet - play a wizard or a friend on the Games page.'))); return; }
  // (0.9.9.9.9.7: drawn like a match in Matches — the figure, the mode and who, the result, the date; it was a light card
  // of its own, hard to read)
  el.replaceChildren(...games.map((g) => {
    const b = h('button', `hist-row ${g.result}`, undefined, { type: 'button' });
    const bot = g.vsBot ? BOTS.find((x) => x.id === g.vsBot) : undefined;
    const pic = h('span', 'char-sprite ch-pic'); pic.innerHTML = botPic(bot?.id ?? 'wizard');
    const text = h('span', 'hist-mode-text');
    const name = h('span', 'hist-mode-name', tr('Kanji chess'));
    name.append(h('span', `hist-ranked${g.ranked ? ' on' : ''}`, tr(g.ranked ? 'Ranked' : 'Unranked')));
    text.append(name, h('span', 'hist-vs-line', `vs ${bot ? `${tr(bot.name)} ${bot.elo}` : g.vs} · ${tr(g.color === 'w' ? 'White' : 'Black')} · ${tr(REASON[g.reason] ?? g.reason)} · ${Math.ceil(g.moves.length / 2)} ${tr('moves')}`));
    const mode = h('span', 'hist-mode'); mode.append(ui.modeBadge('chess'), text);
    b.append(pic, mode, h('span', 'hist-result', tr(g.result === 'win' ? 'VICTORY' : g.result === 'loss' ? 'DEFEAT' : 'DRAW')), h('span', 'hist-date', ui.dateTime(g.at)));
    b.onclick = () => openChessReplay(g);
    return b;
  }));
}
/** a kept game, move by move: the board, the moves (with their times), and buttons to step or play it through */
export function openChessReplay(g: ChessGame) {
  const r = replay(g.moves);
  const s = r.moves.map((m, i) => moveSan(r.positions[i], m, true));
  let at = r.moves.length; // the final position first
  let auto = 0;
  const d = $<HTMLDialogElement>('chessReplay');
  // (round 5) the window lives in the chess page, which is hidden when Match history opens it: a modal window in a
  // hidden page is never drawn, yet it still blocks everything else — the app looked frozen. It opens from the body.
  if (d.parentElement !== document.body) document.body.append(d);
  const bot = g.vsBot ? BOTS.find((x) => x.id === g.vsBot) : undefined;
  $('chessReplayTitle').textContent = `${tr('You')} - ${bot ? tr(bot.name) : g.vs}`;
  $('chessReplayRes').textContent = `${tr(g.result === 'win' ? 'You won!' : g.result === 'loss' ? 'You lost' : 'Draw')} · ${tr(REASON[g.reason] ?? g.reason)}`;
  $('chessReplayRes').className = `crp-res ${g.result}`;
  const show = () => {
    const p = r.positions[at];
    $('chessReplayBoard').replaceChildren(...boardCells(p, { flipped: g.color === 'b', last: at > 0 ? r.moves[at - 1] : undefined }));
    const list = $('chessReplayMoves');
    moveList(list, s, g.times, at - 1, (i) => { stop(); at = i + 1; show(); });
    list.querySelector('.at')?.scrollIntoView({ block: 'nearest' });
    $('chessReplayStep').textContent = `${at} / ${r.moves.length}`;
    const m = material(p);
    const top = $('chessReplayOpp'), bottom = $('chessReplayMe');
    drawMaterial(top, g.color === 'w' ? 'b' : 'w', m); drawMaterial(bottom, g.color, m);
  };
  const stop = () => { clearInterval(auto); auto = 0; $('chessReplayPlay').textContent = tr('Play'); };
  const step = (n: number) => { at = Math.max(0, Math.min(r.moves.length, at + n)); show(); if (n !== 0) { const mv = r.moves[at - 1]; if (mv && n === 1) moveSound(mv, r.positions[at]); } };
  $('chessReplayFirst').onclick = () => { stop(); at = 0; show(); };
  $('chessReplayPrev').onclick = () => { stop(); step(-1); };
  $('chessReplayNext').onclick = () => { stop(); step(1); };
  $('chessReplayLast').onclick = () => { stop(); at = r.moves.length; show(); };
  $('chessReplayPlay').onclick = () => {
    if (auto) { stop(); return; }
    if (at >= r.moves.length) at = 0;
    $('chessReplayPlay').textContent = tr('Pause');
    auto = window.setInterval(() => { if (at >= r.moves.length) { stop(); return; } step(1); }, 900);
  };
  $('chessReplayClose').onclick = () => { stop(); d.close(); };
  d.onclose = stop;
  d.onkeydown = (e) => { if (e.key === 'ArrowLeft') { stop(); step(-1); } else if (e.key === 'ArrowRight') { stop(); step(1); } };
  show();
  stop();
  d.showModal();
}
