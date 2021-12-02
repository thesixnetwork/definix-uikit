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
export const StyledTitle = styled(Flex)<{ linkBottom?: boolean }>`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 16px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    flex-direction: ${({ linkBottom }) => (linkBottom ? "column" : "row")};
    align-items: ${({ linkBottom }) => (linkBottom ? "flex-start" : "flex-end")};
    margin-bottom: ${({ linkBottom }) => (linkBottom ? "8px" : "16px")};
  }
`;
export const StyledHeading = styled(Heading)<{ linkBottom?: boolean }>`
  margin-right: 16px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ theme }) => theme.textStyle.R_23B};
    margin-right: ${({ linkBottom }) => (linkBottom ? "0" : "16px")};
  }
`;
export const StyledLink = styled.a<{ linkBottom?: boolean }>`
  ${({ theme }) => theme.textStyle.R_14R};
  text-decoration: underline;

  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ theme }) => theme.textStyle.R_12R};
    margin-top: ${({ linkBottom }) => (linkBottom ? "4px" : "0")};
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
