import { ExtendColorProps } from "../../theme/types";
import { SpaceProps } from "styled-system";
import { ColorStyles } from "src";
export interface DividerProps extends SpaceProps, ExtendColorProps {
    [key: string]: any;
}
export interface VDividerProps extends SpaceProps {
    color: ColorStyles;
}
