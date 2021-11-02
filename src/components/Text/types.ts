import { SpaceProps, TypographyProps } from "styled-system";

export interface TextProps extends SpaceProps, TypographyProps {
  color?: string;
  fontSize?: string;
  bold?: boolean;
  small?: boolean;
  textStyle?: string;
  textColor?: string;
  textTransform?: "uppercase" | "lowercase" | "capitalize";
}
