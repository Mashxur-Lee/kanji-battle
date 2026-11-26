// 0.9.9.9.9.6: reading an Anki deck package (.apkg / .colpkg — AnkiDroid's "Export" and Anki's) for "import your
// AnkiDroid deck": a zip with the collection inside, an SQLite database. Only the notes' fields are read (the words);
// scheduling, media and templates are left out. Newer packages keep the collection zstd-compressed
// (collection.anki21b); older ones plain (collection.anki21 / collection.anki2).
import { inflateRawSync, zstdDecompressSync } from 'node:zlib';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { IMPORT_ROWS_MAX, rowOf, type ImportRow } from './UserDecks';

export const APKG_MAX_BYTES = 20 * 1024 * 1024;

/** the files of a zip by name (stored or deflated), from its central directory */
export function unzip(buf: Buffer, want: (name: string) => boolean): Map<string, Buffer> {
  const out = new Map<string, Buffer>();
  // the end-of-central-directory record: searched for from the end (a comment may follow it)
  let eocd = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 65_557); i--) if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw new Error('Not a deck file (an .apkg is a zip)');
  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  for (let n = 0; n < count && p + 46 <= buf.length; n++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) break;
    const method = buf.readUInt16LE(p + 10), csize = buf.readUInt32LE(p + 20), usize = buf.readUInt32LE(p + 24);
    const nlen = buf.readUInt16LE(p + 28), xlen = buf.readUInt16LE(p + 30), clen = buf.readUInt16LE(p + 32), local = buf.readUInt32LE(p + 42);
    const name = buf.toString('utf8', p + 46, p + 46 + nlen);
    p += 46 + nlen + xlen + clen;
    if (!want(name)) continue;
    if (local + 30 > buf.length || buf.readUInt32LE(local) !== 0x04034b50) continue;
    const start = local + 30 + buf.readUInt16LE(local + 26) + buf.readUInt16LE(local + 28);
    const data = buf.subarray(start, start + csize);
    if (usize > 200 * 1024 * 1024) throw new Error('The deck is too big');
    out.set(name, method === 0 ? Buffer.from(data) : method === 8 ? inflateRawSync(data) : Buffer.alloc(0));
  }
  return out;
}

/** the words of an Anki package: each note's fields, read as a word, its reading and its meaning */
export async function readApkg(buf: Buffer): Promise<ImportRow[]> {
  if (buf.length > APKG_MAX_BYTES) throw new Error('The deck file is too big (20 MB) - export it without media');
  const files = unzip(buf, (n) => /^collection\.(anki21b|anki21|anki2)$/.test(n));
  let db = files.get('collection.anki21b');
  if (db?.length) db = zstdDecompressSync(db);
  else db = files.get('collection.anki21') ?? files.get('collection.anki2');
  if (!db?.length) throw new Error('No cards in this file - is it an Anki deck (.apkg)?');
  // node:sqlite opens files only: the collection goes to a temporary file, read, and removed
  const { DatabaseSync } = await import('node:sqlite');
  const dir = mkdtempSync(join(tmpdir(), 'kw-apkg-'));
  const file = join(dir, 'c.db');
  try {
    writeFileSync(file, db);
    const sql = new DatabaseSync(file, { readOnly: true });
    try {
      const rows = sql.prepare('select flds from notes order by id limit ?').all(IMPORT_ROWS_MAX * 2) as Array<{ flds: string }>;
      const out: ImportRow[] = [];
      const seen = new Set<string>();
      for (const r of rows) {
        const row = rowOf(String(r.flds ?? '').split('\u001f'));
        if (!row || seen.has(`${row.kanji}|${row.reading}`)) continue;
        // (a new Anki's "please update" placeholder in the old-format file)
        if (/update to the latest Anki|please update/i.test(row.meaning)) continue;
        seen.add(`${row.kanji}|${row.reading}`);
        out.push(row);
        if (out.length >= IMPORT_ROWS_MAX) break;
      }
      return out;
    } finally { sql.close(); }
  } finally { rmSync(dir, { recursive: true, force: true }); }
}
