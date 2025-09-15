'use client'

import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useState } from "react";
import Logo from "@/components/ui/Logo";

export function HeaderSection() {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Gradient background that fades out */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent h-32"></div>
      
      {/* Header content */}
      <div className="relative py-4 px-6">
        <div className="flex justify-center items-center w-full">
          {/* Desktop menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-white font-medium hover:text-gray-300 transition-colors">
              Start
            </Link>
            <Link href="/services" className="text-white font-medium hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-white font-medium hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-white font-medium hover:text-gray-300 transition-colors">
              Pricing
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link href="/menu" className="px-4 py-2 text-white font-medium rounded-full border border-white hover:bg-white hover:text-black transition-all duration-200">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
