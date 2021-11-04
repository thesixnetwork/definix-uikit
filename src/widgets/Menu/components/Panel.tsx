import React from "react";
import styled from "styled-components";
import { hexToRGB } from "../../../style/mixin";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_FULL_PC, SIDEBAR_WIDTH_FULL_MOBILE, SIDEBAR_ZINDEX } from "../config";
import { PanelProps, PushedProps, UserProps } from "../types";
import PanelHeader from "./PanelHeader";
import { ColorStyles } from "@/theme";
import MobilePanelHeaderFixed from "./MobilePanelHeaderFixed";

interface Props extends PanelProps, PushedProps, UserProps {}

const StyledPanel = styled.div<{ isPushed: boolean; isMobile: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  /* display: none; */
  padding-top: 30px;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
  width: ${SIDEBAR_WIDTH_FULL_PC}px;
  height: 100vh;
  transition: transform 0.2s;
  border-right: ${({ theme }) => `1px solid ${hexToRGB(theme.colors[ColorStyles.PALE], 0.3)}`};
  z-index: ${SIDEBAR_ZINDEX};
  overflow: initial;

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding-top: 16px;

    width: ${SIDEBAR_WIDTH_FULL_MOBILE}px;
    transform: translateX(${({ isPushed }) => isPushed ? "0" : "-100%"});
  }
`;

const WrapScrollPanel = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 44px);
  overflow-y: scroll;

  ${({ theme }) => theme.mediaQueries.mobile} {
  }
`

const ContainerScrollPanel = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`

const Panel: React.FC<Props> = (props) => {
  const { isMobile } = props;
  return isMobile ? (
    <StyledPanel {...props}>
      <MobilePanelHeaderFixed {...props} />
      <WrapScrollPanel>
        <ContainerScrollPanel>
          <PanelHeader {...props} />
          <PanelBody {...props} />
          <PanelFooter {...props} />
        </ContainerScrollPanel>
      </WrapScrollPanel>
    </StyledPanel>
  ) : (
    <StyledPanel {...props}>
      <PanelHeader {...props} />
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
