import { accounts } from '@data/accounts'
import { expect, test } from '@playwright/test'
import { loginFlow } from '../../src/flows/login'

test('C24041 Change email and login', async ({ page }) => {
  await loginFlow(page, accounts.HANNAH_82, 'E2E Office')
  await loginFlow(page, accounts.HANNAH_45, 'E2E Office')
  await expect(page.getByTestId('office-user-name-button')).toHaveText(['Hannah 45'])
  await expect(page.getByTestId('office-dropdown-button')).toHaveText(['E2E Office'])
})
