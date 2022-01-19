import React from "react";
import Flex from "../Box/Flex";
import { Text } from "../Text";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { ColorStyles } from "../../theme";
import { AlertIcon, NotiIcon } from "../Icon";

export enum NotiType {
  ALERT = "alert",
  GUIDE = "guide",
}

export interface NotiProps extends SpaceProps {
  type?: "alert" | "guide" | NotiType;
  children?: React.ReactNode;
}

const StyledNoti = styled.div`
  width: 100%;

  svg {
    flex-shrink: 0;
    margin-top: 2px;
  }
  ${space}
`;

const Noti: React.FC<NotiProps> = ({ type, children, ...props }) => {
  return (
    <StyledNoti {...props}>
      <Flex alignItems="flex-start">
        {type === NotiType.ALERT ? <AlertIcon /> : <NotiIcon />}
        <Text
          ml="4px"
          textStyle={type === NotiType.ALERT ? "R_14R" : "R_12R"}
          color={type === NotiType.ALERT ? ColorStyles.RED : ColorStyles.MEDIUMGREY}
        >
          {children}
        </Text>
      </Flex>
    </StyledNoti>
  );
};

Noti.defaultProps = {
  type: "alert",
};

export default Noti;
