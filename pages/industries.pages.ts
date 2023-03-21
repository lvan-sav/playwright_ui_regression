import { BasePage } from "./page";


const industriesUrl = '/our-industries/'
const softwareUrl = '/industries/software/'
const fintechUrl = '/industries/fintech/'
const telecomUrl = '/industries/telecom/'
const riskManagementUrl = '/industries/risk-management-software-for-banks/'
const insuranceUrl = '/industries/insurance/'

export class IndustriesPage extends BasePage {

  pageTitle = this.page.locator('section.hero')
  lastForm = this.page.locator('section#form')
  lastFormImg = this.lastForm.locator('img.lazyloaded')
  reqDemoFooterBtn = this.page.locator('.bluedeep[href*="request-a-demo"]')
  footerMenu = this.page.locator('ul#menu-footer-menu')
  firstContentArticle = this.page.locator('section.maincontent .item:nth-child(2) .lazyloaded')
  secContentArticle = this.page.locator('section.maincontent .item:nth-child(3) .lazyloaded')
  thirdContentArticle = this.page.locator('section.maincontent .item:nth-child(4) .lazyloaded')
  firstSolutionBlock = this.page.locator('article.solution:nth-child(1) .lazyloaded')
  firstResourcesBlock = this.page.locator('section.resources article:nth-child(1) .lazy')
  infoBlock = this.page.locator('section.offset-top')

  async goto(page: 
    "industries"|
    "software"|
    "fintech"|
    "telecom"|
    "riskManagement"|
    "insurance"
    ) {
    const pages = {
      industries: industriesUrl,
      software: softwareUrl,
      fintech: fintechUrl,
      telecom: telecomUrl,
      riskManagement: riskManagementUrl,
      insurance: insuranceUrl
    }

    await this.page.goto(pages[page])
  }
}

export class IndustriesOwerviewPage extends IndustriesPage {
  softwareArticle = this.page.locator('article.industry:nth-child(1) .lazy')
  finTechArticle = this.page.locator('article.industry:nth-child(2) .lazy')
  hospitalsArticle = this.page.locator('article.industry:nth-child(3) .lazy')
  investimentArticle = this.page.locator('article.industry:nth-child(7) .lazy')
}

export class SoftwarePage extends IndustriesPage {}

export class FinTechPage extends IndustriesPage {}

export class TelecomPage extends IndustriesPage {}

export class BankingPage extends IndustriesPage {}

export class InsurancePage extends IndustriesPage {}
