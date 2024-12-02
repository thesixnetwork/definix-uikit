import { DefaultTheme } from "styled-components";
interface StyledTabBoxProps {
    theme: DefaultTheme;
}
export declare const Wrap: import("styled-components").StyledComponent<"div", DefaultTheme, import("../Box").BoxProps & import("../Box").FlexProps, never>;
export declare const StyledContentArea: import("styled-components").StyledComponent<"div", DefaultTheme, StyledTabBoxProps, never>;
export declare const StyledTabArea: import("styled-components").StyledComponent<"div", DefaultTheme, {}, never>;
export declare const StyledBorderBottom: import("styled-components").StyledComponent<"div", DefaultTheme, {
    isSelected?: boolean | undefined;
    isDark?: boolean | undefined;
}, never>;
export declare const StyledBorderBottomNormal: import("styled-components").StyledComponent<"div", DefaultTheme, {
    isSelected?: boolean | undefined;
    isDark?: boolean | undefined;
} & {
    isDark: boolean;
}, never>;
export declare const StyledTab: import("styled-components").StyledComponent<"div", DefaultTheme, {
    small?: boolean | undefined;
    isSelected: boolean;
    isDark?: boolean | undefined;
    width?: string | undefined;
}, never>;
export default undefined;
