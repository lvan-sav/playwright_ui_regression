import { Locator, Page } from '@playwright/test'


export class BasePage {
  readonly page: Page;
  
  constructor(page: Page) {
    this.page = page;
  }

  async scrollPageWidth() {
    const size = this.page.viewportSize()
    if (size === null) return size
    
    const { width } = size
    await this.page.mouse.wheel(0, width)
  }
}
