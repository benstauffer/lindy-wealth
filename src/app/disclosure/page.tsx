import { Header } from '@/components/Header'
import { FooterSection } from '@/components/Footer'

export default function DisclosurePage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      <Header/>
      
      <main className="flex flex-grow flex-col items-center pt-28 pb-16">
        <div className="max-w-3xl w-full px-6">
          <h1 className="text-3xl font-medium text-neutral-900 mb-8">Disclosure</h1>
          
          <div className="space-y-6 text-neutral-700 text-base leading-relaxed">
            <p>
              Lindy Wealth, LLC (“Lindy Wealth”) is a registered investment adviser located in the State of California. Registration with the United States Securities and Exchange Commission or any state securities authority does not imply a certain level of skill or training.
            </p>
            <p>
              Lindy Wealth provides fee-only financial planning and investment advisory services. The firm does not sell financial products or receive commissions, and acts as a fiduciary in all client relationships. All investment strategies involve risk of loss and nothing on this website should be construed as a guarantee of future performance.
            </p>
            <p>
              This website is for informational purposes only and does not constitute an offer to sell, a solicitation to buy, or a recommendation regarding any security, nor does it constitute investment, legal, tax, or other advice. Past performance is not indicative of future results.
            </p>
            <p>
              Lindy Wealth only transacts business in states where it is properly registered, notice-filed, or excluded or exempted from registration requirements. The content provided on this site is limited to the dissemination of general information about our services. Any subsequent, direct communication by Lindy Wealth with a prospective client will comply with applicable registration or exemption requirements.
            </p>
            <p>
              For more information about Lindy Wealth, please refer to our <a href="https://adviserinfo.sec.gov/firm/summary/335277" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-900">Form ADV filed with the SEC</a>.
            </p>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
