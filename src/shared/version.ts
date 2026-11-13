/** Shown bottom-right in the game and logged by the server on start. Bump with package.json. */
export const VERSION = '0.9.9.9.6.2';
/**
 * 0.9.9.9.6.1: the oldest Android app that has everything the game needs. The game itself (all of it, every patch)
 * comes from the server each time the app opens — only a change to the app's own code (notifications, the voice…)
 * needs a new APK. Raise this only with such a change: older apps then show "Update the app".
 */
export const APP_NEEDS = '0.9.9.9.6';
