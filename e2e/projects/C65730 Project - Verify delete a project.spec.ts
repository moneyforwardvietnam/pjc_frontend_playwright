import { Project } from '@apis/models/project-master'
import { accountsByEmail } from '@data/accounts'
import { expect, test } from '@fixtures/fixture'
import { ProjectPage } from '@pages/project/project-page'
import { ProjectsPage } from '@pages/project/projects-page'

/* 
Precondition:
    - User with CRUD permission to Projects
Steps:
    1. User logs in PJC successfully
    2. In Project list, click on a Project
    3. Click on 削除 button
    4. Click on 削除 on the popup
Expected Result:
    After step 3: A popup is displayed: 
    Title: プロジェクトを削除しますか？
    Content: 削除すると、このプロジェクトが破棄されます。この操作は取り消せません
    Button: キャンセル and 削除"

    After step 4: A toast message is displayed: "プロジェクトを削除しました。"
    The Project is deleted successfully.
*/

test.use({
  authentication: {
    email: accountsByEmail['nguyen.thi.thu+82@moneyforward.vn'].email,
    officeName: 'E2E Office',
  },
})

test('C65730 Project - Verify delete a project', async ({ page }) => {
  const projectPage = new ProjectPage(page)

  const projectsPage = new ProjectsPage(page)
  await projectsPage.goto('valid_at=all')
  await projectsPage.waitUntilProjectsLoaded()

  await projectsPage.createButton.click()
  await projectsPage.addNewProject({
    name: 'New Project Test - ' + Date.now(),
    code: 'new-project-test-to-delete',
    startDate: '2023/01/01',
    department: 'Dept 1',
  })

  const addNewResponse = await projectsPage.waitForAddNewProject()
  const newProject: Project = await addNewResponse.json()

  await expect(addNewResponse.status()).toBe(200)
  await expect(page.getByText('プロジェクトを作成しました。')).toBeVisible()

  await projectPage.goto(newProject.biid)
  await projectPage.deleteButton.click()

  // Verify the dialog
  expect(await page.getByRole('dialog').getByText('プロジェクトを削除しますか？')).toBeVisible()
  expect(await page.getByRole('dialog').getByText('削除すると、このプロジェクトが破棄されます。この操作は取り消せません')).toBeVisible()
  expect(await page.getByRole('dialog').getByRole('button', {name: 'キャンセル'})).toBeVisible()
  expect(await page.getByRole('dialog').getByRole('button', {name: '削除'})).toBeVisible()

  // Delete the project
  await page.getByRole('dialog').getByRole('button', {name: '削除'}).click()
  await projectPage.waitForProjectDeleted()
  await expect(page.getByText('プロジェクトを削除しました。')).toBeVisible()
})
