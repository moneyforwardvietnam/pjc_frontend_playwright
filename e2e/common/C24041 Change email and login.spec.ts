import { accountsByEmail } from '@data/accounts'
import { expect, test } from '@playwright/test'
import { envConfig } from '@utils/envConfig'
import { loginFlow } from '../../src/flows/login'

//Cannot login with old email. Login by new email successfully

test('C24041 Change email and login', async ({ page }) => {
  await loginFlow(page, accountsByEmail['nguyen.thi.ngoc+qa1@moneyforward.vn'])
  expect(page.url()).toBe(`${envConfig.baseUrl}`)
})
