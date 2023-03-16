import { test, expect } from '@playwright/test';
import { PlatformPage } from '../pages/platform.pages'


test.describe('Platform dropdown pages', () => {
  test('Match snapshots on the Platform page', async ({ page }) => {
    const platformPage = new PlatformPage(page)
    
    await platformPage.goto()
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 5; i++) {
      await platformPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
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
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await platformPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })
})
