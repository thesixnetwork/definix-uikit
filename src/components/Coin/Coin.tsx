import React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { COIN_SYMBOL, CoinProps, COIN_SRCSET } from "./types";

export const getTokenImageUrl = (tokenName: COIN_SYMBOL | string) => {
  if (!tokenName) {
    return "";
  }
  try {
    return COIN_SRCSET[tokenName as COIN_SYMBOL]
  } catch {
    return null;
  }
};

const StyledCoinImage = styled.img<SpaceProps>`
  border-radius: ${({ theme }) => theme.radii.circle};
  ${space}
`;

const StyledEmpty = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

const Coin: React.FC<CoinProps> = ({ symbol, size, ...props }) => {
  const imgUrl = getTokenImageUrl(symbol);
  return imgUrl ? <StyledCoinImage width={size} height={size} src={imgUrl[0]} srcSet={`${imgUrl[1]} 2x, ${imgUrl[2]} 3x`} alt={symbol} {...props} /> : <StyledEmpty width={size} height={size}/>;
};

Coin.defaultProps = {
  size: "20px",
};

export default Coin;
