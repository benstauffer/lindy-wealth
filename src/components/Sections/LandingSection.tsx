'use client'

import React from 'react'
import { FiArrowRight, FiBriefcase, FiDollarSign, FiShield, FiTrendingUp, FiFileText } from "react-icons/fi"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LeftRightSection } from '../ui/LeftRightSection'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
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
      <div className="w-full flex justify-center items-center">
        <div className="relative" style={{ width: '100%', maxWidth: '425px' }}>
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
      <div className="w-full text-2xl sm:text-5xl font-normal mb-6 md:mb-10 mt-4 md:mt-0 max-w-2xl font-leading-loose  mx-auto"> 
        <div className="">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-neutral-900"
          >
            <motion.div variants={lineVariants} className="max-w-2xl mx-auto">
            Financial planning that helps
            <br />
            you make sense of it all.
            </motion.div>
            <motion.div variants={lineVariants} className="text-xl sm:text-2xl mt-2 md:mt-4 text-neutral-500 max-w-xl mx-auto">
              Planning, investing, and strategy
              <br />
              to help you reach your goals.
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

// --- AccordionSection Component ---
function AccordionSection() {
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined);

  const colorPairs = [
    { bgColorClass: "bg-[#75776B]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#D2D4D1]", textColorClass: "text-neutral-800" },
    { bgColorClass: "bg-[#718087]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#A28E78]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#F2E9E9]", textColorClass: "text-neutral-800" },
    { bgColorClass: "bg-[#382534]", textColorClass: "text-white" },
  ];

  const servicesData = [
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

  const topics = servicesData.map((item, index) => ({
    ...item,
    ...colorPairs[index % colorPairs.length], 
  }));

  const column1 = topics.filter(obj => obj.column === 1);
  const column2 = topics.filter(obj => obj.column === 2);
  const column3 = topics.filter(obj => obj.column === 3);

  const PlanningCard = ({ topic }: { topic: any }) => (
    <motion.div 
      className={`rounded-xl overflow-hidden flex flex-row items-center ${topic.bgColorClass} p-4 gap-2`}
    >
      <h3 className={`text-lg ${topic.textColorClass} flex-shrink-0`}>{topic.title}</h3>
      <p className={`text-sm ${topic.textColorClass === 'text-white' ? 'text-white/80' : 'text-neutral-700'} flex-1 text-right`}> 
        {topic.description}
      </p>
    </motion.div>
  );

  return (
    <section className="w-full bg-white px-6 ">
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4" value={openItem} onValueChange={setOpenItem}>
          
          {/* About Lindy */}
          <motion.div
            whileHover={openItem !== "about" ? { 
              scale: 1.02, 
              transition: { type: "spring", stiffness: 300, damping: 20 } 
            } : {}}
            className="transform-gpu"
          >
            <AccordionItem value="about" className="bg-neutral-900 rounded-2xl px-8 py-4 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <AccordionTrigger className="text-white text-xl font-medium hover:no-underline">
                About Lindy
              </AccordionTrigger>
              <AccordionContent className="text-white">
                <div className="space-y-6 pt-4">
                  <p className="text-xl text-white/90">
                    Lindy Wealth is an independent financial planning firm based in Los Angeles and founded by Ben Stauffer, CFP®. We help people bring structure and clarity to their financial lives.
                  </p>
                  <p className="text-xl text-white/90">
                    We start by getting clear on your goals, values, and financial picture. Then we design a personalized plan to help you acheive your objectives.
                  </p>
                  <p className="text-xl text-white/90">
                    Next, we a construct globally diversified, tax-efficient portfolio designed to support your financial plan.
                  </p>
                  <p className="text-xl text-white/90">
                    Finally, we put your plan into action and manage the day-to-day details so you can focus on your life, knowing everything is handled.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          {/* Services & Pricing */}
          <motion.div
            whileHover={openItem !== "pricing" ? { 
              scale: 1.02, 
              transition: { type: "spring", stiffness: 300, damping: 20 } 
            } : {}}
            className="transform-gpu"
          >
            <AccordionItem value="pricing" className="bg-neutral-900 rounded-2xl px-8 py-4 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <AccordionTrigger className="text-white text-xl font-medium hover:no-underline">
                Services & Pricing
              </AccordionTrigger>
              <AccordionContent className="text-white">
                <div className="w-full flex flex-col space-y-6 pt-4">
                  <p className="text-xl text-white/90">
                    <span className="text-white font-medium">Full-service financial planning</span>
                    <br />
                    Planning engagements range from $5k to $20k per year (billed quarterly) and are based on complexity.
                    <br />
                    <br />
                    <span className="text-white font-medium">Investment management</span>
                    <br />
                    If assets are managed, the following fee schedule will apply in addition to the planning fee.
                  </p>
                  <div className="space-y-6 bg-neutral-800 p-8 rounded-2xl text-left">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-white/80 text-xl">
                      <p className="font-medium text-xl text-white mb-4">Assets <br /> Managed</p>
                      <p className="font-medium text-xl text-white mb-4">Annual <br /> Fee</p>
                      <p>$0-1M</p>
                      <p>1.00%</p>
                      <p>$1M-5M</p>
                      <p>0.75%</p>
                      <p>$5M-10M</p> 
                      <p>0.50%</p>
                      <p>$10M-25M</p>
                      <p>0.40%</p>
                      <p>$25M+</p>
                      <p>0.30%</p>
                    </div>
                    <p className="text-sm text-white/60 pt-2">
                      Billed as a percentage of assets under management. The advisory fee is a blended tier based on the schedule above.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          {/* What's Included */}
          <motion.div
            whileHover={openItem !== "included" ? { 
              scale: 1.02, 
              transition: { type: "spring", stiffness: 300, damping: 20 } 
            } : {}}
            className="transform-gpu"
          >
            <AccordionItem value="included" className="bg-neutral-900 rounded-2xl px-8 py-4 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <AccordionTrigger className="text-white text-xl font-medium hover:no-underline">
                What's Included
              </AccordionTrigger>
              <AccordionContent className="text-white">
                <div className="pt-4">
                  <p className="text-xl text-white/90 mb-8">
                    Our comprehensive service includes financial planning and investment management.
                  </p>
                  <div className="flex flex-col gap-2">
                    {[...column1, ...column2, ...column3].map((topic, index) => (
                      <motion.div
                        key={`service-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                      >
                        <PlanningCard topic={topic} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>

          {/* Contact */}
          <motion.div
            whileHover={openItem !== "contact" ? { 
              scale: 1.02, 
              transition: { type: "spring", stiffness: 300, damping: 20 } 
            } : {}}
            className="transform-gpu"
          >
            <AccordionItem value="contact" className="bg-neutral-900 rounded-2xl px-8 py-4 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <AccordionTrigger className="text-white text-xl font-medium hover:no-underline">
                Contact
              </AccordionTrigger>
              <AccordionContent className="text-white">
                <div className="pt-4">
                  <p className="text-xl text-white/90 mb-6">
                    Let's explore how Lindy Wealth can help you navigate your financial journey with confidence. Schedule a call or send us an email to get started.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="https://cal.com/ben-stauffer-ysbawo/30min"
                      className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors bg-white text-neutral-900 hover:bg-neutral-100"
                    >
                      Schedule Call
                    </Link>
                    <Link 
                      href="mailto:ben@lindywealth.com"
                      className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700"
                    >
                      Email
                    </Link>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>

        </Accordion>
      </div>
    </section>
  );
}

// --- Main Export Component --- 
export function Section01() {
  return (
    <section className="relative flex flex-col items-center">
      <HeroSection />
      <AccordionSection />
    </section>
  );
} 