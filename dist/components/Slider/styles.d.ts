import { InputHTMLAttributes } from "react";
export declare const SliderContainer: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const StyledSlider: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
    isCurrentValueMaxValue: boolean;
}
export declare const StyledInput: import("styled-components").StyledComponent<"input", import("styled-components").DefaultTheme, StyledInputProps, never>;
export declare const BarBackground: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {}, never>;
export declare const BarProgress: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    progress: number;
    isCurrentValueMaxValue: boolean;
}, never>;
export {};
