import { ColorStyles } from "../../theme";
import React, { cloneElement, Children, ReactElement } from "react";
import styled from "styled-components";
import { ChainToggleProps } from "./types";

export const scalesValues = {
  sm: {
    height: "28px",
    fullWidth: "201px",
    minWidth: "86px",
  },
  md: {
    height: "32px",
    fullWidth: "310px",
    minWidth: "146px",
  },
};

const StyledChainToggle = styled.div<ChainToggleProps>`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  width: ${({ toggleScale }) => scalesValues[toggleScale || "md"].fullWidth};
  height: ${({ toggleScale }) => scalesValues[toggleScale || "md"].height};
  border-radius: 16px;
  border: solid 1px ${({ theme }) => theme.colors[ColorStyles.LIGHTGREY]};
  background-color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
`;

const ChainToggle: React.FC<ChainToggleProps> = ({ activeIndex = 0, toggleScale = "md", onItemClick, children }) => {
  return (
    <StyledChainToggle toggleScale={toggleScale}>
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          toggleScale,
        });
      })}
    </StyledChainToggle>
  );
};

export default ChainToggle;
