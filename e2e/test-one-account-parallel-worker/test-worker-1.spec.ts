import { accountsByEmail } from "@data/accounts";
import { test } from "@fixtures/fixture";
import { CostCalculationPage } from "@pages/cost-calculation/cost-calculation-page";

test.use({authentication: {
  email: accountsByEmail["vu.xuan.khiem+6@moneyforward.vn"].email,
  officeName: 'W data PdM 20'
}})

test('test 1', async ({page}) => {
  const costPage = new CostCalculationPage(page, '?valid_at=2023-01&tab=result')
  await costPage.goto()
})