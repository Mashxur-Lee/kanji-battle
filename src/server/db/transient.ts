/**
 * 0.9.9.9.5: a database connection that failed while it was being opened — the free database sleeps after a few
 * quiet minutes and waking it can take longer than one attempt ("Authentication timed out", "write CONNECT_TIMEOUT",
 * "Client network socket disconnected before secure TLS connection was established"). The query never reached the
 * database, so trying again is safe; these filled the admin's Inbox.
 */
const CODES = new Set(['CONNECT_TIMEOUT', 'CONNECTION_CLOSED', 'CONNECTION_ENDED', 'CONNECTION_DESTROYED', 'ECONNRESET', 'ECONNREFUSED', 'ETIMEDOUT', 'EPIPE', 'EAI_AGAIN', 'ENOTFOUND', '57P01', '57P03', '53300', '08000', '08001', '08003', '08006']);
const MESSAGES = /authentication timed out|before secure TLS connection was established|terminating connection due to administrator command|connection terminated|server closed the connection|the database system is (starting up|shutting down)|too many connections|connect(ion)? timeout|Couldn't connect to compute node|compute.*(waking|suspended)/i;

export function isTransientDbError(e: unknown): boolean {
  if (!e || typeof e !== 'object') return false;
  const x = e as { code?: unknown; message?: unknown; errno?: unknown };
  if (typeof x.code === 'string' && CODES.has(x.code)) return true;
  return typeof x.message === 'string' && MESSAGES.test(x.message);
}

/** Waits a moment between tries (the database may still be waking up). */
export const retryDelay = (attempt: number) => new Promise((r) => setTimeout(r, 300 + attempt * attempt * 700));
