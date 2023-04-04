import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page'


test.describe('Main page', () => {
  test('Match snapshots on the Main page', async ({ page }) => {
    const mainPage = new MainPage(page)

    await page.goto('/')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()
    
    await mainPage.scrollToErmForm()
    await expect(mainPage.wantErmBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.scrollToAutoForm()
    expect(mainPage.wantAutoBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.scrollToArticleBlock()
    expect(mainPage.firstArticle).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.scrollToSignUpForm()
    expect(mainPage.signUpForm).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.scrollToFooter()
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
