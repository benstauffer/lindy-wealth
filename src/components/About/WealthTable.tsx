import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function WealthTable() {
  const wealthPairs = [
    {
      true: "Worriless sleeping",
      financial: "Strategic asset allocation"
    },
    {
      true: "Clear conscience",
      financial: "Tax-efficient investing"
    },
    {
      true: "Reciprocal gratitude",
      financial: "Diversified income streams"
    },
    {
      true: "Frequent laughs with friends",
      financial: "Risk-managed portfolios"
    },
    {
      true: "Time for gravel bicycling",
      financial: "Automated savings systems"
    },
    {
      true: "Time with loved ones",
      financial: "Optimized retirement accounts"
    }
  ];

  return (
    <div className="my-12">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              True Wealth
              <div className="text-sm font-normal text-neutral-500">(What makes life rich)</div>
            </TableHead>
            <TableHead>
              Financial Wealth
              <div className="text-sm font-normal text-neutral-500">(What funds a rich life)</div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {wealthPairs.map((pair, i) => (
            <TableRow key={i}>
              <TableCell>{pair.true}</TableCell>
              <TableCell>{pair.financial}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
