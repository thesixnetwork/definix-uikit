import { HTMLAttributes } from "react";
import { BackgroundProps, BorderProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps } from "styled-system";

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    HTMLAttributes<HTMLDivElement> {
  textStyle?: string;
}

export interface FlexProps extends BoxProps, FlexboxProps {}
