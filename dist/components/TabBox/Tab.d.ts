import React from "react";
import { TabProps } from "./types";
interface ExtendTabProps extends TabProps {
    isDark: boolean;
}
declare const Tab: React.FC<ExtendTabProps>;
export default Tab;
