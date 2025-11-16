import { Button } from '@/components/ui/button'
import { DISCORD_URL } from '@/config'
import { useTranslation } from 'react-i18next'

const HeroTranslated = () => {
  const { t } = useTranslation()

  return (
    <div className='hero-container'>
      {/* Background Image - Optimized for LCP */}
      <img
        src='/hero-bg.webp'
        alt='hero'
        className='hero-bg-image'
        loading='eager'
        fetchPriority='high'
        decoding='sync'
      />

      {/* Content Overlay */}
      <div className='hero-content-overlay'>
        <div className='hero-content-container'>
          <h2 className='hero-subtitle'>{t('landing.hero.subtitle')}</h2>
          <h1 className='hero-main-title'>
            <div className='hero-title-row'>
              {t('landing.hero.title.row1')}
              <span className='hero-gradient-text'>{t('landing.hero.title.row2')}</span>
            </div>
            <div className='hero-title-row'>
              {t('landing.hero.title.row3')}
              <span className='hero-gradient-text'>{t('landing.hero.title.row4')}</span>
            </div>
          </h1>
          <h3 className='hero-description'>
            {t('landing.hero.description')}
          </h3>
          <div className='hero-buttons-container'>
            <Button
              variant='outline'
              className='bg-background hero-button hero-button-outline'
              asChild
            >
              <a href='#strategy'>{t('landing.hero.buttons.learnMore')}</a>
            </Button>
            <Button
              className='font-bold hero-button hero-button-default'
              asChild
            >
              <a href={DISCORD_URL} target='_blank' rel='noopener noreferrer'>
                {t('landing.hero.buttons.joinDiscord')}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroTranslated

