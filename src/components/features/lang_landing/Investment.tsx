import Badge from '@/components/shared/Badge'
import Card from '@/components/shared/Card'
import SectionTitle from '@/components/shared/SectionTitle'
import { Shield, Eye, TrendingUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Investment = () => {
  const { t } = useTranslation()
  const icons = [Shield, Eye, TrendingUp]
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>{t('landing.investment.badge')}</Badge>
      <SectionTitle
        title={t('landing.investment.title')}
        subtitle={t('landing.investment.subTitle')}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {(() => {
          const blocks = t('landing.investment.blocks', {
            returnObjects: true,
          }) as Array<{
            title: string
            description: string
          }>
          return blocks.map((block, index) => {
            const IconComponent = icons[index % icons.length]
            return (
              <Card
                key={block.title}
                title={block.title}
                description={block.description}
                icon={<IconComponent className='size-8' />}
              />
            )
          })
        })()}
      </div>
    </section>
  )
}

export default Investment
