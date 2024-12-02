import React, { HTMLAttributes } from "react";
import { DefaultTheme } from "styled-components";
import { ColorProps, SpaceProps } from "styled-system";
import { TextStyleProps } from "../../../theme/text";
export interface Props extends TextStyleProps, HTMLAttributes<HTMLDivElement> {
    secondary?: boolean;
    isActive?: boolean;
    theme?: DefaultTheme;
}
interface LinkLabelProps extends SpaceProps, ColorProps, TextStyleProps {
    isPushed: boolean;
}
declare const LinkLabel: import("styled-components").StyledComponent<"div", DefaultTheme, LinkLabelProps, never>;
declare const MenuEntryComponent: React.FC<Props>;
export { MenuEntryComponent as MenuEntry, LinkLabel };
