import React from "react";
import { IconButton } from "@/components/Button";
import { Flex } from "@/components/Box";
import { PanelProps, PushedProps, TranslateProps, UserProps } from "../types";
import { CloseIcon } from "@/components/Icon";
import Chain from "./Chain";
import { ColorStyles } from "@/theme";

interface Props extends PanelProps, PushedProps, UserProps, TranslateProps {}

const MobilePanelHeaderFixed: React.FC<Props> = ({ pushNav, ...props }) => {
  return (
    <Flex p="0 20px 0 24px" width="100%" alignItems="center" justifyContent="space-between" bg={ColorStyles.WHITE}>
      <Chain {...props} toggleScale="sm" />
      <IconButton startIcon={<CloseIcon />} onClick={() => pushNav(false)} />
    </Flex>
  );
};

export default MobilePanelHeaderFixed;
