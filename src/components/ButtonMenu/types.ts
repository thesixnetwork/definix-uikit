import { HTMLAttributes } from "react";
import { BaseButtonProps, ButtonScales, ButtonVariants } from "../Button/types";

export interface ButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean;
}

export interface ButtonMenuProps {
  variant?: typeof ButtonVariants.PRIMARY | typeof ButtonVariants.SUBTLE;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: ButtonScales;
  children: React.ReactElement[];
}

export interface ChainToggleProps {
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: "sm" | "md";
  children: React.ReactElement[];
}

export interface ChainToggleItemProps extends HTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  startIcon: React.ReactNode;
  scale?: "sm" | "md";
  children: React.ReactNode;
}
