import { accounts } from '@data/accounts'
import { LoginPage } from '@pages/login-page'
import { SwitchOfficePage } from '@pages/offices/switch-office-page'
import { test as baseTest } from '@playwright/test'
import fs from 'fs'
import path from 'path'
export * from '@playwright/test'

export const test = baseTest.extend<{}, { workerStorageState: string }>({
  // Use the same storage state for all tests in this worker.
  storageState: ({ workerStorageState }, use) => use(workerStorageState),

  // Authenticate once per worker with a worker-scoped fixture.
  workerStorageState: [
    async ({ browser }, use) => {
      // Use parallelIndex as a unique identifier for each worker.
      const id = test.info().parallelIndex
      const fileName = path.resolve(`src/.auth/user${id}.json`)

      if (fs.existsSync(fileName)) {
        // Reuse existing authentication state if any.
        await use(fileName)
        return
      }

      // Important: make sure we authenticate in a clean environment by unsetting storage state.
      const page = await browser.newPage({ locale: 'ja', storageState: undefined })
      const pageLogin = new LoginPage(page)

      await pageLogin.login(accounts.DEFAULT.email, accounts.DEFAULT.password)
      const switchOfficePage = new SwitchOfficePage(page)
      await switchOfficePage.switchOffice('QA')
      await page.context().storageState({ path: fileName })
      await page.close()
      await use(fileName)
    },
    { scope: 'worker' },
  ],
})
