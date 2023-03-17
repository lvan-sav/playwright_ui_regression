import { BasePage } from './page'


const ermFormLoc = 'div.even:nth-child(1)'
const wantErmBtnLoc = '.button[href*="/enterprise-risk-management/"]'
const autoFormLoc = 'div.odd'
const wantAutoBtnLoc = '.button[href*="/third-party-risk-management/"]'
const firstArticleLoc = 'article.it-security-risk'
const firstArticleImgLoc = 'article.it-security-risk .lazy'
const signUpFormLoc = 'section#form'
const reqDemoFooterBtnLoc = '.bluedeep[href*="request-a-demo"]'
const footerMenuLoc = 'ul#menu-footer-menu'

export class MainPage extends BasePage {
  ermForm = this.page.locator(ermFormLoc)
  wantErmBtn = this.page.locator(wantErmBtnLoc)
  autoForm = this.page.locator(autoFormLoc)
  wantAutoBtn = this.page.locator(wantAutoBtnLoc)
  firstArticle = this.page.locator(firstArticleLoc)
  firstArticleImg = this.page.locator(firstArticleImgLoc)
  signUpForm = this.page.locator(signUpFormLoc)
  reqDemoFooterBtn = this.page.locator(reqDemoFooterBtnLoc)
  footerMenu = this.page.locator(footerMenuLoc)
}
