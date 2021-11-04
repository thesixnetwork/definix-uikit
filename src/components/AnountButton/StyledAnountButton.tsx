import styled, { DefaultTheme } from "styled-components";
import { space, color } from "styled-system";

interface StyledAnountButton {
  theme: DefaultTheme;
}

export const StyledAnountButton = styled.button`
  padding: 3px 11px 2px 11px;
  border-radius: 13px;
  border: 1px solid ${({theme}) => theme.colors.lightgrey};
  background-color: transparent;
  font-size: 14px;
  line-height: 1.43;
  text-align: center;
  color: ${({theme}) => theme.colors.deepgrey};
  font-weight: 500;

  ${space}
  ${color}
`;