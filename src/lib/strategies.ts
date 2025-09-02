export interface Strategy {
  id: string;
  number: string;
  title: string;
  slug: string;
}

export const strategies: Strategy[] = [
  {
    id: "behavioral-coaching",
    number: "01",
    title: "Behavioral Coaching",
    slug: "behavioralcoaching"
  },
  {
    id: "tax-loss-harvesting",
    number: "02",
    title: "Tax-Loss Harvesting",
    slug: "taxlossharvesting"
  },
  {
    id: "asset-location",
    number: "03", 
    title: "Asset Location",
    slug: "assetlocation"
  },
  {
    id: "rebalancing",
    number: "04",
    title: "Portfolio Rebalancing",
    slug: "rebalancing"
  },
  {
    id: "health-savings-accounts",
    number: "05",
    title: "Health Savings Accounts",
    slug: "healthsavingsaccounts"
  },
  {
    id: "roth-conversions",
    number: "06",
    title: "Strategic Roth Conversions",
    slug: "rothconversions"
  },
  {
    id: "social-security",
    number: "07",
    title: "Social Security Optimization",
    slug: "socialsecurity"
  },
  {
    id: "backdoor-roth",
    number: "08",
    title: "Backdoor Roth IRA",
    slug: "backdoorroth"
  },
  {
    id: "estate-planning",
    number: "09",
    title: "Estate Tax Planning",
    slug: "estateplanning"
  },
  {
    id: "cash-flow",
    number: "10",
    title: "Cash Flow Management",
    slug: "cashflow"
  },
  {
    id: "retirement-withdrawal",
    number: "11",
    title: "Retirement Withdrawal Strategy",
    slug: "retirementwithdrawal"
  },
  {
    id: "emergency-fund",
    number: "12",
    title: "Emergency Fund Planning",
    slug: "emergencyfund"
  },
  {
    id: "debt-optimization",
    number: "13",
    title: "Debt Optimization",
    slug: "debtoptimization"
  },
  {
    id: "insurance-review",
    number: "14",
    title: "Insurance Coverage Review",
    slug: "insurancereview"
  },
  {
    id: "equity-compensation",
    number: "15",
    title: "Equity Compensation Planning",
    slug: "equitycompensation"
  },
  {
    id: "mega-backdoor-roth",
    number: "16",
    title: "Mega Backdoor Roth",
    slug: "megabackdoorroth"
  },
  {
    id: "donor-advised-funds",
    number: "17",
    title: "Donor-Advised Funds",
    slug: "donoradvisedfunds"
  },
  {
    id: "qualified-charitable-distributions",
    number: "18",
    title: "Qualified Charitable Distributions",
    slug: "qualifiedcharitabledistributions"
  },
  {
    id: "municipal-bonds",
    number: "19",
    title: "Municipal Bonds",
    slug: "municipalbonds"
  },
  {
    id: "tax-efficient-funds",
    number: "20",
    title: "Tax-Efficient Fund Selection",
    slug: "taxefficientfunds"
  }
];
