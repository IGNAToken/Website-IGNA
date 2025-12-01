import SectionTitle from '@/components/shared/SectionTitle'
import Badge from '@/components/shared/Badge'
import { useTranslation } from 'react-i18next'
import useSocial from '@/hooks/useSocial'

const Socials = () => {
  const { t } = useTranslation()
  const { data } = useSocial()
  return (
    <section className='flex flex-col items-center gap-12 mt-32'>
      <Badge>{t('landing.joinTheCommunity.title')}</Badge>
      <SectionTitle title={t('landing.followUs.title')} subtitle='' />
      <div className='bg-primary w-full py-12 md:px-4 px-2'>
        <div className='flex flex-col max-w-5xl mx-auto  gap-4'>
          <h3 className='text-2xl font-bold text-white'>{t('landing.followUs.textForSocials')}</h3>
          <div className='flex gap-4 '>
            {data?.map((social) => (
              <a key={social.id} href={social.link} target='_blank' rel='noopener noreferrer'>
                <img src={social.icon.url} alt={social.platform} width={40} height={40} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Socials
