import { HTMLAttributes } from "react";
export type Position = "top" | "bottom";

export interface PositionProps {
  position?: Position;
}

export interface DropdownProps extends PositionProps {
  isOpen: boolean;
  defaultIndex?: number;
  target: React.ReactElement;
  children: React.ReactElement[];
  onItemClick?: (index: number) => void;
}

export interface DropdownItemProps extends HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
}