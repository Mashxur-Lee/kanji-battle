import type { FriendLink, Store, UserRecord } from '../db/Store';
import { Strikes } from '../strikes';
import type { Device, PlayerStatus, ServerMessage } from '../../shared/protocol';

/** What friends need of the session hub (Session.ts): who's online, and a message to one player. */
export interface FriendHub {
  presence(userId: string): { online: boolean; away?: boolean; activity?: string; since?: number; lastSeen?: number; device?: Device; party?: { size: number; max: number; mode: string; code?: string; id?: string; members?: string[] } };
  sendTo(userId: string, msg: ServerMessage): unknown;
}
import { levelOf } from '../../shared/progress';
import { picUrl } from './StudyService';

export class SocialError extends Error { constructor(message: string, readonly status = 400) { super(message); } }
const UUID = /^[0-9a-f-]{36}$/i;

/** Friends: requests by name, accept / remove, who is online; invites go through the hub (websocket). */
export class SocialService {
  constructor(private readonly store: Store, private readonly hub: FriendHub) {}

  async list(userId: string) {
    const links = await this.store.friends(userId);
    return Promise.all(links.map(async (f) => {
      const p: { online: boolean; away?: boolean; activity?: string; lastSeen?: number; device?: Device; party?: { size: number; max: number; mode: string; code?: string; id?: string; members?: string[] } } = f.status === 'accepted' ? this.hub.presence(f.id) : { online: false };
      const rec = await this.store.findById(f.id); // picture and level for the friends rail
      // 0.9.9.9: away (the app in the background) and when they were last online
      const lastSeen = f.status === 'accepted' && !p.online ? Math.max(p.lastSeen ?? 0, rec?.lastSeen ?? 0) || null : null;
      // 0.9.9.9.5: push — an invite reaches their phone even with the app closed
      const push = f.status === 'accepted' && (rec?.pushTokens?.length ?? 0) > 0;
      return { ...f, online: p.online, away: p.online && !!p.away, activity: p.online ? p.activity : undefined, party: p.online ? p.party : undefined, device: p.online ? p.device ?? 'web' : undefined, lastSeen, pic: rec ? picUrl(rec) : null, level: levelOf(rec?.xp ?? 0), push,
        // 0.9.9.9.6.4: words they learned today (what "learned today" shows on your own profile)
        ...(f.status === 'accepted' && rec ? { today: Date.now() < rec.critExpires ? rec.critCount : 0 } : {}) };
    }));
  }

  async request(userId: string, myName: string, rawName: unknown): Promise<'requested' | 'accepted' | 'exists'> {
    const name = typeof rawName === 'string' ? rawName.trim().toLowerCase() : '';
    if (!name) throw new SocialError('Type a player name');
    const other = await this.store.findByUsername(name);
    if (!other || other.banned) throw new SocialError('No player with that name', 404);
    if (other.id === userId) throw new SocialError('That\'s you!');
    // 0.9.9.9.7.4: either of you has blocked the other
    if (blocks(other, userId) || blocks(await this.store.findById(userId), other.id)) throw new SocialError('You can\'t add this player', 403);
    const r = await this.store.requestFriend(userId, other.id);
    if (r === 'requested') this.hub.sendTo(other.id, { type: 'friend', event: 'request', from: myName });
    if (r === 'accepted') this.hub.sendTo(other.id, { type: 'friend', event: 'accepted', from: myName });
    return r;
  }

  async accept(userId: string, myName: string, fromId: string) {
    if (!UUID.test(fromId)) throw new SocialError('No such request', 404);
    if (!(await this.store.acceptFriend(userId, fromId))) throw new SocialError('No such request', 404);
    this.hub.sendTo(fromId, { type: 'friend', event: 'accepted', from: myName });
  }

  async remove(userId: string, otherId: string) {
    if (!UUID.test(otherId)) return;
    await this.store.removeFriend(userId, otherId);
  }

  /** 0.9.9.9.6.4: what a friend (or someone you share a group with) is up to — online, playing, away, last seen */
  async statusOf(otherId: string): Promise<PlayerStatus> {
    const p = this.hub.presence(otherId);
    if (p.online) return { online: true, ...(p.away ? { away: true } : {}), ...(p.activity ? { activity: p.activity } : {}) };
    const rec = await this.store.findById(otherId);
    return { online: false, lastSeen: Math.max(p.lastSeen ?? 0, rec?.lastSeen ?? 0) || null };
  }

  async areFriends(a: string, b: string) {
    if (!UUID.test(b)) return false;
    return (await this.store.friends(a)).some((f: FriendLink) => f.id === b && f.status === 'accepted');
  }

  // ── 0.9.9.9.7.4: block and report ──────────────────────────────────────────
  /**
   * Block (or unblock) a player: they can't message you, add you as a friend or invite you (invites and groups need a
   * friend — blocking ends the friendship). They aren't told. Kept as "block:<id>" in your unlocks, at most BLOCK_MAX.
   */
  async block(u: UserRecord, otherId: unknown, on: boolean): Promise<string[]> {
    if (typeof otherId !== 'string' || !UUID.test(otherId) || otherId === u.id) throw new SocialError('Block whom?');
    const fresh = (await this.store.findById(u.id)) ?? u;
    const rest = (fresh.unlocks ?? []).filter((x) => x !== BLOCK + otherId);
    if (on && rest.filter((x) => x.startsWith(BLOCK)).length >= BLOCK_MAX) throw new SocialError(`You can block up to ${BLOCK_MAX} players`);
    if (on && !(await this.store.findById(otherId))) throw new SocialError('No such player', 404);
    const unlocks = on ? [...rest, BLOCK + otherId] : rest;
    await this.store.update(u.id, { unlocks });
    if (on) await this.store.removeFriend(u.id, otherId);
    return unlocks.filter((x) => x.startsWith(BLOCK)).map((x) => x.slice(BLOCK.length));
  }

  private reported = new Strikes(10, 3_600_000);
  /** Report a player to the team (admin → Inbox): why, a few words, and the message, if it was one (and yours to see). */
  async report(u: UserRecord, otherId: unknown, reason: unknown, text: unknown, messageId: unknown) {
    if (typeof otherId !== 'string' || !UUID.test(otherId) || otherId === u.id) throw new SocialError('Report whom?');
    const other = await this.store.findById(otherId);
    if (!other) throw new SocialError('No such player', 404);
    if (this.reported.blocked(u.id)) throw new SocialError('That\'s a lot of reports - try again later', 429);
    this.reported.add(u.id);
    const why = REPORT_REASONS.includes(reason as ReportReason) ? (reason as ReportReason) : 'other';
    const note = typeof text === 'string' ? text.replace(/\s+/g, ' ').trim().slice(0, 500) : '';
    let quoted = '';
    if (typeof messageId === 'string' && UUID.test(messageId)) {
      const m = await this.store.message(messageId);
      const seen = m && m.fromId === otherId && (m.toId === u.id || (m.toId.startsWith('g:') && (await this.store.groupMembers(m.toId.slice(2))).some((x) => x.userId === u.id)));
      if (seen) quoted = m.deleted ? '(deleted)' : m.text.slice(0, 1000);
    }
    await this.store.addReport({
      kind: 'report', userId: u.id, username: u.username,
      text: `Report on @${other.username}: ${REPORT_LABEL[why]}${note ? ` - ${note}` : ''}${quoted ? `\nThe message: “${quoted}”` : ''}`,
      meta: JSON.stringify({ target: other.id, targetLogin: other.username, reason: why, message: typeof messageId === 'string' ? messageId : null }),
      at: Date.now(),
    });
  }
}

/** 0.9.9.9.7.4 */
export const BLOCK = 'block:', BLOCK_MAX = 300;
/** whether `u` has blocked `otherId` */
export const blocks = (u: Pick<UserRecord, 'unlocks'> | null | undefined, otherId: string) => !!u?.unlocks?.includes(BLOCK + otherId);
export const REPORT_REASONS = ['rude', 'spam', 'cheating', 'name', 'other'] as const;
export type ReportReason = (typeof REPORT_REASONS)[number];
const REPORT_LABEL: Record<ReportReason, string> = { rude: 'rude or hurtful', spam: 'spam', cheating: 'cheating', name: 'an inappropriate name or picture', other: 'something else' };
