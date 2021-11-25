import { TextStyles } from "../../theme";
import { HTMLAttributes } from "react";
import { LayoutProps, PositionProps as SPositionProps } from "styled-system";
export type Position = "top" | "bottom";
export type Float = "left" | "right";

export interface PositionProps {
  position?: Position;
  float?: Float;
}

export interface DropdownProps extends PositionProps, Omit<SPositionProps, "position">, LayoutProps {
  isOpen: boolean;
  defaultIndex?: number;
  target: React.ReactElement;
  children: React.ReactElement[];
  setIsOpen: (isOpen: boolean) => void;
  onItemClick?: (index: number) => void;
}

export interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  isDivide?: boolean;
}
