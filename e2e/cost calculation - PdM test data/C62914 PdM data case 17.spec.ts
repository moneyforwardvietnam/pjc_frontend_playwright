import { accounts } from '@data/accounts'
import { CostCalculationPage } from '@pages/cost-calculation/cost-calculation-page'
import { expect, test } from '@playwright/test'
import { loginFlow } from '../../src/flows/login'

test('C62914 PdM data case 17', async ({ page }) => {
  const expectData = [
    { projectName: 'Project A', projectResult: '939,642' },
    { projectName: 'Project B', projectResult: '1,095,444' },
    { projectName: 'Project C', projectResult: '1,285,388' },
    { projectName: 'Project D', projectResult: '2,105,867' },
  ]
  await loginFlow(page, accounts.WILLIAM_6, 'W data PdM 17')
  const costPage = new CostCalculationPage(page, '?valid_at=2023-01&tab=result')
  await costPage.goto()
  const tableResult = await costPage.getCostResultData()
  expect(tableResult).toEqual(expectData)
})
