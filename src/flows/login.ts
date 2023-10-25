import { LoginPage } from '@pages/login-page'
import { Page } from '@playwright/test'

export async function loginFlow(page: Page, account) {
  const loginPage = new LoginPage(page)
  loginPage.loginUrl = '/login'
  loginPage.expectUrlAfterLogin = '/'
  await loginPage.login(account.email, account.password)
  await page.waitForTimeout(1000)
}
