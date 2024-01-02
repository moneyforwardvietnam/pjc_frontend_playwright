import { PageCommon } from '@pages/page-common'

export class ProjectPage extends PageCommon {
  get deleteButton() {
    return this.page.getByRole('button', { name: '削除' })
  }

  get editButton() {
    return this.page.getByRole('button', { name: '編集' })
  }

  get saveButton() {
    return this.page.getByRole('button', { name: '保存' })
  }

  goto(biid: string) {
    return this.page.goto(`/project/${biid}`)
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

  waitForProjectDeleted() {
    return this.page.waitForResponse((response) => {
      return response.url().includes('/api/v1/project_master/projects/') && response.request().method() === 'DELETE'
    })
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
