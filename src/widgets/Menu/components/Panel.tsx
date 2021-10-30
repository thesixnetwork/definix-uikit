import React from "react";
import styled from "styled-components";
import { hexToRGB } from "../../../style/mixin";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_FULL, SIDEBAR_ZINDEX } from "../config";
import { PanelProps, PushedProps } from "../types";
import { LogoMainFinixIcon } from "../icons";
import { Flex } from "../../..";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  padding-top: 30px;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.greyscale.white};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: width 0.2s;
  border-right: ${({ isPushed, theme }) => (isPushed ? `1px solid ${ hexToRGB(theme.colors.brownscale.pale, 0.3) }` : 0)};
  z-index: ${SIDEBAR_ZINDEX};
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <Flex alignItems="center" justifyContent="center">
        <LogoMainFinixIcon />
      </Flex>
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
