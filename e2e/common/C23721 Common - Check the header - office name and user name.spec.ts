import { accounts } from '@data/accounts'
import { expect, test } from '@playwright/test'
import { loginFlow } from '../../src/flows/login'

test('C23721 Common - Check the header - office name and user name', async ({ page }) => {
  await loginFlow(page, accounts.HANNAH_82, 'E2E Office')
  await expect(page.getByTestId('office-user-name-button')).toHaveText(['E2E Office'])
  await expect(page.getByTestId('office-dropdown-button')).toHaveText(['E2E Office'])
})
