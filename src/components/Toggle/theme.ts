import { darkColors, lightColors, ColorStyles } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors[ColorStyles.WHITE],
};

export const dark: ToggleTheme = {
  handleBackground: darkColors[ColorStyles.WHITE],
};
