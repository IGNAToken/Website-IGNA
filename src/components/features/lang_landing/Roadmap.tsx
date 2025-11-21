import Badge from '@/components/shared/Badge'
import SectionTitle from '@/components/shared/SectionTitle'
import { useTranslation } from 'react-i18next'

const Roadmap = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>{t('landing.roadmap.subtitle')}</Badge>
      <SectionTitle
        title={t('landing.roadmap.title')}
        subtitle={t('landing.roadmap.highlightedText')}
      />
      <img
        className='w-full h-full object-cover max-w-xl mx-auto'
        src='\images\lang_landing\roadmap.png'
        alt='Roadmap'
      />
    </section>
  )
}

export default Roadmap
