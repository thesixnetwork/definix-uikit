import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";
export declare enum ConnectorNames {
    Kaikas = "kaikas",
    Dcent = "dcent",
    Klip = "klip",
    TokenPocket = "tokenpocket",
    WalletConnect = "walletconnect",
    BSC = "bsc"
}
export declare type Login = (connectorId: ConnectorNames) => void;
export interface Config {
    title: string;
    icon: FC<SvgProps>;
    connectorId: ConnectorNames;
    width?: number;
    height?: number;
}
