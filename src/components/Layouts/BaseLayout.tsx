import React from "react";
import styled from "styled-components";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 32px;
  ${({ theme }) => theme.mediaQueries.sm} {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 32px;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 32px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 32px;
  }
`;

// const BaseLayout: React.FC = ({ children }) => {
//   return <Wrapper>
//     <Container>
//       <GridLayout>{children}</GridLayout>
//     </Container>
//   </Wrapper>;
// }
export default GridLayout;
