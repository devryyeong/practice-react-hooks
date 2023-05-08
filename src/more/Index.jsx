import { useState, useMemo, useCallback  } from "react";
import { Div, Input, Button, P, Span } from "../styles";
import Child from "./Child";

const Index = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childAge, setChildAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildAge = () => {
    setChildAge(childAge + 1);
  };

  console.log("parent rendered");

  const name = useMemo(() => {
    return {
      lastName: "Lee",
      firstName: "NR",
    };
  }, []);

  /** 메모화되었으므로 렌더링되어도 항상 같은 메모리주소를 갖게됨. */
  const tellMe = useCallback(() => {
    console.log("I love you 3000");
  }, []);

  return (
    <>
      <Div>How to optimize components</Div>
      <Div>
        (Feat. HOC, 고차 컴포넌트: 컴포넌트를 인자로 받아 최적화된 컴포넌트를
        리턴하는 함수)
      </Div>

      <Div style={{ border: "2px solid palevioletred", padding: "10px" }}>
        <Span style={{ marginRight: "20px" }}>
          부모👨🏼‍🤝‍👨🏻
          <br /> age: {parentAge}
        </Span>
        <Button onClick={incrementParentAge}>부모 나이 증가</Button>
        <Button onClick={incrementChildAge}>자녀 나이 증가</Button>
        {/* Child에게 prop으로 함수를 전달해도 Child 컴포넌트의 렌더링을 제한할 수 있게됨 */}
        <Child name={name} age={childAge} tellMe={tellMe} />
      </Div>
      <Div>
        주의: React.memo는 오직 props의 변화에만 의존하는 최적화 방법. useState,
        useReducer 등 상태와 관련된 훅을 사용한다면 props의 변화가 없더라도
        리렌더링이될 수 있음.
      </Div>
    </>
  );
}

export default Index;