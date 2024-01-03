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
    3. Click on 編集 button
    4. Edit Project name, code, start date, Department, Manager, Tag
    5. Click on 保存 button
Expected Result:
    - After step 4: A toast message is displayed: プロジェクトを編集しました。
    - The Project is updated successfully.
*/

test.use({
  authentication: {
    email: accountsByEmail['nguyen.thi.thu+82@moneyforward.vn'].email,
    officeName: 'E2E Office',
  },
})

test('C65729 Project - Verify edit a project', async ({ page }) => {
  const projectPage = new ProjectPage(page)

  const projectsPage = new ProjectsPage(page)
  await projectsPage.goto('valid_at=all')
  await projectsPage.waitUntilProjectsLoaded()

  await projectsPage.selectProjectByName('PRJ1-edit')
  await projectPage.waitForProjectLoaded()
  await projectPage.editProject()

  await expect(page.getByText('プロジェクトを編集しました。')).toBeVisible()
})
