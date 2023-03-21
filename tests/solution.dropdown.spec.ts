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
    const entRiskPage = new EnterpriseRiskPage(page)

    await entRiskPage.goto('enterpriseRisk')
    await entRiskPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.streamlineBlockImg.scrollIntoViewIfNeeded()
    await entRiskPage.streamlineBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.assetsBlockImg.scrollIntoViewIfNeeded()
    await entRiskPage.assetsBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.mitigationBlockImg.scrollIntoViewIfNeeded()
    await entRiskPage.mitigationBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.contextBlockImg.scrollIntoViewIfNeeded()
    await entRiskPage.contextBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.financialBlockImg.scrollIntoViewIfNeeded()
    await entRiskPage.financialBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.firstToolboxImg.scrollIntoViewIfNeeded()
    await entRiskPage.firstToolboxImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.firstAppArticle.scrollIntoViewIfNeeded()
    await entRiskPage.firstAppArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.firstResourcesArticleImg.scrollIntoViewIfNeeded()
    await entRiskPage.firstResourcesArticleImg.waitFor()
    await entRiskPage.secResourcesArticleImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.lastForm.scrollIntoViewIfNeeded()
    await entRiskPage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await entRiskPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await entRiskPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Third-party page', async ({ page }) => {
    const thirdRiskPage = new ThirdRiskPage(page)

    await thirdRiskPage.goto('thirdPartyRisk')
    await thirdRiskPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.streamlineBlockImg.scrollIntoViewIfNeeded()
    await thirdRiskPage.streamlineBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.assetsBlockImg.scrollIntoViewIfNeeded()
    await thirdRiskPage.assetsBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.mitigationBlockImg.scrollIntoViewIfNeeded()
    await thirdRiskPage.mitigationBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.contextBlockImg.scrollIntoViewIfNeeded()
    await thirdRiskPage.contextBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.financialBlockImg.scrollIntoViewIfNeeded()
    await thirdRiskPage.financialBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.firstToolboxImg.scrollIntoViewIfNeeded()
    await thirdRiskPage.firstToolboxImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.firstAppArticle.scrollIntoViewIfNeeded()
    await thirdRiskPage.firstAppArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.firstResourcesArticleImg.scrollIntoViewIfNeeded()
    await thirdRiskPage.firstResourcesArticleImg.waitFor()
    await thirdRiskPage.secResourcesArticleImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.lastForm.scrollIntoViewIfNeeded()
    await thirdRiskPage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await thirdRiskPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await thirdRiskPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Controls Compliance page', async ({ page }) => {
    const complicatePage = new CompilancePage(page)

    await complicatePage.goto('auditControl')
    await complicatePage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.streamlineBlockImg.scrollIntoViewIfNeeded()
    await complicatePage.streamlineBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.assetsBlockImg.scrollIntoViewIfNeeded()
    await complicatePage.assetsBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.mitigationBlockImg.scrollIntoViewIfNeeded()
    await complicatePage.mitigationBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.contextBlockImg.scrollIntoViewIfNeeded()
    await complicatePage.contextBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.financialBlockImg.scrollIntoViewIfNeeded()
    await complicatePage.financialBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.firstToolboxImg.scrollIntoViewIfNeeded()
    await complicatePage.firstToolboxImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.firstAppArticle.scrollIntoViewIfNeeded()
    await complicatePage.firstAppArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.firstResourcesArticleImg.scrollIntoViewIfNeeded()
    await complicatePage.firstResourcesArticleImg.waitFor()
    await complicatePage.secResourcesArticleImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.lastForm.scrollIntoViewIfNeeded()
    await complicatePage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await complicatePage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await complicatePage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Policy page', async ({ page }) => {
    const policyPage = new PolicyPage(page)

    await policyPage.goto('policyManagement')
    await policyPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.streamlineBlockImg.scrollIntoViewIfNeeded()
    await policyPage.streamlineBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.assetsBlockImg.scrollIntoViewIfNeeded()
    await policyPage.assetsBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.mitigationBlockImg.scrollIntoViewIfNeeded()
    await policyPage.mitigationBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.contextBlockImg.scrollIntoViewIfNeeded()
    await policyPage.contextBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.firstToolboxImg.scrollIntoViewIfNeeded()
    await policyPage.firstToolboxImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.firstAppArticle.scrollIntoViewIfNeeded()
    await policyPage.firstAppArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.firstResourcesArticleImg.scrollIntoViewIfNeeded()
    await policyPage.firstResourcesArticleImg.waitFor()
    await policyPage.secResourcesArticleImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.lastForm.scrollIntoViewIfNeeded()
    await policyPage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await policyPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await policyPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Regulatory page', async ({ page }) => {
    const regulatoryPage = new RegulatoryPage(page)

    await regulatoryPage.goto('regManagement')
    await regulatoryPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.streamlineBlockImg.scrollIntoViewIfNeeded()
    await regulatoryPage.streamlineBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.assetsBlockImg.scrollIntoViewIfNeeded()
    await regulatoryPage.assetsBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.mitigationBlockImg.scrollIntoViewIfNeeded()
    await regulatoryPage.mitigationBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.firstToolboxImg.scrollIntoViewIfNeeded()
    await regulatoryPage.firstToolboxImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.firstAppArticle.scrollIntoViewIfNeeded()
    await regulatoryPage.firstAppArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.firstResourcesArticleImg.scrollIntoViewIfNeeded()
    await regulatoryPage.firstResourcesArticleImg.waitFor()
    await regulatoryPage.secResourcesArticleImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.lastForm.scrollIntoViewIfNeeded()
    await regulatoryPage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await regulatoryPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await regulatoryPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Data Privacy page', async ({ page }) => {
    const dataPrivacyPage = new DataPrivacyPage(page)

    await dataPrivacyPage.goto('dataPrivacy')
    await dataPrivacyPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.streamlineBlockImg.scrollIntoViewIfNeeded()
    await dataPrivacyPage.streamlineBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.assetsBlockImg.scrollIntoViewIfNeeded()
    await dataPrivacyPage.assetsBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.mitigationBlockImg.scrollIntoViewIfNeeded()
    await dataPrivacyPage.mitigationBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.firstToolboxImg.scrollIntoViewIfNeeded()
    await dataPrivacyPage.firstToolboxImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.firstAppArticle.scrollIntoViewIfNeeded()
    await dataPrivacyPage.firstAppArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.firstResourcesArticleImg.scrollIntoViewIfNeeded()
    await dataPrivacyPage.firstResourcesArticleImg.waitFor()
    await dataPrivacyPage.secResourcesArticleImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.lastForm.scrollIntoViewIfNeeded()
    await dataPrivacyPage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await dataPrivacyPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await dataPrivacyPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Operational Resiliency page', async ({ page }) => {
    const operationaPage = new OperationalPage(page)

    await operationaPage.goto('businessManagement')
    await operationaPage.firstSection.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.streamlineBlockImg.scrollIntoViewIfNeeded()
    await operationaPage.streamlineBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.assetsBlockImg.scrollIntoViewIfNeeded()
    await operationaPage.assetsBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.mitigationBlockImg.scrollIntoViewIfNeeded()
    await operationaPage.mitigationBlockImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.firstToolboxImg.scrollIntoViewIfNeeded()
    await operationaPage.firstToolboxImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.firstAppArticle.scrollIntoViewIfNeeded()
    await operationaPage.firstAppArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.firstResourcesArticleImg.scrollIntoViewIfNeeded()
    await operationaPage.firstResourcesArticleImg.waitFor()
    await operationaPage.secResourcesArticleImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.lastForm.scrollIntoViewIfNeeded()
    await operationaPage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await operationaPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await operationaPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
