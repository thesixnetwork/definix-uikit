import { AlertTheme } from "../components/Alert/types";
import { CardTheme } from "../components/Card/types";
import { ToggleTheme } from "../components/Toggle/types";
import { TooltipTheme } from "../components/Tooltip/types";
import { NavTheme } from "../widgets/Menu/types";
import { ModalTheme } from "../widgets/Modal/types";
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices } from "./types";
import { TextStyleToCssType } from "./text";
export interface DefinixTheme {
    siteWidth: number;
    isDark: boolean;
    alert: AlertTheme;
    colors: Colors;
    card: CardTheme;
    nav: NavTheme;
    modal: ModalTheme;
    toggle: ToggleTheme;
    tooltip: TooltipTheme;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
    spacing: Spacing;
    space: Spacing;
    shadows: Shadows;
    radii: Radii;
    zIndices: ZIndices;
    textStyle: TextStyleToCssType;
}
export { default as dark } from "./dark";
export { default as light } from "./light";
export { lightColors, darkColors, ColorStyles } from "./colors";
export { TextStyles, textStyle, getVariantTextStyle } from "./text";
export type { TextStyleProps, TextStyleType } from "./text";