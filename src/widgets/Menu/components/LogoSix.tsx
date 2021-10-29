import React from "react";
import styled from "styled-components";
import Flex from "../../../components/Box/Flex";
import { LogoFooterSixIcon } from "../icons";

const StyledFlex = styled(Flex)`
  width: 100%;
  justify-content: center;
`

const LogoSix: React.FC = () => {
  return (
    <StyledFlex>
      <img src={LogoFooterSixIcon} alt="" />
    </StyledFlex>
  );
};

export default React.memo(LogoSix);
