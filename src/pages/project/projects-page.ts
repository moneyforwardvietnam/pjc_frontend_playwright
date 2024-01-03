import { PageCommon } from "@pages/page-common";

interface NewProjectProps {
  name: string
  code: string
  startDate: string
  endDate?: string
  department: string
}
export class ProjectsPage extends PageCommon {

  get title() {
    return this.page.getByRole('heading', { name: 'プロジェクト' })
  }

  get reloadButton() {
    return this.page.getByRole('button', { name: '更新' })
  }

  get exportButton() {
    return this.page.getByRole('button', { name: 'エクスポート' })
  }

  get importButton() {
    return this.page.getByRole('button', { name: 'インポート' })
  }

  get createButton() {
    return this.page.getByRole('button', { name: '新規作成' })
  }

  get datePicker() {
    return this.page.getByPlaceholder('日付を選択')
  }

  get searchBox() {
    return this.page.getByPlaceholder('検索')
  }

  get tableHeads() {
    return {
      name: this.page.getByText('プロジェクト名'),
      code: this.page.getByText('コード'),
      startDate: this.page.getByText('開始日'),
      endDate: this.page.getByText('終了日'),
      department: this.page.getByText('部門'),
      manager: this.page.getByText('責任者'),
      tags: this.page.getByText('タグ'),
      displayOrder: this.page.getByText('表示順'),
    }
  }

  goto(query?: string) {
    return this.page.goto(query ? `/?${query}` : `/`)
  }

  waitUntilProjectsLoaded() {
    return this.page.waitForResponse('**/api/v1/project_master/projects**')
  }

  waitForAddNewProject() {
    return this.page.waitForResponse((response) => {
      return response.url().includes('/api/v1/project_master/projects') && response.request().method() === 'POST'
    })
  }

  async search(text: string) {
    await this.searchBox.fill(text)
    await this.searchBox.press('Enter')
    await this.waitUntilProjectsLoaded()
  }

  async setDate(date: string) {
    await this.datePicker.click()
    await this.datePicker.fill(date)
    await this.datePicker.press('Enter')
    await this.waitUntilProjectsLoaded()
  }

  async addNewProject(newProject: NewProjectProps) {
    const projectName = await this.page.locator('[name="name"]')
    await projectName.fill(newProject.name)
    const projectCode = await this.page.locator('[name="code"]')
    await projectCode.fill(newProject.code)
    
    const startDate = await this.page.locator('[name="valid_from"]')
    await this.chooseDate(startDate, newProject.startDate)
    
    const departmentWrapper = await this.page.locator('.form-item:has-text("部門")')
    await departmentWrapper.getByRole('combobox').click()
    await this.page.getByTitle(newProject.department).click()
    await this.page.locator('body').click()

    if (newProject.endDate) {
      const endDate = await this.page.locator('[name="valid_to"]')
      await this.chooseDate(endDate, newProject.endDate)
    }

    await this.page.getByRole('button', { name: '作成', exact: true }).click()
  }

  async deleteProjectByBiid(biid: string) {
    // eslint-disable-next-line no-undef
    const csrfToken = await this.page.evaluate(() => localStorage.getItem('csrfToken'))
    return this.page.request.delete(`/api/v1/project_master/projects/${biid}`, {
      headers: {
        'X-CSRF-Token': csrfToken,
        'Access-Control-Allow-Origin': '*',
      }
    })
  }

  selectProjectByName(name: string, exact = true) {
    return this.page.getByText(name, exact ? {exact} : null).click()
  }
}