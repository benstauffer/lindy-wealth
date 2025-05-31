import { Header } from '@/components/Header'
import { FooterSection } from '@/components/Footer'
import Link from 'next/link'
import { FiCheckCircle } from 'react-icons/fi'

export default function ConfirmPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md mx-auto text-center px-6 py-16 bg-white rounded-2xl">
          <FiCheckCircle className="mx-auto text-green-600 mb-6" size={56} />
          <h1 className="text-3xl font-semibold mb-4 text-neutral-900">Thank you for booking!</h1>
          <p className="text-lg text-neutral-700 mb-8">
            Your meeting is confirmed. We look forward to speaking with you.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-800"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <FooterSection />
    </div>
  )
}
