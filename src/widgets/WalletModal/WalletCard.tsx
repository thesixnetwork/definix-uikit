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
  padding: 26px;
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    .icon {
      opacity: .8;
    }
    .text {
      opacity: .6;
    }
  }
`;

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <StyledButton
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, "1");
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Flex width="36px" height="36px" alignItems="center" className="icon">
        <Icon width="36px" />
      </Flex>
      <Text mt="9px" textStyle="R_14R" color="black" className="text">
        {title}
      </Text>
    </StyledButton>
  );
};

export default WalletCard;
