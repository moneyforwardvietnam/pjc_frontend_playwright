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
    await this.page.goto(envConfig.baseUrl + '/offices/switch')
  }

  async switchOffice(officeName: string) {
    await this.goto()
    await this.page.getByRole('row', { name: officeName }).getByRole('button', { name: '切替' }).click()
    await this.page.waitForURL(envConfig.baseUrl)
    const id = test.info().parallelIndex
    const fileName = path.resolve(`src/.auth/user${id}.json`)
    await this.page.context().storageState({ path: fileName })
  }
}
