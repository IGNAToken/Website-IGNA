import withLoading from '@/components/shared/withLoading'
import useSocial from '@/hooks/useSocial'
import type { Social } from '@/types/Social'

const Socials = () => {
  return (
    <section className='bg-primary py-12 mt-20 px-2'>
      <div className='container flex flex-col gap-4 mx-auto'>
        <div className='text-2xl font-bold text-white md:max-w-1/2'>
          Follow us on social media to get real-time updates and
          behind-the-scenes insights into our project.
        </div>
        {/* <div className='text-xl font-bold md:max-w-1/2'>
          We are more than happy to answer all of those questions on every
          social platform.
        </div> */}
        <div className='flex  text-black'>
          <SocialContentWithLoading />
        </div>
      </div>
    </section>
  )
}

const SocialContent = ({ socials }: { socials: Social[] }) => {
  return (
    <div className='flex flex-wrap gap-4 max-w-2xl justify-center'>
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={social.icon.url}
            alt={social.platform}
            width={40}
            height={40}
            className='hover:scale-110 transition-all duration-300'
          />
        </a>
      ))}
    </div>
  )
}

const SocialContentWithLoading = () => {
  const { isLoading, error, refetch, data } = useSocial()
  const WrappedSocialContent = withLoading(SocialContent)
  return (
    <WrappedSocialContent
      isLoading={isLoading}
      error={error}
      refetch={refetch}
      socials={data || []}
    />
  )
}

export default Socials
