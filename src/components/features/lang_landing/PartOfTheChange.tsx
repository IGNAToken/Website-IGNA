import Badge from '@/components/shared/Badge'
import SectionTitle from '@/components/shared/SectionTitle'
import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'

const PartOfTheChange = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>{t('landing.partOfTheChange.subText')}</Badge>
      <SectionTitle
        title={t('landing.partOfTheChange.title')}
        subtitle={t('landing.partOfTheChange.description')}
      />
      <div className='flex items-center gap-4 max-w-4/5'>
        <div className='w-1/2'>
          <img src='\images\pyrolisis-machine.avif' alt='Part of the Change' />
        </div>
        <div className='flex flex-col gap-6 w-1/2'>
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
