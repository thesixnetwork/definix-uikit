import React from "react";
import { ExtendColorProps } from "../../theme/types";
import { SpaceProps } from "styled-system";
import styled, { DefaultTheme } from "styled-components";
import { space, color } from "styled-system";
import { getVariantTextStyle } from "src";

export interface AnountButtonProps extends SpaceProps, ExtendColorProps {
  onClick: (() => void) | undefined;
  children?: React.ReactNode;
  className?: string;
  isSelected?: boolean;
}

interface StyledAnountButtonProps {
  theme: DefaultTheme;
  isSelected: boolean;
}

const StyledAnountButton = styled.button<StyledAnountButtonProps>`
  padding: ${({ isSelected }) => (isSelected ? "2px 8.5px 3px 8.5px" : "2px 8.5px 2.5px 8.5px")};
  border-radius: 13px;
  border: ${({ isSelected, theme }) => (isSelected ? "none" : `1px solid ${theme.colors.lightgrey}`)};
  background-color: ${({ isSelected, theme }) => (isSelected ? theme.colors.orange : "transparent")};
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.white : theme.colors.deepgrey)};
  text-align: center;
  cursor: pointer;
  ${({ theme }) => theme.textStyle.R_14R}

  ${space}
  ${color}
  ${getVariantTextStyle()}
`;

const AnountButton: React.FC<AnountButtonProps> = ({ onClick, isSelected = false, children, ...props }) => {
  return (
    <StyledAnountButton onClick={onClick} {...props} isSelected={isSelected}>
      {children}
    </StyledAnountButton>
  );
};
export default AnountButton;
