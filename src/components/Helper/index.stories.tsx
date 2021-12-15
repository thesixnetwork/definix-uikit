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
          <Text textStyle="R_14R">CASE 1</Text>
          <Helper
            text="text text text text text text text text text text text text text text text text text text text text text text."
            className="ml-1"
          />
        </Flex>
      </Row>
      <Row style={{ display: "flex" }}>
        <Text textStyle="R_14R">CASE 2</Text>
        <Helper
          text="text text text text text text text text text text text text text text text text text text text text text text."
          className="ml-1"
        />
      </Row>
      <Row style={{ marginTop: "200px" }}>
        <Flex alignItems="center" color="primary">
          <Text textStyle="R_14R">CASE 3</Text>
          <Helper
            text="text text text text text text text text text text text text text text text text text text text text text text."
            className="ml-1"
          />
        </Flex>
      </Row>
      <Row>
        <Flex alignItems="center">
          <Text textStyle="R_14R">CASE 4</Text>
          <Helper
            text="text text text text text text text text text text text text text text text text text text text text text text."
            color="secondary"
          />
        </Flex>
      </Row>
    </>
  );
};
