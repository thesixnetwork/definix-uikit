import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import SearchInput from "./SearchInput";
import { SettingIcon } from "../Icon";
import { Text } from "../Text";

export default {
  title: "Components/SearchInput",
  component: SearchInput,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  return (
    <>
      <div
        style={{
          margin: "50px",
          width: "200px",
        }}
      >
        <SearchInput
          type="text"
          placeholder="Token name"
          onSearch={(keyword: string) => {
            setSearchKeyword(keyword);
          }}
        />

        <div>{!!searchKeyword.length ? "searching... " + searchKeyword : "input keyword!"}</div>
      </div>
    </>
  );
};
