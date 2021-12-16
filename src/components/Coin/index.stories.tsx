import React from "react";
import Coin from "./Coin";
import { CoinProps, COIN_SYMBOL } from "./types";

export default {
  title: "Components/Coin[NEW]",
  component: Coin,
};

export const Default: React.FC<CoinProps> = ({ symbol = "ETH", ...props }) => {
  return (
    <>
      <div
        style={{
          padding: "20px",
          display: "flex",
        }}
      >
        {Object.entries(COIN_SYMBOL).map(([key, value]) => (
          <Coin symbol={value} />
        ))}
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
        }}
      >
        {Object.entries(COIN_SYMBOL).map(([key, value]) => (
          <Coin size="40px" symbol={value} />
        ))}
      </div>
      <div
        style={{
          padding: "20px",
          display: "flex",
        }}
      >
        {Object.entries(COIN_SYMBOL).map(([key, value]) => (
          <Coin size="80px" symbol={value} />
        ))}
      </div>
    </>
  );
};
