import { createHash } from 'node:crypto';
import { keepAwake } from './keepAwake';
import { VERSION } from '../shared/version';
import type { MissedWord, RatingChange } from '../shared/protocol';
import { createServer, type IncomingMessage } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { Compressed } from './compressed';
import { apkSource } from './apk';
import { heartbeat } from './heartbeat';
import path from 'node:path';
import { WebSocketServer } from 'ws';
import { AuthService } from './auth/AuthService';
import { TokenSigner } from './auth/tokens';
import { PgStore } from './db/PgStore';
import { FileStore, type Store } from './db/Store';
import { createWritingJudge, isWritable } from './handwriting/judge';
import { Recognizer } from './handwriting/recognizer';
import { readApkg } from './study/apkg';
import { Gifs } from './gifs';
import { ChessHub } from './ChessHub';
import { MnemonicPictures } from './mnemonics';
import { createJudgePool } from './handwriting/pool';
import { createApiHandler } from './http';
import { StudyService } from './study/StudyService';
import { DailyService, secretSeed } from './study/DailyService';
import { SocialService } from './study/SocialService';
import { RoomManager } from './RoomManager';
import { deviceOf, Session, SessionHub, setServerBuild } from './Session';
import { Push, type PushNote } from './push';
import { Bucket, clientIp, inlineScriptHashes, isPublicServer, originAllowed, securityHeaders, viaHttps } from './security';
import { Matchmaker } from './Matchmaker';
import { StoryService } from './study/StoryService';
import { InsightsService } from './study/InsightsService';
import { MessageService } from './study/MessageService';
import { runMigrations } from './migrations';
import { onServerError, reportServerError } from './errors';
import { createMailer, type Mailer } from './mail';
import type { ResetMail } from './auth/AuthService';
import { DictService } from './study/DictService';
import { RankedService } from './study/RankedService';
import { GrammarHub } from './GrammarHub';

const PUBLIC_DIR = path.resolve(__dirname, '../../public');
// 0.9.9.9.8: the page and the stylesheet as they are sent (no comments; scripts/build-client.mjs) — when they are at
// least as new as the files in public/
const SENT_DIR = path.resolve(__dirname, '../../dist/public');
const SENT = new Set(['/index.html', '/style.css']);
async function sentCopy(url: string, file: string): Promise<Buffer | null> {
  if (!SENT.has(url)) return null;
  try {
    const copy = path.join(SENT_DIR, url.slice(1));
    const [a, b] = await Promise.all([stat(copy), stat(file)]);
    return a.mtimeMs >= b.mtimeMs ? await readFile(copy) : null;
  } catch { return null; }
}
try { setServerBuild(readFileSync(path.join(PUBLIC_DIR, 'build.txt'), 'utf8')); } catch { /* not built (tests, dev) */ }
const TYPES: Record<string, string> = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.glb': 'model/gltf-binary', '.ico': 'image/x-icon', '.webmanifest': 'application/manifest+json', '.json': 'application/json; charset=utf-8',
  /* 0.9.9.9.9.3: the game's fonts; robots.txt, llms.txt, the sitemap */ '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8' };

// ── accounts ──────────────────────────────────────────────────────────────────
/** Neon / any Postgres when DATABASE_URL is set; otherwise a local JSON file (wiped on Render's free disk!). */
function makeStore(): Store {
  if (process.env.DATABASE_URL) return new PgStore(process.env.DATABASE_URL);
  return new FileStore(process.env.USERS_FILE ?? path.resolve(__dirname, '../../.data/users.json'));
}
const store = makeStore();
const tokens = new TokenSigner();
const auth = new AuthService(store, tokens);
const study = new StudyService(store);
const hub = new SessionHub((userId, at) => { void store.update(userId, { lastSeen: at }).catch(() => { /* not important */ }); });
// 0.9.9.9.9.6: Kanji chess with friends (round 4: challenges from a profile, the games kept in match history)
hub.chess = new ChessHub((id, m) => { hub.sendTo(id, m); }, Date.now, Math.random, {
  invite: (friendId, from, code) => hub.sendTo(friendId, { type: 'chess_invite', from, code }),
  mayInvite: async (fromId, toId) => (await social.list(fromId)).some((f) => f.id === toId && f.status === 'accepted'),
  record: (userId, game) => { void study.addChessGame(userId, game).catch(() => { /* not important */ }); },
  // (round 5) a ranked game from the online queue moves both ratings (the ladder's 1v1 rule)
  rate: (w, b, winner) => ranked.settle([{ id: w, outcome: winner === null ? 'draw' : winner === 'w' ? 'win' : 'loss', ranked: true }, { id: b, outcome: winner === null ? 'draw' : winner === 'b' ? 'win' : 'loss', ranked: true }] as never),
});
// 0.9.9.9.9.6 (round 4): Grammar Clash, the grammar quiz for 2–8 (ranked through the ladder; the ranked service is made below)
const grammarHub = new GrammarHub((id, m) => { hub.sendTo(id, m); }, Date.now, Math.random, undefined, {
  settle: (order) => ranked.settleField(order),
  invite: (friendId, from, code) => hub.sendTo(friendId, { type: 'clash_invite', from, code }),
});
hub.grammar = grammarHub;
setInterval(() => grammarHub.sweep(), 10 * 60_000).unref();
// 0.9.9.9.7.1: the Daily challenge's words from a secret (the code is public: without it anyone can work out any
// day's ten words). At least 16 characters; set it once and keep it (see docs/SETUP.md).
const DAILY_SECRET = (process.env.DAILY_SECRET ?? '').trim();
const dailySeed = secretSeed(DAILY_SECRET);
const daily = new DailyService(store, study.progress, undefined, { seed: dailySeed });
daily.onPerfect = (id) => study.grantAchievements(id, undefined, ['perfect-day']);
const social = new SocialService(store, hub);
// 0.9.9.9.5.3: a friend coming online (or leaving) shows at once — the friends list and the lobby's invite list
// used to wait for their next refresh (the lobby's never came until the room changed)
hub.setPresenceHook((userId, online) => {
  void store.friends(userId).then((links) => {
    for (const f of links) if (f.status === 'accepted') hub.sendTo(f.id, { type: 'friend_presence', friendId: userId, online });
  }).catch(() => { /* not important */ });
});
// 0.9.9.9.5: invites reach a friend's phone while the app is closed (Firebase; FIREBASE_SERVICE_ACCOUNT)
const push = new Push(process.env.FIREBASE_SERVICE_ACCOUNT);
console.log(`Push notifications: ${push.enabled ? 'on' : 'off (set FIREBASE_SERVICE_ACCOUNT to turn them on)'}`);
/** 0.9.9.9.5.3: the notification itself, in the language of the game on that phone */
function noteFor(data: Record<string, string>, unlocks: readonly string[] | undefined): PushNote | undefined {
  const ru = (unlocks ?? []).includes('plang:ru');
  if (data.kind === 'invite') return ru
    ? { title: `${data.fromName} приглашает вас`, body: `Комната ${data.mode} · ${data.code} — нажмите, чтобы присоединиться`, tag: `invite-${data.fromId}` }
    : { title: `${data.fromName} invites you`, body: `Join their ${data.mode} room · ${data.code} - tap to join`, tag: `invite-${data.fromId}` };
  // 0.9.9.9.6: a message in the messenger
  if (data.kind === 'dm') return { title: data.fromName, body: data.text, tag: `dm-${data.fromId}` };
  return undefined;
}
hub.setNotifier(async (userId, data) => {
  if (!push.enabled) return false;
  const u = await store.findById(userId);
  const tokens = u?.pushTokens ?? [];
  if (!tokens.length) return false;
  try {
    const r = await push.send(tokens, data, data.kind === 'dm' ? 86_400 : 120, noteFor(data, u?.unlocks));
    if (r.dead.length) await store.update(userId, { pushTokens: tokens.filter((t) => !r.dead.includes(t)) });
    // 0.9.9.9.5.2: a push Google refused shows in the admin's errors (it failed without a word before)
    if (!r.sent && r.errors.length && r.dead.length < tokens.length) reportServerError('push', new Error(r.errors.join(' | ')));
    return r.sent > 0;
  } catch (e) { reportServerError('push', e); return false; }
});
// 0.9.9.9.6: the messenger — live over the game's connection, or a push when the app is closed
const messages = new MessageService(store, {
  // (0.9.9.9.6.1: muted: it still arrives, marked, and the app shows no note for it — 0.9.9.9.6.4: decided per player
  // by the service: muted chats, "only @mentions", the sender's own other screens)
  deliver: (to, message, fromName) => {
    const msg = { type: 'dm' as const, message, fromName };
    if (to === 'admins') hub.sendAdmins(msg);
    else for (const r of to) hub.sendTo(r.id, r.muted ? { ...msg, muted: true } : msg);
  },
  read: (writer, reader) => {
    const msg = { type: 'dm_read' as const, reader };
    for (const w of Array.isArray(writer) ? writer : [writer]) { if (w === 'support') hub.sendAdmins(msg); else hub.sendTo(w, msg); }
  },
  // 0.9.9.9.6.4: edits, deletions and reactions; "typing…"; a group changed; a friend's status
  update: (to, message) => { const msg = { type: 'dm_update' as const, message }; if (to === 'admins') hub.sendAdmins(msg); else for (const id of to) hub.sendTo(id, msg); },
  typing: (to, conv, from, name, on) => { for (const id of to) hub.sendTo(id, { type: 'dm_typing', conv, from, name, on }); },
  group: (to, group, event) => { for (const id of to) hub.sendTo(id, { type: 'dm_group', group, event }); },
  status: (id) => social.statusOf(id),
  push: (to, fromId, fromName, text) => { void hub.notify(to, { kind: 'dm', fromId, fromName, text: text.slice(0, 160) }); },
  online: (id) => hub.online(id),
});
hub.onInviteSent = (fromId, to, mode, code, challenge) => { void store.findById(fromId).then((u) => (u ? messages.invite(u, to, mode, code, challenge) : null)).catch(() => { /* the invite itself went out */ }); };
hub.onDmTyping = (userId, to, on) => { void store.findById(userId).then((u) => (u ? messages.typing(u, to, on) : undefined)).catch(() => { /* not important */ }); };
// 0.9.9.9.9.6: the kanji's memory stories (for the AI memory pictures)
let kanjiInfo: Record<string, unknown[]> | null = null;
function kanjiStory(ch: string): { en: string; meaning: string } | null {
  try { kanjiInfo ??= JSON.parse(readFileSync(path.join(process.cwd(), 'public', 'kanji.json'), 'utf8')) as Record<string, unknown[]>; } catch { kanjiInfo = {}; }
  const k = kanjiInfo[ch];
  return k && typeof k[5] === 'string' && k[5] ? { en: k[5], meaning: String(k[0] ?? '') } : null;
}
const recognizer = Recognizer.fromFile();
const insights = new InsightsService(store);
onServerError((message, details) => void insights.error(message, details, null));
const stories = new StoryService();
console.log(`Reading passage stories: ${stories.describe}`);
// 0.9.9.9.6.6: password-reset codes by email (SMTP_URL or RESEND_API_KEY); without email the code goes to the admin's
// inbox, so the admin can pass it on
let mailer: Mailer;
try { mailer = createMailer(); } catch (e) { console.error('[mail]', (e as Error).message); mailer = createMailer({}); }
const resetMail = async (m: ResetMail) => {
  const name = m.user.nickname || m.user.username;
  const ru = m.lang === 'ru';
  if (m.kind === 'confirm') {
    // 0.9.9.9.7: confirming an email — the code, and what to ignore if it wasn't you
    const subject = ru ? `Kanji Wizards — код подтверждения: ${m.code}` : `Kanji Wizards - your confirmation code: ${m.code}`;
    const text = ru
      ? `Здравствуйте, ${name}!\n\nВаш код подтверждения почты в Kanji Wizards: ${m.code}\n\nВведите его в игре в течение 15 минут. Если это были не вы, просто проигнорируйте письмо — без кода почта ни к какому аккаунту не привяжется.\n\n— Kanji Wizards`
      : `Hi ${name},\n\nYour Kanji Wizards email confirmation code is: ${m.code}\n\nEnter it in the game within 15 minutes. If this wasn't you, ignore this email - without the code your address isn't added to any account.\n\n— Kanji Wizards`;
    if (!mailer.enabled) { console.log(`[confirm mail] email is not set up - code for ${m.user.username}: ${m.code}`); return; }
    try { await mailer.send(m.email, subject, text); console.log(`[confirm mail] sent to ${m.user.username} (${mailer.how})`); }
    catch (e) { console.error('[confirm mail] failed:', (e as Error).message); }
    return;
  }
  const subject = ru ? `Kanji Wizards — код для сброса пароля: ${m.code}` : `Kanji Wizards - your password reset code: ${m.code}`;
  const text = ru
    ? `Здравствуйте, ${name}!\n\nВаш код для сброса пароля в Kanji Wizards: ${m.code}\n\nВведите его в игре в течение 30 минут. Если вы не просили сбросить пароль, просто не обращайте внимания на это письмо — ваш пароль не изменится.\n\n— Kanji Wizards`
    : `Hi ${name},\n\nYour Kanji Wizards password reset code is: ${m.code}\n\nEnter it in the game within 30 minutes. If you didn't ask to reset your password, ignore this email - your password stays the same.\n\n— Kanji Wizards`;
  if (mailer.enabled) {
    // (if the mail service fails, the code still reaches the admin's inbox — nobody is left locked out)
    try { await mailer.send(m.email, subject, text); console.log(`[reset mail] sent to ${m.user.username} (${mailer.how})`); return; }
    catch (e) {
      console.error('[reset mail] failed:', (e as Error).message);
      await store.addReport({ kind: 'error', userId: m.user.id, username: m.user.username, text: `Password reset asked by ${m.user.username} - code ${m.code} (30 min). The email could not be sent (${(e as Error).message.slice(0, 160)}), so pass the code on yourself.`, meta: m.email, at: Date.now() });
      return;
    }
  }
  await store.addReport({ kind: 'error', userId: m.user.id, username: m.user.username, text: `Password reset asked by ${m.user.username} - code ${m.code} (30 min). Email is not set up on the server (SMTP_URL or RESEND_API_KEY), so pass the code on yourself.`, meta: m.email, at: Date.now() });
};
const ranked = new RankedService(store); // 0.9.9.9.9: the ladder and replays
const api = createApiHandler(auth, study, { presence: (id) => hub.presence(id), daily, social, strokes: (ch) => recognizer.strokes(ch), recognize: (s) => recognizer.recognize(s, 12), readApkg: (b64) => readApkg(Buffer.from(b64, 'base64')), ...(process.env.GIPHY_API_KEY ? { gifs: new Gifs(process.env.GIPHY_API_KEY) } : {}), ...(process.env.MNEMONIC_IMAGE_KEY ? { mnemonics: new MnemonicPictures(store, { key: process.env.MNEMONIC_IMAGE_KEY, model: process.env.MNEMONIC_IMAGE_MODEL || undefined, dailyCap: Number(process.env.MNEMONIC_DAILY_CAP) || 60, story: kanjiStory }) } : {}), insights, onlineCount: () => hub.onlineCount, stories, dict: new DictService(), inviteDecline: (id, name, fromId) => hub.decline(id, name, fromId), pushOn: () => push.enabled, messages, resetMail, ranked });

// ── game ──────────────────────────────────────────────────────────────────────
const judges = createJudgePool({
  fallback: { normal: createWritingJudge(recognizer), lenient: createWritingJudge(recognizer, { lenient: true }) },
  onError: (e) => reportServerError('handwriting judge', e),
});
judges.warm();
const rooms = new RoomManager({
  saveReplay: (data) => ranked.saveReplay(data),
  // 0.9.9.9.7.2: drawings are judged on their own thread (a big one held up every battle for most of a second)
  judgeWriting: judges.normal,
  judgeDeck: judges.lenient, // Deck Duel: extra forgiving
  writableFilter: isWritable(recognizer),
  // Deck Duel drafts from both players' All spells (0.9.9.4.4)
  spellIds: async (id) => new Set((await store.cards(id)).filter((c) => (c.deck ?? 'all') === 'all').map((c) => c.vocabId)),
  // after every match: XP + missed words into each player's "Struggling spells"
  onGameStart: (mode, playerIds) => { for (const id of playerIds) void insights.event(id, `game_start:${mode}`); },
  // 0.9.9.9.9.6 (round 5): Kanji chess and Grammar Clash from the private game's lobby and the online queue
  external: (mode, players, { ranked, settings }, onEnd) => {
    if (mode === 'chess') hub.chess!.startMatch(players[0], players[1], settings.base, settings.inc, ranked, onEnd);
    else grammarHub.startMatch(players, settings.level, settings.count, ranked, onEnd);
  },
  externalLeave: (mode, id) => { if (mode === 'chess') hub.chess!.leaveUser(id); else grammarHub.leaveUser(id); },
  // 0.9.9.9.9.2: a ranked match not counted (answers faster than a person can give them): to the admin's inbox
  onSuspect: (who, mode) => {
    for (const s of who) void store.addReport({ kind: 'report', userId: s.id, username: s.name, text: `Ranked match not counted: ${s.name} answered ${s.correct} words right in ${s.avgMs} ms on average (${mode}) - faster than a person can read and type. A script?`, meta: `auto · ${mode}`, at: Date.now() }).catch(() => {});
  },
  onMatchEnd: async (mode, results) => {
    for (const r of results) void insights.event(r.id, `game_end:${mode}`);
    const out: Record<string, { gained: number; xp: number; crit: number; achievements: string[]; missed: MissedWord[]; rating?: RatingChange }> = {};
    // 0.9.9.9.9: a ranked 1v1 moves both ratings
    const ratings = await ranked.settle(results).catch((e) => { reportServerError('ranked', e); return {} as Record<string, RatingChange>; });
    // 0.9.9.3.4: "Kingslayer" — winning against an admin who played it out (no forfeit)
    const admins = new Set<string>();
    for (const r of results) if ((await store.findById(r.id))?.role === 'admin') admins.add(r.id);
    for (const r of results) {
      const beatAdmin = r.outcome === 'win' && results.some((o) => o.id !== r.id && o.outcome === 'loss' && !o.forfeited && admins.has(o.id));
      const { gained, xp, achievements, missed } = await study.recordMatch(r.id, r.outcome, r.accuracy, mode, r.missed, r.forfeited, r.vsAi, r.record, r.seen, beatAdmin);
      out[r.id] = { gained, xp, crit: await study.crit(r.id), achievements, missed, ...(ratings[r.id] ? { rating: ratings[r.id] } : {}) };
    }
    return out;
  },
});
const matchmaker = new Matchmaker(rooms);
setInterval(() => matchmaker.tick(), 2_000).unref();
auth.onBan((userId) => hub.kick(userId, 'This account has been banned.'));

// 0.9.9.4.1: the Android app from the game's own address. Opening GitHub's link from the installed game
// went through an in-app browser tab where Chrome can't ask "download this APK?" — the download failed
// at 100%. Same address = the download stays in the game's window. (0.9.9.9.7.2: apk.ts — one download at a time)
const APK_URL = process.env.APK_URL ?? 'https://github.com/Mashxur-Lee/kanji-battle/releases/latest/download/KanjiWizards.apk';
const latestApk = apkSource(APK_URL);

const compressed = new Compressed();
let pageHashes: string[] = [];
let pageHashesFor = -1;
const server = createServer(async (req, res) => {
  if (await api(req, res)) return;
  const pathOnly = (req.url ?? '/').split('?')[0];
  if (pathOnly === '/download/KanjiWizards.apk') {
    try {
      const want = new URL(req.url ?? '/', 'http://x').searchParams.get('v')?.slice(0, 32) || undefined;
      const data = await latestApk(want);
      res.writeHead(200, { 'Content-Type': 'application/vnd.android.package-archive', 'Content-Disposition': 'attachment; filename="KanjiWizards.apk"', 'Content-Length': data.length, 'Cache-Control': 'no-cache' }).end(data);
    } catch (e) {
      reportServerError('APK download', e);
      res.writeHead(302, { Location: APK_URL }).end(); // GitHub directly, then
    }
    return;
  }
  const url = pathOnly === '/' ? '/index.html' : pathOnly; // '/?anything' is the app too
  const file = path.join(PUBLIC_DIR, path.normalize(url));
  if (!file.startsWith(PUBLIC_DIR + path.sep)) { res.writeHead(403).end(); return; } // (+ sep: not a sibling folder)
  try {
    const data = (await sentCopy(url, file)) ?? await readFile(file); // (0.9.9.9.8: the page and the stylesheet without comments)
    const type = TYPES[path.extname(file)] ?? 'application/octet-stream';
    // the service worker and the page are checked for a new version every time (0.9.9.4)
    // 0.9.9.9.5: + the security headers (the page's inline script allowed by its hash)
    if (url === '/index.html' && pageHashesFor !== data.length) { pageHashes = inlineScriptHashes(data.toString('utf8')); pageHashesFor = data.length; }
    const fresh: Record<string, string> = { ...securityHeaders(pageHashes, viaHttps(req)), ...(url === '/sw.js' || url === '/index.html' ? { 'Cache-Control': 'no-cache' } : url.startsWith('/bg/') || url.startsWith('/models/') || url.startsWith('/frames/') || url.startsWith('/flames/') || url.startsWith('/fonts/') || url.startsWith('/textures/') ? { 'Cache-Control': 'public, max-age=604800' }
      // 0.9.9.9.6.5: the dictionary is asked for as /dict.json?v=<its version> — the browser may keep it a month
      : url === '/dict.json' && /[?&]v=/.test(req.url ?? '') ? { 'Cache-Control': 'public, max-age=2592000' } : {}) };
    // 0.9.9.9.9.2: the game's code and look are checked every time too (with an ETag: unchanged, only "304"). They had
    // no rule, so a phone could keep an old app.js under a new page — 0.9.9.9.7.4's code, under 0.9.9.9.8's page without
    // its push-test buttons, crashed at the start ("Cannot set properties of null (setting 'onclick')")
    if (SHELL_CODE.has(url)) {
      const tag = etagOf(url, data);
      fresh['Cache-Control'] = 'no-cache'; fresh.ETag = tag;
      if (req.headers['if-none-match'] === tag) { res.writeHead(304, fresh).end(); return; }
    }
    // text files go out gzipped (app.js, arena3d.js and the Russian meanings are large); cached per build
    // 0.9.9.9: Brotli where the browser takes it (the dictionary ~25% smaller than gzip), else gzip
    const accept = String(req.headers['accept-encoding'] ?? '');
    const enc = /\bbr\b/.test(accept) ? 'br' : /\bgzip\b/.test(accept) ? 'gzip' : '';
    if (enc && /text|json|javascript|svg|gltf/.test(type) && data.length > 1024) { // (0.9.9.9.5.2: the 3D models too — about half the size)
      // (0.9.9.9.7.2: made at build time; it was compressed here, on the server's only thread — 13 s of frozen battles)
      const gz = await compressed.get(path.relative(PUBLIC_DIR, file).split(path.sep).join('/'), data, enc);
      res.writeHead(200, { 'Content-Type': type, 'Content-Encoding': enc, Vary: 'Accept-Encoding', ...fresh }).end(gz);
      return;
    }
    res.writeHead(200, { 'Content-Type': type, ...fresh }).end(data);
  } catch {
    res.writeHead(404, { 'X-Content-Type-Options': 'nosniff' }).end('Not found');
  }
});

/** 0.9.9.9.9.2: the game's code and look, checked on every load (an ETag each, made once per build) */
const SHELL_CODE = new Set(['/app.js', '/style.css', '/arena3d.js']);
const etags = new Map<string, { len: number; tag: string }>();
function etagOf(url: string, data: Buffer): string {
  const hit = etags.get(url);
  if (hit && hit.len === data.length) return hit.tag;
  const tag = `"${createHash('sha1').update(data).digest('base64url').slice(0, 20)}"`;
  etags.set(url, { len: data.length, tag });
  return tag;
}

// Handwriting answers carry stroke data, so allow bigger frames than plain JSON messages.
const wss = new WebSocketServer({ server, maxPayload: 96 * 1024 });
// 0.9.9.9.5: at most 12 game connections from one address at once (a family or a school shares one; a script
// opening hundreds doesn't get them), and each connection may send a few messages a second — a flood is cut off
const perIp = new Map<string, number>();
wss.on('connection', (ws, ...rest: unknown[]) => {
  const req = rest[0] as IncomingMessage | undefined; // (the upgrade request: its User-Agent says app or browser)
  const ip = req ? clientIp(req) : '';
  // 0.9.9.9.8: only the game's own pages (security.ts: originAllowed)
  if (req && !originAllowed(req.headers.origin, req.headers.host)) { ws.close(1008, 'Not allowed'); return; }
  const n = (perIp.get(ip) ?? 0) + 1;
  if (n > 12) { ws.close(1008, 'Too many connections'); return; }
  perIp.set(ip, n);
  const session = new Session(rooms, auth, hub, study, (json) => ws.readyState === ws.OPEN && ws.send(json), () => ws.close(), matchmaker, social);
  session.device = deviceOf(req?.headers['user-agent']);
  session.ip = ip; // (0.9.9.9.7.2: wrong room codes are counted per address too)
  heartbeat(ws); // 0.9.9.9.7.2: a connection that stopped answering is closed (it held a seat for minutes)
  const bucket = new Bucket(60, 20);
  let dropped = 0;
  ws.on('message', (data) => {
    if (!bucket.take()) { if (++dropped > 200) ws.close(1008, 'Too many messages'); return; }
    void session.onRaw(data.toString());
  });
  ws.on('close', () => {
    session.onClose();
    const left = (perIp.get(ip) ?? 1) - 1;
    if (left > 0) perIp.set(ip, left); else perIp.delete(ip);
  });
});

// stability: an unexpected error is logged and reported, and the server keeps running for everyone else
process.on('uncaughtException', (e) => reportServerError('uncaught exception', e));
process.on('unhandledRejection', (e) => reportServerError('unhandled rejection', e));
// a restart (deploy): tell everyone, then close — the browsers reconnect by themselves
let stopping = false;
for (const sig of ['SIGTERM', 'SIGINT'] as const) {
  process.on(sig, () => {
    if (stopping) return;
    stopping = true;
    hub.broadcast({ type: 'notice', message: 'The game is updating - you\'ll be reconnected in a moment.' });
    setTimeout(() => { server.close(); void store.close?.(); void judges.close(); process.exit(0); }, 1200).unref();
  });
}

const port = Number(process.env.PORT ?? 3000);
// 0.9.9.9.5: the built-in accounts' default passwords are in the public source code — on a public server they are
// only made with passwords from the environment, and if one still has its default password it gets locked
store.init().then(() => auth.seed([
  { username: 'user', password: process.env.USER_PASSWORD ?? 'user123', role: 'user', fromEnv: !!process.env.USER_PASSWORD },
  { username: 'admin', password: process.env.ADMIN_PASSWORD ?? 'adminn123', role: 'admin', fromEnv: !!process.env.ADMIN_PASSWORD },
], isPublicServer())).then(() => runMigrations(store).catch((e) => console.error('[migrations] failed', e))).then(() => {
  server.listen(port, () => {
    console.log(`Kanji Battle running on http://localhost:${port}`);
    console.log(`Kanji Wizards v${VERSION}`);
    console.log(`Email (password resets): ${mailer.how}`);
    if (dailySeed) console.log('Daily challenge words: picked with DAILY_SECRET');
    else console.warn(`DAILY_SECRET not set${DAILY_SECRET ? ' (it needs at least 16 characters)' : ''}: anyone with the game's code can work out the Daily challenge's words - see docs/SETUP.md`);
    console.log(`Accounts: ${auth.store.name}${tokens.ephemeral ? ' · AUTH_SECRET not set: logins reset on restart' : ''}`);
    // 0.9.9.9.6.9: guests not seen for a month are removed (once at start, then daily)
    const sweep = () => auth.sweepGuests().then((n) => { if (n) console.log(`Removed ${n} guest${n === 1 ? '' : 's'} not seen for a month`); }).catch((e) => console.error('[guests]', e));
    setTimeout(sweep, 60_000).unref(); setInterval(sweep, 86_400_000).unref();
    // 0.9.9.9.7.3: photos nothing uses any more (a deleted message's, one uploaded and never sent) — a day after upload
    const sweepPhotos = () => store.sweepMedia(Date.now() - 86_400_000).then((n) => { if (n) console.log(`Removed ${n} unused photo${n === 1 ? '' : 's'}`); }).catch((e) => console.error('[photos]', e));
    setTimeout(sweepPhotos, 120_000).unref(); setInterval(sweepPhotos, 6 * 3_600_000).unref();
    // 0.9.9.9.9: replays are kept a week (0.9.9.9.9.5; saved ones for good)
    const sweepReplays = () => ranked.sweep().then((n) => { if (n) console.log(`Removed ${n} old replay${n === 1 ? '' : 's'}`); }).catch((e) => console.error('[replays]', e));
    setTimeout(sweepReplays, 180_000).unref(); setInterval(sweepReplays, 12 * 3_600_000).unref();
    const awake = keepAwake();
    if (awake) console.log(`Keep awake: asking ${awake.url} every 10 minutes (KEEP_AWAKE=0 turns it off)`);
    if (process.env.RENDER && !process.env.DATABASE_URL) {
      console.warn('DATABASE_URL is not set: accounts, XP and study sets live on Render\'s disk and are wiped on every deploy. Add your Neon connection string in Render → Environment.');
    }
    if (!process.env.ADMIN_PASSWORD) console.warn(isPublicServer() ? 'ADMIN_PASSWORD not set: no admin account with the built-in password on a public server - set ADMIN_PASSWORD to sign in as admin' : 'ADMIN_PASSWORD not set: the admin account uses the built-in development password (set ADMIN_PASSWORD)');
  });
}).catch((e) => {
  console.error('Could not start (database unreachable? check DATABASE_URL)', e);
  process.exit(1);
});
