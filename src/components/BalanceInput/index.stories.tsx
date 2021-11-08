import React, { useState } from "react";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import BalanceInput from "./BalanceInput";

export default {
  title: "Components/BalanceInput[NEW]",
  component: BalanceInput,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <>
      <div
        style={{
          padding: "50px",
          width: "200px",
        }}
      >
        <BalanceInput value="213434.32432"/>
      </div>
      <div
        style={{
          padding: "50px",
          width: "400px",
        }}
      >
        <BalanceInput value="" placeholder="0"/>
      </div>
    </>
  );
};
