import React from "react";
import styled from "styled-components";
import { IconButton } from "@/components/Button";
import { Flex } from "@/components/Box";
import { PanelProps, PushedProps, UserProps } from "../types";
import { LogoMainFinixIcon, SettingIcon } from "../../../components/Icon";
import Chain from "./Chain";
import UserBlock from "./UserBlock";

interface Props extends PanelProps, PushedProps, UserProps {}

const MobileHeader = styled(Flex)`

  ${({ theme }) => theme.mediaQueries.lg} {
    display: none;
  }
`

const StyledHeader = styled(Flex)`
  display: none;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
  }
`

const PanelHeader: React.FC<Props> = ({ isMobile, pushNav, ...props }) => {
  return isMobile ? <MobileHeader>
    <Flex>
      <Chain toggleScale="sm" />
      <IconButton startIcon={<SettingIcon />} onClick={() => pushNav(false)} />
    </Flex>
    <Flex>
      <UserBlock {...props} />
    </Flex>
    </MobileHeader> : 
    <StyledHeader>
      <LogoMainFinixIcon />
    </StyledHeader>;
};

export default PanelHeader;
