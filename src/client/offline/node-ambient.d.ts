// Type stand-ins so the client typecheck can follow the offline engine into the server's study code
// (0.9.9.4). The bundle swaps these modules for offline/node-shim.ts; nothing here runs in the browser.
declare var process: { env: Record<string, string | undefined> };
declare var __dirname: string;
declare var Buffer: any;
type Buffer = any;
declare module 'node:crypto' {
  export const randomUUID: () => string;
  export const randomBytes: any, timingSafeEqual: any, createHmac: any;
  export function scrypt(pw: string, salt: any, len: number, opts: object, cb: (e: Error | null, k: any) => void): void;
}
declare module 'node:fs' { export const existsSync: any, mkdirSync: any, readFileSync: any, renameSync: any, writeFileSync: any; }
declare module 'node:path' { const path: any; export default path; }
