import { CARD_SPECS, CHARACTER_INFO, DECK_CHARACTERS, type CardColor, type DeckCardView, type DeckEvent, type DeckPlayerView, type DeckView } from '../shared/deck';
import * as audio from './audio';
import * as ui from './ui';
import { heroSvg } from './wizard';

const $ = ui.$;
const COLOR_NAME: Record<CardColor, string> = { lightblue: 'Light blue', blue: 'Blue', yellow: 'Yellow', green: 'Green', red: 'Red' };

function h(tag: string, cls = '', text?: string | number): HTMLElement {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = String(text);
  return el;
}

export interface DeckHooks {
  send: (msg: { type: 'deck_character'; character: string } | { type: 'deck_pick'; cardId: string } | { type: 'deck_play'; cardId: string } | { type: 'deck_ability' }) => void;
  /** It's your turn to write this card: set up the pad/IME. */
  beginWriting: (castId: number, kanji: string) => void;
  stopWriting: () => void;
}

let view: DeckView | null = null;
let hooks: DeckHooks;
let lastCastId = 0;
let writingCastId = 0;
let flashTimer = 0;

export function initDeck(h: DeckHooks) {
  hooks = h;
  $('dkAbility').onclick = () => hooks.send({ type: 'deck_ability' });
}

/** A face-down or face-up card. */
function cardEl(c: DeckCardView, opts: { big?: boolean; button?: boolean; disabled?: boolean } = {}): HTMLElement {
  const spec = CARD_SPECS[c.color];
  const el = h(opts.button ? 'button' : 'div', `dkc c-${c.color}${opts.big ? ' big' : ''}${!c.kanji && !opts.big ? ' back' : ''}`);
  if (opts.button) (el as HTMLButtonElement).disabled = !!opts.disabled;
  el.title = `${COLOR_NAME[c.color]} — ${spec.label}: ${spec.kind === 'attack' ? `${spec.amount} damage` : spec.kind === 'heal' ? `heal ${spec.amount}` : `+${spec.amount} mana`}${spec.cost ? `, costs ${spec.cost} mana` : ''}`;
  if (opts.big) return el;
  el.append(h('span', 'dkc-cost', spec.cost ? `${spec.cost}◆` : 'free'));
  if (c.kanji) {
    const k = h('span', 'dkc-k', c.kanji); k.lang = 'ja';
    const r = h('span', 'dkc-r', c.reading ?? ''); r.lang = 'ja';
    el.append(k, r);
  } else {
    el.append(h('span', 'dkc-lbl', spec.label), h('span', 'dkc-amt', spec.kind === 'attack' ? `${spec.amount}` : spec.kind === 'heal' ? `+${spec.amount}♥` : `+${spec.amount}◆`));
  }
  return el;
}

function playerPanel(el: HTMLElement, p: DeckPlayerView, mine: boolean) {
  const av = h('div', 'dk-av');
  av.innerHTML = p.character ? heroSvg(p.character, mine ? 'me' : 'opp') : '';
  const name = h('div', 'dk-name');
  name.append(h('span', '', mine ? `${p.name} (you)` : p.name));
  if (p.character) name.append(h('span', 'tag', CHARACTER_INFO[p.character].name));
  if (p.abilityActive > 0 && p.character !== 'wizard') name.append(h('span', 'tag', `${p.character === 'goblin' ? 'Frenzy' : CHARACTER_INFO[p.character!].power.split(':')[0]} ×${p.abilityActive}`));
  const hp = h('div', 'hp' + (p.hp / p.maxHp <= 0.25 ? ' low' : ''));
  const hpFill = h('div'); hpFill.style.width = `${(p.hp / p.maxHp) * 100}%`; hp.append(hpFill);
  const mana = h('div', 'manabar');
  const manaFill = h('div'); manaFill.style.width = `${(p.mana / p.maxMana) * 100}%`; mana.append(manaFill);
  const nums = h('div', 'hpnum', `♥ ${p.hp}/${p.maxHp} · ◆ ${p.mana}/${p.maxMana} · ${p.handSize} cards`);
  const counts = h('div', 'dk-counts');
  for (const col of Object.keys(p.handCounts) as CardColor[]) {
    if (!p.handCounts[col]) continue;
    const cc = h('span', 'cc');
    const dot = h('span', `dot dkc c-${col}`); dot.style.width = '12px'; dot.style.height = '16px'; dot.style.padding = '0';
    cc.append(dot, `×${p.handCounts[col]}`);
    counts.append(cc);
  }
  el.replaceChildren(av, name, hp, mana, nums, counts);
}

/** Whole-screen render from the server's view of the duel. */
export function renderDeck(v: DeckView) {
  view = v;
  const me = v.players.find((p) => p.id === v.you)!;
  const opp = v.players.find((p) => p.id !== v.you)!;
  ui.show('deck');
  playerPanel($('dkMe'), me, true);
  playerPanel($('dkOpp'), opp, false);
  const overlay = $('dkOverlay');

  if (v.phase === 'characters') return renderCharacters(v, me, opp);
  if (v.phase === 'draft') return renderDraft(v, me);
  overlay.hidden = true;

  // clocks & banner
  if (v.phase === 'overtime') {
    ui.stopCountdown('dkMatch');
    $('dkClock').textContent = `OVERTIME · ${v.overtimeLeft} cards`;
  } else {
    ui.countdown('dkMatch', v.matchLeftMs, (left) => ($('dkClock').textContent = clock(left)));
  }
  const banner = $('dkBanner');
  const myTurn = v.turn?.active === v.you;
  banner.classList.toggle('mine', myTurn || v.phase === 'overtime');
  const deadline = v.casting?.deadlineMs ?? v.turn?.deadlineMs ?? 0;
  const label = v.phase === 'overtime'
    ? 'Overtime! First to write it uses the card'
    : myTurn ? (v.casting ? 'Write the kanji!' : `Your turn — pick a card${v.turn!.castsLeft > 1 ? ' (Frenzy: 2 cards)' : ''}`) : `${opp.name}'s turn`;
  ui.countdown('dkTurn', deadline, (left) => (banner.textContent = `${label} · ${Math.ceil(left / 1000)}s`));

  // hands
  const canPlay = myTurn && !v.casting;
  $('dkHand').replaceChildren(...v.hand.map((c) => {
    const el = cardEl(c, { button: true, disabled: !canPlay || CARD_SPECS[c.color].cost > me.mana });
    el.onclick = () => { audio.sfx.flip(); hooks.send({ type: 'deck_play', cardId: c.cardId }); };
    return el;
  }));
  $('dkOppHand').replaceChildren(...Array.from({ length: opp.handSize }, () => h('div', 'dkc back face-down'))); // hidden: just backs

  // ability button (bottom left)
  const ab = $<HTMLButtonElement>('dkAbility');
  const ch = me.character;
  ab.innerHTML = ch ? heroSvg(ch, 'me') : '';
  ab.append(h('span', 'ab-name', ch ? (CHARACTER_INFO[ch].passive ? 'Passive' : me.abilityUsed ? 'Used' : 'Power') : ''));
  ab.title = ch ? CHARACTER_INFO[ch].power : '';
  ab.classList.toggle('passive', !!ch && !!CHARACTER_INFO[ch].passive);
  ab.classList.toggle('active', me.abilityActive > 0);
  ab.disabled = !ch || !!CHARACTER_INFO[ch].passive || me.abilityUsed || !myTurn || !!v.casting;

  // the card being cast
  renderCast(v);
}

function renderCast(v: DeckView) {
  const box = $('dkCast');
  const c = v.casting;
  if (!c) {
    box.replaceChildren();
    if (writingCastId) { hooks.stopWriting(); writingCastId = 0; }
    $('dkFeedback').replaceChildren();
    return;
  }
  if (c.castId !== lastCastId) {
    lastCastId = c.castId;
    const card = cardEl(c.card, { big: true });
    const top = h('div', 'dkc-half');
    const k = h('span', 'dkc-k', c.card.kanji); k.lang = 'ja';
    top.append(k);
    const bottom = h('div', 'dkc-half bottom');
    const r = h('span', 'dkc-r', c.card.reading); r.lang = 'ja';
    bottom.append(r, h('span', 'dkc-m', c.card.meaning));
    card.append(top, bottom);
    box.replaceChildren(card);
    clearTimeout(flashTimer);
    if (c.flashMs !== null) flashTimer = window.setTimeout(() => k.classList.add('gone'), c.flashMs); // kanji flashes, reading + meaning stay
    $('dkFeedback').replaceChildren();
  }
  const mine = v.phase === 'overtime' || c.ownerId === v.you;
  if (mine && writingCastId !== c.castId) {
    writingCastId = c.castId;
    hooks.beginWriting(c.castId, c.card.kanji);
  } else if (!mine && writingCastId) {
    hooks.stopWriting();
    writingCastId = 0;
  }
}

function renderCharacters(v: DeckView, me: DeckPlayerView, opp: DeckPlayerView) {
  const overlay = $('dkOverlay');
  overlay.hidden = false;
  const title = h('h2', '', me.character ? `Waiting for ${opp.name}…` : 'Choose your hero');
  const grid = h('div', 'char-pick');
  for (const c of DECK_CHARACTERS) {
    const b = h('button', 'char-card' + (me.character === c ? ' on' : '')) as HTMLButtonElement;
    b.disabled = !!me.character;
    const av = h('div', 'ch-av'); av.innerHTML = heroSvg(c, 'me');
    b.append(av, h('span', 'ch-name', CHARACTER_INFO[c].name), h('span', 'ch-power', CHARACTER_INFO[c].power));
    b.onclick = () => hooks.send({ type: 'deck_character', character: c });
    grid.append(b);
  }
  overlay.replaceChildren(title, grid, h('p', 'sub', 'Same HP (1000) for both. 150 mana, +10 every turn. Cards: light blue 100 dmg (10◆) · blue 120 (25◆) · yellow +60◆ · green heal 100 (40◆) · red 250 (70◆).'));
}

let coinShown = false;
function renderDraft(v: DeckView, me: DeckPlayerView) {
  const d = v.draft!;
  const overlay = $('dkOverlay');
  overlay.hidden = false;
  const mine = d.picker === v.you;
  const head = h('div', 'center');
  if (!coinShown) { coinShown = true; head.append(h('div', 'coin', '🪙')); }
  head.append(h('h2', '', d.coinWinner === v.you ? 'You won the coin flip — you pick first' : 'Your opponent won the coin flip'));
  const status = h('p', 'sub');
  ui.countdown('dkDraft', d.deadlineMs, (left) => (status.textContent = `${mine ? `Your pick — ${d.picksLeft} left` : 'Opponent is picking'} · ${Math.ceil(left / 1000)}s · you have ${me.handSize}/10`));
  const board = h('div', 'draft-board');
  for (const c of d.pool) {
    const el = cardEl({ cardId: c.cardId, color: c.color }, { button: true, disabled: !mine || !!c.takenBy });
    if (c.takenBy) el.classList.add('taken');
    el.onclick = () => { audio.sfx.flip(); hooks.send({ type: 'deck_pick', cardId: c.cardId }); };
    board.append(el);
  }
  overlay.replaceChildren(head, status, board, h('p', 'hint', 'You only see the colour — the kanji stays hidden until the card is played.'));
}

/** Animations for what just happened (the next state render redraws the board). */
export function deckEvent(e: DeckEvent) {
  if (!view) return;
  const me = view.you;
  const name = (id: string) => view!.players.find((p) => p.id === id)?.name ?? 'Someone';
  switch (e.kind) {
    case 'coin': coinShown = false; break;
    case 'ability': ui.toast(`${e.playerId === me ? 'You' : name(e.playerId)} used ${CHARACTER_INFO[e.character].power.split(':')[0]}!`); break;
    case 'wizard': ui.toast(`${e.playerId === me ? 'Your' : `${name(e.playerId)}'s`} Arcane reserve: ${e.what === 'cards' ? '+2 cards' : '+30 mana'}`); break;
    case 'stuck': ui.toast(`${e.playerId === me ? 'You have' : `${name(e.playerId)} has`} no usable cards!`); break;
    case 'overtime': ui.toast('⏰ Overtime! Cards are shown one by one — first to write it uses it.', 5000); break;
    case 'resolve': animateResolve(e, me); break;
  }
}

function animateResolve(e: Extract<DeckEvent, { kind: 'resolve' }>, me: string) {
  const card = $('dkCast').querySelector('.dkc.big') as HTMLElement | null;
  const fb = $('dkFeedback');
  const who = e.playerId === me ? 'You' : view!.players.find((p) => p.id === e.playerId)?.name ?? '';
  const spec = CARD_SPECS[e.color];
  if (!e.ok) {
    if (e.overtime && e.playerId !== me) return; // opponent missed in overtime; the card stays up
    fb.className = 'feedback bad';
    fb.replaceChildren(h('span', 'big', e.playerId === me ? '✗ The spell fizzles' : `✗ ${who} missed`), h('span', 'sub2', `${e.kanji} · ${e.reading} · ${e.meaning}${e.recognized ? ` — read: ${e.recognized}` : ''}`));
    audio.sfx.rip();
    if (card) ripCard(card);
    return;
  }
  fb.className = 'feedback good';
  fb.replaceChildren(h('span', 'big', `✓ ${who}: ${spec.label} ${spec.kind === 'attack' ? `−${e.amount}` : spec.kind === 'heal' ? `+${e.amount} ♥` : `+${e.amount} ◆`}`));
  if (!card) return;
  const ghost = card.cloneNode(true) as HTMLElement;
  const r = card.getBoundingClientRect();
  Object.assign(ghost.style, { position: 'fixed', left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px`, zIndex: '30', margin: '0' });
  document.body.append(ghost);
  if (spec.kind === 'mana') {
    audio.sfx.mana();
    ghost.classList.add('sparkle');
  } else {
    // attack flies to the target, heal flies back to its user
    const towardsMe = spec.kind === 'heal' ? e.playerId === me : e.targetId === me;
    const target = $(towardsMe ? 'dkMe' : 'dkOpp').getBoundingClientRect();
    ghost.style.setProperty('--fy', `${target.top + target.height / 2 - (r.top + r.height / 2)}px`);
    ghost.classList.add('fly-out');
    if (spec.kind === 'heal') audio.sfx.heal(); else audio.sfx.correct(1);
    setTimeout(() => { if (spec.kind === 'attack') towardsMe ? audio.sfx.hurt() : audio.sfx.impact(); }, 500);
  }
  card.style.visibility = 'hidden';
  setTimeout(() => ghost.remove(), 900);
}

function ripCard(card: HTMLElement) {
  const r = card.getBoundingClientRect();
  const wrap = h('div', 'rip');
  Object.assign(wrap.style, { position: 'fixed', left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px`, zIndex: '30' });
  for (const side of ['l', 'r']) {
    const half = card.cloneNode(true) as HTMLElement;
    half.classList.add('rip-half', side);
    Object.assign(half.style, { width: '100%', height: '100%', animation: undefined });
    wrap.append(half);
  }
  document.body.append(wrap);
  card.style.visibility = 'hidden';
  setTimeout(() => wrap.remove(), 1000);
}

const clock = (ms: number) => { const s = Math.max(0, Math.ceil(ms / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
export const resetDeck = () => { view = null; lastCastId = 0; writingCastId = 0; coinShown = false; ui.stopCountdown('dkMatch'); ui.stopCountdown('dkTurn'); ui.stopCountdown('dkDraft'); };
