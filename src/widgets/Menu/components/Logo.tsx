import React from "react";
import styled from "styled-components";
import Flex from "../../../components/Box/Flex";
import ImgFinixLog from '../icons/finix.svg';

const StyledFlex = styled(Flex)`
  width: 100%;
  justify-content: center;
`

const Logo: React.FC = () => {
  return (
    <StyledFlex>
      <img src={ImgFinixLog} alt="" />
    </StyledFlex>
  );
};

export default React.memo(Logo);
