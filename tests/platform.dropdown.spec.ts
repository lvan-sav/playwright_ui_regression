import { test, expect } from '@playwright/test';


test.describe('Platform dropdown pages', () => {
  test('Match snapshots on the Platform page', async ({ page }) => {
    await page.goto('/platform/')
    await page.waitForLoadState('load')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 5; i++) {
      await page.mouse.wheel(0, 720)
      await page.waitForLoadState('load')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Features page', async ({ page }) => {
    await page.goto('/platform/features/')
    await page.waitForLoadState('load')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 6; i++) {
      await page.mouse.wheel(0, 720)
      await page.waitForLoadState('load')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Services page', async ({ page }) => {
    await page.goto('/platform/services/')
    await page.waitForLoadState('load')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 4; i++) {
      await page.mouse.wheel(0, 720)
      await page.waitForLoadState('load')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Pricing page', async ({ page }) => {
    await page.goto('/platform/pricing/')
    await page.waitForLoadState('load')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await page.mouse.wheel(0, 720)
      await page.waitForLoadState('load')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Reporting page', async ({ page }) => {
    await page.goto('/platform/reporting/')
    await page.waitForLoadState('load')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 4; i++) {
      await page.mouse.wheel(0, 720)
      await page.waitForLoadState('load')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Risk quontity page', async ({ page }) => {
    await page.goto('/platform/risk-cloud-quantify/')
    await page.waitForLoadState('load')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await page.mouse.wheel(0, 720)
      await page.waitForLoadState('load')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Integrations page', async ({ page }) => {
    await page.goto('/platform/integrations/')
    await page.waitForLoadState('load')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await page.mouse.wheel(0, 720)
      await page.waitForLoadState('load')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Risk Exchange page', async ({ page }) => {
    await page.goto('/platform/rcx/')
    await page.waitForLoadState('load')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await page.mouse.wheel(0, 720)
      await page.waitForLoadState('load')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })
})
