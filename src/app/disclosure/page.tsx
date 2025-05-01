import { Header } from '@/components/Header'
import { FooterSection } from '@/components/Footer'
// import { LeftRightSection } from '@/components/ui/LeftRightSection' // No longer needed here
import { DisclosureSection } from '@/components/Sections/DisclosureSection'

export default function DisclosurePage() {
  // Define title element once
  
  return (
    <div className="relative flex flex-col min-h-screen bg-white text-neutral-900">
      <Header darkTheme={false} />
      
      {/* Content wrapper */}
      <div className="flex-grow">
        {/* Desktop Layout */}
        <main className="hidden lg:block">
          <div className="min-h-screen flex items-center"> {/* Centering container */}
            <div className="w-full">
              {/* Use DisclosureSection directly, passing the title */}
              <DisclosureSection />
            </div>
          </div>
        </main>

        {/* Mobile Layout */}
        <main className="lg:hidden">
           <div className="min-h-[85vh] flex items-center"> {/* Centering container with vertical flex */}
            <div className="w-full">
              {/* Use DisclosureSection directly, passing the title */}
              {/* The component itself is now responsive */}
              <DisclosureSection />
            </div>
          </div>
        </main>
      </div>

      <FooterSection darkTheme={false} />
    </div>
  )
}
