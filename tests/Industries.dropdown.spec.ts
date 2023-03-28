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

    await industriesPage.scrollToSoftwareArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await industriesPage.scrollToInvestimentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await industriesPage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await industriesPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Softeware page', async ({ page }) => {
    const softwarePage = new SoftwarePage(page)

    await softwarePage.goto('software')
    await softwarePage.pageTitle.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.scrollToContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.scrollToSecContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.scrollToThirdContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.scrollToFirstSolutionBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.scrollToResourcesBlock()
    expect(await page.screenshot()).toMatchSnapshot()
    
    await softwarePage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await softwarePage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the FinTech page', async ({ page }) => {
    const finTechPage = new FinTechPage(page)

    await finTechPage.goto('fintech')
    await finTechPage.pageTitle.waitFor()
    await finTechPage.infoBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.scrollToContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.scrollToSecContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.scrollToThirdContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.scrollToFirstSolutionBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.scrollToResourcesBlock()
    expect(await page.screenshot()).toMatchSnapshot()
    
    await finTechPage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await finTechPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Telecom page', async ({ page }) => {
    const telecomPage = new TelecomPage(page)

    await telecomPage.goto('telecom')
    await telecomPage.pageTitle.waitFor()
    await telecomPage.infoBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.scrollToContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.scrollToSecContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.scrollToThirdContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.scrollToFirstSolutionBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.scrollToResourcesBlock()
    expect(await page.screenshot()).toMatchSnapshot()
    
    await telecomPage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await telecomPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshots on the Banking page', async ({ page }) => {
    const bankingPage = new BankingPage(page)

    await bankingPage.goto('riskManagement')
    await bankingPage.pageTitle.waitFor()
    await bankingPage.infoBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.scrollToContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.scrollToSecContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.scrollToThirdContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.scrollToFirstSolutionBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.scrollToResourcesBlock()
    expect(await page.screenshot()).toMatchSnapshot()
    
    await bankingPage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await bankingPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Match snapshot on the Insurance page', async ({ page }) => {
    const insurancePage = new InsurancePage(page)

    await insurancePage.goto('insurance')
    await insurancePage.pageTitle.waitFor()
    await insurancePage.infoBlock.waitFor()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.scrollToContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.scrollToSecContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.scrollToThirdContentArticle()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.scrollToFirstSolutionBlock()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.scrollToResourcesBlock()
    expect(await page.screenshot()).toMatchSnapshot()
    
    await insurancePage.scrollToLastForm()
    expect(await page.screenshot()).toMatchSnapshot()

    await insurancePage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
