import { Header } from '@/components/Header'
import { Section01 } from '@/components/01'
import { Section02 } from '@/components/02'
import { FooterSection } from '@/components/Footer'

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <Header />
      
      {/* Content wrapper */}
      <div className="flex-grow">
        {/* Desktop Layout */}
        <main className="hidden lg:block">
          <div className="min-h-[90vh] flex items-center pt-24"> {/* Adjust min-h and pt as needed */} 
            <div className="w-full">
              <Section01 />              
            </div>
          </div>
          <div className="mb-16"> {/* Wrap Section02 and add margin */}
            <Section02 />
          </div>
        </main>

        {/* Mobile Layout */}
        <main className="lg:hidden">
          <div className="min-h-[85vh] flex items-center pt-24"> {/* Adjust min-h and pt as needed */}
            <div className="w-full">
              <Section01 />
            </div>
          </div>
          <div> {/* Wrap Section02 and add margin */}
            <Section02 />
          </div>
        </main>
      </div>
      <FooterSection />
    </div>
  )
}
