import { Header } from '@/components/Header'
import Link from 'next/link'
import { FaArrowLeft } from "react-icons/fa6"

export default function About() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-xl mx-auto mt-8"> {/* 5/12 of container width */}
            <div className="space-y-8">
              <Link 
                href="/"
                className="group inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200"
              >
                <FaArrowLeft className="mr-2 transform transition-transform duration-200 group-hover:-translate-x-1" />
                Back to home
              </Link>

              <h1 className="text-3xl sm:text-5xl font-semibold text-left">
                About Lindy Wealth
              </h1>

              <div className="space-y-6">
                <p className="text-base text-neutral-600 leading-relaxed">
                  At Lindy Wealth, we believe in taking a comprehensive, long-term approach to financial planning. Our mission is to help you build and preserve wealth while navigating life's complexities with confidence.
                </p>

                <p className="text-base text-neutral-600 leading-relaxed">
                  We understand that every individual and family has unique financial goals, challenges, and aspirations. That's why we take the time to truly understand your situation, values, and what matters most to you.
                </p>

                <p className="text-base text-neutral-600 leading-relaxed">
                  Our approach combines sophisticated financial planning strategies with practical, actionable advice. We focus on helping you make informed decisions about your money while keeping more of your wealth working for you.
                </p>

                <p className="text-base text-neutral-600 leading-relaxed">
                  Whether you're planning for retirement, managing investments, or looking to build lasting wealth, we're here to provide the guidance and expertise you need to succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
