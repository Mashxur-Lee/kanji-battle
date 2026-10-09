// Builds data/vocab.json: hand-written lists (src/shared/vocab.ts) + the open JLPT word lists in
// data/sources (open-anki-jlpt-decks, MIT; based on Jonathan Waller's JLPT lists, CC BY).
// Run: npx tsx scripts/build-vocab.ts
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { katakanaToHiragana } from '../src/shared/kana';
import type { Level, VocabEntry } from '../src/shared/protocol';
import { CURATED, KANA_ALT, LEVEL_DIFFICULTY } from '../src/shared/vocab';

const ROOT = path.resolve(__dirname, '..');
const KANJI = /[一-鿿㐀-䶿々]/;
const ONLY_JA = /^[぀-ゟ゠-ヿ一-鿿㐀-䶿々ー]+$/;

/** Minimal CSV parser (quoted fields with commas). */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [], field = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') q = false;
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(field); field = ''; }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.some((f) => f !== '')) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows;
}

/** Does this written form fit this reading? Kana in the word must line up with the reading. */
export function fits(expr: string, reading: string): boolean {
  let re = '^';
  for (const ch of expr) re += KANJI.test(ch) ? '.+?' : katakanaToHiragana(ch).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(re + '$').test(katakanaToHiragana(reading));
}

const kanaCount = (s: string) => [...s].filter((c) => !KANJI.test(c)).length;

/** Pick the written form that matches the reading best (prefers the one with okurigana that lines up). */
export function pickForm(exprField: string, reading: string): string | null {
  const forms = exprField.split(/[;；]/).map((s) => s.trim()).filter(Boolean);
  const ok = forms.filter((f) => ONLY_JA.test(f) && KANJI.test(f) && fits(f, reading));
  if (ok.length === 0) return null;
  return ok.sort((a, b) => kanaCount(b) - kanaCount(a))[0];
}

export function cleanMeaning(m: string): string {
  const senses = m.replace(/--/g, '').replace(/\s+/g, ' ').trim().split(/;|,(?![^(]*\))/).map((s) => s.trim()).filter(Boolean);
  let out = '';
  for (const s of senses) {
    const next = out ? `${out}; ${s}` : s;
    if (next.length > 44 && out) break;
    out = next;
    if (out.split(';').length >= 3) break;
  }
  if (out.length > 60) out = out.slice(0, 58).replace(/[\s,;(]+\S*$/, '') + '…'; // cut at a word boundary
  return out.replace(/\(([^)]*)$/, '$1'); // drop an unbalanced "("
}

function strokeTable(): Map<string, number> {
  const refs = JSON.parse(readFileSync(path.join(ROOT, 'data/kanji-patterns.json'), 'utf8')) as Array<[string, number]>;
  return new Map(refs.map((r) => [r[0], r[1]]));
}

/** Level is the main signal, adjusted by how many strokes and kanji the word has (spec §8). */
export function difficultyOf(level: Level, word: string, strokes: Map<string, number>): { difficulty: number; strokes: number } {
  const ks = [...word].filter((c) => KANJI.test(c));
  const total = ks.reduce((s, c) => s + (strokes.get(c) ?? 16), 0); // unknown to the recogniser ≈ rare/complex
  const adj = Math.max(-6, Math.min(10, (total - 12) * 0.45)) + (ks.length >= 3 ? 2 : 0);
  return { difficulty: Math.round(Math.max(5, Math.min(100, LEVEL_DIFFICULTY[level] + adj))), strokes: total };
}

export function build(): VocabEntry[] {
  const strokes = strokeTable();
  const out = new Map<string, VocabEntry>();
  const key = (k: string, r: string) => `${k}:${r}`;
  const seenWord = new Map<string, Level>();

  // open lists, easiest level first (a word listed at several levels stays at the easiest)
  for (const level of ['N5', 'N4', 'N3', 'N2', 'N1'] as const) {
    const [header, ...rows] = parseCsv(readFileSync(path.join(ROOT, `data/sources/${level.toLowerCase()}.csv`), 'utf8'));
    const iE = header.indexOf('expression'), iR = header.indexOf('reading'), iM = header.indexOf('meaning');
    for (const r of rows) {
      const expr = r[iE] ?? '', readingField = r[iR] ?? '', meaning = r[iM] ?? '';
      if (/[～〜()（）\s]/.test(expr.replace(/;\s/g, ';')) || /[～〜()（）]/.test(readingField)) continue; // affixes, notes
      const readings = readingField.split(/[;；]/).map((s) => katakanaToHiragana(s.trim())).filter((s) => /^[ぁ-ゖー]+$/.test(s));
      if (readings.length === 0) continue;
      const form = pickForm(expr, readings[0]);
      if (!form || seenWord.has(form)) continue;
      const m = cleanMeaning(meaning);
      if (!m) continue;
      seenWord.set(form, level);
      const alts = readings.slice(1).filter((x) => fits(form, x));
      out.set(key(form, readings[0]), {
        id: key(form, readings[0]), kanji: form, reading: readings[0], meaning: m, level,
        ...difficultyOf(level, form, strokes), ...(alts.length ? { altReadings: alts } : {}),
      });
    }
  }

  // hand-written lists: add what the open lists don't have; keep hand-tuned difficulty
  for (const level of Object.keys(CURATED) as Level[]) {
    for (const [kanji, second, meaning, difficulty] of CURATED[level]) {
      if (level === 'KANA') {
        out.set(`kana:${kanji}`, { id: `kana:${kanji}`, kanji, reading: kanji, romaji: second, meaning, level, difficulty: difficulty ?? LEVEL_DIFFICULTY.KANA, ...(KANA_ALT[kanji] ? { altReadings: KANA_ALT[kanji] } : {}) });
        continue;
      }
      if (seenWord.has(kanji)) continue;
      seenWord.set(kanji, level);
      const d = difficultyOf(level, kanji, strokes);
      out.set(key(kanji, second), { id: key(kanji, second), kanji, reading: second, meaning, level, difficulty: difficulty ?? d.difficulty, strokes: d.strokes });
    }
  }
  return [...out.values()];
}

if (require.main === module) {
  const vocab = build();
  writeFileSync(path.join(ROOT, 'data/vocab.json'), JSON.stringify(vocab));
  const by: Record<string, number> = {};
  for (const v of vocab) by[v.level] = (by[v.level] ?? 0) + 1;
  console.log(vocab.length, 'words', by);
}
