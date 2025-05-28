import Link from 'next/link'

interface FooterProps {
  darkTheme?: boolean;
}

export function FooterSection({ darkTheme = false }: FooterProps) {
  // const currentYear = new Date().getFullYear(); // Copyright removed

  return (
    <footer 
      id="contact" 
      // Using dynamic class based on darkTheme prop
      className={`w-full py-8 mt-16 ${darkTheme ? 'bg-black' : 'bg-white'}`} 
    >
      <div className="w-full px-8 lg:px-8">


        {/* Links container - split left and right */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Left side - Client Links */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3">
            <a 
              href="https://client.schwab.com/Areas/Access/Login" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`px-6 py-3 rounded-full border text-sm transition-colors ${
                darkTheme 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
              }`}
            >
              Charles Schwab
            </a>
            <a 
              href="https://app.rightcapital.com/account/login" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`px-6 py-3 rounded-full border text-sm transition-colors ${
                darkTheme 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
              }`}
            >
              RightCapital
            </a>
          </div>

          {/* Right side - Legal Links */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3">
            <Link
              href="/disclosure"
              className={`px-6 py-3 rounded-full border text-sm transition-colors ${
                darkTheme 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
              }`}
            >
              Disclosure
            </Link>
            <a 
              href="/documents/Privacy.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className={`px-6 py-3 rounded-full border text-sm transition-colors ${
                darkTheme 
                  ? 'border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white' 
                  : 'border-neutral-300 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
              }`}
            >
              Privacy
            </a>
          </div>
        </div>

        {/* Removed copyright */}
      </div>
    </footer>
  )
}