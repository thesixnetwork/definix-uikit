import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { Text } from "../Text";

interface StyledTitleSet {
  theme: DefaultTheme;
}

export const StyledTitleSet = styled.div`
  width: 100%;
  ${space}
`;

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.textStyle.R_32B}
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ theme }) => theme.textStyle.R_23B}
  }
`;

export const StyledLink = styled.a`
  text-decoration: underline;
  ${({ theme }) => theme.textStyle.R_14R}
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ theme }) => theme.textStyle.R_12R}
  }
`;
export const StyledDescription = styled.p`
  font-size: 18px;
  line-height: 1.44;
  color: ${({ theme }) => theme.colors.mediumgrey};
  ${({ theme }) => theme.textStyle.R_18R}
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ theme }) => theme.textStyle.R_12R}
  }
`;
