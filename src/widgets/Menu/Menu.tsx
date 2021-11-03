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
} from "./config";
import { ContainerLayout } from "../..";
import { pxToRem } from "../../style/mixin";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Flex from "../../components/Box/Flex";

const Inner = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex: 1 1 0;
  justify-content: center;
  width: 100%;
  border: 1px solid blue;
  padding: ${NAV_HEIGHT_PC}px ${pxToRem(INNER_MARGIN_PC)};
  overflow: auto;

  ${({ isMobile }) =>
    isMobile &&
    `
    padding: ${NAV_HEIGHT_MOBILE}px ${pxToRem(INNER_MARGIN_MOBILE)} 0;
  `}
`;

const Menu: React.FC<MenuProps> = ({
  account,
  login,
  logout,
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
    <ContainerLayout>
      <Nav
        isMobile={isMobile}
        isPushed={isPushed}
        pushNav={setIsPushed}
        login={login}
        account={account}
        logout={logout}
      />
      <Flex flex="1 1 0">
        <Panel
          isMobile={isMobile}
          isPushed={isPushed}
          // isDark={isDark}
          // toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          pushNav={setIsPushed}
          links={links || defaultLinks}
          login={login}
          account={account}
          logout={logout}
        />
        <Flex flexDirection="column" flex="1 1 0" alignItems="center">
          <Inner isMobile={isMobile}>{children}</Inner>
          <Footer isMobile={isMobile} />
        </Flex>
      </Flex>
    </ContainerLayout>
  );
};

export default Menu;
