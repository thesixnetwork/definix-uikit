import React from "react";
import styled from "styled-components";
import { pxToRem } from '../../style/mixin';
import { breakpointMap } from '../../theme/base';
import { SIDEBAR_WIDTH_FULL } from '../../widgets/Menu/config';
import Flex from '../Box/Flex';
import Box from '../Box/Box';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
`;

const Container = styled.div`
  position: relative;
  margin: 0 ${pxToRem(20)};

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-left: ${pxToRem(SIDEBAR_WIDTH_FULL)};
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
  width: 100%;
  height: 370px;
  background-color: ${({theme}) => theme.colors.yellowBg1};
`;

const BottomBackground = styled.div`
  width: 100%;
  flex: 1 1 0;
  background-color: ${({theme}) => theme.colors.yellowBg2};
`;

const ContainerLayout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>
        <Flex
          position="relative"
          flexDirection="column"
          alignItems="flex-start"
          maxWidth="1280px"
          height="100%"
        >
          <Flex
            position="absolute"
            flexDirection="column"
            width= "100%"
            height="100%"
          >
            <TopBackground />
            <BottomBackground />
          </Flex>
          {children}
        </Flex>
      </Container>
    </Wrapper>
  );
}

export default ContainerLayout;
