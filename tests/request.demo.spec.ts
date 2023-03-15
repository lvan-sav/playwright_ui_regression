import { test, expect } from '@playwright/test';


test.describe('Request about Demo page', () => {
    test('Match snapshots on the Request about Demo page', async ({ page }) => {
      await page.goto('/request-a-demo/')
      await page.waitForLoadState('networkidle')

      const video = page.locator('.shadow-box .video-placeholer')

      await expect(video).toBeInViewport()
      expect(await page.screenshot()).toMatchSnapshot()

      const sectionHeader = page.locator('section.review-module br')
      
      await sectionHeader.scrollIntoViewIfNeeded()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()

      await page.mouse.wheel(0, 4000)
      await page.waitForLoadState('networkidle')
      const reqDemoBtn = page.locator('#menu-footer-menu.menu')

      await expect(reqDemoBtn).toBeInViewport()
      expect(await page.screenshot()).toMatchSnapshot()
    })
})
