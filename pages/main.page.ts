import { BasePage } from './page'


const ermFormLoc = 'div.even:nth-child(1)'
const wantErmBtnLoc = '.button[href*="/enterprise-risk-management/"]'
const formImgLoc = '.lazyloaded'
const autoFormLoc = 'div.odd'
const wantAutoBtnLoc = '.button[href*="/third-party-risk-management/"]'
const firstArticleLoc = 'article.it-security-risk'
const secArticleLoc = 'article.third-party-risk-management'
const articleImgLoc = '.lazy'
const signUpFormLoc = 'section#form'
const signUpFrameLoc = '#iFrameResizer0'
const reqDemoFooterBtnLoc = '.bluedeep[href*="request-a-demo"]'
const footerMenuLoc = 'ul#menu-footer-menu'

export class MainPage extends BasePage {
  ermForm = this.page.locator(ermFormLoc)
  wantErmBtn = this.page.locator(wantErmBtnLoc)
  ermFormImg = this.ermForm.locator(formImgLoc)
  autoForm = this.page.locator(autoFormLoc)
  wantAutoBtn = this.page.locator(wantAutoBtnLoc)
  autoFormImg = this.autoForm.locator(formImgLoc)
  firstArticle = this.page.locator(firstArticleLoc)
  secArticle = this.page.locator(secArticleLoc)
  firstArticleImg = this.firstArticle.locator(articleImgLoc)
  secArticleImg = this.secArticle.locator(articleImgLoc)
  signUpForm = this.page.locator(signUpFormLoc)
  signUpFrame = this.page.locator(signUpFrameLoc)
  reqDemoFooterBtn = this.page.locator(reqDemoFooterBtnLoc)
  footerMenu = this.page.locator(footerMenuLoc)

  async scrollToErmForm() {
    await this.scrollToElems([this.wantErmBtn, this.ermForm, this.ermFormImg])
  }

  async scrollToAutoForm() {
    await this.scrollToElems([this.wantAutoBtn, this.autoForm, this.autoFormImg])
  }

  async scrollToArticleBlock() {
    await this.scrollToElems([
      this.firstArticle,
      this.firstArticleImg,
      this.secArticle,
      this.secArticleImg
    ])
  }

  async scrollToSignUpForm() {
    await this.scrollToElem(this.signUpForm)
  }

  async scrollToFooter() {
    await this.footerMenu.scrollIntoViewIfNeeded()
    await this.footerMenu.waitFor()
  }
}
