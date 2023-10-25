import { accounts } from '@data/accounts'
import { Pages } from '@fixtures/page-factory'
import { LoginPage } from '@pages/login-page'

export async function loginFlow({ page }: Partial<Pages>) {
  const loginPage = new LoginPage(page)
  loginPage.loginUrl = '/login'
  loginPage.expectUrlAfterLogin = '/'
  await loginPage.login(accounts.DEFAULT.email, accounts.DEFAULT.password)
  await page.waitForTimeout(1000)
}
