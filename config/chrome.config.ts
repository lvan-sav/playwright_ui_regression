import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import config from './playwright.config';


const chromeConfig: PlaywrightTestConfig = {
    ...config,
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                viewport: { width: 1280, height: 720 },
            }
        }
    ]
}

export default chromeConfig
