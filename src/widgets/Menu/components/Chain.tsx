import React from "react";
import { useMatchBreakpoints } from "../../../hooks";
import { ChainToggle, ChainToggleItem } from "../../../components/ButtonMenu";
import { Coin } from "../../../components/Coin";
import { useMenu } from "../MenuContext";
// import { useModal } from "../../Modal";
// import BSCNotiModal from "./BSCNotiModal";

const Chain: React.FC = () => {
  const { isMaxXl } = useMatchBreakpoints();
  const isMobile = isMaxXl;
  const { Trans } = useMenu();

  // const [onPresentAlertModal] = useModal(<BSCNotiModal Trans={Trans} />);
  return (
    <div>
      <ChainToggle scale={isMobile ? "sm" : "md"} activeIndex={1}>
        <ChainToggleItem
          startIcon={<Coin symbol="oBNB" size={isMobile ? "18px" : "16px"} />}
          onClick={() => {
            window.open("https://g2.bsc.definix.com", "_self");
            // onPresentAlertModal();
          }}
        >
          <Trans i18nKey={isMobile ? "BSC" : "Binance Smart Chain"} />
        </ChainToggleItem>
        <ChainToggleItem startIcon={<Coin symbol="KLAY" size={isMobile ? "18px" : "16px"} />}>
          <Trans i18nKey="Kaia Chain" />
        </ChainToggleItem>
      </ChainToggle>
    </div>
  );
};

export default React.memo(Chain);
