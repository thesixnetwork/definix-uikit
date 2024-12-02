import { ExtendColorProps } from "../../theme/types";
import { SpaceProps } from "styled-system";
export interface LabelProps extends SpaceProps, ExtendColorProps {
    type: string;
}
export declare const labelTypes: {
    readonly NOTI: "noti";
    readonly TOKEN: "token";
};
