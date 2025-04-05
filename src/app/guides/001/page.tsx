import { Header } from '@/components/Header'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa6"
import { IoIosCheckmarkCircleOutline } from "react-icons/io"

export default function FinancialPlanningChecklist() {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mx-auto mt-8">
            <div className="space-y-8">
              <Link 
                href="/"
                className="group inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                <FaArrowLeft className="mr-2 transform transition-transform duration-200 group-hover:-translate-x-1" />
                Back to home
              </Link>

              <h1 className="text-3xl sm:text-5xl font-semibold text-left">
                Financial Planning Checklist<IoIosCheckmarkCircleOutline className="text-[#FB651F] inline-block ml-1 text-3xl sm:text-5xl" />
              </h1>

              <div className="space-y-6">
                <p className="text-base text-neutral-600 leading-relaxed">
                  A comprehensive financial planning checklist designed specifically for California residents. This guide will help you navigate the unique financial landscape of California while building and preserving your wealth.
                </p>

                <div className="mt-8 w-full">
                  <iframe 
                    src="https://embeds.beehiiv.com/8f9b1341-c821-4760-903b-3960f646cb68?slim=true" 
                    data-test-id="beehiiv-embed" 
                    height="52" 
                    width="100%"
                    style={{
                      margin: '0',
                      borderRadius: '0px',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>

                <div className="pt-8">
                  <h2 className="text-xl font-semibold mb-4">
                    What's Inside
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-neutral-600">
                    <li>Personal financial assessment tools</li>
                    <li>California-specific tax considerations</li>
                    <li>Investment strategy framework</li>
                    <li>Estate planning essentials</li>
                    <li>Risk management and insurance review</li>
                    <li>Retirement planning milestones</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
