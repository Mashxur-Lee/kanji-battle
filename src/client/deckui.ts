import * as voice from './voice';
import { zrect } from './zoom';
import { CARD_COLORS, CARD_SPECS, CHARACTER_INFO, DECK_CHARACTERS, DECK_RULES, type CardColor, type DeckCardView, type DeckEvent, type DeckPlayerView, type DeckView } from '../shared/deck';
import * as audio from './audio';
import * as ui from './ui';
import type { ChatMessage } from '../shared/protocol';
import { heroSvg } from './wizard';
import { arena, arenaForDeck, resetArenaDeck } from './arena';
import { flameColor } from '../shared/progress';

const $ = ui.$;
const COLOR_NAME: Record<CardColor, string> = { lightblue: 'Light blue', blue: 'Blue', yellow: 'Yellow', green: 'Green', red: 'Red' };

function h(tag: string, cls = '', text?: string | number): HTMLElement {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = String(text);
  return el;
}

export interface DeckHooks {
  send: (msg: { type: 'deck_character'; character: string } | { type: 'deck_pick'; cardId: string } | { type: 'deck_play'; cardId: string } | { type: 'deck_ability' } | { type: 'chat'; text: string } | { type: 'back_to_lobby' } | { type: 'deck_cast_ready'; castId: number } | { type: 'deck_cast_go'; castId: number } | { type: 'answer'; challengeId: number; text: string }) => void;
  /** your player id (chat arrives before the first deck view) */
  me: () => string;
  /** It's your turn to write this card: set up the pad/IME. */
  beginWriting: (castId: number, kanji: string) => void;
  stopWriting: () => void;
}

let view: DeckView | null = null;
let hooks: DeckHooks;
let lastCastId = 0;
let writingCastId = 0;
let stuckId = '';
let otInput: HTMLInputElement | null = null; // overtime: the reading box
let inkCanvas: HTMLCanvasElement | null = null; // the opponent's pad, watched live
let inkCastId = 0;

/** Strokes from the opponent's pad (their own cast, while they write it). */
export function deckInk(castId: number, strokes: Array<Array<[number, number]>>, cells: number) {
  if (!inkCanvas || castId !== inkCastId || !inkCanvas.isConnected) return;
  if (inkCanvas.width !== 600 * cells) { inkCanvas.width = 600 * cells; inkCanvas.style.setProperty('--cols', String(cells)); }
  paintInk(inkCanvas, strokes);
}
function paintInk(cv: HTMLCanvasElement, strokes: Array<Array<[number, number]>>) {
  const ctx = cv.getContext('2d')!;
  ctx.clearRect(0, 0, cv.width, cv.height);
  ctx.strokeStyle = 'rgba(60, 50, 110, .25)'; ctx.lineWidth = 3; ctx.setLineDash([18, 14]);
  for (let x = 600; x < cv.width; x += 600) { ctx.beginPath(); ctx.moveTo(x, 20); ctx.lineTo(x, 580); ctx.stroke(); }
  ctx.setLineDash([]);
  ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.lineWidth = 20; ctx.strokeStyle = '#1b1530';
  for (const s of strokes) { ctx.beginPath(); s.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); if (s.length === 1) ctx.lineTo(s[0][0] + 1, s[0][1] + 1); ctx.stroke(); }
}

export function initDeck(hk: DeckHooks) {
  hooks = hk;
  $('dkAbility').onclick = () => {
    const me = view?.players.find((p) => p.id === view!.you);
    // the Wizard's power is passive: the button explains it instead of firing anything
    if (me?.character && CHARACTER_INFO[me.character].passive) {
      const used = [me.wizardCardsUsed ? 'cards used' : '+2 cards ready', me.wizardManaUsed ? 'mana used' : '+30 mana ready'].join(' · ');
      return ui.toast(`${CHARACTER_INFO[me.character].power} (${used})`, 6000);
    }
    hooks.send({ type: 'deck_ability' });
  };
  $('dkChatForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $<HTMLInputElement>('dkChatInput');
    const text = input.value.trim();
    if (text) hooks.send({ type: 'chat', text });
    input.value = '';
  });
  renderGuide($('deckGuide'));
}

// ── chat ────────────────────────────────────────────────────────────────────
const seenChat = new Set<number>();
export function chatMessages(msgs: ChatMessage[]) {
  const log = $('dkChatLog');
  for (const m of msgs) {
    if (seenChat.has(m.id)) continue;
    seenChat.add(m.id);
    const line = h('div', 'chat-line' + (m.from === hooks.me() ? ' mine' : ''));
    line.append(h('b', '', m.from === hooks.me() ? 'You' : m.name), h('span', '', m.text)); // textContent: never HTML
    log.append(line);
    if (m.from !== hooks.me() && view && view.phase !== 'over') audio.sfx.flip();
  }
  while (log.children.length > 60) log.firstElementChild!.remove();
  log.scrollTop = log.scrollHeight;
}
export function clearChat() { seenChat.clear(); $('dkChatLog').replaceChildren(); }

// ── lobby guide ─────────────────────────────────────────────────────────────
/** The Deck Duel instructions (lobby, and the online queue's "?"). */
export const renderDeckGuide = (el: HTMLElement) => renderGuide(el);
function renderGuide(el: HTMLElement) {
  const sec = (title: string, ...kids: (Node | string)[]) => { const s = h('section', 'g-sec'); s.append(h('h4', '', title), ...kids); return s; };
  const p = (t: string) => h('p', '', t);
  const heroes = h('div', 'g-heroes');
  for (const c of DECK_CHARACTERS) {
    const row = h('div', 'g-hero');
    const av = h('div', 'g-av'); av.innerHTML = heroSvg(c, 'me');
    const txt = h('div'); txt.append(h('b', '', CHARACTER_INFO[c].name), h('span', '', CHARACTER_INFO[c].power));
    row.append(av, txt);
    heroes.append(row);
  }
  const cards = h('div', 'g-cards');
  for (const col of CARD_COLORS) {
    const spec = CARD_SPECS[col];
    const fig = h('div', 'g-card');
    fig.append(cardEl({ cardId: '', color: col }), h('span', '', `${spec.kind === 'attack' ? `${spec.amount} damage` : spec.kind === 'heal' ? `heals ${spec.amount}` : `+${spec.amount} mana`} · ${spec.cost ? `${spec.cost} mana` : 'free'}`));
    cards.append(fig);
  }
  const flow = h('ol', 'g-flow');
  for (const [icon, t] of [
    ['🦸', 'Pick a hero (30 s).'],
    ['🪙', 'Coin flip, then draft: take 2 face-down cards at a time (20 s for both) until you each have 10. You see colours, not kanji.'],
    ['🃏', `Your turn: ${DECK_RULES.chooseMs / 1000} s to choose a card. Its mana is paid right away — even if you then miss.`],
    ['📖', `The card flips: read its reading and meaning (up to ${DECK_RULES.castReadMs / 1000} s), then press Ready to look at the kanji.`],
    ['✍️', `Press CAST! — the kanji disappears and you write it from memory (pad with eraser, or Japanese keyboard). ${DECK_RULES.castMs / 60000} minute for all three steps. Your opponent watches you write.`],
    ['✅', `Right → the spell hits / heals / gives mana, and you get ${DECK_RULES.manaRefund * 100}% of its mana back. Wrong or too slow → the card rips. Either way the correct kanji shows for ${DECK_RULES.revealMs / 1000} s.`],
    ['📜', 'While your opponent plays, you can read the list of kanji in your hand (not which card is which).'],
    ['🔄', 'Out of cards → Round 2 draft. HP, mana and powers stay.'],
    ['⚡', 'Omnipotence: once per cooldown, fire your hero\'s ultimate power with the button bottom-left. While it\'s active you burn in your flame colour (Customize → Omnipotence).'],
    ['⏰', `After ${DECK_RULES.matchMs / 60000} min: overtime — the cards and Omnipotence are gone and it becomes a 1v1 Rapid duel with the HP you have: random kanji (N5–N1), the first to type the reading (hiragana or romaji) hits, harder words hit harder. ${DECK_RULES.overtimeMaxMs / 60000} min, then the higher HP wins.`],
    ['⌛', `Letting the clock run out without playing a card costs ${DECK_RULES.skipPenaltyHp} HP.`],
  ] as const) { const li = h('li'); li.append(h('span', 'g-ic', icon), h('span', '', t)); flow.append(li); }
  el.replaceChildren(
    h('h3', '', 'How Deck Duel works'),
    sec('Goal', p(`Both start with ${DECK_RULES.hp} HP and ${DECK_RULES.maxMana} mana (+${DECK_RULES.manaPerTurn} each turn). Bring your opponent to 0. No mana for any of your cards = your turn is skipped (−${DECK_RULES.skipPenaltyHp} HP).`)),
    sec('Cards', cards),
    sec('A turn', flow),
    sec(`Heroes and their Omnipotence — ${DECK_RULES.abilityCost} mana, then ${DECK_RULES.abilityCooldown} turns cooldown (Goblin ${DECK_RULES.goblinCooldown})`, heroes),
    sec('Rewards', p('Win 4000 XP · draw 2500 · lose 1500 · forfeit 0 (half against AI). Every kanji of the duel joins your All spells.')),
  );
}

/** A face-down or face-up card. */
function cardEl(c: DeckCardView, opts: { big?: boolean; button?: boolean; disabled?: boolean; costFactor?: number } = {}): HTMLElement {
  const base = CARD_SPECS[c.color];
  const spec = { ...base, cost: Math.ceil(base.cost * (opts.costFactor ?? 1)) }; // Goblin's Frenzy: the second card costs more
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

/** A hero power in use (Bulwark, Sight, Frenzy): the hero is wrapped in their combo flames. */
const powered = (p: DeckPlayerView) => !!p.character && p.character !== 'wizard' && p.abilityActive > 0;

function playerPanel(el: HTMLElement, p: DeckPlayerView, mine: boolean) {
  el.dataset.flame = p.flame ?? 'blue';
  el.classList.toggle('powered', powered(p));
  arena()?.onfire(mine ? 'me' : 'opp', powered(p), flameColor(p.flame));
  const av = h('div', 'dk-av');
  av.innerHTML = p.character ? heroSvg(p.character, mine ? 'me' : 'opp', p.staff) : '';
  const name = h('div', 'dk-name');
  const nm = h('span', '', mine ? `${p.name} (you)` : p.name);
  if (!mine) ui.markProfile(nm, { id: p.id, name: p.name, bot: /\(AI (N\d)\)$/.exec(p.name)?.[1] ?? null });
  name.append(ui.picEl(p.pic), nm);
  if (p.character) name.append(h('span', 'tag', CHARACTER_INFO[p.character].name));
  if (p.abilityActive > 0 && p.character !== 'wizard') name.append(h('span', 'tag', `${p.character === 'goblin' ? 'Frenzy' : CHARACTER_INFO[p.character!].power.split(':')[0]} ×${p.abilityActive}`));
  name.append(ui.netBars(p.id));
  const bar = (cls: string, value: number, max: number, text: string) => {
    const b = h('div', `dkbar ${cls}`);
    const fill = h('div', 'fill'); fill.style.width = `${Math.max(0, Math.min(1, value / max)) * 100}%`;
    b.append(fill, h('span', 'dkbar-txt', text));
    return b;
  };
  const hp = bar('hp-bar' + (p.hp / p.maxHp <= 0.25 ? ' low' : ''), p.hp, p.maxHp, `♥ ${p.hp} / ${p.maxHp}`);
  const mana = bar('mana-bar', p.mana, p.maxMana, `◆ ${p.mana} / ${p.maxMana}`);
  const counts = h('div', 'dk-counts');
  counts.append(h('span', 'cc total', `${p.handSize} card${p.handSize === 1 ? '' : 's'}`));
  for (const col of Object.keys(p.handCounts) as CardColor[]) {
    if (!p.handCounts[col]) continue;
    const cc = h('span', 'cc');
    const dot = h('span', `dot dkc c-${col}`); dot.style.width = '12px'; dot.style.height = '16px'; dot.style.padding = '0';
    cc.append(dot, `×${p.handCounts[col]}`);
    counts.append(cc);
  }
  el.replaceChildren(av, name, hp, mana, counts);
}

/** Whole-screen render from the server's view of the duel. */
export function renderDeck(v: DeckView) {
  view = v;
  const me = v.players.find((p) => p.id === v.you)!;
  const opp = v.players.find((p) => p.id !== v.you)!;
  if (opp.character) arenaForDeck(v); // the 3D arena (when it's on) shows the opponent's hero
  ui.show('deck');
  playerPanel($('dkMe'), me, true);
  playerPanel($('dkOpp'), opp, false);
  const overlay = $('dkOverlay');

  if (v.phase === 'characters' || v.phase === 'draft') {
    // a new draft round can interrupt the battle: clear the board's cast, pad and turn clock first
    renderCast(v);
    ui.stopCountdown('dkTurn');
    $('dkBanner').textContent = '';
    return v.phase === 'characters' ? renderCharacters(v, me, opp) : renderDraft(v, me);
  }
  overlay.hidden = true;

  // clocks & banner
  if (v.phase === 'overtime') {
    ui.countdown('dkMatch', v.overtimeLeft, (left) => ($('dkClock').textContent = `OT ${clock(left)}`));
  } else {
    ui.countdown('dkMatch', v.matchLeftMs, (left) => ($('dkClock').textContent = clock(left)));
  }
  const banner = $('dkBanner');
  const myTurn = v.turn?.active === v.you;
  banner.classList.toggle('mine', myTurn || v.phase === 'overtime');
  const deadline = v.casting?.deadlineMs ?? v.turn?.deadlineMs ?? 0;
  const label = v.phase === 'overtime'
    ? 'Overtime — Rapid duel! First to type the reading hits'
    : myTurn
      ? (v.casting ? (v.casting.stage === 'read' ? 'Your spell — read it' : v.casting.stage === 'look' ? 'Your spell — memorise the kanji' : 'Write the kanji!') : `Your turn — choose a card${v.turn!.castsLeft > 1 ? ' (Frenzy: 2 cards)' : ''}`)
      : v.casting ? `${opp.name} is casting` : `${opp.name} is choosing a card`;
  ui.countdown('dkTurn', deadline, (left) => (banner.textContent = `${label} · ${Math.ceil(left / 1000)}s`));

  // hands
  const canPlay = myTurn && !v.casting && Date.now() >= revealUntil;
  $('dkHand').replaceChildren(...v.hand.map((c) => {
    const costFactor = myTurn ? v.turn!.costFactor : 1;
    const el = cardEl(c, { button: true, costFactor, disabled: !canPlay || Math.ceil(CARD_SPECS[c.color].cost * costFactor) > me.mana });
    el.onclick = () => { audio.sfx.flip(); hooks.send({ type: 'deck_play', cardId: c.cardId }); };
    return el;
  }));
  $('dkOppHand').replaceChildren(...Array.from({ length: opp.handSize }, () => h('div', 'dkc back face-down'))); // hidden: just backs

  // Omnipotence: the hero's ultimate power (button bottom left)
  const ab = $<HTMLButtonElement>('dkAbility');
  const ch = me.character;
  ab.innerHTML = ch ? heroSvg(ch, 'me', me.staff) : '';
  const cd = me.abilityCooldown;
  if (ch) {
    const label = h('span', 'ab-name');
    label.append(h('b', '', 'Omnipotence'), h('small', '', CHARACTER_INFO[ch].passive ? 'passive · tap for info' : cd > 0 ? `ready in ${cd} turn${cd === 1 ? '' : 's'}` : `${DECK_RULES.abilityCost}◆`));
    ab.append(label);
  }
  if (ch && !CHARACTER_INFO[ch].passive && cd > 0) ab.append(h('span', 'ab-cd', String(cd)));
  ab.title = ch ? CHARACTER_INFO[ch].power : '';
  ab.classList.toggle('passive', !!ch && !!CHARACTER_INFO[ch].passive);
  ab.classList.toggle('active', me.abilityActive > 0);
  ab.disabled = !ch || (!CHARACTER_INFO[ch].passive && (cd > 0 || me.mana < DECK_RULES.abilityCost || !myTurn || !!v.casting || Date.now() < revealUntil));

  // the card being cast
  renderCast(v);
  renderList(v);
}

/** Off-turn study list: the kanji in your hand, sorted, without colours. */
function renderList(v: DeckView) {
  const box = $('dkList');
  const head = h('h4', '', 'Your kanji');
  if (!v.deckList) {
    box.replaceChildren(head, h('p', 'hint', v.phase === 'overtime' ? 'Overtime — the cards are gone: type the readings!' : 'Hidden on your turn. While your opponent plays, the kanji in your hand show up here.'));
    return;
  }
  const ul = h('ul', 'kanji-list');
  for (const k of v.deckList) {
    const li = h('li');
    const kj = h('span', 'kl-k', k.kanji); kj.lang = 'ja';
    const rd = h('span', 'kl-r', k.reading); rd.lang = 'ja';
    li.append(kj, rd, h('span', 'kl-m', k.meaning));
    ul.append(li);
  }
  box.replaceChildren(append(head, h('small', '', ` · ${v.deckList.length}`)), h('p', 'hint', "Which card is which stays secret."), ul);
}
const append = (el: HTMLElement, ...kids: Node[]) => { el.append(...kids); return el; };

/**
 * The card being cast. Your own cast goes in three steps within one minute:
 *   1. read — the card shows its reading + meaning (15 s, or press Ready)
 *   2. look — the kanji appears; study it and press CAST!
 *   3. write — the kanji disappears and you write it (pad or Japanese keyboard)
 * The opponent watches the same card (without being able to write).
 * Overtime is a Rapid race instead: only the kanji shows, both players type its reading.
 */
let castKey = '';
function renderCast(v: DeckView) {
  const box = $('dkCast');
  const c = v.casting;
  if (!c) {
    arena()?.channel(0);
    arena()?.oppChannel(false);
    castKey = '';
    ui.stopCountdown('dkRead');
    if (writingCastId) { hooks.stopWriting(); writingCastId = 0; }
    if (Date.now() < revealUntil) return; // the correct kanji is still being shown
    box.replaceChildren();
    $('dkFeedback').replaceChildren();
    return;
  }
  revealUntil = 0;
  clearTimeout(revealTimer);
  const mine = v.phase === 'overtime' || c.ownerId === v.you;
  const key = `${c.castId}:${c.stage}:${c.card.kanji ? 1 : 0}`;
  if (key !== castKey) {
    const fresh = c.castId !== lastCastId;
    lastCastId = c.castId;
    castKey = key;
    const card = cardEl(c.card, { big: true });
    if (!fresh) card.style.animation = 'none'; // only flip in once
    const top = h('div', 'dkc-half');
    const shown = c.card.kanji ?? '？'.repeat(Math.min(c.chars, 3));
    const k = h('span', `dkc-k l${Math.min(4, [...shown].length)}` + (c.card.kanji ? '' : ' unknown'), shown); k.lang = 'ja';
    top.append(k);
    const bottom = h('div', 'dkc-half bottom');
    if (c.overtime) bottom.append(h('span', 'dkc-r', c.rapid ? c.rapid.level : ''), h('span', 'dkc-m', c.rapid ? `Reading? · ${c.rapid.damage} damage` : 'Reading?'));
    else {
      const r = h('span', 'dkc-r', c.card.reading ?? ''); r.lang = 'ja';
      bottom.append(r, h('span', 'dkc-m', c.card.meaning ?? ''));
    }
    card.append(top, bottom);
    const actions = h('div', 'cast-actions');
    otInput = null;
    if (c.overtime) {
      ui.stopCountdown('dkRead');
      const input = h('input', 'ot-input') as HTMLInputElement;
      input.lang = 'ja';
      input.autocomplete = 'off';
      input.spellcheck = false;
      input.placeholder = c.answer === 'romaji' ? 'Type it in romaji…' : 'Reading (kana or romaji)…';
      input.addEventListener('input', () => arena()?.twitch());
      input.addEventListener('keydown', (e) => {
        // with a Japanese IME the first Enter confirms the conversion — don't send on that one
        if (e.key !== 'Enter' || e.isComposing || e.keyCode === 229) return;
        e.preventDefault();
        const text = input.value.trim();
        if (text) hooks.send({ type: 'answer', challengeId: c.castId, text });
      });
      otInput = input;
      actions.append(input, h('div', 'cast-timer', 'First to type its reading hits · wrong? try again'));
      setTimeout(() => input.focus(), 30);
    } else if (mine && c.stage === 'read') {
      const t = h('div', 'cast-timer');
      ui.countdown('dkRead', c.readLeftMs ?? 0, (left) => (t.textContent = `Read the meaning — the kanji shows in ${Math.ceil(left / 1000)} s`));
      const b = h('button', 'big cast-btn', 'Ready ▸') as HTMLButtonElement;
      b.onclick = () => { b.disabled = true; hooks.send({ type: 'deck_cast_ready', castId: c.castId }); };
      actions.append(t, b);
    } else if (mine && c.stage === 'look') {
      ui.stopCountdown('dkRead');
      const b = h('button', 'big cast-btn go', 'CAST! ✦') as HTMLButtonElement;
      b.onclick = () => { b.disabled = true; audio.sfx.flip(); arena()?.thrust(); hooks.send({ type: 'deck_cast_go', castId: c.castId }); };
      actions.append(h('div', 'cast-timer', 'Memorise it — it disappears when you cast'), b);
    } else if (!mine) {
      ui.stopCountdown('dkRead');
      const who = v.players.find((p) => p.id === c.ownerId)?.name ?? 'Your opponent';
      actions.append(h('div', 'cast-timer', c.stage === 'read' ? 'Reading the spell…' : c.stage === 'look' ? 'Studying the kanji…' : `${who} is writing…`));
      if (c.stage === 'write') {
        // watch their pad live
        const cv = document.createElement('canvas');
        cv.className = 'ink-view';
        cv.width = 600 * Math.min(4, Math.max(1, c.chars)); cv.height = 600;
        cv.style.setProperty('--cols', String(Math.min(4, Math.max(1, c.chars))));
        inkCanvas = cv; inkCastId = c.castId;
        paintInk(cv, []);
        actions.append(cv);
      }
    } else ui.stopCountdown('dkRead');
    box.replaceChildren(card, actions);
    if (fresh) $('dkFeedback').replaceChildren();
  }
  const writeNow = mine && !c.overtime && c.stage === 'write';
  const a3 = arena();
  a3?.channel(writeNow ? 1 : mine && c.stage === 'look' ? 0.4 : c.overtime ? 0.5 : 0);
  a3?.oppChannel(!mine && c.stage === 'write');
  if (writeNow && writingCastId !== c.castId) {
    writingCastId = c.castId;
    hooks.beginWriting(c.castId, '□'.repeat(c.chars)); // the pad only needs the number of characters
  } else if (!writeNow && writingCastId) {
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
  overlay.replaceChildren(backButton(v), title, grid, h('p', 'sub', `Same HP (${DECK_RULES.hp}) for both. ${DECK_RULES.maxMana} mana, +${DECK_RULES.manaPerTurn} every turn. ${DECK_RULES.chooseMs / 1000} s to choose a card (its mana is paid right away), then read the meaning, press Ready to see the kanji and CAST! to write it — ${DECK_RULES.castMs / 1000} s for the whole spell. Hero power: ${DECK_RULES.abilityCost} mana, ${DECK_RULES.abilityCooldown} turns cooldown. Out of cards → a new draft round. Cards: ${CARD_COLORS.map((col) => { const s = CARD_SPECS[col]; return `${COLOR_NAME[col].toLowerCase()} ${s.kind === 'attack' ? `${s.amount} dmg` : s.kind === 'heal' ? `heal ${s.amount}` : `+${s.amount}◆`}${s.cost ? ` (${s.cost}◆)` : ''}`; }).join(' · ')}.`));
}

let coinShown = false;
function renderDraft(v: DeckView, me: DeckPlayerView) {
  const d = v.draft!;
  const overlay = $('dkOverlay');
  overlay.hidden = false;
  const mine = d.picker === v.you;
  const head = h('div', 'center');
  if (!coinShown) { coinShown = true; head.append(h('div', 'coin')); }
  if (v.round > 1) head.append(h('p', 'round-tag', `Round ${v.round} — new cards! HP, mana and powers stay as they are.`));
  head.append(h('h2', '', d.coinWinner === v.you ? 'You won the coin flip — you pick first' : 'Your opponent won the coin flip'));
  const status = h('p', 'sub');
  const pickedNow = d.pool.filter((c) => c.takenBy === v.you).length;
  const kept = me.handSize - pickedNow;
  ui.countdown('dkDraft', d.deadlineMs, (left) => (status.textContent = `${mine ? `Your pick — ${d.picksLeft} left` : 'Opponent is picking'} · ${Math.ceil(left / 1000)}s · picked ${pickedNow}/10${kept > 0 ? ` (+${kept} kept)` : ''}`));
  const board = h('div', 'draft-board');
  for (const c of d.pool) {
    const el = cardEl({ cardId: c.cardId, color: c.color }, { button: true, disabled: !mine || !!c.takenBy });
    if (c.takenBy) el.classList.add('taken');
    el.onclick = () => { audio.sfx.flip(); hooks.send({ type: 'deck_pick', cardId: c.cardId }); };
    board.append(el);
  }
  overlay.replaceChildren(backButton(v), head, status, board, h('p', 'hint', 'You only see the colour — the kanji stays hidden until the card is played.'));
}

/** Hero pick and the first draft can still be called off: everyone goes back to the lobby. */
function backButton(v: DeckView): HTMLElement {
  const b = h('button', 'back dk-back', '← Back to lobby') as HTMLButtonElement;
  b.hidden = v.round > 1; // a later draft happens mid-match: use Forfeit instead
  b.onclick = () => hooks.send({ type: 'back_to_lobby' });
  return b;
}

/** Animations for what just happened (the next state render redraws the board). */
export function deckEvent(e: DeckEvent) {
  if (!view) return;
  const me = view.you;
  const name = (id: string) => view!.players.find((p) => p.id === id)?.name ?? 'Someone';
  switch (e.kind) {
    case 'coin': coinShown = false; break;
    case 'redraft': ui.toast(`${e.playerId === me ? 'You are' : `${name(e.playerId)} is`} out of cards — Round ${e.round} draft!`, 4000); break;
    case 'ability': ui.toast(`${e.playerId === me ? 'You' : name(e.playerId)} used ${CHARACTER_INFO[e.character].power.split(':')[0]}!`); break;
    case 'wizard': ui.toast(`${e.playerId === me ? 'Your' : `${name(e.playerId)}'s`} Arcane reserve: ${e.what === 'cards' ? '+2 cards' : '+30 mana'}`); break;
    case 'stuck': stuckId = e.playerId; break; // the 'skip' event right after explains it
    case 'overtime': ui.toast('Overtime! The cards are gone — it\'s a Rapid duel now: first to type the reading hits.', 5000); break;
    case 'skip':
      audio.sfx.hurt();
      ui.toast(stuckId === e.playerId
        ? `${e.playerId === me ? 'You have' : `${name(e.playerId)} has`} no mana for any card — turn skipped: −${e.damage} HP`
        : `${e.playerId === me ? 'You' : name(e.playerId)} skipped the turn: −${e.damage} HP`, 3500);
      stuckId = '';
      break;
    case 'ot_miss':
      if (e.playerId === me && otInput) {
        audio.sfx.wrong();
        otInput.classList.remove('shake'); void otInput.offsetWidth; otInput.classList.add('shake');
        otInput.select();
      }
      break;
    case 'resolve':
      // both players hear the spell's word first, then the spell's sound
      animateResolve(e, me, e.ok ? voice.speak(e.reading) : Promise.resolve());
      showReveal(e);
      break;
  }
}

/** Bolt strikes with lightning, Frost freezes the target blue, Inferno sets it on fire. */
const CARD_FX: Partial<Record<CardColor, 'bolt' | 'frost' | 'fire'>> = { lightblue: 'bolt', blue: 'frost', red: 'fire' };

function animateResolve(e: Extract<DeckEvent, { kind: 'resolve' }>, me: string, spoken: Promise<void> = Promise.resolve()) {
  const card = $('dkCast').querySelector('.dkc.big') as HTMLElement | null;
  const fb = $('dkFeedback');
  const who = e.playerId === me ? 'You' : view!.players.find((p) => p.id === e.playerId)?.name ?? '';
  // overtime hits are plain attacks whatever colour the word's level has
  const spec = e.overtime ? { label: 'Rapid hit', kind: 'attack' as const, amount: e.amount, cost: 0 } : CARD_SPECS[e.color];
  if (!e.ok) {
    fb.className = 'feedback bad';
    fb.replaceChildren(h('span', 'big', e.overtime ? '✗ Nobody got it' : e.playerId === me ? '✗ The spell fizzles' : `✗ ${who} missed`), h('span', 'sub2', `${e.kanji} · ${e.reading} · ${e.meaning}${e.recognized ? ` — read: ${e.recognized}` : ''}`));
    audio.sfx.rip();
    arena()?.fizzle(e.playerId === me ? 'me' : 'opp');
    if (card) ripCard(card);
    return;
  }
  const a3 = arena();
  if (a3) {
    const from = e.playerId === me ? 'me' : 'opp';
    const to = spec.kind === 'attack' ? (e.targetId === me ? 'me' : 'opp') : from;
    void a3.cast(from, to, e.kanji, { damage: e.amount, kind: spec.kind, fx: e.overtime ? undefined : CARD_FX[e.color] });
  } else if (spec.kind === 'attack' && !e.overtime && CARD_FX[e.color]) {
    // 2D: the target's panel lights up with the card's effect
    const panel = $(e.targetId === me ? 'dkMe' : 'dkOpp');
    setTimeout(() => {
      panel.classList.remove('fx-bolt', 'fx-frost', 'fx-fire'); void panel.offsetWidth;
      panel.classList.add(`fx-${CARD_FX[e.color]}`);
      setTimeout(() => panel.classList.remove(`fx-${CARD_FX[e.color]}`), 1100);
    }, 500);
  }
  fb.className = 'feedback good';
  fb.replaceChildren(h('span', 'big', `✓ ${who}: ${spec.label} ${spec.kind === 'attack' ? `−${e.amount}` : spec.kind === 'heal' ? `+${e.amount} ♥` : `+${e.amount} ◆`}`));
  if (e.refund) fb.append(h('span', 'refund', ` +${e.refund}◆ back`));
  if (e.overtime) fb.append(h('span', 'sub2', `${e.kanji} · ${e.reading} · ${e.meaning}`));
  if (!card) return;
  const ghost = card.cloneNode(true) as HTMLElement;
  const r = zrect(card);
  Object.assign(ghost.style, { position: 'fixed', left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px`, zIndex: '30', margin: '0' });
  document.body.append(ghost);
  if (spec.kind === 'mana') {
    void spoken.then(() => audio.sfx.mana());
    ghost.classList.add('sparkle');
  } else {
    // attack flies to the target, heal flies back to its user
    const towardsMe = spec.kind === 'heal' ? e.playerId === me : e.targetId === me;
    const target = zrect($(towardsMe ? 'dkMe' : 'dkOpp'));
    ghost.style.setProperty('--fy', `${target.top + target.height / 2 - (r.top + r.height / 2)}px`);
    ghost.classList.add('fly-out');
    void spoken.then(() => { if (spec.kind === 'heal') audio.sfx.heal(); else audio.sfx.correct(1); });
    setTimeout(() => { if (spec.kind === 'attack') towardsMe ? audio.sfx.hurt() : audio.sfx.impact(); }, 500);
  }
  card.style.visibility = 'hidden';
  setTimeout(() => ghost.remove(), 900);
}

/**
 * After every cast — right or wrong — the card turns over to show the correct kanji with its reading and
 * meaning for 2 s (unless the next card is played sooner).
 */
export const REVEAL_MS = 2000;
let revealUntil = 0;
let revealTimer = 0;
function showReveal(e: Extract<DeckEvent, { kind: 'resolve' }>) {
  const card = h('div', `dkc c-${e.color} big reveal ${e.ok ? 'ok' : 'bad'}`);
  const top = h('div', 'dkc-half');
  const k = h('span', `dkc-k l${Math.min(4, [...e.kanji].length)}`, e.kanji); k.lang = 'ja';
  top.append(k);
  const bottom = h('div', 'dkc-half bottom');
  const r = h('span', 'dkc-r', e.reading); r.lang = 'ja';
  bottom.append(r, h('span', 'dkc-m', e.meaning));
  card.append(h('span', 'reveal-badge', e.ok ? '✓' : '✗'), top, bottom);
  const label = h('div', 'cast-timer', e.ok ? 'Correct!' : 'The correct kanji');
  $('dkCast').replaceChildren(card, label);
  revealUntil = Date.now() + REVEAL_MS;
  clearTimeout(revealTimer);
  revealTimer = window.setTimeout(() => {
    revealUntil = 0;
    if (!view?.casting) { $('dkCast').replaceChildren(); $('dkFeedback').replaceChildren(); }
    if (view) renderDeck(view); // your cards become playable again
  }, REVEAL_MS);
}

function ripCard(card: HTMLElement) {
  const r = zrect(card);
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
export const resetDeck = () => { resetArenaDeck(); view = null; lastCastId = 0; writingCastId = 0; coinShown = false; ui.stopCountdown('dkMatch'); ui.stopCountdown('dkTurn'); ui.stopCountdown('dkDraft'); };
