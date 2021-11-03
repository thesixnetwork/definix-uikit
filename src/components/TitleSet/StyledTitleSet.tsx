import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";

interface StyledTitleSet {
  theme: DefaultTheme;
}

export const StyledTitleSet = styled.div`
  width: 100%;
  ${space}
`;
export const StyledLink = styled.a`
  text-decoration: underline;
`;
export const StyledDescription = styled.p`
  font-size: 18px;
  line-height: 1.44;
  color: ${({ theme }) => theme.colors.mediumgrey};
`;
