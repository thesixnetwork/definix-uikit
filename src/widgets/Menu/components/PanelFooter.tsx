import React from "react";
import { IconButton, SettingIcon, useModal } from "src";
import styled from "styled-components";
import { SIDEBAR_WIDTH_FULL_PC, SIDEBAR_WIDTH_FULL_MOBILE } from "../config";
import { useMenu } from "../MenuContext";
import { PushedProps } from "../types";
import LangSelector from "./LangSelector";
import SettingsModal from "./SettingsModal";

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  height: 40px;
  width: ${SIDEBAR_WIDTH_FULL_PC}px;
  z-index: 1;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.mobile} {
    position: relative;
    bottom: 20px;
    padding: 0 20px;
    width: ${SIDEBAR_WIDTH_FULL_MOBILE}px;
  }
`;

const PanelFooter: React.FC = () => {
  const { currentLang, langs, setLang } = useMenu();
  const { Trans, setDeadline, deadline, setUserslippageTolerance, userSlippageTolerance, Link, links } =
    useMenu();
  const [onPresentSettingModal] = useModal(
    <SettingsModal
      {...{
        Trans,
        setDeadline,
        deadline,
        setUserslippageTolerance,
        userSlippageTolerance,
      }}
    />,
    false
  );
  return (
    <Container>
      <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
      <IconButton onClick={() => onPresentSettingModal()}>
        <SettingIcon />
      </IconButton>
    </Container>
  );
};

export default PanelFooter;
