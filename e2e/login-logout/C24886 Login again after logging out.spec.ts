import { accounts } from '@data/accounts'
import { expect, test } from '@playwright/test'
import { envConfig } from '@utils/envConfig'
import { loginFlow } from '../../src/flows/login'

test('C24886 Login again after logging out', async ({ page }) => {
  await loginFlow(page, accounts.DEFAULT)
  await expect(page.url()).toBe(`${envConfig.baseUrl}`)
  await page.getByTestId('office-user-name-button').click()
  await page.getByRole('menuitem', { name: 'ログアウト' }).click()
  await page.waitForURL(`${envConfig.baseUrl}login`)
  await expect(page.url()).toBe(`${envConfig.baseUrl}login`)
  await page.getByText('マネーフォワードIDでログインして続行').click()
  await expect(page.getByText('Use this account')).toBeVisible()
  await page.getByText('Use this account').click()
  await page.waitForURL(`${envConfig.baseUrl}`)
  await expect(page.url()).toBe(`${envConfig.baseUrl}`)
})
