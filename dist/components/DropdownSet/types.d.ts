import { TextStyles } from "../../theme";
import { HTMLAttributes } from "react";
import { LayoutProps, PositionProps as SPositionProps } from "styled-system";
export declare type Position = "top" | "bottom";
export declare type Scale = "sm" | "md";
export declare const scales: Record<Scale, {
    textStyle: TextStyles;
    activeTextStyle: TextStyles;
}>;
export interface PositionProps {
    position?: Position;
}
export interface DropdownOption {
    id: string | number;
    label: string;
    [key: string]: any;
}
export interface DropdownSetProps extends PositionProps, Omit<SPositionProps, "position">, LayoutProps {
    scale?: Scale;
    options: DropdownOption[];
    isOpen: boolean;
    activeIndex: number;
    onButtonClick: () => void;
    onOptionClick: (index: number) => void;
}
export interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
    isActive?: boolean;
    isDivide?: boolean;
    scale?: Scale;
}
