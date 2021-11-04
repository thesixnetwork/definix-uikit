import React from "react";
import styled from "styled-components";
import { CheckboxLabelProps } from "./types";

const StyledCheckboxLabel = styled.label`
  display: flex;
  > input {
    flex-shrink: 0;
    margin-right: 12px;
    &[scale="sm"] {
      margin-right: 8px;
    }
  }
`;

const CheckboxLabel: React.FC<CheckboxLabelProps> = ({ className, control, children }) => {
  const singleCol = typeof children === "string" && !children?.length;

  return (
    <StyledCheckboxLabel className={className}>
      {control}
      {singleCol ? children : <div>{children}</div>}
    </StyledCheckboxLabel>
  );
};

export default CheckboxLabel;
