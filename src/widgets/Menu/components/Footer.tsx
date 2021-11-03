import React from "react";
import styled from "styled-components";
import { Flex } from "@/components/Box";
import { Text } from "@/components/Text";
import { pxToRem } from "@/style/mixin";
import { LogoFooterSixIcon } from "@/components/Icon";
import SocialLinks from "./SocialLinks";
import { ColorStyles } from "@/theme";

interface Props {
  isMobile: boolean;
}

const StyledNav = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 0 ${pxToRem(60)};
  background-color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
`;

const Inner = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 60px;

  ${({ isMobile }) =>
    isMobile &&
    `
    
  `}
`;

const StyledFlex = styled(Flex)`
  flex-direction: column;
  margin-left: ${pxToRem(24)};
`;
const Footer: React.FC<Props> = (props) => {
  return (
    <StyledNav>
      <Inner {...props}>
        <Flex>
          <LogoFooterSixIcon />
          <StyledFlex>
            <Text>Copyright © 2021 SIX Network. All Right Reserved</Text>
            <Text>Audited By Certik</Text>
          </StyledFlex>
        </Flex>
        <SocialLinks />
      </Inner>
    </StyledNav>
  );
};

export default Footer;
