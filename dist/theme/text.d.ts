export declare enum TextStyles {
    R_32B = "R_32B",
    R_28B = "R_28B",
    R_28M = "R_28M",
    R_26B = "R_26B",
    R_23M = "R_23M",
    R_23B = "R_23B",
    R_20B = "R_20B",
    R_20M = "R_20M",
    R_20R = "R_20R",
    R_18B = "R_18B",
    R_18M = "R_18M",
    R_18R = "R_18R",
    R_16B = "R_16B",
    R_16M = "R_16M",
    R_16R = "R_16R",
    R_14B = "R_14B",
    R_14M = "R_14M",
    R_14R = "R_14R",
    R_12B = "R_12B",
    R_12M = "R_12M",
    R_12R = "R_12R"
}
export declare const textStyle: Record<TextStyles, Record<string, string | number>>;
export declare type TextStyleToCssType = Record<TextStyles, string[]>;
export declare const textStyleToCss: TextStyleToCssType;
export declare type TextStyleType = typeof TextStyles;
export interface TextStyleProps {
    textStyle?: TextStyleType | string;
}
export declare const getVariantTextStyle: () => (...args: any[]) => any;
declare const _default: {
    textStyle: Record<TextStyles, string[]>;
};
export default _default;
