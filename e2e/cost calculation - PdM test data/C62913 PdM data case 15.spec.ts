import { accounts } from '@data/accounts'
import { CostCalculationPage } from '@pages/cost-calculation/cost-calculation-page'
import { expect, test } from '@playwright/test'
import { loginFlow } from '../../src/flows/login'

test('C62913 PdM data case 15', async ({ page }) => {
  const expectData = [
    { projectName: 'Project A', projectResult: '142,594' },
    { projectName: 'Project B', projectResult: '35,681' },
    { projectName: 'Project C', projectResult: '700' },
    { projectName: 'Project D', projectResult: '25' },
  ]
  await loginFlow(page, accounts.WILLIAM_6, 'W data PdM 15')
  const costPage = new CostCalculationPage(page, '?valid_at=2023-01&tab=result')
  await costPage.goto()
  const tableResult = await costPage.getCostResultData()
  expect(tableResult).toEqual(expectData)
})
