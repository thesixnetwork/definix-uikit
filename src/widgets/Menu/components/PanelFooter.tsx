import React from "react";
import styled from "styled-components";
import { SIDEBAR_WIDTH_FULL_PC, SIDEBAR_WIDTH_FULL_MOBILE } from "../config";
import { PanelProps, PushedProps } from "../types";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  height: 40px;
  width: ${SIDEBAR_WIDTH_FULL_PC}px;
  z-index: 1;
  padding: 0 16px;

  ${({ theme }) => theme.mediaQueries.mobile} {
    position: relative;
    bottom: 20px;
    padding: 0 20px;
    width: ${SIDEBAR_WIDTH_FULL_MOBILE}px;
  }
`;

const PanelFooter: React.FC<Props> = ({ isPushed, pushNav, currentLang, langs, setLang }) => {
  return (
    <Container>
      <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
    </Container>
  );
};

export default PanelFooter;
