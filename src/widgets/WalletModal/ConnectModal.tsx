import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Box";
import { Text } from "../../components/Text";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";
import { ColorStyles, TextStyles } from "@/theme";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const HelpLink = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors[ColorStyles.BLACK]};
`;

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal title="Connect to a wallet" onDismiss={onDismiss} noPadding={true}>
    {config.map((entry, index) => (
      <WalletCard
        key={entry.title}
        login={login}
        walletConfig={entry}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
    <Flex textStyle={TextStyles.R_14R} alignItems="center" justifyContent="center" py="S_20">
      <Text color={ColorStyles.DEEPGREY}>I’m new to this,</Text>
      <HelpLink href="https://sixnetwork.gitbook.io/definix-on-klaytn-en/guides-and-faqs/how-to-use-kaikas-on-definix"> How to set up</HelpLink>
    </Flex>
  </Modal>
);

export default ConnectModal;
