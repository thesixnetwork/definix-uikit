import React from "react";
import { useMatchBreakpoints } from "../../../hooks";
import { ChainToggle, ChainToggleItem } from "../../../components/ButtonMenu";
import { TokenKbnbIcon, TokenKlayIcon } from "../../../components/Icon";
import { TranslateProps } from "../types";

interface Props extends TranslateProps {}

const Chain: React.FC<Props> = ({ Trans }) => {
  const { isMaxXl } = useMatchBreakpoints();
  const isMobile = isMaxXl;

  return (
    <div>
      <ChainToggle scale={isMobile ? "sm" : "md"} activeIndex={1}>
        <ChainToggleItem as="a" href="https://bsc.definix.com" startIcon={<TokenKbnbIcon viewBox="0 0 200 200" />}>
          <Trans i18nKey={isMobile ? "BSC" : "Binance Smart Chain"} />
        </ChainToggleItem>
        <ChainToggleItem as="a" startIcon={<TokenKlayIcon viewBox="0 0 200 200" />}>
          <Trans i18nKey="Klaytn Chain" />
        </ChainToggleItem>
      </ChainToggle>
    </div>
  );
};

export default React.memo(Chain);
