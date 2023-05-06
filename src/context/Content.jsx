import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";
import { Div } from "../styles";

const Content = () => {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <>
      <Background isDark={isDark}>🌱🌱 HELLO {user} 🌱🌱</Background>
    </>
  );
};

const Background = styled(Div)`
  height: 90px;
  background-color: ${props => props.isDark ? "salmon" : "white"};
  color: ${props => props.isDark ? "white" : "salmon"};
`;

export default Content