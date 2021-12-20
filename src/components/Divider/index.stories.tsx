import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Divider from "./Divider";
import VDivider from "./VDivider";
import { Flex } from "../Box";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "800px" }}>
      <Divider />

      <Divider className="mt-s40" />

      <Flex py="S_12">
        A
        <VDivider mx="S_20" />
        B
        <VDivider mx="S_20" color="primary" />
        C
        <VDivider mx="S_20" color="secondary" />D
      </Flex>
    </div>
  );
};
