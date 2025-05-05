'use client'

import React from 'react'
import { FiArrowRight, FiBriefcase, FiDollarSign, FiShield, FiTrendingUp, FiFileText } from "react-icons/fi"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LeftRightSection } from '../ui/LeftRightSection'
// import { ContactCard } from '../ContactCard' // Assuming ContactCard might be needed elsewhere or defined inline later
// import { LearnMore } from '../ui/LearnMore' // Removed as it wasn't used in the consolidated components
// import { Marquee } from '../ui/infinite' // Removed as Marquee usage was commented out

// --- Consolidated Components from ./01 directory ---

// --- HeroSection Component ---
const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.01
      }
    }
 };
const lineVariants = { 
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 1,
      transition: {
        duration: 0.2
      }
    }
  };

function HeroSection() {
  const servicesWithIcons = [
    { name: "Financial Planning", icon: <FiFileText /> },     
    { name: "Tax Strategy", icon: <FiDollarSign /> },   
    { name: "Financial Education", icon: <FiTrendingUp /> }, 
    { name: "Insurance Management", icon: <FiShield /> },     
    { name: "Investment Management", icon: <FiBriefcase /> }, 
    { name: "Retirement Planning", icon: <FiTrendingUp /> },
    { name: "Business Planning", icon: <FiBriefcase /> },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 text-center relative md:pt-16 pb-16">
      <div className="w-full flex justify-center items-center my-8">
        <div className="relative" style={{ width: '100%', maxWidth: '500px' }}>
          <Image 
            src="/images/art.png"
            alt="Hero illustration"
            width={500}
            height={350}
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="w-full text-3xl sm:text-5xl font-normal mb-6 md:mb-10 mt-4 md:mt-0 max-w-2xl mx-auto"> 
        <div className="">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-neutral-900"
          >
            <motion.div variants={lineVariants} className="max-w-2xl mx-auto">
            Financial planning that helps you make sense of it all.
            </motion.div>
            <motion.div variants={lineVariants} className="text-xl sm:text-2xl mt-2 md:mt-4 text-neutral-600 max-w-xl mx-auto">
              Planning, investing, and long-term strategy to help you reach your goals with confidence.
            </motion.div> 
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex justify-center items-center gap-4 mt-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      >
        <Link 
          href="https://cal.com/ben-stauffer-ysbawo/30min" 
          className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
           Let's Talk
           <FiArrowRight className="ml-1 transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
        </Link>

      </motion.div>
      {/* Marquee section commented out as in original HeroSection.tsx */}
      {/* <div className="w-full max-w-5xl mx-auto mt-12 space-y-6">
        <Marquee direction="left" speed={0.75}> ... </Marquee>
        <Marquee direction="right" speed={1}> ... </Marquee>
      </div> */}
    </div>
  );
} 

// --- AboutSection Component ---
function AboutSection() {
  return (
    <section className="w-full bg-white px-6">
      <LeftRightSection
        leftContent={
          <div>
            <h2 className="text-2xl font-medium text-neutral-900 mb-4">About</h2>
          </div>
        }
        rightContent={
          <div className="space-y-6">
            <p className="text-2xl text-neutral-600">
             Lindy Wealth is an independent financial planning firm based in Los Angeles and founded by Ben Stauffer, CFP®. We help people bring structure, clarity, and long-term thinking to their financial lives.
            </p>
            <p className="text-2xl text-neutral-600">
            Our approach blends planning, investing, and long-term support to help you build and manage your wealth.
              </p>
            <p className="text-2xl text-neutral-600">
             We believe financial clarity helps you live a more meaningful life. Our work is designed to free you to focus on what matters most.
            </p>
          </div>
        }
      />
    </section>
  );
} 

// --- ContactSection Component ---
function ContactSection() {
  return (
    <section className="w-full bg-white px-6">
      <LeftRightSection
        leftContent={
          <h2 className="text-2xl md:text-2xl font-medium text-neutral-900">
            Want to chat?
          </h2>
        }
        rightContent={
          <div className="space-y-6 bg-neutral-300 p-8 rounded-2xl">
            <p className="text-2xl text-neutral-900">
            Let's explore how Lindy Wealth can help you navigate your financial journey with confidence.
            </p>
            <div>
              <Link 
              href="https://cal.com/ben-stauffer-ysbawo/30min"
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Schedule Call
              </Link>
            </div>
          </div>
        }
      />
      
    </section>
  );
}

// --- WhereToStartSection Component ---
// Types for Props
interface FeatureCard {
  subtitle: string; // Used for the main title
  description: string; // Added description field
  ctaText: string;
  ctaLink: string;
  bgColorClass: string; 
  textColorClass: string; // Added for dynamic text color
  badge?: string; // Keep optional badge data if needed elsewhere, but won't render here
}
interface WhereToStartSectionProps {
  featureCards: FeatureCard[];
}

function WhereToStartSection({ featureCards }: WhereToStartSectionProps) {
  const card = featureCards[0]; // Get the single card

  return (
    <section id="work-with-us" className="w-full pb-32 bg-white scroll-mt-36 sm:scroll-mt-28 px-6">
      <LeftRightSection
        leftContent={
          <h3 className="text-2xl md:text-2xl leading-tight text-neutral-900 font-medium">
            Work with 
            <br />
            Lindy Wealth
          </h3>
        }
        rightContent={
          <div className="space-y-8">
            <p className="text-2xl text-neutral-600">
              Full-service financial planning and investment management for those seeking clarity and confidence.
            </p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                href={card.ctaLink}
                className="block"
              >
                <div className="space-y-6 bg-[#718087] p-8 rounded-2xl">
                  <div className="space-y-4">
                    <h3 className="text-2xl text-white">{card.subtitle}</h3>
                    <p className="text-white/80 text-base">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors bg-white text-neutral-900 group-hover:bg-neutral-100">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        }
      />
    </section>
  );
} 

// --- RoadmapCTASection Component ---
function RoadmapCTASection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">
      <LeftRightSection
        leftContent={
          <div>
            <h2 className="text-2xl font-medium text-neutral-900 mb-4">Contact</h2>
          </div>
        }
        rightContent={
          <div className="space-y-6 bg-neutral-300 p-8 rounded-2xl">
            <p className="text-2xl text-neutral-900">
              Send us an email to get started with a consultation or to ask any questions.
            </p>
            <div>
              <Link 
                href="mailto:ben@lindywealth.com"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Email
              </Link>
            </div>
          </div>
        }
      />
    </section>
  );
}

// --- TopCardsSection Component --- (Note: Removed props as data is now internal)
// Types for Cards
interface Card {
  title: string;
  description: string;
  href: string;
  badge?: string;
}


// --- Data Definitions for Sections ---
const featureCards: FeatureCard[] = [
    {
      subtitle: "Ongoing financial advice & planning that turns goals into action",
      description: "Ideal for those with more complex planning needs looking for coordinated full service planning.",
      bgColorClass: "bg-[#718087]", 
      textColorClass: "text-white",
      badge: "PLANNING",
      ctaText: "Learn more",
      ctaLink: "/planning"
    }
  ];

// --- Main Export Component --- 
export function Section01() {
  return (
    <section className="relative flex flex-col items-center">
      {/* Render consolidated components directly */}
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <WhereToStartSection featureCards={featureCards} />
      <RoadmapCTASection />
    </section>
  );
} 