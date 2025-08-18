import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import { useLocation } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  const location = useLocation()
  const [curtainActive, setCurtainActive] = useState(false)
  const [curtainPhase, setCurtainPhase] = useState<'idle' | 'covering' | 'revealing'>('idle')
  const [displayedChildren, setDisplayedChildren] = useState(children)
  const prevPathRef = useRef(location.pathname)

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
    </div>
  )
}

export default MainLayout
