import { MainPage } from "./main.page";


const platformUrl = '/platform/'
const featuresUrl = '/platform/features/'
const servicesUrl = '/platform/services/'
const pricingUrl = '/platform/pricing/'
const reportingUrl = '/platform/reporting/'
const riskQuontUrl = '/platform/risk-cloud-quantify/'
const integrationsUrl = '/platform/integrations/'
const ExchangeUrl = '/platform/rcx/'

export class PlatformPage extends MainPage {
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

export class OverviewPage extends PlatformPage {
  welcomeImg = this.page.locator('section.overview_2')
  pricingArticleImg = this.page.locator('[href="/platform/pricing/"] .lazy')
  enterpRiskManImg = this.page.locator('[href*="enterprise-risk"] .lazyloaded')
  solutionBtn = this.page.locator('.cards .rebrand')
  signUpFrame = this.page.locator('#iFrameResizer0')
}

export class FeaturesPage extends PlatformPage {
  featuresImg = this.page.locator('div.img.features .lazyloaded')
  workflowImg = this.page.locator('div.odd .lazyloaded')
  moreFeatures = this.page.locator('section.cards.features')
  reqDemoBtn = this.page.locator('.mrg-t-30[href*="request-a-demo"]')
}

export class ServicePage extends PlatformPage {
  servicesImg = this.page.locator('section.hero .lazyloaded')
  implementationIcon = this.page.locator('div.item-tile:nth-child(1) .lazyloaded')
  reqDemoImg = this.page.locator('section#form .lazyloaded')
  reqDemoBtn = this.page.locator('.mrg-t-30[href*="request-a-demo"]')

}
