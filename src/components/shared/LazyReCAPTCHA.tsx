import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import type { ReCAPTCHA } from 'react-google-recaptcha'
import { RECAPTCHA_SITE_KEY } from '@/config'

interface LazyReCAPTCHAProps {
  onChange?: (token: string | null) => void
  onLoad?: () => void
}

export interface LazyReCAPTCHARef {
  reset: () => void
  execute: () => void
}

const LazyReCAPTCHA = forwardRef<LazyReCAPTCHARef, LazyReCAPTCHAProps>(({ onChange, onLoad }, ref) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [ReCAPTCHAComponent, setReCAPTCHAComponent] = useState<any>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
      }
    },
    execute: () => {
      if (recaptchaRef.current) {
        recaptchaRef.current.execute()
      }
    },
  }))

  const loadReCAPTCHA = async () => {
    if (isLoaded || isLoading) return

    setIsLoading(true)
    try {
      const { default: ReCAPTCHA } = await import('react-google-recaptcha')
      setReCAPTCHAComponent(() => ReCAPTCHA)
      setIsLoaded(true)
      onLoad?.()
    } catch (error) {
      console.error('Failed to load reCAPTCHA:', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadReCAPTCHA()
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '100px', // Load when 100px away from viewport
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className='min-h-[78px] flex items-center justify-center'>
      {isLoading && <div className='text-sm text-gray-500'>Loading reCAPTCHA...</div>}
      {isLoaded && ReCAPTCHAComponent && (
        <ReCAPTCHAComponent sitekey={RECAPTCHA_SITE_KEY} ref={recaptchaRef} onChange={onChange} />
      )}
      {!isLoaded && !isLoading && <div className='text-sm text-gray-500'>reCAPTCHA will load when needed</div>}
    </div>
  )
})

LazyReCAPTCHA.displayName = 'LazyReCAPTCHA'

export default LazyReCAPTCHA
