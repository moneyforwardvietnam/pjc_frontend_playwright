import { accountsByEmail } from '@data/accounts'
import { expect, test } from '@fixtures/fixture'
import { ProjectsPage } from '@pages/project/projects-page'

/* 
Precondition:
    - User with CRUD permission to Projects
    - Create Project PRJ5 (do not delete)
Steps:
    1. User logs in PJC successfully and go to home page with date picker is empty
    2. Input a text that matches Project name (PRJ5) and press Enter
    3. Input a text that matches Department name (A3) and press Enter
    4. Input a text that matches Manager name (Hannah 81) and press Enter
    5. Input a text that matches Project start date (2023/02/01) and press Enter
    6. Input a text that matches End date (2023/05/31) and press Enter
    7. Input a text that matches display order (1000) and press Enter
    8. Input tag_1 and press Enter
    9. Select another date (2023/06/01) in date picker
    10. Delete date from date picker
Expected Result:
    - After step 2: PRJ5 is returned.
    - After step 3: PRJ5 is returned.
    - After step 4: PRJ5 is returned.
    - After step 5: No data is returned, cannot search by date
    - After step 6: No data is returned, cannot search by date
    - After step 7: PRJ5 is returned.
    - After step 8: PPRJ5 is returned.
    - After step 9: PRJ2, PRJ3, PRJ4 are returned
    - After step 10: All Projects are returned.
*/

test.use({
  authentication: {
    email: accountsByEmail['nguyen.thi.thu+82@moneyforward.vn'].email,
    officeName: 'E2E Office',
  },
})

test('C65727 Project list - Verify can search/filter data', async ({ page }) => {
  const projectsPage = new ProjectsPage(page)
  await projectsPage.goto('valid_at=all')
  await projectsPage.waitUntilProjectsLoaded()

  await projectsPage.search('PRJ5')
  await expect(page.getByText('PRJ5').first()).toBeVisible()

  await projectsPage.search('A3')
  await expect(page.getByText('PRJ5').first()).toBeVisible()

  await projectsPage.search('Hannah 81')
  await expect(page.getByText('PRJ5').first()).toBeVisible()

  await projectsPage.search('2023/02/01')
  await expect(page.getByText('該当するプロジェクトが登録されていません。')).toBeVisible()

  await projectsPage.search('2023/05/31')
  await expect(page.getByText('該当するプロジェクトが登録されていません。')).toBeVisible()

  await projectsPage.search('1000')
  await expect(page.getByText('PRJ5').first()).toBeVisible()

  await projectsPage.search('tag_1')
  await expect(page.getByText('PRJ5').first()).toBeVisible()

  await projectsPage.search('')
  await projectsPage.setDate('2023/06/01')
  await expect(page.getByText('PRJ2').first()).toBeVisible()
  await expect(page.getByText('PRJ3').first()).toBeVisible()
  await expect(page.getByText('PRJ4').first()).toBeVisible()

  await projectsPage.goto('valid_at=all')
  await projectsPage.waitUntilProjectsLoaded()
  await expect(page.getByText('PRJ1').first()).toBeVisible()
  await expect(page.getByText('PRJ2').first()).toBeVisible()
  await expect(page.getByText('PRJ3').first()).toBeVisible()
  await expect(page.getByText('PRJ4').first()).toBeVisible()
  await expect(page.getByText('PRJ5').first()).toBeVisible()
})
