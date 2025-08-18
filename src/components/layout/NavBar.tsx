import { Link } from '@tanstack/react-router'
import Logo from '../shared/Logo'
import { Button } from '../ui/button'
import { MenuIcon, XIcon, Download } from 'lucide-react'
import { useState } from 'react'

// Function to handle PDF download
const handleWhitePaperDownload = () => {
  // Create a link element to trigger download
  const link = document.createElement('a')
  link.href = '/whitepaper.pdf' // PDF should be placed in public folder
  link.download = 'IGNA-Whitepaper.pdf'
  link.target = '_blank'

  // Try to download, fallback to opening in new tab if download fails
  try {
    link.click()
  } catch {
    // Fallback: open in new tab
    window.open('/whitepaper.pdf', '_blank')
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
    label: 'Blog',
    to: '/blog',
  },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
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
          <div>
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
            <MenuIcon className='size-6 text-white' onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </div>
      <NavBarMobile isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

const NavBarMobile = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
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
            <Button variant='ghost' className='flex justify-end p-0' onClick={onClose}>
              <XIcon className='size-6 text-white' />
            </Button>
            <ul className='flex flex-col gap-4 items-end px-4'>
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className=' [&.active]:text-primary text-white' onClick={onClose}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex gap-2 items-center'>
            <Button variant='outline' className='text-white rounded-4xl w-full' onClick={handleWhitePaperDownload}>
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
