import styled, { css, DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { textStyle } from "../../theme";
import { hexToRGB } from "../../style/mixin";
import Flex from "../Box/Flex";

interface StyledTabBoxProps {
  theme: DefaultTheme;
}

export const Wrap = styled(Flex)`
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  ${space}
`;

export const StyledContentArea = styled.div<StyledTabBoxProps>`
  width: 100%;
  ${space}
`;

export const StyledTabArea = styled.div`
  position: relative;
  width: 100%;
  ${space}
`;

export const StyledBorderBottom = styled.div<{ isSelected?: boolean }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.black : hexToRGB(theme.colors.lightgrey, 0.4)};
  ${space}
`;

export const StyledTab = styled.div<{ small?: boolean; isSelected: boolean; width?: string }>`
  position: relative;
  text-align: center;
  cursor: pointer;
  word-break: keep-all;
  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.black : hexToRGB(theme.colors.mediumgrey, 0.5))};
  padding: ${({ small }) => (small ? "18px 12px" : "20px 48px")};
  ${({ small }) => css(small ? textStyle.R_14B : textStyle.R_16B)}
  ${({ width }) => width && `width: ${width}`}
  ${space}
`;

export default undefined;
