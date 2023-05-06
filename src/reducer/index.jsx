import React, { useState, useReducer } from "react";
import { Div, Input, Button, P } from "../styles";
import AttendanceBook from "./AttendanceBook";

// reducer: state를 업데이트 (은행)
// dispatch: state 업데이트를 하기 위한 요구
// action: 요구의 내용

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw"
}
const reducer = (state, action) => {
  console.log('reducer working!', state, action);
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};
const Index = () => {
  const [number, setNumber] = useState(0);
  // 인자: reducer와 money의 초기값
  const [money, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <Div style={{ backgroundColor: "ivory", padding: "30px" }}>
        ➖ reducer: state를 업데이트 <br /> ➖ dispatch: state 업데이트를 하기
        위한 요구 <br /> ➖ action: 요구의 내용
      </Div>
      <Div>This is the bank !</Div>
      <P>Balance: {money} won</P>
      <Input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="100"
      />
      <Button
        onClick={() =>
          dispatch({ type: ACTION_TYPES.deposit, payload: number })
        }
      >
        DEPOSIT
      </Button>
      <Button onClick={() => dispatch({ type: ACTION_TYPES.withdraw, payload: number })}>
        WITHDRAW
      </Button>
      <hr style={{ marginBottom: "30px" }} />
      <AttendanceBook />
    </>
  );
};

export default Index;
