import React from "react";
import { IconButton, SettingIcon, useModal } from "src";
import styled from "styled-components";
import { SIDEBAR_WIDTH_FULL_PC, SIDEBAR_WIDTH_FULL_MOBILE } from "../config";
import { useMenu } from "../MenuContext";
import LangSelector from "./LangSelector";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 72px;
  background-color: ${({ theme }) => theme.colors.white};
  width: ${SIDEBAR_WIDTH_FULL_PC}px;
  z-index: 1;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.mobile} {
    position: relative;
    bottom: 0;
    padding: 16px 20px 0;
    width: ${SIDEBAR_WIDTH_FULL_MOBILE}px;
  }
`;

const MobilePanelFooterFixed: React.FC = () => {
  const { currentLang, langs, setLang } = useMenu();
  const { account, Trans, Link, links, onPresentSettingModal } = useMenu();
  return (
    <Container>
      <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
      {account && (
        <IconButton onClick={() => onPresentSettingModal()}>
          <SettingIcon />
        </IconButton>
      )}
    </Container>
  );
};

export default MobilePanelFooterFixed;
