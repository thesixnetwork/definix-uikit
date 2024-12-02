import React from "react";
import { COIN_SYMBOL, CoinProps } from "./types";
export declare const getTokenImageUrl: (tokenName: COIN_SYMBOL | string) => string[] | "" | null;
declare const Coin: React.FC<CoinProps>;
export default Coin;
