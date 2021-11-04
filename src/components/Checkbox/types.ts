import { Colors } from "@/theme/types";

export const scales = {
  SM: "sm",
  MD: "md",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface CheckboxProps {
  scale?: Scales;
  variantColor?: keyof Colors;
}

export interface CheckboxLabelProps {
  className?: string;
  control: React.ReactNode;
  children: React.ReactNode;
}
