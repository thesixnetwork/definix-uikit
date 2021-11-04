import { ColorStyles } from "@/theme";
import React, { cloneElement, ElementType, isValidElement } from "react";
import styled, { keyframes } from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import StyledButton from "./StyledButton";
import { ButtonProps, ButtonVariants } from "./types";

interface LoadingDot {
  index: number;
}

const bounce = keyframes`
  0% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledLoadingDot = styled.div<LoadingDot>`
  width: 5px;
  height: 5px;
  background-color: ${({ theme }) => theme.colors[ColorStyles.WHITE]};
  border-radius: 5px;
  animation: ${bounce} 1.5s ${({ index }) => index * 0.2}s infinite;
`;

const StyledLoading = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4px;
`;

const Button = <E extends ElementType = "button">(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, children, ...rest } = props;
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;
  const classNames = className ? [className] : [];

  if (isLoading) {
    classNames.push("definix-button--loading");
  }

  if (isDisabled && !isLoading) {
    classNames.push("definix-button--disabled");
  }

  return (
    <StyledButton
      startIcon={startIcon}
      endIcon={endIcon}
      $isLoading={isLoading}
      className={classNames.join(" ")}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      {isLoading ? (
        <StyledLoading>
          {Array(4)
            .fill(0)
            .map((val, index) => (
              <StyledLoadingDot index={index} />
            ))}
        </StyledLoading>
      ) : (
        <>
          {isValidElement(startIcon) &&
            cloneElement(startIcon, {
              mr: "0.5rem",
            })}
          {children}
          {isValidElement(endIcon) &&
            cloneElement(endIcon, {
              ml: "0.5rem",
            })}
        </>
      )}
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: ButtonVariants.RED,
  disabled: false,
};

export default Button;
