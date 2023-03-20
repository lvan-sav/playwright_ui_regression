import { test, expect } from '@playwright/test';
import { 
  SecurityPage
 } from '../pages/solutions.pages'


test.describe('Solution dropdown', () => {
  test.only('Match snapshots on the Cyber risk page', async ({ page }) => {
    const securityPage = new SecurityPage(page)

    await securityPage.goto('security')
    await securityPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.streamlineBlockImg.scrollIntoViewIfNeeded()
    await securityPage.streamlineBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.assetsBlockImg.scrollIntoViewIfNeeded()
    await securityPage.assetsBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.mitigationBlockImg.scrollIntoViewIfNeeded()
    await securityPage.mitigationBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.contextBlockImg.scrollIntoViewIfNeeded()
    await securityPage.contextBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.financialBlockImg.scrollIntoViewIfNeeded()
    await securityPage.financialBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.firstToolboxImg.scrollIntoViewIfNeeded()
    await securityPage.firstToolboxImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.firstAppArticle.scrollIntoViewIfNeeded()
    await securityPage.firstAppArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.firstResourcesArticleImg.scrollIntoViewIfNeeded()
    await securityPage.firstResourcesArticleImg.waitFor()
    await securityPage.secResourcesArticleImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.lastForm.scrollIntoViewIfNeeded()
    await securityPage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await securityPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Enterprise risk page', async ({ page })  => {
    const solutionPage = new SolutionPage(page)
    
    await solutionPage.goto('enterpriseRisk')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Third-party page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('thirdPartyRisk')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 6; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Controls Compliance page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('auditControl')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 7; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Policy page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('policyManagement')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 6; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshots on the Regulatory page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('regManagement')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 6; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Data Privacy page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('dataPrivacy')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 6; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })

  test('Match snapshot on the Operational Resiliency page', async ({ page }) => {
    const solutionPage = new SolutionPage(page)

    await solutionPage.goto('businessManagement')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()

    for(let i = 0; i < 5; i++) {
      await solutionPage.scrollPageWidth()
      await page.waitForLoadState('networkidle')
      expect(await page.screenshot()).toMatchSnapshot()
    }
  })
})
