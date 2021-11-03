import { BaseButtonProps, Scales, Variants } from "../Button/types";

export interface ButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean;
}

export interface ButtonMenuProps {
  variant?: typeof Variants.PRIMARY | typeof Variants.SUBTLE;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: Scales;
  children: React.ReactElement[];
}

export interface ChainToggleProps {
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  toggleScale?: 'sm' | 'md';
  children: React.ReactElement[];
}

export interface ChainToggleItemProps extends BaseButtonProps {
  isActive?: boolean;
  startIcon: React.ReactNode;
  label: string;
  toggleScale?: 'sm' | 'md';
}