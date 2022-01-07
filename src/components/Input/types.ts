import { ElementType, InputHTMLAttributes } from "react";
import { TextStyleProps } from "../../theme/text";
import { ColorProps, LayoutProps, SpaceProps } from "styled-system";
import { PolymorphicComponentProps } from "../Button/types";

export interface BaseInputProps extends SpaceProps {
  isSuccess?: boolean;
  isWarning?: boolean;
  endIcon?: React.ReactElement;
  isBorder?: boolean;
}

export interface WrapInputProps extends LayoutProps, BaseInputProps, ColorProps, TextStyleProps {}
export type InputProps<P extends ElementType = "input"> = PolymorphicComponentProps<P, WrapInputProps>;

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSearch: (keyword: string) => any;
  onReset: () => any;
}