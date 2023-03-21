import { BasePage } from './page';


const securityUrl = '/solutions/it-security-risk/'
const enterpriseRiskUrl = '/solutions/enterprise-risk-management/'
const thirdPartyRiskUrl = '/solutions/third-party-risk-management/'
const auditControlsUrl = '/solutions/audit-controls-management/'
const policyManagmentUrl = '/solutions/policy-management/'
const regManagmentUrl = '/solutions/regulatory-compliance-management/'
const dataPrivacyUrl = '/solutions/data-privacy/'
const businessManagementUrl = '/solutions/business-continuity-management/'
const reqDemoFooterBtnLoc = '.bluedeep[href*="request-a-demo"]'
const footerMenuLoc = 'ul#menu-footer-menu'

export class SolutionPage extends BasePage {

  firstSection = this.page.locator('section.hero .lazyloaded')
  lastForm = this.page.locator('section#form')
  lastFormImg = this.lastForm.locator('img.lazyloaded')
  reqDemoFooterBtn = this.page.locator(reqDemoFooterBtnLoc)
  footerMenu = this.page.locator(footerMenuLoc)
  streamlineBlockImg = this.page.locator('.item:nth-child(1) .lazyloaded')
  assetsBlockImg = this.page.locator('.item:nth-child(2) .lazyloaded')
  mitigationBlockImg = this.page.locator('.item:nth-child(3) .lazyloaded')
  contextBlockImg = this.page.locator('.item:nth-child(4) .lazyloaded')
  financialBlockImg = this.page.locator('.item:nth-child(5) .lazyloaded')
  firstToolboxImg = this.page.locator('section.tools .ft-1 .lazyloaded')
  firstAppArticle = this.page.locator('section.pad-top-std article:nth-child(1)')
  firstResourcesArticleImg = this.page.locator('section.resources article:nth-child(1) .lazy')
  secResourcesArticleImg = this.page.locator('section.resources article:nth-child(2) .lazy')

  async goto(page: 
    "security"
    |"enterpriseRisk"
    |"thirdPartyRisk"
    |"auditControl"
    |"policyManagement"
    |"regManagement"
    |"dataPrivacy"
    |"businessManagement"
    ) {
    const pages = {
      security: securityUrl,
      enterpriseRisk: enterpriseRiskUrl,
      thirdPartyRisk: thirdPartyRiskUrl,
      auditControl: auditControlsUrl,
      policyManagement: policyManagmentUrl,
      regManagement: regManagmentUrl,
      dataPrivacy: dataPrivacyUrl,
      businessManagement: businessManagementUrl
    }

    await this.page.goto(pages[page])
  }
}

export class SecurityPage extends SolutionPage {}

export class EnterpriseRiskPage extends SolutionPage {}

export class ThirdRiskPage extends SolutionPage {}

export class CompilancePage extends SolutionPage {}

export class PolicyPage extends SolutionPage {}

export class RegulatoryPage extends SolutionPage {}

export class DataPrivacyPage extends SolutionPage {}

export class OperationalPage extends SolutionPage {}
