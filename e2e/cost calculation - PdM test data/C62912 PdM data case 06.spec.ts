import { accounts, accountsByEmail } from '@data/accounts'
import { test } from '@fixtures/fixture'
import { CostCalculationPage } from '@pages/cost-calculation/cost-calculation-page'
import { expect } from '@playwright/test'

test.use({
  authentication: {
    email: accountsByEmail['vu.xuan.khiem+6@moneyforward.vn'].email,
    officeName: 'W data PdM 06',
  },
})

test('C62912 PdM data case 06', async ({ page }) => {
  const expectData = [
    { projectName: 'Project A', projectResult: '4,080,000' },
    { projectName: 'Project B', projectResult: '5,660,000' },
    { projectName: 'Project C', projectResult: '2,740,000' },
    { projectName: 'Project D', projectResult: '20,000' },
  ]
  const costPage = new CostCalculationPage(page, '?valid_at=2023-01&tab=result')
  await costPage.goto()
  const tableResult = await costPage.getCostResultData()
  expect(tableResult).toEqual(expectData)
})
