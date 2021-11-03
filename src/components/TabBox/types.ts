export interface TabBoxProps {
  tabs: {
    name: string;
    component: React.ReactNode;
  }[];
  children?: React.ReactNode;
}

export interface TabAreaProps {
  isSelected: boolean;
  children?: React.ReactNode;
}

export interface TabProps {
  onClick: () => void;
  isSelected: boolean;
  children?: React.ReactNode;
}
