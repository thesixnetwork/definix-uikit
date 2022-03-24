import React from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { Flex } from "../../components/Box";
import { connectorLocalStorageKey, localStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const StyledButton = styled.div`
  cursor: pointer;
  display: flex;
  padding-top: 26px;
  padding-bottom: 26px;
  width: 136px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    .icon {
      opacity: 0.8;
    }
    .text {
      opacity: 0.6;
    }
  }
`;

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon, width, height } = walletConfig;
  return (
    <StyledButton
      onClick={() => {
        login(walletConfig.connectorId);
        // window.localStorage.setItem(localStorageKey, "1");
        // window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Flex width={width ? width + "px" : "36px"} height="36px" alignItems="center" className="icon">
        <Icon width="100%" />
      </Flex>
      <Text mt="9px" textStyle="R_14R" color="black" className="text">
        {title}
      </Text>
    </StyledButton>
  );
};

export default WalletCard;
