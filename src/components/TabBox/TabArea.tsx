import React from "react";
import { StyledBorderBottomNormal, StyledTabArea } from "./StyledTabBox";
import { TabAreaProps } from "./types";

const TabArea: React.FC<TabAreaProps> = ({ isDark, children }) => {
  return (
    <StyledTabArea>
      <StyledBorderBottomNormal isDark={isDark} />
      {children}
    </StyledTabArea>
  );
};

export default TabArea;
