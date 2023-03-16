import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import config from './playwright.config';


const firefoxConfig: PlaywrightTestConfig = {
    ...config,
    projects: [
        {
            name: 'firefox',
            use: {
                ...devices['Desktop Firefox'],
                viewport: { width: 1280, height: 720 },
            }
        }
    ]
}

export default firefoxConfig
