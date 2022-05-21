import React from "react";
import { Button } from "antd";

const JumboButton = ({ children, backgroundColor, fontColor, onClick }) => {
  return (
    <Button
      onClick={onClick}
      style={{ backgroundColor: `${backgroundColor}`, color: `${fontColor}` }}
    >
      {children}
    </Button>
  );
};

export default JumboButton;
