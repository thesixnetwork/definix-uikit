import React from "react";
import { useMatchBreakpoints } from "../../../hooks";
import { ChainToggle, ChainToggleItem } from "../../../components/ButtonMenu";
import { TokenKbnbIcon, TokenKlayIcon } from "../../../components/Icon";
import { useMenu } from "../MenuContext";
import { useModal } from "../../Modal";
import BSCNotiModal from "./BSCNotiModal";

const Chain: React.FC = () => {
  const { isMaxXl } = useMatchBreakpoints();
  const isMobile = isMaxXl;
  const { Trans } = useMenu();

  const [onPresentAlertModal] = useModal(<BSCNotiModal Trans={Trans} />);
  return (
    <div>
      <ChainToggle scale={isMobile ? "sm" : "md"} activeIndex={1}>
        <ChainToggleItem
          startIcon={<TokenKbnbIcon viewBox="0 0 200 200" />}
          onClick={() => {
            onPresentAlertModal();
          }}
        >
          <Trans i18nKey={isMobile ? "BSC" : "Binance Smart Chain"} />
        </ChainToggleItem>
        <ChainToggleItem startIcon={<TokenKlayIcon viewBox="0 0 200 200" />}>
          <Trans i18nKey="Klaytn Chain" />
        </ChainToggleItem>
      </ChainToggle>
    </div>
  );
};

export default React.memo(Chain);
