import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import AnimatedBubbles from '@/components/shared/AnimatedBubbles'
import CtaBlock from './CtaBlock'

const HeroTranslated = () => {
  const { t } = useTranslation()
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div
        ref={containerRef}
        className='relative w-full h-[calc(100vh-50px)] bg-background min-h-[600px] overflow-hidden flex items-center justify-center'
      >
        {/* Background Image - Optimized for LCP */}
        <div className='absolute inset-0 w-full h-full'>
          <img
            src='/hero-bg.webp'
            alt='hero'
            className='w-full h-full object-cover'
            loading='eager'
            fetchPriority='high'
            decoding='sync'
          />
          {/* Dark overlay for better text readability */}
          {/* <div className='absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60' /> */}
        </div>

        {/* Animated Bubbles Background */}
        <AnimatedBubbles minSize={15} maxSize={50} count={20} />

        {/* Content Overlay */}
        <div className='relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-center text-center space-y-6 md:space-y-8'>
            {/* Subtitle with animation */}
            <h2 className='text-sm md:text-base lg:text-lg font-semibold tracking-[0.2em] uppercase text-primary/90 animate-[fadeInDown_1s_ease-out]'>
              {t('landing.hero.subtitle')}
            </h2>
            {/* Main Title with gradient and animation */}
            <h1 className='space-y-2 md:space-y-4'>
              <div className='flex flex-col items-center justify-center gap-2 md:gap-4'>
                <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent animate-[fadeInUp_1s_ease-out_0.2s_both] drop-shadow-2xl'>
                  {t('landing.hero.title.row1')}
                </span>
                <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white animate-[fadeInUp_1s_ease-out_0.4s_both] drop-shadow-2xl'>
                  {t('landing.hero.title.row2')}
                </span>
              </div>
            </h1>
            {/* Description if available
            {t('landing.hero.description') && (
              <p className='text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.6s_both] leading-relaxed'>
                {t('landing.hero.description')}
              </p>
            )} */}
            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-12 animate-[fadeInUp_1s_ease-out_0.8s_both]'>
              <CtaBlock />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce'>
          <div className='w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-primary/50 rounded-full mt-2 animate-pulse' />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroTranslated
