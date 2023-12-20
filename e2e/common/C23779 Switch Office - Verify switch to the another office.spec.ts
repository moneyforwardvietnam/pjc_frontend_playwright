import { accounts } from '@data/accounts'
import { SwitchOfficePage } from '@pages/offices/switch-office-page'
import { expect, test } from '@playwright/test'
import { loginFlow } from '../../src/flows/login'

test('C23779 Switch Office - Verify switch to the another office', async ({ page }) => {
  await loginFlow(page, accounts.HANNAH_45, 'E2E Office')
  const switchOfficePage = new SwitchOfficePage(page)
  await switchOfficePage.switchOffice('Hannah35 Office')
  await expect(page.getByTestId('office-user-name-button')).toHaveText(['Hannah35 Office'])
  await expect(page.getByTestId('office-dropdown-button')).toHaveText(['Hannah35 Office'])
})
