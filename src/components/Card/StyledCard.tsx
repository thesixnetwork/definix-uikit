import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { CardProps } from "./types";
import { pxToRem } from "@/style/mixin";
import { spacing } from "@/theme/base";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({ isActive, isSuccess, isWarning, theme }: StyledCardProps) => {
  if (isWarning) {
    return theme.card.boxShadowWarning;
  }

  if (isSuccess) {
    return theme.card.boxShadowSuccess;
  }

  if (isActive) {
    return theme.card.boxShadowActive;
  }

  return theme.card.boxShadow;
};

const getBoxBG = ({ theme, bgColor }: {
  theme: DefaultTheme;
  bgColor?: string;
}) => {
  if (bgColor && !!bgColor.length) {
    return bgColor;
  }
  return theme.card.background
}

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${getBoxBG};
  border: ${({ theme }) => theme.card.boxShadow};
  border-radius: ${pxToRem(spacing.S_16)};
  box-shadow: ${getBoxShadow};
  overflow: hidden;
  position: relative;

  ${space}
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};

export default StyledCard;
