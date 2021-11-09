import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Noti, { NotiType } from "./Noti";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/Noti[NEW]",
  component: Noti,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "800px" }}>
      <Row>
        <Noti type={NotiType.ALERT}>Insufficient balance</Noti>
      </Row>
      <Row>
        <Noti type={NotiType.GUIDE}>Insufficient balance</Noti>
      </Row>
    </div>
  );
};
