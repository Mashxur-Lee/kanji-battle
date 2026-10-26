// Study decks you can open and edit (All / Struggling / Custom), adding your own words, the JLPT-style
// quiz, the reading passage, and — on the results screen — choosing where the words you missed go.
import { STORIES, STORY_GLOSS, type Line, type Story } from './stories';
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
export const DECK_LABEL: Record<DeckId, string> = { all: 'All spells', struggling: 'Struggling spells', custom: 'Custom spells' };
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
for (const b of document.querySelectorAll<HTMLElement>('.deck-open')) b.onclick = () => void openDeck(b.dataset.deck as DeckId);
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
  story.onclick = () => openPassage(missed.map((m) => ({ kanji: m.kanji, reading: m.reading, meaning: m.meaning, id: m.id })));
  box.replaceChildren(el('span', 'hint', 'Ticked words go to'), sel, status, story);
  say();
  box.hidden = false;
}

// ── JLPT-style quiz ─────────────────────────────────────────────────────────
const ASK: Record<QuizQuestion['kind'], [string, string]> = {
  reading: ['＿＿のことばの読み方として最もよいものを選びなさい。', 'Choose the best reading for the word.'],
  meaning: ['このことばの意味として最もよいものを選びなさい。', 'Choose the best meaning for the word.'],
  kanji: ['＿＿のことばを漢字で書くとき、最もよいものを選びなさい。', 'Choose the right kanji for the word.'],
};
let quiz: QuizQuestion[] = [];
let qi = 0;
let score = 0;
let answered = false;
const wrong: QuizQuestion[] = [];

export async function startQuiz() {
  ui.show('quiz');
  $('quizDone').hidden = true;
  $('quizCard').hidden = false;
  $('quizPrompt').textContent = '…';
  try { quiz = (await api.quiz(10)).questions; } catch (e) { ui.toast((e as Error).message); quiz = []; }
  if (quiz.length < 1) {
    $('quizCard').hidden = true; $('quizDone').hidden = false;
    $('quizResult').textContent = 'Study some spells first — the quiz uses the words you have studied.';
    $('quizMissed').replaceChildren();
    return;
  }
  qi = 0; score = 0; wrong.length = 0;
  question();
}

function question() {
  const q = quiz[qi];
  answered = false;
  $('quizProgress').textContent = `Question ${qi + 1} of ${quiz.length}`;
  $('quizScore').textContent = `${score} correct`;
  const [ja, en] = ASK[q.kind];
  $('quizAsk').replaceChildren(el('span', 'ja', ja, { lang: 'ja' }), el('small', '', en));
  $('quizPrompt').textContent = q.prompt;
  $('quizPrompt').classList.toggle('underline', q.kind !== 'meaning');
  $('quizSub').textContent = q.sub ? meaningIn(q.sub) : '';
  $('quizFeedback').textContent = '';
  $('quizFeedback').className = 'quiz-feedback';
  $('quizWord').hidden = true;
  $('quizNext').hidden = true;
  $('quizChoices').replaceChildren(...q.choices.map((c, i) => {
    const b = el('button', 'quiz-choice', undefined, { type: 'button' }) as HTMLButtonElement;
    b.append(el('span', 'n', String(i + 1)), el('span', 't', q.kind === 'meaning' ? meaningIn(c) : c, q.kind === 'meaning' ? {} : { lang: 'ja' }));
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
  $('quizFeedback').textContent = ok ? '✓ Correct!' : `✗ The answer is ${q.kind === 'meaning' ? meaningIn(q.choices[q.answer]) : q.choices[q.answer]}`;
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
  void api.task('quiz').then((p) => onTaskDone.cb(p)).catch(() => { /* offline */ }); // a daily streak task
  const box = $('quizMissed');
  if (!wrong.length) { box.replaceChildren(); return; }
  const sel = el('select', 'ms-deck') as HTMLSelectElement;
  for (const d of ['struggling', 'all', 'custom'] as DeckId[]) sel.append(Object.assign(el('option', '', DECK_LABEL[d]), { value: d }));
  const save = el('button', 'pill', 'Add the ones I missed') as HTMLButtonElement;
  const msg = el('span', 'hint');
  save.onclick = async () => {
    try { const r = await api.deckAdd(sel.value as DeckId, wrong.map((q) => q.vocabId)); msg.textContent = `${r.added.length} added to ${tr(DECK_LABEL[sel.value as DeckId])}.`; save.disabled = true; onChanged(); }
    catch (e) { msg.textContent = (e as Error).message; }
  };
  const head = el('div', 'ms-head');
  head.append(el('span', '', `You missed ${wrong.length}:`), sel, save, msg);
  const list = el('div', 'ms-words');
  list.append(...wrong.map((q) => el('span', 'ms-word on', q.kind === 'kanji' ? q.choices[q.answer] : q.prompt, { lang: 'ja' })));
  box.replaceChildren(head, list);
}

$('quizNext').onclick = nextQuestion;
$('quizAgain').onclick = () => void startQuiz();
$('quizBack').onclick = () => backToStudy();
$('quizDoneBack').onclick = () => backToStudy();
$('quizBtn').onclick = () => void startQuiz();
addEventListener('keydown', (e) => {
  if ($('quiz').hidden || e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
  const n = ['1', '2', '3', '4'].indexOf(e.key);
  if (n >= 0 && !answered) { e.preventDefault(); choose(n); }
  else if ((e.key === 'Enter' || e.key === ' ') && answered) { e.preventDefault(); nextQuestion(); }
});

// ── reading passage ─────────────────────────────────────────────────────────
// Stories live in stories.ts (0.9.9.4: several plots — school of magic, a trip to Kyoto, a detective case, a
// voyage, the Moon, a café). Every sentence quotes one of your words, so it stays good Japanese.
let story: Story = STORIES[0];
let OPEN: Line = story.open, CLOSE: Line = story.close;
/** a different story from last time (remembered across sessions) */
function nextStory() {
  let last = ''; try { last = localStorage.getItem('kb:story') ?? ''; } catch { /* private mode */ }
  const choices = STORIES.filter((x) => x.id !== last);
  story = choices[Math.floor(Math.random() * choices.length)];
  try { localStorage.setItem('kb:story', story.id); } catch { /* private mode */ }
  OPEN = story.open; CLOSE = story.close;
}

type PWord = { kanji: string; reading: string; meaning: string; id?: string };
let passageWords: PWord[] = [];

/**
 * The story's own words (0.9.9.3: every one of them can be tapped for its meaning, not only your spells).
 * Key: `kanji|furigana` as written in the lines (and katakana words as they are); value: dictionary form,
 * English, Russian.
 */
const GLOSS: Record<string, [string, string, string]> = {
  '魔法|まほう': ['魔法', 'magic', 'магия'], '学校|がっこう': ['学校', 'school', 'школа'], '一日|いちにち': ['一日', 'one day; a day', 'один день'],
  '見習|みなら': ['見習い', 'apprentice', 'ученик, подмастерье'], '魔法使|まほうつか': ['魔法使い', 'wizard, witch', 'волшебник'], '朝|あさ': ['朝', 'morning', 'утро'],
  '呪文|じゅもん': ['呪文', 'spell, incantation', 'заклинание'], '練習|れんしゅう': ['練習する', 'to practise', 'тренироваться'],
  '師匠|ししょう': ['師匠', 'master, teacher', 'учитель, мастер'], '書|か': ['書く', 'to write', 'писать'], '古|ふる': ['古い', 'old', 'старый'],
  '巻物|まきもの': ['巻物', 'scroll', 'свиток'], '机|つくえ': ['机', 'desk', 'стол'], '置|お': ['置く', 'to put, to place', 'класть'],
  '読|よ': ['読む', 'to read (読み方 = how to read)', 'читать (読み方 — чтение)'], '方|かた': ['〜方', 'way of …ing', 'способ'],
  '三回|さんかい': ['三回', 'three times', 'три раза'], '声|こえ': ['声', 'voice', 'голос'], '出|だ': ['出す', 'to put out (声に出す = say aloud; 思い出す = recall)', 'выпускать (声に出す — вслух; 思い出す — вспомнить)'],
  '言|い': ['言う', 'to say', 'говорить'], '友達|ともだち': ['友達', 'friend', 'друг'], '言葉|ことば': ['言葉', 'word', 'слово'],
  '覚|おぼ': ['覚える', 'to learn, to remember', 'запоминать'], '図書館|としょかん': ['図書館', 'library', 'библиотека'], '本|ほん': ['本', 'book', 'книга'],
  '話|はなし': ['話', 'story, talk', 'рассказ'], '意味|いみ': ['意味', 'meaning', 'значение'], '思|おも': ['思う', 'to think (思い出す = recall)', 'думать (思い出す — вспомнить)'],
  '杖|つえ': ['杖', 'staff, wand', 'посох'], '宝石|ほうせき': ['宝石', 'gem, jewel', 'драгоценный камень'], '明|あか': ['明るい', 'bright', 'яркий'],
  '光|ひか': ['光る', 'to shine', 'светиться'], '戦|たたか': ['戦い', 'battle, fight', 'битва'], '中|なか': ['中', 'inside; in the middle of', 'внутри, в ходе'],
  '驚|おどろ': ['驚く', 'to be startled', 'пугаться, удивляться'], '後|うし': ['後ろ', 'behind, back', 'назад'], '下|さ': ['下がる', 'to step back', 'отступать'],
  '間違|まちが': ['間違える', 'to get wrong, to make a mistake', 'ошибаться'], '答|こた': ['答える', 'to answer', 'отвечать'], '夜|よる': ['夜', 'night', 'ночь'],
  '何度|なんど': ['何度も', 'again and again', 'много раз'], '笑|わら': ['笑う', 'to smile, to laugh', 'улыбаться, смеяться'], '大丈夫|だいじょうぶ': ['大丈夫', 'all right, fine', 'в порядке'],
  '次|つぎ': ['次', 'next', 'следующий'], '日|ひ': ['日', 'day', 'день'], '使|つか': ['使う', 'to use', 'использовать'], '闇|やみ': ['闇', 'darkness', 'тьма'],
  '魔物|まもの': ['魔物', 'monster, demon', 'чудовище'], '倒|たお': ['倒す', 'to defeat', 'победить, свалить'], '前|まえ': ['前', 'in front of', 'перед'],
  '唱|とな': ['唱える', 'to chant', 'произносить (заклинание)'], '空|そら': ['空', 'sky', 'небо'], '虹|にじ': ['虹', 'rainbow', 'радуга'],
  '出|で': ['出る', 'to appear, to come out', 'появляться'], '少|すこ': ['少し', 'a little', 'немного'], '強|つよ': ['強い', 'strong', 'сильный'],
  'ハル': ['ハル', 'Haru (a name)', 'Хару (имя)'], 'ケン': ['ケン', 'Ken (a name)', 'Кен (имя)'], 'ドラゴン': ['ドラゴン', 'dragon', 'дракон'], 'ノート': ['ノート', 'notebook', 'тетрадь'],
  'みんな': ['みんな', 'everyone', 'все'], 'ゆっくり': ['ゆっくり', 'slowly', 'медленно'], 'たくさん': ['たくさん', 'many, a lot', 'много'], 'まだ': ['まだ', 'still, (not) yet', 'ещё'],
  'もう': ['もう', 'already, now', 'уже'], 'こうして': ['こうして', 'and so, like this', 'так, таким образом'], 'という': ['という', 'called …, named …', 'под названием'],
};
Object.assign(GLOSS, STORY_GLOSS);
const KANA_WORDS = Object.keys(GLOSS).filter((k) => !k.includes('|')).sort((a, b) => b.length - a.length);

/** the blanks: which word sits in each (null = empty), which blank is selected, and whether it has been checked */
let blanks: Array<{ answer: PWord; put: PWord | null; el: HTMLButtonElement }> = [];
let picked = 0;
let checked = false;

/** Japanese line with furigana; every story word tappable for a gloss; the slot is a blank to fill. */
function jaLine(line: Line, w: PWord | null) {
  const p = el('span', 'p-line');
  const parts = line.ja.split(/(\[[^\]|]+\|[^\]]+\]|\{w\})/);
  for (const part of parts) {
    if (!part) continue;
    const ruby = /^\[([^\]|]+)\|([^\]]+)\]$/.exec(part);
    if (ruby) {
      const r = el('ruby'); r.append(ruby[1], el('rt', '', ruby[2]));
      const g = GLOSS[`${ruby[1]}|${ruby[2]}`];
      if (g) { const b = el('button', 'p-tok', undefined, { type: 'button' }); b.append(r); b.onclick = () => glossStory(g, ruby[1], ruby[2], b); p.append(b); } else p.append(r);
      continue;
    }
    if (part === '{w}' && w) {
      const i = blanks.length;
      const b = el('button', 'p-blank', undefined, { type: 'button', 'data-i': String(i), title: 'Tap, then pick a word below' }) as HTMLButtonElement;
      b.onclick = () => tapBlank(i);
      blanks.push({ answer: w, put: null, el: b });
      p.append(b);
      continue;
    }
    // plain text: katakana names and a few kana words are tappable too
    let rest = part;
    while (rest) {
      let at = -1, word = '';
      for (const k of KANA_WORDS) { const x = rest.indexOf(k); if (x >= 0 && (at < 0 || x < at)) { at = x; word = k; } }
      if (at < 0) { p.append(rest); break; }
      if (at) p.append(rest.slice(0, at));
      const g = GLOSS[word], b = el('button', 'p-tok', word, { type: 'button' });
      b.onclick = () => glossStory(g, word, '', b);
      p.append(b);
      rest = rest.slice(at + word.length);
    }
  }
  return p;
}
function showGloss(at: HTMLElement, ...kids: Node[]) {
  document.querySelectorAll('.passage-text .on').forEach((x) => x.classList.remove('on'));
  at.classList.add('on');
  const g = $('passageGloss');
  g.replaceChildren(...kids);
  g.hidden = false;
}
function glossStory(g: [string, string, string], kanji: string, reading: string, at: HTMLElement) {
  const dict = g[0] !== kanji ? el('span', 'rd', `→ ${g[0]}`, { lang: 'ja' }) : el('span');
  showGloss(at, el('b', '', kanji, { lang: 'ja' }), el('span', 'rd', reading, { lang: 'ja' }), dict, el('span', 'm', lang() === 'ru' ? g[2] : g[1], { 'data-no-i18n': '' }), addToDeck(g[0]));
}
/**
 * "+ Add to…": put a word of the story into any of your decks (0.9.9.3.2). A word without a known id is looked up
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
    const r = el('ruby'); r.append(b.answer.kanji, el('rt', '', b.answer.kanji === b.answer.reading ? '' : b.answer.reading));
    b.el.append(r);
    if (!ok && b.put) b.el.append(el('s', 'p-was', b.put.kanji));
    b.el.onclick = () => showGloss(b.el, el('b', '', b.answer.kanji, { lang: 'ja' }), el('span', 'rd', b.answer.reading, { lang: 'ja' }), el('span', 'm', meaningIn(b.answer.meaning))); // (it's from your deck already: no "Add to")
    return;
  }
  // a hint over each blank: its reading (furigana) — pick the kanji that is read this way
  const r = el('ruby'); r.append(b.put ? b.put.kanji : '＿＿', el('rt', '', b.answer.reading));
  b.el.append(el('span', 'p-num', String(i + 1)), r);
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
let lines: Line[] = [];
let pick: PWord[] = [];
function drawTranslation() {
  const ru = lang() === 'ru';
  // before checking, the translation gives the meaning only (it would give the answers away)
  const fill = (l: Line, w: PWord | null) => (ru ? l.ru : l.en).replace('{w}', w ? (checked ? `${w.kanji} — ${meaningIn(w.meaning)}` : `… (${meaningIn(w.meaning)})`) : '');
  $('passageTr').replaceChildren(...[fill(OPEN, null), ...lines.map((l, i) => fill(l, pick[i])), fill(CLOSE, null)].map((t) => el('p', '', t, { 'data-no-i18n': '' })));
}
/** called when a passage is checked (the daily tasks count it) */
export const passageHooks: { done?: (score: number, total: number) => void } = {};
/** a daily task was recorded: the fresh profile (main.ts shows it) */
export const onTaskDone = { cb: (_p: Profile) => {} };
function check() {
  checked = true;
  blanks.forEach((_, k) => drawBlank(k));
  const right = blanks.filter((b) => b.put?.kanji === b.answer.kanji).length;
  drawTranslation();
  const list = pick.map((w) => {
    const row = el('div', 'pw');
    row.append(el('b', '', w.kanji, { lang: 'ja' }), el('span', 'rd', w.reading, { lang: 'ja' }), el('span', 'm', meaningIn(w.meaning)));
    return row;
  });
  // 0.9.9.4.2: the score stays at the bottom; the words (from your own deck — nothing to add) scroll with the story
  const res = $('passageResult');
  res.replaceChildren(el('h4', '', 'Words in this story'), ...list);
  res.hidden = false;
  const again = el('button', 'big', 'New story', { type: 'button' }) as HTMLButtonElement;
  again.onclick = buildPassage;
  $('passageWords').replaceChildren(el('div', 'p-score', `${right} / ${blanks.length}`), el('p', 'hint center', right === blanks.length ? 'Perfect — every word in its place!' : 'Green: right. Red: the right word, with yours crossed out.'), again);
  passageHooks.done?.(right, blanks.length);
  void api.task('passage').then((p) => onTaskDone.cb(p)).catch(() => { /* offline */ }); // a daily streak task
}

export function openPassage(words: PWord[]) {
  passageWords = words.filter((w) => w.kanji).slice(0, 40);
  $<HTMLDialogElement>('passageDialog').showModal();
  buildPassage();
}
function buildPassage() {
  $('passageResult').hidden = true;
  $('passageResult').replaceChildren();
  // no two words that look the same (the bank would be ambiguous)
  const seen = new Set<string>();
  nextStory();
  const LINES = story.lines;
  pick = [...passageWords].sort(() => Math.random() - 0.5).filter((w) => !seen.has(w.kanji) && !!seen.add(w.kanji)).slice(0, Math.min(8, LINES.length));
  // keep the story in order: the chosen sentences in their LINES order
  lines = [...LINES.keys()].sort(() => Math.random() - 0.5).slice(0, pick.length).sort((a, b) => a - b).map((i) => LINES[i]);
  blanks = []; picked = 0; checked = false;
  const text = $('passageText');
  text.replaceChildren(jaLine(OPEN, null), ...lines.map((l, i) => jaLine(l, pick[i])), jaLine(CLOSE, null));
  blanks.forEach((_, k) => drawBlank(k));
  drawTranslation();
  // the word bank: every word of the story, shuffled; tap one to put it in the selected blank
  const bank = el('div', 'p-bank');
  for (const w of [...pick].sort(() => Math.random() - 0.5)) {
    const c = el('button', 'p-chip', w.kanji, { type: 'button', lang: 'ja', 'data-k': w.kanji }) as HTMLButtonElement;
    c.onclick = () => putWord(w);
    bank.append(c);
  }
  const go = el('button', 'big', 'Check', { id: 'passageCheck', type: 'button' }) as HTMLButtonElement;
  go.onclick = check;
  $('passageWords').replaceChildren(el('h4', '', 'Your words — tap a blank, then a word'), bank, go);
  drawBank();
  $('passageGloss').hidden = true;
  if (!pick.length) { text.replaceChildren(el('p', 'hint', 'No words in this deck yet — pick another deck above, or study some spells first.')); $('passageWords').replaceChildren(); }
}
$('passageNew').onclick = buildPassage;
$('passageClose').onclick = () => $<HTMLDialogElement>('passageDialog').close();
/** the deck the story takes its words from (0.9.9.3.2: any deck, not only Struggling spells) */
let passageDeck: DeckId = 'struggling';
async function passageFrom(deck: DeckId) {
  passageDeck = deck;
  $<HTMLSelectElement>('passageDeck').value = deck;
  try {
    let words = (await api.deckWords(deck)).words;
    // a new deck has few studied words: Struggling tops up from All spells you have studied
    if (deck === 'struggling' && words.length < 3) words = [...words, ...(await api.deckWords('all')).words.filter((w) => w.state !== 'new')];
    const mapped = words.sort(() => Math.random() - 0.5).slice(0, 40).map((w) => ({ kanji: w.kanji, reading: w.reading, meaning: w.meaning, id: w.vocabId }));
    if (!$<HTMLDialogElement>('passageDialog').open) openPassage(mapped);
    else { passageWords = mapped; buildPassage(); }
  } catch (e) { ui.toast((e as Error).message); }
}
{
  const sel = $<HTMLSelectElement>('passageDeck');
  for (const d of ['struggling', 'all', 'custom'] as DeckId[]) sel.append(Object.assign(el('option', '', DECK_LABEL[d]), { value: d }));
  sel.onchange = () => void passageFrom(sel.value as DeckId);
}
$('passageBtn').onclick = () => void passageFrom(passageDeck);
