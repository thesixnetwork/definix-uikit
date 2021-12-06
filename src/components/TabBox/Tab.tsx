import React from "react";
import { StyledBorderBottom, StyledTab } from "./StyledTabBox";
import { TabProps } from "./types";

const Tab: React.FC<TabProps> = ({ onClick, isSelected, children, small, width }) => {
  return (
    <StyledTab width={width} small={small} onClick={onClick} isSelected={isSelected}>
      {children}
      <StyledBorderBottom isSelected={isSelected} style={{ zIndex: 1 }} />
    </StyledTab>
  );
};

export default Tab;
