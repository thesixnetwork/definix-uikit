import React from "react";
import { IconButton } from "../../../components/Button";
import { Flex } from "../../../components/Box";
import { CloseIcon } from "../../../components/Icon";
import { PushedProps } from "../types";
import Chain from "./Chain";
import { ColorStyles } from "../../../theme";

interface Props extends PushedProps {}

const MobilePanelHeaderFixed: React.FC<Props> = ({ pushNav }) => {
  return (
    <Flex p="0 18px 0 24px" width="100%" alignItems="center" justifyContent="space-between" bg={ColorStyles.WHITE}>
      <Chain />
      <IconButton onClick={() => pushNav(false)}>
        <CloseIcon />
      </IconButton>
    </Flex>
  );
};

export default MobilePanelHeaderFixed;
