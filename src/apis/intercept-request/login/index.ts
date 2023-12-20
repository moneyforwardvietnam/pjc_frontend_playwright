import { interceptRequest } from '@apis/intercept-request/interceptRequest'
import { User } from '@apis/models/user'
import { Page } from '@playwright/test'

export const getUserInfo = async (page: Page) => {
  return await interceptRequest<User>('https://project-cost.mfvn.dev/api/v1/me', page)
}
