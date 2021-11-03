import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { CardRibbonProps } from "./types";
import { spacing } from "@/theme/base";
import { textStyle } from "@/theme/text";
import { pxToRem } from "@/style/mixin";
import { ColorStyles } from "@/theme";

interface StyledCardRibbonProps extends CardRibbonProps {
  theme: DefaultTheme;
}

// background-color: ${({ variantColor = "yellow", theme }) => theme.colors[variantColor]};
const StyledCardRibbon = styled.div<Partial<StyledCardRibbonProps>>`
  background-color: ${({ theme }) => theme.colors[ColorStyles.YELLOWBG1]};
  padding: ${pxToRem(5)} ${pxToRem(spacing.S_20)};
  position: absolute;
  left: unset;
  text-transform: uppercase;
  top: 17px;
  border-top-right-radius: ${pxToRem(spacing.S_8)};
  border-bottom-right-radius: ${pxToRem(spacing.S_8)};
  z-index: 1;
  ${textStyle.R_12B}
  color: white;
`;

const CardRibbon: React.FC<CardRibbonProps> = ({ variantColor = "yellow", text }) => {
  return (
    <StyledCardRibbon variantColor={variantColor}>
      <div title={text}>{text}</div>
    </StyledCardRibbon>
  );
};

export default CardRibbon;
