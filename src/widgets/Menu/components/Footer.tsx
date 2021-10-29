import React from "react";
import styled from "styled-components";
import { Flex, Text } from "../../..";
import { pxToRem } from "../../../style/mixin";
import LogoSix from "./LogoSix";
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

const Footer: React.FC = () => {
  return (
    <StyledNav>
      <Inner>
        <Flex>
          <LogoSix />
          <Flex flexDirection="column">
            <Text>Copyright © 2021 SIX Network. All Right Reserved</Text>
            <Text>Audited By Certik</Text>
          </Flex>
        </Flex>
        <SocialLinks />
      </Inner>
    </StyledNav>
  );
};

export default Footer;
