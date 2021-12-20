import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from ".";
import { Text } from "../Text";
import { Flex } from "../Box";

const Row = styled.div`
  padding-left: 12px;
  margin-bottom: 8px;
`;

export default {
  title: "Components/CopyToClipboard",
  component: CopyToClipboard,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      <Row>
        <Flex alignItems="center">
          <Text textStyle="R_14R">주소1</Text>
          <CopyToClipboard toCopy="주소1" />
        </Flex>
      </Row>
      <Row>
        <Flex alignItems="center">
          <Text textStyle="R_14R">주소2</Text>
          <CopyToClipboard toCopy="주소2" color="secondary" />
        </Flex>
      </Row>
      <Row>
        <Flex alignItems="center">
          <Text textStyle="R_14R">주소3</Text>
          <CopyToClipboard toCopy="주소3" color="primary" />
        </Flex>
      </Row>
      <Row>
        <CopyToClipboard toCopy="주소4">주소4</CopyToClipboard>
      </Row>
    </>
  );
};
