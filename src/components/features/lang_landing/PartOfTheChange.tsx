import Badge from '@/components/shared/Badge'
import SectionTitle from '@/components/shared/SectionTitle'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

const PartOfTheChange = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col items-center gap-12 px-4  mt-32'>
      <Badge>{t('landing.partOfTheChange.subText')}</Badge>
      <SectionTitle
        title={t('landing.partOfTheChange.title')}
        subtitle={t('landing.partOfTheChange.description')}
      />
      <div className='flex items-center flex-col md:flex-row gap-4 md:max-w-4/5'>
        <div className='w-full md:w-1/2'>
          <img
            src='\images\lang_landing\pyrolysis_without_bg.png'
            alt='Part of the Change'
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
        <div className='flex flex-col gap-6 w-full md:w-1/2'>
          <div className='text-2xl font-bold text-primary'>
            {t('landing.pyrolisis.title')}
          </div>
          <div className='text-lg'>{t('landing.pyrolisis.subTitlte')}</div>
          <Button>{t('landing.pyrolisis.button')}</Button>
        </div>
      </div>
    </section>
  )
}

export default PartOfTheChange
