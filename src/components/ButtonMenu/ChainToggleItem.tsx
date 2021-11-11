import React, { cloneElement, isValidElement } from "react";
import styled, { css } from "styled-components";
import { Text } from "../Text";
import { PolymorphicComponent } from "../Button/types";
import { ChainToggleItemProps } from "./types";
import { ColorStyles, textStyle } from "../../theme";

const StyledButton = styled.button`
  position: relative;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
`

const InactiveButton = styled(StyledButton)`
  color: ${({ theme }) => theme.colors[ColorStyles.DEEPGREY]};
  ${css(textStyle.R_12M)}
`;

const ActiveButton = styled(StyledButton)`
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors[ColorStyles.BROWN]};
  background-color: ${({ theme }) => theme.colors[ColorStyles.BROWN]};
  color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
  ${css(textStyle.R_12B)}
`;

const ChainToggleItem: PolymorphicComponent<ChainToggleItemProps, "button"> = ({
  isActive = false,
  children,
  startIcon,
  scale,
}: ChainToggleItemProps) => {
  if (!isActive) {
    return (
      <InactiveButton>
        {
          isValidElement(startIcon) &&
          cloneElement(startIcon, {
            width: scale === "md" ? "22" : "20",
            height: scale === "md" ? "22" : "20",
            mr: "0.5rem",
          })
        }
        <Text ml="7px">
          {children}
        </Text>
      </InactiveButton>
    );
  }

  return (
    <ActiveButton>
      {
        isValidElement(startIcon) &&
        cloneElement(startIcon, {
          width: scale === "md" ? "22" : "20",
          height: scale === "md" ? "22" : "20",
          mr: "0.5rem",
        })
      }
      <Text ml="7px">
        {children}
      </Text>
    </ActiveButton>
  );
};

export default ChainToggleItem;
