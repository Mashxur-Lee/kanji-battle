import assert from 'node:assert/strict';
import { test } from 'node:test';
import { INVITE_COOLDOWN_MS, inviteRefusal } from '../src/server/Session';
import { BOT_ACCURACY, botChance, botLevels, botName } from '../src/server/Bot';
import { RoomManager } from '../src/server/RoomManager';
import { flameShades, FLAMES } from '../src/shared/progress';

test('invites: not to a friend already in the room, not mid-game, and again only after 10 s', () => {
  const now = 1_000_000;
  assert.equal(inviteRefusal({ inRoom: false, activity: 'Lobby · Deck Duel', now }), null);
  assert.equal(inviteRefusal({ inRoom: false, activity: 'Results · 1v1 Rapid', now }), null);
  assert.equal(inviteRefusal({ inRoom: false, activity: 'In the menus', now }), null);
  assert.match(inviteRefusal({ inRoom: true, now })!, /already in this room/);
  assert.match(inviteRefusal({ inRoom: false, activity: 'Playing 1v1 Kanji Reading', now })!, /in a game/);
  assert.match(inviteRefusal({ inRoom: false, lastAt: now - 3000, now })!, /Wait 7 s/);
  assert.equal(inviteRefusal({ inRoom: false, lastAt: now - INVITE_COOLDOWN_MS, now }), null);
});

test('the beginner AI: easy words (かな + N5), often wrong', () => {
  assert.deepEqual(botLevels('BEGINNER'), ['KANA', 'N5']);
  assert.deepEqual(botLevels('N3'), ['N3']);
  assert.ok(botChance('BEGINNER', 'KANA') <= 0.6);
  assert.ok(BOT_ACCURACY.BEGINNER.N5 < BOT_ACCURACY.N5.N5);
  assert.match(botName(0, 'BEGINNER'), /AI Beginner/);
});

test('the tutorial room is quicker: 30 s of study, a 2-minute battle', () => {
  const rooms = new RoomManager();
  const opts = (r: object) => (r as unknown as { opts: { game: { prepMs: number; battleMs: number } } }).opts.game;
  const quick = opts(rooms.create('reading', true));
  const normal = opts(rooms.create('reading'));
  assert.equal(quick.prepMs, 30_000);
  assert.equal(quick.battleMs, 120_000);
  assert.ok(normal.prepMs > quick.prepMs);
});

test('every flame colour gets its own fire shades (seasonal flames are not all light blue)', () => {
  const seen = new Set(FLAMES.map((f) => flameShades(f.id).join('|')));
  assert.equal(seen.size, FLAMES.length);
  for (const f of FLAMES) for (const c of flameShades(f.id)) assert.match(c, /^\d{1,3},\d{1,3},\d{1,3}$/);
});
