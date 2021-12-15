import { ColorStyles } from "../../theme";
import React, { cloneElement, Children, ReactElement } from "react";
import styled from "styled-components";
import { ChainToggleProps } from "./types";

export const scalesValues = {
  sm: {
    height: 28,
    fullWidth: 191,
    minWidth: 73,
  },
  md: {
    height: 32,
    fullWidth: 282,
    minWidth: 163,
  },
};

const StyledChainToggle = styled.div<ChainToggleProps>`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  width: ${({ scale }) => scalesValues[scale || "md"].fullWidth}px;
  height: ${({ scale }) => scalesValues[scale || "md"].height}px;
  box-sizing: content-box;

  :before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    border: solid 1px rgba(224, 224, 224, 0.52);
    background-color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
  }

  > button {
    :first-child {
      width: ${({ scale }) => scalesValues[scale || "md"].minWidth}px;
      /* flex: ${({ scale }) => scalesValues[scale || "md"].minWidth / scalesValues[scale || "md"].fullWidth}; */
    }
    :last-child {
      width: ${({ scale }) => scalesValues[scale || "md"].fullWidth - scalesValues[scale || "md"].minWidth}px;
      /* flex: ${({ scale }) =>
        (scalesValues[scale || "md"].fullWidth - scalesValues[scale || "md"].minWidth) /
        scalesValues[scale || "md"].fullWidth}; */
    }
  }
`;

const ChainToggle: React.FC<ChainToggleProps> = ({ activeIndex = 0, scale = "md", onItemClick, children }) => {
  return (
    <StyledChainToggle scale={scale}>
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          ...child.props,
        });
      })}
    </StyledChainToggle>
  );
};

export default ChainToggle;
