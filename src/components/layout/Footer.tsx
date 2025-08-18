import Logo from '@/components/shared/Logo'
import useSocial from '@/hooks/useSocial'
import { Link } from '@tanstack/react-router'
import { version } from '../../../package.json'

const links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Buy $IGNA',
    href: '/swap',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

const Footer = () => {
  const { data: socials } = useSocial()
  return (
    <footer className='bg-black/80 text-white px-2'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <div>
          <Logo className='h-6' />
        </div>
        <div>
          <ul className='flex gap-4 text-sm'>
            {links.map((link) => (
              <li key={link.label}>
                <Link to={link.href} className='hover:text-primary transition-colors text-white/80'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='border-t border-white/20' />
      <div className='container mx-auto flex justify-between items-center gap-1 flex-col-reverse md:flex-row py-2 text-xs'>
        <div className='flex flex-row gap-1'>
          <p>© 2025 IGNA Token. All rights reserved.</p>
          <p>v{version}</p>
        </div>
        <div className='flex gap-2'>
          <p>Follow us</p>
          {socials?.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary transition-colors text-white/80'
            >
              <p>{social.platform}</p>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
