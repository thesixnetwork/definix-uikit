import { HTMLAttributes } from "react";
import { BackgroundProps, BorderProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps } from "styled-system";
import { ExtendColorProps } from "../../theme/types";

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    ExtendColorProps,
    HTMLAttributes<HTMLDivElement> {
  textStyle?: string;
}

export interface FlexProps extends BoxProps, FlexboxProps, ExtendColorProps {}
