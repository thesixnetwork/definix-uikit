import React, { useEffect } from "react";
import styled from "styled-components";
import { hexToRGB } from "../../../style/mixin";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_FULL_PC, SIDEBAR_WIDTH_FULL_MOBILE, SIDEBAR_ZINDEX } from "../config";
import { PanelProps } from "../types";
import PanelHeader from "./PanelHeader";
import { ColorStyles } from "../../../theme";
import MobilePanelHeaderFixed from "./MobilePanelHeaderFixed";
import { useMatchBreakpoints } from "../../../hooks";

const StyledPanel = styled.div<{ isPushed: boolean }>`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  padding-top: 30px;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
  width: ${SIDEBAR_WIDTH_FULL_PC}px;
  transition: transform 0.2s;
  border-right: ${({ theme }) => `1px solid ${hexToRGB(theme.colors[ColorStyles.PALE], 0.3)}`};
  z-index: ${SIDEBAR_ZINDEX};
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.mobile} {
    padding-top: 16px;

    width: ${SIDEBAR_WIDTH_FULL_MOBILE}px;
    transform: translateX(${({ isPushed }) => (isPushed ? "0" : "-100%")});
  }
`;

const WrapScrollPanel = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;

  ::-webkit-scrollbar {
    width: 0;
  }

  ${({ theme }) => theme.mediaQueries.mobile} {
  }
`;

const ContainerScrollPanel = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const WrapBodyFooter = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Panel: React.FC<PanelProps> = (props) => {
  const { pushNav } = props;
  const { isMaxLg } = useMatchBreakpoints();
  const isMobile = isMaxLg;

  useEffect(() => {
    if (isMobile) {
      pushNav(true);
    }
  }, [isMobile]);

  return isMobile ? (
    <StyledPanel {...props}>
      <MobilePanelHeaderFixed {...props} />
      <WrapScrollPanel>
        <ContainerScrollPanel>
          <PanelHeader {...props} />
          <WrapBodyFooter>
            <PanelBody {...props} />
            <PanelFooter {...props} />
          </WrapBodyFooter>
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
