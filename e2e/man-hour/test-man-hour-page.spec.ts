import { accounts } from '@data/accounts'
import { ManHourMonthlyPage } from '@pages/man-hour/man-hour-monthly-page'
import { expect, test } from '@playwright/test'
import { loginFlow } from '../../src/flows/login'

test.describe('Test man-hour monthly', () => {
  test('Test page container', async ({ page }) => {
    await loginFlow(page, accounts.DEFAULT)
    const manHourMonthlyPage = new ManHourMonthlyPage(page)
    await manHourMonthlyPage.goto()
  })
})
