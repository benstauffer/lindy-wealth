'use client'

import { Header } from "@/components/Header";
import { FooterSection } from "@/components/Footer";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { PricingTable } from "@/components/PricingTable";
import { motion } from 'framer-motion';

export default function PricingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
        delayChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 5
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.15
      }
    }
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-16 lg:py-24">
        <motion.h1 
          className="text-neutral-900 suisse-font text-2xl text-center mb-10"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Services
        </motion.h1>

        <motion.div 
          className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-stretch gap-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          
          {/* Left Column: Financial Planning */}
          <motion.div 
            className="md:w-1/2 border rounded-2xl border-neutral-200 p-6 flex flex-col text-center space-y-4"
            variants={itemVariants}
          >
            <h2 className="text-base text-neutral-900 max-w-xs mx-auto rounded-full border border-neutral-200 px-4 py-1">Financial Planning</h2>
            <p className="text-base text-neutral-900 flex-grow">
              + Comprehensive financial guidance
              <br />
              + Personalized financial planning
              <br />
              + Net worth & estate oversight
              <br />
              + Cash flow, savings, & liquidity strategy
              <br />
              + Tax strategy & optimization
              <br />
              + Risk management & insurance reviews
              <br />
              + Estate & wealth transfer planning
              <br />
              + 3rd party coordination
              <br />
              + Ongoing financial advice
            </p>
            <p>
              <span className="">
                * Starting at $5,000
              </span>
              <br />
              <span className="text-neutral-500 text-sm leading-none">
                (Pricing ranges from $5,000 to $20,000
                <br />
                per year and is based on complexity)
              </span>
            </p>
          </motion.div>

          {/* Right Column: Investment Management */}
          <motion.div 
            className="md:w-1/2 border rounded-2xl border-neutral-200 p-6 flex flex-col text-center space-y-4"
            variants={itemVariants}
          >
            <h2 className="text-base text-neutral-900 rounded-full border border-neutral-200 px-4 py-1 mx-auto">Investment Management</h2>
            <p className="text-base text-neutral-900 flex-grow">
              + A personalized investment strategy carefully aligned with your financial plan
              <br />
              + Globally diversified, tax efficient investing
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-full max-w-md">
                <PricingTable />
              </div>
              
            </div>
            <p>
              <span className="">
                * Billed as a percentage 
                <br />
                of assets under management
              </span>
              <br />
              <span className="text-neutral-500 text-sm leading-none">
                (The advisory fee is a blended tier 
                <br />
                based on the schedule above)
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Horizontal Buttons: Back & Get Started */}
        <motion.div 
          className="mt-12 flex justify-center gap-4 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.2 }}
        >
          {/* Back Button (Icon Only - Perfect Circle 48px) */}
          <Link 
            href="/"
            className="group inline-flex items-center justify-center w-12 h-12 text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full transition-colors duration-200"
            aria-label="Back to home"
          >
            <FiArrowLeft className="h-4 w-4" />
          </Link>

          {/* Get Started Button (Text + Icon - 48px height) */}
          <a 
            href="https://form.typeform.com/to/xtuCtft7"
            className="group inline-flex items-center px-4 py-3 text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full transition-colors duration-200"
          >
            Get Started
            <FiArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>

      </main>
      <FooterSection />
    </div>
  );
}
