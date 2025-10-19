import { useState, useEffect } from 'react'
import { initGA, updateConsentState } from '@/lib/analytics'

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie-consent')
    if (consent === null) {
      setShowConsent(true)
    } else {
      const accepted = consent === 'accepted'
      // Update consent state based on stored preference
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname,
        page_title: document.title,
        page_location: window.location.href,
      })
      updateConsentState(accepted)
      if (accepted) {
        initGA()
      }
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    window.gtag('event', 'page_view', {
      page_path: window.location.pathname,
      page_title: document.title,
      page_location: window.location.href,
    })
    setShowConsent(false)
    // Update Consent Mode V2 to grant permissions
    updateConsentState(true)
    // Initialize Google Analytics after granting consent
    initGA()
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowConsent(false)
    // Update Consent Mode V2 to deny permissions
    updateConsentState(false)
  }

  if (!showConsent) return null

  return (
    <div className='fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border p-4 shadow-lg'>
      <div className='max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-white mb-2'>
            Cookie Consent
          </h3>
          <p className='text-sm text-gray-300 leading-relaxed'>
            We use cookies to enhance your browsing experience, analyze site
            traffic, and personalize content. By clicking "Accept All", you
            consent to our use of cookies. You can also choose to decline
            non-essential cookies.
          </p>
        </div>
        <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
          <button
            onClick={handleDecline}
            className='px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-md hover:bg-gray-800/50 transition-colors'
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className='px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors'
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
