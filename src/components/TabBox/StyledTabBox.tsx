import styled, { DefaultTheme } from "styled-components";
// import { space } from "styled-system";
import Flex from '../Box/Flex'

interface StyledTabBoxProps {
  theme: DefaultTheme;
}

export const Wrap = styled(Flex)`
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  
`;

export const StyledContentArea = styled.div<StyledTabBoxProps>`
  width: 100%;
  
`;

export const StyledTabArea = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledBorderBottom = styled.div<{isSelected: boolean;}>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: ${({isSelected, theme}) => isSelected ? theme.colors.greyscale.black : theme.colors.greyscale.lightgrey};
`;

export const StyledTab = styled.div<{isSelected: boolean;}>`
  position: relative;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  color: ${({isSelected, theme}) => isSelected ? theme.colors.greyscale.black : theme.colors.greyscale.lightgrey};

  padding: 13px 26px;
  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 18px 26px;
  }
`;


export default undefined;
