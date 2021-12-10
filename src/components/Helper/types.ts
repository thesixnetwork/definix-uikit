import { ExtendColorProps } from "../../theme/types";
import { SpaceProps } from "styled-system";
import { Placement } from "@popperjs/core";

export interface HelperProps extends SpaceProps, ExtendColorProps {
  text: string | React.ReactElement;
  position?: Placement;
  className?: string;
}
