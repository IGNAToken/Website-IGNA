import { removeTrailingSlash } from './lib/stringHelpers'

export const IGNA_TOKEN_MINT = import.meta.env.VITE_TOKEN_CONTRACT
export const API_URL = removeTrailingSlash(import.meta.env.VITE_API_URL)
export const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY
export const DISCORD_URL = 'https://discord.gg/xvgY4Rwb'
