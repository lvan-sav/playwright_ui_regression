import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page'


test.describe('Main page', () => {
  test.only('Match snapshots on the Main page', async ({ page }) => {
    const mainPage = new MainPage(page)

    await page.goto('/')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()
    
    await mainPage.wantErmBtn.scrollIntoViewIfNeeded()
    await mainPage.wantErmBtn.waitFor()
    await mainPage.ermForm.waitFor()
    await mainPage.ermFormImg.waitFor()
    await expect(mainPage.wantErmBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.wantAutoBtn.scrollIntoViewIfNeeded()
    await mainPage.autoForm.waitFor()
    await mainPage.autoFormImg.waitFor()
    expect(mainPage.wantAutoBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.firstArticle.scrollIntoViewIfNeeded()
    await mainPage.firstArticle.waitFor()
    await mainPage.firstArticleImg.waitFor()
    await mainPage.secArticle.waitFor()
    await mainPage.secArticleImg.waitFor()
    expect(mainPage.firstArticle).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.signUpForm.scrollIntoViewIfNeeded()
    await mainPage.signUpForm.waitFor()
    expect(mainPage.signUpForm).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await mainPage.footerMenu.waitFor()
    expect(mainPage.reqDemoFooterBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
