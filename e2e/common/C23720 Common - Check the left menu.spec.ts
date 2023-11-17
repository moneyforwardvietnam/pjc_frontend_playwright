import { accounts } from '@data/accounts'
import { expect, test } from '@playwright/test'
import { loginFlow } from '../../src/flows/login'

test('C23720 Common - Check the left menu', async ({ page }) => {
  await loginFlow(page, accounts.DEFAULT)
  await expect(page.getByTestId('menu-project')).toHaveText(['プロジェクト'])
  await expect(page.getByTestId('menu-cost-calculation')).toHaveText(['原価計算'])
  await expect(page.getByTestId('menu-man-hour')).toHaveText(['工数'])
  await expect(page.getByTestId('menu-settings')).toHaveText(['設定'])
})
