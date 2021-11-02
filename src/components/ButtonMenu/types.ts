import { BaseButtonProps, Scale, variants } from "../Button/types";

export interface ButtonMenuItemProps extends BaseButtonProps {
  isActive?: boolean;
}

export interface ButtonMenuProps {
  variant?: typeof variants.PRIMARY | typeof variants.SUBTLE;
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: Scale;
  children: React.ReactElement[];
}

export interface ChainToggleProps {
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  scale?: 'sm' | 'md';
  children: React.ReactElement[];
}

export interface ChainToggleItemProps extends BaseButtonProps {
  isActive?: boolean;
  startIcon: React.ReactNode;
  label: string;
}