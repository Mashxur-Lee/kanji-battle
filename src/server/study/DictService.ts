// The dictionary on the server (0.9.9.7): the same search the app runs offline (shared/dict.ts), over
// public/dict.json — kept for /api/dict (and the tests).
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { Dictionary, type DictEntry } from '../../shared/dict';
import { VOCAB } from '../vocab';

export type { DictEntry, DictSense } from '../../shared/dict';

export class DictService {
  private dict: Dictionary | null = null;
  constructor(private readonly file = path.resolve(__dirname, '../../../public/dict.json')) {}
  private d(): Dictionary {
    if (!this.dict) {
      let data = { tags: {}, words: [] };
      try { data = JSON.parse(readFileSync(this.file, 'utf8')); } catch { /* no dictionary built */ }
      this.dict = new Dictionary(data, VOCAB);
    }
    return this.dict;
  }
  tagNames() { return this.d().tags; }
  get(i: number): DictEntry | null { return this.d().get(i); }
  search(raw: unknown, limit = 60): DictEntry[] { return this.d().search(raw, limit); }
  withKanji(ch: string, limit = 12): DictEntry[] { return this.d().withKanji(ch, limit); }
}
