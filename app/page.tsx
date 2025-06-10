import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { ProblemSolutionSection } from '@/components/sections/problem-solution';
import { UseCasesSection } from '@/components/sections/use-cases';
import { FeaturesSection } from '@/components/sections/features';
import { PricingSection } from '@/components/sections/pricing';
import { TeamSocialProofSection } from '@/components/sections/team-social-proof';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-primary">
      <Header />
      <main>
        <HeroSection />
        <ProblemSolutionSection />
        <UseCasesSection />
        <FeaturesSection />
        <PricingSection />
        <TeamSocialProofSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}