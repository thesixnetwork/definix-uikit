import Metamask from "./icons/Metamask";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import BinanceChain from "./icons/BinanceChain";
import SafePalWallet from "./icons/SafePalWallet";
import Kaikas from "./icons/Kaikas";
import Dcent from "./icons/Dcent";
import KlipConnect from "./icons/KlipConnect";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  // {
  //   title: "Metamask",
  //   icon: Metamask,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: "TrustWallet",
  //   icon: TrustWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: "MathWallet",
  //   icon: MathWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: "WalletConnect",
  //   icon: WalletConnect,
  //   connectorId: ConnectorNames.WalletConnect,
  // },
  // {
  //   title: "Binance Chain Wallet",
  //   icon: BinanceChain,
  //   connectorId: ConnectorNames.BSC,
  // },
  // {
  //   title: "SafePal Wallet",
  //   icon: SafePalWallet,
  //   connectorId: ConnectorNames.Injected,
  // },
  {
    title: "Kaikas",
    icon: Kaikas,
    connectorId: ConnectorNames.Kaikas,
  },
  {
    title: "D`CENT",
    icon: Dcent,
    connectorId: ConnectorNames.Dcent,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    width: 52,
    height: 52,
    connectorId: ConnectorNames.TokenPocket,
  },
  {
    title: "Klip",
    icon: KlipConnect,
    width: 48,
    height: 24,
    connectorId: ConnectorNames.Klip,
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
export const connectorLocalStorageKey = "connector";
