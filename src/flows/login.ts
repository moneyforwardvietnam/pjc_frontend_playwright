import { LoginPage } from '@pages/login-page'
import { SwitchOfficePage } from '@pages/offices/switch-office-page'
import { Page } from '@playwright/test'
import { envConfig } from '@utils/envConfig'

export async function loginFlow(page: Page, account, officeName?: string) {
  const loginPage = new LoginPage(page)
  loginPage.loginUrl = '/login'
  loginPage.expectUrlAfterLogin = '/'
  await loginPage.login(account.email, account.password)
  await page.waitForURL(`${envConfig.baseUrl}`)
  if (officeName) {
    const switchOfficePage = new SwitchOfficePage(page)
    await switchOfficePage.switchOffice(officeName)
  }
}

export async function logoutFlow(page: Page) {
  await page.getByTestId('office-user-name-button').click()
  await page.getByRole('menuitem', { name: 'ログアウト' }).click()
  await page.waitForURL(`${envConfig.baseUrl}login`)
}
