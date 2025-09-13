"use client"

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import AnimatedVennDiagram from "@/components/ui/AnimatedVennDiagram";
import { RiArrowRightLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderSection />
      
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto px-6">
          {/* Text section above */}
          <div className="text-white text-center">
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
          <div className="flex justify-center">
            <AnimatedVennDiagram />
          </div>
        </div>
      </div>
      
      <FooterSection />
    </div>
  )
}
