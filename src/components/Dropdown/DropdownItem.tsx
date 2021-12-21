import { hexToRGB } from "../../style/mixin";
import React from "react";
import styled, { css } from "styled-components";
import { DropdownItemProps } from "./types";

const Item = styled.button<{ isActive: boolean; isDivide?: boolean }>`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0 16px;
  min-width: 100%;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.deepgrey};
  ${({ isDivide, theme }) => isDivide && `border-top: 1px solid ${theme.colors.lightgrey};`}
  white-space: nowrap;
  ${({ isActive, theme }) => (isActive ? theme.textStyle.R_12M : theme.textStyle.R_12R)}

  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => hexToRGB(theme.colors.pale, 0.2)};
  }
`;

const DropdownItem: React.FC<DropdownItemProps> = ({ children, isActive = false, ...props }) => {
  return (
    <Item isActive={isActive} {...props}>
      {children}
    </Item>
  );
};

export default DropdownItem;
