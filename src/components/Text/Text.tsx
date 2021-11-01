import { typoStyle } from "../../theme/typo";
import styled from "styled-components";
import { variant, space, typography } from "styled-system";
import { TextProps } from "./types";

const Text = styled.div<TextProps>`
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${space}
  ${typography}
  ${variant({
    prop: 'textStyle',
    variants: typoStyle,
  })}
`;

Text.defaultProps = {
  color: "text",
  small: false,
};

export default Text;
