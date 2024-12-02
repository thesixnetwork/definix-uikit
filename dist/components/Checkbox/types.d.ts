import { Colors } from "../../theme/types";
import { HTMLAttributes } from "react";
import { BorderProps, LayoutProps, PositionProps, SpaceProps } from "styled-system";
export declare const scales: {
    readonly SM: "sm";
    readonly MD: "md";
};
export declare type Scales = typeof scales[keyof typeof scales];
export interface CheckboxProps {
    scale?: Scales;
    variantColor?: keyof Colors;
}
export interface CheckboxLabelProps extends BorderProps, LayoutProps, PositionProps, SpaceProps, HTMLAttributes<HTMLLabelElement> {
    control: React.ReactNode;
    children: React.ReactNode;
}
