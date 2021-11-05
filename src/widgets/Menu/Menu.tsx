import React, { useState } from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../hooks";
import Panel from "./components/Panel";
import { MenuProps } from "./types";
import {
  NAV_HEIGHT_PC,
  NAV_HEIGHT_MOBILE,
  INNER_MARGIN_PC,
  INNER_MARGIN_MOBILE,
  links as defaultLinks,
  SIDEBAR_WIDTH_FULL_PC,
} from "./config";
import { pxToRem } from "../../style/mixin";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { breakpointMap } from "../../theme/base";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.yellowBg2};
`;

const Container = styled.div`
  position: relative;
  margin: 0 ${pxToRem(20)};

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: ${SIDEBAR_WIDTH_FULL_PC}px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    width: ${breakpointMap.xl - SIDEBAR_WIDTH_FULL_PC}px;
    max-width: ${breakpointMap.xl - SIDEBAR_WIDTH_FULL_PC}px;
  }

  @media (min-width: ${breakpointMap.xl + SIDEBAR_WIDTH_FULL_PC}px) {
    margin: 0 auto;
  }
`;

const TopBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 360px;
  background-color: ${({ theme }) => theme.colors.yellowBg1};
`;

const Inner = styled.div<{ isMobile: boolean }>`
  padding: ${NAV_HEIGHT_PC}px ${pxToRem(INNER_MARGIN_PC)} 0;
  min-height: calc(100vh - ${NAV_HEIGHT_PC}px);
  outline: 1px solid blue;
  ${({ isMobile }) =>
    isMobile &&
    `
    padding: ${NAV_HEIGHT_MOBILE}px ${pxToRem(INNER_MARGIN_MOBILE)} 0;
  `}
`;

const Menu: React.FC<MenuProps> = ({
  // account,
  // login,
  // logout,
  // Trans,
  userBlock,
  chain,
  // isDark,
  // toggleTheme,
  langs,
  setLang,
  currentLang,
  links,
  // profile,
  children,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [isPushed, setIsPushed] = useState(!isMobile);
  return (
    <Wrapper>
      <TopBackground />
      <Nav
        userBlock={userBlock}
        chain={chain}
        isMobile={isMobile}
        isPushed={isPushed}
        pushNav={setIsPushed}
        // login={login}
        // account={account}
        // logout={logout}
      />
      <Panel
        userBlock={userBlock}
        chain={chain}
        isMobile={isMobile}
        isPushed={isPushed}
        // isDark={isDark}
        // toggleTheme={toggleTheme}
        langs={langs}
        setLang={setLang}
        currentLang={currentLang}
        pushNav={setIsPushed}
        links={links || defaultLinks}
        // login={login}
        // account={account}
        // logout={logout}
      />
      <Container>
        <Inner isMobile={isMobile}>{children}</Inner>
      </Container>
      <Footer isMobile={isMobile} />
    </Wrapper>
  );
};

export default Menu;
