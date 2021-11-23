import React, { cloneElement, ElementType, isValidElement, useState } from "react";
import { textStyle, ColorStyles } from "../../theme";
import styled, { css } from "styled-components";
import { SearchInputProps } from "./types";
import { Flex } from "../Box";
import { layout } from "styled-system";
import { SearchIcon } from "../Icon";
import { IconButton } from "../Button";

const StyledInput = styled.input`
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
    ${css(textStyle.R_14R)}
    color: ${({ theme }) => theme.colors[ColorStyles.MEDIUMGREY]};
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
`;

const SearchInput = <E extends ElementType = "input">(props: SearchInputProps): JSX.Element => {
  const [keyword, setKeyword] = useState("");
  const { onSearch, ...rest } = props;
  return (
    <StyledFlex>
      <StyledInput
        {...rest}
        defaultValue={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.code.toLowerCase() === "enter") onSearch(keyword);
        }}
      />
      <IconButton variant="transparent" startIcon={<SearchIcon />} onClick={() => onSearch(keyword)} />
    </StyledFlex>
  );
};

export default SearchInput;