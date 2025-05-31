import Link from 'next/link'
import { Book } from '@/components/ui/book' // Import the Book component
import { FiArrowRight } from 'react-icons/fi'; // Import the arrow icon

// Rename component to Resources
export function Resources() {
  return (
    // Main container just holds the rows
    <div className="w-full mt-2 flex flex-col space-y-4"> {/* Add space between rows */}

      {/* Learn Row */}
      {/* Align items center vertically, add title inline */}
      <div className="flex justify-start items-center gap-6 overflow-x-auto py-4 w-full pl-4"> {/* Changed items-end to items-center */}
        {/* Title inline with icon - remove internal flex alignment */}
        <span className="text-xl font-semibold mr-4 whitespace-nowrap text-neutral-900 suisse-font">
          Learn
          <FiArrowRight className="ml-2 inline-block" /> {/* Use inline-block for icon alignment */}
        </span>
        <Link href="/books/investing">
           {/* Pass width directly, remove wrapper div */}
            <Book color="#9CBE8E" width={144}>
              <div className="p-4 text-left text-white h-full flex flex-col justify-end " style={{ backgroundColor: '#327E0B' }}>
               <p className="font-semibold">Investing</p>
              </div>
            </Book>
        </Link>

        <Link href="/books/tax">
           {/* Pass width directly, remove wrapper div */}
          <Book color="#9CBE8E" width={144}>
            <div className="p-4 text-left text-white h-full flex flex-col justify-end " style={{ backgroundColor: '#327E0B' }}>
              <p className="font-semibold">Tax</p>
            </div>
          </Book>
        </Link>
         {/* Commented out books remain here for now */}
         {/* <Link href="/books/insurance">
// ... existing code ...
         </Link> */}
      </div>

       {/* Tools Row */}
       {/* Align items center vertically, add title inline */}
       <div className="flex justify-start items-center gap-6 overflow-x-auto py-4 w-full pl-4"> {/* Changed items-end to items-center */}
         {/* Title inline with icon - remove internal flex alignment */}
         <span className="text-xl font-semibold mr-4 whitespace-nowrap suisse-font">
           Tools
           <FiArrowRight className="ml-2 inline-block" /> {/* Use inline-block for icon alignment */}
         </span>

         <Link href="/tools/monte-carlo">
            {/* Update dimensions and add hover effect */}
           <div className="w-32 h-40 border border-[#327E0B] rounded p-4 flex items-center justify-center transition-transform duration-200 hover:scale-105">
             <p className="font-semibold text-center">Monte Carlo Projection</p>
           </div>
         </Link>

         <Link href="/lab/buyrent">
            {/* Update dimensions and add hover effect */}
           <div className="w-32 h-40 border border-[#327E0B] rounded p-4 flex items-center justify-center transition-transform duration-200 hover:scale-105">
             <p className="font-semibold text-center">Buy vs Rent</p>
           </div>
         </Link>
       </div>

    </div>
  )
}
