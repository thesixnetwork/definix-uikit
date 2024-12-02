import { ElementType } from "react";
import { LayoutProps, SpaceProps } from "styled-system";
import { PolymorphicComponentProps } from "../Button/types";
export interface BaseInputProps extends SpaceProps {
    isSuccess?: boolean;
    isWarning?: boolean;
    endIcon?: React.ReactElement;
}
export interface WrapInputProps extends LayoutProps, BaseInputProps {
}
export declare type InputProps<P extends ElementType = "input"> = PolymorphicComponentProps<P, WrapInputProps>;
