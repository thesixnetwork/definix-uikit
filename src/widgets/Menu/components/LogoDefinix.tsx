import React from "react";
import styled from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoMainFinixIcon } from "../icons";

const StyledFlex = styled(Flex)`
  width: 100%;
  justify-content: center;
`

const LogoDefinix: React.FC = () => {
  return (
    <StyledFlex>
      <img src={LogoMainFinixIcon} alt="" />
    </StyledFlex>
  );
};

export default React.memo(LogoDefinix);
