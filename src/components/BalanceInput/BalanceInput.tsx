import React from "react";
import { textStyle, ColorStyles } from "../../theme";
import styled, { css } from "styled-components";
import { BalanceInputProps } from "./types";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  background-color: white;
  border: none;
  ${css(textStyle.R_28M)}
  color: ${({ theme }) => theme.colors[ColorStyles.BLACK]};
  outline: 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors[ColorStyles.MEDIUMGREY]};
  }

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
  }
`;

const BalanceInput = (props: BalanceInputProps): JSX.Element => {
  const { onChange, ...rest } = props
  return <StyledInput {...rest} pattern="^[0-9]*[.,]?[0-9]*$" onChange={(e) => {
    if (e.target.validity.valid) {
      typeof onChange === 'function' && onChange(e)
    }
  }} />;
};

export default BalanceInput;
