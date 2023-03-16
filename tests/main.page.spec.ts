import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/main.page'


test.describe('Main page', () => {
  test('Match snapshots on the Main page', async ({ page }) => {
    const mainPage = new MainPage(page)

    await page.goto('/')
    await page.waitForLoadState('networkidle')
    expect(await page.screenshot()).toMatchSnapshot()
    
    await mainPage.wantErmBtn.scrollIntoViewIfNeeded()
    await page.waitForLoadState('networkidle')
    await expect(mainPage.wantErmBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.wantAutoBtn.scrollIntoViewIfNeeded()
    await page.waitForLoadState('networkidle')
    expect(mainPage.wantAutoBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.firstArticle.scrollIntoViewIfNeeded()
    await page.waitForLoadState('networkidle')
    expect(mainPage.firstArticle).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.signUpBtn.scrollIntoViewIfNeeded()
    await page.waitForLoadState('networkidle')
    expect(mainPage.signUpBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    await mainPage.reqDemoFooterBtn.scrollIntoViewIfNeeded()
    await page.waitForLoadState('networkidle')
    expect(mainPage.reqDemoFooterBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
