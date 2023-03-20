import { test, expect } from '@playwright/test';
import { PlatformPage, OverviewPage, FeaturesPage, ServicePage, PricingPage, ReportingPage, RiskQuontPage } from '../pages/platform.pages'


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
    const featuresPage = new FeaturesPage(page)

    await featuresPage.goto('features')
    await featuresPage.featuresImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await featuresPage.workflowImg.scrollIntoViewIfNeeded()
    await featuresPage.workflowImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await featuresPage.moreFeatures.scrollIntoViewIfNeeded()
    await featuresPage.moreFeatures.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await featuresPage.reqDemoBtn.scrollIntoViewIfNeeded()
    await featuresPage.reqDemoBtn.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await featuresPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await featuresPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Services page', async ({ page }) => {
    const servicesPage = new ServicePage(page)
    
    await servicesPage.goto('services')
    await servicesPage.servicesImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await servicesPage.implementationIcon.scrollIntoViewIfNeeded()
    await servicesPage.implementationIcon.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await servicesPage.reqDemoBtn.scrollIntoViewIfNeeded()
    await servicesPage.reqDemoImg.waitFor()
    await servicesPage.reqDemoBtn.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await servicesPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await servicesPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Pricing page', async ({ page }) => {
    const pricingPage = new PricingPage(page)

    await pricingPage.goto('pricing')
    await pricingPage.pricingSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await pricingPage.appBlockIcon.scrollIntoViewIfNeeded()
    await pricingPage.appBlockIcon.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await pricingPage.testimonialBlock.scrollIntoViewIfNeeded()
    await pricingPage.testimonalImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await pricingPage.faqBlock.scrollIntoViewIfNeeded()
    await pricingPage.faqBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await pricingPage.customPriceBotForm.scrollIntoViewIfNeeded()
    await pricingPage.customPriceBotForm.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await pricingPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await pricingPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Reporting page', async ({ page }) => {
    const reportingPage = new ReportingPage(page)
  
    await reportingPage.goto('reporting')
    await reportingPage.riskImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await reportingPage.featuresFirstBlockImg.scrollIntoViewIfNeeded()
    await reportingPage.featuresFirstBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await reportingPage.requestDemoForm.scrollIntoViewIfNeeded()
    await reportingPage.requestDemoImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await reportingPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await reportingPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Risk quontity page', async ({ page }) => {
    const riskQuontPage = new RiskQuontPage(page)

    await riskQuontPage.goto("riskQuont")
    await riskQuontPage.riskImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.financialImg.scrollIntoViewIfNeeded()
    await riskQuontPage.financialImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.economicImg.scrollIntoViewIfNeeded()
    await riskQuontPage.economicImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.strategicImg.scrollIntoViewIfNeeded()
    await riskQuontPage.strategicImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.firstArticleBlockImg.scrollIntoViewIfNeeded()
    await riskQuontPage.firstArticleBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.signMeBlock.scrollIntoViewIfNeeded()
    await riskQuontPage.signMeForm.waitFor()
    await riskQuontPage.signMeImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await riskQuontPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
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
