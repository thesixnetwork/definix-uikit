import React from "react";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { GnbMySIcon } from "../../../components/Icon";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <Flex>
          <Button
            scale="32"
            variant="light-brown"
            textStyle="R_12B"
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            {accountEllipsis}
          </Button>
          <Button
            ml="8px"
            scale="32_icon"
            minWidth="auto"
            variant="deep-brown"
            startIcon={<GnbMySIcon />}
            onClick={() => {
              onPresentAccountModal();
            }}
          >
            <Text textStyle="R_12B" ml="6px">MY</Text>
          </Button>
        </Flex>
      ) : (
        <Button
          scale="32"
          variant="red"
          textStyle="R_12B"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </Button>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
