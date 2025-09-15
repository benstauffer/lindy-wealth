"use client"

import { HeaderSection } from "@/components/Sections/Header";
import { FooterSection } from "@/components/Sections/Footer";
import AnimatedVennDiagram from "@/components/ui/AnimatedVennDiagram";
import { RiArrowRightLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <HeaderSection />
      
      {/* Diagram section - right under header */}
      <div className="flex justify-center w-full overflow-hidden mt-8">
        <div className="scale-[0.15] md:scale-[0.3]">
          <AnimatedVennDiagram />
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center w-full max-w-lg mx-auto px-6">
          {/* Text section below */}
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
        </div>
      </div>
      
      <div className="hidden md:block">
        <FooterSection />
      </div>
    </div>
  )
}
