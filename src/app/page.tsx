import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FooterSection } from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Content wrapper that grows to push footer down */}
      <div className="flex-grow">
        {/* Desktop Layout */}
        <main className="hidden lg:block pt-24 items-center justify-center">
          <div className="max-w-2xl mx-auto px-6 lg:px-8">
              <div>
                <HeroSection />
              </div>
          </div>
        </main>

        {/* Mobile Layout */}
        <main className="lg:hidden pt-32">
          <div className="max-w-xl mx-auto px-6">
            <div>
              <HeroSection />
            </div>
          </div>
        </main>
      </div>

      <FooterSection />
    </div>
  )
}
