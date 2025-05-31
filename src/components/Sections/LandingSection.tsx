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
    <div className="w-full max-w-5xl mx-auto px-6 text-center relative pb-16">
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
    <section className="w-full bg-white px-6 py-8">
      <LeftRightSection
        leftContent={
          <div>
            <h2 className="text-2xl font-medium text-neutral-900 mb-4">About</h2>
          </div>
        }
        rightContent={
          <div className="space-y-6">
            <p className="text-2xl text-neutral-600">
             Lindy Wealth is an independent financial planning firm based in Los Angeles and founded by Ben Stauffer, CFP®. We help people bring structure and clarity to their financial lives.
            </p>
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

// --- Planning Section (moved from PlanningSection.tsx) ---
const heroTextVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.01,
    },
  },
};
const heroLineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 1,
    transition: {
      duration: 0.2,
    },
  },
};

// --- ContactSection Component (Unified) ---
function ContactSection() {
  return (
    <section className="w-full bg-white px-6 py-8">
      <LeftRightSection
        leftContent={
          <h2 className="text-2xl md:text-2xl font-medium text-neutral-900">
            Get in Touch
          </h2>
        }
        rightContent={
          <div className="space-y-6 bg-neutral-300 p-8 rounded-2xl">
            <p className="text-2xl text-neutral-900">
              Let's explore how Lindy Wealth can help you navigate your financial journey with confidence. Schedule a call or send us an email to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://cal.com/ben-stauffer-ysbawo/30min"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-800"
              >
                Schedule Call
              </Link>
              <Link 
                href="mailto:ben@lindywealth.com"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors bg-white text-neutral-900 hover:bg-neutral-100"
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

function PlanningHero() {
  const [email, setEmail] = React.useState('');
  const overviewContent = {
    paragraphs: [
      "We start by getting clear on your goals, values, and financial picture. Then we design a personalized plan to help you acheive your objectives.",
      "Next, we a construct globally diversified, tax-efficient portfolio designed to support your financial plan.",
      "Finally, we put your plan into action and manage the day-to-day details so you can focus on your life, knowing everything is handled.",
    ],
  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email submitted (Planning/Investing):", email);
    alert(`Thank you! We'll notify ${email} about updates.`);
    setEmail('');
  };
  return (
    <motion.div 
      className="w-full mx-auto text-center relative pt-36 md:pt-36 pb-16 bg-white"
    >
      <div className="mt-32 flex flex-col items-center w-full mx-auto space-y-12 px-6">
      </div>
    </motion.div>
  );
}

interface PlanningTopic {
  title: string;
  description: string;
  bgColorClass: string;
  textColorClass: string;
  column: number;
}

interface PlanningCardProps {
  topic: PlanningTopic;
}

function PlanningCard({ topic }: PlanningCardProps) {
  return (
    <motion.div 
      className={`rounded-2xl overflow-hidden flex flex-col h-full ${topic.bgColorClass} p-8 space-y-4`}
      whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
    >
      <h3 className={`text-3xl ${topic.textColorClass} flex-grow`}>{topic.title}</h3>
      <div className="mt-auto"> 
        <p className={`text-base ${topic.textColorClass === 'text-white' ? 'text-white/80' : 'text-neutral-700'}`}> 
          {topic.description}
        </p>
      </div>
    </motion.div>
  );
}

function PlanningTopics() {
  const colorPairs = [
    { bgColorClass: "bg-[#75776B]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#D2D4D1]", textColorClass: "text-neutral-800" },
    { bgColorClass: "bg-[#718087]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#A28E78]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#F2E9E9]", textColorClass: "text-neutral-800" },
    { bgColorClass: "bg-[#382534]", textColorClass: "text-white" },
  ];
  const combinedServicesData = [
    { title: "Financial guidance", description: "Comprehensive financial advice tailored to you.", column: 1 },
    { title: "Personalized planning", description: "Developing a custom financial plan.", column: 1 },
    { title: "Net worth & estate oversight", description: "Managing your assets and legacy.", column: 1 },
    { title: "Cash flow & liquidity strategy", description: "Optimizing your income and available funds.", column: 2 },
    { title: "Tax strategy & optimization", description: "Minimizing tax impact on your wealth.", column: 2 },
    { title: "Risk management", description: "Identifying and mitigating financial risks.", column: 2 },
    { title: "Insurance reviews", description: "Ensuring adequate and appropriate coverage.", column: 3 },
    { title: "Estate & wealth transfer planning", description: "Planning for efficient transfer of assets.", column: 3 },
    { title: "3rd party coordination", description: "Working with your other professional advisors.", column: 3 },
    { title: "Asset Allocation", description: "Balancing different asset classes in your portfolio.", column: 1 },
    { title: "Diversification", description: "Spreading investments to reduce risk.", column: 1 },
    { title: "Risk Tolerance Assessment", description: "Understanding your comfort level with investment risk.", column: 1 },
    { title: "Portfolio Management", description: "Ongoing management and rebalancing of investments.", column: 2 },
    { title: "Tax-Efficient Investing", description: "Strategies to minimize taxes on investment gains.", column: 2 },
    { title: "Cost-Efficient Investing", description: "Utilizing low-cost index funds and ETFs.", column: 2 },
    { title: "Retirement Accounts", description: "Utilizing ROTH IRAs, Traditional IRAs, etc., for investing.", column: 3 },
    { title: "Behavioral Finance", description: "Understanding psychological influences on investing.", column: 3 },
  ];
  const combinedTopics: PlanningTopic[] = combinedServicesData.map((item, index) => ({
    ...item,
    ...colorPairs[index % colorPairs.length], 
  }));
  const column1 = combinedTopics.filter(obj => obj.column === 1);
  const column2 = combinedTopics.filter(obj => obj.column === 2);
  const column3 = combinedTopics.filter(obj => obj.column === 3);
  return (
    <motion.div
      className="w-full mx-auto relative py-24 md:py-32 bg-white"
    >
      
      
    </motion.div>
  );
}

function PlanningSection() {
  return (
    <section className="relative flex flex-col items-center">
      <PlanningHero />
      <PlanningTopics />
    </section>
  );
}

// --- PricingSection Component ---
function PricingSection() {
  const [isOngoing, setIsOngoing] = React.useState(true);

  return (
    <section className="w-full bg-white px-6 py-8">
      <div className="max-w-5xl mx-auto">
      <LeftRightSection 
        leftContent={
          <h2 className={`text-2xl font-medium text-neutral-900`}>
            Services & Pricing
          </h2>
        }
        rightContent={
            <div className="w-full flex flex-col space-y-8">
              {/* Pricing Card */}
              <div className="bg-neutral-100 rounded-3xl p-8 max-w-lg">
                {/* Toggle Switch */}
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-white rounded-full p-1 flex items-center">
                    <button
                      onClick={() => setIsOngoing(true)}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        isOngoing 
                          ? 'bg-neutral-800 text-white' 
                          : 'text-neutral-600 hover:text-neutral-800'
                      }`}
                    >
                      Ongoing Planning
                    </button>
                    <button
                      onClick={() => setIsOngoing(false)}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        !isOngoing 
                          ? 'bg-neutral-800 text-white' 
                          : 'text-neutral-600 hover:text-neutral-800'
                      }`}
                    >
                      One Time Plan
                    </button>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl text-neutral-900 mb-4">
                  {isOngoing ? 'Ongoing Financial Planning' : 'One Time Plan'}
                </h3>
                
                {/* Description */}
                <p className="text-neutral-600 mb-6">
                  {isOngoing 
                    ? 'For individuals and families looking for a long-term financial partner'
                    : 'For individuals and families looking for a one time planning engagement'
                  }
                </p>

                {/* Price Display */}
                <div className="mb-2">
                  <div className="flex items-baseline">
                    <span className="text-2xl text-neutral-900">
                      $5K-$20K
                    </span>
                    {isOngoing && (
                      <span className="text-neutral-600 ml-2">
                        / year
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Billing Notes */}
                <div className="text-sm text-neutral-600 mb-6 space-y-1">
                  {isOngoing ? (
                    <>
                      <p>* Based on complexity</p>
                      <p>* Billed quarterly in advance</p>
                      <p>* +0.35% AUM (optional)</p>
                    </>
                  ) : (
                    <>
                      <p>* Based on complexity</p>
                      <p>* 50% billed at engagement start</p>
                      <p>* 50% billed on plan delivery</p>
                    </>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-1 mb-4">
                  {(isOngoing ? [
                    'Comprehensive Financial Planning',
                    'Investment & Asset Allocation Planning',
                    'Tax Strategy & Withdrawal Planning',
                    'Cash Flow & Liquidity Strategy',
                    'Estate Planning',
                    'Charitable Giving Strategy',
                    'Insurance & Risk Management Analysis',
                    'Retirement Planning',
                    'Life Decision Analysis',
                    'Ongoing Support & Monitoring',
                    'Quarterly Plan Reviews',
                    'Regular Plan Updates & Adjustments'
                  ] : [
                    'Initial Financial Analysis & Plan',
                    'One-Time Investment Strategy',
                    'Tax Planning Review',
                    'Cash Flow Analysis',
                    'Estate Planning Review',
                    'Charitable Giving Review',
                    'Insurance & Risk Assessment',
                    'Retirement Planning Review',
                    'Life Goals Analysis',
                    'Written Action Items',
                    'Resource Recommendations',
                    'Implementation Guidance'
                  ]).map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-4 h-4 text-neutral-900 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-neutral-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  );
}

// --- ProcessSection Component ---
function ProcessSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const processSteps = [
    { 
      title: "1. Introduction", 
      description: "We'll discuss your goals, current situation, and see if we're a good fit to work together.",
      color: "bg-[#75776B]", 
      textColor: "text-white" 
    },
    { 
      title: "2. Deep Dive", 
      description: "A comprehensive review of your finances, goals, and priorities to understand your full picture.",
      color: "bg-[#D2D4D1]", 
      textColor: "text-neutral-800" 
    },
    { 
      title: "3. Engagement", 
      description: "We'll formalize our working relationship and begin the planning process.",
      color: "bg-[#718087]", 
      textColor: "text-white" 
    },
    { 
      title: "4. Planning & Investment Implementation", 
      description: "Create your personalized financial plan and implement the investment strategy.",
      color: "bg-[#A28E78]", 
      textColor: "text-white" 
    },
    { 
      title: "5. Ongoing Management", 
      description: "Regular monitoring, updates, and adjustments to keep your plan on track.",
      color: "bg-[#F2E9E9]", 
      textColor: "text-neutral-800" 
    },
  ];

  const swipeToNext = () => {
    if (currentIndex < processSteps.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const swipeToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="w-full bg-white px-6 py-8">
      <LeftRightSection
        leftContent={
          <div>
            <h2 className="text-2xl font-medium text-neutral-900 mb-4">Process</h2>
          </div>
        }
        rightContent={
          <div className="max-w-lg relative">
            {/* Card Stack Container */}
            <div className="relative h-80 w-full flex justify-center">
              {processSteps.map((step, index) => {
                const isActive = index === currentIndex;
                const offset = index - currentIndex;
                const isVisible = Math.abs(offset) <= 4; // Show all cards (max 4 on each side)
                
                if (!isVisible) return null;
                
                return (
                  <motion.div
                    key={index}
                    className={`absolute ${step.color} rounded-3xl p-6 sm:p-8 text-left shadow-sm cursor-grab active:cursor-grabbing`}
                    style={{
                      width: '100%',
                      maxWidth: '400px',
                      height: '300px',
                      pointerEvents: isActive ? 'auto' : 'none'
                    }}
                    initial={false}
                    animate={{
                      x: offset * 25, // Much closer together - reduced from 60 to 25
                      y: Math.abs(offset) * 8, // Much closer vertical spacing - reduced from 20 to 8
                      scale: 1 - Math.abs(offset) * 0.08, // Less scale reduction for tighter stack
                      rotate: offset * 1, // Minimal rotation for tight stacking
                      zIndex: processSteps.length - Math.abs(offset),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 40,
                      mass: 1
                    }}
                    drag={isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.3}
                    onDragEnd={(event, { offset, velocity }) => {
                      const threshold = 80;
                      const velocityThreshold = 300;
                      
                      if (Math.abs(offset.x) > threshold || Math.abs(velocity.x) > velocityThreshold) {
                        if (offset.x > 0 && currentIndex > 0) {
                          swipeToPrevious();
                        } else if (offset.x < 0 && currentIndex < processSteps.length - 1) {
                          swipeToNext();
                        }
                      }
                    }}
                    whileDrag={{
                      scale: 1.05,
                    }}
                  >
                    <div className="h-full flex flex-col">
                      <h3 className={`text-xl sm:text-2xl font-medium ${step.textColor} mb-3`}>
                        {step.title}
                      </h3>
                      <p className={`text-lg sm:text-xl ${step.textColor === 'text-white' ? 'text-white/90' : 'text-neutral-700'} flex-grow`}>
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Arrow navigation */}
            <div className="flex justify-center items-center mt-2 space-x-8">
              <button
                onClick={swipeToPrevious}
                disabled={currentIndex === 0}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  currentIndex === 0 
                    ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed' 
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={swipeToNext}
                disabled={currentIndex === processSteps.length - 1}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  currentIndex === processSteps.length - 1 
                    ? 'bg-neutral-200 text-neutral-400 cursor-not-allowed' 
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        }
      />
    </section>
  );
}

// --- OfferingSection Component ---
function OfferginSection() {
  const colorPairs = [ // Ensure enough distinct pairs if needed, or reuse
    { bgColorClass: "bg-[#75776B]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#D2D4D1]", textColorClass: "text-neutral-800" },
    { bgColorClass: "bg-[#718087]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#A28E78]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#F2E9E9]", textColorClass: "text-neutral-800" },
    { bgColorClass: "bg-[#382534]", textColorClass: "text-white" },
  ];

  



}

// --- Main Export Component --- 
export function Section01() {
  return (
    <section className="relative flex flex-col items-center">
      {/* Render consolidated components directly */}
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <ProcessSection />
      <ContactSection />
    </section>
  );
} 