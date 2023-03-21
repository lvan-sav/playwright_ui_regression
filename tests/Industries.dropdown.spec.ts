import { test, expect } from '@playwright/test';
import { 
  IndustriesOwerviewPage,
  SoftwarePage,
  FinTechPage,
  TelecomPage,
  BankingPage,
  InsurancePage
 } from '../pages/industries.pages';


test.describe('Industries pages', () => {
  test('Match snapshots on the Industries page', async ({ page }) => {
    const industriesPage = new IndustriesOwerviewPage(page)
    
    await industriesPage.goto('industries')
    await industriesPage.pageTitle.waitFor()
    await industriesPage.softwareArticle.waitFor()
    await industriesPage.hospitalsArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await industriesPage.softwareArticle.scrollIntoViewIfNeeded()
    await industriesPage.softwareArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await industriesPage.investimentArticle.scrollIntoViewIfNeeded()
    await industriesPage.investimentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await industriesPage.lastForm.scrollIntoViewIfNeeded()
    await industriesPage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await industriesPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await industriesPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Softeware page', async ({ page }) => {
    const softwarePage = new SoftwarePage(page)

    await softwarePage.goto('software')
    await softwarePage.pageTitle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.firstContentArticle.scrollIntoViewIfNeeded()
    await softwarePage.firstContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.secContentArticle.scrollIntoViewIfNeeded()
    await softwarePage.secContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.thirdContentArticle.scrollIntoViewIfNeeded()
    await softwarePage.thirdContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.firstSolutionBlock.scrollIntoViewIfNeeded()
    await softwarePage.firstSolutionBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.firstResourcesBlock.scrollIntoViewIfNeeded()
    await softwarePage.firstResourcesBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
    
    await softwarePage.lastForm.scrollIntoViewIfNeeded()
    await softwarePage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await softwarePage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the FinTech page', async ({ page }) => {
    const finTechPage = new FinTechPage(page)

    await finTechPage.goto('fintech')
    await finTechPage.pageTitle.waitFor()
    await finTechPage.infoBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.firstContentArticle.scrollIntoViewIfNeeded()
    await finTechPage.firstContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.secContentArticle.scrollIntoViewIfNeeded()
    await finTechPage.secContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.thirdContentArticle.scrollIntoViewIfNeeded()
    await finTechPage.thirdContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.firstSolutionBlock.scrollIntoViewIfNeeded()
    await finTechPage.firstSolutionBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.firstResourcesBlock.scrollIntoViewIfNeeded()
    await finTechPage.firstResourcesBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
    
    await finTechPage.lastForm.scrollIntoViewIfNeeded()
    await finTechPage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await finTechPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Telecom page', async ({ page }) => {
    const telecomPage = new TelecomPage(page)

    await telecomPage.goto('telecom')
    await telecomPage.pageTitle.waitFor()
    await telecomPage.infoBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.firstContentArticle.scrollIntoViewIfNeeded()
    await telecomPage.firstContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.secContentArticle.scrollIntoViewIfNeeded()
    await telecomPage.secContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.thirdContentArticle.scrollIntoViewIfNeeded()
    await telecomPage.thirdContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.firstSolutionBlock.scrollIntoViewIfNeeded()
    await telecomPage.firstSolutionBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.firstResourcesBlock.scrollIntoViewIfNeeded()
    await telecomPage.firstResourcesBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
    
    await telecomPage.lastForm.scrollIntoViewIfNeeded()
    await telecomPage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await telecomPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Banking page', async ({ page }) => {
    const bankingPage = new BankingPage(page)

    await bankingPage.goto('riskManagement')
    await bankingPage.pageTitle.waitFor()
    await bankingPage.infoBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.firstContentArticle.scrollIntoViewIfNeeded()
    await bankingPage.firstContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.secContentArticle.scrollIntoViewIfNeeded()
    await bankingPage.secContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.thirdContentArticle.scrollIntoViewIfNeeded()
    await bankingPage.thirdContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.firstSolutionBlock.scrollIntoViewIfNeeded()
    await bankingPage.firstSolutionBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.firstResourcesBlock.scrollIntoViewIfNeeded()
    await bankingPage.firstResourcesBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
    
    await bankingPage.lastForm.scrollIntoViewIfNeeded()
    await bankingPage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await bankingPage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Insurance page', async ({ page }) => {
    const insurancePage = new InsurancePage(page)

    await insurancePage.goto('insurance')
    await insurancePage.pageTitle.waitFor()
    await insurancePage.infoBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.firstContentArticle.scrollIntoViewIfNeeded()
    await insurancePage.firstContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.secContentArticle.scrollIntoViewIfNeeded()
    await insurancePage.secContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.thirdContentArticle.scrollIntoViewIfNeeded()
    await insurancePage.thirdContentArticle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.firstSolutionBlock.scrollIntoViewIfNeeded()
    await insurancePage.firstSolutionBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.firstResourcesBlock.scrollIntoViewIfNeeded()
    await insurancePage.firstResourcesBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
    
    await insurancePage.lastForm.scrollIntoViewIfNeeded()
    await insurancePage.lastFormImg.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await insurancePage.footerMenu.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
