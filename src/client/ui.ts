import { locale } from './i18n';
import { viewH, viewW, zrect } from './zoom';
import { showStrokeOrder } from './strokes';
import {
  LEVEL_LABEL, LEVELS, MODE_LABEL, type AdminUserRow, type AnswerMode, type BossView, type GameMode, type GameOverReason,
  type Level, type MatchSummary, type PlayerId, type PlayerStats, type PlayerView, type PublicProfile, type PublicUser, type StudyItem, type Avatar,
} from '../shared/protocol';
import { avatarSvg, dragonSvg, heroSvg, wizardSvg } from './wizard';
import { arena as arena3d, arenaForBattle } from './arena';
import { critText, flameColor, flameShades, levelOf, levelProgress, levelXp } from '../shared/progress';

export const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

/** Tiny element helper. Always textContent — names are untrusted. */
function h(tag: string, cls = '', text?: string | number, attrs: Record<string, string> = {}): HTMLElement {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = String(text);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}
const append = (parent: HTMLElement, ...kids: Array<HTMLElement | string>) => { parent.append(...kids); return parent; };

const SCREENS = ['auth', 'menu', 'queue', 'admin', 'modes', 'lobby', 'prep', 'battle', 'results', 'study', 'review', 'customize', 'deck', 'history', 'progress', 'daily', 'friends'] as const;
export type Screen = (typeof SCREENS)[number];
let screenListener: (s: Screen) => void = () => {};
export const onScreen = (fn: (s: Screen) => void) => { screenListener = fn; };
export const currentScreen = () => SCREENS.find((s) => !$(s).hidden);
export const show = (screen: Screen) => {
  SCREENS.forEach((s) => ($(s).hidden = s !== screen));
  scrollTo(0, 0);
  screenListener(screen);
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

// ── connection bars ─────────────────────────────────────────────────────────
const rtts = new Map<string, number | null>();
/** 3 green bars = good (<150 ms), 2 yellow = medium (<400 ms), 1 red = poor, grey = offline. */
export function netQuality(rtt: number | null | undefined): 0 | 1 | 2 | 3 {
  if (rtt === null || rtt === undefined) return 0;
  return rtt < 150 ? 3 : rtt < 400 ? 2 : 1;
}
function paintNet(el: HTMLElement) {
  const rtt = rtts.get(el.dataset.net ?? '');
  const q = netQuality(rtt);
  el.className = `net q${q}`;
  el.title = rtt == null ? 'Connection: offline / measuring…' : `Connection: ${['', 'poor', 'medium', 'good'][q]} (${rtt} ms)`;
}
export function netBars(playerId: string): HTMLElement {
  const el = h('span', 'net');
  el.dataset.net = playerId;
  el.innerHTML = '<i></i><i></i><i></i>';
  paintNet(el);
  return el;
}
export function setNet(map: Record<string, number | null>) {
  for (const [id, rtt] of Object.entries(map)) rtts.set(id, rtt);
  document.querySelectorAll<HTMLElement>('.net[data-net]').forEach(paintNet);
}

// ── top bar ──────────────────────────────────────────────────────────────────
export interface ProfileView { xp: number; level: number; crit: number; learned: number; learnedToday?: number; wins?: number; losses?: number; pic?: string | null; streak?: number; bestStreak?: number }
/** A round profile picture (or nothing). */
export function picEl(url: string | null | undefined, cls = 'pic'): HTMLElement | '' {
  if (!url) return '';
  const img = h('img', cls, undefined, { src: url, alt: '', loading: 'lazy', decoding: 'async' }) as HTMLImageElement;
  img.onerror = () => img.remove();
  return img;
}
export function setProfile(p: ProfileView | null) {
  if (!p) return;
  const lx = levelXp(p.xp);
  $('whoLevel').textContent = `Lv ${lx.level} · ${lx.into.toLocaleString()} / ${lx.need.toLocaleString()} XP`;
  $('whoCrit').textContent = critText(p.crit);
  $('ppWins').textContent = String(p.wins ?? 0);
  $('ppLosses').textContent = String(p.losses ?? 0);
  const games = (p.wins ?? 0) + (p.losses ?? 0);
  $('ppRate').textContent = games ? `${Math.round(((p.wins ?? 0) / games) * 100)}%` : '—';
  $('ppLearned').textContent = String(p.learned);
  $('ppToday').textContent = String(p.learnedToday ?? 0);
  $('ppStreak').textContent = String(p.streak ?? 0);
  $('ppBestStreak').textContent = String(Math.max(p.bestStreak ?? 0, p.streak ?? 0));
  for (const id of ['whoPic', 'ppPic']) {
    const el = $(id);
    el.replaceChildren(p.pic ? picEl(p.pic, 'pic fill') : '✦');
    el.classList.toggle('has-pic', !!p.pic);
  }
  $('picRemove').hidden = !p.pic;
  $('whoCrit').title = 'Crit chance today: 1% + 1% for every spell you learn today (max 50%). Resets at midnight.';
  $('whoXp').style.width = `${levelProgress(p.xp) * 100}%`;
  $('whoXp').parentElement!.title = `${lx.into} / ${lx.need} XP to level ${lx.level + 1}`;
}

let toastTimer = 0;
export function toast(text: string, ms = 3500) {
  const el = $('toast');
  el.textContent = text;
  el.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => (el.hidden = true), ms);
}

export function setUser(user: PublicUser | null) {
  $('whoami').hidden = !user;
  $('whoName').textContent = user?.username ?? '';
  $('ppName').textContent = user?.username ?? '';
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
  set('radioBtn', radio, '', 'Music');
  set('sfxBtn', sfx, '', 'Sounds');
}

/** Two wizards duelling in slow motion (menu / login backdrop). */
let sceneStaff: string | null = null;
/** The menu's duelling wizards — both hold the staff you have equipped. */
export function paintScenes(staff: string | null = sceneStaff) {
  sceneStaff = staff;
  for (const scene of document.querySelectorAll<HTMLElement>('.duel-scene')) {
    if (scene.childElementCount) { // already drawn: just swap the staffs
      for (const side of ['me', 'opp'] as const) { const s = scene.querySelector(`.wizard.${side} .sprite`); if (s) s.innerHTML = wizardSvg(side, staff); }
      continue;
    }
    for (const side of ['me', 'opp'] as const) {
      const w = h('div', `wizard ${side}`);
      const s = h('div', 'sprite');
      s.innerHTML = wizardSvg(side, staff);
      w.append(s, h('div', 'ground'));
      scene.append(w);
    }
    // the spells they throw are kanji, a new random one every cast
    for (const cls of ['orb', 'orb b']) {
      const orb = h('div', cls, randomSpellKanji());
      orb.lang = 'ja';
      orb.addEventListener('animationiteration', () => { orb.textContent = randomSpellKanji(); });
      scene.append(orb);
    }
  }
}

const SPELL_KANJI = [...'火水木金土日月山川雷風光闇炎氷剣魔力星空雲雪花龍神雨海森石鉄竜鬼夢命心刀弓盾王天地波嵐霧影'];
const randomSpellKanji = () => SPELL_KANJI[Math.floor(Math.random() * SPELL_KANJI.length)];

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
/** "5 min", "2 h", "3 d" since a time */
function ago(t: number) {
  const m = Math.max(0, Math.round((Date.now() - t) / 60_000));
  return m < 60 ? `${m} min` : m < 60 * 24 ? `${Math.round(m / 60)} h` : `${Math.round(m / 1440)} d`;
}
export function showAdmin(users: AdminUserRow[], me: PublicUser, db: { storage: string; persistent: boolean }, onToggle: (u: AdminUserRow) => void) {
  const banned = users.filter((u) => u.banned).length;
  const online = users.filter((u) => u.online).length;
  $('adminInfo').textContent = `${online} online now · ${users.length} accounts · ${banned} banned`;
  // online players first, then everyone else by when they were last around
  users = [...users].sort((a, b) => Number(!!b.online) - Number(!!a.online) || (b.lastSeen ?? 0) - (a.lastSeen ?? 0) || String(b.loginDay ?? '').localeCompare(String(a.loginDay ?? '')));
  const st = $('adminStorage');
  st.className = 'storage ' + (db.persistent ? 'ok' : 'warn');
  st.textContent = db.storage === 'postgres'
    ? '✓ Accounts, XP and study sets are saved in the Postgres database — updates and restarts keep them.'
    : db.persistent
      ? `Saved to a local file (${db.storage}).`
      : 'No database connected: accounts, XP and study sets are saved on the server disk, which Render wipes on every deploy and restart. Set DATABASE_URL (Neon) in Render → Environment.';
  $('userRows').replaceChildren(
    ...users.map((u) => {
      const action = h('td');
      if (u.role !== 'admin' && u.id !== me.id) {
        const b = h('button', 'pill' + (u.banned ? '' : ' danger'), u.banned ? 'Unban' : 'Ban') as HTMLButtonElement;
        b.onclick = () => onToggle(u);
        action.append(b);
      }
      const presence = append(h('td', 'presence ' + (u.online ? 'on' : 'off')), h('span', 'dot'),
        append(h('span', 'pr-txt'), h('b', '', u.online ? 'Online' : 'Offline'),
          h('small', '', u.online ? `${u.activity ?? ''}${u.onlineSince ? ` · ${ago(u.onlineSince)}` : ''}` : u.lastSeen ? `seen ${ago(u.lastSeen)} ago` : u.loginDay ? `last day: ${u.loginDay}` : 'never logged in')));
      return append(h('tr', u.online ? 'is-online' : ''),
        presence,
        h('td', '', u.username + (u.id === me.id ? ' (you)' : '')),
        h('td', '', u.role),
        h('td', 'num', `Lv ${u.level ?? 0}`),
        h('td', 'num', (u.xp ?? 0).toLocaleString()),
        h('td', 'num', `${u.learned ?? 0} / ${u.cards ?? 0}`),
        h('td', 'num', critText(u.crit ?? 0)),
        h('td', '', new Date(u.createdAt).toLocaleDateString(locale())),
        h('td', u.banned ? 'status-ban' : 'status-ok', u.banned ? 'Banned' : 'Active'),
        action);
    }),
  );
  show('admin');
}

// ── lobby: mini guides ──────────────────────────────────────────────────────
const tile = (k: string, cls = '') => h('span', 'g-tile ' + cls, k, { lang: 'ja' });
const GUIDES: Record<Exclude<GameMode, 'deck'>, { title: string; pic: () => HTMLElement; steps: Array<[string, string]> }> = {
  reading: {
    title: 'How Kanji Reading works',
    pic: () => append(h('div', 'g-pic'), tile('漢字'), h('span', 'g-arrow', '→'), tile('かんじ', 'ok'), h('span', 'g-or', 'or'), h('span', 'g-tile ok', 'kanji')),
    steps: [
      ['📖', '60 s to study your 10 words (reading + meaning). Then they disappear.'],
      ['⌨️', 'A kanji appears: type its reading in kana or romaji, Enter.'],
      ['⚔️', 'Right = a spell at your opponent. Faster and in a row = more damage (combo up to ×1.5; 5 in a row sets you on fire 🔥).'],
      ['💨', 'Wrong or Skip (Esc) = a miss; the answer is shown and the word comes back later.'],
      ['❤️', 'Your HP depends on how hard your opponent hits (their levels). Most HP after 5 min wins.'],
    ],
  },
  writing: {
    title: 'How Kanji Writing works',
    pic: () => append(h('div', 'g-pic'), h('span', 'g-hint', 'かんじ — kanji'), h('span', 'g-arrow', '→'), append(h('span', 'g-pad'), tile('漢'), tile('字'))),
    steps: [
      ['👁️', 'Look at the kanji (up to 3.5 s), then press CAST! (or Enter): it vanishes and the pad and keyboard appear. Pasting is off.'],
      ['🖌️', 'Write the whole word on the pad, left to right (one cell per character) — or type it with a Japanese keyboard.'],
      ['✅', 'Only kanji count (kana only at the かな level). Messy is fine — it’s judged by shape.'],
      ['⚔️', 'Right = damage, with the same combo and speed bonus as Reading.'],
    ],
  },
  boss: {
    title: 'How Boss Elimination works',
    pic: () => append(h('div', 'g-pic'), h('span', 'g-emoji', '🧙🧙🧙🧙'), h('span', 'g-arrow', '⚔'), h('span', 'g-emoji', '🐉')),
    steps: [
      ['👥', 'Up to 4 players (friends or AI) against the Black Dragon; the online queue always makes a full party of 4. Its HP grows with the party.'],
      ['⌨️', 'Each of you gets your own kanji: type the reading. Right answers hit the dragon.'],
      ['🦴', 'A mistake gets you clawed (−45).'],
      ['🔥', 'Every 30 s it breathes fire on everyone (−110) — unless you are on fire yourself (5 in a row): then you are immune.'],
      ['🏆', 'Slay it within 5 minutes. If everyone falls, the dragon wins.'],
    ],
  },
  rapid: {
    title: 'How 1v1 Rapid works',
    pic: () => append(h('div', 'g-pic'), tile('早い'), h('span', 'g-arrow', '→'), h('span', 'g-tile ok', 'はやい ⚡')),
    steps: [
      ['🎯', 'Both players get the same kanji — no study phase.'],
      ['⚡', 'First correct reading (kana or romaji) hits the other player.'],
      ['🔁', 'Wrong? Try again until the 12 s round ends.'],
      ['❤️', 'Same HP for both. Last wizard standing wins.'],
    ],
  },
};
/** The mini instructions of a battle mode (lobby, and the online queue on hover). */
export function modeGuideNodes(mode: Exclude<GameMode, 'deck'>): HTMLElement[] {
  const g = GUIDES[mode];
  const ol = h('ol', 'g-flow');
  for (const [icon, text] of g.steps) ol.append(append(h('li'), h('span', 'g-ic', icon), h('span', '', text)));
  return [h('h3', '', g.title), g.pic(), ol, h('p', 'g-foot', 'Crit: 1% + 1% per spell learned today (max 50%). Playing with AI gives half XP; a forfeit gives none.')];
}
function renderModeGuide(mode: GameMode) {
  if (mode === 'deck') return;
  $('modeGuide').replaceChildren(...modeGuideNodes(mode));
}

// ── lobby ───────────────────────────────────────────────────────────────────
export function showLobby(code: string, mode: GameMode, players: PlayerView[], you: PlayerId, hostId: PlayerId, maxPlayers: number, minPlayers: number) {
  $('code').textContent = code;
  $('lobbyMode').textContent = MODE_LABEL[mode];
  $('lobbyPlayers').replaceChildren(
    ...players.map((p) => {
      const li = h('li');
      const av = h('span', 'who-av');
      av.innerHTML = avatarSvg(p.avatar, p.id === you ? 'me' : 'opp', p.staff);
      const who = h('span', 'who', p.id === you ? `${p.name} (you)` : p.name);
      if (p.id !== you) markProfile(who, p);
      li.append(av, picEl(p.pic), who);
      if (p.bot) li.append(h('span', 'tag ai', p.bot === 'BEGINNER' ? 'AI · beginner' : `AI · knows ${p.bot}`));
      else li.append(netBars(p.id), h('span', 'lv', `Lv ${p.level}`));
      if (p.bot && you === hostId) { const x = h('button', 'pill rm-bot', '✕', { title: 'Remove this AI' }); x.dataset.removeBot = p.id; li.append(x); }
      if (p.crit > 0 && !p.bot) li.append(h('span', 'critv', `✦ ${critText(p.crit)} crit`));
      if (p.id === hostId) li.append(h('span', 'tag', 'host'));
      if (!p.online) li.append(h('span', 'tag off', 'away — seat kept'));
      if (mode === 'deck') li.append(h('span', 'tag ' + (p.ready ? 'ready' : 'notready'), p.ready ? '✓ Ready' : 'Not ready'));
      else if (p.bot) li.append(append(h('div', 'meta'), h('span', '', levelsText(p.levels)), h('span', 'hpv', `${p.maxHp} HP`)));
      else if (!p.bot) li.append(append(h('div', 'meta'), h('span', '', levelsText(p.levels)), h('span', 'hpv', `${p.maxHp} HP`)));
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
  $('levelsHint').textContent = mode === 'deck'
    ? 'Deck Duel draws cards from every level (N5–N1). Your level picks only change your character here.'
    : mode === 'rapid'
      ? 'Shared levels: both players race on the same kanji, so a change here changes it for everyone.'
      : mode === 'boss'
    ? 'Each player picks their own. The dragon gets tougher when the party picks harder levels.'
    : mode === 'writing'
      ? 'Each player picks their own. You will write these words by hand. Harder levels hit harder — so your opponent gets more HP.'
      : 'Each player picks their own. かな = hiragana, answered in romaji. Harder levels hit harder — so your opponent gets more HP.';
  const isHost = you === hostId;
  const canStart = players.length >= minPlayers;
  $('addBot').hidden = !isHost || players.length >= maxPlayers;
  const deck = mode === 'deck';
  $('levels').hidden = deck; // Deck Duel deals cards from every level — nothing to pick
  $('deckGuide').hidden = !deck;
  $('modeGuide').hidden = deck;
  if (!deck) renderModeGuide(mode);
  const meReady = !!players.find((p) => p.id === you)?.ready;
  $('readyBtn').hidden = !deck;
  $('readyBtn').textContent = meReady ? 'Not ready' : 'Ready';
  $('readyBtn').classList.toggle('is-ready', meReady);
  $('readyBtn').dataset.ready = meReady ? '1' : '';
  if (deck) {
    $('start').hidden = true;
    $('lobbyStatus').textContent = !canStart
      ? 'Share the code, or add an AI opponent — then press Ready. The duel starts when both are ready.'
      : meReady ? 'Waiting for your opponent to be ready…' : 'Press Ready — the duel starts when both players are ready.';
    show('lobby');
    return;
  }
  $('start').hidden = !isHost;
  $<HTMLButtonElement>('start').disabled = !canStart;
  $('start').textContent = mode === 'boss' ? (players.length === 1 ? 'Start solo' : `Start — party of ${players.length}`) : 'Start battle';
  $('lobbyStatus').textContent = !canStart
    ? 'Share the code with a friend, or add an AI player to start.'
    : isHost ? (mode === 'boss' && players.length < maxPlayers ? `Start now, or wait for more teammates (up to ${maxPlayers}).` : '') : 'Waiting for the host to start…';
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

/** Boss mode: the whole party's HP, stacked one above the other (you first). */
function partyPanel(el: HTMLElement, players: PlayerView[], you: PlayerId) {
  const ordered = [...players].sort((a, b) => (a.id === you ? -1 : b.id === you ? 1 : 0));
  el.replaceChildren(...ordered.map((p) => {
    const row = h('div', 'party-row' + (p.id === you ? ' me' : '') + (p.hp <= 0 ? ' down' : ''));
    const pn = h('span', 'n', p.id === you ? `${p.name} (you)` : p.name);
    if (p.id !== you) markProfile(pn, p);
    const name = append(h('div', 'pname'), picEl(p.pic), pn, netBars(p.id), h('span', 'lv', `Lv ${p.level}`),
      h('span', 'combo', p.combo >= 2 ? `×${p.combo}` : ''));
    row.append(name, thickBar(p.hp, p.maxHp, 'ally', p.hp <= 0 ? 'down' : `${p.hp} / ${p.maxHp}`));
    return row;
  }));
}

/** A thick HP bar with the number inside it. side: ally = green, enemy = red. */
function thickBar(hp: number, max: number, side: 'ally' | 'enemy', text: string) {
  const pct = max > 0 ? Math.max(0, Math.min(100, (hp / max) * 100)) : 0;
  const bar = h('div', `tbar ${side}${pct <= 25 ? ' low' : ''}`, undefined, { role: 'meter', 'aria-valuemin': '0', 'aria-valuemax': String(max), 'aria-valuenow': String(hp) });
  const fill = h('div', 'fill'); fill.style.width = `${pct}%`;
  bar.append(fill, h('span', 'tbar-txt', text));
  return bar;
}

function fighterCard(el: HTMLElement, p: PlayerView | undefined, label: string, emptyText: string) {
  if (!p) { el.replaceChildren(h('div', 'name', emptyText)); return; }
  const nameEl = h('span', 'n', label);
  if (!label.endsWith('(you)')) markProfile(nameEl, p);
  const name = append(h('div', 'name'), append(h('span', 'n'), picEl(p.pic), nameEl, netBars(p.id), h('span', 'lv', `Lv ${p.level}`), h('span', 'critv', p.crit > 0 ? ` ✦${critText(p.crit)}` : '')), h('span', 'combo', p.combo >= 2 ? `×${p.combo} combo` : ''));
  el.replaceChildren(name, hpBar(p.hp, p.maxHp, `${p.name} HP`), append(h('div', 'hpnum', `${p.hp} / ${p.maxHp} HP`), h('span', 'lvs', `· ${levelsText(p.levels)}${p.online ? '' : ' · away'}`)));
}

let battleMode: GameMode = 'reading';

export function renderFighters(players: PlayerView[], you: PlayerId, boss: BossView | null) {
  const me = players.find((p) => p.id === you);
  const other = players.find((p) => p.id !== you);
  $('meCard').classList.toggle('party', battleMode === 'boss');
  $('oppCard').hidden = battleMode === 'boss';
  if (battleMode === 'boss') {
    partyPanel($('meCard'), players, you);
    const bar = $('bossBar');
    if (boss) bar.replaceChildren(h('div', 'bname', boss.name), thickBar(boss.hp, boss.maxHp, 'enemy', `${boss.hp} / ${boss.maxHp}`));
    for (const p of players) if (p.id !== you) allyEl(p.id)?.classList.toggle('onfire', p.combo >= 5);
  } else {
    fighterCard($('meCard'), me, me ? `${me.name} (you)` : '', '');
    fighterCard($('oppCard'), other, other?.name ?? '', 'Opponent left');
    $('wizOpp').classList.toggle('onfire', (other?.combo ?? 0) >= 5);
  }
  // 5+ in a row: the fighter is wreathed in flames
  $('wizMe').classList.toggle('onfire', (me?.combo ?? 0) >= 5);
  const a3 = arena3d();
  if (a3) for (const p of players) a3.onfire(p.id === you ? 'me' : battleMode === 'boss' ? `ally:${p.id}` : 'opp', p.combo >= 5 && p.hp > 0, flameColor(p.flame));
  // boss fight: downed teammates lie on the ground (you lose your staff) for the rest of the fight
  if (battleMode === 'boss') for (const p of players) if (p.hp <= 0) knockOut(p.id === you ? 'me' : `ally:${p.id}`);
  // your combo, big enough to notice (3D arena)
  const combo = me && me.hp > 0 ? me.combo : 0;
  const hud = $('comboHud');
  hud.hidden = combo < 2;
  hud.classList.toggle('hot', combo >= 5);
  hud.style.setProperty('--flame', flameColor(me?.flame));
  if (combo >= 2) hud.replaceChildren(h('b', '', `×${combo}`), h('span', '', 'COMBO'));
}

// ── battle: wizards, dragon & spell effects ──────────────────────────────────
/** 'ally:<playerId>' = a party member in boss mode (up to 3 next to you). */
export type Actor = 'me' | 'opp' | 'boss' | `ally:${string}`;
const allyEl = (id: string) => document.querySelector<HTMLElement>(`#allies .wizard[data-pid="${CSS.escape(id)}"]`);
const actorEl = (a: Actor): HTMLElement => a.startsWith('ally:') ? allyEl(a.slice(5)) ?? $('wizMe') : $(a === 'me' ? 'wizMe' : a === 'opp' ? 'wizOpp' : 'dragon');

function retrigger(el: HTMLElement, cls: string, ms: number) {
  el.classList.remove(cls);
  void el.offsetWidth; // restart the CSS animation
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), ms);
}

export function setupArena(mode: GameMode, players: PlayerView[], you: PlayerId) {
  battleMode = mode;
  const boss = mode === 'boss';
  const others = players.filter((p) => p.id !== you);
  $('wizOpp').hidden = boss;
  $('dragon').hidden = !boss;
  const meP = players.find((p) => p.id === you);
  for (const [id, side, p] of [['wizMe', 'me', meP], ['wizOpp', 'opp', others[0]]] as const) {
    const w = $(id);
    w.className = `wizard ${side}`;
    paintFlame(w, p?.flame);
    w.querySelector('.sprite')!.innerHTML = avatarSvg(p?.avatar ?? 'wizard', side, p?.staff);
  }
  // boss mode: every teammate stands next to you
  $('allies').replaceChildren(...(boss ? others : []).map((p) => {
    const w = h('div', 'wizard ally');
    w.dataset.pid = p.id;
    paintFlame(w, p.flame);
    const sprite = h('div', 'sprite');
    sprite.innerHTML = avatarSvg(p.avatar, 'ally', p.staff);
    w.append(h('div', 'aura'), sprite, h('div', 'ground'));
    return w;
  }));
  $('arena').dataset.party = String(boss ? players.length : 0);
  arenaForBattle(mode, players, you); // the 3D arena, when it's on
  $('dragon').className = 'dragon';
  $('dragon').querySelector('.sprite')!.innerHTML = dragonSvg();
  $('fire').hidden = true;
  $('breathWarn').hidden = true;
  $('typeArea').hidden = mode === 'writing';
  if (mode === 'writing') mountWriteArea('writeSlot'); else $('writeArea').hidden = true;
  $('meaningPrompt').hidden = true;
}

function floatText(target: HTMLElement, text: string, cls: string) {
  const arena = $('arena');
  const a = zrect(arena);
  const t = zrect(target);
  const f = h('div', 'float ' + cls, text);
  f.style.left = `${t.left - a.left + t.width / 2 - 20}px`;
  f.style.top = `${t.top - a.top}px`;
  arena.append(f);
  setTimeout(() => f.remove(), 1000);
}

/** The caster lunges, the kanji flies across as the spell, and the target flashes red on impact. */
export function castSpell(caster: Actor, target: Actor, kanji: string, damage: number, friendly: boolean, crit = false): Promise<void> {
  if (caster === 'me') gemGone();
  const a3 = arena3d();
  if (a3) return a3.cast(caster, target, kanji, { damage, crit });
  const c = actorEl(caster), t = actorEl(target);
  retrigger(c, 'casting', 450);
  const arena = $('arena');
  const a = zrect(arena);
  const cr = zrect(c);
  const tr = zrect(t);
  const spell = h('div', 'spell' + (friendly ? '' : ' foe'), kanji, { lang: 'ja' });
  arena.append(spell);
  const fromRight = cr.left > tr.left;
  const from = { x: fromRight ? cr.left - a.left - 10 : cr.right - a.left - 30, y: cr.top - a.top + cr.height * 0.15 };
  const to = { x: tr.left - a.left + tr.width / 2 - 20, y: tr.top - a.top + tr.height * 0.4 };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // a slower, bigger flight with a glowing trail, so you can follow who hit whom
  const dur = reduced ? 400 : 850;
  const mid = { x: (from.x + to.x) / 2, y: Math.min(from.y, to.y) - 70 };
  const anim = spell.animate(
    [
      { transform: `translate(${from.x}px, ${from.y}px) scale(.5)`, opacity: 0.2 },
      { transform: `translate(${from.x + (mid.x - from.x) * 0.3}px, ${from.y + (mid.y - from.y) * 0.6}px) scale(1.35)`, opacity: 1, offset: 0.18 },
      { transform: `translate(${mid.x}px, ${mid.y}px) scale(1.6)`, opacity: 1, offset: 0.55 },
      { transform: `translate(${to.x}px, ${to.y}px) scale(2)`, opacity: 1 },
    ],
    { duration: dur, easing: 'cubic-bezier(.45,.05,.75,.4)' }, // gentle start, quickening into the hit
  );
  const trail = reduced ? 0 : window.setInterval(() => {
    const r = zrect(spell);
    const dot = h('div', 'spell-trail' + (friendly ? '' : ' foe'));
    dot.style.left = `${r.left - a.left + r.width / 2}px`;
    dot.style.top = `${r.top - a.top + r.height / 2}px`;
    arena.append(dot);
    setTimeout(() => dot.remove(), 500);
  }, 40);
  return new Promise((resolve) => {
    anim.onfinish = () => {
      clearInterval(trail);
      spell.remove();
      // impact: a burst ring on the target, a longer red flash and a small screen shake
      const burst = h('div', 'spell-burst' + (friendly ? '' : ' foe'));
      burst.style.left = `${to.x + 20}px`;
      burst.style.top = `${to.y + 20}px`;
      arena.append(burst);
      setTimeout(() => burst.remove(), 600);
      retrigger(t, 'hurt', 700);
      if (!reduced) retrigger(arena, 'shake', 350);
      floatText(t, `−${damage}`, friendly ? '' : 'taken');
      resolve();
    };
  });
}

/** 2D: your gem is gone after a cast or a miss, and grows back as soon as you write or type again. */
export const gemGone = () => $('wizMe').classList.add('gemless');
export const gemBack = () => $('wizMe').classList.remove('gemless');

export function fizzle(who: Actor) {
  if (who === 'me') gemGone();
  arena3d()?.fizzle(who);
  const w = actorEl(who);
  retrigger(w, 'fizzle', 650);
  const puff = h('div', 'puff');
  w.append(puff);
  setTimeout(() => puff.remove(), 1000);
}

export function clawHit(victim: Actor, damage: number) {
  const a3 = arena3d();
  if (a3) return a3.claw(victim, damage);
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
  arena3d()?.inhale(true);
  countdown('breath', inMs, (left) => (el.textContent = `The dragon inhales… ${Math.ceil(left / 1000)}`));
}

export function breathFire(damage: number, victims: Actor[], immune: Actor[] = []) {
  stopCountdown('breath');
  $('breathWarn').hidden = true;
  $('dragon').classList.remove('inhale');
  const a3 = arena3d();
  if (a3) { a3.breath(victims, damage); setTimeout(() => { for (const v of immune) a3.float(v, 'IMMUNE', '#ffd479'); }, 450); return; }
  const fire = $('fire');
  // the flame starts at the dragon's mouth (left edge of the sprite, ~37% down) and sweeps left
  const arena = zrect($('arena'));
  const d = zrect($('dragon'));
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
    for (const v of immune) floatText(actorEl(v), 'IMMUNE', 'immune');
  }, 450);
}

export function knockOut(who: Actor) {
  const el = actorEl(who);
  if (el.classList.contains('ko')) return;
  arena3d()?.ko(who);
  el.classList.add('ko');
  el.classList.remove('onfire');
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

export interface ChallengeView { kanji: string; answer: AnswerMode; timeLimitMs: number; meaning?: string; reading?: string; charCount?: number; flashMs?: number }

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
    mp.replaceChildren(h('span', 'mp-reading', c.reading ?? '', { lang: 'ja' }), h('span', '', ` — ${c.meaning ?? ''}`), h('small', '', `write the kanji: ${c.charCount} character${c.charCount === 1 ? '' : 's'}`));
    // look at the kanji, then CAST!: it disappears and only then the pad / keyboard appear (main.ts)
    const ime = $<HTMLInputElement>('imeInput');
    ime.value = '';
    ime.disabled = true;
    $('writeArea').hidden = true;
    $('castGo').hidden = false;
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
export function setCharSlots(total: number, _written: string[], active: boolean) {
  $('charSlots').replaceChildren(h('span', 'slots-hint', total > 1 ? `Write all ${total} characters, left to right` : 'Write the character'));
  $('padNext').textContent = 'Cast ✦';
  for (const id of ['padUndo', 'padClear', 'padSkip', 'padNext']) $<HTMLButtonElement>(id).disabled = !active;
}

/** Writing mode: the kanji vanishes and the pad / Japanese keyboard appear. */
export function startWritingStep() {
  $('kanji').classList.add('gone');
  $('castGo').hidden = true;
  mountWriteArea('writeSlot');
  const ime = $<HTMLInputElement>('imeInput');
  ime.disabled = false;
}

export function lockInput() {
  stopCountdown('challenge');
  $('castGo').hidden = true;
  $<HTMLInputElement>('answer').disabled = true;
  $<HTMLButtonElement>('skip').disabled = true;
  for (const id of ['padUndo', 'padClear', 'padSkip', 'padNext']) $<HTMLButtonElement>(id).disabled = true;
  $<HTMLInputElement>('imeInput').disabled = true;
}

/** The handwriting/IME panel is shared between the writing battle and Deck Duel. */
export function mountWriteArea(slotId: 'writeSlot' | 'dkWrite') {
  const area = $('writeArea');
  if (area.parentElement?.id !== slotId) $(slotId).append(area);
  area.hidden = false;
}
export const hideWriteArea = () => { $('writeArea').hidden = true; };

interface Feedback {
  correct: boolean; timedOut: boolean; skipped: boolean; kanji: string; reading: string; meaning: string;
  damage: number; combo: number; responseMs: number | null; recognized?: string; crit?: boolean; retry?: boolean; beaten?: boolean;
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
    const big = h('span', 'big' + (f.crit ? ' crit' : ''), f.crit ? `✦ CRIT! ${f.damage} damage` : `✓ CAST! ${f.damage} damage`);
    el.replaceChildren(big, word('mean'), h('span', 'sub2', `${secs(f.responseMs ?? 0)}${combo}`));
  } else {
    if (f.retry) { el.replaceChildren(h('span', 'big', '✗ Not quite — try again!')); return; }
    const title = f.beaten ? 'Opponent was faster!' : f.skipped ? '↷ Skipped' : f.timedOut ? '✗ Too slow!' : '✗ MISS!';
    const kids = [h('span', 'big', title), word('reveal')];
    if (f.recognized && !f.skipped && !f.timedOut) kids.push(h('span', 'sub2', `The pad read: ${f.recognized}`));
    el.replaceChildren(...kids);
    if (answerMode === 'writing' && !f.beaten) showWrongStrokes(el, f.kanji);
  }
}

/** A word's stroke order in a dialog (results, match history). */
export function openStrokeDialog(word: string, reading: string, meaning: string) {
  const d = $<HTMLDialogElement>('strokeDialog');
  $('sdWord').textContent = word;
  $('sdInfo').textContent = `${reading} — ${meaning}`;
  void showStrokeOrder($('sdBox'), word);
  if (!d.open) d.showModal();
}
$('sdClose').onclick = () => $<HTMLDialogElement>('strokeDialog').close();

/** Kanji Writing / Deck Duel: after a wrong or missed write, the correct strokes play quickly. */
export function showWrongStrokes(box: HTMLElement, word: string) {
  if (!/[\p{Script=Han}々]/u.test(word)) return;
  const div = h('div', 'fb-strokes');
  box.append(div);
  const strokes = [...word].length;
  void showStrokeOrder(div, word, { stepMs: Math.max(90, Math.min(220, 2200 / (strokes * 6))), caption: 'How to write it' });
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

/** `history`: shown again from Match history (no rematch, a way back to the list instead). */
export function showResults(mode: GameMode, players: PlayerView[], you: PlayerId, winnerId: PlayerId | null, teamWon: boolean | null, reason: GameOverReason, stats: Record<PlayerId, PlayerStats>, opts: { history?: { at: number } } = {}) {
  stopCountdown();
  const outcome = mode === 'boss' ? (teamWon ? 'win' : 'loss') : winnerId === null ? 'draw' : winnerId === you ? 'win' : 'loss';
  $('resultMode').replaceChildren(modeBadge(mode), h('span', 'rm-name', MODE_LABEL[mode]), ...(opts.history ? [h('span', 'rm-date', dateTime(opts.history.at))] : []));
  const title = $('resultTitle');
  title.className = `result-title ${outcome}`;
  title.textContent = outcome === 'win' ? 'VICTORY' : outcome === 'loss' ? 'DEFEAT' : 'DRAW';
  if (mode === 'boss') $('resultReason').textContent = teamWon ? REASONS.boss_slain : reason === 'time' ? 'Time up — the dragon survived' : REASONS[reason];
  else $('resultReason').textContent = reason === 'time' ? 'Time up — most HP left wins' : REASONS[reason];
  $('resultActions').hidden = !!opts.history;
  $('historyBackRow').hidden = !opts.history;

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
  const allies = Object.keys(stats).filter((id) => id !== you);
  cmp.classList.toggle('multi', allies.length > 1);
  if (allies.length > 1) {
    // a bigger boss party: one column per player, labels on the left
    cmp.style.gridTemplateColumns = `auto repeat(${allies.length + 1}, minmax(0, 1fr))`;
    const nameOf = (id: string) => players.find((p) => p.id === id)?.name ?? 'Ally';
    cmp.replaceChildren(h('div'), h('div', 'h me', 'You'), ...allies.map((id) => { const p = players.find((x) => x.id === id); const el = h('div', 'h', nameOf(id)); return p ? markProfile(el, p) : el; }));
    for (const [label, fmt] of rows) cmp.append(h('div', 'lbl', label), h('div', 'v', fmt(me)), ...allies.map((id) => h('div', 'v', fmt(stats[id]))));
  } else {
    cmp.style.gridTemplateColumns = '';
    const on = h('div', 'h r', other ? otherName : '');
    const op = players.find((p) => p.id === otherId);
    if (op) markProfile(on, op);
    cmp.replaceChildren(h('div', 'h me', 'You'), h('div'), on);
    for (const [label, fmt] of rows) cmp.append(h('div', 'v', fmt(me)), h('div', 'lbl', label), h('div', 'v r', other ? fmt(other) : ''));
  }

  const byKanji = new Map(me.words.map((w) => [w.kanji, w]));
  $('struggledBox').hidden = me.struggled.length === 0;
  $('struggled').replaceChildren(
    ...me.struggled.map((k) => {
      const w = byKanji.get(k)!;
      const card = append(h('div', 'card clickable', undefined, { tabindex: '0', title: 'Stroke order' }), h('div', 'k', w.kanji, { lang: 'ja' }), h('div', 'r', w.reading, { lang: 'ja' }), h('div', 'm', w.meaning));
      card.onclick = () => openStrokeDialog(w.kanji, w.reading, w.meaning);
      return card;
    }),
  );

  $('wordRows').replaceChildren(
    ...me.words.map((w) => {
      const result =
        w.attempts === 0 ? h('span', 'na', 'not seen')
        : w.correct === w.attempts ? h('span', 'ok', `✓ ${w.correct}/${w.attempts}`)
        : h('span', 'no', `✗ ${w.correct}/${w.attempts}`);
      const k = h('td', 'k clickable', w.kanji, { lang: 'ja', title: 'Stroke order' });
      k.onclick = () => openStrokeDialog(w.kanji, w.reading, w.meaning);
      return append(h('tr'),
        k, h('td', 'rd', w.reading, { lang: 'ja' }), h('td', '', w.meaning),
        append(h('td'), result), h('td', '', w.avgMs !== null ? secs(w.avgMs) : '—'));
    }),
  );
  $('xpLine').hidden = true;
  $<HTMLButtonElement>('rematch').disabled = false;
  $('rematch').textContent = 'Rematch';
  $('rematchStatus').textContent = '';
  show('results');
}

export function showXp(gained: number, level: number, levelUp: boolean) {
  const el = $('xpLine');
  el.hidden = false;
  el.replaceChildren(h('span', '', gained > 0 ? `+${gained} XP` : 'No XP — the match was forfeited'));
  if (levelUp) el.append(h('span', 'lvup', `Level ${level}!`));
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

// ── modes, characters, other players' profiles, match history ────────────────
export const MODE_ICON: Record<GameMode, string> = { reading: '読', rapid: '速', writing: '書', boss: '竜', deck: '札' };

/** The mode's logo (the same kanji as on the mode cards). */
export function modeBadge(mode: GameMode): HTMLElement {
  return h('span', `mode-badge ${mode}`, MODE_ICON[mode], { lang: 'ja', title: MODE_LABEL[mode], 'aria-label': MODE_LABEL[mode] });
}

/** The character someone played: a Deck Duel hero, otherwise their level's wizard. */
export function characterEl(character: string, mode: GameMode, side: 'me' | 'opp' = 'me'): HTMLElement {
  const el = h('span', 'char-sprite');
  const heroes = ['goblin', 'knight', 'witch', 'wizard'];
  el.innerHTML = mode === 'deck' && heroes.includes(character)
    ? heroSvg(character as 'goblin', side)
    : avatarSvg((['goblin', 'kid', 'human', 'knight', 'witch', 'wizard'].includes(character) ? character : 'wizard') as Avatar, side);
  el.title = character[0].toUpperCase() + character.slice(1);
  return el;
}

/** Clicking this name shows the player's profile card. */
export function markProfile(el: HTMLElement, p: { id: string; bot?: string | null; name?: string }) {
  el.dataset.profile = p.id;
  if (p.bot) el.dataset.bot = p.bot;
  if (p.name) el.dataset.name = p.name;
  el.classList.add('plink');
  el.setAttribute('role', 'button');
  el.tabIndex = 0;
  el.title = 'View profile';
  return el;
}

export const dateTime = (at: number) => new Date(at).toLocaleString(locale(), { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

/** A small floating card next to the clicked name. */
export function showProfileCard(anchor: HTMLElement, p: PublicProfile | { bot: string; name: string } | 'loading' | 'missing') {
  const pop = $('otherPop');
  const body: HTMLElement[] = [];
  if (p === 'loading') body.push(h('p', 'hint', 'Loading…'));
  else if (p === 'missing') body.push(h('p', 'hint', 'This player can no longer be viewed.'));
  else if ('bot' in p) {
    body.push(append(h('div', 'pp-head'), h('div', 'pp-pic', 'AI'), append(h('div'), h('div', 'pp-name', p.name), h('div', 'pp-level', p.bot === 'BEGINNER' ? 'AI player · beginner' : `AI player · knows ${p.bot}`))),
      h('p', 'hint', 'A computer opponent. It gets words right about as often as a learner of its level would.'));
  } else {
    const pic = h('div', 'pp-pic' + (p.pic ? ' has-pic' : ''), p.pic ? '' : p.name.slice(0, 1).toUpperCase());
    const img = picEl(p.pic, 'pic fill');
    if (img) pic.append(img);
    const games = p.wins + p.losses;
    body.push(
      append(h('div', 'pp-head'), pic, append(h('div'), h('div', 'pp-name', p.name), h('div', 'pp-level', `Lv ${p.level}`))),
      append(h('div', 'pp-stats'),
        append(h('div'), h('b', '', p.wins), h('span', '', 'wins')),
        append(h('div'), h('b', '', p.losses), h('span', '', 'losses')),
        append(h('div'), h('b', '', games ? `${Math.round((100 * p.wins) / games)}%` : '—'), h('span', '', 'win rate')),
        append(h('div'), h('b', '', p.learned), h('span', '', 'spells learned')),
      ),
      append(h('div', 'pp-stats pp-streaks'),
        append(h('div', 'streak-box'), h('b', '', p.streak ?? 0), h('span', '', 'login streak (days)')),
        append(h('div', 'streak-box best'), h('b', '', Math.max(p.bestStreak ?? 0, p.streak ?? 0)), h('span', '', 'best streak (days)')),
      ),
      h('p', 'hint', `Playing since ${new Date(p.since).toLocaleDateString(locale(), { year: 'numeric', month: 'short', day: 'numeric' })}`),
    );
  }
  pop.replaceChildren(...body);
  pop.hidden = false;
  const r = zrect(anchor);
  const w = Math.min(300, viewW() - 24);
  pop.style.width = `${w}px`;
  pop.style.left = `${Math.max(12, Math.min(viewW() - w - 12, r.left + r.width / 2 - w / 2))}px`;
  const below = r.bottom + 8;
  pop.style.top = `${below + 240 > viewH() ? Math.max(12, r.top - 8 - pop.offsetHeight) : below}px`;
}
export const hideProfileCard = () => { $('otherPop').hidden = true; };

/** Match history: one row per game, newest first. */
export function showHistory(list: MatchSummary[] | null, onOpen: (id: string) => void) {
  const box = $('historyList');
  if (!list) box.replaceChildren(h('p', 'hint center', 'Loading…'));
  else if (!list.length) box.replaceChildren(h('p', 'hint center', 'No matches yet — your finished games will show up here.'));
  else box.replaceChildren(...list.map((m) => {
    const row = h('button', `hist-row ${m.outcome}`);
    const vs = h('span', 'hist-vs');
    m.opponents.forEach((o, i) => {
      if (i) vs.append(', ');
      vs.append(markProfile(h('span', '', o.name), { id: o.id, bot: o.bot ? (o.name.match(/AI (N\d)/)?.[1] ?? 'AI') : null, name: o.name }));
    });
    row.append(
      characterEl(m.character, m.mode),
      append(h('span', 'hist-mode'), modeBadge(m.mode), append(h('span', 'hist-mode-text'), h('span', 'hist-mode-name', MODE_LABEL[m.mode]), m.opponents.length ? append(h('span', 'hist-vs-line'), 'vs ', vs) : h('span', 'hist-vs-line', 'solo'))),
      h('span', 'hist-result', m.outcome === 'win' ? 'VICTORY' : m.outcome === 'loss' ? 'DEFEAT' : 'DRAW'),
      h('span', 'hist-date', dateTime(m.at)),
    );
    row.onclick = (e) => { if (!(e.target as HTMLElement).closest('[data-profile]')) onOpen(m.id); };
    return row;
  }));
  show('history');
}

/** Colour an element's combo / Omnipotence flames (sets --f0..--f3 from the flame's colour). */
export function paintFlame(el: HTMLElement, flame: string | null | undefined) {
  el.dataset.flame = flame ?? 'blue';
  flameShades(flame).forEach((c, i) => el.style.setProperty(`--f${i}`, c));
}
