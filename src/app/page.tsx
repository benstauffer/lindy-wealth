"use client"

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import AnimatedVennDiagram from "@/components/ui/AnimatedVennDiagram";
import { RiArrowRightLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <HeaderSection />
      
      <div className="flex-1 flex items-center justify-center pt-32 md:pt-0">
        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto px-6">
          {/* Text section above */}
          <div className="text-white text-center mb-6">
            <h1 className="text-3xl md:text-5xl mb-4">
              Secure Your 
              <br/>
              Financial Future.
            </h1>
            <p className="text-base">
              Comprehensive financial guidance 
              <br/>
              to make your life and 
              <br/>
              money work better together.
            </p>
          </div>
          
          {/* Diagram section */}
          <div className="flex justify-center w-full overflow-hidden">
            <div className="scale-50 md:scale-100">
              <AnimatedVennDiagram />
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden md:block">
        <FooterSection />
      </div>
    </div>
  )
}
