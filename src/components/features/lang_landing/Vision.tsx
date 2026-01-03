import Badge from '@/components/shared/Badge'
import Card from '@/components/shared/Card'
import SectionTitle from '@/components/shared/SectionTitle'
import { BatteryCharging, Recycle, RefreshCw } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Vision = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>{t('landing.vision.badge')}</Badge>
      <SectionTitle
        title={t('landing.vision.title')}
        subtitle={t('landing.vision.subtitle')}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {(
          t('landing.vision.blocks', { returnObjects: true }) as Array<{
            title: string
            description: string
          }>
        ).map((block, index) => {
          const icons = [Recycle, BatteryCharging, RefreshCw]
          const IconComponent = icons[index % icons.length]

          return (
            <Card
              key={index}
              title={block.title}
              description={block.description}
              icon={
                <>
                  <IconComponent className='size-8' />
                </>
              }
            />
          )
        })}
      </div>
    </section>
  )
}

export default Vision
