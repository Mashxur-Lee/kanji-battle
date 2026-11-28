// 0.9.9.9.9.6 (round 6): the chess wizards' recorded lines — made with VOICEVOX (free; each voice credited in
// CREDITS.md, as its terms ask). Needs the VOICEVOX engine running on this computer (http://127.0.0.1:50021) and
// ffmpeg. Makes public/voices/<bot>/<hash>.mp3 for every line of src/shared/chesslines.ts that has none yet
// (--all: every line again); recordings of lines that are gone are removed.
//   npx tsx scripts/voices.mts [--all] [--engine http://127.0.0.1:50021] [--ffmpeg path/to/ffmpeg]
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { BOT_VOICE, EXAMPLE_VOICE, FUMI_LINES, FUMI_VOICE, fumiLessonLine, LINES, lineHash, spokenOf, type BotVoice, type Moment } from '../src/shared/chesslines';
import { GRAMMAR, filledQuestion } from '../src/shared/grammar';
import type { BotId } from '../src/shared/chess';

const arg = (k: string) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : undefined; };
const ENGINE = arg('--engine') ?? 'http://127.0.0.1:50021';
const FFMPEG = arg('--ffmpeg') ?? 'ffmpeg';
const ALL = process.argv.includes('--all');
const OUT = join(import.meta.dirname, '..', 'public', 'voices');

type Mood = Moment | 'right' | 'wrong' | 'passed' | 'failed' | 'say';
/**
 * 0.9.9.9.9.7 (round 3): how a moment is said — intonation (× the voice's own), speed (×) and pitch (+). Gloating and
 * tense moments livelier, a loss slower and lower, a calm remark close to the voice's own
 */
const MOOD: Record<Mood, { intonation: number; speed: number; pitch: number }> = {
  say: { intonation: 1, speed: 1, pitch: 0 },
  hello: { intonation: 1, speed: 1, pitch: 0.01 },
  best: { intonation: 1.12, speed: 1.02, pitch: 0.02 }, good: { intonation: 1.05, speed: 1.01, pitch: 0.01 },
  inaccuracy: { intonation: 1.04, speed: 0.99, pitch: 0 }, mistake: { intonation: 1.1, speed: 1.03, pitch: 0.01 },
  blunder: { intonation: 1.18, speed: 1.05, pitch: 0.02 }, check: { intonation: 1.15, speed: 1.06, pitch: 0.02 },
  take: { intonation: 1.12, speed: 1.05, pitch: 0.02 }, castle: { intonation: 1, speed: 1, pitch: 0 },
  promote: { intonation: 1.15, speed: 1.04, pitch: 0.03 }, botWins: { intonation: 1.2, speed: 1.02, pitch: 0.02 },
  botLoses: { intonation: 0.9, speed: 0.94, pitch: -0.02 }, draw: { intonation: 0.95, speed: 0.97, pitch: -0.01 },
  right: { intonation: 1.2, speed: 1.03, pitch: 0.02 }, passed: { intonation: 1.2, speed: 1.02, pitch: 0.02 },
  wrong: { intonation: 0.95, speed: 0.95, pitch: -0.01 }, failed: { intonation: 1, speed: 0.96, pitch: -0.01 },
};

async function synth(text: string, v: BotVoice, mood: Mood = 'say'): Promise<Buffer> {
  const style = v.moods?.[mood as keyof NonNullable<BotVoice['moods']>] ?? v.style;
  const m = MOOD[mood];
  const q = await fetch(`${ENGINE}/audio_query?speaker=${style}&text=${encodeURIComponent(text)}`, { method: 'POST' });
  if (!q.ok) throw new Error(`audio_query ${q.status}`);
  const query = await q.json() as Record<string, unknown>;
  query.speedScale = v.speed * m.speed; query.pitchScale = v.pitch + m.pitch; query.prePhonemeLength = 0.05; query.postPhonemeLength = 0.12;
  // (round 3: less robotic — VOICEVOX's intonation is flat at 1; the pauses between phrases a touch shorter, like speech)
  query.intonationScale = Math.round((v.intonation ?? 1) * m.intonation * 100) / 100;
  if ('pauseLengthScale' in query) query.pauseLengthScale = 0.85;
  const r = await fetch(`${ENGINE}/synthesis?speaker=${style}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(query) });
  if (!r.ok) throw new Error(`synthesis ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

let made = 0, removed = 0;
/** one folder of recordings: every line in it made (the ones missing, or all with --all), the ones no longer used removed */
async function folder(name: string, voice: BotVoice, lines: Array<string | [string, Mood]>, bitrate = '48k') {
  const dir = join(OUT, name);
  mkdirSync(dir, { recursive: true });
  const want = new Set<string>();
  for (const item of lines) {
    const [jp, mood] = typeof item === 'string' ? [item, 'say' as Mood] : item;
    const file = `${lineHash(jp)}.mp3`;
    if (want.has(file)) continue;
    want.add(file);
    if (!ALL && existsSync(join(dir, file))) continue;
    const wav = join(tmpdir(), `kw-voice-${process.pid}.wav`);
    writeFileSync(wav, await synth(spokenOf(jp), voice, mood));
    // mono mp3, loudness evened out; a voice's own effect first (the Knight's helmet, the Dragon's cave)
    const af = [...(voice.fx ? [voice.fx] : []), 'loudnorm=I=-16:TP=-1.5'].join(',');
    execFileSync(FFMPEG, ['-v', 'error', '-y', '-i', wav, '-af', af, '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', bitrate, join(dir, file)]);
    rmSync(wav, { force: true });
    made++;
    console.log(name, file, spokenOf(jp));
  }
  for (const f of readdirSync(dir)) if (!want.has(f)) { rmSync(join(dir, f)); removed++; }
}
const ONLY = arg('--only'); // (round 3: one folder at a time — e.g. --only fumi)
for (const bot of Object.keys(LINES) as BotId[]) if (!ONLY || ONLY === bot) await folder(bot, BOT_VOICE[bot], (Object.entries(LINES[bot]) as Array<[Moment, Array<{ jp: string }> | undefined]>).flatMap(([moment, l]) => (l ?? []).map((x): [string, Mood] => [x.jp, moment])));
// (round 2) and each lesson named aloud as it opens — first time, and again
if (!ONLY || ONLY === 'fumi') await folder('fumi', FUMI_VOICE, [...(Object.entries(FUMI_LINES) as Array<[string, string]>).map(([k, jp]): [string, Mood] => [jp, (k in MOOD ? k : 'say') as Mood]), ...GRAMMAR.flatMap((g) => [fumiLessonLine(g.pattern, false), fumiLessonLine(g.pattern, true)])]);
if (!ONLY || ONLY === 'grammar') await folder('grammar', EXAMPLE_VOICE, GRAMMAR.flatMap((g) => [...g.examples.map((e) => e.jp), ...g.questions.map((q) => filledQuestion(q))]), '32k');
console.log(`${made} made, ${removed} removed`);
