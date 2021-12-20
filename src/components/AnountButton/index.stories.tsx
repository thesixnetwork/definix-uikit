import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import AnountButton from "./AnountButton";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/AnountButton",
  component: AnountButton,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "800px" }}>
      <Row>
        <AnountButton onClick={() => {}} mr="5px">
          25%
        </AnountButton>
        <AnountButton onClick={() => {}} mr="5px">
          50%
        </AnountButton>
        <AnountButton onClick={() => {}}>MAX</AnountButton>
      </Row>

      <Row>
        <AnountButton isSelected onClick={() => {}} mr="5px">
          25%
        </AnountButton>
        <AnountButton isSelected onClick={() => {}} mr="5px">
          50%
        </AnountButton>
        <AnountButton isSelected onClick={() => {}}>
          MAX
        </AnountButton>
      </Row>
    </div>
  );
};
