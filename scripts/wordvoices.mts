// 0.9.9.9.9.7 (round 4): every word of the battles in the voice of each character you can play as (the owner: "the
// character you have equipped says the word you cast instead of the Windows / Android one"). The four characters are
// the chess wizards, so each speaks in its chess voice (BOT_VOICE). The clips are not in the game's repository (about
// 120 MB): they go to their own site (the kanji-wizards-voices repository, served by GitHub Pages), and the game loads a
// word the first time it is cast and keeps it (src/client/wordvoice.ts). A clip is named by the spoken kana, as the chess
// lines are (lineHash), so the game finds it without a list.
// Needs the VOICEVOX engine (http://127.0.0.1:50021) and ffmpeg. Makes only what is missing; N5 first, then N4, kana…
//   npx tsx scripts/wordvoices.mts --out <folder> [--ffmpeg path] [--only goblin] [--levels N5,N4] [--jobs 2]
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { BOT_VOICE, lineHash, type BotVoice } from '../src/shared/chesslines';
import { CHARACTERS } from '../src/shared/progress';
import { spokenWord } from '../src/shared/wordvoice';

const run = promisify(execFile);
const arg = (k: string) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : undefined; };
const ENGINE = arg('--engine') ?? 'http://127.0.0.1:50021';
const FFMPEG = arg('--ffmpeg') ?? 'ffmpeg';
const OUT = arg('--out');
if (!OUT) throw new Error('--out <folder>: where the voices site is (its words/ folder is filled)');
const ONLY = arg('--only');
const JOBS = Math.max(1, Number(arg('--jobs') ?? 2));
const ORDER = (arg('--levels') ?? 'N5,N4,KANA,KATA,ONO,N3,N2,N1').split(',');

interface Vocab { kanji: string; reading: string; level: string }
const VOCAB: Vocab[] = JSON.parse(readFileSync(join(import.meta.dirname, '..', 'data', 'vocab.json'), 'utf8'));
// what is said, once each, in the order of the levels
const said: string[] = [];
const seen = new Set<string>();
for (const lv of ORDER) for (const w of VOCAB) if (w.level === lv) { const s = spokenWord(w.kanji, w.reading); if (s && !seen.has(s)) { seen.add(s); said.push(s); } }
// two words with one file name would say each other: report it (the game then uses the device's voice for both)
const byHash = new Map<string, string>();
const clash = new Set<string>();
for (const s of said) { const k = lineHash(s); if (byHash.has(k) && byHash.get(k) !== s) clash.add(k); byHash.set(k, s); }
if (clash.size) console.warn(`${clash.size} file names shared by two words - left out:`, [...clash].map((k) => byHash.get(k)).join(' '));

async function synth(text: string, v: BotVoice): Promise<Buffer> {
  const q = await fetch(`${ENGINE}/audio_query?speaker=${v.style}&text=${encodeURIComponent(text)}`, { method: 'POST' });
  if (!q.ok) throw new Error(`audio_query ${q.status}`);
  const query = await q.json() as Record<string, unknown>;
  // a word cast as a spell: the voice's own pitch and intonation, a touch quicker than its sentences, short silences
  query.speedScale = Math.min(1.15, v.speed * 1.04); query.pitchScale = v.pitch; query.intonationScale = v.intonation ?? 1.15;
  query.prePhonemeLength = 0.03; query.postPhonemeLength = 0.08;
  const r = await fetch(`${ENGINE}/synthesis?speaker=${v.style}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(query) });
  if (!r.ok) throw new Error(`synthesis ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

let made = 0, failed = 0;
const started = Date.now();
for (const who of CHARACTERS) {
  if (ONLY && ONLY !== who) continue;
  const voice = BOT_VOICE[who];
  const dir = join(OUT, 'words', who);
  mkdirSync(dir, { recursive: true });
  const todo = said.filter((s) => !clash.has(lineHash(s)) && !existsSync(join(dir, `${lineHash(s)}.mp3`)));
  console.log(`${who}: ${todo.length} to make (${said.length} words)`);
  let i = 0;
  await Promise.all(Array.from({ length: JOBS }, async (_, job) => {
    while (i < todo.length) {
      const s = todo[i++];
      const wav = join(tmpdir(), `kw-word-${process.pid}-${job}.wav`);
      try {
        writeFileSync(wav, await synth(s, voice));
        const af = [...(voice.fx ? [voice.fx] : []), 'loudnorm=I=-16:TP=-1.5'].join(',');
        await run(FFMPEG, ['-v', 'error', '-y', '-i', wav, '-af', af, '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', '32k', join(dir, `${lineHash(s)}.mp3`)]);
        made++;
        if (made % 200 === 0) console.log(`${made} made · ${((Date.now() - started) / 60000).toFixed(0)} min · ${who} ${s}`);
      } catch (e) { failed++; console.warn(who, s, (e as Error).message); }
      rmSync(wav, { force: true });
    }
  }));
}
console.log(`${made} made, ${failed} failed`);
