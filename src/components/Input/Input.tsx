import React, { cloneElement, ElementType, isValidElement } from "react";
import { textStyle, ColorStyles } from "../../theme";
import styled, { css } from "styled-components";
import { InputProps, BaseInputProps } from "./types";
import { Flex } from "../Box";
import { border, color, layout, position, space } from "styled-system";

const StyledInput = styled.input<BaseInputProps>`
  border: 0;
  display: block;
  height: 100%;
  ${css(textStyle.R_14B)}
  color: ${({ theme }) => theme.colors[ColorStyles.MEDIUMGREY]};
  outline: 0;
  padding: 10px 16px;
  width: 100%;
  background-color: transparent;

  &::placeholder {
  }

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
  }

  /* &:focus:not(:disabled) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  } */
`;

const StyledFlex = styled(Flex)`
  position: relative;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors[ColorStyles.LIGHTGREY]};
  border-radius: 8px;
  padding-right: 16px;
  ${layout}
  ${space}
`;

StyledInput.defaultProps = {
  isSuccess: false,
  isWarning: false,
};

const Input = <E extends ElementType = "input">(props: InputProps<E>): JSX.Element => {
  const { endIcon, ...rest } = props;
  return (
    <StyledFlex>
      <StyledInput {...rest} />
      {isValidElement(endIcon) &&
        cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </StyledFlex>
  );
};

export default Input;
