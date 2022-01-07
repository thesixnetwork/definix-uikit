import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Input from "./Input";
import BalanceInput from "./BalanceInput";
import SearchInput from "./SearchInput";
import { SettingIcon } from "../Icon";
import { Text } from "../Text";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [value1, setValue1] = useState<string>('Text');
  const [value2, setValue2] = useState<string>('Text');
  return (
    <>
      <div
        style={{
          width: "300px",
          margin: "20px"
        }}
      >
        <div style={{
          marginBottom: "10px"
        }}>With Icon</div>
        <Input type="text" value={value1} placeholder="placeholder" onChange={(e) => setValue1(e.target.value)} endIcon={<SettingIcon />} />
      </div>
      <div
        style={{
          width: "300px",
          margin: "20px"
        }}
      >
        <div style={{
          marginBottom: "10px"
        }}>With Text</div>
        <Input type="text" value={value2} placeholder="placeholder" onChange={(e) => setValue2(e.target.value)} endIcon={<Text>Minutes</Text>} />
      </div>
    </>
  );
};


export const Balance: React.FC = () => {
  const [value1, setValue1] = useState<string>('0.5');
  const [value2, setValue2] = useState<string>('1234');
  return (
    <>
      <div
        style={{
          width: "300px",
          margin: "20px"
        }}
      >
        <div style={{
          marginBottom: "10px"
        }}>With Icon</div>
        <BalanceInput type="text" value={value1} placeholder="placeholder" onChange={(e) => setValue1(e.target.value)} endIcon={<SettingIcon />} />
      </div>
      <div
        style={{
          width: "300px",
          margin: "20px"
        }}
      >
        <div style={{
          marginBottom: "10px"
        }}>Without Icon</div>
        <BalanceInput type="text" value={value2} placeholder="placeholder" onChange={(e) => setValue2(e.target.value)} />
      </div>
    </>
  );
};


export const Search: React.FC = () => {
  return (
    <>
      <div
        style={{
          width: "300px",
          margin: "20px"
        }}
      >
        <div style={{
          marginBottom: "10px"
        }}>With Icon</div>
        <SearchInput type="text" placeholder="placeholder" onSearch={(keyword) => {
          console.log('onSearch', keyword)
        }} onReset={() => {
          console.log('onReset')
        }} />
      </div>
    </>
  );
};
