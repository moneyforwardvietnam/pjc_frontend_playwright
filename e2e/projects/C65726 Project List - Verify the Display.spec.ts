import { accountsByEmail } from '@data/accounts'
import { expect, test } from '@fixtures/fixture'
import { ProjectsPage } from '@pages/project/projects-page'

/* 
Precondition:
    - User with CRUD permission to Projects
Steps:
    1. User logs in PJC successfully
Expected Result:
    - Page name: プロジェクト
    - Buttons: 更新 - reload, エクスポート - Export, インポート - Import, 新規作成 - Create
    - Date picker
    - Search box
    - Projects table: Name, Code, Start date, End date, Department name, Manager name, Tags, Display order
*/

test.use({
  authentication: {
    email: accountsByEmail['nguyen.thi.thu+82@moneyforward.vn'].email,
    officeName: 'E2E Office',
  },
})

test('C65726 Project List - Verify the display of the Projects list', async ({ page }) => {
  const projectPage = new ProjectsPage(page)
  await projectPage.goto()
  await projectPage.waitUntilProjectsLoaded()

  await expect(projectPage.title).toHaveText('プロジェクト')
  await expect(projectPage.reloadButton).toBeVisible()
  await expect(projectPage.exportButton).toBeVisible()
  await expect(projectPage.importButton).toBeVisible()
  await expect(projectPage.createButton).toBeVisible()
  await expect(projectPage.datePicker).toBeVisible()
  await expect(projectPage.searchBox).toBeVisible()
  const tableHeads = projectPage.tableHeads
  for (const key in tableHeads) {
    await expect(tableHeads[key]).toBeVisible()
  }
})
