import React from "react";
import styled from "styled-components";
import { hexToRGB } from "../../../style/mixin";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_FULL, SIDEBAR_ZINDEX } from "../config";
import { PanelProps, PushedProps, UserProps } from "../types";
import PanelHeader from "./PanelHeader";
import { ColorStyles } from "@/theme";

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
  width: ${SIDEBAR_WIDTH_FULL}px;
  height: 100vh;
  transition: transform 0.2s;
  border-right: ${({ theme }) => `1px solid ${hexToRGB(theme.colors[ColorStyles.PALE], 0.3)}`};
  z-index: ${SIDEBAR_ZINDEX};
  overflow: initial;

  ${({ isMobile, isPushed }) =>
    isMobile &&
    `
    overflow-y: scroll;
    padding-top: 16px;

    width: 300px;
    transform: translateX(${isPushed ? "0" : "-100%"});
  `}
`;

const Panel: React.FC<Props> = (props) => {
  return (
    <StyledPanel {...props}>
      <PanelHeader {...props} />
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
