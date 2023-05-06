import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./ThemeContext";
import { Button, Div } from "../styles";

const Section = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <Background isDark={isDark}>🌳🌳 HELLO WORLD 🌳🌳</Background>
      <Button onClick={toggleTheme}>DARK MODE</Button>
    </>
  );
};

const Background = styled(Div)`
  height: 90px;
  background-color: ${(props) => (props.isDark ? "sandybrown" : "white")};
  color: ${(props) => (props.isDark ? "white" : "sandybrown")};
`;

export default Section;
