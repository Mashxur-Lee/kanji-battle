// 0.9.9.9.9.6: memory pictures painted by an AI — the owner: "instead of the blue and orange kanji itself, a matching
// picture; the first time someone opens a kanji's memory picture it generates the image and keeps it, so we won't run
// out". The story (data/kanji/notes, in public/kanji.json) stays under it; the picture shows the story. One picture
// per kanji, for everyone, made once and kept in the database.
// On only with MNEMONIC_IMAGE_KEY set (an OpenAI API key, its own — OPENAI_API_KEY may be another service for the stories) (MNEMONIC_IMAGE_MODEL picks the model, default gpt-image-1; MNEMONIC_DAILY_CAP the
// most pictures painted a day for the whole game, default 60; a player may start at most PER_PLAYER_DAY a day).
// Pictures are small WebP (~50 KB): 2,000 kanji would be about 100 MB, and only the ones people open are made.
import type { Store } from './db/Store';

export const PER_PLAYER_DAY = 8;
const CJK = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}々〆ー]/gu;

export interface MnemonicOptions { key: string; model?: string; dailyCap?: number; story: (ch: string) => { en: string; meaning: string } | null; fetcher?: typeof fetch; today?: () => string }
export type PaintResult = { ok: true } | { ok: false; why: 'none' | 'limit' | 'busy' | 'failed' };

/** the prompt for a kanji's picture: its story with the characters taken out (a model draws them badly — no text at all) */
export function mnemonicPrompt(meaning: string, story: string): string {
  const s = story.replace(CJK, '').replace(/\(\s*\)|\s{2,}/g, ' ').replace(/\s+([,.;:!?])/g, '$1').trim();
  return `A small, clear illustration for a memory aid. It means "${meaning}". The scene: ${s} `
    + 'Painted in a warm storybook style with soft colours, one simple scene, an uncluttered soft background. '
    + 'Absolutely no text, letters, numbers, symbols, signs or writing of any kind in the picture.';
}

export class MnemonicPictures {
  private painting = new Map<string, Promise<PaintResult>>();
  private day = '';
  private paintedToday = 0;
  private perPlayer = new Map<string, number>();
  constructor(private readonly store: Store, private readonly o: MnemonicOptions) {}

  /** the kept picture of a kanji (null: not painted yet) */
  picture(ch: string) { return this.store.mnemonicPic(ch); }

  /** paint a kanji's picture (once — a second ask while it is being painted waits for the same one) */
  paint(ch: string, userId: string): Promise<PaintResult> {
    const going = this.painting.get(ch);
    if (going) return going;
    const p = this.doPaint(ch, userId).finally(() => this.painting.delete(ch));
    this.painting.set(ch, p);
    return p;
  }

  private async doPaint(ch: string, userId: string): Promise<PaintResult> {
    if (await this.store.mnemonicPic(ch)) return { ok: true };
    const st = this.o.story(ch);
    if (!st || !st.en) return { ok: false, why: 'none' };
    const today = this.o.today?.() ?? new Date().toISOString().slice(0, 10);
    if (today !== this.day) { this.day = today; this.paintedToday = 0; this.perPlayer.clear(); }
    if (this.paintedToday >= (this.o.dailyCap ?? 60) || (this.perPlayer.get(userId) ?? 0) >= PER_PLAYER_DAY) return { ok: false, why: 'limit' };
    this.paintedToday++;
    this.perPlayer.set(userId, (this.perPlayer.get(userId) ?? 0) + 1);
    try {
      const r = await (this.o.fetcher ?? fetch)('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: { Authorization: `Bearer ${this.o.key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: this.o.model ?? 'gpt-image-1', prompt: mnemonicPrompt(st.meaning, st.en), size: '1024x1024', quality: 'low', output_format: 'webp', output_compression: 55, n: 1 }),
        signal: AbortSignal.timeout(90_000),
      });
      if (!r.ok) { console.error('[mnemonics]', r.status, (await r.text().catch(() => '')).slice(0, 300)); return { ok: false, why: 'failed' }; }
      const b64 = ((await r.json()) as { data?: Array<{ b64_json?: string }> }).data?.[0]?.b64_json;
      if (!b64) return { ok: false, why: 'failed' };
      const data = Buffer.from(b64, 'base64');
      if (data.length < 1000 || data.length > 1_500_000) return { ok: false, why: 'failed' };
      await this.store.saveMnemonicPic(ch, 'image/webp', data);
      return { ok: true };
    } catch (e) { console.error('[mnemonics]', (e as Error).message); return { ok: false, why: 'failed' }; }
  }
}
