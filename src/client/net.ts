import type { ClientMessage, ServerMessage } from '../shared/protocol';

export type NetState = 'connecting' | 'online' | 'reconnecting' | 'stopped';
/** no message for this long while visible = the socket is dead (the server pings every few seconds) */
const SILENT_MS = 25_000;

/**
 * WebSocket that survives phones: mobile browsers kill sockets when you switch apps (e.g. to send
 * the room code). We reconnect automatically — immediately when the page becomes visible again —
 * and re-authenticate with `hello`; the server then hands back our seat in the room.
 */
export class GameSocket {
  private ws?: WebSocket;
  private queue: string[] = [];
  private retry = 0;
  private timer?: number;
  private stopped = true;
  private token = '';

  constructor(
    private readonly onMessage: (m: ServerMessage) => void,
    private readonly onState: (s: NetState) => void,
  ) {
    const wake = () => { if (!this.stopped && (!this.ws || this.ws.readyState > WebSocket.OPEN)) this.connect(true); };
    // 0.9.9.9: back from the background. A phone freezes the page there, and the socket often comes back looking
    // "open" but dead — the server dropped it long ago — so nothing was sent or received ("Reconnecting…", Resume
    // did nothing, only restarting the app helped). After more than a few seconds away it's replaced with a fresh
    // one straight away; the server hands your seat (and the paused game) back. While hidden, friends see you as away.
    let hiddenAt = 0;
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        hiddenAt = Date.now();
        if (this.open) this.ws!.send(JSON.stringify({ type: 'away', on: true } satisfies ClientMessage));
        return;
      }
      const gone = hiddenAt ? Date.now() - hiddenAt : 0;
      hiddenAt = 0;
      if (this.stopped) return;
      if (gone > 5000 || Date.now() - this.lastMsg > SILENT_MS) this.restart();
      else if (this.open) this.ws!.send(JSON.stringify({ type: 'away', on: false } satisfies ClientMessage));
      else wake();
    });
    addEventListener('online', wake);
    addEventListener('pageshow', (e) => { if ((e as PageTransitionEvent).persisted && !this.stopped) this.restart(); else wake(); });
    // and while the page is showing: a socket that has been silent far longer than the server's pings is dead too
    setInterval(() => {
      if (!this.stopped && document.visibilityState === 'visible' && this.open && Date.now() - this.lastMsg > SILENT_MS) this.restart();
    }, 5000);
  }
  private lastMsg = Date.now();

  start(token: string) {
    this.token = token;
    this.stopped = false;
    this.connect(false);
  }

  /** Log out / kicked / banned: close and don't come back. */
  stop() {
    this.stopped = true;
    clearTimeout(this.timer);
    this.queue = [];
    const ws = this.ws;
    this.ws = undefined;
    ws?.close();
    this.onState('stopped');
  }

  /**
   * 0.9.9.6: the connection looks open but nothing comes back (a phone that changed networks keeps a dead
   * socket that still says "open"): drop it, connect again and send `msg` on the new one.
   */
  restart(msg?: ClientMessage) {
    if (this.stopped) return;
    if (msg) this.queue.push(JSON.stringify(msg));
    const ws = this.ws;
    this.ws = undefined;
    try { ws?.close(); } catch { /* already gone */ }
    this.connect(true);
  }
  get open() { return this.ws?.readyState === WebSocket.OPEN; }

  send(msg: ClientMessage) {
    const data = JSON.stringify(msg);
    if (this.ws?.readyState === WebSocket.OPEN) this.ws.send(data);
    else this.queue.push(data); // delivered right after reconnecting
  }

  private connect(isRetry: boolean) {
    clearTimeout(this.timer);
    if (this.ws && this.ws.readyState <= WebSocket.OPEN) return;
    this.onState(isRetry ? 'reconnecting' : 'connecting');
    const proto = location.protocol === 'https:' ? 'wss' : 'ws';
    const ws = new WebSocket(`${proto}://${location.host}`);
    this.ws = ws;
    ws.onopen = () => {
      this.retry = 0;
      this.lastMsg = Date.now();
      ws.send(JSON.stringify({ type: 'hello', token: this.token } satisfies ClientMessage));
      for (const d of this.queue.splice(0)) ws.send(d);
      this.onState('online');
    };
    ws.onmessage = (e) => { this.lastMsg = Date.now(); this.onMessage(JSON.parse(e.data)); };
    ws.onclose = () => {
      if (this.ws !== ws || this.stopped) return;
      this.onState('reconnecting');
      const delay = Math.min(8000, 500 * 2 ** this.retry++);
      this.timer = window.setTimeout(() => this.connect(true), document.visibilityState === 'visible' ? delay : 15_000);
    };
  }
}
