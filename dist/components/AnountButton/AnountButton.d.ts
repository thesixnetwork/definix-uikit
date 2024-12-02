import React from "react";
import { ExtendColorProps } from "../../theme/types";
import { SpaceProps } from "styled-system";
export interface AnountButtonProps extends SpaceProps, ExtendColorProps {
    onClick: ((e: any) => void) | undefined;
    children?: React.ReactNode;
    className?: string;
    isSelected?: boolean;
}
declare const AnountButton: React.FC<AnountButtonProps>;
export default AnountButton;
