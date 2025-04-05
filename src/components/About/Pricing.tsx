import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const investmentPricingTiers = [
  { range: "$0 - $1,000,000", fee: "1.00%" },
  { range: "$1,000,000 - $5,000,000", fee: "0.75%" },
  { range: "$5,000,000 - $10,000,000", fee: "0.50%" },
  { range: "$10,000,000 - $25,000,000", fee: "0.40%" },
  { range: "$25,000,000+", fee: "0.30%" },
];

export function Pricing() {
  return (
    <div className="space-y-12">
      <div>
        <h2 id="pricing" className="text-2xl font-bold mb-6 text-[#FB651F]">Pricing</h2>
        <p className="text-base">
          My pricing is straightforward and transparent. I believe in aligning our interests 
          and ensuring you understand exactly what you're paying for.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Investment Management</h3>
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
        <h3 className="text-xl font-semibold mb-4">Financial Planning</h3>
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
        <h3 className="text-base mb-4">Additional Information</h3>
        <ul className="space-y-1 list-disc pl-5">
          <li>All fees are transparent with no hidden costs</li>
          <li>No commissions or product sales</li>
          <li>Detailed quarterly reporting</li>
          <li>Fee includes all services, tools, and resources</li>
        </ul>
      </div>
    </div>
  );
}
