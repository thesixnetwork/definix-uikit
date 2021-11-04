import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox[New]",
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
