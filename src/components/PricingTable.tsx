import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";

export function PricingTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center text-xs">Assets Under Management</TableHead>
          <TableHead className="text-center text-xs">Annual Advisory Fee</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-center text-xs">$0 - $1,000,000</TableCell>
          <TableCell className="text-center text-xs">1.00%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-center text-xs">$1,000,001 - $5,000,000</TableCell>
          <TableCell className="text-center text-xs">0.75%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-center text-xs">$5,000,001 - $10,000,000</TableCell>
          <TableCell className="text-center text-xs">0.50%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-center text-xs">$10,000,001 - $25,000,000</TableCell>
          <TableCell className="text-center text-xs">0.40%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-center text-xs">Above $25,000,000</TableCell>
          <TableCell className="text-center text-xs">0.30%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
