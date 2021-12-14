import React from "react";
import { textStyle } from "../../theme/text";
import { ColorStyles } from "../../theme";
import Coin from "./Coin";
import { Flex } from "../Box";
import { CoinProps } from "./types";

export default {
  title: "Components/Coin[NEW]",
  component: Coin,
};

export const Default: React.FC<CoinProps> = ({ symbol = "ETH", ...props }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Coin symbol="FINIX" />
      <Flex alignItems="center">
        <Coin symbol="BTC" size="30px" mr="10px" />
        Bitcoin
      </Flex>
      <Coin symbol={symbol} {...props} />
    </div>
  );
};
