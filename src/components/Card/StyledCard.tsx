import styled, { DefaultTheme } from "styled-components";
import { color, space } from "styled-system";
import { CardProps } from "./types";
import { pxToRem } from "../../style/mixin";
import { spacing } from "../../theme/base";

interface StyledCardProps extends CardProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success --> Active
 */
const getBoxShadow = ({ isActive, isSuccess, isWarning, theme, cardBg }: StyledCardProps) => {
  if (isWarning) {
    return theme.card.boxShadowWarning;
  }

  if (isSuccess) {
    return theme.card.boxShadowSuccess;
  }

  if (isActive) {
    return theme.card.boxShadowActive;
  }

  if (cardBg) {
    return theme.card.onlyBoxShadow;
  }

  return theme.card.boxShadow;
};

const StyledCard = styled.div<StyledCardProps>`
  background-color: ${({ theme, cardBg }) => (cardBg ? theme.colors[cardBg] : theme.card.background)};
  border-radius: ${pxToRem(spacing.S_16)};

  box-shadow: ${getBoxShadow};
  position: relative;
  overflow: ${({ isOverflowHidden }) => (isOverflowHidden ? "hidden" : "auto")};
  ${space}
  ${color}
`;

StyledCard.defaultProps = {
  isActive: false,
  isSuccess: false,
  isWarning: false,
  isDisabled: false,
};

export default StyledCard;
