import type { AuthService } from '../auth/AuthService';
import type { FriendLink, Store } from '../db/Store';
import type { SessionHub } from '../Session';

export class SocialError extends Error { constructor(message: string, readonly status = 400) { super(message); } }
const UUID = /^[0-9a-f-]{36}$/i;

/** Friends: requests by name, accept / remove, who is online; invites go through the hub (websocket). */
export class SocialService {
  constructor(private readonly store: Store, private readonly hub: SessionHub, private readonly auth?: AuthService) {}

  async list(userId: string) {
    const links = await this.store.friends(userId);
    return links.map((f) => {
      const p = f.status === 'accepted' ? this.hub.presence(f.id) : { online: false };
      return { ...f, online: p.online, activity: p.online ? p.activity : undefined };
    });
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

  async areFriends(a: string, b: string) {
    if (!UUID.test(b)) return false;
    return (await this.store.friends(a)).some((f: FriendLink) => f.id === b && f.status === 'accepted');
  }
}
