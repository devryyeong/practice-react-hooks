import React, { useState, useCallback } from "react";
import { Div, Input, Button } from "../styles";
import Box from "./Box";

const Index = () => {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useCallback(() => {
    return {
      borderRadius: "20px",
      backgroundColor: "darksalmon",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <>
      <Div>Change the size of the box !</Div>
      <Div
        style={{
          paddingTop: "30px",
          backgroundColor: isDark ? "cornsilk" : "ivory",
        }}
      >
        <Input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
        <Button onClick={(e) => setIsDark(!isDark)}>Change Theme</Button>
      </Div>
      <Box createBoxStyle={createBoxStyle} />
    </>
  );
};

export default Index;
