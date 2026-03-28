import HeroSection from '../components/home/HeroSection'
import ProblemSection from '../components/home/ProblemSection'
import SolutionSection from '../components/home/SolutionSection'
import AIModulesSection from '../components/home/AIModulesSection'
import BusinessImpactSection from '../components/home/BusinessImpactSection'
import SocialProofSection from '../components/home/SocialProofSection'
import CTABanner from '../components/home/CTABanner'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AIModulesSection />
      <BusinessImpactSection />
      <SocialProofSection />
      <CTABanner />
    </main>
  )
}
