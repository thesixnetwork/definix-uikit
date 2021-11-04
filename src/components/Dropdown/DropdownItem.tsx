import { hexToRGB } from "@/style/mixin";
import { textStyle, TextStyles } from "@/theme";
import React from "react";
import styled, { css } from "styled-components";
import { DropdownItemProps } from "./types";

const Item = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  padding: 0 16px;
  min-width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.deepgrey};
  ${({ isActive }) => css(textStyle[isActive ? TextStyles.R_14M : TextStyles.R_14R])}
  white-space: nowrap;

  background-color: ${({ isActive, theme }) => (isActive ? hexToRGB(theme.colors.pale, 0.2) : theme.colors.white)};
`;

const DropdownItem: React.FC<DropdownItemProps> = ({ children, isActive = false, ...props }) => {
  return (
    <Item isActive={isActive} {...props}>
      {children}
    </Item>
  );
};

export default DropdownItem;
