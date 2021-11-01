import { darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.greyscale.white,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.greyscale.white,
};
