import { ExtendColorProps } from "../../theme/types";
import { SpaceProps } from "styled-system";
export interface CopyToClipboardProps extends SpaceProps, ExtendColorProps {
    toCopy: string;
    doneMessage?: string;
}
