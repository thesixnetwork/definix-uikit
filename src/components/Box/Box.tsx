import styled from "styled-components";
import { background, border, layout, position, space } from "styled-system";
import { BoxProps } from "./types";
import { getVariantTextStyle } from "../../theme/text";

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${getVariantTextStyle()}
`;

export default Box;
