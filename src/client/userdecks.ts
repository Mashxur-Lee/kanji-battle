// 0.9.9.9.9.6: decks of your own on the Study page — make one, name it, put words in (typed, pasted from a list,
// Quizlet's or Anki's text export, or an Anki deck file .apkg straight from AnkiDroid), study it. Each word is a card in
// "My words" (the same spaced repetition); a deck's Study reviews only its own cards.
// Round 2 (the owner): one "+ New deck" (the Import button and Custom spells went — a deck does both), each deck drawn
// like the other decks (its counts, Study, Words, Import, Rename, Delete), four at most; the words someone had in
// Custom spells became a deck "My words".
import { api } from './api';
import { lang, tr } from './i18n';
import { guessTermSep, parseCards, type CardSep, type TermSep } from '../shared/importlist';
import * as ui from './ui';
import { deckIndexExtras, forgetDeckIndex, openDictionary } from './dictui';
import { openUserDeck } from './decks';

const $ = ui.$;
const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text?: string, attrs: Record<string, string> = {}) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined) e.textContent = tr(text);
  for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
  return e;
};
const PEN = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l4.5-1L19 8.5a2.1 2.1 0 0 0-3-3L5.5 16z"/></svg>';

export interface UserDeckView { id: string; name: string; count: number; due: number; fresh: number; learning: number }
let decks: UserDeckView[] = [];
let max = 4;
let startSession: (set: { id: string; name: string }) => void = () => {};
let changed: () => void = () => {};

export function initUserDecks(o: { study: (set: { id: string; name: string }) => void; changed: () => void }) {
  startSession = o.study; changed = o.changed;
  $('studyDict').onclick = () => openDictionary();
  $('studyNewDeck').onclick = () => void newDeck();
  // the dictionary shows "in <your deck>" too
  deckIndexExtras.push(async (add) => {
    const list = (await api.userDecks()).decks;
    for (const d of list) for (const w of (await api.userDeckWords(d.id)).words) { add(w.vocabId, d.name); add(`${w.kanji}|${w.reading}`, d.name); }
  });
}
/** your decks (for the dictionary's "Add to…") */
export async function myDecks(): Promise<Array<{ id: string; name: string }>> { try { return (await api.userDecks()).decks; } catch { return []; } }

export async function renderUserDecks() {
  const box = $('userDecks');
  try { const r = await api.userDecks(); decks = r.decks; max = r.max ?? 4; } catch { decks = []; }
  const nb = $<HTMLButtonElement>('studyNewDeck');
  nb.disabled = decks.length >= max;
  nb.title = nb.disabled ? tr(`You can have ${max} decks of your own`) : '';
  box.replaceChildren(...decks.map((d) => {
    const card = h('div', 'deck-card user-deck');
    const head = h('div', 'deck-head');
    const name = h('h3', 'ud-name'); name.textContent = d.name; name.title = d.name;
    const ren = h('button', 'ud-ren', undefined, { type: 'button', title: tr('Rename'), 'aria-label': tr('Rename') }); ren.innerHTML = PEN;
    ren.onclick = () => void renameDeck(d);
    head.append(name, ren);
    const counts = h('div', 'counts');
    for (const [cls, n, label] of [['c-new', d.fresh, 'new'], ['c-learn', d.learning, 'learning'], ['c-due', d.due, 'to review']] as const) {
      const s = h('span', cls); const b = h('b'); b.textContent = String(n); s.append(b, tr(label)); counts.append(s);
    }
    const btns = h('div', 'deck-btns');
    const study = h('button', 'big', 'Study', { type: 'button' }) as HTMLButtonElement;
    study.disabled = d.fresh + d.learning + d.due === 0;
    study.onclick = () => startSession({ id: d.id, name: d.name });
    const words = h('button', 'deck-open', undefined, { type: 'button' }); words.innerHTML = '<span aria-hidden="true">☰</span> '; words.append(tr('Words'));
    words.onclick = () => openUserDeck({ id: d.id, name: d.name }, () => { forgetDeckIndex(); void renderUserDecks(); changed(); });
    const imp = h('button', 'deck-open ud-imp', 'Import', { type: 'button', title: tr('Anki (.apkg), Quizlet, a list') });
    imp.onclick = () => void importInto(d);
    const del = h('button', 'ud-del', undefined, { type: 'button', title: tr('Delete the deck'), 'aria-label': tr('Delete the deck') });
    del.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 7h14M10 7V4.5h4V7M7 7l1 13h8l1-13"/></svg>';
    del.onclick = () => void deleteDeck(d);
    btns.append(study, words, imp, del);
    card.append(head, h('p', 'hint', `${d.count} ${d.count === 1 ? 'word' : 'words'}`), counts, btns);
    return card;
  }));
}

// ── a small window of our own (name a deck, import words) ──
function sheet(title: string): { d: HTMLDialogElement; body: HTMLElement; close: () => void } {
  let d = document.getElementById('udDialog') as HTMLDialogElement | null;
  if (!d) { d = document.createElement('dialog'); d.id = 'udDialog'; d.className = 'ud-dialog'; document.body.append(d); }
  const x = h('button', 'dlg-x', undefined, { type: 'button', 'aria-label': tr('Close') }); x.textContent = '✕';
  const head = h('h3'); head.textContent = title;
  const body = h('div', 'ud-body');
  d.replaceChildren(head, x, body);
  const close = () => d!.close();
  x.onclick = close;
  if (!d.open) d.showModal();
  return { d, body, close };
}
function askName(title: string, start = ''): Promise<string | null> {
  return new Promise((done) => {
    const { d, body, close } = sheet(tr(title));
    const input = h('input', 'ud-input', undefined, { type: 'text', maxlength: '40', placeholder: tr('e.g. Genki chapter 3') }) as HTMLInputElement;
    input.value = start;
    const ok = h('button', 'big', 'Save', { type: 'button' });
    let answered = false;
    const finish = (v: string | null) => { if (answered) return; answered = true; close(); done(v); };
    d.addEventListener('close', () => finish(null), { once: true });
    ok.onclick = () => { const v = input.value.trim(); if (v) finish(v); else input.focus(); };
    input.onkeydown = (e) => { if (e.key === 'Enter') ok.click(); };
    body.append(input, ok);
    setTimeout(() => input.focus(), 40);
  });
}
async function newDeck() {
  if (decks.length >= max) { ui.toast(tr(`You can have ${max} decks of your own`)); return; }
  const name = await askName('New deck');
  if (!name) return;
  try { await api.userDeckCreate(name); await renderUserDecks(); } catch (e) { ui.toast((e as Error).message); }
}
async function renameDeck(d: UserDeckView) {
  const name = await askName('Rename the deck', d.name);
  if (!name || name === d.name) return;
  try { await api.userDeckRename(d.id, name); forgetDeckIndex(); await renderUserDecks(); } catch (e) { ui.toast((e as Error).message); }
}
async function deleteDeck(d: UserDeckView) {
  if (!(await ui.confirmBox('Delete this deck?', `“${d.name}” and its words go, with their study progress.`, 'Delete', 'Cancel'))) return;
  try { await api.userDeckDelete(d.id); forgetDeckIndex(); await renderUserDecks(); changed(); } catch (e) { ui.toast((e as Error).message); }
}

/**
 * import words (0.9.9.9.9.6 round 4: the way Quizlet does it): paste your data, say what separates a term from its
 * definition and one card from the next, and see every card before it goes in — the reading and meaning filled in
 * from the game or the dictionary, a guessed reading marked, each one editable; nothing is skipped without your
 * seeing it. Or pick a file: an Anki deck (.apkg) goes straight in, a text / CSV export lands in the box.
 */
async function importInto(deck: UserDeckView) {
  const { d, body, close } = sheet(`${tr('Import into')} “${deck.name}”`);
  d.classList.add('ud-import');
  const intro = h('p', 'hint', 'One word per card - from a word list, a spreadsheet or another app\'s export. The reading may come first in the meaning: 猫 → ねこ - cat.');
  const area = h('textarea', 'ud-area', undefined, { rows: '6', placeholder: '先生\tせんせい - teacher\n勉強\tstudy\n猫[ねこ]\tcat', lang: 'ja', spellcheck: 'false' }) as HTMLTextAreaElement;
  // the separators
  let termSep: TermSep = 'tab', cardSep: CardSep = 'newline';
  // (round 5: the separators are a row of buttons — our own look, not a list of radio buttons)
  const group = (title: string, name: string, opts: Array<[string, string]>, on: string, set: (v: string, custom: string) => void) => {
    const box = h('div', 'ud-sep');
    box.append(h('span', 'ud-sep-lbl', title));
    const row = h('div', 'ud-seg', undefined, { role: 'radiogroup', 'aria-label': title });
    const custom = h('input', 'ud-custom', undefined, { type: 'text', maxlength: '8', placeholder: tr('Custom'), 'aria-label': tr('Custom') }) as HTMLInputElement;
    const pick = (v: string) => { for (const b of row.querySelectorAll<HTMLElement>('[data-v]')) { b.classList.toggle('on', b.dataset.v === v); b.setAttribute('aria-checked', String(b.dataset.v === v)); } custom.classList.toggle('on', v === 'custom'); };
    for (const [v, label] of opts) {
      const b = h('button', 'ud-opt', label, { type: 'button', role: 'radio', 'data-v': v, name });
      b.onclick = () => { pick(v); set(v, custom.value); refresh(); };
      row.append(b);
    }
    custom.oninput = () => { pick('custom'); set('custom', custom.value); refresh(); };
    custom.onfocus = () => { if (custom.value) { pick('custom'); set('custom', custom.value); refresh(); } };
    row.append(custom);
    pick(on);
    box.append(row);
    (box as HTMLElement & { pick?: (v: string) => void }).pick = pick;
    return box;
  };
  const seps = h('div', 'ud-seps');
  seps.append(
    group(tr('Between term and definition'), 'udTerm', [['tab', tr('Tab')], ['comma', tr('Comma')], ['dash', tr('Dash ( - )')]], 'tab', (v, c) => { termSep = v === 'custom' ? { custom: c } : v as TermSep; }),
    group(tr('Between cards'), 'udCard', [['newline', tr('New line')], ['semicolon', tr('Semicolon')], ['blank', tr('Empty line')]], 'newline', (v, c) => { cardSep = v === 'custom' ? { custom: c } : v as CardSep; }),
  );
  const head = h('div', 'ud-prevhead');
  const count = h('b');
  const note = h('span', 'hint');
  head.append(h('h4', '', tr('Preview')), count, note);
  const list = h('div', 'ud-prev');
  const out = h('div', 'ud-out');
  const file = h('input', '', undefined, { type: 'file', accept: '.apkg,.colpkg,.txt,.csv,.tsv' }) as HTMLInputElement;
  const pick = h('button', 'pill', 'Choose a file…', { type: 'button' }); pick.onclick = () => file.click();
  const cancel = h('button', 'pill', 'Cancel', { type: 'button' }); cancel.onclick = close;
  const go = h('button', 'big', 'Import', { type: 'button' }) as HTMLButtonElement;
  type Card = { kanji: string; reading: string; meaning: string; from: 'game' | 'dict' | 'guess' | 'none' };
  let cards: Card[] = [];
  let ask = 0, timer = 0;
  const ready = (c: Card) => !!c.kanji && /^[぀-ゟ゠-ヿー]+$/.test(c.reading) && !!c.meaning.trim();
  const KANA_ONLY = /^[぀-ゟ゠-ヿー]+$/;
  const draw = () => {
    const n = cards.length, ok = cards.filter(ready).length;
    count.textContent = tr(`${n} ${n === 1 ? 'card' : 'cards'}`);
    note.textContent = n && ok < n ? tr(`${n - ok} need a reading or a meaning - type it in, or they are left out`) : '';
    go.textContent = ok ? tr(`Import ${ok}`) : tr('Import');
    go.disabled = !ok;
    if (!n) { list.replaceChildren(h('p', 'hint', tr('Nothing to preview yet.'))); return; }
    list.replaceChildren(...cards.slice(0, 300).map((c, i) => {
      const row = h('div', `ud-card${ready(c) ? '' : ' bad'}`);
      const field = (k: 'kanji' | 'reading' | 'meaning', ph: string, lang?: string) => {
        const x = h('input', `ud-f ud-${k}`, undefined, { type: 'text', placeholder: tr(ph), ...(lang ? { lang } : {}) }) as HTMLInputElement;
        x.value = c[k];
        x.oninput = () => { c[k] = x.value.trim(); if (k === 'reading' && c.from === 'guess') c.from = 'none'; row.classList.toggle('bad', !ready(c)); tag(); draw2(); };
        return x;
      };
      const chip = h('span', 'ud-from');
      const tag = () => {
        const [cls, label] = !c.reading ? ['need', 'Needs a reading'] : !KANA_ONLY.test(c.reading) ? ['need', 'Reading in kana'] : !c.meaning ? ['need', 'Needs a meaning']
          : c.from === 'game' ? ['game', 'In the game'] : c.from === 'dict' ? ['dict', 'From the dictionary'] : c.from === 'guess' ? ['guess', 'Reading guessed - check it'] : ['own', 'Your own word'];
        chip.className = `ud-from ${cls}`; chip.textContent = tr(label);
      };
      tag();
      const x = h('button', 'ud-x', '✕', { type: 'button', 'aria-label': tr('Remove') });
      x.onclick = () => { cards.splice(i, 1); draw(); };
      row.append(h('span', 'ud-n', String(i + 1)), field('reading', 'Reading (kana)', 'ja'), field('kanji', 'Word', 'ja'), field('meaning', 'Meaning'), chip, x);
      return row;
    }), ...(cards.length > 300 ? [h('p', 'hint', tr(`…and ${cards.length - 300} more`))] : []));
  };
  // (typing in a field: the counts change, the rows stay as they are)
  const draw2 = () => { const n = cards.length, ok = cards.filter(ready).length; note.textContent = n && ok < n ? tr(`${n - ok} need a reading or a meaning - type it in, or they are left out`) : ''; go.textContent = ok ? tr(`Import ${ok}`) : tr('Import'); go.disabled = !ok; };
  const refresh = () => {
    clearTimeout(timer);
    timer = window.setTimeout(async () => {
      const raw = parseCards(area.value.slice(0, 400_000), termSep, cardSep);
      const me = ++ask;
      cards = raw.map((c) => ({ ...c, from: 'none' as const }));
      draw();
      if (!raw.length) return;
      list.classList.add('loading');
      try { const r = await api.userDeckPreview(raw, lang()); if (me === ask) { cards = r.cards; draw(); } }
      catch { /* offline: the cards as they are */ }
      if (me === ask) list.classList.remove('loading');
    }, 350);
  };
  area.oninput = () => {
    // the first paste: the separator, at a guess
    if (!area.dataset.seen && area.value.trim()) {
      area.dataset.seen = '1';
      termSep = guessTermSep(area.value);
      const v = typeof termSep === 'string' ? termSep : 'custom';
      const sep = d.querySelector('.ud-sep') as (HTMLElement & { pick?: (v: string) => void }) | null; sep?.pick?.(v);
    }
    refresh();
  };
  go.onclick = async () => {
    const rows = cards.filter(ready).map(({ kanji, reading, meaning }) => ({ kanji, reading, meaning }));
    if (!rows.length) return;
    go.disabled = true; out.textContent = tr('Adding…');
    await report(api.userDeckAddPreview(deck.id, rows));
  };
  const report = async (p: Promise<{ added: number; skipped: Array<{ line: number; word: string; why: string }> }>) => {
    try {
      const r = await p;
      const b = h('b'); b.textContent = tr(`${r.added} ${r.added === 1 ? 'word added' : 'words added'}`); out.replaceChildren(b);
      if (r.skipped.length) {
        const ul = h('ul', 'ud-skip');
        for (const s of r.skipped.slice(0, 12)) { const li = h('li'); li.textContent = `${s.word} - ${tr(s.why)}`; ul.append(li); }
        const n = h('p', 'hint'); n.textContent = tr(`${r.skipped.length} skipped:`); out.append(n, ul);
      } else { area.value = ''; cards = []; draw(); }
      forgetDeckIndex(); await renderUserDecks(); changed();
    } catch (e) { out.textContent = (e as Error).message; }
    draw2();
  };
  file.onchange = async () => {
    const f = file.files?.[0];
    file.value = '';
    if (!f) return;
    if (f.size > 20 * 1024 * 1024) { out.textContent = tr('The deck file is too big (20 MB) - export it without media'); return; }
    if (/\.(apkg|colpkg)$/i.test(f.name)) {
      out.textContent = tr('Adding…');
      const b64 = await new Promise<string>((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).replace(/^data:[^,]*,/, '')); r.onerror = () => rej(r.error); r.readAsDataURL(f); });
      void report(api.userDeckImport(deck.id, b64));
    } else {
      area.value = (await f.text()).slice(0, 400_000);
      area.dataset.seen = '';
      area.oninput?.(new Event('input'));
    }
  };
  const foot = h('div', 'ud-row ud-foot'); foot.append(pick, h('span', 'ud-gap'), cancel, go);
  const step = (n: string, text: string) => { const e = h('div', 'ud-step'); e.append(h('span', 'ud-step-n', n), h('b', '', text)); return e; };
  const left = h('div', 'ud-col ud-left');
  left.append(step('1', tr('Paste your words')), intro, area, step('2', tr('How are they split?')), seps);
  const right = h('div', 'ud-col ud-right');
  right.append(head, list, out);
  const cols = h('div', 'ud-cols');
  cols.append(left, right);
  body.append(cols);
  d.append(foot); // (below the scrolling part: always in reach, never over a card)
  draw();
  setTimeout(() => area.focus(), 40);
}
