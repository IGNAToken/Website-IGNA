/**
 * Google Analytics 4 utility functions using gtag.js with Consent Mode V2
 *
 * This implementation follows Google's Consent Mode V2 requirements:
 * - Sets default consent to 'denied' for privacy-first approach
 * - Updates consent state when user makes choices
 * - Supports all four V2 consent signals:
 *   - analytics_storage: Controls Google Analytics cookies
 *   - ad_storage: Controls advertising cookies
 *   - ad_user_data: Controls sharing user data for ads
 *   - ad_personalization: Controls personalized advertising
 */
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

import { GA_MEASUREMENT_ID } from '@/config'

// Consent Mode V2 types
interface ConsentState {
  analytics_storage: 'granted' | 'denied'
  ad_storage: 'granted' | 'denied'
  ad_user_data: 'granted' | 'denied'
  ad_personalization: 'granted' | 'denied'
}

// Initialize Google Analytics (requires initConsentMode to be called first)
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not found')
    return
  }

  if (!window.gtag) {
    console.warn('gtag not initialized. Call initConsentMode() first.')
    return
  }

  // Load gtag script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  // Configure Google Analytics
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  })
}

// Initialize Consent Mode V2 early in page load process
export const initConsentMode = () => {
  // Initialize dataLayer early if not already done
  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args)
  }

  // Set default consent state (denied by default)
  const defaultConsent: ConsentState = {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  }

  window.gtag('consent', 'default', defaultConsent)
  window.gtag('js', new Date())

  // Check for existing consent and update if needed
  const consent = localStorage.getItem('cookie-consent')
  if (consent === 'accepted') {
    updateConsentState(true)
  }
}

// Update consent state for Google Consent Mode V2
export const updateConsentState = (accepted: boolean) => {
  if (!window.gtag) {
    console.warn('gtag not available')
    return
  }

  const consentState: ConsentState = {
    analytics_storage: accepted ? 'granted' : 'denied',
    ad_storage: accepted ? 'granted' : 'denied',
    ad_user_data: accepted ? 'granted' : 'denied',
    ad_personalization: accepted ? 'granted' : 'denied',
  }

  window.gtag('consent', 'update', consentState)
}

// Track page view
export const trackPageView = (url: string, title?: string) => {
  if (!window.gtag || !GA_MEASUREMENT_ID) return

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title || document.title,
    page_location: window.location.href,
  })
}

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  if (!window.gtag || !GA_MEASUREMENT_ID) return

  window.gtag('event', eventName, parameters)
}

// Common event tracking functions
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || window.location.pathname,
  })
}

export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    form_name: formName,
    page_location: window.location.pathname,
  })
}

export const trackDownload = (fileName: string) => {
  trackEvent('file_download', {
    file_name: fileName,
    page_location: window.location.pathname,
  })
}

export const trackExternalLink = (url: string) => {
  trackEvent('external_link_click', {
    link_url: url,
    page_location: window.location.pathname,
  })
}
