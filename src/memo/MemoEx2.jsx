import React, { useState, useMemo, useEffect } from "react";
import { Div, Input, P, Button, Span } from "../styles";

const MemoEx2 = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // 컴포넌트가 렌더링되었을 때 객체(location)가 초기화되는 것을 막아줘야 함
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  // number가 증가해도 useEffect 호출되지 않는 것을 확인
  useEffect(() => {
    console.log("useEffect");
  }, [location]);

  return (
    <>
      <Div>How many meals do you eat a day?</Div>
      <Span>I had</Span>
      <Input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <Span>meals today.</Span>
      <hr style={{ marginBottom: "30px" }} />
      <Div>Where are you ?</Div>
      <Span>I am in {location.country} !</Span>
      <Button onClick={() => setIsKorea(!isKorea)}>Let's get on a plane</Button>
    </>
  );
}

export default MemoEx2;