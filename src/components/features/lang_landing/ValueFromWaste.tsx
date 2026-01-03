import { useTranslation } from 'react-i18next'

const ValueFromWaste = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <div className='text-xl font-light uppercase text-center text-primary max-w-xl'>
        {t('landing.valueFromWaste.subText')}
      </div>
      <div className='text-3xl font-bold text-center text-white/75 max-w-3/4'>
        {t('landing.valueFromWaste.mainText')}
      </div>
    </section>
  )
}

export default ValueFromWaste
