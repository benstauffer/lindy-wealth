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
          <TableHead className="text-center">Assets Under Management</TableHead>
          <TableHead className="text-center">Annual Advisory Fee</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="text-center">$0 - $1,000,000</TableCell>
          <TableCell className="text-center">1.00%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-center">$1,000,001 - $5,000,000</TableCell>
          <TableCell className="text-center">0.75%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-center">$5,000,001 - $10,000,000</TableCell>
          <TableCell className="text-center">0.50%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-center">$10,000,001 - $25,000,000</TableCell>
          <TableCell className="text-center">0.40%</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="text-center">Above $25,000,000</TableCell>
          <TableCell className="text-center">0.30%</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
