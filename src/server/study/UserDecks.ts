// 0.9.9.9.9.6: decks of your own — the owner: "an option to create your own deck, name it and import the kanji, like
// Quizlet; you should be able to import your existing AnkiDroid deck". A deck is a name and a list of words; each word
// is a card in your "My words" deck (its spaced repetition is the same as every other card's), and studying the deck
// reviews only its own cards. Kept per player in the key-value store (udecks:<id>).
import { randomUUID } from 'node:crypto';
import type { Store, UserRecord } from '../db/Store';

export interface UserDeck { id: string; name: string; words: string[]; createdAt: number }
// (round 2: four — the owner)
export const USER_DECKS_MAX = 4;
export const USER_DECK_WORDS_MAX = 1000;
/** one line of an import: the word, its reading, its meaning (the reading may be missing for a dictionary word) */
export interface ImportRow { kanji: string; reading: string; meaning: string }
export const IMPORT_ROWS_MAX = 1000;

const key = (userId: string) => `udecks:${userId}`;
const cleanName = (raw: unknown) => String(raw ?? '').replace(/[\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 40);

export class UserDeckError extends Error {}

export class UserDecks {
  constructor(private readonly store: Store, private readonly addCustom: (u: UserRecord, body: { kanji?: unknown; reading?: unknown; meaning?: unknown; vocabId?: unknown; ownKana?: boolean }) => Promise<{ word: { id: string } }>,
    /** take cards out of My words (a word no deck of yours holds any more) */
    private readonly dropCards: (u: UserRecord, ids: string[]) => Promise<unknown> = async () => {}) {}

  /** round 2: Custom spells became decks of your own — the words someone already had there become a deck "My words"
   *  (once: a player who never had any decks list saved) */
  async migrate(userId: string, customIds: string[]): Promise<void> {
    if ((await this.store.getValue(key(userId))) !== null) return;
    const decks: UserDeck[] = customIds.length ? [{ id: randomUUID().slice(0, 12), name: 'My words', words: [...new Set(customIds)].slice(0, USER_DECK_WORDS_MAX), createdAt: Date.now() }] : [];
    await this.save(userId, decks);
  }
  /** the words no deck holds any more: their cards go too */
  private async orphans(u: UserRecord, gone: string[]) {
    if (!gone.length) return;
    const still = new Set((await this.list(u.id)).flatMap((d) => d.words));
    const drop = gone.filter((w) => !still.has(w));
    if (drop.length) await this.dropCards(u, drop);
  }

  async list(userId: string): Promise<UserDeck[]> {
    try {
      const raw = await this.store.getValue(key(userId));
      const v = raw ? (JSON.parse(raw) as UserDeck[]) : [];
      return Array.isArray(v) ? v.filter((d) => d && typeof d.id === 'string' && Array.isArray(d.words)) : [];
    } catch { return []; }
  }
  private async save(userId: string, decks: UserDeck[]) { await this.store.setValue(key(userId), JSON.stringify(decks)); }
  async get(userId: string, id: unknown): Promise<UserDeck | null> { return (await this.list(userId)).find((d) => d.id === id) ?? null; }

  async create(userId: string, name: unknown): Promise<UserDeck> {
    const n = cleanName(name);
    if (!n) throw new UserDeckError('Give the deck a name');
    const decks = await this.list(userId);
    if (decks.length >= USER_DECKS_MAX) throw new UserDeckError(`You can have ${USER_DECKS_MAX} decks of your own`);
    const d: UserDeck = { id: randomUUID().slice(0, 12), name: n, words: [], createdAt: Date.now() };
    await this.save(userId, [...decks, d]);
    return d;
  }
  async rename(userId: string, id: unknown, name: unknown): Promise<UserDeck> {
    const n = cleanName(name);
    if (!n) throw new UserDeckError('Give the deck a name');
    const decks = await this.list(userId);
    const d = decks.find((x) => x.id === id);
    if (!d) throw new UserDeckError('No such deck');
    d.name = n;
    await this.save(userId, decks);
    return d;
  }
  async remove(u: UserRecord, id: unknown): Promise<boolean> {
    const decks = await this.list(u.id);
    const left = decks.filter((x) => x.id !== id);
    if (left.length === decks.length) return false;
    await this.save(u.id, left);
    await this.orphans(u, decks.find((x) => x.id === id)?.words ?? []);
    return true;
  }
  /** words into a deck (each one made a card of yours first); how many were new to it, and the lines it couldn't take */
  async addWords(u: UserRecord, id: unknown, rows: ImportRow[]): Promise<{ deck: UserDeck; added: number; skipped: Array<{ line: number; word: string; why: string }> }> {
    const decks = await this.list(u.id);
    const d = decks.find((x) => x.id === id);
    if (!d) throw new UserDeckError('No such deck');
    const skipped: Array<{ line: number; word: string; why: string }> = [];
    let added = 0;
    const have = new Set(d.words);
    for (const [n, row] of rows.slice(0, IMPORT_ROWS_MAX).entries()) {
      if (d.words.length >= USER_DECK_WORDS_MAX) { skipped.push({ line: n + 1, word: row.kanji, why: `the deck is full (${USER_DECK_WORDS_MAX})` }); continue; }
      try {
        const r = await this.addCustom(u, { kanji: row.kanji, reading: row.reading, meaning: row.meaning, ownKana: true });
        if (!have.has(r.word.id)) { have.add(r.word.id); d.words.push(r.word.id); added++; }
      } catch (e) { skipped.push({ line: n + 1, word: row.kanji, why: (e as Error).message }); }
    }
    await this.save(u.id, decks);
    return { deck: d, added, skipped: skipped.slice(0, 50) };
  }
  async removeWords(u: UserRecord, id: unknown, words: unknown): Promise<UserDeck> {
    const decks = await this.list(u.id);
    const d = decks.find((x) => x.id === id);
    if (!d) throw new UserDeckError('No such deck');
    const out = new Set((Array.isArray(words) ? words : []).filter((x): x is string => typeof x === 'string'));
    d.words = d.words.filter((w) => !out.has(w));
    await this.save(u.id, decks);
    await this.orphans(u, [...out]);
    return d;
  }
  async forget(userId: string) { await this.store.setValue(key(userId), null); }
}

// ── reading an import: a list, a CSV / TSV (Quizlet, AnkiDroid's "Export as plain text"), or an Anki package's notes ──
const HAS_JA = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}々ー]/u;
const KANA_ONLY = /^[\p{Script=Hiragana}\p{Script=Katakana}ー・\s]+$/u;
const stripHtml = (s: string) => s.replace(/<br\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/\[sound:[^\]]*\]/g, '').replace(/\s+/g, ' ').trim();
/** Anki's furigana "漢字[かんじ]" → the word and its reading */
function furigana(s: string): { kanji: string; reading: string } | null {
  if (!/\[[^\]]+\]/.test(s)) return null;
  const kanji = s.replace(/\[[^\]]*\]/g, '').replace(/\s+/g, '');
  const reading = s.replace(/\s*([^\s[\]]+?)\[([^\]]+)\]/g, (_m, _b, r) => r).replace(/\s+/g, '');
  return KANA_ONLY.test(reading) ? { kanji, reading } : null;
}
/** the fields of one note / line → a word, its reading and its meaning (null: no Japanese in it) */
export function rowOf(fields: string[]): ImportRow | null {
  const f = fields.map(stripHtml).filter((x) => x.length > 0);
  const jaIdx = f.findIndex((x) => HAS_JA.test(x));
  if (jaIdx < 0) return null;
  let kanji = f[jaIdx], reading = '';
  const fu = furigana(kanji);
  if (fu) { kanji = fu.kanji; reading = fu.reading; }
  const rest = f.filter((_, i) => i !== jaIdx);
  if (!reading) { const r = rest.find((x) => KANA_ONLY.test(x)); if (r) reading = r.replace(/[\s・]/g, ''); }
  if (!reading && KANA_ONLY.test(kanji)) reading = kanji.replace(/[\s・]/g, '');
  const meaning = rest.find((x) => !HAS_JA.test(x) && x.length <= 200) ?? '';
  kanji = kanji.replace(/\s+/g, '').slice(0, 16);
  return kanji ? { kanji, reading: reading.slice(0, 32), meaning: meaning.slice(0, 120) } : null;
}
/** a pasted list or a text file: one word a line, its fields split by tabs, semicolons, commas or " - " */
export function parseList(text: string): ImportRow[] {
  const out: ImportRow[] = [];
  for (const line of text.replace(/\r/g, '').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue; // (Anki's text export starts with #separator:tab and the like)
    const sep = t.includes('\t') ? '\t' : t.includes(';') ? ';' : t.includes(' - ') ? ' - ' : t.includes(',') ? ',' : /\s/.test(t) ? /\s+/ : '\t';
    const fields = (typeof sep === 'string' ? t.split(sep) : t.split(sep)).map((x) => x.trim().replace(/^"(.*)"$/, '$1'));
    const r = rowOf(fields);
    if (r) out.push(r);
    if (out.length >= IMPORT_ROWS_MAX) break;
  }
  return out;
}
