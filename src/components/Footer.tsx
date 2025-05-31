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
      className={`w-full py-16 md:py-24 mt-auto ${darkTheme ? 'bg-black' : 'bg-white'}`} 
    >
      {/* Centered container */}
      <div className="w-full max-w-4xl mx-auto px-6 text-center">
        {/* Large Heading */}
        <h2 className={`text-5xl md:text-6xl ${darkTheme ? 'text-white' : 'text-neutral-900'} mb-6 suisse-font`}>
          Lindy Wealth
        </h2>

        {/* Links container - centered */}
        <div className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-6">
            <a 
              href="https://client.schwab.com/Areas/Access/Login" 
              target="_blank" 
              rel="noopener noreferrer" 
            // Updated link styling with dynamic class
            className={`text-base ${darkTheme ? 'text-gray-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'} transition-colors`}
            >
              Charles Schwab
            </a>
            <a 
              href="https://app.rightcapital.com/account/login" 
              target="_blank" 
              rel="noopener noreferrer" 
            className={`text-base ${darkTheme ? 'text-gray-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'} transition-colors`}
            >
              RightCapital
            </a>
          <Link // Use NextLink for internal links
              href="/disclosure"
            className={`text-base ${darkTheme ? 'text-gray-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'} transition-colors`}
            >
              Disclosure
          </Link>
            <a 
              href="/documents/Privacy.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
            className={`text-base ${darkTheme ? 'text-gray-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900'} transition-colors`}
            >
              Privacy
            </a>
          </div>

        {/* Removed copyright */}
      </div>
    </footer>
  )
}