import { useEffect } from 'react'
import { useLocation } from '@tanstack/react-router'
import { trackPageView } from '@/lib/analytics'

// Hook to automatically track page views with TanStack Router
export const useAnalytics = () => {
  const location = useLocation()

  useEffect(() => {
    // Check if user has given consent
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted') {
      trackPageView(location.pathname)
    }
  }, [location.pathname])
}

export default useAnalytics
