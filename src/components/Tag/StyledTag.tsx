import styled, { DefaultTheme } from "styled-components";
import { space, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { TagProps } from "./types";

interface ThemedProps extends TagProps {
  theme: DefaultTheme;
}

const getOutlineStyles = ({ outline }: ThemedProps) => {
  if (outline) {

    return `
      background: transparent;
    `;
  }

  return "";
};

export const StyledTag = styled.div<ThemedProps>`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    fill: currentColor;
  }

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${space}

  ${getOutlineStyles}
`;

export default null;
