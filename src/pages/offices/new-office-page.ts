import { PageCommon } from '@pages/page-common'
import { Page, test } from '@playwright/test'
import { envConfig } from '@utils/envConfig'
import path from 'path'

export class NewOfficePage extends PageCommon {
  public page: Page

  constructor(page: Page) {
    super(page)
    this.page = page
  }

  async goto() {
    await this.page.goto(envConfig.baseUrl + 'offices/new', { waitUntil: 'networkidle' })
  }

  async cloneOffice(officeName: string) {
    await this.goto()
    const isSelectedOfficeDisables = await this.page
      .getByText(officeName)
      .getByRole('button', { name: '切替' })
      ?.isDisabled()
    if (isSelectedOfficeDisables) {
      await this.page.goto(envConfig.baseUrl)
      return
    }
    await this.page.getByRole('row', { name: officeName }).getByRole('button', { name: '切替' }).click()
    await this.page.waitForURL(envConfig.baseUrl)
  }
}
