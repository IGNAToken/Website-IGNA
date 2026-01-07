import { trackExternalLink } from './analytics'

/**
 * Checks if a URL is external (starts with http://, https://, or //)
 * @param url - The URL to check
 * @returns true if the URL is external, false if it's internal
 */
export const isExternalUrl = (url: string): boolean => {
  if (!url) return false
  
  // Check for protocol-relative URLs (//example.com)
  if (url.startsWith('//')) return true
  
  // Check for absolute URLs with protocol
  if (url.startsWith('http://') || url.startsWith('https://')) return true
  
  // Check for special protocols (mailto:, tel:, etc.)
  if (url.includes(':')) {
    const protocol = url.split(':')[0]
    if (['mailto', 'tel', 'sms', 'whatsapp'].includes(protocol)) return true
  }
  
  return false
}

/**
 * Handles navigation for both internal and external URLs
 * - Internal URLs: Uses TanStack Router's navigate function
 * - External URLs: Opens in a new tab and tracks analytics
 * 
 * @param url - The URL to navigate to
 * @param navigate - TanStack Router's navigate function
 * @param options - Optional configuration
 */
export const handleNavigation = (
  url: string,
  navigate: (options: { to: string }) => void,
  options?: {
    openInNewTab?: boolean
    trackAnalytics?: boolean
  }
) => {
  if (!url) return

  const { openInNewTab = false, trackAnalytics = true } = options || {}

  if (isExternalUrl(url)) {
    // External URL - open in new tab or current tab
    if (openInNewTab || !url.startsWith('mailto:') && !url.startsWith('tel:')) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      window.location.href = url
    }
    
    // Track external link click
    if (trackAnalytics) {
      trackExternalLink(url)
    }
  } else {
    // Internal URL - use TanStack Router navigation
    navigate({ to: url })
  }
}

