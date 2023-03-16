import { test, expect } from '@playwright/test';
import { SolutionPage } from '../pages/solutions.pages'


test.describe('Solution dropdown', () => {
  test('Match snapshots on the Cyber risk page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)
    
    await solutionPage.goto('security')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 12; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Enterprise risk page', async ({ page })  => {
    const solutionPage = new SolutionPage(page)
    
    await solutionPage.goto('enterpriseRisk')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Third-party page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('thirdPartyRisk')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 6; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Controls Compliance page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('auditControl')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Policy page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('policyManagment')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 6; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Regulatory page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('regManagment')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 6; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Data Privacy page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('dataPrivacy')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 6; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Operational Resiliency page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('businessManagment')
    await page.waitForTimeout(3000)
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 5; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForTimeout(3000)
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })
})
