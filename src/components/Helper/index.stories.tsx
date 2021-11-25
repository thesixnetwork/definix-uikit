import React from "react";
import styled from "styled-components";
import { Helper } from ".";
import { Text } from "../Text";
import { Flex } from "../Box";

const Row = styled.div`
  padding-left: 12px;
  margin-top: 50px;
`;

export default {
  title: "Components/Helper[NEW]",
  component: Helper,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      <Row style={{ marginLeft: "200px" }}>
        <Flex alignItems="center">
          <Text textStyle="R_14R">Position: left</Text>
          <Helper
            text="text text text text text text text text text text text text text text text text text text text text text text."
            className="ml-1"
            position="left"
          />
        </Flex>
      </Row>
      <Row style={{ display: "flex" }}>
        <Text textStyle="R_14R">Position: right</Text>
        <Helper
          text="text text text text text text text text text text text text text text text text text text text text text text."
          className="ml-1"
          position="right"
        />
      </Row>
      <Row style={{ marginTop: "200px" }}>
        <Flex alignItems="center" color="primary">
          <Text textStyle="R_14R">Position: top</Text>
          <Helper
            text="text text text text text text text text text text text text text text text text text text text text text text."
            className="ml-1"
            position="top"
          />
        </Flex>
      </Row>
      <Row>
        <Flex alignItems="center">
          <Text textStyle="R_14R">Position: bottom</Text>
          <Helper
            text="text text text text text text text text text text text text text text text text text text text text text text."
            position="bottom"
            color="secondary"
          />
        </Flex>
      </Row>
    </>
  );
};
