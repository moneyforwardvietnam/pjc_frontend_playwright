import { LoginPage } from '@pages/login-page'
import { SwitchOfficePage } from '@pages/offices/switch-office-page'
import { test as baseTest } from '@playwright/test'
import fs from 'fs'
import path from 'path'
export * from '@playwright/test'

export const test = baseTest.extend<{}, { authentication?: {
    email: string,
    password: string,
    officeName: string,
  }}>({
  context: async ({authentication, browser}, use) => {
    if (!authentication) return

    const md5 = require('crypto').createHash('md5').update(authentication.email + authentication.officeName).digest('hex')
    const fileName = path.resolve(`src/.auth/user-${md5}.json`)

    if (fs.existsSync(fileName)) {
      const context = await browser.newContext({storageState: fileName})
      return use(context)
    }

    const page = await browser.newPage({ locale: 'ja', storageState: undefined })
    const pageLogin = new LoginPage(page)

    await pageLogin.login(authentication.email, authentication.password)
    const switchOfficePage = new SwitchOfficePage(page)
    await switchOfficePage.switchOffice(authentication.officeName)
    const context = page.context()
    await context.storageState({ path: fileName })
    await page.close()

    const browserContext = await browser.newContext({storageState: fileName})
    return use(browserContext)
  }
})

export const expect = test.expect