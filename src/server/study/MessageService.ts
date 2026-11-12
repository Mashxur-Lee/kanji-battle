// 0.9.9.9.6: the messenger. Players write to their friends, and to the team ("support"): Feedback lands there
// too, so an admin can answer it. Admins read and answer the team's conversations; each answer remembers which
// admin wrote it. New messages reach the other side at once (the game's connection) or as a push.
import type { DirectMessage, Store, UserRecord } from '../db/Store';
import { SUPPORT_ID } from '../db/Store';
import type { DmView } from '../../shared/protocol';
import { picUrl } from './StudyService';

export const MESSAGE_MAX = 1000;
const PER_MINUTE = 20;

export class MessageError extends Error {
  constructor(message: string, readonly status = 400) { super(message); }
}

/** what the app shows of a message */
export type MessageView = DmView;
export interface ConversationView { id: string; name: string; pic: string | null; online: boolean; support: boolean; last: MessageView; unread: number; friend: boolean }

export interface MessageHooks {
  /** the message, live, to whoever is connected: the recipient (or every admin, for the team) and the sender's other side */
  deliver(toUserIds: string[] | 'admins', msg: MessageView, fromName: string): void;
  /** the recipient isn't connected: a push to their phone */
  push?(toUserId: string, fromId: string, fromName: string, text: string): void;
  online?(userId: string): boolean;
}

const view = (m: DirectMessage): MessageView => ({ id: m.id, from: m.fromId, to: m.toId, text: m.text, at: m.at, read: m.readAt !== null, ...(m.kind ? { kind: m.kind } : {}), ...(m.by ? { by: m.by } : {}) });

export class MessageService {
  private sent = new Map<string, number[]>();
  constructor(private readonly store: Store, private readonly hooks: MessageHooks, private readonly now: () => number = Date.now) {}

  /** whose side of the conversations: the team's (an admin asked for it) or their own */
  private side(u: UserRecord, asSupport: boolean) {
    if (asSupport && u.role !== 'admin') throw new MessageError('Only the team can do that', 403);
    return asSupport ? SUPPORT_ID : u.id;
  }

  async list(u: UserRecord, asSupport = false): Promise<{ conversations: ConversationView[]; unread: number }> {
    const me = this.side(u, asSupport);
    const rows = await this.store.conversations(me, 60);
    const friends = asSupport ? new Set<string>() : new Set((await this.store.friends(u.id)).filter((f) => f.status === 'accepted').map((f) => f.id));
    const out: ConversationView[] = [];
    for (const r of rows) {
      if (r.other === SUPPORT_ID) { out.push({ id: SUPPORT_ID, name: 'Kanji Wizards team', pic: null, online: true, support: true, last: view(r.last), unread: r.unread, friend: false }); continue; }
      const o = await this.store.findById(r.other);
      if (!o) continue;
      out.push({ id: o.id, name: o.nickname || o.username, pic: picUrl(o), online: this.hooks.online?.(o.id) ?? false, support: false, last: view(r.last), unread: r.unread, friend: friends.has(o.id) });
    }
    // a player always has the team in their list (to write to it), even before the first message
    if (!asSupport && !out.some((c) => c.support)) {
      out.push({ id: SUPPORT_ID, name: 'Kanji Wizards team', pic: null, online: true, support: true, unread: 0, friend: false,
        last: { id: '', from: SUPPORT_ID, to: u.id, text: 'Questions, bugs, ideas — write to us here.', at: 0, read: true } });
    }
    return { conversations: out, unread: out.reduce((n, c) => n + c.unread, 0) };
  }

  async unread(u: UserRecord): Promise<{ unread: number; support?: number }> {
    const mine = await this.store.unreadMessages(u.id);
    return u.role === 'admin' ? { unread: mine, support: await this.store.unreadMessages(SUPPORT_ID) } : { unread: mine };
  }

  /** a conversation, oldest first (the newest 60, or the 60 before `before`); what came in is read now */
  async thread(u: UserRecord, other: string, asSupport = false, before?: number): Promise<{ messages: MessageView[]; with: ConversationView | null }> {
    const me = this.side(u, asSupport);
    const msgs = await this.store.messagesBetween(me, other, 60, before);
    await this.store.markRead(me, other, this.now());
    return { messages: msgs.map(view), with: await this.who(u, other) };
  }

  private async who(u: UserRecord, other: string): Promise<ConversationView | null> {
    if (other === SUPPORT_ID) return { id: SUPPORT_ID, name: 'Kanji Wizards team', pic: null, online: true, support: true, unread: 0, friend: false, last: { id: '', from: '', to: '', text: '', at: 0, read: true } };
    const o = await this.store.findById(other);
    if (!o) return null;
    const friend = (await this.store.friends(u.id)).some((f) => f.id === other && f.status === 'accepted');
    return { id: o.id, name: o.nickname || o.username, pic: picUrl(o), online: this.hooks.online?.(o.id) ?? false, support: false, unread: 0, friend, last: { id: '', from: '', to: '', text: '', at: 0, read: true } };
  }

  /** who may write to whom: anyone to the team; the team to anyone; friends to each other; and an answer to someone who wrote to you */
  private async mayWrite(u: UserRecord, me: string, to: string) {
    if (to === SUPPORT_ID || me === SUPPORT_ID) return true;
    if (to === me) return false;
    if ((await this.store.friends(u.id)).some((f) => f.id === to && f.status === 'accepted')) return true;
    return (await this.store.messagesBetween(me, to, 1)).some((m) => m.fromId === to);
  }

  async send(u: UserRecord, to: unknown, text: unknown, asSupport = false, kind?: 'bug' | 'suggestion'): Promise<MessageView> {
    const me = this.side(u, asSupport);
    if (typeof to !== 'string' || !to || to.length > 64) throw new MessageError('Who to?');
    const t = typeof text === 'string' ? text.replace(/\r\n?/g, '\n').trim().slice(0, MESSAGE_MAX) : '';
    if (!t) throw new MessageError('Write something first');
    if (to !== SUPPORT_ID && !(await this.store.findById(to))) throw new MessageError('No such player', 404);
    if (!(await this.mayWrite(u, me, to))) throw new MessageError('You can write to your friends (and to the team)', 403);
    const now = this.now();
    const times = (this.sent.get(u.id) ?? []).filter((x) => now - x < 60_000);
    if (times.length >= PER_MINUTE) throw new MessageError('That\'s a lot of messages — wait a moment', 429);
    this.sent.set(u.id, [...times, now]);
    const m = await this.store.addMessage({ fromId: me, toId: to, text: t, at: now, kind: kind ?? null, by: asSupport ? u.id : null });
    const v = view(m);
    const fromName = asSupport ? 'Kanji Wizards team' : u.nickname || u.username;
    if (to === SUPPORT_ID) this.hooks.deliver('admins', v, fromName);
    else {
      this.hooks.deliver([to], v, fromName);
      if (!(this.hooks.online?.(to) ?? false)) this.hooks.push?.(to, me, fromName, t);
    }
    // the sender's own other screens (and, for the team, the other admins)
    if (asSupport) this.hooks.deliver('admins', v, fromName);
    return v;
  }

  /** Feedback (a bug report or a suggestion) also goes into the player's conversation with the team */
  async feedback(u: UserRecord, kind: 'bug' | 'suggestion', text: string) {
    const label = kind === 'bug' ? '🐞 Bug report' : '💡 Suggestion';
    const m = await this.store.addMessage({ fromId: u.id, toId: SUPPORT_ID, text: `${label}\n${text.slice(0, MESSAGE_MAX)}`, at: this.now(), kind, by: null });
    this.hooks.deliver('admins', view(m), u.nickname || u.username);
  }
}
