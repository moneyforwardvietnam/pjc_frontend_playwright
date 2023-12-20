import { accounts } from '@data/accounts'
import { expect, test } from '@playwright/test'
import { envConfig } from '@utils/envConfig'
import { loginFlow } from '../../src/flows/login'

test('C24030 Login on the Google Chrome browser.spec', async ({ page }) => {
  await loginFlow(page, accounts.DEFAULT)
  expect(page.url()).toBe(`${envConfig.baseUrl}`)
})
