import { darkColors, lightColors } from "../../theme/colors";
import { ToggleTheme } from "./types";

export const light: ToggleTheme = {
  handleBackground: lightColors.main.red,
};

export const dark: ToggleTheme = {
  handleBackground: darkColors.main.red,
};
