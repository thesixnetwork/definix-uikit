import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Input from "./Input";
import { SettingIcon } from "../Icon";
import { Text } from "../Text";

export default {
  title: "Components/Input[NEW]",
  component: Input,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <>
      <div
        style={{
          width: "200px",
        }}
      >
        <Input type="text" value="Value" endIcon={<SettingIcon />} />
      </div>
      <div
        style={{
          width: "200px",
        }}
      >
        <Input type="text" value="Value" endIcon={<Text>Minutes</Text>} />
      </div>
    </>
  );
};
