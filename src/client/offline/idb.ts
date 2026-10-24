// A tiny key–value store on IndexedDB (0.9.9.4): the offline snapshot and the outbox. Falls back to
// memory when IndexedDB isn't there (private windows), so nothing breaks — it just won't last.
const DB = 'kanji-wizards', STORE = 'kv';
let dbp: Promise<IDBDatabase | null> | null = null;
const mem = new Map<string, unknown>();

function open(): Promise<IDBDatabase | null> {
  dbp ??= new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB, 1);
      req.onupgradeneeded = () => req.result.createObjectStore(STORE);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
    } catch { resolve(null); }
  });
  return dbp;
}
function tx<T>(mode: IDBTransactionMode, run: (s: IDBObjectStore) => IDBRequest<T>): Promise<T | undefined> {
  return open().then((db) => new Promise((resolve) => {
    if (!db) return resolve(undefined);
    try {
      const req = run(db.transaction(STORE, mode).objectStore(STORE));
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(undefined);
    } catch { resolve(undefined); }
  }));
}
export async function get<T>(key: string): Promise<T | undefined> {
  const v = await tx<T>('readonly', (s) => s.get(key) as IDBRequest<T>);
  return v === undefined ? (mem.get(key) as T | undefined) : v;
}
export async function set(key: string, value: unknown): Promise<void> {
  mem.set(key, value);
  await tx('readwrite', (s) => s.put(value, key));
}
export async function del(key: string): Promise<void> {
  mem.delete(key);
  await tx('readwrite', (s) => s.delete(key));
}
