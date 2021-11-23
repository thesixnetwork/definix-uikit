import React from "react";
import { IconButton } from "../../../components/Button";
import { Flex } from "../../../components/Box";
import { CloseIcon } from "../../../components/Icon";
import { PanelProps, PushedProps, TranslateProps, UserProps } from "../types";
import Chain from "./Chain";
import { ColorStyles } from "../../../theme";

interface Props extends PanelProps, PushedProps, UserProps, TranslateProps {}

const MobilePanelHeaderFixed: React.FC<Props> = ({ pushNav, ...props }) => {
  return (
    <Flex p="0 18px 0 24px" width="100%" alignItems="center" justifyContent="space-between" bg={ColorStyles.WHITE}>
      <Chain {...props} />
      <IconButton onClick={() => pushNav(false)}>
        <CloseIcon />
      </IconButton>
    </Flex>
  );
};

export default MobilePanelHeaderFixed;
