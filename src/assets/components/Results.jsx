import { calculateInvestmentResults } from "../../util/investment";
import { formatter } from "../../util/investment";

export default function Results({inputData}) {

    const resultsData = calculateInvestmentResults(
        inputData[0].value,
        inputData[1].value,
        inputData[2].value,
        inputData[3].value
    );

    return (
        <table id= "result">
            <thead>
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Investment Value</th>
                    <th scope="col">Interest (Year)</th>
                    <th scope="col">Total Interest</th>
                    <th scope="col">Investment Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((row, index) => 
                    <tr key={index}>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.investmentValue)}</td>
                        <td>{formatter.format(row.interestYear)}</td>
                        <td>{formatter.format(row.totalInterest)}</td>
                        <td>{formatter.format(row.investmentCapital)}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}