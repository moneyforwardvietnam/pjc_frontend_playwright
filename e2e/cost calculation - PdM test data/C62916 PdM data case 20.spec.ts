import { accountsByEmail } from '@data/accounts'
import { test } from '@fixtures/fixture'
import { CostCalculationPage } from '@pages/cost-calculation/cost-calculation-page'
import { expect } from '@playwright/test'

test.use({
  authentication: {
    email: accountsByEmail['vu.xuan.khiem+6@moneyforward.vn'].email,
    officeName: 'W data PdM 20',
  },
})

test('C62916 PdM data case 20', async ({ page }) => {
  const expectData = [
    { projectName: 'Project A', projectResult: '4,472,555' },
    { projectName: 'Project B', projectResult: '8,352,167' },
    { projectName: 'Project C', projectResult: '3,156,819' },
    { projectName: 'Project D', projectResult: '3,602,651' },
  ]
  const costPage = new CostCalculationPage(page, '?valid_at=2022-11&tab=result')
  await costPage.goto()
  const tableResult = await costPage.getCostResultData()
  expect(tableResult).toEqual(expectData)
})
