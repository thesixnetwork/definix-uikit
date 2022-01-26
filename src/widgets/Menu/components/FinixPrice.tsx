import React from "react";
import { Coin, ColorStyles, Flex, Text } from "src";

interface IProps {
  price?: string | number;
}

const FinixPrice: React.FC<IProps> = ({ price }) => {
  return (
    <Flex alignItems="center">
      <Coin symbol="FINIX" size="18px" />
      <Text ml="6px" textStyle="R_14B" color={ColorStyles.BLACK}>
        ${price}
      </Text>
    </Flex>
  );
};

export default React.memo(FinixPrice);
