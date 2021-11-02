import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { baseColors } from "../../theme/colors";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.greyscale.white,
  boxShadow: `0px 0px 0px 1px ${baseColors.bg.yellow[1]}, 0 12px 12px 0 rgba(254, 169, 72, 0.2)`,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

export const dark: CardTheme = {
  background: darkColors.greyscale.white,
  boxShadow: "0 12px 12px 0 rgba(254, 169, 72, 0.2)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
