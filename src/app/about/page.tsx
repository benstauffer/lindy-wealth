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
                  <p>
                    Hi, I’m Ben Stauffer, a Certified Financial Planner® and the founder of Lindy Wealth.
                    <br />
                    <br />
                    I started Lindy to provide principled, long-term financial guidance for thoughtful entrepreneurs and families who want clarity—not complexity—in building and preserving their wealth.
                    <br />
                    <br />
                    Before Lindy, I worked at several firms serving clients across the wealth spectrum—from those just starting out to ultra-high-net-worth families with $100M+ in assets. Along the way, I’ve learned that simplicity, grounded in what we can control, consistently outperforms complexity dressed up as sophistication.
                    <br />
                    <br />
                    I don’t sell products. I don’t make market predictions. I focus on what we can control and prepare wisely for what we can’t.
                    <br />
                    <br />
                    Whether you’re a business owner balancing personal and professional finances, or a family planning across generations, I’ll serve as your financial quarterback—coordinating the moving pieces and helping you make wise, confident decisions.
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
