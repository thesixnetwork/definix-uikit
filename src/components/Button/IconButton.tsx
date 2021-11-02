import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import Button from "./Button";
import { BaseButtonProps, PolymorphicComponent, ButtonProps } from "./types";

const StyledButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  padding: 4px;
  width: auto;
  border-radius: 0;
  ${space}
`;

const IconButton: React.FC<ButtonProps> = ({ ...props }) => {
  return <StyledButton variant="transparent" {...props} />
}
export default IconButton;
