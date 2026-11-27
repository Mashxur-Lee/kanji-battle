// 0.9.9.9.9.6 (round 7): the end-to-end tests (npm run test:e2e) — a real browser plays the game the way a person
// does, on a computer screen and on a phone screen.
// They run against a server of their own: port 3998, data in a throwaway file in the system's temp folder, no
// database (DATABASE_URL is emptied), so real accounts are never touched. KW_E2E=1 lets that server make many test
// accounts (see http.ts — ignored whenever a database is set).
// The browser is the Chrome installed on the computer (the CI runners have it too), so nothing big is downloaded.
import { defineConfig, devices } from '@playwright/test';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const PORT = 3998;
const DATA = join(tmpdir(), `kw-e2e-${Date.now().toString(36)}.json`);

export default defineConfig({
  testDir: 'e2e',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  fullyParallel: false,
  workers: 1,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { outputFolder: 'test-results/e2e-report', open: 'never' }]],
  outputDir: 'test-results/e2e-artifacts',
  use: {
    baseURL: `http://localhost:${PORT}`,
    channel: 'chrome',
    serviceWorkers: 'block', // (each test sees the page as served now, not a copy kept from an earlier test)
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'computer', use: { viewport: { width: 1440, height: 900 } } },
    // a phone: its size, touch, a phone's browser — what the Android app shows (the app itself is a WebView of this page)
    { name: 'phone', use: { ...devices['Pixel 7'], channel: 'chrome' } },
  ],
  webServer: {
    command: 'npm run build:client && npx tsx src/server/index.ts',
    url: `http://localhost:${PORT}/`,
    timeout: 180_000,
    reuseExistingServer: false,
    env: { PORT: String(PORT), USERS_FILE: DATA, DATABASE_URL: '', KW_E2E: '1', ADMIN_PASSWORD: 'e2e-admin-pass-123', FIREBASE_SERVICE_ACCOUNT: '', GIPHY_API_KEY: '', MNEMONIC_IMAGE_KEY: '' },
  },
});
