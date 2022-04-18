import React from "react";
import { StyledBorderBottom, StyledTab } from "./StyledTabBox";
import { TabProps } from "./types";

interface ExtendTabProps extends TabProps {
  isDark: boolean;
}

const Tab: React.FC<ExtendTabProps> = ({ onClick, isSelected, children, small, isDark, ...props }) => {
  return (
    <StyledTab className="tab" isDark={isDark} small={small} onClick={onClick} isSelected={isSelected}>
      {children}
      <StyledBorderBottom isSelected={isSelected} isDark={isDark} />
    </StyledTab>
  );
};

export default Tab;
