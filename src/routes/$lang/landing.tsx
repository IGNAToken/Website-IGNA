import HeroTranslated from '@/components/features/landing/HeroTranslated'
import { createFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import Loader from '@/components/shared/Loader'

// Lazy load non-critical components below the fold
const MottoTranslated = lazy(() => import('@/components/features/landing/MottoTranslated'))
const Technology = lazy(() => import('@/components/features/landing/Technology'))
const Tokenomics = lazy(() => import('@/components/features/landing/Tokenomics'))
const FAQSection = lazy(() => import('@/components/features/landing/FAQ'))
const Socials = lazy(() => import('@/components/features/landing/Socials'))
const Reasons = lazy(() => import('@/components/features/landing/Reasons'))
const News = lazy(() => import('@/components/features/landing/News'))
const RoadmapSection = lazy(() => import('@/components/features/landing/Roadmap'))
const Contact = lazy(() => import('@/components/features/landing/Contact'))
const TeamSection = lazy(() => import('@/components/features/landing/TeamSection'))
const Strategy = lazy(() => import('@/components/features/landing/Strategy'))

export const Route = createFileRoute('/$lang/landing')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <>
      <HeroTranslated />
      <Suspense
        fallback={
          <div className='flex justify-center items-center h-screen'>
            <Loader />
          </div>
        }
      >
        <MottoTranslated />
        <News />
        <Technology />
        <Tokenomics />
        <TeamSection />
        <Strategy />
        <Socials />
        <Reasons />
        <RoadmapSection />
        <FAQSection />
        <Contact />
      </Suspense>
    </>
  )
}
