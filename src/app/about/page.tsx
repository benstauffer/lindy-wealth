'use client'

import { Header } from "@/components/Header";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { FooterSection } from "@/components/Footer";
import { ContactCard } from "@/components/ContactCard";
import { motion } from 'framer-motion';

export default function About() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.02
      }
    }
  }

  const lineVariants = {
    hidden: { 
      opacity: 0, 
      y: 10
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
      <main className="flex-grow py-24 sm:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mx-auto h-full flex flex-col">
            <article id="intro" className="flex-grow space-y-12 text-center max-w-md mx-auto">
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <ContactCard />
              </motion.div>

              <motion.div 
                className="text-neutral-900 suisse-font text-lg sm:text-xl space-y-16"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <motion.div variants={lineVariants}>
                  <p>I'm Ben, founder of Lindy Wealth.
                    <br />
                    I've helped clients across the wealth spectrum—most recently at AdvicePeriod, an ultra-high-net-worth firm in Los Angeles. 
                    <br />
                    <br />
                    This site is simple 
                    <br />
                    and so are my goals:
                    <br />
                    <br />
                    Give you clear, actionable advice,
                    <br />
                    Create a plan that supports your goals,
                    <br />
                    Build an investment strategy around that plan,
                    <br />
                    And bring you clarity and peace of mind.
                    <br />
                    <br />
                    I'll act as your financial quarterback—coordinating and optimizing your financial life, with meticulous focus on what we can control and wise preparation for what we can't.
                    <br />
                    <br />
                    First, we'll discuss your goals, values, and vision, and create a financial plan. Next, we'll work together to build an investment strategy that aligns with your financial plan. Finally, we'll execute the strategy & continuously adapt as your life evolves.
                    </p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="mt-10 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                <Link 
                  href="/"
                  className="group inline-flex items-center justify-center w-24 h-24 text-base border border-neutral-700 text-neutral-700 hover:text-white bg-white hover:bg-neutral-700 rounded-full transition-colors duration-200"
                  aria-label="Back to home"
                >
                  <FiArrowLeft className="h-5 w-5" />
                </Link>
              </motion.div>

            </article>
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
