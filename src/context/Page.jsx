import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
import Content from "./Content";
import Section from "./Section";

const Page = () => {
  // const data = useContext(ThemeContext);
  // console.log(data);

  return (
    <>
      <Content />
      <Section />
    </>
  )
}

export default Page;