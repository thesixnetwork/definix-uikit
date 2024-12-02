/// <reference types="react" />
import { SpaceProps } from "styled-system";
export interface TitleSetProps extends SpaceProps {
    title: string;
    link?: string;
    linkLabel?: string;
    description: string;
    linkBottom?: boolean;
    children?: React.ReactNode;
}
