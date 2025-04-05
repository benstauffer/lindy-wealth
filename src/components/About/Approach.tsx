import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <h2 id="approach" className="text-2xl font-bold mb-6 text-[#FB651F]">My Approach</h2>
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
    </div>
  );
}
