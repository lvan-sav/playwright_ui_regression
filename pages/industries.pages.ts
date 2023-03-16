import { BasePage } from "./page";


const industriesUrl = '/our-industries/'
const softwareUrl = '/industries/software/'
const fintechUrl = '/industries/fintech/'
const telecomUrl = '/industries/telecom/'
const riskManagementUrl = '/industries/risk-management-software-for-banks/'
const insuranceUrl = '/industries/insurance/'

export class IndustriesPage extends BasePage {
  async goto(page: string) {
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
