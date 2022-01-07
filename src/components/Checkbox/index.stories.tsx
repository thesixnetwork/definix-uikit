import React from "react";
import styled from "styled-components";
import Checkbox from "./Checkbox";
import CheckboxLabel from "./CheckboxLabel";
import Text from "../Text/Text";

const Row = styled.div`
  margin-bottom: 32px;
`;

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <Checkbox />
        <Checkbox checked />
        <Checkbox variantColor="lightbrown" />
        <Checkbox variantColor="lightbrown" checked />
      </div>
      <div>
        <Checkbox scale="sm" />
        <Checkbox scale="sm" checked />
        <Checkbox scale="sm" variantColor="lightbrown" />
        <Checkbox scale="sm" variantColor="lightbrown" checked />
      </div>
    </>
  );
};

export const WithLabel: React.FC = () => {
  return (
    <div style={{ padding: "32px" }}>
      <Row>
        <CheckboxLabel control={<Checkbox />} className="mt-10">
          defult
        </CheckboxLabel>
      </Row>
      <Row>
        <CheckboxLabel control={<Checkbox />}>
          <Text textStyle="R_14R">I have read all the information above and agree to using the service.</Text>
        </CheckboxLabel>
      </Row>
      <Row>
        <CheckboxLabel control={<Checkbox scale="sm" variantColor="lightbrown" />}>
          <Text textStyle="R_12R" color="mediumgrey">
            Do not show this message for 14 days
          </Text>
        </CheckboxLabel>
      </Row>
      <Row>
        <CheckboxLabel control={<Checkbox />}>
          <Text textStyle="R_14R">I have read all the information above and agree to using the service.</Text>
          <Text textStyle="R_12R" color="mediumgrey">
            Do not show this message for 14 days
          </Text>
        </CheckboxLabel>
      </Row>
    </div>
  );
};
