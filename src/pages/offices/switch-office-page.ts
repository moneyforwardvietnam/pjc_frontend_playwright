import { PageCommon } from '@pages/page-common'
import { Page, test } from '@playwright/test'
import { envConfig } from '@utils/envConfig'
import path from 'path'

export class SwitchOfficePage extends PageCommon {
  public page: Page

  constructor(page: Page) {
    super(page)
    this.page = page
  }

  async goto() {
    await this.page.goto(envConfig.baseUrl + 'offices/switch', { waitUntil: 'networkidle' })
  }

  async switchOffice(officeName: string) {
    await this.goto()
    const selectButton = this.page.getByRole('row', { name: officeName })
    const isSelectedOfficeDisables = await this.page
      .getByRole('row', { name: officeName })
      .getByRole('button', { name: '切替' })
      ?.isDisabled()
    if (isSelectedOfficeDisables) {
      await this.page.goto(envConfig.baseUrl)
      return
    }
    await this.page.getByRole('row', { name: officeName }).getByRole('button', { name: '切替' }).click()
    await this.page.waitForURL(envConfig.baseUrl)
    const id = test.info().parallelIndex
    const fileName = path.resolve(`src/.auth/user${id}.json`)
    await this.page.context().storageState({ path: fileName })
  }

  async switchOfficeByOfficeId(officeId: string) {
    await this.goto()
    const selectedButton = await this.page
      .locator('tbody.ant-table-tbody tr[data-row-key="01GHZJKJGPKMZ5Z38K0Y34J89N"]')
      ?.getByRole('button', { name: '切替' })
    if (await selectedButton.isDisabled()) {
      await this.page.goto(envConfig.baseUrl)
      return
    }
    await selectedButton.click()
    await this.page.waitForURL(envConfig.baseUrl)
  }
}
