import { LoginPage } from '@pages/login-page'
import { expect, test } from '@playwright/test'

test('C23720 Login screen - Verify click the link 「初めて利用される方はこちら」--> Change URL', async ({ page }) => {
  const loginPage = new LoginPage(page)
  await loginPage.goto()
  await loginPage.clickLocatorByText('初めて利用される方はこちら')
  expect(page.url()).toBe('https://biz.moneyforward.com/library/form/4988/')
})
