import React, { HTMLAttributes } from "react";
import styled, { DefaultTheme } from "styled-components";
import { color, space } from "styled-system";
import { MENU_ENTRY_HEIGHT } from "../config";
import { getVariantTextStyle, TextStyles, TextStyleProps } from "@/theme/text";

export interface Props extends TextStyleProps, HTMLAttributes<HTMLDivElement> {
  secondary?: boolean;
  isActive?: boolean;
  theme?: DefaultTheme;
}

const LinkLabel = styled.div<{ isPushed: boolean }>`
  flex-grow: 1;
  ${space}
  ${color}
  ${getVariantTextStyle()}
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.main.red : 'transparent'};

  color: ${({ isActive, theme }) => isActive ? theme.colors.greyscale.white : theme.colors.greyscale.deepgrey};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
  }

  &:hover {
  }

  // Safari fix
  flex-shrink: 0;

  ${getVariantTextStyle()}

`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

const MenuEntryComponent: React.FC<Props> = ({ isActive, ...props }) => {
  return <MenuEntry isActive={isActive} textStyle={isActive ? TextStyles.R_14B : TextStyles.R_14R} {...props}></MenuEntry>
}

export { MenuEntryComponent as MenuEntry, LinkLabelMemo as LinkLabel };
