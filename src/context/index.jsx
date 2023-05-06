import { useState, useRef, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";
import Page from "./Page";
import { Input, Button } from "../styles";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [name, setName] = useState("");
  const inputRef = useRef();

  const handleClick = () => {
    setName(inputRef.current.value);
    inputRef.current.focus();
  };

  return (
    <UserContext.Provider value={name}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Input
          ref={inputRef}
          type="text"
          placeholder="name"
        />
        <Button onClick={handleClick}>SEND</Button>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
};

export default Index;
