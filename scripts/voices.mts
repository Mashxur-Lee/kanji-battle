// 0.9.9.9.9.6 (round 6): the chess wizards' recorded lines — made with VOICEVOX (free; each voice credited in
// CREDITS.md, as its terms ask). Needs the VOICEVOX engine running on this computer (http://127.0.0.1:50021) and
// ffmpeg. Makes public/voices/<bot>/<hash>.mp3 for every line of src/shared/chesslines.ts that has none yet
// (--all: every line again); recordings of lines that are gone are removed.
//   npx tsx scripts/voices.mts [--all] [--engine http://127.0.0.1:50021] [--ffmpeg path/to/ffmpeg]
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { BOT_VOICE, EXAMPLE_VOICE, FUMI_LINES, FUMI_VOICE, LINES, lineHash, spokenOf, type BotVoice } from '../src/shared/chesslines';
import { GRAMMAR, filledQuestion } from '../src/shared/grammar';
import type { BotId } from '../src/shared/chess';

const arg = (k: string) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : undefined; };
const ENGINE = arg('--engine') ?? 'http://127.0.0.1:50021';
const FFMPEG = arg('--ffmpeg') ?? 'ffmpeg';
const ALL = process.argv.includes('--all');
const OUT = join(import.meta.dirname, '..', 'public', 'voices');

async function synth(text: string, v: BotVoice): Promise<Buffer> {
  const q = await fetch(`${ENGINE}/audio_query?speaker=${v.style}&text=${encodeURIComponent(text)}`, { method: 'POST' });
  if (!q.ok) throw new Error(`audio_query ${q.status}`);
  const query = await q.json() as Record<string, number>;
  query.speedScale = v.speed; query.pitchScale = v.pitch; query.prePhonemeLength = 0.05; query.postPhonemeLength = 0.12;
  const r = await fetch(`${ENGINE}/synthesis?speaker=${v.style}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(query) });
  if (!r.ok) throw new Error(`synthesis ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

let made = 0, removed = 0;
/** one folder of recordings: every line in it made (the ones missing, or all with --all), the ones no longer used removed */
async function folder(name: string, voice: BotVoice, lines: string[], bitrate = '48k') {
  const dir = join(OUT, name);
  mkdirSync(dir, { recursive: true });
  const want = new Set<string>();
  for (const jp of lines) {
    const file = `${lineHash(jp)}.mp3`;
    if (want.has(file)) continue;
    want.add(file);
    if (!ALL && existsSync(join(dir, file))) continue;
    const wav = join(tmpdir(), `kw-voice-${process.pid}.wav`);
    writeFileSync(wav, await synth(spokenOf(jp), voice));
    // mono mp3, loudness evened out; a voice's own effect first (the Knight's helmet, the Dragon's cave)
    const af = [...(voice.fx ? [voice.fx] : []), 'loudnorm=I=-16:TP=-1.5'].join(',');
    execFileSync(FFMPEG, ['-v', 'error', '-y', '-i', wav, '-af', af, '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', bitrate, join(dir, file)]);
    rmSync(wav, { force: true });
    made++;
    console.log(name, file, spokenOf(jp));
  }
  for (const f of readdirSync(dir)) if (!want.has(f)) { rmSync(join(dir, f)); removed++; }
}
for (const bot of Object.keys(LINES) as BotId[]) await folder(bot, BOT_VOICE[bot], Object.values(LINES[bot]).flatMap((l) => (l ?? []).map((x) => x.jp)));
await folder('fumi', FUMI_VOICE, Object.values(FUMI_LINES));
await folder('grammar', EXAMPLE_VOICE, GRAMMAR.flatMap((g) => [...g.examples.map((e) => e.jp), ...g.questions.map((q) => filledQuestion(q))]), '32k');
console.log(`${made} made, ${removed} removed`);
