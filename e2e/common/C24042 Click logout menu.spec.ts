import { accountsByEmail } from '@data/accounts'
import { test } from '@fixtures/fixture'
import { ProjectPage } from '@pages/project/project-page'
import { ProjectsPage } from '@pages/project/projects-page'
import { expect } from '@playwright/test'
import { envConfig } from '@utils/envConfig'

test.use({
  authentication: {
    email: accountsByEmail['vu.xuan.khiem+6@moneyforward.vn'].email,
    officeName: 'W data PdM 20',
  },
})

test('C24895 Click logout menu', async ({ page }) => {
  const projectsPage = new ProjectsPage(page)
  await projectsPage.goto()
  await page.getByTestId('office-user-name-button').click()
  await page.getByRole('menuitem', { name: 'ログアウト' }).click()
  await page.waitForURL(`${envConfig.baseUrl}login`)
  expect(page.url()).toBe(`${envConfig.baseUrl}login`)
})
