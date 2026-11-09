// 0.9.9.9.5: hardening for a game whose code is public — anyone can read how it works, so nothing may rely on
// that being secret. Response headers (a Content-Security-Policy that only lets the game's own scripts run), the
// caller's real address behind the host's proxy, flood limits on the live connection, and no well-known
// passwords on a public server.
import { createHash } from 'node:crypto';
import type { IncomingMessage } from 'node:http';

/** sha256 hashes of the page's inline <script>s (the theme switch before the first paint), for the CSP */
export function inlineScriptHashes(html: string): string[] {
  const out: string[] = [];
  for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    out.push(`'sha256-${createHash('sha256').update(m[1], 'utf8').digest('base64')}'`);
  }
  return out;
}

/**
 * Headers for every response. The CSP: scripts only from this site (and the page's own inline script by its hash),
 * no plugins, no framing by other sites, network only to this site (and GitHub's release API for "Update the app").
 */
export function securityHeaders(scriptHashes: string[], https: boolean): Record<string, string> {
  const csp = [
    "default-src 'self'",
    `script-src 'self' ${scriptHashes.join(' ')}`.trim(),
    "style-src 'self' 'unsafe-inline'", // (styles set from code — no scripts can run from them)
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "media-src 'self' data: blob:",
    "connect-src 'self' https://api.github.com",
    "worker-src 'self'",
    "manifest-src 'self'",
    "object-src 'none'",
    "base-uri 'none'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; ');
  return {
    'Content-Security-Policy': csp,
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
    'Cross-Origin-Opener-Policy': 'same-origin',
    ...(https ? { 'Strict-Transport-Security': 'max-age=15552000' } : {}),
  };
}

/** Was this request made over https (directly, or to the host's proxy in front of us)? */
export const viaHttps = (req: IncomingMessage) => String(req.headers['x-forwarded-proto'] ?? '').split(',')[0].trim() === 'https';

/**
 * The caller's address. Behind the host's proxy it is the LAST entry of X-Forwarded-For (the proxy adds the address
 * it saw at the end) — the first entry is whatever the caller wrote there, so rate limits keyed on it could be
 * dodged by sending a new fake address each time.
 */
export function clientIp(req: IncomingMessage): string {
  const xff = String(req.headers['x-forwarded-for'] ?? '').split(',').map((s) => s.trim()).filter(Boolean);
  return xff.length ? xff[xff.length - 1] : String(req.socket.remoteAddress ?? '');
}

/**
 * A token bucket for one connection's messages: `burst` at once, refilled at `perSec`. A client sending far more
 * than any player could is cut off (the game sends a few per second at most).
 */
export class Bucket {
  private tokens: number;
  private last: number;
  constructor(private readonly burst: number, private readonly perSec: number, private readonly now: () => number = Date.now) {
    this.tokens = burst;
    this.last = now();
  }
  take(n = 1): boolean {
    const t = this.now();
    this.tokens = Math.min(this.burst, this.tokens + ((t - this.last) / 1000) * this.perSec);
    this.last = t;
    if (this.tokens < n) return false;
    this.tokens -= n;
    return true;
  }
}

/** A public server (Render, or NODE_ENV=production): no built-in accounts with the passwords in the README. */
export const isPublicServer = () => !!process.env.RENDER || process.env.NODE_ENV === 'production';
