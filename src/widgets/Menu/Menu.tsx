import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import { useMatchBreakpoints } from "../../hooks";
import Panel from "./components/Panel";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_FULL, links as defaultLinks, MENU_ZINDEX, MENU_MOBILE_HEIGHT } from "./config";
import { Box, Flex, ContainerLayout } from "../..";
import { hexToRGB, pxToRem } from "../../style/mixin";
import Chain from "./components/Chain";
import Footer from "./components/Footer";
import { LogoMainFinixIcon, SettingIcon } from "../../components/Icon";
import { IconButton } from "../../components/Button";

const Inner = styled.div`
  padding: ${MENU_HEIGHT}px ${pxToRem(60)} 0;
`;

const MobileNav = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 ${pxToRem(20)};
  height: ${MENU_MOBILE_HEIGHT}px;
  border-bottom: 1px solid ${({ theme }) => hexToRGB(theme.colors.brownscale.pale, 0.3)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.greyscale.white};
  z-index: ${MENU_ZINDEX};

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`;

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: ${SIDEBAR_WIDTH_FULL}px;
  width: calc(100% - ${SIDEBAR_WIDTH_FULL}px);
  height: ${MENU_HEIGHT}px;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0 ${pxToRem(60)};
  z-index: ${MENU_ZINDEX};

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  finixPriceUsd,
  links,
  // profile,
  children,
}) => {
  const { isLg } = useMatchBreakpoints();
  const isMobile = isLg === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  // const homeLink = links.find((link) => link.label === "Home");

  return (
    <ContainerLayout>
      <StyledNav>
        <Chain />
        <Flex position="absolute" right={pxToRem(60)}>
          <IconButton mr="16px" startIcon={<SettingIcon />} />
          <UserBlock account={account} login={login} logout={logout} />
        </Flex>
        {/* {profile && <Avatar profile={profile} />} */}
      </StyledNav>
      <MobileNav>
        <Box position="absolute" left={pxToRem(20)}>
          <SettingIcon />
        </Box>
        <LogoMainFinixIcon />
        <Box position="absolute" right={pxToRem(20)}>
          <SettingIcon />
        </Box>
      </MobileNav>
      <Panel
        isPushed={isPushed}
        isMobile={isMobile}
        showMenu={showMenu}
        isDark={isDark}
        toggleTheme={toggleTheme}
        langs={langs}
        setLang={setLang}
        currentLang={currentLang}
        finixPriceUsd={finixPriceUsd}
        pushNav={setIsPushed}
        links={links || defaultLinks}
      />
      <Inner>
        {children}
      </Inner>
      <Footer />
    </ContainerLayout>
  );
};

export default Menu;
