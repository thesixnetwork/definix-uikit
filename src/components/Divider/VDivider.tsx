import React from "react";
import { DividerProps } from "./types";
import { ColorStyles } from "../../theme";
import { Box } from "../Box";
import styled from "styled-components";
import { space } from "styled-system";

const StyledVDivider = styled(Box)<{ bdcolor: string }>`
  margin: 0;
  flex-shrink: 0;
  border-width: 0;
  border-style: solid;
  border-color: ${({ bdcolor, theme }) => theme.colors[bdcolor] || theme.colors.border};
  border-bottom-width: 0;
  height: auto;
  border-right-width: thin;
  align-self: stretch;
  ${space}
`;

const VDivider: React.FC<DividerProps> = ({ color = "border", ...props }) => {
  return <StyledVDivider as="hr" bdcolor={color} {...props} />;
};
export default VDivider;
