import styled from "styled-components";
import { background, border, layout, position, space, color, grid } from "styled-system";
import { getVariantTextStyle } from "../../theme/text";
import Box from "./Box";
import { GridProps } from "./types";

const Grid = styled(Box)<GridProps>`
  display: grid;
  ${background}
  ${color}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${grid}
  ${getVariantTextStyle()}
`;

export default Grid;
