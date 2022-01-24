import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../hooks";
import Panel from "./components/Panel";
import { MenuProps } from "./types";
import theme from "../../theme/base";
import {
  NAV_HEIGHT_PC,
  NAV_HEIGHT_MOBILE,
  INNER_MARGIN_PC,
  INNER_MARGIN_MOBILE,
  SIDEBAR_WIDTH_FULL_PC,
} from "./config";
import { pxToRem } from "../../style/mixin";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import MenuProvider, { useMenu } from "./MenuContext";
import { Overlay } from "src/components/Overlay";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.yellowBg2};
`;

const Container = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndices.inner};
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
  position: relative;
  padding: ${NAV_HEIGHT_PC + 28}px ${pxToRem(INNER_MARGIN_PC)} 0;
  min-height: calc(100vh - ${NAV_HEIGHT_PC}px);
  /* outline: 1px solid blue; */
  ${({ theme }) => theme.mediaQueries.mobileXl} {
    padding: ${NAV_HEIGHT_MOBILE + 28}px ${pxToRem(INNER_MARGIN_MOBILE)} 0;
  }
`;

const Menu: React.FC<MenuProps> = (props) => {
  const { children } = props;
  const { isMaxLg } = useMatchBreakpoints();
  const isMobile = isMaxLg;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const { setState } = useMenu();

  useEffect(() => {
    setState(props);
  }, [props]);

  return (
    <Wrapper>
      <TopBackground />
      <Nav isPushed={isPushed} pushNav={setIsPushed} price={props?.finixPrice || "0.0000"} />
      <Panel isPushed={isPushed} pushNav={setIsPushed} />
      <Container>
        <Inner>{children}</Inner>
      </Container>
      {isMobile && isPushed && <Overlay zIndex={theme.zIndices.sidebar - 1} show onClick={() => setIsPushed(false)} />}
      <Footer />
    </Wrapper>
  );
};

const WrapMenu: React.FC<MenuProps> = (props) => {
  return (
    <MenuProvider {...props}>
      <Menu {...props} />
    </MenuProvider>
  );
};

export default WrapMenu;
