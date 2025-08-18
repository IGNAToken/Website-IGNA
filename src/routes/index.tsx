import Hero from '@/components/features/landing/Hero'
import Motto from '@/components/features/landing/Motto'
import Technology from '@/components/features/landing/Technology'
import Tokenomics from '@/components/features/landing/Tokenomics'
import FAQSection from '@/components/features/landing/FAQ'
import Socials from '@/components/features/landing/Socials'
import Reasons from '@/components/features/landing/Reasons'
import News from '@/components/features/landing/News'
import RoadmapSection from '@/components/features/landing/Roadmap'
import Contact from '@/components/features/landing/Contact'
import { createFileRoute } from '@tanstack/react-router'
import TeamSection from '@/components/features/landing/TeamSection'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Hero />
      <Motto />
      <Technology />
      <Tokenomics />
      <TeamSection />
      <FAQSection />
      <Socials />
      <Reasons />
      <News />
      <RoadmapSection />
      <Contact />
    </>
  )
}
