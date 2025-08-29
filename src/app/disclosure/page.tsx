import { FooterSection } from '../../components/Sections/Footer'
import { DisclosureSection } from '../../components/Sections/Disclosures'

export default function DisclosurePage() {
  return (
    <>
      {/* Header */}
      
      {/* Main content container */}
      <div 
        id="main-content-that-scrolls"
        className="w-full relative z-10"
      >
        {/* Disclosure Section */}
        <section className="w-full">
          <div className="pt-12 flex flex-col py-20 max-w-xl mx-auto justify-start">
            <div className="w-full text-left space-y-8">
              <h1 className="text-2xl font-medium text-black leading-tight mb-12">
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
