// 0.9.9.9.9.6: decks of your own on the Study page — make one, name it, put words in (typed, pasted from a list,
// Quizlet's or Anki's text export, or an Anki deck file .apkg straight from AnkiDroid), study it. Each word is a card in
// "My words" (the same spaced repetition); a deck's Study reviews only its own cards.
// Round 2 (the owner): one "+ New deck" (the Import button and Custom spells went — a deck does both), each deck drawn
// like the other decks (its counts, Study, Words, Import, Rename, Delete), four at most; the words someone had in
// Custom spells became a deck "My words".
import { api } from './api';
import { tr } from './i18n';
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

/** import words: paste them (one a line), or pick a file — Anki .apkg, or a text / CSV export (Quizlet, Anki) */
async function importInto(deck: UserDeckView) {
  const { body } = sheet(`${tr('Import into')} “${deck.name}”`);
  const how = h('p', 'hint', 'One word a line: the word, then its reading and meaning (separated by a tab, ; or ,). Or pick a file: an Anki deck (.apkg from AnkiDroid or Anki - export it without media), or a text / CSV export from Quizlet or Anki.');
  const area = h('textarea', 'ud-area', undefined, { rows: '7', placeholder: '先生\tせんせい\tteacher\n勉強; べんきょう; study\n猫 ねこ cat', lang: 'ja' }) as HTMLTextAreaElement;
  const file = h('input', '', undefined, { type: 'file', accept: '.apkg,.colpkg,.txt,.csv,.tsv' }) as HTMLInputElement;
  const pick = h('button', 'pill', 'Choose a file…', { type: 'button' }); pick.onclick = () => file.click();
  const go = h('button', 'big', 'Add', { type: 'button' }) as HTMLButtonElement;
  const out = h('div', 'ud-out');
  const done = async (p: Promise<{ added: number; skipped: Array<{ line: number; word: string; why: string }> }>) => {
    go.disabled = true; out.textContent = tr('Adding…');
    try {
      const r = await p;
      const b = h('b'); b.textContent = tr(`${r.added} ${r.added === 1 ? 'word added' : 'words added'}`); out.replaceChildren(b);
      if (r.skipped.length) {
        const ul = h('ul', 'ud-skip');
        for (const s of r.skipped.slice(0, 12)) { const li = h('li'); li.textContent = `${s.line}. ${s.word} - ${tr(s.why)}`; ul.append(li); }
        const note = h('p', 'hint'); note.textContent = tr(`${r.skipped.length} skipped:`); out.append(note, ul);
      }
      area.value = '';
      forgetDeckIndex(); await renderUserDecks(); changed();
    } catch (e) { out.textContent = (e as Error).message; }
    go.disabled = false;
  };
  go.onclick = () => { if (area.value.trim()) void done(api.userDeckAdd(deck.id, area.value)); else area.focus(); };
  file.onchange = async () => {
    const f = file.files?.[0];
    file.value = '';
    if (!f) return;
    if (f.size > 20 * 1024 * 1024) { out.textContent = tr('The deck file is too big (20 MB) - export it without media'); return; }
    if (/\.(apkg|colpkg)$/i.test(f.name)) {
      const b64 = await new Promise<string>((res, rej) => { const r = new FileReader(); r.onload = () => res(String(r.result).replace(/^data:[^,]*,/, '')); r.onerror = () => rej(r.error); r.readAsDataURL(f); });
      void done(api.userDeckImport(deck.id, b64));
    } else {
      area.value = (await f.text()).slice(0, 400_000);
      void done(api.userDeckAdd(deck.id, area.value));
    }
  };
  const row = h('div', 'ud-row'); row.append(pick, go);
  body.append(how, area, row, out);
}
