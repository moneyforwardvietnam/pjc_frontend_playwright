import { PageCommon } from '@pages/page-common'
import { Locator, Page } from '@playwright/test'

export class LoginPage extends PageCommon {
  public loginUrl: string
  public expectUrlAfterLogin: string = '/'
  private readonly emailInput: Locator
  private readonly passwordInput: Locator
  private signInButton: Locator
  skipPasskeyButton: Locator

  constructor(page: Page) {
    super(page)
    this.loginUrl = '/login'
    this.emailInput = page.getByPlaceholder('example@moneyforward.com')
    this.passwordInput = page.getByLabel('パスワード', { exact: true })
    this.signInButton = page.getByRole('button', { name: 'ログインする', exact: true })
    this.skipPasskeyButton = page.getByRole('link', { name: 'スキップする' })
  }

  async goto() {
    await this.page.goto(this.loginUrl)
  }

  async login(email: string, password: string) {
    await this.goto()
    await this.page.getByRole('button', { name: 'マネーフォワードIDでログインして続行' }).click()
    await this.emailInput.click()
    await this.emailInput.fill(email)
    await this.signInButton.click()
    await this.passwordInput.fill(password)
    await this.signInButton.click()

    const skipPasskeyButton = this.page.getByRole('link', { name: 'スキップする' })

    const count = await skipPasskeyButton.count()
    if (count > 0) {
      await skipPasskeyButton.click()
    }

    await this.page.waitForURL(this.expectUrlAfterLogin, {waitUntil: 'domcontentloaded'})
  }
}
