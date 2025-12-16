import Badge from '@/components/shared/Badge'
import Card from '@/components/shared/Card'
import SectionTitle from '@/components/shared/SectionTitle'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Gift, Building2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '@tanstack/react-router'
import { handleNavigation } from '@/lib/urlHelpers'

const WayToJoin = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const icons = [ShoppingCart, Gift, Building2]
  const blocks = t('landing.wayToJoin.blocks', {
    returnObjects: true,
  }) as Array<{
    title: string
    description: string
    buttonText: string
    url: string
  }>

  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>{t('landing.wayToJoin.subTitle')}</Badge>
      <SectionTitle title={t('landing.wayToJoin.title')} subtitle='' />

      <div className='flex gap-4 flex-col md:flex-row max-w-5xl mx-auto'>
        {blocks.map((block, index) => {
          const IconComponent = icons[index % icons.length]
          return (
            <Card
              key={block.title}
              title={block.title}
              description={block.description}
              icon={<IconComponent className='size-8' />}
              ctaComponent={
                block.buttonText && block.url ? (
                  <Button
                    variant='outline'
                    className='w-full'
                    onClick={() => {
                      handleNavigation(block.url, navigate)
                    }}
                  >
                    {block.buttonText}
                  </Button>
                ) : undefined
              }
            />
          )
        })}
      </div>
    </section>
  )
}

export default WayToJoin
