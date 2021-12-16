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
  const [value, setValue] = useState('')
  return (
    <>
      <div
        style={{
          padding: "50px",
          width: "200px",
        }}
      >
        <BalanceInput value="213434.32432" />
      </div>
      <div
        style={{
          padding: "50px",
          width: "400px",
        }}
      >
        <BalanceInput
          value={value}
          placeholder="0"
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </div>
    </>
  );
};
