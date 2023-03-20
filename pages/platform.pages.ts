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
  async goto(page?: 
    "platform"
    |"features"
    |"services"
    |"pricing"
    |"reporting"
    |"riskQuont"
    |"integrations"
    |"exchange") {
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

export class PricingPage extends PlatformPage {
  customPricingForm = this.page.frameLocator('iFrameResizer0')
  pricingSection = this.page.locator('section.Pricing')
  appBlockIcon = this.page.locator('.mo-1 .lazyloaded')
  testimonialBlock = this.page.locator('section.testimonial')
  testimonalImg = this.testimonialBlock.locator('.lazyloaded')
  faqBlock = this.page.locator('section.faq .qa')
  customPriceBotForm = this.page.locator('#iFrameResizer1')
}

export class ReportingPage extends PlatformPage {
  riskImg = this.page.locator('section.Risk .lazyloaded')
  featuresFirstBlockImg = this.page.locator('div.item-tile:nth-child(1) .lazyloaded')
  requestDemoForm = this.page.locator('section#form')
  requestDemoImg = this.requestDemoForm.locator('.lazyloaded')
}

export class RiskQuontPage extends PlatformPage {
  riskImg = this.page.locator('section.Risk .lazyloaded')
  financialImg = this.page.locator('.even:nth-child(1) .lazyloaded')
  economicImg = this.page.locator('.odd .lazyloaded')
  strategicImg = this.page.locator('.even:nth-child(3) .lazyloaded')
  firstArticleBlockImg = this.page.locator('section.cards.resources article.resource:nth-child(1)')
  signMeBlock = this.page.locator('section#form')
  signMeForm = this.page.locator('#iFrameResizer0')
  signMeImg = this.page.locator('section#form img.lazyloaded')
}

export class IntegrationsPage extends PlatformPage {
  integrationImg = this.page.locator('section.hero .lazyloaded')
  connectBlockImg = this.page.locator('section.overview-call div.img')
  ticketingBlockImg = this.page.locator('section.contentItems .item:nth-child(1)')
  managementBlockImg = this.page.locator('section.contentItems .item:nth-child(2)')
  dataAnalysisBlockImg = this.page.locator('section.contentItems .item:nth-child(3)')
  workflowsBlockImg = this.page.locator('section.contentItems .item:nth-child(4)')
  workflowBlockFirstImg = this.page.locator('section.subcontent .content-item:nth-child(1) .lazyloaded')
  firstArticleImg = this.page.locator('article[id*="card"]:nth-child(1) .lazyloaded')
  firstArticlePostImg = this.page.locator('section.posts .post:nth-child(1) .lazy')
  secArticlePostImg = this.page.locator('section.posts .post:nth-child(2) .lazy')
  thirdArticlePostImg = this.page.locator('section.posts .post:nth-child(3) .lazy')
  requestDemoForm = this.page.locator('section#form')
  requestDemoImg = this.requestDemoForm.locator('.lazyloaded')
}

export class ExchangePage extends PlatformPage {
  exchangeVideo = this.page.locator('section.hero .lazyloaded')
  applicationsBlockImg = this.page.locator('div.item:nth-child(1) .lazyloaded')
  integrationBlockImg = this.page.locator('div.item:nth-child(2) .lazyloaded')
  communityBlockImg = this.page.locator('div.item:nth-child(3) .lazyloaded')
  requestDemoForm = this.page.locator('section#form')
  requestDemoImg = this.requestDemoForm.locator('.lazyloaded')
}
