import { useNavigate, useLocation } from '@tanstack/react-router'
import { Globe, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export type Language = {
  code: 'en' | 'hu' | 'sk' | 'uae' | 'zh'
  label: string
  to: string
}

const languages: Language[] = [
  {
    code: 'en',
    label: 'English',
    to: '/',
  },
  {
    code: 'hu',
    label: 'Magyar',
    to: '/hu/landing',
  },
  {
    code: 'sk',
    label: 'Slovak',
    to: '/sk/landing',
  },
  {
    code: 'uae',
    label: 'العربية',
    to: '/uae/landing',
  },
  {
    code: 'zh',
    label: '中文',
    to: '/zh/landing',
  },
]

type LanguageSelectorProps = {
  variant?: 'dropdown' | 'list'
  onLanguageChange?: () => void
}

const LanguageSelector = ({ variant = 'dropdown', onLanguageChange }: LanguageSelectorProps) => {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const langDropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Get current language from pathname
  const getCurrentLang = () => {
    const path = location.pathname
    if (path.startsWith('/hu/')) return 'hu'
    if (path.startsWith('/sk/')) return 'sk'
    if (path.startsWith('/uae/')) return 'uae'
    if (path.startsWith('/zh/')) return 'zh'
    return 'en'
  }

  const currentLang = getCurrentLang()
  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangDropdownOpen(false)
      }
    }

    if (isLangDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLangDropdownOpen])

  const handleLanguageChange = (lang: Language) => {
    if (lang.code === 'en') {
      navigate({ to: '/' })
    } else {
      navigate({ to: '/$lang/landing', params: { lang: lang.code } })
    }
    setIsLangDropdownOpen(false)
    onLanguageChange?.()
  }

  if (variant === 'list') {
    return (
      <div className='border border-primary/30 rounded-lg overflow-hidden'>
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang)}
            className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 ${
              currentLang === lang.code
                ? 'bg-primary/20 text-primary font-medium'
                : 'text-white hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <div className='flex items-center justify-between'>
              <span>{lang.label}</span>
              <span className='text-xs opacity-60'>{lang.code.toUpperCase()}</span>
            </div>
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className='relative' ref={langDropdownRef}>
      <button
        onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
        className='flex items-center gap-2 px-3 py-2 text-white hover:text-primary transition-all duration-300 border border-primary/30 rounded-lg hover:border-primary/50 hover:bg-primary/10'
      >
        <Globe className='w-4 h-4' />
        <span className='hidden sm:inline text-sm'>{currentLanguage.code.toUpperCase()}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isLangDropdownOpen && (
        <div className='absolute right-0 mt-0 w-48 bg-black border border-primary/30 rounded-lg shadow-lg overflow-hidden z-50'>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang)}
              className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 ${
                currentLang === lang.code
                  ? 'bg-primary/20 text-primary font-medium'
                  : 'text-white hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <div className='flex items-center justify-between'>
                <span>{lang.label}</span>
                <span className='text-xs opacity-60'>{lang.code.toUpperCase()}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
