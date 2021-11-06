import React from "react";
import styled from "styled-components";
import { Box, Flex } from "../../../components/Box";
import { IconButton } from "../../../components/Button";
import { NAV_HEIGHT_PC, NAV_HEIGHT_MOBILE, NAV_ZINDEX, SIDEBAR_WIDTH_FULL_PC } from "../config";
import { LogoMainFinixIcon, MenuIcon, SettingIcon } from "../../../components/Icon";
import { hexToRGB, pxToRem } from "../../../style/mixin";
import { NavProps, PushedProps, SettingProps } from "../types";
import { ColorStyles } from "../../../theme";
import { useModal } from "../../Modal";

interface Props extends NavProps, PushedProps, SettingProps {}

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
  left: ${SIDEBAR_WIDTH_FULL_PC}px;
  width: calc(100% - ${SIDEBAR_WIDTH_FULL_PC}px);
  height: ${NAV_HEIGHT_PC}px;
  justify-content: center;
  align-items: center;
  padding: 0 ${pxToRem(60)};
  z-index: ${NAV_ZINDEX};
`;

const Nav: React.FC<Props> = ({ settingModal, userBlock, chain, isMobile, isPushed, pushNav }) => {
  const [onPresentSettingModal] = useModal(settingModal, false);
  return isMobile ? (
    <MobileNav>
      <Box position="absolute" left={pxToRem(20)}>
        <IconButton startIcon={<MenuIcon />} onClick={() => pushNav(!isPushed)} />
      </Box>
      <LogoMainFinixIcon />
      {settingModal ? (
        <Box position="absolute" right={pxToRem(20)}>
          <IconButton startIcon={<SettingIcon />} onClick={() => onPresentSettingModal()} />
        </Box>
      ) : (
        <></>
      )}
    </MobileNav>
  ) : (
    <StyledNav>
      {chain}
      <Flex position="absolute" right={pxToRem(60)}>
        {settingModal ? (
          <IconButton mr="16px" startIcon={<SettingIcon />} onClick={() => onPresentSettingModal()} />
        ) : (
          <></>
        )}
        {userBlock}
      </Flex>
      {/* {profile && <Avatar profile={profile} />} */}
    </StyledNav>
  );
};

export default Nav;
