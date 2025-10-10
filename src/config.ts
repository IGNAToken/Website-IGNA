import { removeTrailingSlash } from './lib/stringHelpers'

export const IGNA_TOKEN_MINT = import.meta.env.VITE_TOKEN_CONTRACT
export const API_URL = removeTrailingSlash(import.meta.env.VITE_API_URL)
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID
export const DISCORD_URL = import.meta.env.VITE_DISCORD_URL || 'https://discord.gg/jpGRXzu92K'

export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://ignatoken.com'

export const standaloneRouteMap: Record<string, string> = {
  'igna-tokenomics': `${SITE_URL}/igna-tokenomics`,
  'how-to-buy-igna': `${SITE_URL}/how-to-buy-igna`,
}
