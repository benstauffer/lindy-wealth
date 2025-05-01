import { Header } from '@/components/Header'
import { FooterSection } from '@/components/Footer'
import { PlanningSection } from '@/components/Planning/PlanningSection'

export default function PlanningPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white text-neutral-900">
      <Header darkTheme={false} />
      
      {/* Content wrapper */}
      <div className="flex-grow">
        {/* Desktop Layout - Render PlanningSection */}
        <main className="hidden lg:block">
          <div className="min-h-screen flex items-center"> {/* Adjust as needed */} 
            <div className="w-full">
              <PlanningSection />   
            </div>
          </div>
        </main>

        {/* Mobile Layout - Render PlanningSection */}
        <main className="lg:hidden">
          <div className="min-h-[85vh] flex items-center pt-24"> {/* Adjust as needed */} 
            <div className="w-full">
              <PlanningSection />
            </div>
          </div>
        </main>
      </div>

      <FooterSection darkTheme={false} />
    </div>
  )
}
