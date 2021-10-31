import React from 'react';
import styled from "styled-components";
import { pxToRem } from '../../style/mixin';
import { breakpointMap } from '../../theme/base';
import { SIDEBAR_WIDTH_FULL } from '../../widgets/Menu/config';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
`

const Container = styled.div`
  position: relative;
  margin: 0 ${pxToRem(20)};
  
  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: ${pxToRem(SIDEBAR_WIDTH_FULL)};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    width: ${breakpointMap.lg - SIDEBAR_WIDTH_FULL}px;
    max-width: ${breakpointMap.lg - SIDEBAR_WIDTH_FULL}px;
  }

  @media (min-width: ${breakpointMap.lg + SIDEBAR_WIDTH_FULL}px) {
    margin: 0 auto;
  }
`

const ContainerLayout: React.FC = ({ children }) => {
  return <Wrapper>
    <Container>
      {children}
    </Container>
  </Wrapper>;
}

export default ContainerLayout;