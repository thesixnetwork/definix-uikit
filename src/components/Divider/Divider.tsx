import React from "react";
import { DividerProps } from "./types";
import { ColorStyles } from "@/theme";
import { Box } from "../Box";

const Divider: React.FC<DividerProps> = ({ ...props }) => {
  return <Box backgroundColor={ColorStyles.LIGHTBROWN_20} height="1px" {...props} />;
};
export default Divider;
