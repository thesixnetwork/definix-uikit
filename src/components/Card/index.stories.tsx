import React from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Heading from "../Heading/Heading";
import CardRibbon from "./CardRibbon";
import UIKitCardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import Card from "./Card";
import { ColorStyles } from "../../theme";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <Card>
          <CardBody>Body</CardBody>
        </Card>
      </Row>
      <Row>
        <Card>
          <CardBody>Body</CardBody>
        </Card>
      </Row>
      <Row>
        <Card>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isActive>
          <CardBody>Active</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isSuccess>
          <CardBody>Success</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isWarning>
          <CardBody>Warning</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card isDisabled>
          <CardBody>Disabled</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card cardBg={ColorStyles.DEEPBROWN}>
          <CardBody>Disabled</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
      <Row>
        <Card cardBg={ColorStyles.ORANGE}>
          <CardBody>Disabled</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </Row>
    </div>
  );
};

export const CardHeader: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card>
        <UIKitCardHeader>
          <Heading size="xl">Card Header</Heading>
        </UIKitCardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};
export const Ribbon: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Row>
        <Card ribbon={<CardRibbon text="new" />}>
          <div style={{ height: "62px", backgroundColor: "#191326" }} />
          <CardBody>Body</CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon text="New" upperCase />}>
          <div style={{ height: "62px", backgroundColor: "#191326" }} />
          <CardBody>UpperCase</CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="red" text="hot" />}>
          <div style={{ height: "62px", backgroundColor: "#191326" }} />
          <CardBody>variantColor: red</CardBody>
        </Card>
      </Row>
      <Row>
        <Card ribbon={<CardRibbon variantColor="grey" text="Finished" />}>
          <div style={{ height: "62px", backgroundColor: "#191326" }} />
          <CardBody>variantColor: grey</CardBody>
        </Card>
      </Row>
    </div>
  );
};
