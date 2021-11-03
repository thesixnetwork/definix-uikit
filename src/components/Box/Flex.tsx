import styled from "styled-components";
import { flexbox, color } from "styled-system";
import { getVariantTextStyle } from "../../theme/text";
import Box from "./Box";
import { FlexProps } from "./types";

const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
  ${color}
  ${getVariantTextStyle()}
`;

export default Flex;
