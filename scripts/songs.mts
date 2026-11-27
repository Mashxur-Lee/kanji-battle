// 0.9.9.9.9.7 (round 2): the songs of Song lyrics (src/shared/songs.ts), performed by the game itself — no recording of
// anyone else's is used. Each line is sung by VOICEVOX (its singing mode: the notes and syllables in, a voice out) and
// placed at its time; under it, a soft music box plays the melody an octave up and a bass plays each bar's first note,
// both synthesised here. The VOICEVOX engine must be running (http://127.0.0.1:50021), and ffmpeg.
//   npx tsx scripts/songs.mts [--ffmpeg path] [--only id]
import { execFileSync } from 'node:child_process';
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { SONGS, songLength, songTimeline, type Song } from '../src/shared/songs';
import { toRomaji } from '../src/shared/kana';

const arg = (k: string) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : undefined; };
const ENGINE = arg('--engine') ?? 'http://127.0.0.1:50021';
const FFMPEG = arg('--ffmpeg') ?? 'ffmpeg';
const ONLY = arg('--only');
const OUT = join(import.meta.dirname, '..', 'public', 'songs');
/** the singer: VOICEVOX 冥鳴ひまり (credited in CREDITS.md and About); the score is read by the singing teacher (6000) */
export const SINGER = { name: '冥鳴ひまり', style: 3014, teacher: 6000 };
const RATE = 24000, FPS = 24000 / 256;

const VOWEL: Record<string, string> = { a: 'あ', i: 'い', u: 'う', e: 'え', o: 'お' };
/** the vowel a syllable ends on (held by ー and by a slur's later notes) */
const vowelOf = (kana: string) => { const r = toRomaji(kana); return r.endsWith('n') && kana.endsWith('ん') ? 'ん' : VOWEL[r.slice(-1)] ?? 'あ'; };

/** one line as VOICEVOX notes: a syllable a note; ー and slurs hold the vowel; こん / ぼう split over their note */
function score(line: ReturnType<typeof songTimeline>[number]) {
  const notes: Array<{ key: number | null; frame_length: number; lyric: string }> = [{ key: null, frame_length: Math.round(0.15 * FPS), lyric: '' }];
  let last = 'あ';
  for (const n of line.notes) {
    const frames = Math.max(2, Math.round(n.dur * FPS));
    if (n.midi === null) { notes.push({ key: null, frame_length: frames, lyric: '' }); continue; }
    let syl = n.syllable ?? 'ー';
    if (syl === 'ー') syl = vowelOf(last);
    syl = syl.replace(/っ$/, ''); // (ふっ: the small つ is the pause before the next note)
    const morae = syl.match(/[ぁ-ゔ][ゃゅょぁぃぅぇぉ]?/g) ?? [syl];
    if (morae.length > 1) {
      const a = Math.round(frames / 2);
      notes.push({ key: n.midi, frame_length: a, lyric: morae[0] }, { key: n.midi, frame_length: frames - a, lyric: morae[1] });
    } else notes.push({ key: n.midi, frame_length: frames, lyric: syl });
    last = morae[morae.length - 1];
  }
  notes.push({ key: null, frame_length: Math.round(0.25 * FPS), lyric: '' });
  return { notes };
}

async function sing(sc: ReturnType<typeof score>): Promise<Float32Array> {
  const q = await fetch(`${ENGINE}/sing_frame_audio_query?speaker=${SINGER.teacher}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(sc) });
  if (!q.ok) throw new Error(`sing_frame_audio_query ${q.status} ${await q.text()}`);
  const query = await q.json();
  const r = await fetch(`${ENGINE}/frame_synthesis?speaker=${SINGER.style}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(query) });
  if (!r.ok) throw new Error(`frame_synthesis ${r.status}`);
  return pcm(Buffer.from(await r.arrayBuffer()));
}
/** a WAV's samples (16-bit mono), as floats */
function pcm(wav: Buffer): Float32Array {
  let off = 12;
  while (off < wav.length - 8) {
    const id = wav.toString('ascii', off, off + 4), size = wav.readUInt32LE(off + 4);
    if (id === 'data') { const n = size / 2; const out = new Float32Array(n); for (let i = 0; i < n; i++) out[i] = wav.readInt16LE(off + 8 + i * 2) / 32768; return out; }
    off += 8 + size;
  }
  throw new Error('no data in the wav');
}
function wavOf(samples: Float32Array): Buffer {
  const b = Buffer.alloc(44 + samples.length * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + samples.length * 2, 4); b.write('WAVE', 8); b.write('fmt ', 12);
  b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(RATE, 24); b.writeUInt32LE(RATE * 2, 28); b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34);
  b.write('data', 36); b.writeUInt32LE(samples.length * 2, 40);
  for (let i = 0; i < samples.length; i++) b.writeInt16LE(Math.max(-32767, Math.min(32767, Math.round(samples[i] * 32767))), 44 + i * 2);
  return b;
}
const hz = (midi: number) => 440 * 2 ** ((midi - 69) / 12);
/** a soft plucked tone (a music box / a bass): a sine and its octave, dying away */
function pluck(buf: Float32Array, at: number, midi: number, dur: number, gain: number, decay: number) {
  const f = hz(midi), start = Math.round(at * RATE), len = Math.round(Math.min(dur + 0.6, 4) * RATE);
  for (let i = 0; i < len && start + i < buf.length; i++) {
    const t = i / RATE;
    const env = Math.min(1, t / 0.004) * Math.exp(-t / decay);
    buf[start + i] += gain * env * (Math.sin(2 * Math.PI * f * t) + 0.3 * Math.sin(4 * Math.PI * f * t) + 0.08 * Math.sin(6 * Math.PI * f * t));
  }
}

async function make(song: Song) {
  const lines = songTimeline(song);
  const total = new Float32Array(Math.ceil(songLength(song) * RATE));
  const beatsPerSec = song.tempo / 60;
  // the accompaniment: the melody an octave up on a music box; a bass on each bar's first note, two octaves down
  let beat = 0;
  for (const l of lines) for (const n of l.notes) {
    if (n.midi !== null) pluck(total, n.at, n.midi + 12, n.dur, 0.05, 0.45);
    const barStart = Math.abs(beat % song.beats) < 1e-6;
    if (n.midi !== null && barStart) pluck(total, n.at, n.midi - 24, (song.beats / beatsPerSec), 0.09, 0.9);
    beat += n.dur * beatsPerSec;
  }
  // the voice, line by line, each at its time (its score starts 0.15 s before the line's first note)
  for (const l of lines) {
    const v = await sing(score(l));
    const at = Math.round((l.start - 0.15) * RATE);
    for (let i = 0; i < v.length && at + i < total.length; i++) if (at + i >= 0) total[at + i] += v[i] * 0.9;
    console.log(song.id, l.start.toFixed(2), l.romaji);
  }
  const wav = join(tmpdir(), `kw-song-${song.id}.wav`);
  writeFileSync(wav, wavOf(total));
  mkdirSync(OUT, { recursive: true });
  execFileSync(FFMPEG, ['-v', 'error', '-y', '-i', wav, '-af', 'loudnorm=I=-16:TP=-1.5,aecho=0.8:0.5:40:0.15', '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', '64k', join(OUT, `${song.id}.mp3`)]);
  rmSync(wav, { force: true });
}

for (const s of SONGS) if (!ONLY || s.id === ONLY) await make(s);
console.log('done');
