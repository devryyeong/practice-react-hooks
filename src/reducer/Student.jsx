import React from "react";
import { Div, Span, Button, P } from "../styles";

const Student = ({ name, dispatch, id, isHere }) => {
  return (
    <div>
      <Span
        style={{
          textDecoration: isHere ? "line-through" : "none",
          color: isHere ? "gray" : "black",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatch({type: "mark-student", payload: {id}})
        }}
      >
        {name}
      </Span>
      <button onClick={() => {
        dispatch({ type: "delete-student", payload: { id } });
      }} style={{padding: "10px"}}>❌</button>
    </div>
  );
}

export default Student;