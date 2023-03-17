import { test, expect } from '@playwright/test';
import { PlatformPage, OverviewPage } from '../pages/platform.pages'


test.describe('Platform dropdown pages', () => {
  test('Match snapshots on the Platform Overview page', async ({ page }) => {
    const overviewPage = new OverviewPage(page)
    
    await overviewPage.goto()
    await overviewPage.welcomeImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await overviewPage.pricingArticleImg.scrollIntoViewIfNeeded()
    await overviewPage.pricingArticleImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await overviewPage.solutionBtn.scrollIntoViewIfNeeded()
    await overviewPage.enterpRiskManImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await overviewPage.signUpFrame.scrollIntoViewIfNeeded()
    await overviewPage.signUpFrame.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await overviewPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await overviewPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Features page', async ({ page }) => {
    const platformPage = new PlatformPage(page)

    await platformPage.goto('features')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 6; i++) {
      await platformPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Services page', async ({ page }) => {
    const platformPage = new PlatformPage(page)
    
    await platformPage.goto('services')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 4; i++) {
      await platformPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Pricing page', async ({ page }) => {
    const platformPage = new PlatformPage(page)
  
    await platformPage.goto('pricing')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await platformPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Reporting page', async ({ page }) => {
    const platformPage = new PlatformPage(page)
  
    await platformPage.goto('reporting')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 4; i++) {
      await platformPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Risk quontity page', async ({ page }) => {
    const platformPage = new PlatformPage(page)
  
    await platformPage.goto('riskQuont')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await platformPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Integrations page', async ({ page }) => {
    const platformPage = new PlatformPage(page)
  
    await platformPage.goto('integrations')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await platformPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Risk Exchange page', async ({ page }) => {
    const platformPage = new PlatformPage(page)
  
    await platformPage.goto('exchange')
    await await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await platformPage.scrollPageWidth()
      await await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })
})
