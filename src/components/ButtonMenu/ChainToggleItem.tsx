import React, { cloneElement, isValidElement } from "react";
import styled from "styled-components";
import { Text } from "../Text";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent } from "../Button/types";
import { ChainToggleItemProps } from "./types";
import { scalesValues } from "./ChainToggle";
import { ColorStyles } from "@/theme";

interface ActiveButtonProps extends BaseButtonProps {
  toggleScale?: "sm" | "md";
  forwardedAs: BaseButtonProps["as"];
}

interface InactiveButtonProps extends ActiveButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  flex: auto;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: ${({ toggleScale }) => (toggleScale === "md" ? "7px" : "5px")};
  min-width: ${({ toggleScale }) => scalesValues[toggleScale || "md"].minWidth};
`;

const ActiveButton: PolymorphicComponent<ActiveButtonProps, "button"> = styled(Button)<ActiveButtonProps>`
  flex: auto;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  padding-left: ${({ toggleScale }) => (toggleScale === "md" ? "7px" : "5px")};
  min-width: ${({ toggleScale }) => scalesValues[toggleScale || "md"].minWidth};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors[ColorStyles.BROWN]};
`;

const StyledText = styled(Text)`
  flex: 1;
`;

const ChainToggleItem: PolymorphicComponent<ChainToggleItemProps, "button"> = ({
  isActive = false,
  as,
  label,
  startIcon,
  toggleScale,
  ...props
}: ChainToggleItemProps) => {
  if (!isActive) {
    return (
      <InactiveButton
        variant="brown"
        forwardedAs={as}
        toggleScale={toggleScale}
        startIcon={
          isValidElement(startIcon) &&
          cloneElement(startIcon, {
            width: toggleScale === "md" ? "22px" : "20px",
            height: toggleScale === "md" ? "22px" : "20px",
            viewBox: "0 0 22 22",
            mr: "0.5rem",
          })
        }
        {...props}
      >
        <StyledText ml="7px" color="greyscale.deepgrey" textStyle="R_12M">
          {label}
        </StyledText>
      </InactiveButton>
    );
  }

  return (
    <ActiveButton
      forwardedAs={as}
      startIcon={
        isValidElement(startIcon) &&
        cloneElement(startIcon, {
          width: toggleScale === "md" ? "22px" : "20px",
          height: toggleScale === "md" ? "22px" : "20px",
          viewBox: "0 0 22 22",
          mr: "0.5rem",
        })
      }
      variant="brown"
      toggleScale={toggleScale}
      {...props}
    >
      <StyledText ml="7px" color="greyscale.white" textStyle="R_12B">
        {label}
      </StyledText>
    </ActiveButton>
  );
};

export default ChainToggleItem;
