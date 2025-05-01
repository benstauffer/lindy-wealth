import { Header } from '@/components/Header'
import { FooterSection } from '@/components/Footer'
import { EducationSection } from '@/components/Sections/EducationSection'

export default function EducationPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white text-neutral-900">
      <Header darkTheme={false} />
      
      {/* Content wrapper */}
      <div className="flex-grow">
        {/* Desktop Layout - Render EducationSection */}
        <main className="hidden lg:block">
          <div className="min-h-screen flex items-center"> {/* Adjust as needed */} 
            <div className="w-full">
              <EducationSection />   
            </div>
          </div>
        </main>

        {/* Mobile Layout - Render EducationSection */}
        <main className="lg:hidden">
          <div className="min-h-[85vh] flex items-center"> {/* Adjust as needed */} 
            <div className="w-full">
              <EducationSection />
            </div>
          </div>
        </main>
      </div>

      <FooterSection darkTheme={false} />
    </div>
  )
}
