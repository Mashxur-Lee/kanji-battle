// Study decks you can open and edit (All / Struggling / Custom), adding your own words, the JLPT-style
// quiz, the reading passage, and — on the results screen — choosing where the words you missed go.
import { taskPassed } from '../shared/progress';
import { furigana, loadExamples } from './examples';
import { buildOnoQuiz } from '../shared/quiz';
import { kanjiTappable } from './kanjihelp';
import { LEVEL_LABEL, type MissedWord } from '../shared/protocol';
import type { DeckId } from '../shared/srs';
import { api, type DeckRow, type Profile, type QuizQuestion, type WordHit } from './api';
import { lang, locale, meaningIn, tr } from './i18n';
import { openStrokeDialog } from './ui';
import * as ui from './ui';

const $ = ui.$;
const el = (tag: string, cls = '', text?: string | number, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = String(text);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};
export const DECK_LABEL: Record<DeckId, string> = { all: 'All spells', struggling: 'Struggling spells', custom: 'Custom spells', ono: 'Onomatopoeia' };
const STATE_LABEL: Record<string, string> = { new: 'new', learning: 'learning', relearning: 'learning', review: 'learned' };

/** Called after a deck changed, so the study screen's counts are fresh. */
let onChanged: () => void = () => {};
let backToStudy: () => void = () => {};
/** study.ts: refresh the counts after a change; how to get back to the study screen. */
export const initDecks = (o: { changed: () => void; back: () => void }) => { onChanged = o.changed; backToStudy = o.back; };

// ── a deck's word list ──────────────────────────────────────────────────────
let open: DeckId = 'all';
let rows: DeckRow[] = [];
const selected = new Set<string>();

export async function openDeck(deck: DeckId, withAdd = false) {
  open = deck;
  selected.clear();
  $('deckTitle').textContent = DECK_LABEL[deck];
  $('customPanel').hidden = !(deck === 'custom' && withAdd);
  $<HTMLInputElement>('deckFilter').value = '';
  $('customMsg').textContent = '';
  $('customHits').replaceChildren();
  $<HTMLDialogElement>('deckDialog').showModal();
  if (!$('customPanel').hidden) $<HTMLInputElement>('customSearch').focus();
  await reload();
}

async function reload() {
  try { rows = (await api.deckWords(open)).words; } catch (e) { ui.toast((e as Error).message); rows = []; }
  for (const id of [...selected]) if (!rows.some((r) => r.vocabId === id)) selected.delete(id);
  render();
}

const dateOf = (t: number | null) => (t ? new Date(t).toLocaleDateString(locale(), { day: 'numeric', month: 'short', year: 'numeric' }) : '—');

/** sorting the list (0.9.9.3.2): tap a column — again to reverse it */
type SortKey = 'kanji' | 'reading' | 'meaning' | 'level' | 'added' | 'state';
let sortKey: SortKey | null = null;
let sortDir = 1;
const LEVEL_ORDER = ['KANA', 'KATA', 'N5', 'N4', 'N3', 'N2', 'N1'];
const STATE_ORDER = ['new', 'learning', 'relearning', 'review'];
function sortRows(list: DeckRow[]) {
  if (!sortKey) return list;
  const key = sortKey;
  const val = (r: DeckRow): string | number => key === 'kanji' ? r.kanji : key === 'reading' ? r.reading : key === 'meaning' ? meaningIn(r.meaning).toLowerCase()
    : key === 'level' ? (r.custom ? 99 : LEVEL_ORDER.indexOf(r.level)) : key === 'added' ? r.addedAt ?? 0 : STATE_ORDER.indexOf(r.state);
  return [...list].sort((a, b) => { const x = val(a), y = val(b); return (typeof x === 'number' && typeof y === 'number' ? x - y : String(x).localeCompare(String(y), lang() === 'ru' ? 'ru' : 'ja')) * sortDir; });
}
for (const th of document.querySelectorAll<HTMLElement>('#deckDialog th.sortable')) {
  th.tabIndex = 0;
  const go = () => {
    const k = th.dataset.sort as SortKey;
    if (sortKey === k) sortDir = -sortDir; else { sortKey = k; sortDir = 1; }
    for (const o of document.querySelectorAll<HTMLElement>('#deckDialog th.sortable')) o.dataset.dir = o === th ? (sortDir > 0 ? 'asc' : 'desc') : '';
    render();
  };
  th.onclick = go;
  th.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } };
}

function render() {
  const f = $<HTMLInputElement>('deckFilter').value.trim().toLowerCase();
  const shown = sortRows(rows).filter((r) => !f || r.kanji.includes(f) || r.reading.includes(f) || r.meaning.toLowerCase().includes(f) || meaningIn(r.meaning).toLowerCase().includes(f));
  $('deckCount').textContent = `${rows.length} ${rows.length === 1 ? 'spell' : 'spells'}`;
  $('deckRows').replaceChildren(...shown.slice(0, 400).map((r) => {
    const box = el('input', '', undefined, { type: 'checkbox', 'aria-label': `Select ${r.kanji}` }) as HTMLInputElement;
    box.checked = selected.has(r.vocabId);
    box.onchange = () => { box.checked ? selected.add(r.vocabId) : selected.delete(r.vocabId); tools(); };
    const k = el('td', 'k clickable', r.kanji, { lang: 'ja', title: 'Stroke order' });
    k.onclick = () => openStrokeDialog(r.kanji, r.reading, r.meaning);
    const del = el('button', 'pill danger small', '✕', { title: 'Remove from this deck', 'aria-label': `Remove ${r.kanji}` });
    del.onclick = () => void remove([r.vocabId]);
    const tr_ = el('tr');
    const td = (n: Node) => { const c = el('td'); c.append(n); return c; };
    tr_.append(td(box), k, el('td', 'rd', r.reading, { lang: 'ja' }), el('td', 'm', r.meaning), el('td', 'dlv', r.custom ? 'Custom' : LEVEL_LABEL[r.level]),
      el('td', 'dt', dateOf(r.addedAt)), el('td', `st st-${r.state}`, STATE_LABEL[r.state] ?? r.state), td(del));
    return tr_;
  }));
  if (!rows.length) $('deckRows').replaceChildren(el('tr', 'empty', undefined));
  if (!rows.length) $('deckRows').firstElementChild!.append(Object.assign(el('td', 'hint', open === 'custom' ? 'No custom spells yet — search the dictionary above or type your own word.' : 'No spells in this deck yet.'), { colSpan: 8 }));
  tools();
}
function tools() {
  $<HTMLButtonElement>('deckRemove').disabled = selected.size === 0;
  $('deckRemove').textContent = selected.size ? `Remove selected (${selected.size})` : 'Remove selected';
  $<HTMLInputElement>('deckAllBox').checked = rows.length > 0 && selected.size === rows.length;
}

async function remove(ids: string[]) {
  if (!ids.length) return;
  if (ids.length > 1 && !confirm(`Remove ${ids.length} spells from ${DECK_LABEL[open]}? Their study progress in this deck is lost.`)) return;
  try {
    await api.deckRemove(open, ids);
    ids.forEach((i) => selected.delete(i));
    await reload();
    onChanged();
  } catch (e) { ui.toast((e as Error).message); }
}

$('deckFilter').addEventListener('input', render);
$('deckAllBox').addEventListener('change', () => {
  if ($<HTMLInputElement>('deckAllBox').checked) rows.forEach((r) => selected.add(r.vocabId)); else selected.clear();
  render();
});
$('deckRemove').onclick = () => void remove([...selected]);
$('deckClose').onclick = () => $<HTMLDialogElement>('deckDialog').close();
for (const b of document.querySelectorAll<HTMLElement>('.deck-open[data-deck]')) b.onclick = () => void openDeck(b.dataset.deck as DeckId);
$('customAdd').onclick = () => void openDeck('custom', true);

// ── adding custom spells: search the dictionary, or type your own ────────────
let searchSeq = 0;
let searchTimer = 0;
$('customSearch').addEventListener('input', () => {
  clearTimeout(searchTimer);
  searchTimer = window.setTimeout(async () => {
    const q = $<HTMLInputElement>('customSearch').value.trim();
    const seq = ++searchSeq;
    if (!q) { $('customHits').replaceChildren(); return; }
    try {
      const { words } = await api.searchWords(q);
      if (seq !== searchSeq) return;
      const have = new Set(rows.map((r) => r.vocabId));
      $('customHits').replaceChildren(...(words.length ? words.map((w) => hit(w, have.has(w.id))) : [el('p', 'hint', 'Not in the dictionary — add it as your own word below.')]));
      if (!words.length) { $<HTMLInputElement>('cwKanji').value = /[一-鿿ぁ-ゟァ-ヿ]/.test(q) ? q : ''; }
    } catch (e) { ui.toast((e as Error).message); }
  }, 220);
});
function hit(w: WordHit, have: boolean) {
  const b = el('button', 'hit' + (have ? ' have' : ''), undefined, { type: 'button' }) as HTMLButtonElement;
  b.append(el('b', '', w.kanji, { lang: 'ja' }), el('span', 'rd', w.reading, { lang: 'ja' }), el('span', 'm', w.meaning), el('span', 'lv', LEVEL_LABEL[w.level]), el('span', 'add', have ? '✓ added' : '+ Add'));
  b.disabled = have;
  b.onclick = async () => {
    try {
      const r = await api.addCustom({ vocabId: w.id });
      b.classList.add('have'); b.disabled = true; b.querySelector('.add')!.textContent = '✓ added';
      $('customMsg').textContent = r.added ? `${w.kanji} added to Custom spells.` : `${w.kanji} is already in Custom spells.`;
      await reload(); onChanged();
    } catch (e) { $('customMsg').textContent = (e as Error).message; }
  };
  return b;
}
$('customForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const kanji = $<HTMLInputElement>('cwKanji').value, reading = $<HTMLInputElement>('cwReading').value, meaning = $<HTMLInputElement>('cwMeaning').value;
  try {
    const r = await api.addCustom({ kanji, reading, meaning });
    $('customMsg').textContent = r.added ? `${r.word.kanji} (${r.word.reading}) added to Custom spells.` : `${r.word.kanji} is already in Custom spells.`;
    for (const id of ['cwKanji', 'cwReading', 'cwMeaning']) $<HTMLInputElement>(id).value = '';
    await reload(); onChanged();
  } catch (err) { $('customMsg').textContent = (err as Error).message; }
});

// ── results: where do the words you missed go? ──────────────────────────────
/**
 * The server already put the missed words in Struggling spells (pre-ticked). Untick a word to take it
 * out again, or pick another deck to move them there. Words that were in the deck before stay put.
 */
/**
 * Makes red word cards tickable: a small tick in the corner, pre-ticked (= in the deck); tapping a card unticks it
 * (it turns see-through) and `onToggle` takes it out of the deck again. Used after a battle and the daily challenge.
 */
export function tickCards(cards: Array<{ card: HTMLElement; id: string }>, onToggle: (id: string, on: boolean) => void): (id: string, on: boolean) => void {
  const setters = new Map<string, (on: boolean) => void>();
  for (const { card, id } of cards) {
    card.classList.add('tickable', 'on');
    card.setAttribute('role', 'checkbox');
    card.setAttribute('aria-checked', 'true');
    card.title = tr('Ticked: goes to your deck. Tap to keep it out.');
    const tick = el('span', 'mc-tick', '✓', { 'aria-hidden': 'true' });
    card.prepend(tick);
    const show = (on: boolean) => {
      card.classList.toggle('on', on);
      card.setAttribute('aria-checked', String(on));
      tick.textContent = on ? '✓' : '';
    };
    setters.set(id, show);
    const flip = () => {
      const on = !card.classList.contains('on');
      show(on);
      onToggle(id, on);
    };
    card.onclick = flip;
    card.onkeydown = (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); } };
  }
  /** set a card's tick without saving (e.g. as it already is in the deck) */
  return (id, on) => setters.get(id)?.(on);
}

/** After a battle: the red "struggled" cards get their ticks; a line above picks the deck they go to. */
export function showMissedSave(missed: MissedWord[]) {
  const box = $('missedSave');
  if (!missed.length) { box.hidden = true; return; }
  let deck: DeckId = 'struggling';
  const ticked = new Set(missed.map((m) => m.id));
  let ours = new Set(missed.filter((m) => m.added).map((m) => m.id)); // put in `deck` by this game (safe to take out again)
  const status = el('span', 'ms-status hint');
  const say = () => { status.textContent = `${ticked.size} / ${missed.length} → ${tr(DECK_LABEL[deck])}`; };
  const sync = async (id: string, on: boolean) => {
    on ? ticked.add(id) : ticked.delete(id);
    say();
    try {
      if (on) { const r = await api.deckAdd(deck, [id]); r.added.forEach((x) => ours.add(x)); }
      // untick: out of the deck again — always for Struggling (that is the point of unticking), and for the
      // other decks only if this game put it there (never delete a word you had studied before)
      else if (ours.has(id) || deck === 'struggling') { await api.deckRemove(deck, [id]); ours.delete(id); }
    } catch (e) { status.textContent = (e as Error).message; }
  };
  // the cards the results screen drew (ui.ts); a missed word without one gets a card of its own
  const grid = $('struggled');
  const cards = missed.map((m) => {
    let card = grid.querySelector<HTMLElement>(`.miss-card[data-kanji="${CSS.escape(m.kanji)}"]`);
    if (!card) {
      card = el('div', 'card miss-card', undefined, { tabindex: '0', 'data-kanji': m.kanji });
      card.append(el('div', 'k', m.kanji, { lang: 'ja' }), el('div', 'r', m.reading, { lang: 'ja' }), el('div', 'm', m.meaning));
      grid.append(card);
      $('struggledBox').hidden = false;
    }
    return { card, id: m.id };
  });
  tickCards(cards, (id, on) => void sync(id, on));
  const sel = el('select', 'ms-deck', undefined, { 'aria-label': 'Save to' }) as HTMLSelectElement;
  for (const d of ['struggling', 'all', 'custom'] as DeckId[]) sel.append(Object.assign(el('option', '', DECK_LABEL[d]), { value: d }));
  sel.value = deck;
  sel.onchange = async () => {
    const to = sel.value as DeckId;
    sel.disabled = true;
    try {
      if (ours.size) await api.deckRemove(deck, [...ours]);
      deck = to;
      ours = new Set((await api.deckAdd(deck, [...ticked])).added);
      say();
    } catch (e) { status.textContent = (e as Error).message; }
    sel.disabled = false;
  };
  const story = el('button', 'pill', 'Read them in a story');
  story.onclick = () => { storyFrom = 'missed'; openPassage(missed.map((m) => ({ kanji: m.kanji, reading: m.reading, meaning: m.meaning, id: m.id }))); };
  box.replaceChildren(el('span', 'hint', 'Ticked words go to'), sel, status, story);
  say();
  box.hidden = false;
}

// ── JLPT-style quiz · onomatopoeia quiz (0.9.9.4.4: the same screen, other questions) ──────────────────
const ASK: Record<QuizQuestion['kind'], [string, string]> = {
  reading: ['＿＿のことばの読み方として最もよいものを選びなさい。', 'Choose the best reading for the word.'],
  meaning: ['このことばの意味として最もよいものを選びなさい。', 'Choose the best meaning for the word.'],
  kanji: ['＿＿のことばを漢字で書くとき、最もよいものを選びなさい。', 'Choose the right kanji for the word.'],
  onomean: ['このオノマトペの意味として最もよいものを選びなさい。', 'Choose the best meaning for the onomatopoeia.'],
  onoword: ['この意味のオノマトペとして最もよいものを選びなさい。', 'Which onomatopoeia has this meaning?'],
  onotype: ['このオノマトペはどの種類ですか。', 'Which kind of onomatopoeia is it — a sound, a state or a feeling?'],
  onoctx: ['＿＿＿に入れるのに最もよいものを選びなさい。', 'Choose the word that fits the sentence.'],
};
let quiz: QuizQuestion[] = [];
let qi = 0;
let score = 0;
let answered = false;
const wrong: QuizQuestion[] = [];
let mode: 'jlpt' | 'ono' = 'jlpt';
/** which quiz is on the quiz screen (main.ts tells friends "Taking an onomatopoeia quiz") */
export const quizMode = () => mode;

/** 10 onomatopoeia questions: the ones you studied first, then any (built here — they need no server) */
async function onoQuestions(n: number): Promise<QuizQuestion[]> {
  const [{ VOCAB, VOCAB_BY_ID, loadVocab }, examples] = await Promise.all([import('./offline/vocab'), loadExamples()]);
  await loadVocab();
  let studied: string[] = [];
  try { studied = (await api.deckWords('ono')).words.filter((w) => w.state !== 'new').map((w) => w.vocabId); } catch { /* offline, or no deck yet */ }
  const mix = <T>(a: T[]) => a.sort(() => Math.random() - 0.5);
  const mine = mix(studied.map((id) => VOCAB_BY_ID.get(id)).filter((v): v is NonNullable<typeof v> => !!v && v.level === 'ONO'));
  const rest = mix(VOCAB.filter((v) => v.level === 'ONO' && !studied.includes(v.id)));
  const words = [...mine, ...rest].slice(0, n);
  const ja = new Map([...examples].map(([id, ex]) => [id, ex[0]]));
  return buildOnoQuiz(mix(words), VOCAB, Math.random, ja);
}

export async function startQuiz(which: 'jlpt' | 'ono' = 'jlpt') {
  mode = which;
  ui.show('quiz');
  $('quizDone').hidden = true;
  $('quizCard').hidden = false;
  $('quizPrompt').textContent = '…';
  try { quiz = which === 'ono' ? await onoQuestions(10) : (await api.quiz(10)).questions; } catch (e) { ui.toast((e as Error).message); quiz = []; }
  if (quiz.length < 1) {
    $('quizCard').hidden = true; $('quizDone').hidden = false;
    $('quizResult').textContent = 'Study some spells first — the quiz uses the words you have studied.';
    $('quizMissed').replaceChildren();
    return;
  }
  qi = 0; score = 0; wrong.length = 0;
  question();
}

/** a choice (or the prompt) as the player reads it */
function shown(q: QuizQuestion, text: string, isPrompt = false): Node[] {
  if (isPrompt ? q.kind === 'onoword' : q.kind === 'meaning' || q.kind === 'onomean') return [document.createTextNode(meaningIn(text))];
  if (isPrompt && q.kind === 'onoctx') return furigana(text).map((x) => (typeof x === 'string' ? document.createTextNode(x) : x));
  return [document.createTextNode(text)];
}
const isJa = (q: QuizQuestion, prompt: boolean) => (prompt ? q.kind !== 'onoword' : !['meaning', 'onomean', 'onotype'].includes(q.kind));

function question() {
  const q = quiz[qi];
  answered = false;
  $('quizProgress').textContent = `Question ${qi + 1} of ${quiz.length}`;
  $('quizScore').textContent = `${score} correct`;
  const [ja, en] = ASK[q.kind];
  $('quizAsk').replaceChildren(el('span', 'ja', ja, { lang: 'ja' }), el('small', '', en));
  const prompt = $('quizPrompt');
  prompt.replaceChildren(...shown(q, q.prompt, true));
  prompt.lang = isJa(q, true) ? 'ja' : 'en';
  prompt.toggleAttribute('data-no-i18n', !isJa(q, true));
  prompt.classList.toggle('underline', q.kind === 'reading' || q.kind === 'kanji');
  prompt.classList.toggle('long', q.kind === 'onoctx' || q.kind === 'onoword');
  $('quizSub').textContent = q.sub ? meaningIn(q.sub) : '';
  $('quizFeedback').textContent = '';
  $('quizFeedback').className = 'quiz-feedback';
  $('quizWord').hidden = true;
  $('quizNext').hidden = true;
  $('quizChoices').replaceChildren(...q.choices.map((c, i) => {
    const b = el('button', 'quiz-choice', undefined, { type: 'button' }) as HTMLButtonElement;
    const t = el('span', 't', undefined, isJa(q, false) ? { lang: 'ja' } : q.kind === 'onotype' ? {} : { 'data-no-i18n': '' });
    t.append(...shown(q, c));
    b.append(el('span', 'n', String(i + 1)), t);
    b.onclick = () => choose(i);
    return b;
  }));
}

function choose(i: number) {
  if (answered) return;
  answered = true;
  const q = quiz[qi];
  const ok = i === q.answer;
  if (ok) score++; else wrong.push(q);
  const btns = [...document.querySelectorAll<HTMLButtonElement>('#quizChoices .quiz-choice')];
  btns.forEach((b, j) => { b.disabled = true; b.classList.toggle('right', j === q.answer); b.classList.toggle('wrong', j === i && !ok); });
  const right = q.choices[q.answer];
  $('quizFeedback').textContent = ok ? '✓ Correct!' : `✗ The answer is ${q.kind === 'meaning' || q.kind === 'onomean' ? meaningIn(right) : right}`;
  $('quizFeedback').className = `quiz-feedback ${ok ? 'ok' : 'no'}`;
  // 0.9.9.4: the whole word after every answer — a right guess still shows what it means
  if (q.word) $('quizWord').replaceChildren(el('b', '', q.word.kanji, { lang: 'ja' }), el('span', 'rd', q.word.reading, { lang: 'ja' }), el('span', 'm', meaningIn(q.word.meaning)));
  $('quizWord').hidden = !q.word;
  $('quizScore').textContent = `${score} correct`;
  $('quizNext').hidden = false;
  $('quizNext').focus();
}

function nextQuestion() {
  if (!answered) return;
  qi++;
  if (qi < quiz.length) return question();
  $('quizCard').hidden = true;
  $('quizDone').hidden = false;
  $('quizResult').textContent = `${score} / ${quiz.length} correct${score === quiz.length ? ' — perfect!' : ''}`;
  if (mode === 'jlpt') {
    void api.task('quiz', score, quiz.length).then((p) => onTaskDone.cb(p)).catch(() => { /* offline */ }); // a daily streak task (7/10 or better)
    if (!taskPassed('quiz', score, quiz.length)) ui.toast('For the daily task, get 7 out of 10 or better — try another quiz!', 5000);
  }
  const box = $('quizMissed');
  if (!wrong.length) { box.replaceChildren(); return; }
  const sel = el('select', 'ms-deck') as HTMLSelectElement;
  for (const d of (mode === 'ono' ? ['ono', 'struggling', 'custom'] : ['struggling', 'all', 'custom']) as DeckId[]) sel.append(Object.assign(el('option', '', DECK_LABEL[d]), { value: d }));
  const save = el('button', 'pill', 'Add the ones I missed') as HTMLButtonElement;
  const msg = el('span', 'hint');
  save.onclick = async () => {
    try { const r = await api.deckAdd(sel.value as DeckId, wrong.map((q) => q.vocabId)); msg.textContent = `${r.added.length} added to ${tr(DECK_LABEL[sel.value as DeckId])}.`; save.disabled = true; onChanged(); }
    catch (e) { msg.textContent = (e as Error).message; }
  };
  const head = el('div', 'ms-head');
  head.append(el('span', '', `You missed ${wrong.length}:`), sel, save, msg);
  const list = el('div', 'ms-words');
  list.append(...wrong.map((q) => el('span', 'ms-word on', q.word?.kanji ?? (q.kind === 'kanji' ? q.choices[q.answer] : q.prompt), { lang: 'ja' })));
  box.replaceChildren(head, list);
}

$('quizNext').onclick = nextQuestion;
$('quizAgain').onclick = () => void startQuiz(mode);
$('quizBack').onclick = () => backToStudy();
$('quizDoneBack').onclick = () => backToStudy();
$('quizBtn').onclick = () => void startQuiz('jlpt');
$('onoQuizBtn').onclick = () => void startQuiz('ono');
addEventListener('keydown', (e) => {
  if ($('quiz').hidden || e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
  const n = ['1', '2', '3', '4'].indexOf(e.key);
  if (n >= 0 && !answered) { e.preventDefault(); choose(n); }
  else if ((e.key === 'Enter' || e.key === ' ') && answered) { e.preventDefault(); nextQuestion(); }
});

// ── reading passage ─────────────────────────────────────────────────────────
// 0.9.9.4.4: a screen of its own (it was a window), and the words are learned in context: every blank sits in
// the word's own example sentence (data/examples), e.g. 寺で＿＿ → 祈る "pray at the temple". No furigana over the
// blank — the sentence around it is the clue. Tap any word for its meaning (a ✕ closes the box), and any kanji
// in that box for its parts.

type PWord = { kanji: string; reading: string; meaning: string; id?: string };
let passageWords: PWord[] = [];

/** the blanks: which word sits in each (null = empty), which blank is selected, and whether it has been checked */
let blanks: Array<{ answer: PWord; form: string; put: PWord | null; el: HTMLButtonElement }> = [];
let picked = 0;
let checked = false;
/** the sentences of this passage: [the word, its example] */
let lines: Array<{ w: PWord; ex: [string, string, string] }> = [];
/** the story's title when the passage is one story (null: separate example sentences) */
let storyTitle: { ja: string; en: string; ru: string } | null = null;
let passageBuild = 0;

/** [漢字|かな] → ruby; when `tap`, each word is a button that shows its meaning */
function rubyBits(text: string, tap: boolean): Node[] {
  const out: Node[] = [];
  const bits = text.split(/(\[[^\]|]+\|[^\]]+\])/);
  bits.forEach((bit, k) => {
    const m = /^\[([^\]|]+)\|([^\]]+)\]$/.exec(bit);
    if (!m) { if (bit) out.push(document.createTextNode(bit)); return; }
    const r = el('ruby'); r.append(m[1], el('rt', '', m[2]));
    if (!tap) { out.push(r); return; }
    const b = el('button', 'p-tok', undefined, { type: 'button' });
    b.append(r);
    const after = bits[k + 1] ?? '';
    b.onclick = () => void glossWord(m[1], m[2], after, b);
    out.push(b);
  });
  return out;
}
/** the form the word takes in the sentence (【[回|まわ]って】 → 回って), as ruby */
const formOf = (marked: string) => marked.replace(/\[([^\]|]+)\|[^\]]+\]/g, '$1');

function jaLine(n: number) {
  const { w, ex } = lines[n];
  // a story (0.9.9.4.4.1) runs on as one text; example sentences are numbered, one per line
  const p = el(storyTitle ? 'span' : 'p', storyTitle ? 'p-sent' : 'p-line');
  if (!storyTitle) p.append(el('span', 'p-n', String(n + 1)));
  for (const part of ex[0].split(/(【[^】]+】)/)) {
    if (!part) continue;
    if (part.startsWith('【')) {
      const i = blanks.length;
      const b = el('button', 'p-blank', undefined, { type: 'button', 'data-i': String(i), title: 'Tap, then pick a word below' }) as HTMLButtonElement;
      b.onclick = () => tapBlank(i);
      blanks.push({ answer: w, form: part.slice(1, -1), put: null, el: b });
      p.append(b);
    } else p.append(...rubyBits(part, true));
  }
  return p;
}

/** a word of a sentence: looked up in the dictionary by its written form and reading (verbs: 回って → 回る / 回す) */
async function lookup(base: string, reading: string, after: string): Promise<PWord | null> {
  const { VOCAB, loadVocab } = await import('./offline/vocab');
  try { await loadVocab(); } catch { return null; }
  const exact = VOCAB.find((v) => v.kanji === base && v.reading === reading);
  if (exact) return { kanji: exact.kanji, reading: exact.reading, meaning: exact.meaning, id: exact.id };
  // the dictionary form: the same kanji + okurigana, its reading starting with the furigana
  const near = VOCAB.filter((v) => v.kanji.startsWith(base) && v.reading.startsWith(reading) && v.kanji.length <= base.length + 3 && !/[一-鿿]/.test(v.kanji.slice(base.length)));
  const best = near.find((v) => after.startsWith(v.kanji.slice(base.length))) ?? near.find((v) => v.kanji.length > base.length) ?? near[0];
  return best ? { kanji: best.kanji, reading: best.reading, meaning: best.meaning, id: best.id } : null;
}
function showGloss(at: HTMLElement | null, ...kids: Node[]) {
  document.querySelectorAll('.passage-text .on').forEach((x) => x.classList.remove('on'));
  at?.classList.add('on');
  const g = $('passageGloss');
  const x = el('button', 'kp-x', '✕', { type: 'button', 'aria-label': 'Close', title: 'Close' });
  x.onclick = hideGloss;
  const body = el('div', 'pg-body');
  body.append(...kids);
  for (const b of body.querySelectorAll('b')) kanjiTappable(b);
  g.replaceChildren(x, body);
  g.hidden = false;
}
function hideGloss() {
  $('passageGloss').hidden = true;
  document.querySelectorAll('.passage-text .on').forEach((x) => x.classList.remove('on'));
}
async function glossWord(base: string, reading: string, after: string, at: HTMLElement) {
  const w = await lookup(base, reading, after);
  if (!w) { showGloss(at, el('b', '', base, { lang: 'ja' }), el('span', 'rd', reading, { lang: 'ja' }), el('span', 'm hint', 'Tap the kanji for its meaning')); return; }
  const dict = w.kanji !== base ? el('span', 'rd', `→ ${w.kanji}`, { lang: 'ja' }) : el('span');
  showGloss(at, el('b', '', base, { lang: 'ja' }), el('span', 'rd', reading, { lang: 'ja' }), dict, el('span', 'm', meaningIn(w.meaning)), addToDeck(w.kanji, w.id));
}
/**
 * "+ Add to…": put a word of the passage into any of your decks (0.9.9.3.2). A word without a known id is looked up
 * in the dictionary by its written form first.
 */
function addToDeck(word: string, id?: string) {
  const sel = el('select', 'p-add', undefined, { 'aria-label': 'Add to a deck' }) as HTMLSelectElement;
  sel.append(Object.assign(el('option', '', '+ Add to…'), { value: '' }));
  for (const d of ['struggling', 'all', 'custom'] as DeckId[]) sel.append(Object.assign(el('option', '', DECK_LABEL[d]), { value: d }));
  sel.onchange = async () => {
    const deck = sel.value as DeckId;
    if (!deck) return;
    sel.disabled = true;
    try {
      let vid = id;
      if (!vid) { const hits = (await api.searchWords(word)).words; vid = (hits.find((w) => w.kanji === word) ?? hits[0])?.id; }
      if (!vid) throw new Error(tr('That word is not in the dictionary'));
      const r = await api.deckAdd(deck, [vid]);
      ui.toast(r.added.length ? `${word} → ${tr(DECK_LABEL[deck])}` : `${word}: ${tr('already in')} ${tr(DECK_LABEL[deck])}`);
    } catch (e) { ui.toast((e as Error).message); }
    sel.value = ''; sel.disabled = false;
  };
  return sel;
}
function drawBlank(i: number) {
  const b = blanks[i];
  b.el.replaceChildren();
  b.el.classList.toggle('sel', !checked && i === picked);
  b.el.classList.toggle('filled', !!b.put);
  if (checked) {
    const ok = b.put?.kanji === b.answer.kanji;
    b.el.classList.add(ok ? 'right' : 'wrong');
    b.el.append(...rubyBits(b.form, false));
    if (!ok && b.put) b.el.append(el('s', 'p-was', b.put.kanji));
    b.el.onclick = () => showGloss(b.el, el('b', '', b.answer.kanji, { lang: 'ja' }), el('span', 'rd', b.answer.reading, { lang: 'ja' }), el('span', 'm', meaningIn(b.answer.meaning))); // (it's from your deck already: no "Add to")
    return;
  }
  // 0.9.9.4.4: no reading over the blank any more — the sentence is the clue
  b.el.append(el('span', 'p-num', String(i + 1)), el('span', 'p-slot', b.put ? b.put.kanji : '＿＿', { lang: 'ja' }));
}
function drawBank() {
  const used = new Set(blanks.filter((b) => b.put).map((b) => b.put!.kanji));
  for (const c of document.querySelectorAll<HTMLButtonElement>('#passageWords .p-chip')) c.disabled = checked || used.has(c.dataset.k!);
  const left = blanks.filter((b) => !b.put).length;
  const check = document.getElementById('passageCheck') as HTMLButtonElement | null;
  if (check) { check.disabled = checked || left === blanks.length; check.textContent = left ? `Check (${left} empty)` : 'Check'; }
}
function tapBlank(i: number) {
  if (checked) return;
  if (blanks[i].put && picked === i) blanks[i].put = null; // tap a filled, selected blank again: back to the bank
  picked = i;
  blanks.forEach((_, k) => drawBlank(k));
  drawBank();
}
function putWord(w: PWord) {
  if (checked || !blanks.length) return;
  blanks[picked].put = w;
  const next = blanks.findIndex((b, k) => !b.put && k > picked);
  picked = next >= 0 ? next : Math.max(0, blanks.findIndex((b) => !b.put));
  blanks.forEach((_, k) => drawBlank(k));
  drawBank();
}
function drawTranslation() {
  const ru = lang() === 'ru';
  const out = lines.map(({ ex }, i) => el('p', '', `${storyTitle ? '' : `${i + 1}. `}${ru && ex[2] ? ex[2] : ex[1]}`, { 'data-no-i18n': '' }));
  if (storyTitle) out.unshift(el('p', 'p-tr-title', ru ? storyTitle.ru : storyTitle.en, { 'data-no-i18n': '' }));
  $('passageTr').replaceChildren(...out);
}
/** called when a passage is checked (the daily tasks count it) */
export const passageHooks: { done?: (score: number, total: number) => void } = {};
/** a daily task was recorded: the fresh profile (main.ts shows it) */
export const onTaskDone = { cb: (_p: Profile) => {} };
function check() {
  checked = true;
  hideGloss();
  blanks.forEach((_, k) => drawBlank(k));
  const right = blanks.filter((b) => b.put?.kanji === b.answer.kanji).length;
  drawTranslation();
  const list = lines.map(({ w }) => {
    const row = el('div', 'pw');
    row.append(el('b', '', w.kanji, { lang: 'ja' }), el('span', 'rd', w.reading, { lang: 'ja' }), el('span', 'm', meaningIn(w.meaning)));
    return row;
  });
  const res = $('passageResult');
  res.replaceChildren(el('h4', '', 'Words in this passage'), ...list);
  res.hidden = false;
  const again = el('button', 'big', 'New passage', { type: 'button' }) as HTMLButtonElement;
  again.onclick = buildPassage;
  $('passageWords').replaceChildren(el('div', 'p-score', `${right} / ${blanks.length}`), el('p', 'hint center', right === blanks.length ? 'Perfect — every word in its place!' : 'Green: right. Red: the right word, with yours crossed out.'), again);
  passageHooks.done?.(right, blanks.length);
  void api.task('passage', right, blanks.length).then((p) => onTaskDone.cb(p)).catch(() => { /* offline */ }); // a daily streak task (4/8 or better)
  if (!taskPassed('passage', right, blanks.length)) ui.toast('For the daily task, get half the blanks right (4 of 8) — try a new passage!', 5000);
}

export function openPassage(words: PWord[]) {
  passageWords = words.filter((w) => w.kanji).slice(0, 60);
  ui.show('passage');
  void buildPassage();
}
async function buildPassage() {
  $('passageResult').hidden = true;
  $('passageResult').replaceChildren();
  hideGloss();
  const examples = await loadExamples();
  const build = ++passageBuild;
  // words with an example sentence first (the fallback needs them), no two that look the same (the bank would be ambiguous)
  const seen = new Set<string>();
  const mixed = [...passageWords].sort(() => Math.random() - 0.5).filter((w) => !seen.has(w.kanji) && !!seen.add(w.kanji));
  const pool = [...mixed.filter((w) => !!w.id && examples.has(w.id)), ...mixed.filter((w) => !w.id || !examples.has(w.id))].slice(0, 8);
  const text = $('passageText');
  blanks = []; picked = 0; checked = false; lines = []; storyTitle = null;
  $('passageWords').replaceChildren();
  // 0.9.9.4.4.1: one story with all the words, written by a small AI on the server; the words' example sentences
  // when it is off, offline, slow or not good enough
  if (pool.length >= 2) {
    text.replaceChildren(el('p', 'hint p-writing', '✍ Writing a story with your words…'));
    const story = await Promise.race([
      api.story(pool.map((w) => ({ id: w.id, kanji: w.kanji, reading: w.reading, meaning: w.meaning }))).then((r) => r.story).catch(() => null),
      new Promise<null>((ok) => setTimeout(() => ok(null), 30_000)),
    ]);
    if (build !== passageBuild) return; // a newer passage was asked for meanwhile
    if (story) {
      storyTitle = story.title;
      lines = story.lines.map((l) => ({ w: pool[l.word], ex: [l.ja, l.en, l.ru] as [string, string, string] }));
    }
  }
  if (!lines.length) lines = pool.filter((w) => !!w.id && examples.has(w.id)).map((w) => ({ w, ex: examples.get(w.id!)! }));
  const title = storyTitle ? el('p', 'p-title') : null;
  if (title && storyTitle) title.append(...rubyBits(storyTitle.ja, false));
  const body = storyTitle ? el('p', 'p-story') : null;
  const sents = lines.map((_, i) => jaLine(i));
  if (body) body.append(...sents);
  text.replaceChildren(...(title && body ? [title, body] : sents));
  blanks.forEach((_, k) => drawBlank(k));
  drawTranslation();
  // the word bank: every word of the passage, shuffled; tap one to put it in the selected blank
  const bank = el('div', 'p-bank');
  for (const { w } of [...lines].sort(() => Math.random() - 0.5)) {
    const c = el('button', 'p-chip', w.kanji, { type: 'button', lang: 'ja', 'data-k': w.kanji }) as HTMLButtonElement;
    c.onclick = () => putWord(w);
    bank.append(c);
  }
  const go = el('button', 'big', 'Check', { id: 'passageCheck', type: 'button' }) as HTMLButtonElement;
  go.onclick = check;
  $('passageWords').replaceChildren(el('h4', '', 'Your words — tap a blank, then a word'), bank, go);
  drawBank();
  if (!lines.length) { text.replaceChildren(el('p', 'hint', 'No words with example sentences in this deck yet — pick another deck above, or study some spells first.')); $('passageWords').replaceChildren(); }
}
$('passageNew').onclick = () => void buildPassage();
$('passageBack').onclick = () => { hideGloss(); backToStudy(); };
/** the deck the passage takes its words from (0.9.9.3.2: any deck, not only Struggling spells) */
let passageDeck: DeckId = 'struggling';
async function passageFrom(deck: DeckId) {
  passageDeck = deck;
  $<HTMLSelectElement>('passageDeck').value = deck;
  try {
    let words = (await api.deckWords(deck)).words;
    // a new deck has few studied words: tops up from All spells you have studied
    if (words.length < 8 && deck !== 'all') words = [...words, ...(await api.deckWords('all')).words.filter((w) => w.state !== 'new').slice(0, 30)];
    const mapped = words.sort(() => Math.random() - 0.5).slice(0, 60).map((w) => ({ kanji: w.kanji, reading: w.reading, meaning: w.meaning, id: w.vocabId }));
    if ($('passage').hidden) openPassage(mapped);
    else { passageWords = mapped; void buildPassage(); }
  } catch (e) { ui.toast((e as Error).message); }
}
{
  const sel = $<HTMLSelectElement>('passageDeck');
  for (const d of ['struggling', 'all', 'custom', 'ono'] as DeckId[]) sel.append(Object.assign(el('option', '', DECK_LABEL[d]), { value: d }));
  sel.onchange = () => { storyFrom = `deck:${sel.value}`; void passageFrom(sel.value as DeckId); };
}
// 0.9.9.4.3: the passage stays until "New passage" (going back to look something up and coming back kept nothing)
let storyFrom = '';
$('passageBtn').onclick = () => {
  if (storyFrom === `deck:${passageDeck}` && lines.length) { ui.show('passage'); return; }
  storyFrom = `deck:${passageDeck}`;
  void passageFrom(passageDeck);
};
