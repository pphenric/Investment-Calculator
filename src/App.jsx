import { useState } from "react";

import Header from "./assets/components/Header";
import InputSection from "./assets/components/InputSection";
import Results from "./assets/components/Results";

function App() {

  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const inputData = [
    {
      value: initialInvestment,
      setValue: setInitialInvestment
    },
    {
      value: annualInvestment,
      setValue: setAnnualInvestment
    },
    {
      value: expectedReturn,
      setValue: setExpectedReturn
    },
    {
      value: duration,
      setValue: setDuration
    },
  ];

  return (
    <>
      <Header />
      <InputSection inputData={inputData} />
      <Results inputData={inputData} />
    </>
  )
}

export default App
