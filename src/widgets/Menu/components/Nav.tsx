import React from "react";
import styled from "styled-components";
import { Box, Flex } from "@/components/Box";
import { IconButton } from "@/components/Button";
import { NAV_HEIGHT_PC, NAV_HEIGHT_MOBILE, NAV_ZINDEX, SIDEBAR_WIDTH_FULL } from "../config";
import { LogoMainFinixIcon, MenuIcon, SettingIcon } from "@/components/Icon";
import { hexToRGB, pxToRem } from "@/style/mixin";
import Chain from "./Chain";
import UserBlock from "./UserBlock";
import { NavProps, PushedProps } from "../types";
import { ColorStyles } from "@/theme";

interface Props extends NavProps, PushedProps {}

const MobileNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 ${pxToRem(20)};
  height: ${NAV_HEIGHT_MOBILE}px;
  border-bottom: 1px solid ${({ theme }) => hexToRGB(theme.colors[ColorStyles.PALE], 0.3)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
  z-index: ${NAV_ZINDEX};

  /* ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  } */
`;

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  /* left: ${SIDEBAR_WIDTH_FULL}px; */
  /* width: calc(100% - ${SIDEBAR_WIDTH_FULL}px); */
  
  // temp max-width
  max-width: 1280px;
  width: 100%;

  border: 1px solid red;

  height: ${NAV_HEIGHT_PC}px;
  justify-content: center;
  align-items: center;
  padding: 0 ${pxToRem(60)};
  z-index: ${NAV_ZINDEX};
`;

const Nav: React.FC<Props> = ({ account, login, logout, isMobile, isPushed, pushNav }) => {
  return isMobile ? (
    <MobileNav>
      <Box position="absolute" left={pxToRem(20)}>
        <IconButton startIcon={<MenuIcon />} onClick={() => pushNav(!isPushed)} />
      </Box>
      <LogoMainFinixIcon />
      <Box position="absolute" right={pxToRem(20)}>
        <IconButton startIcon={<SettingIcon />} />
      </Box>
    </MobileNav>
  ) : (
    <StyledNav>
      <Chain />
      <Flex position="absolute" right={pxToRem(60)}>
        <IconButton mr="16px" startIcon={<SettingIcon />} />
        <UserBlock isMobile={isMobile} account={account} login={login} logout={logout} />
      </Flex>
      {/* {profile && <Avatar profile={profile} />} */}
    </StyledNav>
  );
};

export default Nav;
