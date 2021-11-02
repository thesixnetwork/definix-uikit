import React, { cloneElement, isValidElement } from "react";
import styled from "styled-components";
import { Text } from "../Text";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent } from "../Button/types";
import { ChainToggleItemProps } from "./types";
import { scalesValues } from "./ChainToggle";

interface ActiveButtonProps extends BaseButtonProps {
  scale?: 'sm' | 'md';
}

interface InactiveButtonProps extends ActiveButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  flex: auto;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ scale }) => scalesValues[scale || 'md'].minWidth};
`;

const ActiveButton = styled(Button)<ActiveButtonProps>`
  flex: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.brownscale.brown};
  min-width: ${({ scale }) => scalesValues[scale || 'md'].minWidth};
`;

const ChainToggleItem: PolymorphicComponent<ChainToggleItemProps, "button"> = ({
  isActive = false,
  as,
  label,
  startIcon,
  ...props
}: ChainToggleItemProps) => {
  if (!isActive) {
    return (
      <InactiveButton
        variant="brown"
        forwardedAs={as}
        {...props}
      >
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            mr: "0.5rem",
          })}
        <Text ml="7px" color="greyscale.deepgrey" textStyle="R_12M">{label}</Text>
      </InactiveButton>
    );
  }

  return <ActiveButton as={as} variant="brown" {...props}>
    {isValidElement(startIcon) &&
      cloneElement(startIcon, {
        mr: "0.5rem",
      })}
    <Text ml="7px" color="greyscale.white" textStyle="R_12B">{label}</Text>
  </ActiveButton>;
};

export default ChainToggleItem;
