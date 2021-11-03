import React from "react";
import styled from "styled-components";
import { Flex } from "@/components/Box";
import { Text } from "@/components/Text";
import { hexToRGB, pxToRem } from "@/style/mixin";
import { LogoFooterSixIcon } from "@/components/Icon";
import SocialLinks from "./SocialLinks";
import { ColorStyles, TextStyles } from "@/theme";

interface Props {
  isMobile: boolean;
}

const StyledNav = styled.div<{ isMobile: boolean }>`
  overflow: hidden;
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
  padding: 0 ${pxToRem(60)};

  ${({ isMobile }) =>
    isMobile && `
      padding: 0;
      margin: 0 -${pxToRem(20)};
      width: calc(100% + ${pxToRem(20 * 2)});
  `}
`;

const Inner = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 60px;

  ${({ isMobile }) =>
    isMobile && `
    padding: 20px 0 40px;
    flex-direction: column;
    flex-wrap: wrap-reverse;
    justify-content: stretch;

    > div {
      width: 100%;
    }
  `}
`;

const StyledFlex = styled(Flex)`
  flex-direction: column;
`;

const LeftFlex = styled(Flex)<{ isMobile: boolean }>`
  margin-top: 40px;
  ${({ isMobile, theme }) =>
    isMobile && `
    padding: 20px ${pxToRem(40)} 0;
    margin-top: 20px;
    border-top: 1px solid ${hexToRGB(theme.colors[ColorStyles.LIGHTGREY], 0.5)};
    flex-direction: column;
    order: 1;
  `}
`;

const Footer: React.FC<Props> = (props) => {
  const { isMobile } = props;
  return (
    <StyledNav {...props}>
      <Inner {...props}>
        <LeftFlex {...props}>
          <LogoFooterSixIcon viewBox="0 0 86 48" width={props.isMobile ? '48' : '86'}  height={props.isMobile ? '27' : '48'} />
          <StyledFlex ml={isMobile ? 0 : pxToRem(24)} mt={isMobile ? '9px' : 0}>
            <Text textStyle={isMobile ? TextStyles.R_12R : TextStyles.R_14R} color={ColorStyles.MEDIUMGREY}>Copyright © 2021 <strong>SIX Network</strong>. All Right Reserved</Text>
            <Text mt={isMobile ? '2px' : '6px'} textStyle={isMobile ? TextStyles.R_12R : TextStyles.R_14R} color={ColorStyles.MEDIUMGREY}>Audited By <strong>Certik</strong></Text>
          </StyledFlex>
        </LeftFlex>
        <SocialLinks {...props} />
      </Inner>
    </StyledNav>
  );
};

export default Footer;
