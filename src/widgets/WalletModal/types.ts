import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export enum ConnectorNames {
  // Kaikas = "kaikas",
  Kaia = "kaia",
  Dcent = "dcent",
  Klip = "klip",
  TokenPocket = "tokenpocket",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
  width?: number;
  height?: number;
}
