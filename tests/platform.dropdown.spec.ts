import { test, expect } from '@playwright/test';
import { 
  OverviewPage, 
  FeaturesPage, 
  ServicePage, 
  PricingPage, 
  ReportingPage, 
  RiskQuontPage,
  IntegrationsPage,
  ExchangePage
 } from '../pages/platform.pages'


test.describe('Platform dropdown pages', () => {
  test('Match snapshots on the Platform Overview page', async ({ page }) => {
    const overviewPage = new OverviewPage(page)
    
    await overviewPage.goto()
    await overviewPage.welcomeImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await overviewPage.scrollToPricingArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await overviewPage.scrollToRiskManagement()
    expect(await page.screenshot()).toMatchSnapshot()

    await overviewPage.scrollToSignUpFrame()
    expect(await page.screenshot()).toMatchSnapshot()

    await overviewPage.scrollToFooterBtn()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Features page', async ({ page }) => {
    const featuresPage = new FeaturesPage(page)

    await featuresPage.goto('features')
    await featuresPage.featuresImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await featuresPage.scrollToWorkflowBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await featuresPage.scrollToMoreFeaturesBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await featuresPage.scrollToReqdemo()
    expect(await page.screenshot()).toMatchSnapshot()

    await featuresPage.scrollToFooterBtn()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Services page', async ({ page }) => {
    const servicesPage = new ServicePage(page)
    
    await servicesPage.goto('services')
    await servicesPage.servicesImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await servicesPage.scrollToImplementStateBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await servicesPage.scrollToReqDemo()
    expect(await page.screenshot()).toMatchSnapshot()

    await servicesPage.scrollToFooterBtn()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Pricing page', async ({ page }) => {
    const pricingPage = new PricingPage(page)

    await pricingPage.goto('pricing')
    await pricingPage.pricingSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await pricingPage.scrollToAppBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await pricingPage.scrollToTestimonalBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await pricingPage.scrollToFaqBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await pricingPage.scrollToPriceBotForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await pricingPage.scrollToFooterBtn()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Reporting page', async ({ page }) => {
    const reportingPage = new ReportingPage(page)
  
    await reportingPage.goto('reporting')
    await reportingPage.riskImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await reportingPage.scrollToFeaturesBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await reportingPage.scrollToReqDemoForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await reportingPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Risk quontity page', async ({ page }) => {
    const riskQuontPage = new RiskQuontPage(page)

    await riskQuontPage.goto("riskQuont")
    await riskQuontPage.riskImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.scrollToFinancialImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.scrollToEconomicImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.scrollToStrategicImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.scrollToFirstArticleBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.scrollToSignMeBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await riskQuontPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Integrations page', async ({ page }) => {
    const integrationsPage = new IntegrationsPage(page)

    await integrationsPage.goto('integrations')
    await integrationsPage.integrationImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await integrationsPage.scrollToConnectBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await integrationsPage.scrollToTicketingBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await integrationsPage.scrollToManagementBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await integrationsPage.scrollToDataAnal()
    expect(await page.screenshot()).toMatchSnapshot()

    await integrationsPage.scrollToWorkflowBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await integrationsPage.scrollToWorkflowBlockForstImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await integrationsPage.scrollToFirstArticleImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await integrationsPage.scrollToArticlePost()
    expect(await page.screenshot()).toMatchSnapshot()

    await integrationsPage.scrollToDemoForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await integrationsPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Risk Exchange page', async ({ page }) => {
    const exchangePage = new ExchangePage(page)

    await exchangePage.goto('exchange')
    await exchangePage.exchangeVideo.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await exchangePage.scrollToAppBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await exchangePage.scrollToIntegrationBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await exchangePage.scrollToCommunityBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await exchangePage.scrollToDemoForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await exchangePage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
