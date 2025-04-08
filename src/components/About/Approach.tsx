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
  const investmentPoints = [
    "Globally diversified portfolios using low-cost funds",
    "Systematic rebalancing to maintain target allocations",
    "Tax-efficient fund placement and harvesting",
    "No market timing or stock picking",
    "No chasing trends or hot sectors",
    "Research-backed strategies for long-term returns"
  ];

  const planningPoints = [
    "Comprehensive tax planning and optimization",
    "Risk management and insurance analysis",
    "Retirement planning and savings strategies",
    "Estate planning and wealth transfer",
    "Values-based financial decision making",
    "Regular plan updates and adjustments"
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 id="approach" className="text-2xl font-bold mb-6 uppercase">Services & Pricing</h2>
        <p className="text-base">
          I offer two core services: investment management and financial planning. 
          Each is grounded in evidence-based practices and designed to give you 
          clarity and confidence in your financial future.
        </p>
      </div>

      <div className="">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Investment Management</TableHead>
              <TableHead>Financial Planning</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {investmentPoints.map((investment, i) => (
              <TableRow key={i}>
                <TableCell>{investment}</TableCell>
                <TableCell>{planningPoints[i]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div>
        <h3 className="text-base mb-4">Core Philosophy</h3>
        <ul className="space-y-1 list-disc pl-5">
          <li>Focus on what you can control</li>
          <li>Keep strategies simple and transparent</li>
          <li>Act as a fiduciary, always in your best interest</li>
          <li>Provide clear, actionable guidance</li>
          <li>Build for the long term</li>
        </ul>
      </div>

      {/* Added Pricing Sections from Pricing.tsx */}
      <div>
        <h3 className="text-xl font-semibold mb-4 mt-12">Investment Management Pricing</h3>
        <p className="mb-4">Annual fee based on assets under management:</p>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account Value</TableHead>
                <TableHead>Annual Fee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {investmentPricingTiers.map((tier, i) => (
                <TableRow key={i}>
                  <TableCell>{tier.range}</TableCell>
                  <TableCell>{tier.fee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="mt-2 text-sm text-neutral-500">Fees are blended across tiers and billed quarterly</p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 mt-12">Financial Planning Pricing</h3>
        <div className="space-y-4">
          <p>
            Annual fee: $5,000 - $20,000
          </p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Fee based on complexity of your financial situation</li>
            <li>Includes comprehensive planning across all areas</li>
            <li>Regular updates and adjustments throughout the year</li>
            <li>Unlimited email support and scheduled check-ins</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-base mb-4 mt-12">Additional Information</h3>
        <ul className="space-y-1 list-disc pl-5">
          <li>All fees are transparent with no hidden costs</li>
          <li>No commissions or product sales</li>
          <li>Detailed quarterly reporting</li>
          <li>Fee includes all services, tools, and resources</li>
        </ul>
      </div>
      {/* End Added Pricing Sections */}

    </div>
  );
}
