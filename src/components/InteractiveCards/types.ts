export interface FinancialCardData {
  id: string
  title: string
  description: string
  detailedDescription: string
  color: string
  textColor: string
  href: string
  features: string[]
  highlights: string[]
  cta: string
  rotation: number
}

export const financialCardData: FinancialCardData[] = [
  {
    id: "about",
    title: "About",
    description: "Learn about our approach to financial planning",
    detailedDescription: "We believe in a comprehensive, client-centered approach to financial planning. Our philosophy centers on understanding your unique goals, values, and circumstances to create a personalized roadmap for your financial future.",
    color: "bg-[#]",
    textColor: "text-[#111111]",
    href: "#about",
    features: ["Holistic Planning", "Value-Based Approach", "Long-term Focus", "Client Education"],
    highlights: ["25+ Years Experience", "Fiduciary Standard", "Fee-Only Advisory"],
    cta: "Learn Our Philosophy",
    rotation: -4
  },
  {
    id: "process",
    title: "Process",
    description: "Discover our step-by-step planning process",
    detailedDescription: "Our proven 6-step process ensures that every aspect of your financial life is carefully considered and integrated into a cohesive plan that evolves with your changing needs.",
    color: "bg-[#DBE6D9]",
    textColor: "text-[#111111]",
    href: "#process",
    features: ["Discovery Meeting", "Analysis & Strategy", "Plan Creation", "Implementation"],
    highlights: ["Personalized Approach", "Regular Reviews", "Adaptive Planning"],
    cta: "See Our Process",
    rotation: -2
  },
  {
    id: "pricing",
    title: "Services & Pricing",
    description: "Comprehensive financial services with transparent pricing",
    detailedDescription: "From investment management to retirement planning, we offer a full suite of financial services with complete transparency on our fees. No hidden costs, just clear value for comprehensive financial planning.",
    color: "bg-[#DBE6D9]",
    textColor: "text-[#111111]",
    href: "#pricing", 
    features: ["Investment Management", "Retirement Planning", "Tax Strategy", "Estate Planning", "Transparent Fees", "Value-Based Pricing"],
    highlights: ["Comprehensive Services", "Fee-Only Structure", "Clear Communication", "Fair Pricing"],
    cta: "View Services & Pricing",
    rotation: 3
  },
  {
    id: "faq",
    title: "FAQ",
    description: "Find answers to common questions",
    detailedDescription: "Get answers to frequently asked questions about our services, process, and approach to financial planning.",
    color: "bg-[#DBE6D9]",
    textColor: "text-[#111111]",
    href: "#faq",
    features: ["Common Questions", "Quick Answers", "Detailed Explanations", "Expert Insights"],
    highlights: ["Instant Access", "Comprehensive Coverage", "Updated Regularly"],
    cta: "Browse Questions",
    rotation: 4
  }
]
