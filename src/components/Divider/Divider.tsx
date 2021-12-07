import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import { DividerProps } from "./types";
import { Box } from "../Box";

const StyledVDivider = styled(Box)`
  height: 1px;
  ${space}
`;

const Divider: React.FC<DividerProps> = ({ color = "border", ...props }) => {
  return <StyledVDivider backgroundColor={color} {...props} />;
};
export default Divider;
