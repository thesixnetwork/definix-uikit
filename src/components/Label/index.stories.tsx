import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Label from "./Label";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/Label[NEW]",
  component: Label,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "800px" }}>
      <Row>
        <Label type="noti">NOTICE</Label>
        <Label type="token">FINIX</Label>
      </Row>
    </div>
  );
};
