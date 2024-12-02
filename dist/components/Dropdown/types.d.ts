import { HTMLAttributes } from "react";
import { LayoutProps, PositionProps as SPositionProps } from "styled-system";
export declare type Position = "top" | "bottom";
export declare type Float = "left" | "right";
export interface PositionProps {
    position?: Position;
    float?: Float;
}
export interface DropdownProps extends PositionProps, Omit<SPositionProps, "position">, LayoutProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    defaultIndex?: number;
    target: React.ReactElement;
    children: React.ReactElement[];
    onItemClick?: (index: number) => void;
    width?: string;
}
export interface DropdownItemProps extends HTMLAttributes<HTMLButtonElement> {
    isActive?: boolean;
    isDivide?: boolean;
}
