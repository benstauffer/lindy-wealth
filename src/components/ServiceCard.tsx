'use client'

type ServiceData = {
  name: string;
  color: string;
  description: string;
  items: string[];
  pricing?: {
    type: 'table' | 'text';
    content: any;
  };
}

type PricingTier = {
  range: string;
  fee: string;
}

const investmentPricingTiers: PricingTier[] = [
  { range: "$0 - $1,000,000", fee: "1.00%" },
  { range: "$1,000,000 - $5,000,000", fee: "0.75%" },
  { range: "$5,000,000 - $10,000,000", fee: "0.50%" },
  { range: "$10,000,000 - $25,000,000", fee: "0.40%" },
  { range: "$25,000,000+", fee: "0.30%" },
]

const servicesData: ServiceData[] = [
  {
    name: "Plan First",
    color: "#f9fafb",
    description: "We discuss your goals, values, and vision, and create a financial plan to bring it all to life with clarity and peace of mind.",
    items: [
      "Financial, tax, estate, & insurance planning",
      "Retirement planning & analysis",
      "Cash flow & budgeting"
    ],
    pricing: {
      type: 'text',
      content: "$5,000 - $20,000 annually based on complexity"
    }
  },
  {
    name: "Invest Next",
    color: "#f9fafb",
    description: "We work together to build an investment strategy that aligns with your financial plan and focuses on what we can control: tax efficiency, fees, and diversification.",
    items: [
      "Tax & cost efficient",
      "Global diversification",
      "Tax-loss harvesting"
    ],
    pricing: {
      type: 'table',
      content: investmentPricingTiers
    }
  },
  {
    name: "Ongoing Management",
    color: "#f9fafb",
    description: "We execute the strategy & continuously adapt as your life evolves. Day to day, you can have peace of mind knowing your finances are aligned with your goals and financial plan.",
    items: [
      "Tax & cost efficient",
      "Global diversification",
      "Tax-loss harvesting"
    ],
    pricing: {
      type: 'table',
      content: investmentPricingTiers
    }
  },
]

export function ServicesSection() {
  return (
    <div className="flex flex-col">
      
     
      <div className="flex flex-col space-y-4">
        {servicesData.map((service: ServiceData, index: number) => (
          <div 
            key={index}
            className="group relative rounded-2xl p-6 transition-all duration-300 border border-neutral-100 shadow-[0_0_30px_rgba(0,0,0,0.08)]"
          >
            <div className="flex h-full items-center space-x-4">
              <div className="flex-shrink-0">
                <span className="deutsche-font text-6xl text-neutral-600 px-2 font-normal leading-none flex-shrink-0">
                  {index + 1}
                </span>
              </div>
              
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-medium text-neutral-700 font-['Georgia']">
                  {service.name}
                </h3>
                
                <p className="text-base text-neutral-700 font-['Georgia']">
                  {service.description}
                </p>

                {/* Pricing Section */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
