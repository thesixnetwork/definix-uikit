import React from "react";
import { StyledBorderBottom, StyledTabArea } from "./StyledTabBox";
import { TabAreaProps } from "./types";

const TabArea: React.FC<TabAreaProps> = ({ children }) => {
  return (
    <StyledTabArea>
      <StyledBorderBottom />
      {children}
    </StyledTabArea>
  );
};

export default TabArea;
