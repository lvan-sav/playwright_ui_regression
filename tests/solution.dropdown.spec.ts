import { test, expect } from '@playwright/test';
import { 
  SecurityPage,
  EnterpriseRiskPage,
  ThirdRiskPage,
  CompilancePage,
  PolicyPage,
  RegulatoryPage,
  DataPrivacyPage,
  OperationalPage
 } from '../pages/solutions.pages'


test.describe('Solution dropdown', () => {
  test('Match snapshots on the Cyber risk page', async ({ page }) => {
    const securityPage = new SecurityPage(page)

    await securityPage.goto('security')
    await securityPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.scrollToStreamlineBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.scrollToAssetsBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.scrollToMitigationBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.scrollToContextBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.scrollToFinancialBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.scrollToFirstToolbox()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.scrollToFirstAppArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.scrollToResourcesArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await securityPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Enterprise risk page', async ({ page })  => {
    const entRiskPage = new EnterpriseRiskPage(page)

    await entRiskPage.goto('enterpriseRisk')
    await entRiskPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.scrollToStreamlineBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.scrollToAssetsBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.scrollToMitigationBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.scrollToContextBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.scrollToFinancialBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.scrollToFirstToolbox()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.scrollToFirstAppArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.scrollToResourcesArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Third-party page', async ({ page }) => {
    const thirdRiskPage = new ThirdRiskPage(page)

    await thirdRiskPage.goto('thirdPartyRisk')
    await thirdRiskPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.scrollToStreamlineBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.scrollToAssetsBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.scrollToMitigationBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.scrollToContextBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.scrollToFinancialBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.scrollToFirstToolbox()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.scrollToFirstAppArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.scrollToResourcesArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Controls Compliance page', async ({ page }) => {
    const complicatePage = new CompilancePage(page)

    await complicatePage.goto('auditControl')
    await complicatePage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.scrollToStreamlineBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.scrollToAssetsBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.scrollToMitigationBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.scrollToContextBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.scrollToFinancialBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.scrollToFirstToolbox()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.scrollToFirstAppArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.scrollToResourcesArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Policy page', async ({ page }) => {
    const policyPage = new PolicyPage(page)

    await policyPage.goto('policyManagement')
    await policyPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.scrollToStreamlineBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.scrollToAssetsBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.scrollToMitigationBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.scrollToContextBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.scrollToFirstToolbox()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.scrollToFirstAppArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.scrollToResourcesArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Regulatory page', async ({ page }) => {
    const regulatoryPage = new RegulatoryPage(page)

    await regulatoryPage.goto('regManagement')
    await regulatoryPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.scrollToStreamlineBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.scrollToAssetsBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.scrollToMitigationBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.scrollToFirstToolbox()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.scrollToFirstAppArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.scrollToResourcesArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Data Privacy page', async ({ page }) => {
    const dataPrivacyPage = new DataPrivacyPage(page)

    await dataPrivacyPage.goto('dataPrivacy')
    await dataPrivacyPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.scrollToStreamlineBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.scrollToAssetsBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.scrollToMitigationBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.scrollToFirstToolbox()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.scrollToFirstAppArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.scrollToResourcesArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Operational Resiliency page', async ({ page }) => {
    const operationaPage = new OperationalPage(page)

    await operationaPage.goto('businessManagement')
    await operationaPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.scrollToStreamlineBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.scrollToAssetsBlockImg()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.scrollToMitigationBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.scrollToFirstToolbox()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.scrollToFirstAppArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.scrollToResourcesArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
