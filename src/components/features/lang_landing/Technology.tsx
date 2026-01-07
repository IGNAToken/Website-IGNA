import { useTranslation } from 'react-i18next'

const Technology = () => {
  const { t } = useTranslation()
  const steps = t('landing.pyrolisysTechnology.stepsBlock.steps', {
    returnObjects: true,
  }) as Array<string>
  return (
    <section className='flex flex-col items-center gap-12 mt-32 '>
      <div className='bg-gradient-to-tl from-primary to-secondary py-12 px-4 w-full'>
        <div className='flex flex-col gap-4 max-w-5xl mx-auto'>
          <div className='text-xl text-white uppercase'>
            {t('landing.pyrolisysTechnology.subTitle')}
          </div>
          <div className='text-4xl font-bold text-white'>
            {t('landing.pyrolisysTechnology.title')}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 md:max-w-5xl w-full mx-auto'>
        <div className='flex flex-col md:flex-row gap-8 items-start px-4 '>
          <div className='flex-1 flex flex-col justify-center my-auto'>
            <div className='text-3xl font-bold mb-4'>
              {t('landing.pyrolisysTechnology.stepsBlock.title')}
            </div>
            <ol className='number-increment-list'>
              {steps.map((step) => (
                <li className='text-lg number-increment ' key={step}>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div className='flex-1 grid grid-cols-2 gap-4 md:max-h-[400px]'>
            <img
              src='/images/lang_landing/igna_website_2.webp'
              alt='Placeholder 1'
              className='w-full h-full object-cover rounded-lg col-span-2 md:max-h-[250px]'
            />
            <img
              src='/images/lang_landing/igna_website_1.webp'
              alt='Placeholder 2'
              className='w-full h-full object-cover rounded-lg col-span-1 md:max-h-[100px]'
            />
            <img
              src='/images/lang_landing/igna_website_3.webp'
              alt='Placeholder 3'
              className='w-full h-full object-cover rounded-lg col-span-1 md:max-h-[100px]'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Technology
