'use client'

import React, { useState, useEffect } from 'react'
import { FiArrowRight, FiBriefcase, FiDollarSign, FiShield, FiTrendingUp, FiFileText } from "react-icons/fi"
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { LeftRightSection } from "../ui/LeftRightSection";
// Removed Marquee import as it wasn't used
// import { Marquee } from "../ui/infinite";

// --- Consolidated Components from ./Education directory ---

// --- EducationHero Component Logic ---
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

function EducationHero() {
  const [email, setEmail] = useState('');

  const overviewContent = {
    paragraphs: [
      "The Lindy Wealth Blueprint is a comprehensive 30-day program designed to transform your financial foundation and set you on the path to long-term wealth building.",
      "We hope you'll leave with a clear financial roadmap, momentum toward your goals, and confidence in your financial future.",
    ],
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email submitted:", email);
    alert(`Thank you! We'll notify ${email} when access is ready.`);
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
              <div className="mb-4">

              </div>
              <motion.div variants={heroLineVariants}>
                The Lindy <br /> Wealth Blueprint
              </motion.div>
              <motion.div
                variants={heroLineVariants}
                className={`text-xl sm:text-2xl mt-4 text-neutral-600`}
              >
                A 30-day guided sprint that gets <br /> your financial house in
                order.
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          <Link 
            href="mailto:ben@lindywealth.com?subject=Blueprint Access Request"
            className="inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-medium transition-colors bg-neutral-900 text-white hover:bg-neutral-800"
          >
            Request Access
          </Link>
        </motion.div>
      </div>
        
      <div className="mt-32 flex flex-col items-center w-full mx-auto space-y-12 px-6">
        <LeftRightSection 
          leftContent={
            <h2 className={`text-2xl font-medium text-neutral-900`}>
              TLDR
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

        <LeftRightSection 
          leftContent={
            <h2 className={`text-2xl font-medium text-neutral-900`}>
              Pricing:
            </h2>
          }
          rightContent={
            <p className={`text-2xl text-neutral-600`}>
              $250
            </p>
          }
        />

        <div className="w-full mx-auto relative">
          <LeftRightSection 
            leftContent={
              <h2 className={`text-2xl font-medium text-neutral-900`}>
                Next Cohort:
                <br />
                Q3 2025
              </h2>
            }
            rightContent={
              <>
                <p className={`text-3xl suisse-font text-neutral-600`}>
                  Starting July 2025
                </p>
                <div className={`bg-zinc-200 text-black px-6 py-3 rounded-md  inline-block mt-6 transform -rotate-3`}>
                  <span className="text-base tracking-wider uppercase">
                    Now Accepting
                  </span>
                </div>
              </>
            }
          />
        </div>
      </div>
    </motion.div>
  );
}

// --- EducationLearning Component Logic ---
interface LearningObjective {
  title: string;
  description: string;
  bgColorClass: string;
  textColorClass: string;
  column: number;
}

interface LearningCardProps {
  objective: LearningObjective;
}

function LearningCard({ objective }: LearningCardProps) {
  return (
    <motion.div 
      className={`rounded-2xl overflow-hidden flex flex-col h-full ${objective.bgColorClass} p-8 space-y-4`}
      whileHover={{ scale: 1.03, transition: { type: "spring", stiffness: 300 } }}
    >
      <h3 className={`text-3xl ${objective.textColorClass} flex-grow`}>{objective.title}</h3>
      
      <div className="mt-auto"> 
        <p className={`text-base ${objective.textColorClass === 'text-white' ? 'text-white/80' : 'text-neutral-700'}`}> 
          {objective.description}
        </p>
      </div>
    </motion.div>
  );
}

function EducationLearning() {
  const colorPairs = [
    { bgColorClass: "bg-[#75776B]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#D2D4D1]", textColorClass: "text-neutral-800" },
    { bgColorClass: "bg-[#718087]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#A28E78]", textColorClass: "text-white" },
    { bgColorClass: "bg-[#F2E9E9]", textColorClass: "text-neutral-800" },
    { bgColorClass: "bg-[#382534]", textColorClass: "text-white" },
  ];

  // Assign colors based on index modulo 6 for a varied sequence
  const learningObjectivesData = [
    // Titles and column numbers
    { title: "Business Planning", description: "Essential strategies for planning your business.", column: 1 },
    { title: "Tax Basics", description: "Understanding the fundamentals of taxation.", column: 1 },
    { title: "The Tax Calendar", description: "Key dates and deadlines for tax compliance.", column: 1 },
    { title: "Tax Planning", description: "Proactive strategies to manage tax liabilities.", column: 1 },
    { title: "Tax-Advantaged Accounts", description: "Leveraging accounts for tax benefits.", column: 1 },
    { title: "Optimized Investing", description: "Strategies for efficient investment growth.", column: 2 },
    { title: "Charitable Gifting", description: "Tax-efficient ways to support causes you care about.", column: 2 },
    { title: "Diversification", description: "Spreading investments to manage risk.", column: 2 },
    { title: "Risk Management", description: "Identifying and mitigating financial risks.", column: 2 },
    { title: "Estate Planning", description: "Planning for the future distribution of assets.", column: 2 },
    { title: "Intro to Wills & Trusts", description: "Understanding essential estate planning documents.", column: 3 },
    { title: "S-Corp Strategies", description: "Utilizing S-Corp structures for business benefits.", column: 3 },
    { title: "Health Insurance", description: "Navigating health insurance options and choices.", column: 3 },
    { title: "Life Insurance", description: "Understanding the role and types of life insurance.", column: 3 },
    { title: "Property & Casualty Insurance", description: "Protecting your assets with the right insurance.", column: 3 },
  ];

  const learningObjectives: LearningObjective[] = learningObjectivesData.map((item, index) => ({
    ...item,
    ...colorPairs[index % colorPairs.length], // Assign color pair based on index modulo 6
  }));

  const column1 = learningObjectives.filter(obj => obj.column === 1);
  const column2 = learningObjectives.filter(obj => obj.column === 2);
  const column3 = learningObjectives.filter(obj => obj.column === 3);

  return (
    <motion.div
      className="w-full mx-auto relative py-24 md:py-32 bg-white"
    >
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <LeftRightSection
          leftContent={
            <h2 className={`text-2xl font-medium text-neutral-900`}>
              What you'll learn:
            </h2>
          }
          rightContent={
            <p className={`text-2xl text-neutral-600`}>
              Taxes, Investments, Insurance, Estate Planning, and more
            </p>
          }
        />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="flex flex-col gap-6 md:gap-8">
            {column1.map((objective, index) => (
              <motion.div
                key={`col1-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <LearningCard objective={objective} />
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col gap-6 md:gap-8">
            {column2.map((objective, index) => (
              <motion.div
                key={`col2-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <LearningCard objective={objective} />
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col gap-6 md:gap-8">
            {column3.map((objective, index) => (
              <motion.div
                key={`col3-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <LearningCard objective={objective} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}


// --- Main Export for Education Sections --- 
// This component now only imports and arranges the sections.
export function EducationSection() {
  return (
    <section className="relative flex flex-col items-center">
      {/* Render components defined above */}
      <EducationHero />
      <EducationLearning />
    </section>
  );
} 