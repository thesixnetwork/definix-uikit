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
  ADA = "ada",
  BTCB = "btcb",
  BUSD = "busd",
  FINIX = "finix",
  KBNB = "kbnb",
  KDAI = "kdai",
  KETH = "keth",
  KLAY = "klay",
  KSP = "ksp",
  KUSDT = "kusdt",
  KWBTC = "kwbtc",
  SIX = "six",
  UNSELECT = "unselect",
  VFINIX = "vfinix",
  XRP = "xrp",
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
  [COIN_SYMBOL.KSP]: ImgTokenKsp,
  [COIN_SYMBOL.KUSDT]: ImgTokenKusdt,
  [COIN_SYMBOL.KWBTC]: ImgTokenKwbtc,
  [COIN_SYMBOL.SIX]: ImgTokenSix,
  [COIN_SYMBOL.UNSELECT]: ImgTokenUnselect,
  [COIN_SYMBOL.VFINIX]: ImgTokenVfinix,
  [COIN_SYMBOL.XRP]: ImgTokenXrp,
};

export interface CoinProps extends SpaceProps {
  symbol: COIN_SYMBOL | string;
  size?: string;
}
