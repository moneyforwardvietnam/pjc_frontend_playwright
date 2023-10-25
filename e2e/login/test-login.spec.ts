import { getUserInfo } from '@apis/intercept-request/login'
import { test, expect } from '@playwright/test'
import { loginFlow } from '../../src/flows'

test('Test login page', async ({ page }) => {
  await loginFlow({ page })
  await page.waitForResponse(
    (response) => response.url() === 'https://project-cost.mfvn.dev/api/v1/me' && response.status() === 200
  )
  // const responseUserInfo = await getUserInfo(page)
  // console.log('responseUserInfo: ', responseUserInfo)
  // expect(responseUserInfo.status()).toEqual(200)
})
