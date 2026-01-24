import Badge from '@/components/shared/Badge'
import SectionTitle from '@/components/shared/SectionTitle'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Zap, Coins, ArrowLeftRight, Wallet } from 'lucide-react'
import { Link } from '@tanstack/react-router'

const SwapCta = () => {
  return (
    <section className='flex flex-col items-center gap-12 px-4 mt-32 py-20'>
      {/* Content Container */}
      <div className='w-full max-w-7xl mx-auto'>
        <div className='flex flex-col items-center gap-8 mb-12'>
          <Badge>Trade & Swap</Badge>
          <SectionTitle
            title='Swap Your Tokens Instantly'
            subtitle='Experience seamless token swapping with our integrated exchange. Trade $IGNA and other tokens with ease, security, and lightning-fast transactions.'
          />
        </div>

        {/* Main CTA Card */}
        <div className='relative'>
          {/* Glassmorphism Card */}
          <div className='relative border border-primary/30 rounded-2xl bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-xl p-8 md:p-12'>
            <div className='grid md:grid-cols-2 gap-8 items-center'>
              {/* Left Side - Content */}
              <div className='flex flex-col gap-6'>
                <div className='flex items-center gap-3'>
                  <div className='p-3 rounded-xl bg-primary/20 border border-primary/30'>
                    <TrendingUp className='size-6 text-primary' />
                  </div>
                  <h3 className='text-2xl md:text-3xl font-bold text-white'>
                    Start Trading Now
                  </h3>
                </div>

                <p className='text-lg text-white/80 leading-relaxed'>
                  Join thousands of traders using our secure swap platform. Get the best rates, 
                  low fees, and instant settlements powered by Jupiter Aggregator.
                </p>

                {/* Feature Pills */}
                <div className='flex flex-wrap gap-3'>
                  <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20'>
                    <Zap className='size-4 text-primary' />
                    <span className='text-sm text-white/90'>Instant Swaps</span>
                  </div>
                  <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20'>
                    <Coins className='size-4 text-primary' />
                    <span className='text-sm text-white/90'>Best Rates</span>
                  </div>
                  <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20'>
                    <TrendingUp className='size-4 text-primary' />
                    <span className='text-sm text-white/90'>Low Fees</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  size='lg'
                  className='group w-full md:w-auto font-bold text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-black transition-all duration-300'
                  asChild
                >
                  <Link to='/swap'>
                    Go to Swap
                    <ArrowRight className='ml-2 size-5 group-hover:translate-x-1 transition-transform' />
                  </Link>
                </Button>
              </div>

              {/* Right Side - Visual Element */}
              <div className='relative flex items-center justify-center min-h-[400px]'>
                <div className='relative w-full max-w-md aspect-square'>
                  {/* Background Circles */}
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <div className='w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20' />
                  </div>
                  
                  {/* Left Token - Animated */}
                  <div className='token-a absolute left-0 top-1/2  flex flex-col items-center gap-2 z-0'>
                    <div className='p-4 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/40 backdrop-blur-sm shadow-lg'>
                      <Coins className='size-8 text-primary' />
                    </div>
                    {/* <div className='text-xs font-medium text-white/70 text-center'>SPL token</div> */}
                  </div>

                  {/* Center Swap Icon */}
                  <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
                    <div className='swap-icon p-6 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 border-2 border-primary/50 backdrop-blur-md shadow-xl'>
                      <ArrowLeftRight className='size-10 text-white' />
                    </div>
                  </div>

                  {/* Right Token - Animated */}
                  <div className='token-b absolute left-1/2 top-1/2 flex flex-col items-center gap-2 opacity-0 z-0'>
                    <div className='p-4 rounded-full bg-gradient-to-br from-secondary/30 to-secondary/10 border border-secondary/40 backdrop-blur-sm shadow-lg'>
                      <Wallet className='size-8 text-secondary' />
                    </div>
                    {/* <div className='text-xs font-medium text-white/70 text-center'>IGNA</div> */}
                  </div>

                  {/* Top Feature Badge */}
                  <div className='absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm'>
                    <Zap className='size-4 text-primary' />
                    <span className='text-sm font-medium text-white'>Instant</span>
                  </div>

                  {/* Bottom Feature Badge */}
                  <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-sm'>
                    <TrendingUp className='size-4 text-secondary' />
                    <span className='text-sm font-medium text-white'>Best Rate</span>
                  </div>

                  {/* Decorative Elements */}
                  <div className='absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-primary/40 border border-primary/60' />
                  <div className='absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full bg-secondary/40 border border-secondary/60' />
                  <div className='absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-primary/30' />
                  <div className='absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-secondary/30' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes tokenASwap {
          0% {
            left: 0;
            transform: translate(0, -50%);
            opacity: 1;
          }
          30% {
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 1;
          }
          35% {
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
          }
          85% {
            left: 0;
            transform: translate(0, -50%);
            opacity: 0;
          }
          90% {
            left: 0;
            transform: translate(0, -50%);
            opacity: 1;
          }
          100% {
            left: 0;
            transform: translate(0, -50%);
            opacity: 1;
          }
        }

        @keyframes tokenBSwap {
          0% {
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
          }
          34% {
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
          }
          35% {
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 1;
          }
          40% {
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 1;
          }
          80% {
            left: 100%;
            transform: translate(-100%, -50%);
            opacity: 1;
          }
          85% {
            left: 100%;
            transform: translate(-100%, -50%);
            opacity: 0;
          }
          90% {
            left: 100%;
            transform: translate(-100%, -50%);
            opacity: 0;
          }
          100% {
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
          }
        }

        @keyframes swapIconRotate {
          0% {
            transform: rotate(0deg);
          }
          28% {
            transform: rotate(0deg);
          }
          55% {
            transform: rotate(360deg);
          }
          60% {
            transform: rotate(360deg);
          }
          90% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .token-a {
          animation: tokenASwap 7s ease-in-out infinite;
        }

        .token-b {
          animation: tokenBSwap 7s ease-in-out infinite;
        }

        .swap-icon {
          animation: swapIconRotate 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default SwapCta

