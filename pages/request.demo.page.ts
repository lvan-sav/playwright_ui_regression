import { BasePage } from "./page";


const reqDemoUrl = '/request-a-demo/'
const videoLoc = '.shadow-box .video-placeholer'
const sectionHeaderLoc = 'section.review-module br'
const reqDemoBtnLoc = '#menu-footer-menu.menu'

export class ReqDemoPage extends BasePage {
    video = this.page.locator(videoLoc)
    sectionHeader = this.page.locator(sectionHeaderLoc)
    reqDemoBtn = this.page.locator(reqDemoBtnLoc)

    async goto(){
        this.page.goto(reqDemoUrl)
    }

    async scroll4000Px(){
        await this.page.mouse.wheel(0, 4000)
    }
}
