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
    name: "Financial Planning",
    color: "#f9fafb",
    description: "Comprehensive financial planning that addresses all aspects of your financial life",
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
    name: "Investment Management",
    color: "#f9fafb",
    description: "Smart and efficient portfolios tailored to your risk tolerance and financial goals focusing on what we can control: taxes, fees, and diversification.",
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
    <div className="flex flex-col space-y-2 bg-neutral-50 rounded-3xl p-2 shadow-[0_0_30px_rgba(0,0,0,0.08)]">
      <div className="px-6 pt-2 pb-2 text-sm font-medium text-neutral-500">
        Services
      </div>
      
      <div className="flex flex-col space-y-2">
        {servicesData.map((service: ServiceData, index: number) => (
          <div 
            key={index}
            className="group relative bg-white rounded-3xl p-6 transition-all duration-300"
          >
            <div className="flex flex-col h-full space-y-4">
              <div className="flex items-center space-x-4">
                <h3 className="text-lg font-medium text-neutral-600">
                  {service.name}
                </h3>
              </div>
              
              <p className="text-base text-neutral-600">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm text-neutral-600">
                    <span className="w-1 h-1 bg-neutral-400 rounded-full"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing Section */}
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <h4 className="text-sm font-medium text-neutral-500 mb-4">Pricing</h4>
                {service.pricing?.type === 'table' ? (
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-2 text-sm">
                      <div className="font-medium text-neutral-500 pb-2 pr-4 border-r border-b border-neutral-200">Account Value</div>
                      <div className="font-medium text-neutral-500 pb-2 pl-4 border-b border-neutral-200">Annual Advisory Fee</div>
                      {service.pricing.content.map((tier: PricingTier, i: number) => (
                        <div key={i} className="contents">
                          <div className="py-2 pr-4 text-neutral-600 border-b border-r border-neutral-200">{tier.range}</div>
                          <div className="py-2 pl-4 text-neutral-600 border-b border-neutral-200">{tier.fee}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-neutral-500 mt-2">Blended tier AUM</p>
                  </div>
                ) : (
                  <p className="text-sm text-neutral-600">{service.pricing?.content}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
