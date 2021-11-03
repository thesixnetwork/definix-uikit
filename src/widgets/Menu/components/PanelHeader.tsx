import React from "react";
import styled from "styled-components";
import { IconButton } from "@/components/Button";
import { Flex } from "@/components/Box";
import { PanelProps, PushedProps, UserProps } from "../types";
import { CloseIcon, LogoMainFinixIcon } from "@/components/Icon";
import Chain from "./Chain";
import UserBlock from "./UserBlock";
import { hexToRGB } from "@/style/mixin";

interface Props extends PanelProps, PushedProps, UserProps {}

const MobileHeader = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => hexToRGB(theme.colors.greyscale.lightgrey, 0.5)};
`

const StyledHeader = styled(Flex)`
  display: none;
  align-items: center;
  justify-content: center;

`

const PanelHeader: React.FC<Props> = ({ isMobile, pushNav, ...props }) => {
  return isMobile ? <MobileHeader>
    <Flex pl="4px" width="100%" alignItems="center" justifyContent="space-between">
      <Chain toggleScale="sm" />
      <IconButton startIcon={<CloseIcon />} onClick={() => pushNav(false)} />
    </Flex>
    <UserBlock isMobile={isMobile} {...props} />
    </MobileHeader> : 
    <StyledHeader>
      <LogoMainFinixIcon />
    </StyledHeader>;
};

export default PanelHeader;
