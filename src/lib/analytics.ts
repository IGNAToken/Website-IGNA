// Google Analytics 4 utility functions using gtag.js
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

import { GA_MEASUREMENT_ID } from '@/config'

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID not found')
    return
  }

  // Load gtag script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || []
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  })
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
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
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
