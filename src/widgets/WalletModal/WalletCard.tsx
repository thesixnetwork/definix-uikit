import { TextStyles } from "@/theme";
import React from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { connectorLocalStorageKey } from "./config";
import { Login, Config } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const StyledButton = styled.div`
  cursor: pointer;
  padding: 14px 24px;
  display: flex;
  min-width: 320px;
  justify-content: space-between;
`

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <StyledButton
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text textStyle={TextStyles.R_16R} color="black">
        {title}
      </Text>
      <Icon width="32px" />
    </StyledButton>
  );
};

export default WalletCard;
