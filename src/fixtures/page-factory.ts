import {LoginPage} from "@pages/login-page";
import { Page, test as baseTest } from './fixture'
import { request as apiRequest } from './fixture'

export type Pages = {
  page: Page
  loginPage: LoginPage
}

const pageManager = baseTest.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page))
  },
})

export const test = pageManager

export const expect = pageManager.expect
export const request = apiRequest
