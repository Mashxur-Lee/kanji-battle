// Browser stand-ins for the few Node modules the server's study code imports (0.9.9.4). The offline engine
// bundles StudyService, DailyService and the API router; only randomUUID is ever called in the browser —
// the rest belongs to code paths (files, passwords) the engine never takes.
const no = (name: string) => () => { throw new Error(`${name} is not available offline`); };
export const randomUUID = () => (typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, () => (Math.random() * 16 | 0).toString(16)));
export const randomBytes = no('randomBytes');
export const scrypt = no('scrypt');
export const timingSafeEqual = no('timingSafeEqual');
export const createHmac = no('createHmac');
export const existsSync = () => false;
export const mkdirSync = no('mkdirSync');
export const readFileSync = no('readFileSync');
export const renameSync = no('renameSync');
export const writeFileSync = no('writeFileSync');
const path = { resolve: (...p: string[]) => p.join('/'), dirname: (p: string) => p.replace(/\/[^/]*$/, ''), join: (...p: string[]) => p.join('/') };
export default path;
