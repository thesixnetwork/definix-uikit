import React, { useState } from "react";
import Button from "../Button/Button";
import DropdownSet from "./DropdownSet";

export default {
  title: "Components/DropdownSet[NEW]",
  component: DropdownSet,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          position: "relative",
          marginTop: "100px",
          marginLeft: "100px",
        }}
      >
        <DropdownSet
          position="bottom"
          options={[
            {
              id: "six",
              label: "SIX",
            },
            {
              id: "finix",
              label: "FINIX",
            },
          ]}
          onItemClick={(index) => console.log(index)}
        />
      </div>

      <div
        style={{
          position: "relative",
          marginTop: "100px",
          marginLeft: "100px",
          width: "200px",
        }}
      >
        <DropdownSet
          position="bottom"
          options={[
            {
              id: "six",
              label: "SIX",
            },
            {
              id: "finix",
              label: "FINIX",
            },
          ]}
          onItemClick={(index) => console.log(index)}
        />
      </div>
    </div>
  );
};
