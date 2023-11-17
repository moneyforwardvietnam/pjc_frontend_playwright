import { accounts } from '@data/accounts'
import { expect, test } from '@playwright/test'
import { envConfig } from '@utils/envConfig'
import { loginFlow } from '../../src/flows/login'

test('C24895 Click logout menu', async ({ page }) => {
  await loginFlow(page, accounts.DEFAULT)
  await expect(page.url()).toBe(`${envConfig.baseUrl}`)
  await page.getByTestId('office-user-name-button').click()
  await page.getByRole('menuitem', { name: 'ログアウト' }).click()
  await page.waitForURL(`${envConfig.baseUrl}login`)
  await expect(page.url()).toBe(`${envConfig.baseUrl}login`)
})
