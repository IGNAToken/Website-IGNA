import Badge from '@/components/shared/Badge'
import { Trans, useTranslation } from 'react-i18next'

const MottoTranslated = () => {
  const { t } = useTranslation()

  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32'>
      <Badge>{t('landing.motto.badge')}</Badge>
      <div className='text-center text-lg font-light border border-primary/30 rounded-xl p-6 bg-gradient-to-tl to-background from-primary/10 max-w-2xl'>
        <Trans
          i18nKey='landing.motto.text'
          components={{
            span: <span className='text-primary font-bold' />,
          }}
        />
      </div>
    </section>
  )
}

export default MottoTranslated

