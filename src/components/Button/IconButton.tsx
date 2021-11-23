import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import StyledButton from "./StyledButton";
import { BaseButtonProps, PolymorphicComponent, IconButtonProps } from "./types";

const StyledIconButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(StyledButton)<BaseButtonProps>`
  padding: 4px;
  width: auto;
  border-radius: 0;
  background-color: transparent;
  border: none;
  ${space}
`;

const IconButton: React.FC<IconButtonProps> = ({ children }) => {
  return <StyledIconButton>
    {children}
  </StyledIconButton>;
};
export default IconButton;
