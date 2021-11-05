import React from "react";
import styled from "styled-components";
import { IconButton } from "@/components/Button";
import { Flex } from "@/components/Box";
import { PanelProps, PushedProps, TranslateProps, UserProps } from "../types";
import { CloseIcon, LogoMainFinixIcon } from "@/components/Icon";
import Chain from "./Chain";
import UserBlock from "./UserBlock";
import { hexToRGB } from "@/style/mixin";
import { ColorStyles } from "@/theme";

interface Props extends PanelProps, PushedProps, UserProps, TranslateProps {}

const MobileHeader = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => hexToRGB(theme.colors[ColorStyles.LIGHTGREY], 0.5)};
`;

const StyledHeader = styled(Flex)`
  display: none;
  align-items: center;
  justify-content: center;
`;

const PanelHeader: React.FC<Props> = ({ userBlock, isMobile, pushNav, ...props }) => {
  return isMobile ? (
    <MobileHeader>{userBlock}</MobileHeader>
  ) : (
    <StyledHeader>
      <LogoMainFinixIcon />
    </StyledHeader>
  );
};

export default PanelHeader;
