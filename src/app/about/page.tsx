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
                    Hi, I’m Ben Stauffer.
                    <br />
                    <br />
                    I'm a Certified Financial Planner® and the founder of Lindy Wealth.
                    <br />
                    <br />
                    I started Lindy to provide principled, long-term financial guidance. Before Lindy, I worked at firms serving clients at every level of wealth with net worths ranging from zero to $100M+.
                    <br />
                    <br />
                    What I learned? Money doesn’t change the basics. The best plans are thoughtful, durable, and built around your actual life.
                    <br />
                    <br />
                    My job is straightforward:
                    <br />
                    Help you reach your goals &
                    <br />
                    Bring you clarity and peace of mind so you can focus on what matters most.
                    <br />
                    <br />
                    I’ll help you manage your wealth, avoid expensive mistakes, and move forward with confidence.
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
