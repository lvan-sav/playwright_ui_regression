import { test, expect } from '@playwright/test';
import { ReqDemoPage } from '../pages/request.demo.page';


test.describe('Request about Demo page', () => {
    test('Match snapshots on the Request about Demo page', async ({ page }) => {
      const reqDemoPage = new ReqDemoPage(page)
      
      await reqDemoPage.goto()
      await page.waitForTimeout(3000)

      await expect(reqDemoPage.video).toBeInViewport()
      expect(await page.screenshot()).toMatchSnapshot()

      await reqDemoPage.sectionHeader.scrollIntoViewIfNeeded()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()

      await reqDemoPage.scroll4000Px()
      await page.waitForTimeout(3000)

      await expect(reqDemoPage.reqDemoBtn).toBeInViewport()
      expect(await page.screenshot()).toMatchSnapshot()
    })
})
