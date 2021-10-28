import React from 'react';
import styled from "styled-components";
import { pxToRem } from '../../style/mixin';
import { BREAKPOINTS } from '../../style/variables';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
`

const Container = styled.div`
  position: relative;
  margin-left: ${pxToRem(260)};
  margin-right: ${pxToRem(60)};

  @media (min-width: ${BREAKPOINTS.MIDDLE}) {
    width: ${BREAKPOINTS.MIDDLE};
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