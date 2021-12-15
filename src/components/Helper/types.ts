import { ExtendColorProps } from "../../theme/types";
import { SpaceProps } from "styled-system";

export interface HelperProps extends SpaceProps, ExtendColorProps {
  text: string | React.ReactElement;
  className?: string;
}
