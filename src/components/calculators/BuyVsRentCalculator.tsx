'use client';

import React, { useState, useEffect } from 'react';

// --- Helper Functions ---
function calculateMonthlyMortgage(principal: number, annualRatePercent: number, termYears: number): number {
  if (annualRatePercent <= 0) return principal / (termYears * 12); // Handle zero interest rate
  const monthlyRate = annualRatePercent / 100 / 12;
  const numberOfPayments = termYears * 12;
  // Handle cases where numberOfPayments is 0 or less, or rate is very low leading to potential issues
  if (numberOfPayments <= 0) return 0;
  if (monthlyRate === 0) return principal / numberOfPayments; // Simplified for zero rate

  const numerator = monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
  const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;
  // Handle potential division by zero if denominator is extremely small or zero
  if (denominator === 0) return principal / numberOfPayments; // Fallback or handle as error
  return principal * (numerator / denominator);
}

function calculateFutureValue(presentValue: number, annualRatePercent: number, years: number): number {
  const rate = annualRatePercent / 100;
  return presentValue * Math.pow(1 + rate, years);
}

// Calculates the Future Value of an initial amount plus a stream of annual contributions invested at a given rate.
// Contributions are assumed to be made at the end of each year.
function calculateFutureValueStream(initialValue: number, annualContributions: number[], annualRatePercent: number, years: number): number {
    const rate = annualRatePercent / 100;
    let futureValue = initialValue * Math.pow(1 + rate, years); // FV of initial amount

    for (let i = 0; i < years; i++) {
        if (annualContributions[i] !== undefined) { // Check if contribution exists for the year
             // FV of contribution made at the end of year i, compounded for remaining years
            futureValue += annualContributions[i] * Math.pow(1 + rate, years - (i + 1));
        }
    }
    return futureValue;
}

function calculateTotalOpportunityCost(initialInvestment: number, annualContributions: number[], annualReturnPercent: number, years: number): number {
    const rate = annualReturnPercent / 100;
    let totalFutureValue = calculateFutureValue(initialInvestment, annualReturnPercent, years);

    for (let i = 0; i < years; i++) {
        if (annualContributions[i]) {
             // Calculate FV of each annual contribution made at the *end* of the year
            totalFutureValue += annualContributions[i] * Math.pow(1 + rate, years - (i + 1));
        }
    }
    // Opportunity cost is the gain above the principal amounts
    const totalPrincipal = initialInvestment + annualContributions.reduce((a, b) => a + b, 0);
    // return totalFutureValue - totalPrincipal;
    // NYT seems to include the principal in the opportunity cost figure reported, representing the total value forgone
    return totalFutureValue;
}

export function BuyVsRentCalculator() {
  // --- State for Inputs ---

  // The Basics
  const [homePrice, setHomePrice] = useState<number>(500000);
  const [monthlyRent, setMonthlyRent] = useState<number>(2500);
  const [stayDurationYears, setStayDurationYears] = useState<number>(10);

  // Mortgage Details
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRatePercent, setInterestRatePercent] = useState<number>(6.5);
  const loanTermYears = 30; // Assuming 30-year fixed

  // Advanced Options - Future Projections
  const [homeAppreciationRatePercent, setHomeAppreciationRatePercent] = useState<number>(4);
  const [rentInflationRatePercent, setRentInflationRatePercent] = useState<number>(3);
  const [investmentReturnRatePercent, setInvestmentReturnRatePercent] = useState<number>(7);

  // Advanced Options - Taxes
  const [propertyTaxRatePercent, setPropertyTaxRatePercent] = useState<number>(1.2);
  const [marginalTaxRatePercent, setMarginalTaxRatePercent] = useState<number>(24);
  const [taxFilingStatus, setTaxFilingStatus] = useState<'individual' | 'joint'>('joint');
  const [assumeTaxCutsExpire, setAssumeTaxCutsExpire] = useState<boolean>(true);

  // Advanced Options - Closing Costs
  const [buyClosingCostsPercent, setBuyClosingCostsPercent] = useState<number>(3);
  const [sellClosingCostsPercent, setSellClosingCostsPercent] = useState<number>(6); // Includes broker commission

  // Advanced Options - Maintenance & Fees
  const [maintenancePercent, setMaintenancePercent] = useState<number>(1);
  const [homeInsurancePercent, setHomeInsurancePercent] = useState<number>(0.5);
  const [hoaFeesMonthly, setHoaFeesMonthly] = useState<number>(0);

  // Advanced Options - Renting Costs
  const [securityDepositMonths, setSecurityDepositMonths] = useState<number>(1);
  const [rentersInsuranceMonthly, setRentersInsuranceMonthly] = useState<number>(15);
  // Broker fee usually one-time, harder to model simply here - often negligible in long run

  // --- State for Results ---
  const [buyInitialCosts, setBuyInitialCosts] = useState<number | null>(null);
  const [buyRecurringCosts, setBuyRecurringCosts] = useState<number | null>(null);
  const [buyOpportunityCosts, setBuyOpportunityCosts] = useState<number | null>(null);
  const [buyNetProceeds, setBuyNetProceeds] = useState<number | null>(null);
  const [buyTotal, setBuyTotal] = useState<number | null>(null);

  const [rentInitialCosts, setRentInitialCosts] = useState<number | null>(null);
  const [rentRecurringCosts, setRentRecurringCosts] = useState<number | null>(null);
  const [rentOpportunityCosts, setRentOpportunityCosts] = useState<number | null>(null);
  const [rentNetProceeds, setRentNetProceeds] = useState<number | null>(null);
  const [rentTotal, setRentTotal] = useState<number | null>(null);

  const [savingsDifference, setSavingsDifference] = useState<number | null>(null);
  const [winner, setWinner] = useState<'buy' | 'rent' | null>(null);

  // --- Calculation Logic ---
  useEffect(() => {
    try {
        // --- Input Conversions ---
        const dpRate = downPaymentPercent / 100;
        const ir = interestRatePercent / 100;
        const homeApprRate = homeAppreciationRatePercent / 100;
        const rentInflRate = rentInflationRatePercent / 100;
        const investRate = investmentReturnRatePercent / 100;
        const propTaxRate = propertyTaxRatePercent / 100;
        const maintRate = maintenancePercent / 100;
        const insurRate = homeInsurancePercent / 100;
        const buyCloseRate = buyClosingCostsPercent / 100;
        const sellCloseRate = sellClosingCostsPercent / 100;
        const marginalTaxRate = marginalTaxRatePercent / 100;

        // --- Constants ---
        const SALT_CAP = 10000;
        const standardDeduction = {
            individual: assumeTaxCutsExpire ? 14600 : 13850, // Example 2024 / 2023 values, adjust as needed
            joint: assumeTaxCutsExpire ? 29200 : 27700,
        };
        const capitalGainsExclusion = {
            individual: 250000,
            joint: 500000,
        };
        // Assume long term capital gains tax rate (adjust if needed)
        const CAPITAL_GAINS_TAX_RATE = 0.15;

        // --- Initial Calculations ---
        const downPaymentAmount = homePrice * dpRate;
        const loanAmount = homePrice - downPaymentAmount;
        const initialBuyClosingCosts = homePrice * buyCloseRate;
        const totalInitialBuyOutlay = downPaymentAmount + initialBuyClosingCosts;
        const initialSecurityDeposit = monthlyRent * securityDepositMonths;
        // Assuming no broker fee for renting for simplicity as per NYT note
        const totalInitialRentOutlay = initialSecurityDeposit;

        setBuyInitialCosts(totalInitialBuyOutlay);
        setRentInitialCosts(totalInitialRentOutlay);

        const monthlyMortgagePayment = calculateMonthlyMortgage(loanAmount, interestRatePercent, loanTermYears);
        let currentLoanBalance = loanAmount;
        let currentHomeValue = homePrice;
        let currentMonthlyRent = monthlyRent;

        let cumulativeBuyRecurring = 0;
        let cumulativeRentRecurring = 0;
        let totalInterestPaid = 0;
        let totalPropertyTaxPaid = 0;

        let annualBuyCostsNetArray: number[] = [];
        let annualRentCostsNetArray: number[] = [];

        // --- Year-by-Year Simulation ---
        for (let year = 1; year <= stayDurationYears; year++) {
            // --- Buy Side Annual Costs ---
            let annualInterestPaid = 0;
            let annualPrincipalPaid = 0;
            for (let month = 1; month <= 12; month++) {
                const interestForMonth = currentLoanBalance * (ir / 12);
                const principalForMonth = monthlyMortgagePayment - interestForMonth;
                annualInterestPaid += interestForMonth;
                annualPrincipalPaid += principalForMonth;
                currentLoanBalance -= principalForMonth;
            }
            totalInterestPaid += annualInterestPaid;

            const annualPropertyTax = currentHomeValue * propTaxRate;
            totalPropertyTaxPaid += annualPropertyTax;
            const annualMaintenance = currentHomeValue * maintRate;
            const annualInsurance = currentHomeValue * insurRate;
            const annualHoa = hoaFeesMonthly * 12;

            const totalAnnualCashExpenses = (monthlyMortgagePayment * 12) + annualPropertyTax + annualMaintenance + annualInsurance + annualHoa;

            // Tax Savings Calculation
            const deductiblePropertyTax = Math.min(annualPropertyTax, SALT_CAP);
            const potentialItemizedDeductions = annualInterestPaid + deductiblePropertyTax;
            const currentStandardDeduction = standardDeduction[taxFilingStatus];
            const taxSavings = Math.max(0, potentialItemizedDeductions - currentStandardDeduction) * marginalTaxRate;

            const netAnnualBuyCost = totalAnnualCashExpenses - taxSavings;
            cumulativeBuyRecurring += netAnnualBuyCost;
            annualBuyCostsNetArray.push(netAnnualBuyCost); // Store net cost for OC calc

            // --- Rent Side Annual Costs ---
            const annualRent = currentMonthlyRent * 12;
            const annualRentersInsurance = rentersInsuranceMonthly * 12;
            const netAnnualRentCost = annualRent + annualRentersInsurance;
            cumulativeRentRecurring += netAnnualRentCost;
            annualRentCostsNetArray.push(netAnnualRentCost); // Store net cost for OC calc

            // --- Update values for next year ---
            currentHomeValue = calculateFutureValue(currentHomeValue, homeAppreciationRatePercent, 1);
            currentMonthlyRent = calculateFutureValue(currentMonthlyRent, rentInflationRatePercent, 1);
        }

        setBuyRecurringCosts(cumulativeBuyRecurring);
        setRentRecurringCosts(cumulativeRentRecurring);

        // --- Opportunity Cost Calculation (Revised: FV of all outlays) ---
        // Calculate the future value of investing the initial and recurring costs instead.
        const finalBuyOpportunityCost = calculateFutureValueStream(totalInitialBuyOutlay, annualBuyCostsNetArray, investmentReturnRatePercent, stayDurationYears);
        const finalRentOpportunityCost = calculateFutureValueStream(totalInitialRentOutlay, annualRentCostsNetArray, investmentReturnRatePercent, stayDurationYears);

        setBuyOpportunityCosts(finalBuyOpportunityCost);
        setRentOpportunityCosts(finalRentOpportunityCost);

        // --- Net Proceeds Calculation ---
        // Buy Side
        const finalHomeValue = calculateFutureValue(homePrice, homeAppreciationRatePercent, stayDurationYears);
        const finalSellingCosts = finalHomeValue * sellCloseRate;
        // Need remaining loan balance after X years
        let remainingBalanceAtEnd = loanAmount;
        for (let i = 0; i < stayDurationYears * 12; i++) {
            const interest = remainingBalanceAtEnd * (ir / 12);
            const principal = monthlyMortgagePayment - interest;
            remainingBalanceAtEnd -= principal;
        }
        remainingBalanceAtEnd = Math.max(0, remainingBalanceAtEnd); // Cannot be negative

        const profit = finalHomeValue - homePrice; // Simplified: Use purchase price as basis
        const taxableGain = Math.max(0, profit - capitalGainsExclusion[taxFilingStatus]);
        const capitalGainsTax = taxableGain * CAPITAL_GAINS_TAX_RATE;

        const finalBuyNetProceeds = finalHomeValue - finalSellingCosts - remainingBalanceAtEnd - capitalGainsTax;
        setBuyNetProceeds(finalBuyNetProceeds);

        // Rent Side
        const finalRentNetProceeds = initialSecurityDeposit; // Return of deposit
        setRentNetProceeds(finalRentNetProceeds);

        // --- Final Totals ---
        const finalBuyTotal = totalInitialBuyOutlay + cumulativeBuyRecurring + finalBuyOpportunityCost - finalBuyNetProceeds;
        const finalRentTotal = totalInitialRentOutlay + cumulativeRentRecurring + finalRentOpportunityCost - finalRentNetProceeds;

        setBuyTotal(finalBuyTotal);
        setRentTotal(finalRentTotal);

        const diff = finalBuyTotal - finalRentTotal;
        setSavingsDifference(Math.abs(diff));
        setWinner(diff > 0 ? 'rent' : 'buy');

    } catch (error) {
        console.error("Calculation Error:", error);
        // Optionally reset results or show an error state
        setBuyTotal(null);
        setRentTotal(null);
        setWinner(null);
        setSavingsDifference(null);
    }

  }, [
    homePrice, monthlyRent, stayDurationYears, downPaymentPercent,
    interestRatePercent, homeAppreciationRatePercent, rentInflationRatePercent,
    investmentReturnRatePercent, propertyTaxRatePercent, marginalTaxRatePercent,
    taxFilingStatus, assumeTaxCutsExpire, buyClosingCostsPercent,
    sellClosingCostsPercent, maintenancePercent, homeInsurancePercent,
    hoaFeesMonthly, securityDepositMonths, rentersInsuranceMonthly // All inputs that affect calculation
  ]);

  const formatCurrency = (value: number | null) => {
    if (value === null) return '--';
    // Use signDisplay:'never' to handle negative net proceeds cleanly in the breakdown
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, signDisplay:'never' });
  };

  return (
    <div className="p-4 md:p-6 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Is It Better to Rent or Buy?</h1>
      <p className="text-center text-gray-600 mb-6">A Financial Calculator.</p>

      {/* --- Results Display --- */}
      {winner && savingsDifference !== null && buyTotal !== null && rentTotal !== null && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            {winner === 'rent' ? 'Renting' : 'Buying'} saves you {formatCurrency(savingsDifference)}
          </h2>
          <p className="text-gray-700 mb-4">over {stayDurationYears} years</p>

           {/* Cost Breakdown Table */}
          <div className="overflow-x-auto">
              <table className="w-full text-left text-sm md:text-base">
                  <thead>
                      <tr className="border-b">
                          <th className="py-2">Costs after {stayDurationYears} years</th>
                          <th className="py-2 text-right">Buy</th>
                          <th className="py-2 text-right">Rent</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr className="border-b">
                          <td className="py-2">Initial costs</td>
                          <td className="py-2 text-right">{formatCurrency(buyInitialCosts)}</td>
                          <td className="py-2 text-right">{formatCurrency(rentInitialCosts)}</td>
                      </tr>
                      <tr className="border-b">
                          <td className="py-2">Recurring costs</td>
                          <td className="py-2 text-right">{formatCurrency(buyRecurringCosts)}</td>
                          <td className="py-2 text-right">{formatCurrency(rentRecurringCosts)}</td>
                      </tr>
                      <tr className="border-b">
                          <td className="py-2">Opportunity costs <span className="text-xs text-gray-500">(FV of costs if invested)</span></td>
                          <td className="py-2 text-right">{formatCurrency(buyOpportunityCosts)}</td>
                          <td className="py-2 text-right">{formatCurrency(rentOpportunityCosts)}</td>
                      </tr>
                      <tr className="border-b">
                           <td className="py-2">Net proceeds</td>
                           {/* Show negative sign for proceeds representing money back */}
                           <td className="py-2 text-right">-{formatCurrency(buyNetProceeds)}</td>
                           <td className="py-2 text-right">-{formatCurrency(rentNetProceeds)}</td>
                      </tr>
                      <tr className="font-bold">
                          <td className="py-2">Total</td>
                          <td className="py-2 text-right">{formatCurrency(buyTotal)}</td>
                          <td className="py-2 text-right">{formatCurrency(rentTotal)}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
        </div>
      )}

      {/* --- Input Sections (Revised Layout) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* --- Buying Assumptions (Left Column) --- */}
        <div className="space-y-4 p-4 border rounded">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2">Buying Assumptions</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Home Price</label>
            <input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Down Payment (%)</label>
            <input type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" min="0" max="100" step="0.1" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
            <input type="number" value={interestRatePercent} onChange={(e) => setInterestRatePercent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" min="0" step="0.01" />
          </div>
           <div>
            <label className="block text-sm font-medium text-gray-700">Property Tax Rate (% of home value/yr)</label>
            <input type="number" value={propertyTaxRatePercent} onChange={(e) => setPropertyTaxRatePercent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" step="0.01" />
          </div>
          <div>
             <label className="block text-sm font-medium text-gray-700">Maintenance (% of home value/yr)</label>
             <input type="number" value={maintenancePercent} onChange={(e) => setMaintenancePercent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" step="0.1" />
           </div>
            <div>
             <label className="block text-sm font-medium text-gray-700">Homeowner's Insurance (% of home value/yr)</label>
             <input type="number" value={homeInsurancePercent} onChange={(e) => setHomeInsurancePercent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" step="0.01" />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700">HOA/Condo Fees ($/month)</label>
             <input type="number" value={hoaFeesMonthly} onChange={(e) => setHoaFeesMonthly(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700">One-time Buying Costs (% of home price)</label>
             <input type="number" value={buyClosingCostsPercent} onChange={(e) => setBuyClosingCostsPercent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" step="0.1" />
           </div>
           <div>
             <label className="block text-sm font-medium text-gray-700">One-time Selling Costs (% of future home price)</label>
             <input type="number" value={sellClosingCostsPercent} onChange={(e) => setSellClosingCostsPercent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" step="0.1" />
           </div>
        </div>

        {/* --- Renting Assumptions (Right Column) --- */}
        <div className="space-y-4 p-4 border rounded">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2">Renting Assumptions</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Rent</label>
            <input type="number" value={monthlyRent} onChange={(e) => setMonthlyRent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Security Deposit (Months of Rent)</label>
            <input type="number" value={securityDepositMonths} onChange={(e) => setSecurityDepositMonths(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" min="0" step="0.5" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Renter's Insurance ($/month)</label>
            <input type="number" value={rentersInsuranceMonthly} onChange={(e) => setRentersInsuranceMonthly(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
        </div>

        {/* --- General & Future Assumptions (Spans Both Columns) --- */}
        <div className="md:col-span-2 space-y-4 p-4 border rounded">
          <h3 className="text-lg font-semibold mb-3 border-b pb-2">General & Future Assumptions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Nested grid for better layout */}
            <div>
              <label className="block text-sm font-medium text-gray-700">How Long Do You Plan to Stay? (Years)</label>
              <input type="number" value={stayDurationYears} onChange={(e) => setStayDurationYears(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" min="1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Home Price Appreciation Rate (%/yr)</label>
              <input type="number" value={homeAppreciationRatePercent} onChange={(e) => setHomeAppreciationRatePercent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" step="0.1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Rent Inflation Rate (%/yr)</label>
              <input type="number" value={rentInflationRatePercent} onChange={(e) => setRentInflationRatePercent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" step="0.1" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Investment Return Rate (%/yr)</label>
              <input type="number" value={investmentReturnRatePercent} onChange={(e) => setInvestmentReturnRatePercent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" step="0.1" />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700">Marginal Tax Rate (%)</label>
               <input type="number" value={marginalTaxRatePercent} onChange={(e) => setMarginalTaxRatePercent(Number(e.target.value))} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" step="0.1" />
            </div>
            <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">How you file your taxes:</label>
               <select value={taxFilingStatus} onChange={(e) => setTaxFilingStatus(e.target.value as 'individual' | 'joint')} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                 <option value="individual">Individual Return</option>
                 <option value="joint">Joint Return</option>
               </select>
            </div>
             <div>
               <label className="block text-sm font-medium text-gray-700 mb-1">Assume 2017 Tax Cuts will:</label>
                <select value={assumeTaxCutsExpire ? 'expire' : 'renew'} onChange={(e) => setAssumeTaxCutsExpire(e.target.value === 'expire')} className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                  <option value="expire">Expire</option>
                  <option value="renew">Be renewed</option>
                </select>
             </div>
          </div>
        </div>

      </div>

       {/* Methodology Section (Optional Static Text) */}
      <div className="mt-10 pt-6 border-t">
          <h3 className="text-xl font-semibold mb-4">Methodology Notes</h3>
          <p className="text-sm text-gray-600">
              This calculator estimates costs based on the inputs provided. It includes primary expenses like mortgage payments, rent, taxes, insurance, maintenance, and closing costs. It also factors in opportunity costs (calculated as the estimated future value of all initial and recurring housing costs if they were invested instead at the specified investment return rate) and estimated tax benefits. Net proceeds from selling the home (after selling costs, remaining mortgage balance, and capital gains taxes) or recovering a security deposit are subtracted from the total cost. All figures are estimates. Complex factors like PMI or variable-rate mortgages are simplified. The "winning" choice reflects the lower total estimated net cost over the specified period.
          </p>
      </div>

    </div>
  );
}

// Remember to create the route/page that uses this component, e.g., app/tools/buy-vs-rent/page.tsx
// And import this component there: import { BuyVsRentCalculator } from '@/components/calculators/BuyVsRentCalculator'; 