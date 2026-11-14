// 0.9.9.9.6: the messenger. Players write to their friends, and to the team ("support"): Feedback lands there
// too, so an admin can answer it. Admins read and answer the team's conversations; each answer remembers which
// admin wrote it. New messages reach the other side at once (the game's connection) or as a push.
//
// 0.9.9.9.6.4, like Telegram: messages can be edited ("edited"), deleted, forwarded and reacted to; photos; group
// chats with an owner, admins and what members may do (add people, change the name and picture, write); each
// conversation can notify for everything, only @mentions, or nothing; "typing…"; and a friend's status (online,
// playing, away, last seen).
import { randomBytes } from 'node:crypto';
import type { ChatGroup, DirectMessage, GroupMember, GroupPerms, GroupRole, Store, UserRecord } from '../db/Store';
import { DEFAULT_PERMS, SUPPORT_ID } from '../db/Store';
import type { DmView, PlayerStatus } from '../../shared/protocol';
import { picUrl } from './StudyService';

export const MESSAGE_MAX = 1000;
const PER_MINUTE = 20;
/** 0.9.9.9.6.4 */
export const GROUP_MAX = 50;
export const GROUP_NAME_MAX = 48;
export const EDIT_WINDOW_MS = 48 * 3600_000;
export const MEDIA_MAX_BYTES = 700 * 1024;
export const MEDIA_PER_DAY = 60;
const GROUP = /^g:([0-9a-f-]{36})$/i;
export const groupKey = (id: string) => `g:${id}`;

export class MessageError extends Error {
  constructor(message: string, readonly status = 400) { super(message); }
}

/** what the app shows of a message */
export type MessageView = DmView;
export type NotifyMode = 'all' | 'mentions' | 'none';
export interface GroupSummary { members: number; online: number; role: GroupRole }
export interface ConversationView { id: string; name: string; pic: string | null; online: boolean; support: boolean; last: MessageView; unread: number; friend: boolean;
  /** 0.9.9.9.6.1 */ muted?: boolean; /** 0.9.9.9.6.4 */ notify?: NotifyMode; group?: GroupSummary; status?: PlayerStatus }
export interface MemberView { id: string; name: string; login: string; pic: string | null; role: GroupRole; online: boolean; status?: PlayerStatus; friend: boolean }
export interface GroupInfo { id: string; name: string; pic: string | null; perms: GroupPerms; createdAt: number; role: GroupRole; members: MemberView[]; notify: NotifyMode }

/** whom to tell, and whether it's quiet for them (muted: it arrives, without a note) */
export interface Recipient { id: string; muted: boolean }
export interface MessageHooks {
  /** the message, live, to whoever is connected: the recipients (or every admin, for the team) and the sender's other side */
  deliver(to: Recipient[] | 'admins', msg: MessageView, fromName: string): void;
  /** the recipient isn't connected: a push to their phone */
  push?(toUserId: string, fromId: string, fromName: string, text: string): void;
  online?(userId: string): boolean;
  /** 0.9.9.9.6.1: `reader` has read what `writer` sent them (the writer's ✓ becomes ✓✓) — 'admins' when the team read it */
  read?(writer: string | string[], reader: string): void;
  /** 0.9.9.9.6.4 */
  update?(to: string[] | 'admins', msg: MessageView): void;
  typing?(to: string[], conv: string, from: string, name: string, on: boolean): void;
  group?(to: string[], group: string, event: 'changed' | 'removed'): void;
  status?(userId: string): Promise<PlayerStatus>;
}
/** 0.9.9.9.6.1: muted — all your messages ("mute:all"), or one conversation ("mute:<id>"): no notifications, no pushes */
export const MUTE_ALL = 'mute:all';
export const muteKey = (id: string) => `mute:${id}`;
/** 0.9.9.9.6.4: a conversation that only notifies for @mentions of you ("ment:<id>") */
export const mentionKey = (id: string) => `ment:${id}`;
export const isMuted = (unlocks: readonly string[] | undefined, from: string) => !!unlocks?.includes(MUTE_ALL) || !!unlocks?.includes(muteKey(from));
export const notifyMode = (unlocks: readonly string[] | undefined, conv: string): NotifyMode => (unlocks?.includes(muteKey(conv)) ? 'none' : unlocks?.includes(mentionKey(conv)) ? 'mentions' : 'all');
const MENTION = /(^|[^\w@.-])@([A-Za-z0-9_](?:[A-Za-z0-9_.-]{0,30}[A-Za-z0-9_])?)/g;
/** "@login" or "@nickname" of this player in the text */
export function mentions(text: string, u: Pick<UserRecord, 'username' | 'nickname'>): boolean {
  const names = [u.username, u.nickname ?? ''].map((n) => n.trim().toLowerCase()).filter((n) => n && !/\s/.test(n));
  return [...text.matchAll(MENTION)].some((m) => names.includes(m[2].toLowerCase()));
}
/** whether a new message is quiet (no note, no push) for this player */
export function quietFor(u: UserRecord | null, conv: string, text: string): boolean {
  if (!u) return false;
  if (u.unlocks?.includes(MUTE_ALL)) return true;
  const mode = notifyMode(u.unlocks, conv);
  return mode === 'none' || (mode === 'mentions' && !mentions(text, u));
}
const EMOJI = /^\p{Extended_Pictographic}(?:️|‍\p{Extended_Pictographic}|[\u{1F3FB}-\u{1F3FF}]|️⃣)*$/u;
export const isReaction = (e: unknown): e is string => typeof e === 'string' && e.length <= 16 && EMOJI.test(e);
export const mediaUrl = (id: string) => `/api/media/${id}`;
const nameOf = (u: UserRecord) => u.nickname || u.username;

const view = (m: DirectMessage, read = m.readAt !== null): MessageView => m.deleted
  ? { id: m.id, from: m.fromId, to: m.toId, text: '', at: m.at, read, deleted: true }
  : {
    id: m.id, from: m.fromId, to: m.toId, text: m.text, at: m.at, read,
    ...(m.kind ? { kind: m.kind } : {}), ...(m.by ? { by: m.by } : {}),
    ...(m.editedAt ? { edited: m.editedAt } : {}), ...(m.reactions && Object.keys(m.reactions).length ? { reactions: m.reactions } : {}),
    ...(m.media ? { media: mediaUrl(m.media) } : {}), ...(m.fwd ? { fwd: m.fwd } : {}),
  };
const blank = (from = '', to = ''): MessageView => ({ id: '', from, to, text: '', at: 0, read: true });

export class MessageService {
  private sent = new Map<string, number[]>();
  constructor(private readonly store: Store, private readonly hooks: MessageHooks, private readonly now: () => number = Date.now) {}

  /** whose side of the conversations: the team's (an admin asked for it) or their own */
  private side(u: UserRecord, asSupport: boolean) {
    if (asSupport && u.role !== 'admin') throw new MessageError('Only the team can do that', 403);
    return asSupport ? SUPPORT_ID : u.id;
  }
  private async friendIds(id: string) { return new Set((await this.store.friends(id)).filter((f) => f.status === 'accepted').map((f) => f.id)); }
  private online(id: string) { return this.hooks.online?.(id) ?? false; }
  private limit(u: UserRecord) {
    const now = this.now();
    const times = (this.sent.get(u.id) ?? []).filter((x) => now - x < 60_000);
    if (times.length >= PER_MINUTE) throw new MessageError('That\'s a lot of messages — wait a moment', 429);
    this.sent.set(u.id, [...times, now]);
  }

  async list(u: UserRecord, asSupport = false): Promise<{ conversations: ConversationView[]; unread: number; mutedAll?: boolean }> {
    const me = this.side(u, asSupport);
    // 0.9.9.9.6.2: the lookups run side by side (they used to go one after another), and a slow list is logged
    const t0 = this.now();
    const [rows, friends, groups] = await Promise.all([this.store.conversations(me, 60), asSupport ? Promise.resolve(new Set<string>()) : this.friendIds(u.id), asSupport ? Promise.resolve([]) : this.store.groupsOf(u.id)]);
    const people = await Promise.all(rows.map((r) => (r.other === SUPPORT_ID ? Promise.resolve(null) : this.store.findById(r.other))));
    const out: ConversationView[] = [];
    rows.forEach((r, i) => {
      if (r.other === SUPPORT_ID) { out.push({ id: SUPPORT_ID, name: 'Kanji Wizards team', pic: null, online: true, support: true, last: view(r.last), unread: r.unread, friend: false }); return; }
      const o = people[i];
      if (!o) return;
      out.push({ id: o.id, name: nameOf(o), pic: picUrl(o), online: this.online(o.id), support: false, last: view(r.last), unread: r.unread, friend: friends.has(o.id) });
    });
    // 0.9.9.9.6.4: your groups, with their last message and how many you haven't read
    if (groups.length) {
      const sums = await this.store.groupSummaries(groups.map((g) => ({ to: groupKey(g.group.id), since: g.me.lastRead })), u.id);
      await Promise.all(groups.map(async ({ group, me: mine }) => {
        const key = groupKey(group.id);
        const s = sums.get(key);
        const members = await this.store.groupMembers(group.id);
        out.push({ id: key, name: group.name, pic: group.pic ? mediaUrl(group.pic) : null, online: false, support: false, friend: false,
          last: s?.last ? view(s.last) : { ...blank('', key), at: group.createdAt, text: '' }, unread: s?.unread ?? 0,
          group: { members: members.length, online: members.filter((m) => this.online(m.userId)).length, role: mine.role } });
      }));
      out.sort((a, b) => b.last.at - a.last.at);
    }
    const took = this.now() - t0;
    if (took > 2000) console.warn(`[messages] the list took ${took} ms (${rows.length} conversations, ${groups.length} groups)`);
    // a player always has the team in their list (to write to it), even before the first message
    if (!asSupport && !out.some((c) => c.support)) {
      out.push({ id: SUPPORT_ID, name: 'Kanji Wizards team', pic: null, online: true, support: true, unread: 0, friend: false,
        last: { id: '', from: SUPPORT_ID, to: u.id, text: 'Questions, bugs, ideas — write to us here.', at: 0, read: true } });
    }
    if (!asSupport) for (const c of out) { const n = notifyMode(u.unlocks, c.id); if (n !== 'all') { c.notify = n; if (n === 'none') c.muted = true; } }
    return { conversations: out, unread: out.reduce((n, c) => n + c.unread, 0), ...(asSupport ? {} : { mutedAll: (u.unlocks ?? []).includes(MUTE_ALL) }) };
  }

  /** 0.9.9.9.6.1: mute (or unmute) all your messages, or one conversation */
  async mute(u: UserRecord, who: unknown, on: boolean) {
    if (who === 'all') {
      const now = (await this.store.findById(u.id)) ?? u;
      const rest = (now.unlocks ?? []).filter((x) => x !== MUTE_ALL);
      await this.store.update(u.id, { unlocks: on ? [...rest, MUTE_ALL] : rest });
      return { muted: on };
    }
    await this.setNotify(u, who, on ? 'none' : 'all');
    return { muted: on };
  }
  /** 0.9.9.9.6.4: a conversation notifies for everything, only @mentions of you, or nothing (Discord's bell) */
  async setNotify(u: UserRecord, who: unknown, mode: unknown) {
    if (typeof who !== 'string' || !/^(g:)?[\w-]{1,64}$/.test(who)) throw new MessageError('Mute what?');
    if (mode !== 'all' && mode !== 'mentions' && mode !== 'none') throw new MessageError('All, mentions or nothing?');
    const now = (await this.store.findById(u.id)) ?? u;
    const rest = (now.unlocks ?? []).filter((x) => x !== muteKey(who) && x !== mentionKey(who));
    await this.store.update(u.id, { unlocks: mode === 'none' ? [...rest, muteKey(who)] : mode === 'mentions' ? [...rest, mentionKey(who)] : rest });
    return { notify: mode as NotifyMode };
  }

  async unread(u: UserRecord): Promise<{ unread: number; support?: number }> {
    const groups = await this.store.groupsOf(u.id);
    const sums = groups.length ? await this.store.groupSummaries(groups.map((g) => ({ to: groupKey(g.group.id), since: g.me.lastRead })), u.id) : new Map();
    const mine = (await this.store.unreadMessages(u.id)) + [...sums.values()].reduce((n, s) => n + s.unread, 0);
    return u.role === 'admin' ? { unread: mine, support: await this.store.unreadMessages(SUPPORT_ID) } : { unread: mine };
  }

  // ── groups ──
  private async membership(u: UserRecord, key: string): Promise<{ group: ChatGroup; members: GroupMember[]; me: GroupMember }> {
    const id = GROUP.exec(key)?.[1] ?? key;
    const group = await this.store.group(id);
    if (!group) throw new MessageError('No such group', 404);
    const members = await this.store.groupMembers(group.id);
    const me = members.find((m) => m.userId === u.id);
    if (!me) throw new MessageError('You\'re not in this group', 403);
    return { group, members, me };
  }
  /** 0.9.9.9.6.4: whether two players are in a group together (then they see each other's status) */
  async shareGroup(a: string, b: string) {
    for (const g of await this.store.groupsOf(a)) if ((await this.store.groupMembers(g.group.id)).some((m) => m.userId === b)) return true;
    return false;
  }
  private can(group: ChatGroup, me: GroupMember, what: keyof GroupPerms) { return me.role !== 'member' || group.perms[what] === 'all'; }
  /** a line in the group ("Aya added Ken") — kind "sys", the text is "<event>\n<detail>" */
  private async system(group: ChatGroup, actor: UserRecord, event: string, detail = '') {
    const m = await this.store.addMessage({ fromId: actor.id, toId: groupKey(group.id), text: `${event}\n${detail}`, at: this.now(), kind: 'sys', by: null });
    const members = await this.store.groupMembers(group.id);
    this.hooks.deliver(members.map((x) => ({ id: x.userId, muted: true })), view(m), nameOf(actor));
  }
  private changed(members: GroupMember[], group: ChatGroup) { this.hooks.group?.(members.map((m) => m.userId), groupKey(group.id), 'changed'); }

  async createGroup(u: UserRecord, name: unknown, memberIds: unknown, pic?: unknown): Promise<{ id: string }> {
    const n = typeof name === 'string' ? name.replace(/\s+/g, ' ').trim().slice(0, GROUP_NAME_MAX) : '';
    if (!n) throw new MessageError('Give the group a name');
    const ids = Array.isArray(memberIds) ? [...new Set(memberIds.filter((x): x is string => typeof x === 'string' && x !== u.id))] : [];
    if (ids.length + 1 > GROUP_MAX) throw new MessageError(`A group has at most ${GROUP_MAX} members`);
    const friends = await this.friendIds(u.id);
    if (ids.some((id) => !friends.has(id))) throw new MessageError('You can add your friends', 403);
    const picId = await this.ownMedia(u, pic);
    const at = this.now();
    const group = await this.store.createGroup({ name: n, pic: picId, ownerId: u.id, createdAt: at, perms: { ...DEFAULT_PERMS } },
      [{ userId: u.id, role: 'owner', joinedAt: at, lastRead: at }, ...ids.map((id, i) => ({ userId: id, role: 'member' as const, joinedAt: at + i + 1, lastRead: 0 }))]);
    await this.system(group, u, 'created', n);
    if (ids.length) await this.system(group, u, 'added', (await this.names(ids)).join(', '));
    return { id: groupKey(group.id) };
  }
  private async names(ids: string[]) { return (await Promise.all(ids.map((id) => this.store.findById(id)))).filter((x): x is UserRecord => !!x).map(nameOf); }
  /** a picture someone uploaded (only their own) — for a group's picture */
  private async ownMedia(u: UserRecord, pic: unknown): Promise<string | null> {
    if (pic === undefined || pic === null || pic === '') return null;
    const id = typeof pic === 'string' ? pic.replace(/^\/api\/media\//, '') : '';
    const m = /^[\w-]{10,40}$/.test(id) ? await this.store.media(id) : null;
    if (!m || m.ownerId !== u.id) throw new MessageError('Upload the picture first');
    return id;
  }

  async groupInfo(u: UserRecord, key: string): Promise<GroupInfo> {
    const { group, members, me } = await this.membership(u, key);
    const friends = await this.friendIds(u.id);
    const recs = await Promise.all(members.map((m) => this.store.findById(m.userId)));
    const list: MemberView[] = [];
    await Promise.all(members.map(async (m, i) => {
      const r = recs[i];
      if (!r) return;
      list.push({ id: r.id, name: nameOf(r), login: r.username, pic: picUrl(r), role: m.role, online: this.online(r.id), friend: friends.has(r.id), ...(this.hooks.status ? { status: await this.hooks.status(r.id) } : {}) });
    }));
    const rank = { owner: 0, admin: 1, member: 2 } as const;
    list.sort((a, b) => rank[a.role] - rank[b.role] || Number(b.online) - Number(a.online) || a.name.localeCompare(b.name));
    return { id: groupKey(group.id), name: group.name, pic: group.pic ? mediaUrl(group.pic) : null, perms: group.perms, createdAt: group.createdAt, role: me.role, members: list, notify: notifyMode(u.unlocks, groupKey(group.id)) };
  }

  async updateGroup(u: UserRecord, key: string, patch: { name?: unknown; pic?: unknown; perms?: unknown }) {
    const { group, members, me } = await this.membership(u, key);
    if ((patch.name !== undefined || patch.pic !== undefined) && !this.can(group, me, 'info')) throw new MessageError('Only the group\'s admins can change that', 403);
    if (patch.name !== undefined) {
      const n = typeof patch.name === 'string' ? patch.name.replace(/\s+/g, ' ').trim().slice(0, GROUP_NAME_MAX) : '';
      if (!n) throw new MessageError('Give the group a name');
      if (n !== group.name) { await this.store.updateGroup(group.id, { name: n }); await this.system(group, u, 'renamed', n); }
    }
    if (patch.pic !== undefined) { await this.store.updateGroup(group.id, { pic: await this.ownMedia(u, patch.pic) }); await this.system(group, u, 'photo'); }
    if (patch.perms !== undefined) {
      if (me.role !== 'owner') throw new MessageError('Only the group\'s owner can change what members may do', 403);
      const p = patch.perms as Partial<Record<keyof GroupPerms, unknown>>;
      const pick = (v: unknown, was: 'all' | 'admins') => (v === 'all' || v === 'admins' ? v : was);
      const perms: GroupPerms = { invite: pick(p?.invite, group.perms.invite), info: pick(p?.info, group.perms.info), send: pick(p?.send, group.perms.send) };
      await this.store.updateGroup(group.id, { perms });
      await this.system(group, u, 'perms');
    }
    this.changed(members, group);
    return this.groupInfo(u, key);
  }

  async addMembers(u: UserRecord, key: string, ids: unknown) {
    const { group, members, me } = await this.membership(u, key);
    if (!this.can(group, me, 'invite')) throw new MessageError('Only the group\'s admins can add people', 403);
    const list = Array.isArray(ids) ? [...new Set(ids.filter((x): x is string => typeof x === 'string'))].filter((id) => !members.some((m) => m.userId === id)) : [];
    if (!list.length) throw new MessageError('Pick someone to add');
    if (members.length + list.length > GROUP_MAX) throw new MessageError(`A group has at most ${GROUP_MAX} members`);
    const friends = await this.friendIds(u.id);
    if (list.some((id) => !friends.has(id))) throw new MessageError('You can add your friends', 403);
    const at = this.now();
    for (const [i, id] of list.entries()) await this.store.addGroupMember({ groupId: group.id, userId: id, role: 'member', joinedAt: at + i, lastRead: 0 });
    await this.system(group, u, 'added', (await this.names(list)).join(', '));
    this.changed(await this.store.groupMembers(group.id), group);
    return this.groupInfo(u, key);
  }

  async removeMember(u: UserRecord, key: string, who: unknown) {
    const { group, members, me } = await this.membership(u, key);
    const t = members.find((m) => m.userId === who);
    if (!t) throw new MessageError('Not in this group', 404);
    if (t.userId === u.id) throw new MessageError('Use Leave group');
    // the owner removes anyone; an admin removes members (not other admins, not the owner)
    if (!(me.role === 'owner' || (me.role === 'admin' && t.role === 'member'))) throw new MessageError('You can\'t remove them', 403);
    await this.store.removeGroupMember(group.id, t.userId);
    const rec = await this.store.findById(t.userId);
    await this.system(group, u, 'removed', rec ? nameOf(rec) : '');
    this.hooks.group?.([t.userId], groupKey(group.id), 'removed');
    this.changed(members.filter((m) => m.userId !== t.userId), group);
    return this.groupInfo(u, key);
  }

  async setRole(u: UserRecord, key: string, who: unknown, role: unknown) {
    const { group, members, me } = await this.membership(u, key);
    if (me.role !== 'owner') throw new MessageError('Only the group\'s owner can do that', 403);
    const t = members.find((m) => m.userId === who);
    if (!t || t.userId === u.id) throw new MessageError('Pick a member', 404);
    const rec = await this.store.findById(t.userId);
    if (role === 'owner') {
      // the crown passes on; the old owner stays as an admin
      await this.store.updateGroupMember(group.id, t.userId, { role: 'owner' });
      await this.store.updateGroupMember(group.id, u.id, { role: 'admin' });
      await this.store.updateGroup(group.id, { ownerId: t.userId });
      await this.system(group, u, 'owner', rec ? nameOf(rec) : '');
    } else if (role === 'admin' || role === 'member') {
      if (t.role === role) return this.groupInfo(u, key);
      await this.store.updateGroupMember(group.id, t.userId, { role });
      await this.system(group, u, role === 'admin' ? 'admin' : 'unadmin', rec ? nameOf(rec) : '');
    } else throw new MessageError('Admin or member?');
    this.changed(members, group);
    return this.groupInfo(u, key);
  }

  async leave(u: UserRecord, key: string) {
    const { group, members, me } = await this.membership(u, key);
    const rest = members.filter((m) => m.userId !== u.id);
    if (!rest.length) { await this.store.deleteGroup(group.id); this.hooks.group?.([u.id], groupKey(group.id), 'removed'); return { left: true }; }
    await this.store.removeGroupMember(group.id, u.id);
    if (me.role === 'owner') {
      // the oldest admin takes over (or the oldest member)
      const next = rest.find((m) => m.role === 'admin') ?? rest[0];
      await this.store.updateGroupMember(group.id, next.userId, { role: 'owner' });
      await this.store.updateGroup(group.id, { ownerId: next.userId });
    }
    await this.system(group, u, 'left');
    this.hooks.group?.([u.id], groupKey(group.id), 'removed');
    this.changed(rest, group);
    return { left: true };
  }

  async deleteGroup(u: UserRecord, key: string) {
    const { group, members, me } = await this.membership(u, key);
    if (me.role !== 'owner') throw new MessageError('Only the group\'s owner can delete it', 403);
    await this.store.deleteGroup(group.id);
    this.hooks.group?.(members.map((m) => m.userId), groupKey(group.id), 'removed');
    return { deleted: true };
  }

  // ── conversations ──
  /** a conversation, oldest first (the newest 60, or the 60 before `before`); what came in is read now */
  async thread(u: UserRecord, other: string, asSupport = false, before?: number): Promise<{ messages: MessageView[]; with: ConversationView | null; people?: Record<string, { name: string; pic: string | null }> }> {
    if (GROUP.test(other) && !asSupport) {
      const { group, members, me } = await this.membership(u, other);
      const msgs = await this.store.messagesTo(other, 60, before);
      const at = this.now();
      if (before === undefined) {
        await this.store.updateGroupMember(group.id, u.id, { lastRead: at });
        // (the writers' ✓ turn into ✓✓)
        const writers = [...new Set(msgs.filter((m) => m.fromId !== u.id && m.at > me.lastRead).map((m) => m.fromId))];
        if (writers.length) this.hooks.read?.(writers, other);
      }
      // ✓✓ when someone else in the group has read it
      const othersRead = Math.max(0, ...members.filter((m) => m.userId !== u.id).map((m) => m.lastRead));
      const recs = await Promise.all([...new Set([...members.map((m) => m.userId), ...msgs.map((m) => m.fromId)])].map((id) => this.store.findById(id)));
      const people: Record<string, { name: string; pic: string | null }> = {};
      for (const r of recs) if (r) people[r.id] = { name: nameOf(r), pic: picUrl(r) };
      const sums = await this.store.groupSummaries([{ to: other, since: at }], u.id);
      const withV: ConversationView = { id: other, name: group.name, pic: group.pic ? mediaUrl(group.pic) : null, online: false, support: false, friend: false, unread: 0,
        last: sums.get(other)?.last ? view(sums.get(other)!.last!) : blank(), group: { members: members.length, online: members.filter((m) => this.online(m.userId)).length, role: me.role } };
      const n = notifyMode(u.unlocks, other); if (n !== 'all') { withV.notify = n; if (n === 'none') withV.muted = true; }
      return { messages: msgs.map((m) => view(m, m.fromId === u.id ? m.at <= othersRead : true)), with: withV, people };
    }
    const me = this.side(u, asSupport);
    const msgs = await this.store.messagesBetween(me, other, 60, before);
    // 0.9.9.9.6.1: tell the writer it was read (their ✓ turns into ✓✓)
    if (await this.store.markRead(me, other, this.now())) this.hooks.read?.(other, me);
    return { messages: msgs.map((m) => view(m)), with: await this.who(u, other) };
  }

  private async who(u: UserRecord, other: string): Promise<ConversationView | null> {
    if (other === SUPPORT_ID) return { id: SUPPORT_ID, name: 'Kanji Wizards team', pic: null, online: true, support: true, unread: 0, friend: false, last: blank() };
    const o = await this.store.findById(other);
    if (!o) return null;
    const friend = (await this.friendIds(u.id)).has(other);
    const v: ConversationView = { id: o.id, name: nameOf(o), pic: picUrl(o), online: this.online(o.id), support: false, unread: 0, friend, last: blank() };
    // 0.9.9.9.6.4: under their name — online, playing, away, last seen (friends)
    if (friend && this.hooks.status) v.status = await this.hooks.status(o.id);
    const n = notifyMode(u.unlocks, o.id); if (n !== 'all') { v.notify = n; if (n === 'none') v.muted = true; }
    return v;
  }

  /** who may write to whom: anyone to the team; the team to anyone; friends to each other; and an answer to someone who wrote to you */
  private async mayWrite(u: UserRecord, me: string, to: string) {
    if (to === SUPPORT_ID || me === SUPPORT_ID) return true;
    if (to === me) return false;
    if ((await this.friendIds(u.id)).has(to)) return true;
    return (await this.store.messagesBetween(me, to, 1)).some((m) => m.fromId === to);
  }

  async send(u: UserRecord, to: unknown, text: unknown, asSupport = false, kind?: 'bug' | 'suggestion', extra: { media?: unknown; fwd?: string | null } = {}): Promise<MessageView> {
    const me = this.side(u, asSupport);
    if (typeof to !== 'string' || !to || to.length > 64) throw new MessageError('Who to?');
    const t = typeof text === 'string' ? text.replace(/\r\n?/g, '\n').trim().slice(0, MESSAGE_MAX) : '';
    const media = await this.mediaFor(u, extra.media);
    if (!t && !media) throw new MessageError('Write something first');
    // 0.9.9.9.6.4: a group
    if (GROUP.test(to)) {
      if (asSupport) throw new MessageError('Who to?');
      const { group, members, me: mine } = await this.membership(u, to);
      if (!this.can(group, mine, 'send')) throw new MessageError('Only the group\'s admins can write here', 403);
      this.limit(u);
      const m = await this.store.addMessage({ fromId: u.id, toId: to, text: t, at: this.now(), kind: null, by: null, media, fwd: extra.fwd ?? null });
      await this.store.updateGroupMember(group.id, u.id, { lastRead: m.at });
      const v = view(m, false);
      const recs = await Promise.all(members.map((x) => this.store.findById(x.userId)));
      const fromName = nameOf(u);
      this.hooks.deliver(members.map((x, i) => ({ id: x.userId, muted: x.userId === u.id || quietFor(recs[i], to, t) })), v, fromName);
      for (const [i, x] of members.entries()) {
        if (x.userId === u.id || this.online(x.userId) || quietFor(recs[i], to, t)) continue;
        this.hooks.push?.(x.userId, to, `${fromName} · ${group.name}`, t || '📷'); // (tapping it opens the group)
      }
      return v;
    }
    if (to !== SUPPORT_ID && !(await this.store.findById(to))) throw new MessageError('No such player', 404);
    if (!(await this.mayWrite(u, me, to))) throw new MessageError('You can write to your friends (and to the team)', 403);
    this.limit(u);
    const m = await this.store.addMessage({ fromId: me, toId: to, text: t, at: this.now(), kind: kind ?? null, by: asSupport ? u.id : null, media, fwd: extra.fwd ?? null });
    const v = view(m);
    const fromName = asSupport ? 'Kanji Wizards team' : nameOf(u);
    if (to === SUPPORT_ID) this.hooks.deliver('admins', v, fromName);
    else {
      const rec = await this.store.findById(to);
      const quiet = quietFor(rec, me, t);
      this.hooks.deliver([{ id: to, muted: quiet }], v, fromName);
      if (!this.online(to) && !quiet) this.hooks.push?.(to, me, fromName, t || '📷');
    }
    // the sender's own other screens (and, for the team, the other admins)
    if (asSupport) this.hooks.deliver('admins', v, fromName);
    else if (to !== SUPPORT_ID) this.hooks.deliver([{ id: u.id, muted: true }], v, fromName);
    return v;
  }

  /** Feedback (a bug report or a suggestion) also goes into the player's conversation with the team */
  async feedback(u: UserRecord, kind: 'bug' | 'suggestion', text: string) {
    const label = kind === 'bug' ? '🐞 Bug report' : '💡 Suggestion';
    const m = await this.store.addMessage({ fromId: u.id, toId: SUPPORT_ID, text: `${label}\n${text.slice(0, MESSAGE_MAX)}`, at: this.now(), kind, by: null });
    this.hooks.deliver('admins', view(m), nameOf(u));
  }

  // ── 0.9.9.9.6.4: one message — who can see it, and changing it ──
  /** the message, if this player can see it (and as whom: their own id, or the team's) */
  private async visible(u: UserRecord, id: unknown) {
    const m = typeof id === 'string' ? await this.store.message(id) : null;
    if (!m) throw new MessageError('No such message', 404);
    if (GROUP.test(m.toId)) { const g = await this.membership(u, m.toId); return { m, as: u.id, group: g }; }
    if (m.fromId === u.id || m.toId === u.id) return { m, as: u.id, group: null };
    if (u.role === 'admin' && (m.fromId === SUPPORT_ID || m.toId === SUPPORT_ID)) return { m, as: SUPPORT_ID, group: null };
    throw new MessageError('No such message', 404);
  }
  /** everyone who sees this message (live updates) */
  private async audience(m: DirectMessage): Promise<string[] | 'admins'> {
    if (GROUP.test(m.toId)) return (await this.store.groupMembers(GROUP.exec(m.toId)![1])).map((x) => x.userId);
    if (m.toId === SUPPORT_ID || m.fromId === SUPPORT_ID) return 'admins';
    return [m.fromId, m.toId];
  }
  private async updated(m: DirectMessage) {
    const fresh = (await this.store.message(m.id)) ?? m;
    const v = view(fresh);
    const to = await this.audience(fresh);
    this.hooks.update?.(to, v);
    // (the player in a conversation with the team sees it too)
    if (to === 'admins') { const player = fresh.fromId === SUPPORT_ID ? fresh.toId : fresh.fromId; this.hooks.update?.([player], v); }
    return v;
  }

  async edit(u: UserRecord, id: unknown, text: unknown) {
    const { m, as } = await this.visible(u, id);
    if (m.fromId !== as || m.deleted || m.kind === 'sys') throw new MessageError('You can edit your own messages', 403);
    if (m.fwd) throw new MessageError('A forwarded message can\'t be edited');
    if (this.now() - m.at > EDIT_WINDOW_MS) throw new MessageError('Messages can be edited for 48 hours');
    const t = typeof text === 'string' ? text.replace(/\r\n?/g, '\n').trim().slice(0, MESSAGE_MAX) : '';
    if (!t && !m.media) throw new MessageError('Write something first');
    if (t === m.text) return view(m);
    await this.store.updateMessage(m.id, { text: t, editedAt: this.now() });
    return this.updated(m);
  }

  async remove(u: UserRecord, id: unknown) {
    const { m, as, group } = await this.visible(u, id);
    // your own; in a group, its owner and admins can remove anyone's
    const mod = group && group.me.role !== 'member' && m.fromId !== group.group.ownerId;
    if (m.fromId !== as && !mod && !(group && group.me.role === 'owner')) throw new MessageError('You can delete your own messages', 403);
    if (m.deleted) return view(m);
    await this.store.updateMessage(m.id, { deleted: true, text: '', media: null, reactions: null });
    return this.updated(m);
  }

  /** one reaction per player (another one replaces it; the same one again takes it back) */
  async react(u: UserRecord, id: unknown, emoji: unknown) {
    const { m, as } = await this.visible(u, id);
    if (m.deleted || m.kind === 'sys') throw new MessageError('Can\'t react to that');
    if (emoji !== null && !isReaction(emoji)) throw new MessageError('Pick an emoji');
    const who = as === SUPPORT_ID ? SUPPORT_ID : u.id;
    const had = Object.entries(m.reactions ?? {}).find(([, ids]) => ids.includes(who))?.[0];
    const next: Record<string, string[]> = {};
    for (const [e, ids] of Object.entries(m.reactions ?? {})) { const rest = ids.filter((x) => x !== who); if (rest.length) next[e] = rest; }
    if (emoji && emoji !== had) {
      if (!next[emoji] && Object.keys(next).length >= 12) throw new MessageError('That\'s a lot of reactions');
      next[emoji] = [...(next[emoji] ?? []), who];
    }
    await this.store.updateMessage(m.id, { reactions: next });
    return this.updated(m);
  }

  /** forward a message to other conversations ("Forwarded from …") */
  async forward(u: UserRecord, id: unknown, targets: unknown) {
    const { m } = await this.visible(u, id);
    if (m.deleted || m.kind === 'sys') throw new MessageError('Can\'t forward that');
    const list = Array.isArray(targets) ? [...new Set(targets.filter((x): x is string => typeof x === 'string'))].slice(0, 10) : [];
    if (!list.length) throw new MessageError('Forward to whom?');
    let from = m.fwd;
    if (!from) {
      if (m.fromId === SUPPORT_ID) from = 'Kanji Wizards team';
      else { const a = await this.store.findById(m.fromId); from = a ? nameOf(a) : '?'; }
    }
    const out: MessageView[] = [];
    for (const to of list) out.push(await this.send(u, to, m.text, false, undefined, { media: m.media ? `keep:${m.media}` : undefined, fwd: from }));
    return out;
  }

  /** "typing…" — to the friend, or to the group */
  async typing(u: UserRecord, to: unknown, on: boolean) {
    if (typeof to !== 'string' || to === SUPPORT_ID || to === u.id) return;
    if (GROUP.test(to)) {
      const { members } = await this.membership(u, to).catch(() => ({ members: [] as GroupMember[] }));
      const others = members.filter((m) => m.userId !== u.id).map((m) => m.userId);
      if (others.length) this.hooks.typing?.(others, to, u.id, nameOf(u), on);
      return;
    }
    if (!/^[0-9a-f-]{36}$/i.test(to) || !(await this.mayWrite(u, u.id, to).catch(() => false))) return;
    this.hooks.typing?.([to], u.id, u.id, nameOf(u), on);
  }

  // ── photos ──
  /** a photo for a message: a fresh upload of this player's (or, forwarding, one that already exists) */
  private async mediaFor(u: UserRecord, media: unknown): Promise<string | null> {
    if (media === undefined || media === null || media === '') return null;
    if (typeof media === 'string' && media.startsWith('keep:')) { const id = media.slice(5); return (await this.store.media(id)) ? id : null; }
    return this.ownMedia(u, media);
  }
  async upload(u: UserRecord, dataUrl: unknown): Promise<{ id: string; url: string }> {
    const m = typeof dataUrl === 'string' ? /^data:(image\/(?:png|jpeg|webp|gif));base64,([A-Za-z0-9+/]+={0,2})$/.exec(dataUrl) : null;
    if (!m) throw new MessageError('Photos must be JPEG, PNG, WebP or GIF');
    const data = Buffer.from(m[2], 'base64');
    if (data.length > MEDIA_MAX_BYTES) throw new MessageError('That photo is too large');
    const hex = data.subarray(0, 4).toString('hex');
    const ok = m[1] === 'image/png' ? hex === '89504e47' : m[1] === 'image/jpeg' ? hex.startsWith('ffd8ff') : m[1] === 'image/gif' ? data.subarray(0, 3).toString('latin1') === 'GIF'
      : data.subarray(0, 4).toString('latin1') === 'RIFF' && data.subarray(8, 12).toString('latin1') === 'WEBP';
    if (!ok) throw new MessageError('That file is not a valid picture');
    if ((await this.store.mediaCountSince(u.id, this.now() - 86_400_000)) >= MEDIA_PER_DAY) throw new MessageError('That\'s a lot of photos for one day — try again tomorrow', 429);
    const id = randomBytes(16).toString('base64url');
    await this.store.addMedia({ id, ownerId: u.id, mime: m[1], data, at: this.now() });
    return { id, url: mediaUrl(id) };
  }
  media(id: string) { return /^[\w-]{10,40}$/.test(id) ? this.store.media(id) : Promise.resolve(null); }
}
