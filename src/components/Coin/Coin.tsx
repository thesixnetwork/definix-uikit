import React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { CoinProps } from "./types";

export const getTokenImageUrl = (tokenName: string) => {
  if (!tokenName) {
    return "";
  }
  try {
    return require(`./coins/${tokenName.toLowerCase()}.png`);
  } catch {
    return null;
  }
};

const StyledCoinImage = styled.img<SpaceProps>`
  border-radius: ${({ theme }) => theme.radii.circle};
  ${space}
`;

const Coin: React.FC<CoinProps> = ({ symbol, size, ...props }) => {
  return <StyledCoinImage width={size} height={size} src={getTokenImageUrl(symbol)} alt={symbol} {...props} />;
};

Coin.defaultProps = {
  size: "20px",
};

export default Coin;
