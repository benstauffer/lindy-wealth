'use client'

import { Header } from "@/components/Header";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { FooterSection } from "@/components/Footer";
import Image from 'next/image';
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

  const paragraphVariants = {
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
      <main className="flex-grow py-36">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mx-auto h-full flex flex-col">
            <article id="intro" className="flex-grow space-y-16 text-center max-w-md mx-auto">
              {/* Bio Section */}
              <div className="space-y-8">
                <motion.div 
                  className="flex justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ContactCard />
                </motion.div>
                <motion.div 
                  className="text-lg text-neutral-900 space-y-4 max-w-sm mx-auto"
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                >
                  <motion.p variants={paragraphVariants}>I'm Ben, founder of Lindy Wealth.</motion.p>
                  
                  <motion.p variants={paragraphVariants}>I've helped clients across the wealth spectrum—most recently at AdvicePeriod, an ultra-high-net-worth firm in Los Angeles.</motion.p>
                  
                  <motion.p variants={paragraphVariants}>I started Lindy to offer principled guidance for people who think long-term and want clarity over complexity. I don't sell products. I don't chase trends. I don't pretend to know the future.</motion.p>
                  
                  <motion.p variants={paragraphVariants}>If you're looking for a market call, a narrative, or a someone to sell you an investment—I'm not your guy. But if you want honest, actionable advice rooted in fundamentals, we should talk.</motion.p>
                </motion.div>
              </div>

              {/* Bottom Navigation Buttons */}
              <motion.div 
                className="mb-8 flex justify-center gap-4 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.2 }}
              >
                <Link 
                  href="/"
                  className="group inline-flex items-center justify-center w-12 h-12 text-base border border-neutral-900 text-black hover:text-white bg-white hover:bg-neutral-900 rounded-full transition-colors duration-200"
                  aria-label="Back to home"
                >
                  <FiArrowLeft className="h-4 w-4" />
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
