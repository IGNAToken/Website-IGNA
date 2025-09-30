import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import CookieConsent from '@/components/shared/CookieConsent'
import { useLocation } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { useAnalytics } from '@/hooks/useAnalytics'

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  const location = useLocation()
  const [curtainActive, setCurtainActive] = useState(false)
  const [curtainPhase, setCurtainPhase] = useState<'idle' | 'covering' | 'revealing'>('idle')
  const [displayedChildren, setDisplayedChildren] = useState(children)
  const prevPathRef = useRef(location.pathname)

  // Initialize analytics tracking
  useAnalytics()

  useEffect(() => {
    if (location.pathname !== prevPathRef.current) {
      setCurtainActive(true)
      setCurtainPhase('covering')
      // After curtain covers, swap content
      setTimeout(() => {
        setDisplayedChildren(children)
        prevPathRef.current = location.pathname
        setCurtainPhase('revealing')
        // After reveal, hide curtain
        setTimeout(() => {
          setCurtainActive(false)
          setCurtainPhase('idle')
        }, 500) // match reveal duration
      }, 500) // match cover duration
    } else {
      setDisplayedChildren(children)
    }
  }, [children, location.pathname])

  // Handle hash navigation
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash
      if (hash) {
        // Wait for content to be rendered
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }

    // Handle initial hash
    handleHashNavigation()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation)

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation)
    }
  }, [])

  return (
    <div className={`bg-background text-white flex flex-col min-h-screen justify-between relative`}>
      {/* Curtain overlay */}
      <div className={`flex-grow flex flex-col`}>
        <NavBar />
        <div className='relative'>
          {curtainActive && (
            <div
              className={`absolute left-0 top-0 w-full z-50 bg-background transition-all duration-500`}
              style={{
                height: curtainPhase === 'covering' ? '100%' : curtainPhase === 'revealing' ? '0vh' : '0vh',
                pointerEvents: 'none',
              }}
            />
          )}
          {displayedChildren}
        </div>
      </div>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default MainLayout
