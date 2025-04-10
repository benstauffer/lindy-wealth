import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { FooterSection } from '@/components/Footer'
import { Bio } from '@/components/Bio'
import { Beliefs } from '@/components/Beliefs'
import { Process } from '@/components/Process'
import { FAQ } from '@/components/FAQ'
import { About } from '@/components/About'
import { Blog } from '@/components/Blog'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      
      {/* Desktop Layout */}
      <main className="hidden lg:block pt-32 items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
            <div>
              <HeroSection />
              <Separator className="my-16" />
              <div className="space-y-12">
                <Beliefs />
                <Process />
              </div>
              <div className="mt-12 space-y-4">
                <FAQ />
                <About />
                <Blog />
              </div>
              <FooterSection />
          </div>
        </div>
      </main>

      {/* Mobile Layout */}
      <main className="lg:hidden pt-24">
        <div className="max-w-xl mx-auto px-6">
          <div>
            <HeroSection />
            <Separator className="my-16"/>
            <div className="space-y-12">
              <Beliefs />
              <Process />
            </div>
            <div className="mt-12space-y-4">
              <FAQ />
              <About />
              <Blog />
            </div>
            <FooterSection />
          </div>
        </div>
      </main>
    </div>
  )
}
