import { darkColors, lightColors, ColorStyles } from "../../theme/colors";
import { RadioTheme } from "./types";

export const light: RadioTheme = {
  handleBackground: lightColors[ColorStyles.WHITE],
};

export const dark: RadioTheme = {
  handleBackground: darkColors[ColorStyles.WHITE],
};
