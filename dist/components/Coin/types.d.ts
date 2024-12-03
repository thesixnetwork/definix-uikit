import { SpaceProps } from "styled-system";
export declare enum COIN_SYMBOL {
    ADA = "ADA",
    BTCB = "BTCB",
    BUSD = "BUSD",
    FINIX = "FINIX",
    OBNB = "OBNB",
    KDAI = "KDAI",
    OETH = "OETH",
    KLAY = "KLAY",
    WKLAY = "WKLAY",
    KSP = "KSP",
    OUSDT = "OUSDT",
    OWBTC = "OWBTC",
    SIX = "SIX",
    UNSELECT = "UNSELECT",
    VFINIX = "VFINIX",
    OXRP = "OXRP",
    KAIA = "KAIA",
    /**
     * @favor
     */
    FAVOR = "FAVOR"
}
export declare const COIN_SRCSET: Record<COIN_SYMBOL, string[]>;
export interface CoinProps extends SpaceProps {
    symbol: COIN_SYMBOL | string;
    size?: string;
}
export interface LpProps extends SpaceProps {
    lpSymbols: string[];
    size?: string;
}
