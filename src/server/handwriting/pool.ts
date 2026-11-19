// 0.9.9.9.7.2: the handwriting judge on its own thread (worker.ts). The game asks and gets the answer a moment later;
// the server keeps running meanwhile. If the thread fails (or doesn't answer in time) the drawing is judged here,
// the old way — a player never loses a right answer to it. Too many drawings waiting at once (a flood): the newest
// counts as not recognised.
import path from 'node:path';
import { Worker } from 'node:worker_threads';
import type { DrawnChar, VocabEntry } from '../../shared/protocol';
import type { JudgeResult, WritingJudge } from '../Game';

export interface JudgePool {
  /** writing duels */
  normal: WritingJudge;
  /** Deck Duel (extra forgiving) */
  lenient: WritingJudge;
  /** drawings waiting for the thread */
  readonly waiting: number;
  /** start the thread now (it loads the characters: half a second), not on the first drawing */
  warm(): void;
  close(): Promise<void>;
}
export interface JudgePoolOptions {
  /** the same judges, on this thread — used if the worker fails */
  fallback: { normal: WritingJudge; lenient: WritingJudge };
  file?: string;
  timeoutMs?: number;
  maxWaiting?: number;
  onError?: (e: unknown) => void;
}

export function createJudgePool(opts: JudgePoolOptions): JudgePool {
  const file = opts.file ?? path.join(__dirname, `worker${path.extname(__filename)}`);
  const waiting = new Map<number, { ok: (r: JudgeResult) => void; fail: (e: Error) => void; timer: ReturnType<typeof setTimeout> }>();
  let worker: Worker | null = null;
  let next = 1;
  const settle = (w: Worker) => { if (waiting.size) w.ref(); else w.unref(); }; // (an idle thread doesn't keep the process up)
  const start = () => {
    const w = new Worker(file);
    const down = (e: Error) => {
      if (worker === w) worker = null;
      for (const p of waiting.values()) { clearTimeout(p.timer); p.fail(e); }
      waiting.clear();
      opts.onError?.(e);
    };
    w.on('message', (m: { id: number; result?: JudgeResult; error?: string }) => {
      const p = waiting.get(m.id);
      if (!p) return;
      waiting.delete(m.id);
      clearTimeout(p.timer);
      if (m.result) p.ok(m.result); else p.fail(new Error(m.error ?? 'the handwriting judge failed'));
      settle(w);
    });
    w.on('error', down);
    w.on('exit', (code) => { if (worker === w) { worker = null; if (code !== 0) down(new Error(`the handwriting judge stopped (${code})`)); } });
    return w;
  };
  const ask = (lenient: boolean): WritingJudge => (entry: VocabEntry, chars: DrawnChar[]) => {
    if (waiting.size >= (opts.maxWaiting ?? 32)) return { correct: false, recognized: '?' };
    const local = () => (lenient ? opts.fallback.lenient : opts.fallback.normal)(entry, chars);
    return new Promise<JudgeResult>((ok, fail) => {
      let w: Worker;
      try { w = worker ??= start(); } catch (e) { fail(e as Error); return; }
      const id = next++;
      const timer = setTimeout(() => { if (waiting.delete(id)) { settle(w); fail(new Error('the handwriting judge took too long')); } }, opts.timeoutMs ?? 15_000);
      waiting.set(id, { ok, fail, timer });
      settle(w);
      w.postMessage({ id, lenient, entry, chars });
    }).catch((e) => { opts.onError?.(e); return local(); });
  };
  return {
    normal: ask(false),
    lenient: ask(true),
    get waiting() { return waiting.size; },
    warm: () => { try { worker ??= start(); settle(worker); } catch (e) { opts.onError?.(e); } },
    close: async () => { const w = worker; worker = null; await w?.terminate(); },
  };
}
