import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/Box";
import { Text } from "../../components/Text";
import { Modal, ModalBody } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";
import { ColorStyles, TextStyles } from "../../theme";

interface Props {
  login: Login;
  Trans: React.FC<{
    i18nKey: string;
  }>;
  onDismiss?: () => void;
}

const HelpLink = styled.a`
  text-decoration: underline;
  color: ${({ theme }) => theme.colors[ColorStyles.BLACK]};
`;

const ConnectModal: React.FC<Props> = ({ login, Trans, onDismiss = () => null }) => (
  <Modal title={<Trans i18nKey="Connect Wallet" />} onDismiss={onDismiss} noPadding={true}>
    <ModalBody isBody maxWidth="320px" px="24px">
      <Flex flexWrap="wrap">
        {config.map((entry, index) => (
          <WalletCard
            key={entry.title}
            login={login}
            walletConfig={entry}
            onDismiss={onDismiss}
            mb={index < config.length - 1 ? "8px" : "0"}
          />
        ))}
      </Flex>
      <Flex alignItems="center" justifyContent="center" pt="S_20" pb="S_30">
        <HelpLink href="https://sixnetwork.gitbook.io/definix-on-klaytn-en/guides-and-faqs/how-to-use-kaikas-on-definix">
          <Text textStyle={TextStyles.R_14R} color="black">
            <Trans i18nKey="Learn how to set up" />
          </Text>
        </HelpLink>
      </Flex>
    </ModalBody>
  </Modal>
);

export default ConnectModal;
