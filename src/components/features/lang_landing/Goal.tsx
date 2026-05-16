import Badge from '@/components/shared/Badge'
import SectionTitle from '@/components/shared/SectionTitle'
import { useTranslation } from 'react-i18next'

const Goal = () => {
  const { t } = useTranslation()
  const videoId = t('landing.goal.videoId')

  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>{t('landing.goal.subText')}</Badge>
      <SectionTitle
        title={t('landing.goal.heading')}
        subtitle={t('landing.goal.subTitle')}
      />

      <div className='py-4 px-6 bg-primary rounded-xl text-xl from-primary to-secondary bg-gradient-to-tl font-bold text-center text-white max-w-3/4'>
        {t('landing.goal.highlightedText')}
      </div>

      {videoId && (
        <div className='w-full max-w-3xl aspect-video rounded-xl overflow-hidden'>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={t('landing.goal.heading')}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            className='w-full h-full'
          />
        </div>
      )}
    </section>
  )
}

export default Goal
