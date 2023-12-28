import { Project } from '@apis/models/project-master'
import { accountsByEmail } from '@data/accounts'
import { expect, test } from '@fixtures/fixture'
import { ProjectsPage } from '@pages/project/projects-page'

/* 
Precondition:
    - User with CRUD permission to Projects
Steps:
    1. User logs in PJC successfully
    2. Click on button 新規作成 button
    3. Input Project name, code, Start date, Department
    4. Click on 作成 button
Expected Result:
    - After step 4: A toast message is displayed: プロジェクトを作成しました。
    - A new Project is created successfully.
*/

test.use({
  authentication: {
    email: accountsByEmail['nguyen.thi.thu+82@moneyforward.vn'].email,
    officeName: 'E2E Office',
  },
})

test('C65728 Project - Verify create a new project', async ({ page }) => {
  const projectsPage = new ProjectsPage(page)
  await projectsPage.goto('?valid_at=all')
  await projectsPage.waitUntilProjectsLoaded()

  await projectsPage.createButton.click()
  await projectsPage.addNewProject({
    name: 'New Project Test - ' + Date.now(),
    code: 'new-project-test',
    startDate: '2023/01/01',
    department: 'Dept 1',
  })

  const addNewResponse = await projectsPage.waitForAddNewProject()
  const newProject: Project = await addNewResponse.json()

  await expect(addNewResponse.status()).toBe(200)
  await expect(page.getByText('プロジェクトを作成しました。')).toBeVisible()

  const deleteProjectResponse = await projectsPage.deleteProjectByBiid(newProject.biid)
  await expect(deleteProjectResponse.status()).toBe(204)
})
