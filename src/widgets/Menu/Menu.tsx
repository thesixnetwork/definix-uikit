import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import { useMatchBreakpoints } from "../../hooks";
// import Logo from "./components/Logo";
import Panel from "./components/Panel";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
// import Avatar from "./components/Avatar";
import { MENU_HEIGHT, SIDEBAR_WIDTH_FULL, links as defaultLinks, MENU_ZINDEX } from "./config";
import { Box, ContainerLayout } from "../..";
import { pxToRem } from "../../style/mixin";
import Chain from "./components/Chain";
import Footer from "./components/Footer";

const Inner = styled.div`
  padding: ${MENU_HEIGHT}px ${pxToRem(60)} 0;
`;

// const MobileOnlyOverlay = styled(Overlay)`
//   position: fixed;
//   height: 100%;

//   ${({ theme }) => theme.mediaQueries.nav} {
//     display: none;
//   }
// `;

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: ${SIDEBAR_WIDTH_FULL}px;
  width: calc(100% - ${SIDEBAR_WIDTH_FULL}px);
  height: ${MENU_HEIGHT}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${pxToRem(60)};
  z-index: ${MENU_ZINDEX};
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
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
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
        <Box position="absolute" right={pxToRem(60)}>
          <UserBlock account={account} login={login} logout={logout} />
        </Box>
        {/* {profile && <Avatar profile={profile} />} */}
      </StyledNav>
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
        {/* <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" /> */}
      </Inner>
      <Footer />
    </ContainerLayout>
  );
};

export default Menu;
