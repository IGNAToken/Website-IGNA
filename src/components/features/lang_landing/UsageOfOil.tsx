import SectionTitle from '@/components/shared/SectionTitle'
import { Button } from '@/components/ui/button'
import Badge from '@/components/shared/Badge'
import { useTranslation } from 'react-i18next'
import { DISCORD_URL } from '@/config'
import { useNavigate } from '@tanstack/react-router'

const UsageOfOil = () => {
  const navigate = useNavigate()
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
      <Button>{t('landing.usageOfTheOil.buttonText')}</Button>
      <div className='flex flex-col gap-4 max-w-5xl mx-auto'>
        <h3 className='text-4xl font-bold flex justify-center mb-10'>{t('landing.experiences.title')}</h3>
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
        <Button>
          <a href={DISCORD_URL} target='_blank' rel='noopener noreferrer'>
            {t('landing.experiences.buttons.community')}
          </a>
        </Button>
        <Button variant='outline' onClick={() => navigate({ to: '/swap' })}>
          {t('landing.experiences.buttons.invest')}
        </Button>
      </div>
    </section>
  )
}

export default UsageOfOil
