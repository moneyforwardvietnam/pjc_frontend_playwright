import { PageCommon } from '@pages/page-common'
import { Locator, Page } from '@playwright/test'

export class LoginPage extends PageCommon {
  public loginUrl: string
  public expectUrlAfterLogin: string
  private readonly emailInput: Locator
  private readonly passwordInput: Locator
  private signInButton: Locator

  constructor(page: Page) {
    super(page)
    this.loginUrl = '/login'
    this.emailInput = page.getByPlaceholder('example@moneyforward.com')
    this.passwordInput = page.getByLabel('Password', { exact: true })
    this.signInButton = page.getByRole('button', { name: 'Sign in' })
  }

  async goto() {
    await this.page.goto(this.loginUrl)
  }

  async login(email: string, password: string) {
    await this.goto()
    await this.clickLocatorByTestId('login-button')
    const availableAccountButton = await this.page.getByText('Use other accounts')
    if ((await availableAccountButton.count()) > 0) {
      await availableAccountButton.click()
    }
    await this.emailInput.click()
    await this.emailInput.fill(email)
    await this.signInButton.click()
    await this.passwordInput.fill(password)
    await this.signInButton.click()
    await this.page.waitForTimeout(2000)
    const btnSkip = this.page.getByText('No thanks')
    if ((await btnSkip.count()) > 0) {
      await btnSkip.click()
    }
    await this.page.waitForURL(this.expectUrlAfterLogin)
  }
}
