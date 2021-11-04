import React from "react";
import styled from "styled-components";
import { Flex } from "@/components/Box";
import { Text } from "@/components/Text";
import { hexToRGB, pxToRem } from "@/style/mixin";
import { LogoFooterSixIcon } from "@/components/Icon";
import SocialLinks from "./SocialLinks";
import { ColorStyles, TextStyles } from "@/theme";
import { SIDEBAR_WIDTH_FULL } from "../config";

interface Props {
  isMobile: boolean;
}

const StyledFooter = styled.div<{ isMobile: boolean }>`
  position: relative;
  overflow: hidden;
  left: ${SIDEBAR_WIDTH_FULL}px;
  width: calc(100% - ${SIDEBAR_WIDTH_FULL}px);
  background-color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};

  ${({ isMobile }) =>
    isMobile &&
    `
      left: 0;
      width: 100%;
  `}
`;

const Inner = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px ${pxToRem(60)} 60px;

  ${({ isMobile }) =>
    isMobile &&
    `
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
    isMobile &&
    `
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
    <StyledFooter {...props}>
      <Inner {...props}>
        <LeftFlex {...props}>
          <LogoFooterSixIcon
            viewBox="0 0 86 48"
            width={props.isMobile ? "48" : "86"}
            height={props.isMobile ? "27" : "48"}
          />
          <StyledFlex ml={isMobile ? 0 : pxToRem(24)} mt={isMobile ? "9px" : 0}>
            <Text textStyle={isMobile ? TextStyles.R_12R : TextStyles.R_14R} color={ColorStyles.MEDIUMGREY}>
              Copyright © 2021 <strong>SIX Network</strong>. All Right Reserved
            </Text>
            <Text
              mt={isMobile ? "2px" : "6px"}
              textStyle={isMobile ? TextStyles.R_12R : TextStyles.R_14R}
              color={ColorStyles.MEDIUMGREY}
            >
              Audited By <strong>Certik</strong>
            </Text>
          </StyledFlex>
        </LeftFlex>
        <SocialLinks {...props} />
      </Inner>
    </StyledFooter>
  );
};

export default Footer;
