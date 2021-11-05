import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Divider from "./Divider";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/Divider[NEW]",
  component: Divider,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "800px" }}>
      <Divider/>
    </div>
  );
};
