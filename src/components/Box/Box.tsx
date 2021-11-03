import styled from "styled-components";
import { background, border, color, layout, position, space } from "styled-system";
import { BoxProps } from "./types";
import { getVariantTextStyle } from "../../theme/text";

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${color}
  ${getVariantTextStyle()}
`;

export default Box;
