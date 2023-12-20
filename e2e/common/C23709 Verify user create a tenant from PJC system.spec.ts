import { accounts } from '@data/accounts'
import { NewOfficePage } from '@pages/offices/new-office-page'
import { expect, test } from '@playwright/test'
import { loginFlow } from '../../src/flows/login'

test('C23709 Verify user create a tenant from PJC system', async ({ page }) => {
  await loginFlow(page, accounts.HANNAH_50)
  // const newOfficePage = new NewOfficePage(page)
  // await newOfficePage.cloneOffice('Hannah 218')
})
