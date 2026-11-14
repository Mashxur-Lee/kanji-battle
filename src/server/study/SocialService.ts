import type { AuthService } from '../auth/AuthService';
import type { FriendLink, Store } from '../db/Store';
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
  constructor(private readonly store: Store, private readonly hub: FriendHub, private readonly auth?: AuthService) {}

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
}
