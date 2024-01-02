import { PageCommon } from '@pages/page-common'

export class ProjectPage extends PageCommon {
  get editButton() {
    return this.page.getByRole('button', { name: '編集' })
  }

  get saveButton() {
    return this.page.getByRole('button', { name: '保存' })
  }

  waitForProjectLoaded() {
    return this.page.waitForResponse('**/api/v1/project-cost/**/result')
  }

  waitForProjectDetailLoaded() {
    return this.page.waitForResponse('**/api/v1/project_master/projects/**')
  }

  waitForProjectUpdated() {
    return this.page.waitForResponse('**/api/v1/project_master/projects/update/**')
  }

  async editProject() {
    await this.editButton.click()
    await this.waitForProjectDetailLoaded()
    const projectName = await this.page.locator('[name="name"]')
    await projectName.fill(`PRJ1-edit-${Date.now()}`)
    await this.saveButton.click()
    await this.waitForProjectUpdated()
  }
}
