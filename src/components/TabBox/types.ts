import { SpaceProps } from "styled-system";

export interface TabBoxProps {
  tabs: {
    name: string;
    component: React.ReactNode;
  }[];
  children?: React.ReactNode;
  small?: boolean;
}

export interface TabAreaProps {
  isSelected: boolean;
  children?: React.ReactNode;
}

export interface TabProps {
  onClick: () => void;
  isSelected: boolean;
  small?: boolean;
  width?: string;
  children?: React.ReactNode;
}

export interface TabsProps extends Omit<TabProps, "onClick" | "isSelected"> {
  tabs: string[];
  curTab: string;
  setCurTab: (tab: string) => void;
}
