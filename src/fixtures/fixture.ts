import { accountsByEmail, prodAccountsByEmail } from "@data/accounts";
import { LoginPage } from '@pages/login-page'
import { SwitchOfficePage } from '@pages/offices/switch-office-page'
import { test as baseTest } from '@playwright/test'
import { baseUrls, ISupportedEnvironment } from "@utils/envConfig";
import fs from 'fs'
import path from 'path'
export * from '@playwright/test'

/**
 * IF return true, that mean the file exists, just use the file
 * IF return false, that mean the file not exists in all workers, so we need to login
 */
function waitUntilFileExists(fileName: string, {timeout = 30_000}: {timeout?: number} = {}): Promise<boolean> {
  return new Promise((resolve) => {

    // If the file exists, just use the file
    if (fs.existsSync(fileName)) return resolve(true)

    const tmpFilename = fileName + '.tmp'

    // If the tmp file not exists, we will login normally
    if (!fs.existsSync(tmpFilename)) return resolve(false)

    let intervalId
    let timeoutId

    setTimeout(() => {
      clearInterval(intervalId)
      clearTimeout(timeoutId)

      resolve(false)
    }, timeout)

    setInterval(() => {
      if (!fs.existsSync(fileName)) return

      clearInterval(intervalId)
      clearTimeout(timeoutId)
      return resolve(true)
    }, 50)
  })
}

export const test = baseTest.extend<{}, { authentication?: {
    email: string,
    officeName: string,
  }, environment: ISupportedEnvironment
}>({
  environment: ['staging', {scope: "worker"}],

  authentication: [{email: '', officeName: ''}, {option: true, scope: "worker"}],

  context: async ({authentication, environment, browser}, use, testInfo) => {
    const baseURL = baseUrls[environment]

    if (!authentication) return use(await browser.newContext({baseURL}));

    const md5 = require('crypto').createHash('md5').update(authentication.email + authentication.officeName).digest('hex')
    const fileName = path.resolve(`src/.auth/user-${md5}.json`)

    // delay for 50ms
    await new Promise(resolve => setTimeout(resolve, testInfo.workerIndex * 50))

    const fileExists = await waitUntilFileExists(fileName)

    if (fileExists) {
      const context = await browser.newContext({storageState: fileName, baseURL})
      return use(context)
    }

    fs.writeFileSync(fileName + '.tmp', '')

    const page = await browser.newPage({ locale: 'ja', storageState: undefined, baseURL })
    const pageLogin = new LoginPage(page, { environment })

    const password = environment === 'production'
      ? prodAccountsByEmail[authentication.email].password
      : accountsByEmail[authentication.email].password

    await pageLogin.login(authentication.email, password)
    const switchOfficePage = new SwitchOfficePage(page)
    await switchOfficePage.switchOffice(authentication.officeName)
    const context = page.context()
    await context.storageState({ path: fileName })
    await page.close()

    const browserContext = await browser.newContext({storageState: fileName, baseURL})

    try {fs.unlinkSync(fileName + '.tmp')} catch (e) {}
    return use(browserContext)
  }
})

export const expect = test.expect