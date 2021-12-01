import styled, { DefaultTheme } from "styled-components";
import { space, color } from "styled-system";

interface StyledAnountButton {
  theme: DefaultTheme;
}

export const StyledAnountButton = styled.button`
  padding: 3px 11px 2px 11px;
  border-radius: 13px;
  border: 1px solid ${({ theme }) => theme.colors.lightgrey};
  background-color: transparent;
  text-align: center;
  color: ${({ theme }) => theme.colors.deepgrey};
  cursor: pointer;
  ${({ theme }) => theme.textStyle.R_14R}

  ${space}
  ${color}
`;
