import { accountsByEmail } from '@data/accounts'
import { test } from '@fixtures/fixture'
import { CostCalculationPage } from '@pages/cost-calculation/cost-calculation-page'
import { expect } from '@playwright/test'

test.use({
  authentication: {
    email: accountsByEmail['vu.xuan.khiem+6@moneyforward.vn'].email,
    officeName: 'W data PdM 19',
  },
})

test('C62915 PdM data case 19', async ({ page }) => {
  const expectData = [
    { projectName: 'Project A', projectResult: '4,541,474' },
    { projectName: 'Project B', projectResult: '8,753,521' },
    { projectName: 'Project C', projectResult: '3,794,781' },
    { projectName: 'Project D', projectResult: '4,794,728' },
  ]

  const costPage = new CostCalculationPage(page, '?valid_at=2022-11&tab=result')
  await costPage.goto()
  const tableResult = await costPage.getCostResultData()
  expect(tableResult).toEqual(expectData)
})
