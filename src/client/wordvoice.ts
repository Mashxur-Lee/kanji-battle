// 0.9.9.9.9.7 (round 4): a word you cast is said by the character you play as (the Goblin, the Knight, the Witch or the
// Wizard), in its VOICEVOX voice, instead of the device's text-to-speech. The clips are on their own site
// (shared/wordvoice.ts); each is fetched the first time and kept in the browser (Cache Storage), so a word heard once
// plays at once from then on, offline too. A battle's words are fetched while you study them. When a clip isn't there
// in time (no internet, a word not recorded yet), the device's voice says it as before.
import { spokenWord, wordClipUrl } from '../shared/wordvoice';

const CACHE = 'kw-words-v1';
/** how long a cast waits for a clip it doesn't have yet before the device's voice says the word */
const WAIT_MS = 700;
let character = 'wizard';
export function setWordCharacter(c: string) { character = c; }

const ready = new Map<string, Promise<Blob | null>>(); // url → its clip (or null: not there)
function clip(url: string): Promise<Blob | null> {
  let p = ready.get(url);
  if (!p) {
    p = (async () => {
      try {
        const cache = typeof caches !== 'undefined' ? await caches.open(CACHE) : null;
        const hit = await cache?.match(url);
        if (hit) return await hit.blob();
        const r = await fetch(url, { mode: 'cors' });
        if (!r.ok) return null;
        await cache?.put(url, r.clone()).catch(() => { /* storage full: played anyway */ });
        return await r.blob();
      } catch { return null; }
    })();
    ready.set(url, p);
    void p.then((b) => { if (!b) ready.delete(url); }); // (a miss is tried again next time)
  }
  return p;
}

/** a battle's words, fetched in the background while you study them */
export function prefetchWords(words: Array<{ kanji: string; reading: string }>) {
  for (const w of words.slice(0, 80)) void clip(wordClipUrl(character, spokenWord(w.kanji, w.reading)));
}

/**
 * say a word in the character's voice: resolves when it has been said. false: no clip in time — the caller uses the
 * device's voice
 */
export async function playWord(said: string, volume: number): Promise<boolean> {
  const b = await Promise.race([clip(wordClipUrl(character, said)), new Promise<null>((r) => setTimeout(() => r(null), WAIT_MS))]);
  if (!b) return false;
  const url = URL.createObjectURL(b);
  const a = new Audio(url);
  a.volume = Math.max(0, Math.min(1, volume));
  return new Promise<boolean>((done) => {
    const end = () => { URL.revokeObjectURL(url); done(true); };
    a.onended = end; a.onerror = () => { URL.revokeObjectURL(url); done(false); };
    void a.play().catch(() => { URL.revokeObjectURL(url); done(false); });
  });
}
