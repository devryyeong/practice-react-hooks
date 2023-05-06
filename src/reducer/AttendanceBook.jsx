import React, { useState, useReducer } from "react";
import { Div, Input, Button, P, Span } from "../styles";
import Student from './Student';

const reducer = (state, action) => {
  switch (action.type) {
    case "add-student":
      const name = action.payload.name;
      const newStudent = {
        id: Date.now(),
        name,
        isHere: false,
      };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };

    case "delete-student":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };

    case "mark-student":
      return {
        count: state.count,
        students: state.students.map(student => {
          if(student.id === action.payload.id) {
            return { ...student, isHere: !student.isHere };
          }
          return student;
        }),
      };
    
    default:
      return state;
  }
};

const initialState = {
  count: 0,
  students: [],
};

const AttendanceBook = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Div>This is an attendance book !</Div>
      <P>The number of students : {studentsInfo.count}</P>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <Button
      onClick={() =>
        dispatch({ type: "add-student", payload: {name} })
      }
      >
        ➕
      </Button>
      <div>
        {studentsInfo.students.map((student) => {
          return <Student key={student.id} name={student.name} dispatch={dispatch} id={student.id} isHere={student.isHere} />;
        })}
      </div>
    </>
  );
};

export default AttendanceBook;
