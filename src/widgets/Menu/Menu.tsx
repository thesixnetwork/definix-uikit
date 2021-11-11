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
  DIM_ZINDEX,
  INNTER_ZINDEX,
} from "./config";
import { pxToRem } from "../../style/mixin";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.yellowBg2};
`;

const Container = styled.div`
  position: relative;
  z-index: ${INNTER_ZINDEX};
  padding-left: ${SIDEBAR_WIDTH_FULL_PC}px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding-left: 0;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    margin: 0 auto;
    padding-left: ${SIDEBAR_WIDTH_FULL_PC}px;
    width: 1440px;
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

const Inner = styled.div`
  padding: ${NAV_HEIGHT_PC}px ${pxToRem(INNER_MARGIN_PC)} 0;
  min-height: calc(100vh - ${NAV_HEIGHT_PC}px);

  outline: 1px solid blue;

  ${({ theme }) => theme.mediaQueries.mobileXl} {
    padding: ${NAV_HEIGHT_MOBILE}px ${pxToRem(INNER_MARGIN_MOBILE)} 0;
  }
`;

const Dim = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.black30};
  z-index: ${DIM_ZINDEX};
  pointer-events: none;
`

const Menu: React.FC<MenuProps> = (props) => {
  const {
    account,
    login,
    logout,
    Trans,
    langs,
    setLang,
    currentLang,
    links,
    // profile,
    children,
    netWorth,
  } = props;
  const { isMaxLg } = useMatchBreakpoints();
  const isMobile = isMaxLg;
  const [isPushed, setIsPushed] = useState(!isMobile);
  return (
    <Wrapper>
      <TopBackground />
      <Nav {...props} isPushed={isPushed} pushNav={setIsPushed} />
      <Panel {...props} isPushed={isPushed} pushNav={setIsPushed} links={links || defaultLinks} />
      <Container>
        <Inner>{children}</Inner>
      </Container>
      { isMobile && isPushed && <Dim /> }
      <Footer isMobile={isMobile} />
    </Wrapper>
  );
};

export default Menu;
