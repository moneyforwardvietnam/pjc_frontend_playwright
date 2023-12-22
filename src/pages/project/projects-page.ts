import { PageCommon } from "@pages/page-common";

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
}