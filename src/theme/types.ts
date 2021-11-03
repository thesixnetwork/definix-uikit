import { ColorStyles } from "./colors";

export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = {
  [key: string]: number
};

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
};

type ColorType = typeof ColorStyles;

export type Colors = {
  main: {
    red: string;
  },
  sub: {
    orange: string;
    yellow: string;
    green: string;
  },
  brownscale: {
    pale: string;
    lightbrown: string;
    brown: string;
    deepbrown: string;
  },
  greyscale: {
    white: string;
    lightgrey: string;
    mediumgrey: string;
    deepgrey: string;
    black: string;
  },
  bg: {
    yellow: string[];
  }

  // temp
  red: string;
  yellow: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
