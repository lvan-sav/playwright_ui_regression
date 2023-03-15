import { BasePage } from './page'


const wantErmBtnLoc = '.button[href*="/enterprise-risk-management/"]'
const wantAutoBtnLoc = '.button[href*="/third-party-risk-management/"]'
const firstArticleLoc = 'article.it-security-risk'
const signUpBtnLoc = 'section#form'
const reqDemoFooterBtnLoc = '.bluedeep[href*="request-a-demo"]'

export class MainPage extends BasePage {
  wantErmBtn = this.page.locator(wantErmBtnLoc)
  wantAutoBtn = this.page.locator(wantAutoBtnLoc)
  firstArticle = this.page.locator(firstArticleLoc)
  signUpBtn = this.page.locator(signUpBtnLoc)
  reqDemoFooterBtn = this.page.locator(reqDemoFooterBtnLoc)
}
