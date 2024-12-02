import React from "react";
import { SpaceProps } from "styled-system";
export declare enum NotiType {
    ALERT = "alert",
    GUIDE = "guide"
}
export interface NotiProps extends SpaceProps {
    type?: "alert" | "guide" | NotiType;
    children?: React.ReactNode;
}
declare const Noti: React.FC<NotiProps>;
export default Noti;
