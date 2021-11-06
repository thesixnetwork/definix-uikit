import React from "react";
import { IconButton } from "@/components/Button";
import { Flex } from "@/components/Box";
import { PanelProps, PushedProps, UserProps } from "../types";
import { CloseIcon } from "@/components/Icon";
import Chain from "./Chain";
import { ColorStyles } from "@/theme";

interface Props extends PanelProps, PushedProps, UserProps {}

const MobilePanelHeaderFixed: React.FC<Props> = ({ chain, pushNav, ...props }) => {
  return (
    <Flex p="0 20px 0 24px" width="100%" alignItems="center" justifyContent="space-between" bg={ColorStyles.WHITE}>
      {chain}
      <IconButton startIcon={<CloseIcon />} onClick={() => pushNav(false)} />
    </Flex>
  );
};

export default MobilePanelHeaderFixed;
