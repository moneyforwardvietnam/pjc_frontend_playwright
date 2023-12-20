import { PageCommon } from "@pages/page-common";
import { Page } from "@playwright/test";
import { envConfig } from "@utils/envConfig";

export class SwitchOfficePage extends PageCommon {
  public page: Page

  constructor(page: Page) {
    super(page)
    this.page = page
  }

  async goto() {
    await this.page.goto(envConfig.baseUrl + 'offices/switch', {waitUntil: 'networkidle'})
  }

  async switchOffice(officeName: string) {
    await this.goto()

    await this.page.waitForLoadState('domcontentloaded')

    const selectOfficeButtonPromise = this.page
      .getByRole('row', { name: officeName })
      .getByRole('button', { name: '切替' })

    const isDisabled = await selectOfficeButtonPromise.isDisabled( )
    if (isDisabled) {
      await this.page.goto(envConfig.baseUrl)
      return
    }

    await selectOfficeButtonPromise.click()
    await this.page.waitForURL(envConfig.baseUrl)
  }

  async switchOfficeByOfficeId(officeId: string) {
    await this.goto()
    const selectedButton = await this.page
      .locator(`tbody.ant-table-tbody tr[data-row-key="${officeId}"]`)
      ?.getByRole('button', { name: '切替' })
    if (await selectedButton.isDisabled()) {
      await this.page.goto(envConfig.baseUrl)
      return
    }
    await selectedButton.click()
    await this.page.waitForURL(envConfig.baseUrl)
  }
}
