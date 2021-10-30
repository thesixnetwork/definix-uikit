import React from "react";
import styled from "styled-components";
import { Flex, Text } from "../../..";
import { pxToRem } from "../../../style/mixin";
import { LogoFooterSixIcon } from "../icons";
import SocialLinks from "./SocialLinks";

const StyledNav = styled.div`
  position: relative;
  width: 100%;
  padding: 0 ${pxToRem(60)};
  background-color: ${({ theme }) => theme.colors.greyscale.white};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0 60px;
`

const StyledFlex = styled(Flex)`
  flex-direction: column;
  margin-left: ${pxToRem(24)};
`

const Footer: React.FC = () => {
  return (
    <StyledNav>
      <Inner>
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
