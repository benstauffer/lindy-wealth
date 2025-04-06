import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FooterSection } from '@/components/FooterSection'
import { BioCard } from '@/components/BioCard'
import { WorkSection } from '@/components/WorkSection'
import { GuidesSection } from '@/components/GuidesSection'
import { FAQSection } from '@/components/FAQSection'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      
      {/* Desktop Layout */}
      <main className="hidden lg:block pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-10">
            {/* Left column - Bio Card */}
            <div className="col-span-5 max-w-sm">
              <BioCard />
            </div>
            
            {/* Right column - Content */}
            <div className="col-span-6 col-start-6 max-w-xl">
              <div className="space-y-16 md:space-y-24">
                <HeroSection />
                <WorkSection />
                <FAQSection />
                <FooterSection />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Layout */}
      <main className="lg:hidden pt-24">
        <div className="max-w-xl mx-auto px-6">
          <div className="space-y-16">
            <HeroSection />
            <BioCard />
            <WorkSection />
            <FAQSection />
            <FooterSection />
          </div>
        </div>
      </main>
    </div>
  )
}
