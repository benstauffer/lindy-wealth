import Link from 'next/link'
import { Header } from '@/components/Header'
import { FooterSection } from '@/components/Footer'

export default function ResourcesPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      {/* Header */}
      <Header />

    
      {/* Content */}
      <main className="flex min-h-screen flex-col items-center justify-center pt-20">
        <div className="max-w-sm w-full flex flex-col items-center px-6">
          <div className="w-full text-center mb-8">
            <h1 className="text-3xl font-medium text-neutral-900">Resources</h1>
          </div>
          
          <div className="w-full mt-4 space-y-3 flex flex-col items-center">
            <a 
              className="w-full group inline-flex items-center justify-center h-[52px] px-4 sm:px-5 text-sm sm:text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full transition-colors duration-200"
              href="https://calendly.com/benstauffer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Calendar
            </a>
            
            <a 
              className="w-full group inline-flex items-center justify-center h-[52px] px-4 sm:px-5 text-sm sm:text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full transition-colors duration-200"
              href="/monte-carlo"
            >
              Monte Carlo Tool
            </a>
            
            <a 
              className="w-full group inline-flex items-center justify-center h-[52px] px-4 sm:px-5 text-sm sm:text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full transition-colors duration-200"
              href="/retirement-calculator"
            >
              What's My Number?
            </a>
          </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  )
}
