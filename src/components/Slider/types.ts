import { BoxProps } from "../Box/types";

export interface SliderProps extends BoxProps {
  min: number;
  max: number;
  value: number;
  onValueChanged: (newValue: number) => void;
  valueLabel?: string;
}
