import { TextStyles } from "@/theme";
import { HTMLAttributes } from "react";
import { PositionProps as SPositionProps } from "styled-system";
export type Position = "top" | "bottom";
export type Scale = "sm" | "md";

export const scales: Record<Scale, {
  textStyle: string;
  activeTextStyle: string;
}> = {
  sm: {
    textStyle: TextStyles.R_12R,
    activeTextStyle: TextStyles.R_12R,
  },
  md: {
    textStyle: TextStyles.R_14R,
    activeTextStyle: TextStyles.R_14M,
  }
}

export interface PositionProps {
  position?: Position;
}

export interface DropdownProps extends PositionProps, Omit<SPositionProps, 'position'> {
  scale?: Scale;
  isOpen: boolean;
  defaultIndex?: number;
  target: React.ReactElement;
  children: React.ReactElement[];
  onItemClick?: (index: number) => void;
}

export interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  isDivide?: boolean;
  scale?: Scale;
}
