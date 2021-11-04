import { ColorStyles } from "./colors";

export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
  mobile: string;
};

export type Spacing = {
  [key: string]: number;
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

export type Colors = {
  [key in ColorStyles]: string;
} & Record<string, string>;

export type ZIndices = {
  dropdown: number;
  modal: number;
};

export interface ExtendColorProps {
  color?: ColorStyles | string;
  backgroundColor?: ColorStyles | string;
  bg?: ColorStyles | string;
}
