import { ProfileIntro } from '@/components/ProfileIntro'
import Link from 'next/link'
import { FooterSection } from '@/components/Footer'

export default function LinksPage() {
  return (
    <div className="relative flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="w-full pt-8 pb-2 fixed top-0 z-50">
        <div className="w-full h-full px-6 lg:px-12 flex items-center justify-center">
          {/* Left Logo */}
          <div>
            <Link href="/">
              <span className="suisse-font text-xl md:text-2xl leading-none text-neutral-800">
                Lindy Wealth
              </span>
            </Link>
          </div>
        </div>
      </header>
      
      {/* Content */}
      <main className="flex min-h-screen flex-col items-center justify-center pt-20">
        <div className="max-w-md w-full flex flex-col items-center px-6">
          <div className="w-full">
            <ProfileIntro />
          </div>
          
          <div className="w-full text-neutral-800 space-y-4 text-center">
            <p className="text-lg">
              I created Lindy Wealth to help entrepreneurs build and manage their wealth.
            </p>
            
            <p className="text-lg">
              Full-service, personalized advice.
              <br />
              Planning, investing, and long-term strategy.
            </p>
          </div>
          
          <div className="w-full mt-8 space-y-3 flex flex-col items-center max-w-xs">
            <a 
              className="w-full group inline-flex items-center justify-center h-[52px] px-4 sm:px-5 text-sm sm:text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full transition-colors duration-200"
              href="https://form.typeform.com/to/xtuCtft7"
            >
              Talk with Ben
            </a>
            
            <a 
              className="w-full group inline-flex items-center justify-center h-[52px] px-4 sm:px-5 text-sm sm:text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full transition-colors duration-200"
              href="/about"
            >
              About Lindy Wealth
            </a>
            
            <a 
              className="w-full group inline-flex items-center justify-center h-[52px] px-4 sm:px-5 text-sm sm:text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full transition-colors duration-200"
              href="/services"
            >
              Services
            </a>

            <div>
                <p className="text-lg text-neutral-900">Subscribe to the <span className="font-normal suisse-font">Lindy Letter</span></p>
            </div>



            <div className="w-full h-[52px] border border-neutral-900 rounded-full overflow-hidden focus-within:border-neutral-900 focus-within:ring-1 focus-within:ring-neutral-900 transition-colors duration-200">
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
          </div>
               <div className="w-full text-center mt-6">
              <Link href="/" className="text-base text-neutral-900 mt-1 underline hover:text-neutral-600">
                lindywealth.com
              </Link>
            </div>
        </div>
      </main>
      
      <FooterSection />
    </div>
  )
}
