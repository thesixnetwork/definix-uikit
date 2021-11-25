import React, { useState } from "react";
import Tooltip from "./Tooltip";

export default {
  title: "Components/Tooltip[NEW]",
  component: Tooltip,
};

export const Default: React.FC = () => {
  return (
    <>
      <Tooltip />
    </>
  );
};
