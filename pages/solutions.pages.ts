import { BasePage } from './page';


const securityUrl = '/solutions/it-security-risk/'
const enterpriseRiskUrl = '/solutions/enterprise-risk-management/'
const thirdPartyRiskUrl = '/solutions/third-party-risk-management/'
const auditControlsUrl = '/solutions/audit-controls-management/'
const policyManagmentUrl = '/solutions/policy-management/'
const regManagmentUrl = '/solutions/regulatory-compliance-management/'
const dataPrivacyUrl = '/solutions/data-privacy/'
const businessManagementUrl = '/solutions/business-continuity-management/'

export class SolutionPage extends BasePage {
  async goto(page: string) {
    const pages = {
      security: securityUrl,
      enterpriseRisk: enterpriseRiskUrl,
      thirdPartyRisk: thirdPartyRiskUrl,
      auditControl: auditControlsUrl,
      policyManagment: policyManagmentUrl,
      regManagment: regManagmentUrl,
      dataPrivacy: dataPrivacyUrl,
      businessManagment: businessManagementUrl
    }

    await this.page.goto(pages[page])
  }
}
