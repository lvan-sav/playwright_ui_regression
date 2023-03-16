import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: '../tests',
  timeout: 120 * 1000,
  expect: {
    timeout: 10000,
    toMatchSnapshot: { maxDiffPixelRatio: 0.1 }
  },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 3 : 1,
  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],
  use: {
    actionTimeout: 0,
    baseURL: 'https://www.logicgate.com',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
