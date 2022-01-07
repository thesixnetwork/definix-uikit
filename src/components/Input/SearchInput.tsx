import React, { ChangeEvent, ElementType, KeyboardEvent, useState } from "react";
import { SearchInputProps } from "./types";
import Input from "./Input";
import { SearchIcon, ResetIcon } from "../Icon";
import { IconButton } from "../Button";

const SearchInput = <E extends ElementType = "input">(props: SearchInputProps): JSX.Element => {
  const [keyword, setKeyword] = useState("");
  const { onSearch, onReset, ...rest } = props;
  return (
    <Input color="black" defaultValue={keyword} value={keyword} onChange={(e: ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)} onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
      if (e.code.toLowerCase() === "enter") onSearch(keyword);
    }} endIcon={<>
      {keyword.length > 0 && (
        <IconButton
          mr={12}
          p={0}
          onClick={() => {
            setKeyword("");
            onReset && onReset();
          }}
        >
          <ResetIcon />
        </IconButton>
      )}
      <IconButton p={0} onClick={() => onSearch(keyword)}>
        <SearchIcon />
      </IconButton>
    </>} />
  );
};

export default SearchInput;
