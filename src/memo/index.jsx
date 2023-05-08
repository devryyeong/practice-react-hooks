import React, { useState, useMemo } from "react";
import { Div, Input } from "../styles";
import MemoEx2 from "./MemoEx2";

const hardCalculate = (number) => {
  console.log("Difficult");
  for (let i = 0; i < 99999999; i++) {
    // 아주 오래 걸리는 계산 !
  }
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("easy");
  return number + 1;
};


const Index = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]);

  const easySum = easyCalculate(easyNumber);

  return (
    <>
      <Div>Difficult Calculator</Div>
      <Input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>
      <Div>Easy Calculator</Div>
      <Input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
      <hr />
      <hr style={{ marginBottom: "30px" }} />
      <MemoEx2 />
    </>
  );
}

export default Index;