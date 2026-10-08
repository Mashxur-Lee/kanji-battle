import {
  LEVEL_LABEL, LEVELS, type AnswerMode, type GameOverReason, type Level, type PlayerId, type PlayerStats,
  type PlayerView, type StudyItem,
} from '../shared/protocol';
import { wizardSvg } from './wizard';

export const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

/** Tiny element helper. Always textContent — player names are untrusted. */
function h(tag: string, cls = '', text?: string | number, attrs: Record<string, string> = {}): HTMLElement {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = String(text);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}
const append = (parent: HTMLElement, ...kids: HTMLElement[]) => { parent.append(...kids); return parent; };

const SCREENS = ['menu', 'lobby', 'prep', 'battle', 'results'] as const;
export type Screen = (typeof SCREENS)[number];
export const show = (screen: Screen) => SCREENS.forEach((s) => ($(s).hidden = s !== screen));

export const setError = (text: string) => { $('error').textContent = text; };

const secs = (ms: number) => (ms / 1000).toFixed(1) + 's';
const clockText = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};
const levelsText = (levels: Level[]) => levels.map((l) => LEVEL_LABEL[l]).join(' + ');

// ── countdowns (one per slot, driven by requestAnimationFrame) ──────────────
const timers = new Map<string, number>();
export function countdown(slot: string, durationMs: number, onFrame: (leftMs: number, frac: number) => void) {
  stopCountdown(slot);
  const end = performance.now() + durationMs;
  const tick = () => {
    const left = Math.max(0, end - performance.now());
    onFrame(left, durationMs > 0 ? left / durationMs : 0);
    if (left > 0) timers.set(slot, requestAnimationFrame(tick));
  };
  tick();
}
export function stopCountdown(slot?: string) {
  for (const [k, id] of timers) if (!slot || k === slot) { cancelAnimationFrame(id); timers.delete(k); }
}

// ── lobby ───────────────────────────────────────────────────────────────────
export function showLobby(code: string, players: PlayerView[], you: PlayerId, hostId: PlayerId, maxPlayers: number) {
  $('code').textContent = code;
  $('lobbyPlayers').replaceChildren(
    ...players.map((p) => {
      const li = h('li');
      li.append(h('span', 'who', p.id === you ? `${p.name} (you)` : p.name));
      if (p.id === hostId) li.append(h('span', 'tag', 'host'));
      li.append(append(h('div', 'meta'), h('span', '', levelsText(p.levels)), h('span', 'hpv', `❤ ${p.maxHp} HP`)));
      return li;
    }),
    ...Array.from({ length: Math.max(0, maxPlayers - players.length) }, () => h('li', 'empty', 'Waiting for opponent…')),
  );

  const mine = players.find((p) => p.id === you)?.levels ?? [];
  $('levelChips').replaceChildren(
    ...LEVELS.map((lv) => {
      const on = mine.includes(lv);
      const label = h('label', 'chip' + (on ? ' on' : ''), LEVEL_LABEL[lv]);
      const box = h('input', '', undefined, { type: 'checkbox', value: lv }) as HTMLInputElement;
      box.checked = on;
      label.prepend(box);
      return label;
    }),
  );
  const isHost = you === hostId;
  const full = players.length >= maxPlayers;
  $('start').hidden = !isHost;
  $<HTMLButtonElement>('start').disabled = !full;
  $('lobbyStatus').textContent = !full ? 'Share the code — the battle can start once your opponent joins.' : isHost ? '' : 'Waiting for the host to start…';
  show('lobby');
}

export const selectedLevels = (): Level[] =>
  [...document.querySelectorAll<HTMLInputElement>('#levelChips input')].filter((i) => i.checked).map((i) => i.value as Level);

// ── preparation ─────────────────────────────────────────────────────────────
export function showPrep(pool: StudyItem[], durationMs: number) {
  $('studyGrid').replaceChildren(
    ...pool.map((w) => append(h('div', 'card'), h('div', 'lv', LEVEL_LABEL[w.level]), h('div', 'k', w.kanji, { lang: 'ja' }), h('div', 'r', w.reading, { lang: 'ja' }), h('div', 'm', w.meaning))),
  );
  $<HTMLButtonElement>('ready').disabled = false;
  $('readyStatus').textContent = '';
  show('prep');
  countdown('prep', durationMs, (left, frac) => {
    $('prepClock').textContent = clockText(left);
    $('prepBar').style.width = `${frac * 100}%`;
  });
}

export function setReady(readyCount: number, total: number, youReady: boolean) {
  $<HTMLButtonElement>('ready').disabled = youReady;
  $('readyStatus').textContent = `${readyCount}/${total} ready${youReady && readyCount < total ? ' — waiting for your opponent…' : ''}`;
}

/** The study info must disappear when the battle starts (spec §11). */
export function clearStudy() {
  stopCountdown('prep');
  $('studyGrid').replaceChildren();
}

// ── battle: HP cards ─────────────────────────────────────────────────────────
function fighterCard(el: HTMLElement, p: PlayerView | undefined, isMe: boolean) {
  if (!p) { el.replaceChildren(h('div', 'name', 'Opponent left')); return; }
  const name = append(h('div', 'name'), h('span', 'n', isMe ? `${p.name} (you)` : p.name), h('span', 'combo', p.combo >= 2 ? `×${p.combo} combo` : ''));
  const pct = (p.hp / p.maxHp) * 100;
  const bar = append(h('div', 'hp' + (pct <= 25 ? ' low' : ''), undefined, { role: 'meter', 'aria-valuemin': '0', 'aria-valuemax': String(p.maxHp), 'aria-valuenow': String(p.hp), 'aria-label': `${p.name} HP` }), h('div'));
  (bar.firstElementChild as HTMLElement).style.width = `${pct}%`;
  el.replaceChildren(name, bar, append(h('div', 'hpnum', `${p.hp} / ${p.maxHp} HP`), h('span', 'lvs', `· ${levelsText(p.levels)}`)));
}

export function renderFighters(players: PlayerView[], you: PlayerId) {
  fighterCard($('meCard'), players.find((p) => p.id === you), true);
  fighterCard($('oppCard'), players.find((p) => p.id !== you), false);
}

// ── battle: wizards & spell effects ──────────────────────────────────────────
const wiz = (mine: boolean) => $(mine ? 'wizMe' : 'wizOpp');

function retrigger(el: HTMLElement, cls: string, ms: number) {
  el.classList.remove(cls);
  void el.offsetWidth; // restart the CSS animation
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), ms);
}

export function resetWizards() {
  for (const mine of [true, false]) {
    const w = wiz(mine);
    w.className = `wizard ${mine ? 'me' : 'opp'}`;
    w.querySelector('.sprite')!.innerHTML = wizardSvg(mine ? 'me' : 'opp');
  }
}

function floatText(target: HTMLElement, text: string, cls: string) {
  const arena = $('arena');
  const a = arena.getBoundingClientRect();
  const t = target.getBoundingClientRect();
  const f = h('div', 'float ' + cls, text);
  f.style.left = `${t.left - a.left + t.width / 2 - 20}px`;
  f.style.top = `${t.top - a.top}px`;
  arena.append(f);
  setTimeout(() => f.remove(), 1000);
}

/**
 * A caster raises their staff, the kanji flies across the arena as the spell, and the target
 * flashes red on impact. Resolves when the spell lands.
 */
export function castSpell(casterIsMe: boolean, kanji: string, damage: number): Promise<void> {
  const caster = wiz(casterIsMe);
  const target = wiz(!casterIsMe);
  retrigger(caster, 'casting', 450);

  const arena = $('arena');
  const a = arena.getBoundingClientRect();
  const c = caster.getBoundingClientRect();
  const t = target.getBoundingClientRect();
  const spell = h('div', 'spell' + (casterIsMe ? '' : ' foe'), kanji, { lang: 'ja' });
  arena.append(spell);
  // start at the caster's staff orb (upper outer corner), end at the target's chest
  const from = { x: casterIsMe ? c.right - a.left - 30 : c.left - a.left - 10, y: c.top - a.top + c.height * 0.15 };
  const to = { x: t.left - a.left + t.width / 2 - 20, y: t.top - a.top + t.height * 0.45 };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const anim = spell.animate(
    [
      { transform: `translate(${from.x}px, ${from.y}px) scale(.6)`, opacity: 0.2 },
      { transform: `translate(${(from.x + to.x) / 2}px, ${Math.min(from.y, to.y) - 40}px) scale(1.1)`, opacity: 1, offset: 0.5 },
      { transform: `translate(${to.x}px, ${to.y}px) scale(1.3)`, opacity: 1 },
    ],
    { duration: reduced ? 1 : 420, easing: 'ease-in' },
  );
  return new Promise((resolve) => {
    anim.onfinish = () => {
      spell.remove();
      retrigger(target, 'hurt', 520);
      floatText(target, `−${damage}`, casterIsMe ? '' : 'taken');
      resolve();
    };
  });
}

export function fizzle(mine: boolean) {
  const w = wiz(mine);
  retrigger(w, 'fizzle', 650);
  const puff = h('div', 'puff', '💨');
  w.append(puff);
  setTimeout(() => puff.remove(), 1000);
}

export function knockOut(mine: boolean) {
  wiz(mine).classList.add('ko');
}

// ── battle: flow ─────────────────────────────────────────────────────────────
export function showBattle(players: PlayerView[], you: PlayerId, countdownMs: number, battleMs: number, onTick: (n: number) => void) {
  clearStudy();
  resetWizards();
  renderFighters(players, you);
  $('kanji').textContent = '';
  setFeedback(null);
  $('log').textContent = '';
  lockInput();
  $('battleClock').textContent = clockText(battleMs);
  show('battle');

  const cd = $('countdown');
  cd.hidden = false;
  let last = -1;
  countdown('cd', countdownMs, (left) => {
    const n = Math.ceil(left / 1000);
    if (n !== last) { last = n; onTick(n); }
    cd.textContent = left > 0 ? String(n) : '戦！';
    if (left <= 0) setTimeout(() => (cd.hidden = true), 500);
  });
  setTimeout(() => countdown('battle', battleMs, (left) => ($('battleClock').textContent = clockText(left))), countdownMs);
}

let answerMode: AnswerMode = 'reading';
export const currentAnswerMode = () => answerMode;

export function showChallenge(kanji: string, mode: AnswerMode, timeLimitMs: number) {
  answerMode = mode;
  const k = $('kanji');
  k.classList.remove('cast');
  k.textContent = kanji;
  setFeedback(null);
  const input = $<HTMLInputElement>('answer');
  input.disabled = false;
  input.value = '';
  input.placeholder = mode === 'romaji' ? 'romaji, then Enter' : 'かな or romaji, then Enter';
  input.lang = mode === 'romaji' ? 'en' : 'ja';
  setInputHint(mode === 'romaji' ? 'Hiragana spell — answer in romaji' : '');
  $<HTMLButtonElement>('skip').disabled = false;
  input.focus();
  countdown('challenge', timeLimitMs, (_l, frac) => ($('challengeBar').style.width = `${frac * 100}%`));
}

export function setInputHint(text: string, warn = false) {
  const el = $('inputHint');
  el.textContent = text;
  el.classList.toggle('warn', warn);
}

export function lockInput() {
  stopCountdown('challenge');
  $<HTMLInputElement>('answer').disabled = true;
  $<HTMLButtonElement>('skip').disabled = true;
}

interface Feedback {
  correct: boolean; timedOut: boolean; skipped: boolean; kanji: string; reading: string; meaning: string;
  damage: number; combo: number; responseMs: number | null;
}
export function setFeedback(f: Feedback | null) {
  const el = $('feedback');
  if (!f) { el.replaceChildren(); el.className = 'feedback'; return; }
  el.className = 'feedback ' + (f.correct ? 'good' : 'bad');
  // Always show what the word means — on hits too, so every cast is also a review.
  const word = (cls: string) =>
    append(h('span', cls), h('span', 'rk', f.kanji, { lang: 'ja' }), h('span', 'rr', f.reading, { lang: 'ja' }), h('span', '', f.meaning));
  if (f.correct) {
    $('kanji').classList.add('cast');
    const combo = f.combo >= 2 ? ` · ×${f.combo} combo` : '';
    el.replaceChildren(h('span', 'big', `✓ CAST! ${f.damage} damage`), word('mean'), h('span', 'sub2', `${secs(f.responseMs ?? 0)}${combo}`));
  } else {
    const title = f.skipped ? '↷ Skipped' : f.timedOut ? '✗ Too slow!' : '✗ MISS!';
    el.replaceChildren(h('span', 'big', title), word('reveal'));
  }
}

export function logOpponent(text: string, kanji?: string) {
  const el = $('log');
  el.replaceChildren(h('span', '', text));
  if (kanji) el.append(h('span', 'k', ` ${kanji}`, { lang: 'ja' }));
}

// ── results ─────────────────────────────────────────────────────────────────
const REASONS: Record<GameOverReason, string> = { ko: 'Knock-out', time: 'Time up — most HP left wins', forfeit: 'Opponent left the battle' };

export function showResults(players: PlayerView[], you: PlayerId, winnerId: PlayerId | null, reason: GameOverReason, stats: Record<PlayerId, PlayerStats>) {
  stopCountdown();
  $('resultTitle').textContent = winnerId === null ? 'Draw' : winnerId === you ? '🏆 Victory' : 'Defeat';
  $('resultReason').textContent = REASONS[reason];

  const oppId = Object.keys(stats).find((id) => id !== you);
  const me = stats[you];
  const opp = oppId ? stats[oppId] : undefined;
  const oppName = players.find((p) => p.id === oppId)?.name ?? 'Opponent';
  const rows: Array<[string, (s: PlayerStats) => string]> = [
    ['Damage dealt', (s) => String(s.damageDealt)],
    ['Accuracy', (s) => (s.attempts ? `${Math.round(s.accuracy * 100)}% (${s.correct}/${s.attempts})` : '—')],
    ['Avg response', (s) => (s.avgResponseMs !== null ? secs(s.avgResponseMs) : '—')],
    ['Best combo', (s) => `×${s.bestCombo}`],
  ];
  const cmp = $('statCompare');
  cmp.replaceChildren(h('div', 'h me', 'You'), h('div'), h('div', 'h r', oppName));
  for (const [label, fmt] of rows) cmp.append(h('div', 'v', fmt(me)), h('div', 'lbl', label), h('div', 'v r', opp ? fmt(opp) : '—'));

  const byKanji = new Map(me.words.map((w) => [w.kanji, w]));
  $('struggledBox').hidden = me.struggled.length === 0;
  $('struggled').replaceChildren(
    ...me.struggled.map((k) => {
      const w = byKanji.get(k)!;
      return append(h('div', 'card'), h('div', 'k', w.kanji, { lang: 'ja' }), h('div', 'r', w.reading, { lang: 'ja' }), h('div', 'm', w.meaning));
    }),
  );

  $('wordRows').replaceChildren(
    ...me.words.map((w) => {
      const result =
        w.attempts === 0 ? h('span', 'na', 'not seen')
        : w.correct === w.attempts ? h('span', 'ok', `✓ ${w.correct}/${w.attempts}`)
        : h('span', 'no', `✗ ${w.correct}/${w.attempts}`);
      return append(h('tr'),
        h('td', 'k', w.kanji, { lang: 'ja' }), h('td', 'rd', w.reading, { lang: 'ja' }), h('td', '', w.meaning),
        append(h('td'), result), h('td', '', w.avgMs !== null ? secs(w.avgMs) : '—'));
    }),
  );
  $<HTMLButtonElement>('rematch').disabled = false;
  $('rematch').textContent = players.length < 2 ? 'Back to lobby' : 'Rematch';
  $('rematchStatus').textContent = '';
  show('results');
}

export function setRematchStatus(votes: PlayerId[], you: PlayerId, playerCount: number) {
  const youVoted = votes.includes(you);
  $<HTMLButtonElement>('rematch').disabled = youVoted;
  if (playerCount < 2) {
    $('rematch').textContent = 'Back to lobby';
    $<HTMLButtonElement>('rematch').disabled = false;
    $('rematchStatus').textContent = 'Your opponent left.';
  } else if (votes.length === 0) $('rematchStatus').textContent = '';
  else $('rematchStatus').textContent = youVoted ? 'Waiting for your opponent to accept…' : 'Your opponent wants a rematch!';
}

export function setAudioButtons(radio: boolean, sfx: boolean) {
  $('radioBtn').setAttribute('aria-pressed', String(radio));
  $('radioBtn').textContent = radio ? '♪ Radio on' : '♪ Radio off';
  $('sfxBtn').setAttribute('aria-pressed', String(sfx));
  $('sfxBtn').textContent = sfx ? '🔊 Sounds on' : '🔇 Sounds off';
}
