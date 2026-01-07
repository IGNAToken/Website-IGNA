import HeroTranslated from '@/components/features/lang_landing/Hero'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import Loader from '@/components/shared/Loader'
import Vision from '@/components/features/lang_landing/Vision'
import ValueFromWaste from '@/components/features/lang_landing/ValueFromWaste'
import Goal from '@/components/features/lang_landing/Goal'
import PartOfTheChange from '@/components/features/lang_landing/PartOfTheChange'
import Investment from '@/components/features/lang_landing/Investment'
import Technology from '@/components/features/lang_landing/Technology'
import UsageOfOil from '@/components/features/lang_landing/UsageOfOil'
import Roadmap from '@/components/features/lang_landing/Roadmap'
import WayToJoin from '@/components/features/lang_landing/WayToJoin'
import Socials from '@/components/features/lang_landing/Socials'

export const Route = createFileRoute('/$lang/landing')({
  component: LandingPage,
})

function LandingPage() {
  const { lang } = Route.useParams()
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
        <Vision />
        <ValueFromWaste />
        <Goal />
        <PartOfTheChange />
        <Investment />
        <Technology />
        <UsageOfOil />
        <Roadmap />
        <WayToJoin />
        <Socials lang={lang} />
      </Suspense>
    </>
  )
}
