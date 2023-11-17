import { accounts } from '@data/accounts'
import { CostCalculationPage } from '@pages/cost-calculation/cost-calculation-page'
import { expect, test } from '@playwright/test'
import { loginFlow } from '../../src/flows/login'

test('C62912 PdM data case 06', async ({ page }) => {
  const expectData = [
    { projectName: 'Project A', projectResult: '4,080,000' },
    { projectName: 'Project B', projectResult: '5,660,000' },
    { projectName: 'Project C', projectResult: '2,740,000' },
    { projectName: 'Project D', projectResult: '20,000' },
  ]
  await loginFlow(page, accounts.WILLIAM_6, 'W data PdM 06')
  const costPage = new CostCalculationPage(page, '?valid_at=2023-01&tab=result')
  await costPage.goto()
  const tableResult = await costPage.getCostResultData()
  expect(tableResult).toEqual(expectData)
})
