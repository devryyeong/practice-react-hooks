import { useState, useRef, useEffect } from "react";
import { P, Button } from "../styles";
import LoginEx from "./LoginEx";

const Index = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);

  /** 함수가 불릴 때마다 초기화됨. */
  let countVar = 0;

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("rendering count: ", renderCount.current);
  });
  
  const doRendering = () => {
    setRenderer(renderer + 1);
  };

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1;
    console.log(`Ref: ${countRef.current}`);
  };

  const increaseVar = () => {
    countVar = countVar + 1;
    console.log(`var: ${countVar}`);
  };

  return (
    <>
      <P>State: {count}</P>
      <P>Ref: {countRef.current}</P>
      <P>Var: {countVar}</P>
      <Button onClick={increaseCountState}>State 올려</Button>
      <Button onClick={increaseCountRef}>Ref 올려</Button>
      <Button onClick={increaseVar}>Var 올려</Button>
      <Button onClick={doRendering}>렌더!</Button>
      <hr style={{ marginBottom: "30px" }} />
      <LoginEx />
    </>
  );
}

export default Index;