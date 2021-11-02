import styled from "styled-components";
import { space, layout, variant as styledVariant } from "styled-system";
import { hexToRGB } from "../../style/mixin";
import { getVariantTextStyle } from "@/theme/text";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps, variants } from "./types";

// interface ThemedButtonProps extends BaseButtonProps {
//   theme: DefaultTheme;
// }

// const getDisabledStyles = ({ isLoading }: ThemedButtonProps) => {
//   if (isLoading === true) {
//     return `
//       &:disabled,
//       &.definix-button--disabled {
//         cursor: not-allowed;
//       }
//     `;
//   }

//   return `
//     &:disabled,
//     &.definix-button--disabled {
//       box-shadow: none;
//       cursor: not-allowed;
//     }
//   `;
// };

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
// interface TransientButtonProps extends ThemedButtonProps {
//   $isLoading?: boolean;
// }

// const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
//   return $isLoading ? ".5" : "1";
// };

const StyledButton = styled.button<BaseButtonProps>`
  position: relative;
  align-items: center;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1;
  outline: 0;

  &:hover:not(:disabled):not(.definix-button--disabled):not(.definix-button--disabled):not(:active) {
    &:after {
      content: "";
      border-radius: 8px;
      background-color: ${({ theme, variant }) => variant === variants.LINE ? `rgba(0, 0, 0, 0.05)` : hexToRGB(theme.colors.greyscale.white, 0.2)};
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
    }
  }

  &:disabled:not(.definix-button--loading),
  &.definix-button--disabled:not(.definix-button--loading) {
    background-color: ${({ theme, variant }) => hexToRGB(theme.colors.greyscale.lightgrey, variant === variants.LINE ? 0.2 : 1)};
    color: ${({ theme, variant }) => variant === variants.LINE ? hexToRGB(theme.colors.greyscale.mediumgrey, 0.4) : hexToRGB(theme.colors.greyscale.white, 0.5)};
    cursor: not-allowed;
  }

  &.definix-button--loading {
    cursor: not-allowed;
  }

  ${styledVariant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${styledVariant({
    variants: styleVariants,
  })}
  ${getVariantTextStyle()}
  ${layout}
  ${space}
`;

export default StyledButton;
