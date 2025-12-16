import { useNavigate } from '@tanstack/react-router'
import { handleNavigation, isExternalUrl } from '@/lib/urlHelpers'

/**
 * Custom hook for handling both internal and external navigation
 * 
 * @example
 * ```tsx
 * const { navigateTo } = useNavigation()
 * 
 * // Internal route
 * navigateTo('/swap')
 * 
 * // External URL
 * navigateTo('https://example.com')
 * 
 * // External URL in new tab
 * navigateTo('https://example.com', { openInNewTab: true })
 * ```
 */
export const useNavigation = () => {
  const navigate = useNavigate()

  const navigateTo = (
    url: string,
    options?: {
      openInNewTab?: boolean
      trackAnalytics?: boolean
    }
  ) => {
    handleNavigation(url, navigate, options)
  }

  return {
    navigateTo,
    isExternalUrl,
  }
}

