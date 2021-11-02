import React, { useState } from "react";
import { ChainToggle, ChainToggleItem } from "../../../components/ButtonMenu";
import { ChainBscIcon, ChainKlaytnIcon } from "../../../components/Icon";

const Chain: React.FC = () => {
  const [chainIndex, setChainIndex] = useState(0);
  return (
    <div>
      <ChainToggle activeIndex={chainIndex} onItemClick={setChainIndex}>
        <ChainToggleItem as="a" href="#d" startIcon={<ChainBscIcon />} label="Binance smart chain" />
        <ChainToggleItem as="a" href="#a" startIcon={<ChainKlaytnIcon />} label="Klaytn chain" />
      </ChainToggle>
    </div>
  );
};

export default React.memo(Chain);
