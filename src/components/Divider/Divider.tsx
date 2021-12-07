import React from "react";
import { DividerProps } from "./types";
import { Box } from "../Box";

const Divider: React.FC<DividerProps> = ({ color = "border", ...props }) => {
  return <Box backgroundColor={color} height="1px" {...props} />;
};
export default Divider;
