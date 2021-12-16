import { SpaceProps } from "styled-system";

import {
  ImgTokenAda,
  ImgTokenBtcb,
  ImgTokenBusd,
  ImgTokenFinix,
  ImgTokenKbnb,
  ImgTokenKdai,
  ImgTokenKeth,
  ImgTokenKlay,
  ImgTokenKsp,
  ImgTokenKusdt,
  ImgTokenKwbtc,
  ImgTokenSix,
  ImgTokenUnselect,
  ImgTokenVfinix,
  ImgTokenXrp,
} from "./Symbol";

export enum COIN_SYMBOL {
  ADA = "ADA",
  BTCB = "BTCB",
  BUSD = "BUSD",
  FINIX = "FINIX",
  KBNB = "KBNB",
  KDAI = "KDAI",
  KETH = "KETH",
  KLAY = "KLAY",
  WKLAY = "WKLAY",
  KSP = "KSP",
  KUSDT = "KUSDT",
  KWBTC = "KWBTC",
  SIX = "SIX",
  UNSELECT = "UNSELECT",
  VFINIX = "VFINIX",
  KXRP = "KXRP",
}

export const COIN_SRCSET: Record<COIN_SYMBOL, string[]> = {
  [COIN_SYMBOL.ADA]: ImgTokenAda,
  [COIN_SYMBOL.BTCB]: ImgTokenBtcb,
  [COIN_SYMBOL.BUSD]: ImgTokenBusd,
  [COIN_SYMBOL.FINIX]: ImgTokenFinix,
  [COIN_SYMBOL.KBNB]: ImgTokenKbnb,
  [COIN_SYMBOL.KDAI]: ImgTokenKdai,
  [COIN_SYMBOL.KETH]: ImgTokenKeth,
  [COIN_SYMBOL.KLAY]: ImgTokenKlay,
  [COIN_SYMBOL.WKLAY]: ImgTokenKlay,
  [COIN_SYMBOL.KSP]: ImgTokenKsp,
  [COIN_SYMBOL.KUSDT]: ImgTokenKusdt,
  [COIN_SYMBOL.KWBTC]: ImgTokenKwbtc,
  [COIN_SYMBOL.SIX]: ImgTokenSix,
  [COIN_SYMBOL.UNSELECT]: ImgTokenUnselect,
  [COIN_SYMBOL.VFINIX]: ImgTokenVfinix,
  [COIN_SYMBOL.KXRP]: ImgTokenXrp,
};

export interface CoinProps extends SpaceProps {
  symbol: COIN_SYMBOL | string;
  size?: string;
}
