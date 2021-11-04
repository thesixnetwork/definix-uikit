import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { CardRibbonProps } from "./types";
import { spacing } from "@/theme/base";
import { textStyle } from "@/theme/text";
import { pxToRem } from "@/style/mixin";

interface StyledCardRibbonProps extends CardRibbonProps {
  theme: DefaultTheme;
}

const StyledCardRibbon = styled.div<Partial<StyledCardRibbonProps>>`
  background-color: ${({ variantColor = "yellow", theme }) => theme.colors[variantColor]};
  padding: ${pxToRem(5)} ${pxToRem(spacing.S_20)};
  position: absolute;
  left: unset;
  top: 17px;
  border-top-right-radius: ${pxToRem(spacing.S_8)};
  border-bottom-right-radius: ${pxToRem(spacing.S_8)};
  z-index: 1;
  ${textStyle.R_12B}
  color: white;
  ${({ upperCase }) => upperCase && "text-transform: uppercase;"};
`;

const CardRibbon: React.FC<CardRibbonProps> = ({ variantColor = "yellow", text, upperCase }) => {
  return (
    <StyledCardRibbon variantColor={variantColor} upperCase={upperCase}>
      <div title={text}>{text}</div>
    </StyledCardRibbon>
  );
};

export default CardRibbon;
