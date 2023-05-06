import React, {memo} from 'react';
import { Div, Span, Button } from "../styles";

/** Child 컴포넌트는 props로 받는 name, age가 변하지 않으면 다시 렌더링될 필요가 없음. */
const Child = ({ name, age, tellMe }) => {
  console.log("Child rendered too");
  return (
    <>
      <div>
        <Div style={{ border: "2px solid royalblue", padding: "10px" }}>
          <Div>자녀👶</Div>
          <Span>
            성:
            <br />
            {name.lastName}
          </Span>
          <Span>
            이름:
            <br />
            {name.firstName}
          </Span>

          <Span>age: {age}살</Span>
          <Button onClick={tellMe}>Do you love me ?</Button>
        </Div>
      </div>
    </>
  );
};

export default memo(Child);