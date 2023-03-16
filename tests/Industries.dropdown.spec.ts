import { test, expect } from '@playwright/test';
import { IndustriesPage } from '../pages/industries.pages';


test.describe('Industries pages', () => {
  test('Match snapshots on the Industries page', async ({ page }) => {
    const industriesPage = new IndustriesPage(page)
    await industriesPage.goto('industries')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 2; i++) {
      await industriesPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Softeware page', async ({ page }) => {
    const industriesPage = new IndustriesPage(page)
    await industriesPage.goto('software')
    await await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 4; i++) {
      await industriesPage.scrollPageWidth()
      await await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the FinTech page', async ({ page }) => {
    const industriesPage = new IndustriesPage(page)
    await industriesPage.goto('fintech')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 4; i++) {
      await industriesPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Telecom page', async ({ page }) => {
    const industriesPage = new IndustriesPage(page)
    await industriesPage.goto('telecom')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 4; i++) {
      await industriesPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Banking page', async ({ page }) => {
    const industriesPage = new IndustriesPage(page)
    await industriesPage.goto('riskManagement')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 4; i++) {
      await industriesPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Insurance page', async ({ page }) => {
    const industriesPage = new IndustriesPage(page)
    await industriesPage.goto('insurance')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 4; i++) {
      await industriesPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })
})
