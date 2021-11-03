import { variant } from "styled-system";

export enum TextStyles {
  R_32B = "R_32B",
  R_28B = "R_28B",
  R_28M = "R_28M",
  R_26B = "R_26B",
  R_23M = "R_23M",
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
  R_12R = "R_12R",
}

export const textStyle: Record<string, Record<string, string | number>> = {
  [TextStyles.R_32B]: {
    fontFamily: 'Roboto',
    fontSize: '32px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 'normal',
  },

  [TextStyles.R_28B]: {
    fontFamily: 'Roboto',
    fontSize: '28px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
  },

  [TextStyles.R_28M]: {
    fontFamily: 'Roboto',
    fontSize: '28px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
  },

  [TextStyles.R_26B]: {
    fontFamily: 'Roboto',
    fontSize: '26px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.38,
    letterSpacing: 'normal',
  },

  [TextStyles.R_23M]: {
    fontFamily: 'Roboto',
    fontSize: '23px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.39,
    letterSpacing: 'normal',
  },

  [TextStyles.R_20B]: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.4,
    letterSpacing: 'normal',
  },

  [TextStyles.R_20M]: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.4,
    letterSpacing: 'normal',
  },

  [TextStyles.R_20R]: {
    fontFamily: 'Roboto',
    fontSize: '20px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.4,
    letterSpacing: 'normal',
  },

  [TextStyles.R_18B]: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.44,
    letterSpacing: 'normal',
  },

  [TextStyles.R_18M]: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.44,
    letterSpacing: 'normal',
  },

  [TextStyles.R_18R]: {
    fontFamily: 'Roboto',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.44,
    letterSpacing: 'normal',
  },

  [TextStyles.R_16B]: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
  },

  [TextStyles.R_16M]: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
  },

  [TextStyles.R_16R]: {
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
  },

  [TextStyles.R_14B]: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
  },

  [TextStyles.R_14M]: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
  },

  [TextStyles.R_14R]: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.43,
    letterSpacing: 'normal',
  },

  [TextStyles.R_12B]: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
  },

  [TextStyles.R_12M]: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 500,
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
  },

  [TextStyles.R_12R]: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 1.5,
    letterSpacing: 'normal',
  },
}

export type TextStyleType = typeof TextStyles;
export interface TextStyleProps {
  textStyle?: TextStyleType | string;
}

export const getVariantTextStyle = () => variant({
  prop: 'textStyle',
  variants: textStyle,
})

