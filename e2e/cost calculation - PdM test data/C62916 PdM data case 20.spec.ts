import { accounts } from '@data/accounts'
import { CostCalculationPage } from '@pages/cost-calculation/cost-calculation-page'
import { expect, test } from '@playwright/test'
import { loginFlow } from '../../src/flows/login'

test('C62916 PdM data case 20', async ({ page }) => {
  const expectData = [
    { projectName: 'Project A', projectResult: '3,752,032' },
    { projectName: 'Project B', projectResult: '7,194,237' },
    { projectName: 'Project C', projectResult: '3,156,819' },
    { projectName: 'Project D', projectResult: '3,602,651' },
  ]
  await loginFlow(page, accounts.WILLIAM_6, 'W data PdM 20')
  const costPage = new CostCalculationPage(page, '?valid_at=2022-11&tab=result')
  await costPage.goto()
  const tableResult = await costPage.getCostResultData()
  expect(tableResult).toEqual(expectData)
})
