// 0.9.9.9.9.6 (round 6): the chess wizards' recorded lines — made with VOICEVOX (free; each voice credited in
// CREDITS.md, as its terms ask). Needs the VOICEVOX engine running on this computer (http://127.0.0.1:50021) and
// ffmpeg. Makes public/voices/<bot>/<hash>.mp3 for every line of src/shared/chesslines.ts that has none yet
// (--all: every line again); recordings of lines that are gone are removed.
//   npx tsx scripts/voices.mts [--all] [--engine http://127.0.0.1:50021] [--ffmpeg path/to/ffmpeg]
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { BOT_VOICE, LINES, lineHash, spokenOf } from '../src/shared/chesslines';
import type { BotId } from '../src/shared/chess';

const arg = (k: string) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : undefined; };
const ENGINE = arg('--engine') ?? 'http://127.0.0.1:50021';
const FFMPEG = arg('--ffmpeg') ?? 'ffmpeg';
const ALL = process.argv.includes('--all');
const OUT = join(import.meta.dirname, '..', 'public', 'voices');

async function synth(text: string, v: (typeof BOT_VOICE)[BotId]): Promise<Buffer> {
  const q = await fetch(`${ENGINE}/audio_query?speaker=${v.style}&text=${encodeURIComponent(text)}`, { method: 'POST' });
  if (!q.ok) throw new Error(`audio_query ${q.status}`);
  const query = await q.json() as Record<string, number>;
  query.speedScale = v.speed; query.pitchScale = v.pitch; query.prePhonemeLength = 0.05; query.postPhonemeLength = 0.12;
  const r = await fetch(`${ENGINE}/synthesis?speaker=${v.style}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(query) });
  if (!r.ok) throw new Error(`synthesis ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

let made = 0, removed = 0;
for (const bot of Object.keys(LINES) as BotId[]) {
  const v = BOT_VOICE[bot];
  const dir = join(OUT, bot);
  mkdirSync(dir, { recursive: true });
  const want = new Set<string>();
  for (const lines of Object.values(LINES[bot])) for (const line of lines ?? []) {
    const file = `${lineHash(line.jp)}.mp3`;
    want.add(file);
    if (!ALL && existsSync(join(dir, file))) continue;
    const wav = join(tmpdir(), `kw-voice-${process.pid}.wav`);
    writeFileSync(wav, await synth(spokenOf(line.jp), v));
    // mono mp3, loudness evened out; the Dragon with a cave's echo
    const af = [...(v.echo ? ['aecho=0.8:0.7:60|140:0.35|0.2'] : []), 'loudnorm=I=-16:TP=-1.5'].join(',');
    execFileSync(FFMPEG, ['-v', 'error', '-y', '-i', wav, '-af', af, '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', '48k', join(dir, file)]);
    rmSync(wav, { force: true });
    made++;
    console.log(bot, file, spokenOf(line.jp));
  }
  for (const f of readdirSync(dir)) if (!want.has(f)) { rmSync(join(dir, f)); removed++; }
}
console.log(`${made} made, ${removed} removed`);
