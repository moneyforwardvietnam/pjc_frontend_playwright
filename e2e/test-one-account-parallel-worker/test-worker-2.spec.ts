import { accounts } from '@data/accounts'
import { CostCalculationPage } from '@pages/cost-calculation/cost-calculation-page'
import { test } from '@fixtures/fixture'

test.use({
  authentication: {
    email: accounts.WILLIAM_6.email,
    password: accounts.WILLIAM_6.password,
    officeName: 'W data PdM 20',
  },
})

test('test 2', async ({ page }) => {
  const costPage = new CostCalculationPage(page, '?valid_at=2023-01&tab=result')
  await costPage.goto()
})
