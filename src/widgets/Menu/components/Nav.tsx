import React, { useEffect, useState, useRef } from "react";
import _ from "lodash";
import styled from "styled-components";
import { Box, Flex } from "../../../components/Box";
import { IconButton } from "../../../components/Button";
import { NAV_HEIGHT_PC, NAV_HEIGHT_MOBILE, SIDEBAR_WIDTH_FULL_PC } from "../config";
import { MainDefinixTextIcon, MenuIcon, SettingIcon, GnbMyMobileIcon } from "../../../components/Icon";
import { hexToRGB, pxToRem } from "../../../style/mixin";
import { NavProps } from "../types";
import { ColorStyles } from "../../../theme";
import { useModal } from "../../Modal";
import UserBlock from "./UserBlock";
import Chain from "./Chain";
import SettingsModal from "./SettingsModal";
import { useMatchBreakpoints } from "../../../hooks";
import { useHistory } from "react-router";
import { useMenu } from "../MenuContext";

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
  z-index: ${({ theme }) => theme.zIndices.nav};

  /* ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  } */
`;

const StyledNav = styled.nav<{ isTop: boolean }>`
  position: fixed;
  top: 0;
  display: flex;
  left: ${SIDEBAR_WIDTH_FULL_PC}px;
  width: calc(100% - ${SIDEBAR_WIDTH_FULL_PC}px);
  height: ${NAV_HEIGHT_PC}px;
  justify-content: center;
  align-items: center;
  padding: 0 ${pxToRem(60)};
  z-index: ${({ theme }) => theme.zIndices.nav};
  transition: background-color 0.2s;

  ${({ theme, isTop }) =>
    !isTop &&
    `
    background-color: ${theme.colors[ColorStyles.WHITE]};
  `}
`;

const getIsTop = () => {
  return window.pageYOffset === 0;
};

const Nav: React.FC<NavProps> = (props) => {
  const history = useHistory();
  const { account, Trans, setDeadline, deadline, setUserslippageTolerance, userSlippageTolerance } = useMenu();
  const { isPushed, pushNav } = props;
  const { isMaxLg } = useMatchBreakpoints();
  const [isTop, setIsTop] = useState(getIsTop());
  const isMobile = isMaxLg;
  const [onPresentSettingModal] = useModal(
    <SettingsModal
      {...{
        Trans,
        setDeadline,
        deadline,
        setUserslippageTolerance,
        userSlippageTolerance,
      }}
    />,
    false
  );
  const refPrevIsTop = useRef<boolean>(getIsTop());

  useEffect(() => {
    const handleScroll = () => {
      const isTopOfPage = getIsTop();
      if (refPrevIsTop.current !== isTopOfPage) {
        setIsTop(isTopOfPage);
        refPrevIsTop.current = isTopOfPage;
      }
    };
    const throttledHandleScroll = _.throttle(handleScroll, 200);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isMobile) {
    return (
      <MobileNav>
        <Box position="absolute" left={pxToRem(20)}>
          <IconButton onClick={() => pushNav(!isPushed)}>
            <MenuIcon />
          </IconButton>
        </Box>
        <MainDefinixTextIcon />
        <Box position="absolute" right={pxToRem(20)}>
          <IconButton onClick={() => onPresentSettingModal()}>
            <SettingIcon />
          </IconButton>
          {account && (
            <IconButton ml="S_16" onClick={() => history.push("/my")}>
              <GnbMyMobileIcon />
            </IconButton>
          )}
        </Box>
      </MobileNav>
    );
  }
  return (
    <StyledNav isTop={isTop}>
      <Chain />
      <Flex position="absolute" right={pxToRem(60)}>
        <IconButton mr="S_16" onClick={() => onPresentSettingModal()}>
          <SettingIcon />
        </IconButton>
        <UserBlock {...props} />
      </Flex>
    </StyledNav>
  );
};

export default Nav;
