import { ExtendColorProps } from "@/theme/types";
import { SpaceProps } from "styled-system";

export interface AnountButtonProps extends SpaceProps, ExtendColorProps {
  onClick: (() => void) | undefined;
  children?: React.ReactNode;
}
