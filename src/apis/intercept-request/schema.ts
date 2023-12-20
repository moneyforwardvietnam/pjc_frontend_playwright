import { Response } from '@playwright/test'

export interface ResponseCommon<T> {
  meta: { code: string }
  data: T
}

export type ResponseBrowser<E> = Omit<Response, 'json'> & {
  json(): Promise<ResponseCommon<E>>
}
