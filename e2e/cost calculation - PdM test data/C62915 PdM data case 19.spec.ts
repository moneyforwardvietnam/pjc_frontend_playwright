import { accounts } from '@data/accounts'
import { CostCalculationPage } from '@pages/cost-calculation/cost-calculation-page'
import { SwitchOfficePage } from '@pages/offices/switch-office-page'
import { expect, test } from '@playwright/test'
import { loginFlow } from '../../src/flows/login'

test('C62915 PdM data case 19', async ({ page }) => {
  const expectData = [
    { projectName: 'Project A', projectResult: '0' },
    { projectName: 'Project B', projectResult: '8,753,521' },
    { projectName: 'Project C', projectResult: '3,794,781' },
    { projectName: 'Project D', projectResult: '4,794,728' },
  ]
  await loginFlow(page, accounts.WILLIAM_6)
  const switchOfficePage = new SwitchOfficePage(page)
  await switchOfficePage.switchOfficeByOfficeId('')
  const costPage = new CostCalculationPage(page, '?valid_at=2022-11&tab=result')
  await costPage.goto()
  const tableResult = await costPage.getCostResultData()
  expect(tableResult).toEqual(expectData)
})
