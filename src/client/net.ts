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
    const wake = () => { if (!this.stopped && !(this.parked && document.visibilityState === 'hidden') && (!this.ws || this.ws.readyState > WebSocket.OPEN)) this.connect(true); };
    // 0.9.9.9.2: in the background the game does no work at all — a "snapshot" instead: going to the background it
    // says you're away (friends see it in orange) and closes the connection; the server keeps everything (your seat,
    // a paused game, the battle) as it was. Coming back, a fresh connection picks it up from that point (the server
    // sends the whole state again). (0.9.9.9 kept the connection alive in the background — a phone freezes it there
    // anyway, and it came back "open" but dead.)
    let hiddenAt = 0;
    let parkTimer = 0;
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        hiddenAt = Date.now();
        if (this.stopped) return;
        if (this.open) this.ws!.send(JSON.stringify({ type: 'away', on: true } satisfies ClientMessage));
        // in a browser, a quick look at another app (copying the room code) keeps the connection; longer, it is closed.
        // The Android app freezes the page's timers in the background, so it closes straight away there.
        clearTimeout(parkTimer);
        if (/KanjiWizardsAndroid/.test(navigator.userAgent)) this.park();
        else parkTimer = window.setTimeout(() => { if (document.visibilityState === 'hidden') this.park(); }, 4000);
        return;
      }
      clearTimeout(parkTimer);
      const gone = hiddenAt ? Date.now() - hiddenAt : 0;
      hiddenAt = 0;
      if (this.stopped) return;
      if (this.parked || gone > 5000 || Date.now() - this.lastMsg > SILENT_MS) this.restart();
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
  /** closed on purpose while the app is in the background (no reconnecting until it's back) */
  private parked = false;
  private park() {
    if (this.stopped || this.parked) return;
    this.parked = true;
    clearTimeout(this.timer);
    const ws = this.ws;
    this.ws = undefined;
    try { ws?.close(1000, 'background'); } catch { /* already gone */ }
  }

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
    const quiet = this.parked; // back from the background: just connecting, not "Reconnecting…"
    this.parked = false;
    if (msg) this.queue.push(JSON.stringify(msg));
    const ws = this.ws;
    this.ws = undefined;
    try { ws?.close(); } catch { /* already gone */ }
    this.connect(!quiet);
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
