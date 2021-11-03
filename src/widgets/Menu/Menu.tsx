import React, { useState } from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../hooks";
import Panel from "./components/Panel";
import { MenuProps } from "./types";
import { MENU_HEIGHT, links as defaultLinks } from "./config";
import { ContainerLayout } from "../..";
import { pxToRem } from "../../style/mixin";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const Inner = styled.div`
  padding: ${MENU_HEIGHT}px ${pxToRem(60)} 0;
  outline: 1px solid blue;
  background-color: rgba(255, 255, 0 ,.3);
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
      <Inner>
        {children}
      </Inner>
      <Footer />
    </ContainerLayout>
  );
};

export default Menu;
