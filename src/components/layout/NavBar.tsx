import { Link, useNavigate, useLocation } from '@tanstack/react-router'
import Logo from '../shared/Logo'
import { Button } from '../ui/button'
import { MenuIcon, XIcon, Download, Globe, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

// Function to handle PDF download
const handleWhitePaperDownload = () => {
  // Create a link element to trigger download
  const link = document.createElement('a')
  link.href = '/docs/whitepaper.pdf' // PDF should be placed in public folder
  link.download = 'IGNA-Whitepaper.pdf'
  link.target = '_blank'

  // Try to download, fallback to opening in new tab if download fails
  try {
    link.click()
  } catch {
    // Fallback: open in new tab
    window.open('/docs/whitepaper.pdf', '_blank')
  }
}

const menuItems = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Swap',
    to: '/swap',
  },
  {
    label: 'News & Blog',
    to: '/blog',
  },
  {
    label: 'Docs',
    to: '/docs',
  },
]

type Language = {
  code: 'en' | 'hu' | 'sk'
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
    label: 'Slovenčina',
    to: '/sk/landing',
  },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const langDropdownRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Get current language from pathname
  const getCurrentLang = () => {
    const path = location.pathname
    if (path.startsWith('/hu/')) return 'hu'
    if (path.startsWith('/sk/')) return 'sk'
    return 'en'
  }

  const currentLang = getCurrentLang()
  const currentLanguage =
    languages.find((lang) => lang.code === currentLang) || languages[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
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
  }

  return (
    <div className='w-full md:p-4 p-2 bg-black relative z-50'>
      <div className='container mx-auto flex gap-2 items-center justify-between'>
        <Link to='/' className='[&.active]:font-bold'>
          <Logo className='h-8 ' />
        </Link>
        <div className='flex gap-6 items-center'>
          <ul className='hidden md:flex gap-4'>
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className='[&.active]:text-primary text-white hover:text-white/75 transition-all duration-300'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className='flex gap-3 items-center'>
            {/* Language Selector */}
            <div className='relative' ref={langDropdownRef}>
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className='flex items-center gap-2 px-3 py-2 text-white hover:text-primary transition-all duration-300 border border-primary/30 rounded-lg hover:border-primary/50 hover:bg-primary/10'
              >
                <Globe className='w-4 h-4' />
                <span className='hidden sm:inline text-sm'>
                  {currentLanguage.code.toUpperCase()}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isLangDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isLangDropdownOpen && (
                <div className='absolute right-0 mt-2 w-48 bg-black border border-primary/30 rounded-lg shadow-lg overflow-hidden z-50'>
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
                        <span className='text-xs opacity-60'>
                          {lang.code.toUpperCase()}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Button
              variant='outline'
              className='text-white rounded-4xl hover:bg-primary/15 hover:text-white transition-all duration-300'
              onClick={handleWhitePaperDownload}
            >
              <Download className='w-4 h-4' />
              WhitePaper
            </Button>
          </div>
          <div className='md:hidden'>
            <MenuIcon
              className='size-6 text-white'
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </div>
      <NavBarMobile
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        currentLang={currentLang}
        languages={languages}
        onLanguageChange={handleLanguageChange}
      />
    </div>
  )
}

const NavBarMobile = ({
  isOpen,
  onClose,
  currentLang,
  languages,
  onLanguageChange,
}: {
  isOpen: boolean
  onClose: () => void
  currentLang: string
  languages: Language[]
  onLanguageChange: (lang: Language) => void
}) => {
  return (
    <>
      {/* Backdrop with transition */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-50 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Mobile menu with slide transition */}
      <div
        className={`fixed top-0 right-0 w-1/2 h-full bg-black z-60 p-4 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex flex-col justify-between h-full gap-4'>
          <div className='flex flex-col gap-4'>
            <Button
              variant='ghost'
              className='flex justify-end p-0'
              onClick={onClose}
            >
              <XIcon className='size-6 text-white' />
            </Button>
            <ul className='flex flex-col gap-4 items-end px-4'>
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className=' [&.active]:text-primary text-white'
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-2'>
            {/* Language Selector Mobile */}
            <div className='border border-primary/30 rounded-lg overflow-hidden'>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLanguageChange(lang)
                    onClose()
                  }}
                  className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 ${
                    currentLang === lang.code
                      ? 'bg-primary/20 text-primary font-medium'
                      : 'text-white hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <div className='flex items-center justify-between'>
                    <span>{lang.label}</span>
                    <span className='text-xs opacity-60'>
                      {lang.code.toUpperCase()}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            <Button
              variant='outline'
              className='text-white rounded-4xl w-full'
              onClick={handleWhitePaperDownload}
            >
              <Download className='w-4 h-4' />
              WhitePaper
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
