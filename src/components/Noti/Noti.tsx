import React from "react";
import Flex from "../Box/Flex";
import { Text } from "../Text";
import styled, { DefaultTheme } from "styled-components";
import { space, SpaceProps } from "styled-system";
import { ColorStyles } from "../../theme";

export enum NotiType {
  ALERT = "alert",
  GUIDE = "guide",
}

interface NotiProps extends SpaceProps {
  type: NotiType;
  children?: React.ReactNode;
}

const StyledNoti = styled.div`
  width: 100%;
  ${space}
`;

const StyledIcon = styled.div`
  width: 14px;
  height: 14px;
  min-width: 14px;
  margin-right: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 10px;
  &.alert {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
  &.guide {
    border: 1.2px solid ${({ theme }) => theme.colors.mediumgrey};
    color: ${({ theme }) => theme.colors.mediumgrey};
  }
`;

const Noti: React.FC<NotiProps> = ({ type, children, ...props }) => {
  return (
    <StyledNoti {...props}>
      <Flex alignItems="center">
        <StyledIcon className={type}>!</StyledIcon>
        <Text
          textStyle={type === NotiType.ALERT ? "R_14R" : "R_12R"}
          color={type === NotiType.ALERT ? ColorStyles.RED : ColorStyles.MEDIUMGREY}
        >
          {children}
        </Text>
      </Flex>
    </StyledNoti>
  );
};
export default Noti;
