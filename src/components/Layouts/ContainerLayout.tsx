import React from "react";
import styled from "styled-components";
import { pxToRem } from "../../style/mixin";
import { breakpointMap } from "../../theme/base";
import { SIDEBAR_WIDTH_FULL } from "../../widgets/Menu/config";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  background-color: ${({theme}) => theme.colors.yellowBg2};
`;

const Container = styled.div`
  position: relative;
  margin: 0 ${pxToRem(20)};

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: ${SIDEBAR_WIDTH_FULL}px;
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    width: ${breakpointMap.xl - SIDEBAR_WIDTH_FULL}px;
    max-width: ${breakpointMap.xl - SIDEBAR_WIDTH_FULL}px;
  }

  @media (min-width: ${breakpointMap.xl + SIDEBAR_WIDTH_FULL}px) {
    margin: 0 auto;
  }
`;

const TopBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 360px;
  background-color: ${({theme}) => theme.colors.yellowBg1};
`; 

const ContainerLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <TopBackground />
      <Container>
        {children}
      </Container>
    </Wrapper>
  );
};

export default ContainerLayout;
