import { Page } from '@playwright/test'
import { ResponseBrowser } from './schema'

export async function interceptRequest<E>(url: string, page: Page) {
  const res: ResponseBrowser<E> = await page.waitForResponse(url, { timeout: 3000 })
  return res
}
