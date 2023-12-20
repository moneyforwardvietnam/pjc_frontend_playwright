// We will support multiple environment here, so we will just map it
export const SUPPORTED_ENVIRONMENTS = ['staging', 'production'] as const
export type ISupportedEnvironment = (typeof SUPPORTED_ENVIRONMENTS)[number]

export const baseUrls = {
  staging: 'https://project-cost.mfvn.dev/',
  production: 'https://project-cost.moneyforward.com/'
} as const

export const envConfig = {
  baseUrl: process.env.BASE_URL ?? 'https://project-cost.mfvn.dev/'
}