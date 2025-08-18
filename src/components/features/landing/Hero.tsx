import heroImage from '@/assets/hero-bg.png'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

const Hero = () => {
  return (
    <div className='w-full h-[calc(100vh-100px)] bg-background relative overflow-hidden'>
      {/* Background Image */}
      <img src={heroImage} alt='hero' className='w-full h-full object-cover absolute inset-0 z-0' />

      {/* Content Overlay */}
      <div className='relative z-10 h-full flex items-center justify-center'>
        <div className='text-center max-w-4xl mx-auto px-4 flex flex-col gap-6 '>
          <h2 className='text-xl md:text-4xl font-light text-white drop-shadow-lg'>TURN POLLUTION INTO SOLUTION</h2>
          <div className='text-4xl md:text-6xl font-black text-primary drop-shadow-lg flex flex-col md:flex-row gap-3 '>
            <div className='flex gap-3 justify-center'>
              Transform
              <span className='bg-gradient-to-r to-secondary from-primary-foreground bg-clip-text text-transparent'>
                Waste
              </span>
            </div>
            <div className='flex gap-3 justify-center'>
              into
              <span className='bg-gradient-to-r to-secondary from-primary-foreground bg-clip-text text-transparent'>
                Wealth
              </span>
            </div>
          </div>
          <p className='text-xl text-white/90 font-light drop-shadow-md max-w-2xl mx-auto'>
            Join the revolutionary movement to turn plastic waste into a profitable investment with the help of our
            pioneering cryptocurrency.
          </p>
          <div className='flex gap-10 justify-center'>
            <Button variant='outline' className='bg-background'>
              Learn More
            </Button>
            <Link to='/swap'>
              <Button className='font-bold'>BUY $IGNA</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
