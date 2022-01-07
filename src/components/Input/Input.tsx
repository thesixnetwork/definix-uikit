import React, { cloneElement, ElementType, isValidElement } from "react";
import { border, color, layout, space } from "styled-system";
import { ColorStyles } from "../../theme";
import styled from "styled-components";
import { InputProps, BaseInputProps } from "./types";
import { Flex } from "../Box";
import { getVariantTextStyle } from "../../theme/text";

const StyledInput = styled.input<BaseInputProps>`
  border: 0;
  display: block;
  height: 100%;
  ${({ theme }) => theme.textStyle.R_14R}
  color: ${({ theme }) => theme.colors.mediumgrey};
  outline: 0;
  padding: 10px 16px;
  width: 100%;
  background-color: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.mediumgrey};
  }

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
  }
  ${getVariantTextStyle()}
  ${color}
`;

const StyledFlex = styled(Flex)<{ isBorder: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: ${({ isBorder, theme }) => (isBorder ? `1px solid ${theme.colors.lightgrey}` : "none")};
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
  const { endIcon, isBorder = true, ...rest } = props;
  return (
    <StyledFlex isBorder={isBorder}>
      <StyledInput {...rest} />
      {isValidElement(endIcon) &&
        cloneElement(endIcon, {
          ml: "0.5rem",
        })}
    </StyledFlex>
  );
};

export default Input;
