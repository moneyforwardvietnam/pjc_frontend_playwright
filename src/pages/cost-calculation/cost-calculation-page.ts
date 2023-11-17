import { PageCommon } from '@pages/page-common'
import { Page } from '@playwright/test'
import { envConfig } from '@utils/envConfig'

export class CostCalculationPage extends PageCommon {
  private readonly costCalculationUrl: string

  constructor(page: Page, queries?: string) {
    super(page)
    this.costCalculationUrl = envConfig.baseUrl + `/cost-calculation${queries}`
  }

  async goto() {
    await this.page.goto(this.costCalculationUrl, { waitUntil: 'networkidle' })
  }

  async getCostResultData() {
    const rows = this.page.locator('.ant-table-row-level-0')
    const resultData = []
    for (let i = 0; i < (await rows.count()); i++) {
      const cellsOfRow = await rows.nth(i).locator('.ant-table-cell')
      const projectName = await cellsOfRow.nth(0).textContent()
      const projectResult = await cellsOfRow.nth(5).textContent()
      resultData.push({ projectName, projectResult })
    }
    return resultData
  }
}
