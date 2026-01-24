import AnimatedBubbles from '@/components/shared/AnimatedBubbles'
import { Button } from '@/components/ui/button'
import { DISCORD_URL } from '@/config'
import { Link } from '@tanstack/react-router'

const Hero = () => {
  return (
    <div className='hero-container'>
      {/* Background Image - Optimized for LCP */}
      <img
        src='/hero-bg.webp'
        alt='hero'
        className='hero-bg-image'
        loading='eager'
        fetchPriority='high'
        decoding='sync'
      />

      {/* Content Overlay */}
      <div className='hero-content-overlay relative'>
        <AnimatedBubbles minSize={15} maxSize={50} count={20} />
        <div className='hero-content-container'>
          <h2 className='hero-subtitle'>TURN POLLUTION INTO SOLUTION</h2>
          <h1 className='hero-main-title'>
            <div className='hero-title-row'>
              Transform
              <span className='hero-gradient-text'>Waste</span>
            </div>
            <div className='hero-title-row'>
              into
              <span className='hero-gradient-text'>Wealth</span>
            </div>
          </h1>
          <h3 className='hero-description'>
            Join the revolutionary movement to turn plastic waste into a profitable investment with the help of our
            pioneering cryptocurrency.
          </h3>
          <div className='hero-buttons-container'>
            <Button variant='outline' className='bg-background hero-button hero-button-outline' asChild>
              <Link to='/swap'>Swap Now</Link>
            </Button>
            <Button className='font-bold hero-button hero-button-default' asChild>
              <a href={DISCORD_URL} target='_blank' rel='noopener noreferrer'>
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
