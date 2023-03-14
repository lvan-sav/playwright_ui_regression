import { test, expect } from '@playwright/test';


test.describe('Main page', () => {
  test('Match snapshots on the Main page', async ({ page }) => {
    await page.goto('/')
    expect(await page.screenshot()).toMatchSnapshot()
    
    const wantErmBtn = page.locator('.button[href*="/enterprise-risk-management/"]')
    await wantErmBtn.scrollIntoViewIfNeeded()
    await expect(wantErmBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    const wantAutoBtn = page.locator('.button[href*="/third-party-risk-management/"]')
    await wantAutoBtn.scrollIntoViewIfNeeded()
    expect(wantAutoBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    const firstArticle = page.locator('article.it-security-risk')
    await firstArticle.scrollIntoViewIfNeeded()
    expect(firstArticle).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    const signUpBtn = page.locator('section#form')
    await signUpBtn.scrollIntoViewIfNeeded()
    expect(signUpBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()

    const reqDemoFooterBtn = page.locator('.bluedeep[href*="request-a-demo"]')
    await reqDemoFooterBtn.scrollIntoViewIfNeeded()
    expect(reqDemoFooterBtn).toBeInViewport()
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
