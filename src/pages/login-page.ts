import { PageCommon } from '@pages/page-common'
import { Locator, Page } from '@playwright/test'

export class LoginPage extends PageCommon {
  public loginUrl: string
  public expectUrlAfterLogin = '/'
  private readonly emailInput: Locator

  constructor(page: Page) {
    super(page)
    this.loginUrl = '/login'
    this.emailInput = page.getByPlaceholder('example@moneyforward.com')
  }

  async goto() {
    await this.page.goto(this.loginUrl)
  }

  async login(email: string, password: string) {
    await this.goto()
    await this.page.getByRole('button', { name: 'マネーフォワードIDでログインして続行' }).click()

    await this.emailInput.click()
    await this.emailInput.fill(email)

    await (await this.page.$('#submitto')).click()
    await (await this.page.$('input[type="password"]')).fill(password)
    await (await this.page.$('#submitto')).click()

    const skipPasskeyButton = this.page.getByRole('link', { name: 'スキップする' })

    const count = await skipPasskeyButton.count()
    if (count > 0) {
      await skipPasskeyButton.click()
    }

    await this.page.waitForURL(this.expectUrlAfterLogin, {waitUntil: 'domcontentloaded'})
  }
}
