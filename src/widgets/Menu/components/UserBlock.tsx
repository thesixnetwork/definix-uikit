import React from "react";
import { Text } from "@/components/Text";
import { Flex } from "@/components/Box";
import { IconButton } from "@/components/Button";
import Button from "@/components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { ArrowRightGIcon, MoreNIcon, GnbMySIcon } from "@/components/Icon";
import styled from "styled-components";
import { ColorStyles } from "@/theme";

interface Props {
  isMobile: boolean;
  account?: string;
  login: Login;
  logout: () => void;
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 188px;
`

const StyledButton = styled.a`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  width: calc(100% + 40px);
  margin: 0 -20px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  background-color: ${({ theme }) => theme.colors[ColorStyles.DEEPBROWN]}
`

const UserBlock: React.FC<Props> = ({ isMobile, account, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return account ? (isMobile ?
      <Wrapper>
        <Flex pl="12px" flexDirection="column" alignItems="flex-start">
          <Text mt="55px" textStyle="R_12R" color="greyscale.mediumgrey">Wallet Address</Text>
          <Flex>
            <Text mt="2px" mr="4px" textStyle="R_18M" color="greyscale.black">{accountEllipsis}</Text>
            <IconButton startIcon={<MoreNIcon />}/>
          </Flex>
        </Flex>
        <StyledButton href="/farm">
          <Text textStyle="R_12M" color="greyscale.white">Net worth</Text>
          <Flex ml="12px" alignItems="center">
            <Text mr="7px" textStyle="R_12B" width="140px" color="greyscale.white">$132123123</Text>
            <IconButton startIcon={<ArrowRightGIcon />} />
          </Flex>
        </StyledButton>
      </Wrapper> : <>
        <Button
            scale="32"
            variant="light-brown"
            textStyle="R_12B"
            onClick={() => {
              onPresentAccountModal();
            }}
          >
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
      </>
    ) : (
      <Flex width="100%" height="188px" alignItems="center" justifyContent="center">
        <Button
          scale={isMobile ? '40' : '32'}
          variant="red"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </Button>
      </Flex>
    )
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
