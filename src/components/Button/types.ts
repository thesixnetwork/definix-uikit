import { ComponentProps, ElementType, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { LayoutProps, SpaceProps } from "styled-system";

export enum ButtonScales {
  // new
  S32 = "32",
  S32ICON = "32_icon",
  S36 = "36",
  S40 = "40",


  // old
  MD = "md",
  SM = "sm",
  XS = "xs",
};

export enum ButtonVariants {
  // new
  RED = "red",
  BROWN = "brown",
  LIGHTBROWN = "lightbrown",
  DEEPBROWN = "deepbrown",
  LINE = "line",
  TRANSPARENT = "transparent",

  // old
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  TEXT = "text",
  DANGER = "danger",
  SUBTLE = "subtle",
  SUCCESS = "success",
};

/**
 * @see https://www.benmvp.com/blog/polymorphic-react-components-typescript/
 */
export type AsProps<E extends ElementType = ElementType> = {
  as?: E;
};

export type MergeProps<E extends ElementType> = AsProps<E> & Omit<ComponentProps<E>, keyof AsProps>;

export type PolymorphicComponentProps<E extends ElementType, P> = P & MergeProps<E>;

export type PolymorphicComponent<P, D extends ElementType = "button"> = <E extends ElementType = D>(
  props: PolymorphicComponentProps<E, P>
) => ReactElement | null;

export interface BaseButtonProps extends LayoutProps, SpaceProps {
  as?: "a" | "button" | typeof Link;
  external?: boolean;
  isLoading?: boolean;
  scale?: ButtonScales | string;
  variant?: ButtonVariants | string;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  textStyle?: string; 
}

export type ButtonProps<P extends ElementType = "button"> = PolymorphicComponentProps<P, BaseButtonProps>;
