import { Header } from '@/components/landing/layout/Header'
import { HeroSection } from '@/components/landing/sections/HeroSection'
import { ServicesSection } from '@/components/landing/sections/ServicesSection'
import { ProcessSection } from '@/components/landing/sections/ProcessSection'
import { AboutSection } from '@/components/landing/sections/AboutSection'
import { FooterSection } from '@/components/landing/sections/FooterSection'
import { HelpSection } from '@/components/landing/sections/HelpSection'
import { Text } from '@/components/landing/sections/Text'
import { CTA } from '@/components/landing/sections/CTA'
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="pt-24">
        <HeroSection />
        <Text />
        <div id="about">
          <AboutSection />
        </div>
        <div id="process">
          <ProcessSection />
        </div>
        <HelpSection />
        <div id="services">
          <ServicesSection />
        </div>
        <CTA />
        <FooterSection />
      </main>
    </div>
  )
}
