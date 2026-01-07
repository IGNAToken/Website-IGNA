import { Button } from '@/components/ui/button'
import { DISCORD_URL, phoneNumber } from '@/config'
import { useTranslation } from 'react-i18next'

const CtaBlock = ({ size = 'lg' }: { size?: 'lg' | 'sm' }) => {
  const { t } = useTranslation()

  const handleContactClick = () => {
    // Navigate to the home route with hash
    // Using window.location to ensure hash is preserved and MainLayout's hash handler can process it
    if (window.location.pathname === '/') {
      // Already on home page, just update hash
      window.location.hash = 'contact'
    } else {
      // Navigate to home page with hash
      window.location.href = '/#contact'
    }
  }

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center ${size === 'sm' ? 'gap-2' : 'gap-4'}`}
    >
      <a href={`tel:${phoneNumber}`}>
        <Button size={size} className={size === 'lg' ? 'font-bold' : ''}>
          {t('landing.ctaBlock.call')}
        </Button>
      </a>
      <Button
        size={size}
        className={size === 'lg' ? 'font-bold' : ''}
        onClick={handleContactClick}
      >
        {t('landing.ctaBlock.contact')}
      </Button>
      <a href={DISCORD_URL}>
        <Button size={size} className={size === 'lg' ? 'font-bold' : ''}>
          {t('landing.ctaBlock.join')}
        </Button>
      </a>
    </div>
  )
}

export default CtaBlock
