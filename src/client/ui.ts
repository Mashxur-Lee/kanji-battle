import {
  LEVEL_LABEL, LEVELS, MODE_LABEL, type AdminUserRow, type AnswerMode, type BossView, type GameMode, type GameOverReason,
  type Level, type PlayerId, type PlayerStats, type PlayerView, type PublicUser, type StudyItem,
} from '../shared/protocol';
import { dragonSvg, wizardSvg } from './wizard';

export const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

/** Tiny element helper. Always textContent — names are untrusted. */
function h(tag: string, cls = '', text?: string | number, attrs: Record<string, string> = {}): HTMLElement {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = String(text);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}
const append = (parent: HTMLElement, ...kids: HTMLElement[]) => { parent.append(...kids); return parent; };

const SCREENS = ['auth', 'menu', 'admin', 'modes', 'lobby', 'prep', 'battle', 'results'] as const;
export type Screen = (typeof SCREENS)[number];
export const show = (screen: Screen) => {
  SCREENS.forEach((s) => ($(s).hidden = s !== screen));
  scrollTo(0, 0);
};

export const setError = (text: string) => { $('error').textContent = text; };

const secs = (ms: number) => (ms / 1000).toFixed(1) + 's';
const clockText = (ms: number) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};
const levelsText = (levels: Level[]) => levels.map((l) => LEVEL_LABEL[l]).join(' + ');

// ── countdowns (one per slot, driven by requestAnimationFrame) ──────────────
const timers = new Map<string, number>();
export function countdown(slot: string, durationMs: number, onFrame: (leftMs: number, frac: number) => void, totalMs = durationMs) {
  stopCountdown(slot);
  const end = performance.now() + durationMs;
  const tick = () => {
    const left = Math.max(0, end - performance.now());
    onFrame(left, totalMs > 0 ? left / totalMs : 0);
    if (left > 0) timers.set(slot, requestAnimationFrame(tick));
  };
  tick();
}
export function stopCountdown(slot?: string) {
  for (const [k, id] of timers) if (!slot || k === slot) { cancelAnimationFrame(id); timers.delete(k); }
}

// ── top bar ──────────────────────────────────────────────────────────────────
export function setUser(user: PublicUser | null) {
  $('whoami').hidden = !user;
  $('whoName').textContent = user?.username ?? '';
  $('whoRole').hidden = user?.role !== 'admin';
  $('adminBtn').hidden = user?.role !== 'admin';
}

export function setNetStatus(text: string | null) {
  $('netStatus').hidden = !text;
  $('netStatus').textContent = text ?? '';
}

export function setAudioButtons(radio: boolean, sfx: boolean) {
  const set = (id: string, on: boolean, icon: string, label: string) => {
    $(id).setAttribute('aria-pressed', String(on));
    $(id).replaceChildren(h('span', 'ico', icon), h('span', 'lbl', ` ${label} ${on ? 'on' : 'off'}`));
  };
  set('radioBtn', radio, '♪', 'Radio');
  set('sfxBtn', sfx, sfx ? '🔊' : '🔇', 'Sounds');
}

/** Two wizards duelling in slow motion (menu / login backdrop). */
export function paintScenes() {
  for (const scene of document.querySelectorAll<HTMLElement>('.duel-scene')) {
    scene.innerHTML = '';
    for (const side of ['me', 'opp'] as const) {
      const w = h('div', `wizard ${side}`);
      const s = h('div', 'sprite');
      s.innerHTML = wizardSvg(side);
      w.append(s, h('div', 'ground'));
      scene.append(w);
    }
    scene.append(h('div', 'orb'), h('div', 'orb b'));
  }
}

// ── auth ─────────────────────────────────────────────────────────────────────
export function setAuthTab(tab: 'login' | 'register') {
  const login = tab === 'login';
  $('tabLogin').classList.toggle('on', login);
  $('tabRegister').classList.toggle('on', !login);
  $('tabLogin').setAttribute('aria-selected', String(login));
  $('tabRegister').setAttribute('aria-selected', String(!login));
  $('authSubmit').textContent = login ? 'Log in' : 'Create account';
  $<HTMLInputElement>('authPass').autocomplete = login ? 'current-password' : 'new-password';
  $('authHint').textContent = login ? '' : 'Login: 3–16 letters, numbers or _. Password: at least 6 characters.';
  $('authError').textContent = '';
}

// ── admin ────────────────────────────────────────────────────────────────────
export function showAdmin(users: AdminUserRow[], me: PublicUser, onToggle: (u: AdminUserRow) => void) {
  const banned = users.filter((u) => u.banned).length;
  $('adminInfo').textContent = `${users.length} accounts · ${banned} banned`;
  $('userRows').replaceChildren(
    ...users.map((u) => {
      const action = h('td');
      if (u.role !== 'admin' && u.id !== me.id) {
        const b = h('button', 'pill' + (u.banned ? '' : ' danger'), u.banned ? 'Unban' : 'Ban') as HTMLButtonElement;
        b.onclick = () => onToggle(u);
        action.append(b);
      }
      return append(h('tr'),
        h('td', '', u.username + (u.id === me.id ? ' (you)' : '')),
        h('td', '', u.role),
        h('td', '', new Date(u.createdAt).toLocaleDateString()),
        h('td', u.banned ? 'status-ban' : 'status-ok', u.banned ? 'Banned' : 'Active'),
        action);
    }),
  );
  show('admin');
}

// ── lobby ───────────────────────────────────────────────────────────────────
export function showLobby(code: string, mode: GameMode, players: PlayerView[], you: PlayerId, hostId: PlayerId, maxPlayers: number, minPlayers: number) {
  $('code').textContent = code;
  $('lobbyMode').textContent = MODE_LABEL[mode];
  $('lobbyPlayers').replaceChildren(
    ...players.map((p) => {
      const li = h('li');
      li.append(h('span', 'who', p.id === you ? `${p.name} (you)` : p.name));
      if (p.id === hostId) li.append(h('span', 'tag', 'host'));
      if (!p.online) li.append(h('span', 'tag off', 'away — seat kept'));
      li.append(append(h('div', 'meta'), h('span', '', levelsText(p.levels)), h('span', 'hpv', `❤ ${p.maxHp} HP`)));
      return li;
    }),
    ...Array.from({ length: Math.max(0, maxPlayers - players.length) }, () =>
      h('li', 'empty', mode === 'boss' ? 'Waiting for a teammate (optional)…' : 'Waiting for opponent…')),
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
  $('levelsHint').textContent = mode === 'boss'
    ? 'Each player picks their own. The dragon gets tougher when the party picks harder levels.'
    : mode === 'writing'
      ? 'Each player picks their own. You will write these words by hand. Harder levels hit harder — so your opponent gets more HP.'
      : 'Each player picks their own. かな = hiragana, answered in romaji. Harder levels hit harder — so your opponent gets more HP.';
  const isHost = you === hostId;
  const canStart = players.length >= minPlayers;
  $('start').hidden = !isHost;
  $<HTMLButtonElement>('start').disabled = !canStart;
  $('start').textContent = mode === 'boss' && players.length < maxPlayers ? 'Start solo' : 'Start battle';
  $('lobbyStatus').textContent = !canStart
    ? 'Share the code — the battle can start once your opponent joins.'
    : isHost ? (mode === 'boss' && players.length < maxPlayers ? 'Start now alone, or wait for a teammate.' : '') : 'Waiting for the host to start…';
  show('lobby');
}

export const selectedLevels = (): Level[] =>
  [...document.querySelectorAll<HTMLInputElement>('#levelChips input')].filter((i) => i.checked).map((i) => i.value as Level);

// ── preparation ─────────────────────────────────────────────────────────────
export function showPrep(pool: StudyItem[], durationMs: number, mode: GameMode) {
  $('prepSub').textContent = mode === 'writing'
    ? 'Memorise how each word is written. In battle you only get the meaning (and a half-second glimpse).'
    : 'Memorise the readings. They vanish when the battle starts.';
  $('studyGrid').replaceChildren(
    ...pool.map((w) => append(h('div', 'card'), h('div', 'lv', LEVEL_LABEL[w.level]), h('div', 'k', w.kanji, { lang: 'ja' }), h('div', 'r', w.reading, { lang: 'ja' }), h('div', 'm', w.meaning))),
  );
  $<HTMLButtonElement>('ready').disabled = false;
  $('readyStatus').textContent = '';
  show('prep');
  countdown('prep', durationMs, (left, frac) => {
    $('prepClock').textContent = clockText(left);
    $('prepBar').style.width = `${frac * 100}%`;
  }, Math.max(durationMs, 60_000));
}

export function setReady(readyCount: number, total: number, youReady: boolean) {
  $<HTMLButtonElement>('ready').disabled = youReady;
  $('readyStatus').textContent = `${readyCount}/${total} ready${youReady && readyCount < total ? ' — waiting for the others…' : ''}`;
}

/** The study info must disappear when the battle starts (spec §11). */
export function clearStudy() {
  stopCountdown('prep');
  $('studyGrid').replaceChildren();
}

// ── battle: HP cards ─────────────────────────────────────────────────────────
function hpBar(hp: number, max: number, label: string) {
  const pct = max > 0 ? (hp / max) * 100 : 0;
  const bar = append(h('div', 'hp' + (pct <= 25 ? ' low' : ''), undefined, { role: 'meter', 'aria-valuemin': '0', 'aria-valuemax': String(max), 'aria-valuenow': String(hp), 'aria-label': label }), h('div'));
  (bar.firstElementChild as HTMLElement).style.width = `${pct}%`;
  return bar;
}

function fighterCard(el: HTMLElement, p: PlayerView | undefined, label: string, emptyText: string) {
  if (!p) { el.replaceChildren(h('div', 'name', emptyText)); return; }
  const name = append(h('div', 'name'), h('span', 'n', label), h('span', 'combo', p.combo >= 2 ? `×${p.combo} combo` : ''));
  el.replaceChildren(name, hpBar(p.hp, p.maxHp, `${p.name} HP`), append(h('div', 'hpnum', `${p.hp} / ${p.maxHp} HP`), h('span', 'lvs', `· ${levelsText(p.levels)}${p.online ? '' : ' · away'}`)));
}

let battleMode: GameMode = 'reading';

export function renderFighters(players: PlayerView[], you: PlayerId, boss: BossView | null) {
  const me = players.find((p) => p.id === you);
  const other = players.find((p) => p.id !== you);
  fighterCard($('meCard'), me, me ? `${me.name} (you)` : '', '');
  if (battleMode === 'boss') {
    fighterCard($('oppCard'), other, other ? `${other.name} (ally)` : '', 'Solo run');
    const bar = $('bossBar');
    if (boss) bar.replaceChildren(h('div', 'bname', `🐉 ${boss.name}`), hpBar(boss.hp, boss.maxHp, `${boss.name} HP`), h('div', 'hpnum', `${boss.hp} / ${boss.maxHp}`));
  } else {
    fighterCard($('oppCard'), other, other?.name ?? '', 'Opponent left');
  }
}

// ── battle: wizards, dragon & spell effects ──────────────────────────────────
type Actor = 'me' | 'opp' | 'ally' | 'boss';
const actorEl = (a: Actor) => $(a === 'me' ? 'wizMe' : a === 'opp' ? 'wizOpp' : a === 'ally' ? 'wizAlly' : 'dragon');

function retrigger(el: HTMLElement, cls: string, ms: number) {
  el.classList.remove(cls);
  void el.offsetWidth; // restart the CSS animation
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), ms);
}

export function setupArena(mode: GameMode, players: PlayerView[], you: PlayerId) {
  battleMode = mode;
  const boss = mode === 'boss';
  const ally = players.find((p) => p.id !== you);
  $('wizOpp').hidden = boss;
  $('dragon').hidden = !boss;
  $('bossBar').hidden = !boss;
  $('wizAlly').hidden = !boss || !ally;
  for (const [id, side] of [['wizMe', 'me'], ['wizOpp', 'opp'], ['wizAlly', 'ally']] as const) {
    const w = $(id);
    w.className = `wizard ${side}`;
    w.querySelector('.sprite')!.innerHTML = wizardSvg(side);
  }
  $('dragon').className = 'dragon';
  $('dragon').querySelector('.sprite')!.innerHTML = dragonSvg();
  $('fire').hidden = true;
  $('breathWarn').hidden = true;
  $('typeArea').hidden = mode === 'writing';
  $('writeArea').hidden = mode !== 'writing';
  $('meaningPrompt').hidden = true;
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

/** The caster lunges, the kanji flies across as the spell, and the target flashes red on impact. */
export function castSpell(caster: Actor, target: Actor, kanji: string, damage: number, friendly: boolean): Promise<void> {
  const c = actorEl(caster), t = actorEl(target);
  retrigger(c, 'casting', 450);
  const arena = $('arena');
  const a = arena.getBoundingClientRect();
  const cr = c.getBoundingClientRect();
  const tr = t.getBoundingClientRect();
  const spell = h('div', 'spell' + (friendly ? '' : ' foe'), kanji, { lang: 'ja' });
  arena.append(spell);
  const fromRight = cr.left > tr.left;
  const from = { x: fromRight ? cr.left - a.left - 10 : cr.right - a.left - 30, y: cr.top - a.top + cr.height * 0.15 };
  const to = { x: tr.left - a.left + tr.width / 2 - 20, y: tr.top - a.top + tr.height * 0.4 };
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
      retrigger(t, 'hurt', 520);
      floatText(t, `−${damage}`, friendly ? '' : 'taken');
      resolve();
    };
  });
}

export function fizzle(who: Actor) {
  const w = actorEl(who);
  retrigger(w, 'fizzle', 650);
  const puff = h('div', 'puff', '💨');
  w.append(puff);
  setTimeout(() => puff.remove(), 1000);
}

export function clawHit(victim: Actor, damage: number) {
  retrigger($('dragon'), 'claw', 520);
  setTimeout(() => {
    const v = actorEl(victim);
    retrigger(v, 'hurt', 520);
    floatText(v, `−${damage}`, 'taken');
  }, 180);
}

export function breathWarning(inMs: number) {
  const el = $('breathWarn');
  el.hidden = false;
  $('dragon').classList.add('inhale');
  countdown('breath', inMs, (left) => (el.textContent = `🔥 The dragon inhales… ${Math.ceil(left / 1000)}`));
}

export function breathFire(damage: number, victims: Actor[]) {
  stopCountdown('breath');
  $('breathWarn').hidden = true;
  $('dragon').classList.remove('inhale');
  const fire = $('fire');
  // the flame starts at the dragon's mouth (left edge of the sprite, ~37% down) and sweeps left
  const arena = $('arena').getBoundingClientRect();
  const d = $('dragon').getBoundingClientRect();
  const mouthX = d.left - arena.left + d.width * 0.08;
  const mouthY = d.top - arena.top + d.height * 0.37;
  const height = Math.max(160, arena.height * 0.7);
  fire.style.left = '0px';
  fire.style.width = `${Math.max(120, mouthX)}px`;
  fire.style.top = `${mouthY - height * 0.35}px`;
  fire.style.height = `${height}px`;
  fire.hidden = false;
  fire.style.animation = 'none';
  void fire.offsetWidth;
  fire.style.animation = '';
  setTimeout(() => (fire.hidden = true), 1100);
  setTimeout(() => {
    for (const v of victims) { retrigger(actorEl(v), 'hurt', 520); floatText(actorEl(v), `−${damage}`, 'taken'); }
  }, 450);
}

export function knockOut(who: Actor) {
  actorEl(who).classList.add('ko');
}

// ── battle: flow ─────────────────────────────────────────────────────────────
export function showBattle(mode: GameMode, players: PlayerView[], boss: BossView | null, you: PlayerId, countdownMs: number, battleMs: number, onTick: (n: number) => void) {
  clearStudy();
  setupArena(mode, players, you);
  renderFighters(players, you, boss);
  $('kanji').textContent = '';
  setFeedback(null);
  $('log').textContent = '';
  lockInput();
  $('battleClock').textContent = clockText(battleMs);
  show('battle');

  const cd = $('countdown');
  if (countdownMs > 0) {
    cd.hidden = false;
    let last = -1;
    countdown('cd', countdownMs, (left) => {
      const n = Math.ceil(left / 1000);
      if (n !== last) { last = n; onTick(n); }
      cd.textContent = left > 0 ? String(n) : '戦！';
      if (left <= 0) setTimeout(() => (cd.hidden = true), 500);
    });
  } else cd.hidden = true;
  setTimeout(() => countdown('battle', battleMs, (left) => ($('battleClock').textContent = clockText(left))), countdownMs);
}

let answerMode: AnswerMode = 'reading';
export const currentAnswerMode = () => answerMode;

export interface ChallengeView { kanji: string; answer: AnswerMode; timeLimitMs: number; meaning?: string; charCount?: number; flashMs?: number }

export function showChallenge(c: ChallengeView) {
  answerMode = c.answer;
  const k = $('kanji');
  k.classList.remove('cast', 'gone');
  k.textContent = c.kanji;
  setFeedback(null);
  countdown('challenge', c.timeLimitMs, (_l, frac) => ($('challengeBar').style.width = `${frac * 100}%`));

  if (c.answer === 'writing') {
    // flash the kanji, then only the meaning remains
    const mp = $('meaningPrompt');
    mp.hidden = false;
    mp.replaceChildren(h('span', '', c.meaning ?? ''), h('small', '', `write ${c.charCount} character${c.charCount === 1 ? '' : 's'}`));
    setTimeout(() => { if (k.textContent === c.kanji) { k.classList.add('gone'); } }, c.flashMs ?? 500);
    return;
  }
  const input = $<HTMLInputElement>('answer');
  input.disabled = false;
  input.value = '';
  input.placeholder = c.answer === 'romaji' ? 'romaji, then Enter' : 'かな or romaji, then Enter';
  input.lang = c.answer === 'romaji' ? 'en' : 'ja';
  setInputHint(c.answer === 'romaji' ? 'Hiragana spell — answer in romaji' : '');
  $<HTMLButtonElement>('skip').disabled = false;
  input.focus();
}

export function setInputHint(text: string, warn = false) {
  const el = $('inputHint');
  el.textContent = text;
  el.classList.toggle('warn', warn);
}

/** Writing mode: show which character you're on. */
export function setCharSlots(total: number, written: string[], active: boolean) {
  $('charSlots').replaceChildren(
    ...Array.from({ length: total }, (_, i) => h('div', 'slot' + (i < written.length ? ' done' : i === written.length && active ? ' now' : ''), i < written.length ? '✓' : String(i + 1))),
  );
  $('padNext').textContent = written.length >= total - 1 ? 'Cast ✦' : 'Next →';
  for (const id of ['padUndo', 'padClear', 'padSkip', 'padNext']) $<HTMLButtonElement>(id).disabled = !active;
}

export function lockInput() {
  stopCountdown('challenge');
  $<HTMLInputElement>('answer').disabled = true;
  $<HTMLButtonElement>('skip').disabled = true;
  for (const id of ['padUndo', 'padClear', 'padSkip', 'padNext']) $<HTMLButtonElement>(id).disabled = true;
}

interface Feedback {
  correct: boolean; timedOut: boolean; skipped: boolean; kanji: string; reading: string; meaning: string;
  damage: number; combo: number; responseMs: number | null; recognized?: string;
}
export function setFeedback(f: Feedback | null) {
  const el = $('feedback');
  if (!f) { el.replaceChildren(); el.className = 'feedback'; return; }
  el.className = 'feedback ' + (f.correct ? 'good' : 'bad');
  $('kanji').classList.remove('gone');
  $('meaningPrompt').hidden = true;
  // Always show what the word means — on hits too, so every cast is also a review.
  const word = (cls: string) =>
    append(h('span', cls), h('span', 'rk', f.kanji, { lang: 'ja' }), h('span', 'rr', f.reading, { lang: 'ja' }), h('span', '', f.meaning));
  if (f.correct) {
    $('kanji').classList.add('cast');
    const combo = f.combo >= 2 ? ` · ×${f.combo} combo` : '';
    el.replaceChildren(h('span', 'big', `✓ CAST! ${f.damage} damage`), word('mean'), h('span', 'sub2', `${secs(f.responseMs ?? 0)}${combo}`));
  } else {
    const title = f.skipped ? '↷ Skipped' : f.timedOut ? '✗ Too slow!' : '✗ MISS!';
    const kids = [h('span', 'big', title), word('reveal')];
    if (f.recognized && !f.skipped && !f.timedOut) kids.push(h('span', 'sub2', `The pad read: ${f.recognized}`));
    el.replaceChildren(...kids);
  }
}

export function logLine(text: string, kanji?: string) {
  const el = $('log');
  el.replaceChildren(h('span', '', text));
  if (kanji) el.append(h('span', 'k', ` ${kanji}`, { lang: 'ja' }));
}

// ── results ─────────────────────────────────────────────────────────────────
const REASONS: Record<GameOverReason, string> = {
  ko: 'Knock-out', time: 'Time up', forfeit: 'A player left the battle',
  boss_slain: 'The Black Dragon has fallen', party_wiped: 'The party was burned to ash',
};

export function showResults(mode: GameMode, players: PlayerView[], you: PlayerId, winnerId: PlayerId | null, teamWon: boolean | null, reason: GameOverReason, stats: Record<PlayerId, PlayerStats>) {
  stopCountdown();
  if (mode === 'boss') {
    $('resultTitle').textContent = teamWon ? '🐉 Dragon slain!' : '🔥 Defeat';
    $('resultReason').textContent = teamWon ? REASONS.boss_slain : reason === 'time' ? 'Time up — the dragon survived' : REASONS[reason];
  } else {
    $('resultTitle').textContent = winnerId === null ? 'Draw' : winnerId === you ? '🏆 Victory' : 'Defeat';
    $('resultReason').textContent = reason === 'time' ? 'Time up — most HP left wins' : REASONS[reason];
  }

  const otherId = Object.keys(stats).find((id) => id !== you);
  const me = stats[you];
  const other = otherId ? stats[otherId] : undefined;
  const otherName = players.find((p) => p.id === otherId)?.name ?? (mode === 'boss' ? 'Ally' : 'Opponent');
  const rows: Array<[string, (s: PlayerStats) => string]> = [
    [mode === 'boss' ? 'Damage to dragon' : 'Damage dealt', (s) => String(s.damageDealt)],
    ['Accuracy', (s) => (s.attempts ? `${Math.round(s.accuracy * 100)}% (${s.correct}/${s.attempts})` : '—')],
    ['Avg response', (s) => (s.avgResponseMs !== null ? secs(s.avgResponseMs) : '—')],
    ['Best combo', (s) => `×${s.bestCombo}`],
  ];
  const cmp = $('statCompare');
  cmp.replaceChildren(h('div', 'h me', 'You'), h('div'), h('div', 'h r', other ? otherName : ''));
  for (const [label, fmt] of rows) cmp.append(h('div', 'v', fmt(me)), h('div', 'lbl', label), h('div', 'v r', other ? fmt(other) : ''));

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
  $('rematch').textContent = 'Rematch';
  $('rematchStatus').textContent = '';
  show('results');
}

export function setRematchStatus(votes: PlayerId[], you: PlayerId, playerCount: number, minPlayers: number) {
  const youVoted = votes.includes(you);
  $<HTMLButtonElement>('rematch').disabled = youVoted;
  if (playerCount < minPlayers) {
    $('rematch').textContent = 'Back to lobby';
    $<HTMLButtonElement>('rematch').disabled = false;
    $('rematchStatus').textContent = 'Your opponent left.';
  } else if (votes.length === 0) $('rematchStatus').textContent = '';
  else $('rematchStatus').textContent = youVoted ? 'Waiting for the others to accept…' : 'Rematch requested!';
}
