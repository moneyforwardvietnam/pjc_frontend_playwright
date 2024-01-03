import { Page } from '@playwright/test'
import { ResponseBrowser } from './schema'
import { Response } from 'playwright'

export async function interceptRequest<E>(urlOrPredicate: string | RegExp | ((response: Response) => boolean | Promise<boolean>), page: Page) {
  const res: ResponseBrowser<E> = await page.waitForResponse(urlOrPredicate, { timeout: 3000 })
  return res
}
