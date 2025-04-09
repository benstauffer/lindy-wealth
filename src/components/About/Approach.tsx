import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Added from Pricing.tsx
const investmentPricingTiers = [
  { range: "$0 - $1,000,000", fee: "1.00%" },
  { range: "$1,000,000 - $5,000,000", fee: "0.75%" },
  { range: "$5,000,000 - $10,000,000", fee: "0.50%" },
  { range: "$10,000,000 - $25,000,000", fee: "0.40%" },
  { range: "$25,000,000+", fee: "0.30%" },
];

export function Approach() {
  // Keep arrays trimmed to 5 items
  const investmentPoints = [
    "Globally diversified portfolios",
    "Low-cost funds",
    "Tax-efficient investing",
  ];

  const planningPoints = [
    "Comprehensive financial planning",
    "Tax, insurance, and estate planning strategies",
    "Quarterbacking your financial life",
  ];

  return (
    <div className="mt-8 md:mt-0">
      <h2 id="approach" className="text-2xl md:text-2xl text-neutral-700 font-['Georgia'] mb-6 border-b border-neutral-200 pb-2 mt-20">Services & Pricing</h2>
      <p className="text-base leading-relaxed mb-8 text-neutral-700">
        I offer two core services: investment management and financial planning. 
        Each designed to give you clarity and confidence in your financial future.
      </p>

      {/* --- Grid for Services & Simplified Pricing --- */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 items-start">

        {/* Investment Management Column */}
        <div>
          <h3 className="text-lg text-neutral-700 mb-4">Investment Management</h3>
          <ul className="space-y-2 list-disc pl-5 text-sm text-neutral-500">
            {investmentPoints.map((point, i) => (
              <li key={`invest-${i}`}>{point}</li>
            ))}
            <li className="text-neutral-700">
              <span className="font-medium">Pricing:</span> Annual fee based on assets under management. (Fees are blended across tiers)
            </li>
          </ul>
        </div>

        {/* Financial Planning Column */}
        <div>
          <h3 className="text-lg text-neutral-700 mb-4">Financial Planning</h3>
          <ul className="space-y-2 list-disc pl-5 text-sm text-neutral-500">
            {planningPoints.map((point, i) => (
              <li key={`plan-${i}`}>{point}</li>
            ))}
            <li className="text-neutral-700">
              <span className="font-medium">Pricing:</span> Approx. $5,000 - $20,000 annually. (Based on complexity)
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
}
