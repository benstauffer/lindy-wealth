import Link from 'next/link'
import { FooterSection } from '@/components/Footer'
import { Resources } from '@/components/Resources'
import { Header } from '@/components/Header'


// Helper to get current year
const currentYear = new Date().getFullYear();

export default function ResourcesPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header name="Lindy Lab" buttonText="Work with Lindy Wealth"/>

      {/* Content */}
      <main className="flex flex-grow flex-col items-center pt-28 pb-16">
        <div className="max-w-4xl w-full flex flex-col items-center px-6">

          {/* Newsletter Section */}
          <div className="w-full max-w-xl text-center mb-6">
            <p className="text-lg text-neutral-900 ">Join the Lindy Letter for ideas to help you build and manage your wealth. No fluff. No hype. Just timeless principles and smart strategies</p>
          </div>
          <div className="w-full max-w-sm h-[52px] border border-neutral-900 rounded-full overflow-hidden focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition-colors duration-200 mb-12">
            <iframe 
              src="https://embeds.beehiiv.com/54f15b08-8795-4782-ab61-185ea8baf6ab?slim=true"
              data-test-id="beehiiv-embed" 
              height="52" 
              frameBorder="0" 
              scrolling="no" 
              style={{ 
                margin: 0, 
                borderRadius: '0px', 
                backgroundColor: 'transparent', 
                width: '100%', 
                height: '100%',
                display: 'block' 
              }}
            ></iframe>
          </div>
          
          {/* Books Section 
          <Resources />*/}

        </div>
      </main>
      
      {/* Standard Footer */}
      <FooterSection />
    </div>
  )
}
