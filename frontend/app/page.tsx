import Hero from '../components/home/Hero'
import NewsTicker from '../components/layout/NewsTicker'
import StatsCounter from '../components/home/StatsCounter'
import AboutPreview from '../components/home/AboutPreview'
import AgendaPreview from '../components/home/AgendaPreview'
import LeadershipPreview from '../components/home/LeadershipPreview'
import MessageSection from '../components/home/MessageSection'
import JoinCTA from '../components/home/JoinCTA'
import KenyaStripe from '../components/ui/KenyaStripe'

export default function HomePage() {
  return (
    <>
      <NewsTicker />
      <Hero />
      <StatsCounter />
      <AboutPreview />
      <KenyaStripe />
      <AgendaPreview />
      <LeadershipPreview />
      <KenyaStripe />
      <MessageSection />
      <JoinCTA />
    </>
  )
}