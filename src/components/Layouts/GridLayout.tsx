import React from 'react';
import styled from "styled-components";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 32px;
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 32px;
  }
  background-color: rgba(255, 0, 0, 0.1);
  > * {
    background-color: rgba(0, 255, 255, 0.1);
  }
`;

export default GridLayout;