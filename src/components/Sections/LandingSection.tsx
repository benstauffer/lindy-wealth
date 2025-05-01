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
      <div className="relative w-full h-[500px] mb-6">
        <Image 
          src="/images/art.png"
          alt="Hero illustration"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="w-full text-3xl sm:text-5xl font-normal mb-10 "> 
        <div className="">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-neutral-900"
          >
            <motion.div variants={lineVariants}>Financial planning for <br /> creators & entrepreneurs.</motion.div>
            <motion.div variants={lineVariants} className="text-xl sm:text-2xl mt-4 text-neutral-600"> Planning, investing, & long-term strategy.</motion.div> 
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex justify-center items-center gap-4"
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
              Lindy Wealth is a financial planning firm focused on serving creators and entrepreneurs. We bring structure, clarity, and long-term thinking to your financial life.
            </p>
            <p className="text-2xl text-neutral-600">
              Our approach combines evidence-based investing, tax optimization strategies, and personalized financial roadmaps to help you build lasting wealth that supports your unique goals and values.
            </p>
            <p className="text-2xl text-neutral-600">
              We believe that financial success is a prerequisite to bringing any life goal to fruition. Our services are designed to give you the financial foundation you need to focus on what matters most to you.
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
          <p className="text-2xl text-neutral-600">
            Choose the path below that best fits where you are today.
          </p>
        }
        className="mb-16"
      />
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      > 
        {featureCards.map((card, index) => (
          <motion.div 
            key={index} 
            className={`rounded-2xl overflow-hidden flex flex-col h-full`}
          >
            <Link href={card.ctaLink} className="block h-full group">
              <div className={`space-y-4 ${card.bgColorClass} p-8 rounded-2xl h-full flex flex-col relative`}>
                
                {/* Main Text (Subtitle) - Dynamic text color */}
                <h3 className={`text-3xl ${card.textColorClass} flex-grow`}>{card.subtitle}</h3>
                
                {/* Container for bottom elements */}
                <div className="mt-auto"> 
                  {/* Description - Conditional text color */}
                  <p className={`text-base mb-4 ${card.textColorClass === 'text-white' ? 'text-white/80' : 'text-neutral-700'}`}> 
                    {card.description}
                  </p>
                  
                  {/* Arrow Icon - Now absolutely positioned within the card link */}
                  <div className="absolute bottom-8 right-8"> 
                    <FiArrowRight className={`h-6 w-6 ${card.textColorClass} ${card.textColorClass === 'text-white' ? 'group-hover:text-white/80' : 'group-hover:text-neutral-700'} transition-colors`} /> 
                  </div>
                </div>
              </div> 
            </Link>
          </motion.div>
        ))}
      </motion.div>
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
// Moved cardData into TopCardsSection
const featureCards: FeatureCard[] = [
    {
      subtitle: "A 30-day guided sprint that gets your financial house in order.",
      description: "Best for early-stage creators & small business owners learning to manage their first serious online income.",
      bgColorClass: "bg-[#F2E9E9]", 
      textColorClass: "text-neutral-900", // White text for medium bg
      badge: "EDUCATION",
      ctaText: "Learn more",
      ctaLink: "/education"
    },
    {
      subtitle: "Ongoing financial advice & planning that turns goals into action",
      description: "Ideal for established creators & entrepreneurs seeking coordinated tax, investment, and long-term planning.",
      bgColorClass: "bg-[#718087]", 
      textColorClass: "text-white", // White text for darker bg
      badge: "PLANNING",
      ctaText: "Learn more",
      ctaLink: "/planning"
    },
  ];

// --- Main Export Component --- 
export function Section01() {
  return (
    <section className="relative flex flex-col items-center">
      {/* Render consolidated components directly */}
      <HeroSection />
      {/* <TopCardsSection /> */} {/* Removed as TopCardsSection seemed unused */} 
      <AboutSection />
      <ContactSection />
      <WhereToStartSection featureCards={featureCards} />
      <RoadmapCTASection />
    </section>
  );
} 