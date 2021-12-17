import React from "react";
import styled from "styled-components";
import { Flex } from "../../../components/Box";
import { Text } from "../../../components/Text";
import { FingerLabsLogo, LogoFooterSixIcon } from "../../../components/Icon";
import SocialLinks from "./SocialLinks";
import { SIDEBAR_WIDTH_FULL_PC } from "../config";
import { useMenu } from "../MenuContext";

const StyledFooter = styled.div`
  position: relative;
  overflow: hidden;
  left: ${SIDEBAR_WIDTH_FULL_PC}px;
  width: calc(100% - ${SIDEBAR_WIDTH_FULL_PC}px);
  background-color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mediaQueries.mobile} {
    left: 0;
    width: 100%;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 60px 60px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: 20px 0 40px;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    justify-content: stretch;
    > div {
      width: 100%;
    }
  }
`;

const StyledFlex = styled(Flex)`
  flex-direction: column;
  margin-left: 24px;
  margin-top: 0;

  ${({ theme }) => theme.mediaQueries.mobile} {
    margin-left: 0;
    margin-top: 9px;
  }
`;

const StyledLogoWrap = styled(Flex)``;

const LeftFlex = styled(Flex)`
  /* margin-top: 40px; */
  align-items: center;

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding: 20px 40px 0;
    margin-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.colors.lightGrey50};
    flex-direction: column;
    align-items: flex-start;
    order: 1;
  }
`;

const WrapIcon = styled.div`
  width: 86px;
  height: 48px;
  ${({ theme }) => theme.mediaQueries.mobile} {
    width: 48px;
    height: 27px;
  }
`;

const CopyRightText = styled(Text)`
  ${({ theme }) => theme.textStyle.R_14R}
  color: ${({ theme }) => theme.colors.mediumgrey};
  ${({ theme }) => theme.mediaQueries.mobile} {
    ${({ theme }) => theme.textStyle.R_12R}
  }
`;

const AuditText = styled(CopyRightText)`
  margin-top: 6px;
  ${({ theme }) => theme.mediaQueries.mobile} {
    margin-top: 2px;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background-color: ${({theme}) => theme.colors.lightGrey50};
  margin-left: 20px;
  margin-right: 20px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    height: 27px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const Footer: React.FC = () => {
  const { Trans } = useMenu();
  return (
    <StyledFooter>
      <Inner>
        <LeftFlex>
          <StyledLogoWrap>
            <WrapIcon>
              <LogoFooterSixIcon viewBox="0 0 86 48" width="100%" height="100%" />
            </WrapIcon>
            <Divider />
            <WrapIcon>
              <FingerLabsLogo viewBox="0 0 86 48" width="100%" height="100%" />
            </WrapIcon>
          </StyledLogoWrap>
          <StyledFlex>
            <CopyRightText>
              <Trans i18nKey="copyright" components={{ 0: <strong /> }}></Trans>
            </CopyRightText>
            <AuditText>
              <Trans i18nKey="audit" components={{ 0: <strong /> }}></Trans>
            </AuditText>
          </StyledFlex>
        </LeftFlex>
        <SocialLinks />
      </Inner>
    </StyledFooter>
  );
};

export default Footer;
