import { Header } from '../../components/Sections/Header'
import { FooterSection } from '../../components/Sections/Footer'
import { DisclosureSection } from '../../components/Sections/Disclosures'

export default function DisclosurePage() {
  return (
    <>
      {/* Header */}
      <Header />
      
      {/* Main content container */}
      <div 
        id="main-content-that-scrolls"
        className="w-full relative z-10"
      >
        {/* Disclosure Section */}
        <section className="w-full">
          <div className="pt-48 flex flex-col py-20 max-w-5xl mx-auto justify-start">
            <div className="w-full text-left space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-black leading-tight mb-12">
                Disclosures
              </h1>
              
              <DisclosureSection />
            </div>
          </div>
        </section>
      </div>
      
      <FooterSection />
    </>
  )
}
