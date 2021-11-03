import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import TabBox from "./TabBox";
import {Card} from "../Card";

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
    name: 'Add',
    component: <div>Add</div>
  },
  {
    name: 'Remove',
    component: <div>Remove</div>
  },
]

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "800px" }}>
      <Row>
        <TabBox
          tabs={tabs}
        >
        </TabBox>
      </Row>
    </div>
  );
};

export const WrappedCard: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <Card>
          <TabBox
            tabs={tabs}
          >
          </TabBox>
        </Card>
      </Row>
    </div>
  );
};
