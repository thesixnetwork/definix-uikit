import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import TitleSet from "./TitleSet";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/TitleSet[NEW]",
  component: TitleSet,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "800px" }}>
      <Row>
        <TitleSet
          title="Swap"
          description="Trade tokens in an instant."
          linkLabel="Learn to swap."
          link="http://www.naver.com"
        />
      </Row>
      <Row>
        <TitleSet
          title="Deposit in the Pool"
          description="By depositing a single token in the pool to get FINIX with high interest."
        />
      </Row>
    </div>
  );
};
