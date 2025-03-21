// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults(initialInvestment, annualInvestment, expectedReturn, duration) {
  let results = [];
  let investmentValue = Number(initialInvestment);
  let totalInterest = 0;
  let investmentCapital = Number(initialInvestment);
  
  for (let year = 1; year <= Number(duration); year++) {
      let interestYear = investmentValue * (Number(expectedReturn) / 100);
      totalInterest += interestYear;
      investmentValue += interestYear + Number(annualInvestment);
      investmentCapital += Number(annualInvestment);

      results.push({
          year: year,
          investmentValue: investmentValue.toFixed(0),
          interestYear: interestYear.toFixed(0),
          totalInterest: totalInterest.toFixed(0),
          investmentCapital: investmentCapital.toFixed(0)
      });
  }
  
  return results;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
