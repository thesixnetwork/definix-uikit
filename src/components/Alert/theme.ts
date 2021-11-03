import { darkColors, lightColors, ColorStyles } from "../../theme/colors";
import { AlertTheme } from "./types";

export const light: AlertTheme = {
  background: lightColors[ColorStyles.WHITE],
};

export const dark: AlertTheme = {
  background: darkColors[ColorStyles.WHITE],
};
