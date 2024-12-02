import React, { ReactNode } from "react";
import { PushedProps } from "../types";
interface Props extends PushedProps {
    label: string | React.ReactNode;
    icon: React.ReactElement;
    activeIcon: React.ReactElement;
    initialOpenState?: boolean;
    className?: string;
    children: ReactNode;
    isActive?: boolean;
}
declare const Accordion: React.FC<Props>;
export default Accordion;
