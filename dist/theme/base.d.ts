import { MediaQueries, Breakpoints, Spacing } from "./types";
export declare const breakpointMap: {
    [key: string]: number;
};
export declare const shadows: {
    level1: string;
    active: string;
    success: string;
    warning: string;
    focus: string;
    inset: string;
    inset2: string;
    inset3: string;
    elevation: string;
    elevation1: string;
    elevation2: string;
    elevation3: string;
};
export declare const spacing: Spacing;
export declare const space: Spacing;
declare const _default: {
    siteWidth: number;
    breakpoints: Breakpoints;
    mediaQueries: MediaQueries;
    spacing: Spacing;
    space: Spacing;
    shadows: {
        level1: string;
        active: string;
        success: string;
        warning: string;
        focus: string;
        inset: string;
        inset2: string;
        inset3: string;
        elevation: string;
        elevation1: string;
        elevation2: string;
        elevation3: string;
    };
    radii: {
        small: string;
        default: string;
        card: string;
        circle: string;
    };
    zIndices: {
        dropdown: number;
        modal: number;
        nav: number;
        inner: number;
        sidebar: number;
        wrongNetwork: number;
    };
};
export default _default;
