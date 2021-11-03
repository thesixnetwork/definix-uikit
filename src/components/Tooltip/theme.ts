import { darkColors, lightColors, ColorStyles } from "../../theme/colors";
import { TooltipTheme } from "./types";

export const light: TooltipTheme = {
  background: darkColors[ColorStyles.WHITE],
  text: darkColors[ColorStyles.WHITE],
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

export const dark: TooltipTheme = {
  background: lightColors[ColorStyles.WHITE],
  text: lightColors[ColorStyles.WHITE],
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
