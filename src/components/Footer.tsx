import Link from 'next/link'

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full py-8">
      <div className="w-full px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Left Side - Stylized L and Copyright */}
          <div className="flex items-center space-x-2 justify-center sm:justify-start">
            <div className="text-sm text-neutral-500">© {currentYear} Lindy Wealth, LLC</div>
          </div>

          <div className="flex space-x-4 mt-4 sm:mt-0">
           
             <a 
              href="https://client.schwab.com/Areas/Access/Login" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-neutral-500 hover:text-neutral-700"
            >
              Charles Schwab
            </a>
            <a 
              href="https://app.rightcapital.com/account/login" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-neutral-500 hover:text-neutral-700"
            >
              RightCapital
            </a>
            <a 
              href="https://adviserinfo.sec.gov/firm/summary/335277"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-neutral-500 hover:text-neutral-700"
            >
              Form ADV
            </a>
            <a 
              href="/documents/Privacy.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-neutral-500 hover:text-neutral-700"
            >
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}