import React from "react";
import styled from "styled-components";
import { pxToRem } from "../../style/mixin";
import { breakpointMap } from "../../theme/base";
import { SIDEBAR_WIDTH_FULL } from "../../widgets/Menu/config";
import Footer from "../../widgets/Menu/components/Footer";
import { useMatchBreakpoints } from "@/hooks";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 ${pxToRem(20)};

  border: 1px solid red;
  background-color: ${({ theme }) => theme.colors.yellowBg2};
  overflow: hidden;

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
  height: 370px;
  background-color: ${({ theme }) => theme.colors.yellowBg1};
`;

const ContainerLayout: React.FC = ({ children }) => {
  const { isMobile } = useMatchBreakpoints();
  return (
    <Wrapper>
      <Container>
        <TopBackground />
        <div style={{position: 'relative'}}>
          {children}
        </div>
      </Container>
    </Wrapper>
  );
};

export default ContainerLayout;
