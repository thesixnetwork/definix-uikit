import React, { useState } from "react";
import { ChainToggle, ChainToggleItem } from "../../../components/ButtonMenu";
import { ChainBscIcon, ChainKlaytnIcon } from "../../../components/Icon";
import { TranslateProps } from "../types";

interface Props extends TranslateProps {
  toggleScale?: "sm" | "md";
}

const Chain: React.FC<Props> = ({ toggleScale, Trans }) => {
  const [chainIndex, setChainIndex] = useState(0);
  return (
    <div>
      <ChainToggle toggleScale={toggleScale} activeIndex={chainIndex} onItemClick={setChainIndex}>
        <ChainToggleItem as="a" href="#d" startIcon={<ChainBscIcon />}>
          <Trans label={toggleScale === "sm" ? "bsc" : "Binance smart chain"} />
        </ChainToggleItem>
        <ChainToggleItem as="a" href="#a" startIcon={<ChainKlaytnIcon />}>
          <Trans label="Klaytn chain" />
        </ChainToggleItem>
      </ChainToggle>
    </div>
  );
};

export default React.memo(Chain);
