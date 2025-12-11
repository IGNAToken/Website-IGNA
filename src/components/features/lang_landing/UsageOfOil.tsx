import SectionTitle from '@/components/shared/SectionTitle'
import Badge from '@/components/shared/Badge'
import { useTranslation } from 'react-i18next'
import CtaBlock from './CtaBlock'

const UsageOfOil = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>{t('landing.usageOfTheOil.subTitle')}</Badge>
      <SectionTitle title={t('landing.usageOfTheOil.title')} subtitle='' />
      <img
        className='w-full h-full object-cover max-w-5xl mx-auto'
        src='\images\lang_landing\usage_of_oil.jpg'
        alt='Usage of Oil'
      />
      <CtaBlock size='sm' />
      <div className='flex flex-col gap-4 max-w-5xl mx-auto'>
        <h3 className='text-4xl font-bold flex justify-center mb-10'>
          {t('landing.experiences.title')}
        </h3>
        <div className='flex gap-4 flex-col md:flex-row'>
          {(
            t('landing.experiences.blocks', { returnObjects: true }) as Array<{
              title: string
              description: string
            }>
          ).map((block) => (
            <div key={block.title} className='flex flex-col gap-2'>
              <h4 className='text-xl font-bold'>{block.title}</h4>
              <p className=' text-white/75'>{block.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex gap-4 max-w-5xl mx-auto'>
        <CtaBlock size='sm' />
      </div>
    </section>
  )
}

export default UsageOfOil
