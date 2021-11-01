import styled from "styled-components";
import { variant, space, typography } from "styled-system";
import { textStyle } from "../../theme/text";
import { TextProps } from "./types";

const Text = styled.div<TextProps>`
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${space}
  ${typography}
  ${variant({
    prop: 'textStyle',
    variants: textStyle,
  })}
`;

Text.defaultProps = {
  color: "text",
  small: false,
};

export default Text;
