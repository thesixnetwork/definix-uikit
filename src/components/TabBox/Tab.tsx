import React from "react";
import { StyledBorderBottom, StyledTab } from "./StyledTabBox";
import { TabProps } from "./types";

const Tab: React.FC<TabProps> = ({ onClick, isSelected, children, small, ...props }) => {
  return (
    <StyledTab className="tab" small={small} onClick={onClick} isSelected={isSelected} {...props}>
      {children}
      <StyledBorderBottom isSelected={isSelected} />
    </StyledTab>
  );
};

export default Tab;
