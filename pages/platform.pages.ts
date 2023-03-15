import { BasePage } from './page'


const platformUrl = '/platform/'
const featuresUrl = '/platform/features/'
const servicesUrl = '/platform/pricing/'
const pricingUrl = '/platform/pricing/'
const reportingUrl = '/platform/reporting/'
const riskQuontUrl = '/platform/risk-cloud-quantify/'
const integrationsUrl = '/platform/integrations/'
const ExchangeUrl = '/platform/rcx/'

export class PlatformPage extends BasePage {
  async goto(page?: string) {
    if (page === undefined) return await this.page.goto(platformUrl)
    
    const pages = {
      platform: platformUrl,
      features: featuresUrl,
      services: servicesUrl,
      pricing: pricingUrl,
      reporting: reportingUrl,
      riskQuont: riskQuontUrl,
      integrations: integrationsUrl,
      exchange: ExchangeUrl
    }
    await this.page.goto(pages[page])
  }

}
