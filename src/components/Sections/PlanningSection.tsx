'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LeftRightSection } from "../ui/LeftRightSection";
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

// --- Placeholder Components for Planning ---

// --- PlanningHero Component Logic (Now includes Investing aspects) ---
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

function PlanningHero() {
  const [email, setEmail] = useState('');

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
      <div className="max-w-5xl mx-auto px-6">
        <div className="w-full text-3xl sm:text-5xl font-normal mb-10">
          <div className="">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={heroTextVariants}
              className={"text-neutral-900"}
            >
              <motion.div variants={heroLineVariants}>
                Plan & Invest
              </motion.div>
              <motion.div
                variants={heroLineVariants}
                className={`text-xl sm:text-2xl mt-4 text-neutral-600`}
              >
                 Build and managegit your wealth <br/> with a unified strategy.
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.form
        >
          <div className="relative flex items-center justify-center">
          <Link 
          href="https://cal.com/ben-stauffer-ysbawo/30min" 
          className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
           Let's Talk
           <FiArrowRight className="ml-1 transform transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
        </Link>
          </div>
        </motion.form>
      </div>
        
      <div className="mt-32 flex flex-col items-center w-full mx-auto space-y-12 px-6">
        <LeftRightSection 
          leftContent={
            <h2 className={`text-2xl font-medium text-neutral-900`}>
              Our Approach
            </h2>
          }
          rightContent={
            <div className="space-y-8">
              {overviewContent.paragraphs.map((paragraph, index) => (
                <p key={index} className={`text-2xl text-neutral-600`}>
                  {paragraph}
                </p>
              ))}
            </div>
          }
        />

         {/* Replaced Pricing Section with Investing Pricing Card */}
         <LeftRightSection 
          leftContent={
            <h2 className={`text-2xl font-medium text-neutral-900`}>
              Pricing:
            </h2>
          }
          rightContent={
            <div className="w-full flex flex-col space-y-6"> {/* Allow stacking of pricing info */}
              {/* Planning Pricing Info */}
              <p className={`text-2xl text-neutral-600`}>
                Planning engagements range from $2k to $20k and are based on complexity. If assets are managed, the following fee schedule will apply in addition to the planning fee.
              </p>
              {/* Investment Pricing Card */}
              <div className="space-y-6 bg-neutral-100 p-8 rounded-2xl text-left">
                 <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-neutral-700 text-xl">
                   <p className="font-medium text-2xl text-neutral-800m b-4">Assets <br /> Managed</p>
                   <p className="font-medium text-2xl text-neutral-800 mb-4">Annual <br /> Fee</p>
                   
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
                 <p className="text-sm text-neutral-600 pt-2">
                   Billed as a percentage of assets under management. The advisory fee is a blended tier based on the schedule above.
                 </p>
               </div>
            </div>
          }
        />

      </div>
    </motion.div>
  );
}

// --- PlanningTopics Component Logic (Now includes Investing topics) ---
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
  const colorPairs = [ // Ensure enough distinct pairs if needed, or reuse
    { bgColorClass: "bg-[#75776B]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#D2D4D1]", textColorClass: "text-neutral-800" },
    { bgColorClass: "bg-[#718087]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#A28E78]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#F2E9E9]", textColorClass: "text-neutral-800" },
    { bgColorClass: "bg-[#382534]", textColorClass: "text-white" },
    // Add more pairs if the merged list is very long and needs more visual variety
  ];

  // Merged Planning and Investing Services Data
  const combinedServicesData = [
    // Planning Services
    { title: "Financial guidance", description: "Comprehensive financial advice tailored to you.", column: 1 },
    { title: "Personalized planning", description: "Developing a custom financial plan.", column: 1 },
    { title: "Net worth & estate oversight", description: "Managing your assets and legacy.", column: 1 },
    { title: "Cash flow & liquidity strategy", description: "Optimizing your income and available funds.", column: 2 },
    { title: "Tax strategy & optimization", description: "Minimizing tax impact on your wealth.", column: 2 },
    { title: "Risk management", description: "Identifying and mitigating financial risks.", column: 2 },
    { title: "Insurance reviews", description: "Ensuring adequate and appropriate coverage.", column: 3 },
    { title: "Estate & wealth transfer planning", description: "Planning for efficient transfer of assets.", column: 3 },
    { title: "3rd party coordination", description: "Working with your other professional advisors.", column: 3 },
    // Investing Services (adjust column numbers as needed for balance)
    { title: "Asset Allocation", description: "Balancing different asset classes in your portfolio.", column: 1 },
    { title: "Diversification", description: "Spreading investments to reduce risk.", column: 1 },
    { title: "Risk Tolerance Assessment", description: "Understanding your comfort level with investment risk.", column: 1 }, // Moved to col 1
    { title: "Portfolio Management", description: "Ongoing management and rebalancing of investments.", column: 2 },
    { title: "Tax-Efficient Investing", description: "Strategies to minimize taxes on investment gains.", column: 2 },
    { title: "Cost-Efficient Investing", description: "Utilizing low-cost index funds and ETFs.", column: 2 }, // Moved to col 2
    { title: "Retirement Accounts", description: "Utilizing ROTH IRAs, Traditional IRAs, etc., for investing.", column: 3 },
    { title: "Behavioral Finance", description: "Understanding psychological influences on investing.", column: 3 },
  ];

  // Re-map with colors
  const combinedTopics: PlanningTopic[] = combinedServicesData.map((item, index) => ({
    ...item,
    ...colorPairs[index % colorPairs.length], 
  }));

  // Re-calculate columns based on the 'column' property in combinedServicesData
  const column1 = combinedTopics.filter(obj => obj.column === 1);
  const column2 = combinedTopics.filter(obj => obj.column === 2);
  const column3 = combinedTopics.filter(obj => obj.column === 3);

  return (
    <motion.div
      className="w-full mx-auto relative py-24 md:py-32 bg-white"
    >
      {/* Updated Heading Section - Change max-w-6xl to max-w-5xl */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <LeftRightSection
          leftContent={
            <h2 className={`text-2xl font-medium text-neutral-900`}>
              Core Services:
            </h2>
          }
          rightContent={
            <p className={`text-2xl text-neutral-600`}>
              Integrated financial planning and investment management to achieve your goals.
            </p>
          }
        />
      </div>

      {/* Card Grid - Change max-w-6xl to max-w-5xl */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-col gap-6 md:gap-8">
            {column1.map((topic, index) => (
              <motion.div
                key={`col1-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <PlanningCard topic={topic} />
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col gap-6 md:gap-8">
            {column2.map((topic, index) => (
              <motion.div
                key={`col2-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <PlanningCard topic={topic} />
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col gap-6 md:gap-8">
            {column3.map((topic, index) => (
              <motion.div
                key={`col3-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <PlanningCard topic={topic} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}


// --- Main Export for the combined Planning & Investing Section --- 
export function PlanningSection() {
  return (
    <section className="relative flex flex-col items-center">
      <PlanningHero />
      <PlanningTopics />
    </section>
  );
} 