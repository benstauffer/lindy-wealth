"use client"

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import AnimatedVennDiagram from "@/components/ui/AnimatedVennDiagram";
import { RiArrowRightLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto w-full">
          {/* Text section above */}
          <div className="text-white text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl mb-2 sm:mb-3 leading-tight">
              Secure Your 
              <br/>
              Financial Future.
            </h1>
            <p className="text-sm sm:text-base leading-tight">
              Comprehensive financial guidance 
              <br/>
              to make your life and 
              <br/>
              money work better together.
            </p>
          </div>
          
          {/* Diagram section */}
          <div className="flex justify-center w-full">
            <div className="scale-75 sm:scale-90 md:scale-100">
              <AnimatedVennDiagram />
            </div>
          </div>
        </div>
      </div>
      
      <FooterSection />
    </div>
  )
}