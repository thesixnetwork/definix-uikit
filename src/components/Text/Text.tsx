import styled from "styled-components";
import { space, typography, color } from "styled-system";
import { getVariantTextStyle } from "../../theme/text";
import { TextProps } from "./types";

const Text = styled.div<TextProps>`
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${space}
  ${typography}
  ${getVariantTextStyle()}
  ${color}
`;

Text.defaultProps = {
  small: false,
};

export default Text;
