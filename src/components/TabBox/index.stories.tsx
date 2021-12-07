import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import TabBox from "./TabBox";
import Tabs from "./Tabs";
import { Card } from "../Card";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/TabBox[NEW]",
  component: TabBox,
  argTypes: {},
} as Meta;

const tabs = [
  {
    name: "Add",
    component: <div>Add</div>,
  },
  {
    name: "Remove",
    component: <div>Remove</div>,
  },
];

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "800px" }}>
      <Row>
        <TabBox tabs={tabs}></TabBox>
      </Row>
      <Row>
        <TabBox tabs={tabs} equal></TabBox>
      </Row>
      <Row>
        <TabBox tabs={tabs} small equal></TabBox>
      </Row>
    </div>
  );
};

export const WrappedCard: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <Card>
          <TabBox tabs={tabs}></TabBox>
        </Card>
      </Row>
    </div>
  );
};

export const TabAndContent: React.FC = () => {
  const tabNames = useMemo(() => tabs.map(({ name }) => name), [tabs]);
  const [curTab, setCurTab] = useState<string>(tabNames[0]);
  const Add = tabs[0].component;
  const Remove = tabs[1].component;

  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <Tabs tabs={tabNames} curTab={curTab} setCurTab={setCurTab} />
      </Row>
      <Row>
        <Tabs tabs={tabNames} curTab={curTab} setCurTab={setCurTab} small equal />
      </Row>
      <Row>{tabs.map(({ name, component }) => (curTab === name ? component : null))}</Row>
    </div>
  );
};
