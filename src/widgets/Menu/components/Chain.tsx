import { useMatchBreakpoints } from "@/hooks";
import React, { useState } from "react";
import { ChainToggle, ChainToggleItem } from "../../../components/ButtonMenu";
import { ChainBscIcon, ChainKlaytnIcon } from "../../../components/Icon";
import { TranslateProps } from "../types";

interface Props extends TranslateProps {
  toggleScale?: "sm" | "md";
}

const Chain: React.FC<Props> = ({ toggleScale }) => {
  const { isMobile } = useMatchBreakpoints();
  const [chainIndex, setChainIndex] = useState(0);
  return (
    <div>
      <ChainToggle toggleScale={isMobile ? "sm" : "md"} activeIndex={chainIndex} onItemClick={setChainIndex}>
        <ChainToggleItem as="a" href="#d" startIcon={<ChainBscIcon />}>
          {toggleScale === "sm" ? "bsc" : "Binance smart chain"}
        </ChainToggleItem>
        <ChainToggleItem as="a" href="#a" startIcon={<ChainKlaytnIcon />}>
          Klaytn chain
        </ChainToggleItem>
      </ChainToggle>
    </div>
  );
};

export default React.memo(Chain);
