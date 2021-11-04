import { hexToRGB } from "@/style/mixin";
import { textStyle, TextStyles } from "@/theme";
import React from "react";
import styled, { css } from "styled-components";
import { DropdownItemProps, Scale, scales } from "./types";

const Item = styled.div<{ isActive: boolean; scale: Scale; isDivide?: boolean }>`
  cursor: pointer;
  padding: 0 16px;
  min-width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.deepgrey};
  ${({ isActive, scale }) => css(textStyle[isActive ? scales[scale].activeTextStyle : scales[scale].textStyle])}
  ${({ isDivide, theme }) => isDivide && `border-top: 1px solid ${theme.colors.lightgrey};`}
  white-space: nowrap;

  background-color: ${({ isActive, theme }) => (isActive ? hexToRGB(theme.colors.pale, 0.2) : theme.colors.white)};
`;

const DropdownItem: React.FC<DropdownItemProps> = ({ children, isActive = false, scale = "md", ...props }) => {
  return (
    <Item isActive={isActive} scale={scale} {...props}>
      {children}
    </Item>
  );
};

export default DropdownItem;
