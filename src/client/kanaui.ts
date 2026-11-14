// 0.9.9.9.5: the Kana section. A chart of hiragana / katakana (basic, voiced, combinations) coloured by how well you
// know each, and practice: pick rows, a mode and how many stars it takes; new kana are met first, then asked with
// look-alike wrong answers until each has its stars. Progress is saved on the server (offline: in the app, synced
// later) — the practice logic itself is in shared/kanachart.ts.
import { api, today } from './api';
import * as audio from './audio';
import { tr } from './i18n';
import { speak } from './voice';
import * as ui from './ui';
import {
  KANA_CHART, kanaCells, KanaPractice, masteredCount, STAR_TARGETS, isMasteredMark, kanaPercent,
  type KanaCell, type KanaProgress, type KanaQuestion, type KanaScript, type KanaSet, type PracticeMode, type StarTarget,
} from '../shared/kanachart';

const $ = ui.$;
const SET_NAME: Record<KanaSet, string> = { basic: 'Basic', voiced: 'Voiced', combo: 'Combinations' };
const PREFS = 'kb:kanaPrefs';

let progress: KanaProgress = {};
let script: KanaScript = 'hira';
let set: KanaSet = 'basic';
let practice: KanaPractice | null = null;
let question: KanaQuestion | null = null;
let locked = false; // an answer is being shown
let streak = 0;
let onSaved: (xp: number) => void = () => {};

interface Prefs { mode: PracticeMode; stars: StarTarget; shuffle: boolean; rows: Record<string, string[]> }
function prefs(): Prefs {
  try {
    const p = JSON.parse(localStorage.getItem(PREFS) ?? '{}') as Partial<Prefs>;
    return { mode: (['read', 'pick', 'mix'] as const).includes(p.mode as PracticeMode) ? p.mode! : 'read', stars: STAR_TARGETS.includes(p.stars as StarTarget) ? p.stars! : 3, shuffle: p.shuffle === true, rows: p.rows ?? {} };
  } catch { return { mode: 'read', stars: 3, shuffle: false, rows: {} }; }
}
const savePrefs = (p: Prefs) => { try { localStorage.setItem(PREFS, JSON.stringify(p)); } catch { /* private mode */ } };

/** The profile's kana progress (on sign-in and after every save). */
export function setKanaProgress(p: KanaProgress | undefined) {
  progress = p ?? {};
  menuBadge();
  if (!$('kana').hidden) renderChart();
}
export function initKana(hooks: { saved: (xp: number) => void }) { onSaved = hooks.saved; }

function menuBadge() {
  const all = [...kanaCells('hira'), ...kanaCells('kata')];
  const n = masteredCount(progress, all);
  const el = $('kanaMenuProg');
  el.hidden = n === 0;
  el.textContent = `${n} / ${all.length}`;
}

// ── the chart ────────────────────────────────────────────────────────────────
export function openKana() {
  renderChart();
  ui.show('kana');
}

function tabs() {
  for (const b of document.querySelectorAll<HTMLElement>('#kana [data-script]')) b.setAttribute('aria-selected', String(b.dataset.script === script));
  for (const b of document.querySelectorAll<HTMLElement>('#kana [data-set]')) b.setAttribute('aria-selected', String(b.dataset.set === set));
}

function renderChart() {
  tabs();
  const rows = KANA_CHART[script].filter((r) => r.set === set);
  const grid = $('kanaGrid');
  grid.dataset.set = set;
  grid.replaceChildren(...rows.flatMap((r, ri) => r.cells.map((c, ci) => {
    if (!c) { const gap = document.createElement('span'); gap.className = 'kc gap'; return gap; }
    const p = progress[c.ch];
    const b = document.createElement('button');
    b.type = 'button';
    const done = isMasteredMark(p);
    b.className = `kc ${done ? 'mastered' : p && p.s > 0 ? 'learning' : 'new'}`;
    b.style.setProperty('--i', String(ri * 5 + ci)); // a quick ripple as the chart appears
    const big = document.createElement('span'); big.className = 'kc-ch'; big.lang = 'ja'; big.textContent = c.ch;
    const ro = document.createElement('span'); ro.className = 'kc-ro'; ro.textContent = c.romaji;
    b.append(big, ro);
    // 0.9.9.9.6.3: how far along it is, under the letter (10 stars = 100%: mastered)
    if (p && !done && p.s > 0) {
      const bar = document.createElement('i'); bar.className = 'kc-bar'; bar.style.setProperty('--k', String(kanaPercent(p) / 100));
      const pc = document.createElement('small'); pc.className = 'kc-pct'; pc.textContent = `${kanaPercent(p)}%`;
      b.append(bar, pc);
    }
    b.title = done ? tr('Mastered') : `${kanaPercent(p)}% · ${tr('a kana grows up to 3 stars a day — 10 stars masters it')}`;
    b.setAttribute('aria-label', `${c.ch} ${c.romaji}${done ? ` — ${tr('mastered')}` : ` — ${kanaPercent(p)}%`}`);
    b.onclick = () => { void speak(c.ch); b.classList.remove('ping'); void b.offsetWidth; b.classList.add('ping'); };
    return b;
  })));
  const cells = kanaCells(script, set);
  const n = masteredCount(progress, cells);
  $('kanaCount').textContent = `${n} / ${cells.length}`;
  $('kanaBarFill').style.setProperty('--k', String(cells.length ? n / cells.length : 0));
  $('kanaCountSub').textContent = `${tr('mastered')} · ${tr(SET_NAME[set])}`;
}

for (const b of document.querySelectorAll<HTMLElement>('#kana [data-script]')) b.onclick = () => { script = b.dataset.script as KanaScript; renderChart(); };
for (const b of document.querySelectorAll<HTMLElement>('#kana [data-set]')) b.onclick = () => { set = b.dataset.set as KanaSet; renderChart(); };

// ── the practice sheet ───────────────────────────────────────────────────────
const rowKey = () => `${script}:${set}`;
function openSheet() {
  const p = prefs();
  const rows = KANA_CHART[script].filter((r) => r.set === set);
  const chosen = new Set(p.rows[rowKey()] ?? rows.map((r) => r.row));
  $('ksWhat').textContent = `${script === 'hira' ? 'ひらがな' : 'カタカナ'} · ${tr(SET_NAME[set])}`;
  const box = $('ksRows');
  const all = document.createElement('button');
  all.type = 'button'; all.className = 'ks-row all';
  const sync = () => {
    for (const b of box.querySelectorAll<HTMLElement>('.ks-row[data-row]')) b.setAttribute('aria-pressed', String(chosen.has(b.dataset.row!)));
    all.setAttribute('aria-pressed', String(chosen.size === rows.length));
    all.textContent = chosen.size === rows.length ? `✓ ${tr('All')}` : tr('All');
    const n = rows.filter((r) => chosen.has(r.row)).reduce((a, r) => a + r.cells.filter(Boolean).length, 0);
    $<HTMLButtonElement>('ksStart').disabled = n === 0;
    $('ksStart').lastChild!.textContent = n ? ` ${tr('Start')} · ${n}` : ` ${tr('Start')}`;
  };
  all.onclick = () => { if (chosen.size === rows.length) chosen.clear(); else for (const r of rows) chosen.add(r.row); sync(); };
  box.replaceChildren(all, ...rows.map((r) => {
    const b = document.createElement('button');
    b.type = 'button'; b.className = 'ks-row'; b.dataset.row = r.row;
    const first = r.cells.find(Boolean)!;
    const ch = document.createElement('span'); ch.lang = 'ja'; ch.textContent = first.ch;
    b.append(ch, document.createTextNode(` ${r.row.toUpperCase()}`));
    const done = r.cells.every((c) => !c || isMasteredMark(progress[c.ch]));
    b.classList.toggle('done', done);
    b.onclick = () => { if (chosen.has(r.row)) chosen.delete(r.row); else chosen.add(r.row); sync(); };
    return b;
  }));
  const seg = (id: string, attr: string, value: string) => { for (const b of $(id).querySelectorAll<HTMLElement>('button')) b.setAttribute('aria-pressed', String(b.dataset[attr] === value)); };
  let mode = p.mode, stars = p.stars;
  seg('ksMode', 'mode', mode); seg('ksStars', 'stars', String(stars));
  for (const b of $('ksMode').querySelectorAll<HTMLElement>('button')) b.onclick = () => { mode = b.dataset.mode as PracticeMode; seg('ksMode', 'mode', mode); };
  for (const b of $('ksStars').querySelectorAll<HTMLElement>('button')) b.onclick = () => { stars = Number(b.dataset.stars) as StarTarget; seg('ksStars', 'stars', String(stars)); };
  $<HTMLInputElement>('ksShuffle').checked = p.shuffle;
  $('ksStart').onclick = () => {
    const keep = { ...prefs(), mode, stars, shuffle: $<HTMLInputElement>('ksShuffle').checked };
    keep.rows[rowKey()] = [...chosen];
    savePrefs(keep);
    const cells = rows.filter((r) => chosen.has(r.row)).flatMap((r) => r.cells.filter((c): c is KanaCell => !!c));
    if (!cells.length) return;
    $<HTMLDialogElement>('kanaSheet').close();
    start(cells, stars, mode, keep.shuffle);
  };
  sync();
  $<HTMLDialogElement>('kanaSheet').showModal();
}
$('kanaPractice').onclick = openSheet;

// ── practising ───────────────────────────────────────────────────────────────
let saveTimer = 0;
let saving: Promise<void> = Promise.resolve();
/** Sends the stars changed since the last save (a moment after the last answer, and when you stop). */
function scheduleSave(now = false) {
  clearTimeout(saveTimer);
  const go = () => {
    if (!practice) return;
    const changes = { ...practice.changes };
    if (!Object.keys(changes).length) return;
    for (const k of Object.keys(changes)) delete practice.changes[k];
    saving = saving.then(async () => {
      try {
        const r = await api.saveKana(changes);
        progress = r.kana;
        menuBadge();
        if (r.xp) { ui.toast(`+${r.xp} XP — ${tr('kana mastered!')}`, 2600); onSaved(r.xp); }
      } catch {
        // not saved (offline without a copy, a hiccup): kept for the next save
        if (practice) for (const [k, v] of Object.entries(changes)) if (!practice.changes[k]) practice.changes[k] = v;
      }
    });
  };
  if (now) go(); else saveTimer = window.setTimeout(go, 1800);
}

function start(cells: KanaCell[], stars: StarTarget, mode: PracticeMode, shuffle: boolean) {
  practice = new KanaPractice(cells, stars, mode, progress, Math.random, shuffle, today());
  streak = 0;
  ui.show('kanaplay');
  $('kanaplay').classList.remove('finished');
  nextQuestion();
}

function stars() {
  if (!practice || !question) return;
  const have = practice.starsOf(question.cell.ch);
  $('kpStars').replaceChildren(...Array.from({ length: practice.target }, (_, i) => {
    const s = document.createElement('i');
    s.className = `kp-star${i < have ? ' on' : ''}`;
    s.textContent = '★';
    return s;
  }));
}

function progressBar() {
  if (!practice) return;
  $('kpCount').textContent = `${practice.passed} / ${practice.total}`;
  $('kpFill').style.setProperty('--k', String(practice.total ? practice.passed / practice.total : 0));
}

function nextQuestion() {
  if (!practice) return;
  progressBar();
  question = practice.finished ? null : practice.next();
  const stage = $('kpStage');
  if (!question) return finish();
  const q = question;
  stage.classList.remove('right', 'wrong', 'enter', 'intro', 'met');
  void stage.offsetWidth; // (restart the entry animation)
  stage.classList.add('enter');
  stage.classList.toggle('intro', q.intro);
  stage.dataset.kind = q.kind;
  const prompt = $('kpPrompt');
  // a new kana: shown big with its reading and its sound — then it moves on by itself (0.9.9.9.5.1: there was a
  // single "got it" button to press); a tap anywhere moves on sooner
  prompt.lang = q.intro || q.kind === 'read' ? 'ja' : 'en';
  prompt.textContent = q.intro || q.kind === 'read' ? q.cell.ch : q.cell.romaji;
  $('kpHint').textContent = q.intro ? q.cell.romaji : '';
  $('kpSay').hidden = !q.intro && q.kind === 'read';
  stars();
  const box = $('kpAnswers');
  box.classList.toggle('single', q.intro);
  clearTimeout(introTimer);
  if (q.intro) {
    const bar = document.createElement('div');
    bar.className = 'kp-auto';
    bar.style.setProperty('--t', `${INTRO_MS}ms`);
    bar.append(document.createElement('i'), Object.assign(document.createElement('span'), { textContent: tr('Tap to go on') }));
    box.replaceChildren(bar);
    introTimer = window.setTimeout(() => meet(q), INTRO_MS);
    locked = false;
    void speak(q.cell.ch);
    return;
  }
  box.replaceChildren(...q.options.map((o, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'kp-ans';
    b.style.setProperty('--i', String(i));
    if (q.kind === 'pick') b.lang = 'ja';
    b.textContent = o;
    b.dataset.v = o;
    b.onclick = () => choose(o, b);
    return b;
  }));
  locked = false;
  if (q.intro || q.kind === 'pick') void speak(q.cell.ch);
}

const INTRO_MS = 2600;
let introTimer = 0;
/** a new kana has been met: on to its first question */
function meet(q: NonNullable<typeof question>) {
  clearTimeout(introTimer);
  if (!practice || question !== q || !q.intro || locked) return;
  locked = true;
  practice.answer(q, q.answer);
  $('kpStage').classList.add('met');
  setTimeout(nextQuestion, 180);
}
$('kanaplay').addEventListener('click', (e) => {
  // a tap anywhere (but on a button) while a new kana is shown
  if (question?.intro && !(e.target as Element).closest('button')) meet(question);
});

function choose(o: string, btn: HTMLElement) {
  if (!practice || !question || locked) return;
  locked = true;
  const q = question;
  const right = practice.answer(q, o);
  const stage = $('kpStage');
  stars();
  for (const b of $('kpAnswers').querySelectorAll<HTMLElement>('.kp-ans')) {
    if (b.dataset.v === q.answer) b.classList.add('right');
    else if (b === btn) b.classList.add('wrong');
    else b.classList.add('dim');
  }
  stage.classList.add(right ? 'right' : 'wrong');
  // the answer with its reading, whichever way it was asked
  $('kpHint').textContent = q.kind === 'read' ? '' : q.cell.romaji;
  if (right) { streak++; audio.sfx.correct(Math.min(5, 1 + Math.floor(streak / 4))); }
  else { streak = 0; audio.sfx.wrong(); }
  if (right && q.kind === 'read') void speak(q.cell.ch);
  if (!right) { $('kpHint').textContent = `${q.cell.ch} = ${q.cell.romaji}`; void speak(q.cell.ch); }
  progressBar();
  scheduleSave();
  setTimeout(nextQuestion, right ? 650 : 1500);
}

function finish() {
  scheduleSave(true);
  const p = practice!;
  $('kanaplay').classList.add('finished');
  $('kpStars').replaceChildren();
  $('kpPrompt').lang = 'en';
  $('kpPrompt').textContent = '★';
  $('kpHint').textContent = `${tr('All done!')} ${p.total} ${tr('kana practised')}`;
  $('kpSay').hidden = true;
  const again = document.createElement('button');
  again.type = 'button'; again.className = 'kp-ans big'; again.textContent = tr('Practice again');
  again.onclick = () => openSheetFromPlay();
  const back = document.createElement('button');
  back.type = 'button'; back.className = 'kp-ans'; back.textContent = tr('Back to the chart');
  back.onclick = () => { practice = null; openKana(); };
  $('kpAnswers').classList.remove('single');
  $('kpAnswers').replaceChildren(again, back);
  audio.sfx.win();
}
function openSheetFromPlay() { practice = null; openKana(); openSheet(); }

function stop() {
  clearTimeout(introTimer);
  scheduleSave(true);
  practice = null;
  question = null;
  openKana();
}
$('kanaPlayBack').onclick = stop;
$('kanaBack').onclick = () => ui.show('menu');
$('kpSay').onclick = () => { if (question) void speak(question.cell.ch); };
// keys: 1–4 answer, Space hears it again
addEventListener('keydown', (e) => {
  if ($('kanaplay').hidden || e.ctrlKey || e.metaKey || e.altKey) return;
  const n = Number(e.key);
  if (n >= 1 && n <= 4) { const b = $('kpAnswers').querySelectorAll<HTMLElement>('.kp-ans')[n - 1]; b?.click(); }
  else if ((e.key === 'Enter' || e.key === 'ArrowRight') && question?.intro) { e.preventDefault(); meet(question); }
  else if (e.key === ' ' && question) { e.preventDefault(); void speak(question.cell.ch); }
  else if (e.key === 'Escape') stop();
});
// leaving the app mid-practice: what was earned is saved
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && practice) scheduleSave(true); });
