import styled, { DefaultTheme } from "styled-components";
import Flex from "../Box/Flex";
import { Heading } from "../Heading";
import { space } from "styled-system";

interface StyledTitleSet {
  theme: DefaultTheme;
}

export const StyledTitleSet = styled.div`
  width: 100%;

  ${space}
`;
export const StyledTitle = styled(Flex)`
  align-items: flex-end;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
  }
`;
export const StyledHeading = styled(Heading)`
  margin-right: 16px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ theme }) => theme.textStyle.R_23B};
    margin-right: 0;
  }
`;
export const StyledLink = styled.a`
  ${({ theme }) => theme.textStyle.R_14R};
  text-decoration: underline;

  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ theme }) => theme.textStyle.R_12R};
    margin-top: 8px;
  }
`;
export const StyledDescription = styled.p`
  ${({ theme }) => theme.textStyle.R_18R};
  line-height: 1.44;
  color: ${({ theme }) => theme.colors.mediumgrey};

  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ theme }) => theme.textStyle.R_12R};
  }
`;
