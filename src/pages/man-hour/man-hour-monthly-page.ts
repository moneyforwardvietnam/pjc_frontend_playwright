import { PageCommon } from '@pages/page-common'
import { Page } from '@playwright/test'

export class ManHourMonthlyPage extends PageCommon {
  private readonly manHourUrl: string

  constructor(page: Page) {
    super(page)
    this.manHourUrl = '/man-hour'
  }

  async goto() {
    await this.page.goto(this.manHourUrl)
  }
}
