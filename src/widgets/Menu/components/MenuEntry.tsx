import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { color, space } from "styled-system";
import { MENU_ENTRY_HEIGHT } from "../config";
import { getTextStyle, getVariantTextStyle } from "../../../theme/text";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
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
  ${({ isActive }) => getTextStyle(isActive ? 'R_14B' : 'R_14R')}

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

`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MenuEntry, LinkLabelMemo as LinkLabel };
