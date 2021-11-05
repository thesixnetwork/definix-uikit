import React, { useState } from "react";
import { Text } from "@/components/Text";
import { Flex } from "@/components/Box";
import { IconButton, ButtonVariants, ButtonScales } from "@/components/Button";
import Button from "@/components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { ArrowRightGIcon, MoreNIcon, GnbMySIcon } from "@/components/Icon";
import styled from "styled-components";
import { ColorStyles, TextStyles } from "@/theme";
import { Dropdown, DropdownItem } from "@/components/Dropdown";
import { TranslateProps } from "../types";

interface Props extends TranslateProps {
  isMobile: boolean;
  account?: string;
  login: Login;
  logout: () => void;
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 188px;
`;

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
  background-color: ${({ theme }) => theme.colors[ColorStyles.DEEPBROWN]};
`;

const UserBlock: React.FC<Props> = ({ isMobile, account, login, logout, Trans }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return account ? (
    isMobile ? (
      <Wrapper>
        <Flex pl="12px" flexDirection="column" alignItems="flex-start">
          <Text mt="55px" textStyle={TextStyles.R_12R} color={ColorStyles.MEDIUMGREY}>
            <Trans label="Wallet Address" />
          </Text>
          <Flex>
            <Text mt="2px" mr="4px" textStyle={TextStyles.R_18M} color={ColorStyles.BLACK}>
              {accountEllipsis}
            </Text>
            <Dropdown
              scale="sm"
              left="-105px"
              isOpen={isDropdownOpen}
              position="bottom"
              target={<IconButton startIcon={<MoreNIcon />} onClick={() => setIsDropdownOpen(!isDropdownOpen)} />}
              onItemClick={(index) => console.log(index)}
            >
              <DropdownItem>
                <Trans label="View on KlaytnscopeTH" />
                </DropdownItem>
              <DropdownItem><Trans label="Copy Address" /></DropdownItem>
              <DropdownItem isDivide={true}><Trans label="Disconnect" /></DropdownItem>
            </Dropdown>
          </Flex>
        </Flex>
        <StyledButton href="/farm">
          <Text textStyle={TextStyles.R_12M} color={ColorStyles.WHITE}>
            <Trans label="Net Worth" />
          </Text>
          <Flex ml="12px" alignItems="center">
            <Text mr="7px" textStyle={TextStyles.R_12B} width="140px" color={ColorStyles.WHITE}>
              $132123123
            </Text>
            <IconButton startIcon={<ArrowRightGIcon />} />
          </Flex>
        </StyledButton>
      </Wrapper>
    ) : (
      <>
        <Button
          scale={ButtonScales.S32}
          variant={ButtonVariants.LIGHTBROWN}
          textStyle={TextStyles.R_12B}
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
        <Button
          ml="8px"
          scale={ButtonScales.S32ICON}
          minWidth="auto"
          variant={ButtonVariants.DEEPBROWN}
          startIcon={<GnbMySIcon />}
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          <Text textStyle={TextStyles.R_12B} ml="6px">
            <Trans label="MY" />
          </Text>
        </Button>
      </>
    )
  ) : (
    <Flex width="100%" height={isMobile ? "188px" : "auto"} alignItems="center" justifyContent="center">
      <Button
        scale={isMobile ? ButtonScales.S40 : ButtonScales.S32}
        variant={ButtonVariants.RED}
        onClick={() => {
          onPresentConnectModal();
        }}
      >
        <Trans label="Connect Wallet" />
      </Button>
    </Flex>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
