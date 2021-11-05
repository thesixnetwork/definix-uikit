import React, { useState, useCallback, useEffect } from "react";
import { Text } from "@/components/Text";
import { Flex } from "@/components/Box";
import { IconButton, ButtonVariants, ButtonScales } from "@/components/Button";
import Button from "@/components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";
import { ArrowRightGIcon, MoreNIcon, GnbMySIcon, CheckBIcon } from "@/components/Icon";
import styled from "styled-components";
import { ColorStyles, TextStyles } from "@/theme";
import { Dropdown, DropdownItem } from "@/components/Dropdown";
import { TranslateProps } from "../types";
import { useMatchBreakpoints } from "@/hooks";

interface Props extends TranslateProps {
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

function copyToClipboard(val: string) {
  return new Promise((resolve, reject) => {
    const element = document.createElement("textarea");
    element.value = val;
    element.setAttribute("readonly", "");
    element.style.position = "absolute";
    element.style.left = "-9999px";
    document.body.appendChild(element);
    element.select();
    const returnValue = document.execCommand("copy");
    document.body.removeChild(element);
    resolve(true);
    if (!returnValue) {
      reject(false);
    }
  });
}

let timeout: any;

const UserBlock: React.FC<Props> = ({ account, login, logout }) => {
  const { isMobile } = useMatchBreakpoints();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

  const onItemClick = useCallback(
    (index: number) => {
      if (index === 0) {
        window.open(`https://scope.klaytn.com/account/${account}?tabId=txList`, "_blank");
      } else if (index === 1) {
        copyToClipboard(account as string);
        setIsCopied(true);
      } else {
        logout();
      }
    },
    [account]
  );

  useEffect(() => {
    if (!isCopied) return;

    timeout && clearTimeout(timeout);
    timeout = null;
    timeout = setTimeout(() => {
      setIsCopied(false);
      timeout && clearTimeout(timeout);
      timeout = null;
    }, 3000);
  }, [isCopied]);

  return account ? (
    isMobile ? (
      <Wrapper>
        <Flex pl="12px" flexDirection="column" alignItems="flex-start">
          <Text mt="55px" textStyle={TextStyles.R_12R} color={ColorStyles.MEDIUMGREY}>
            Wallet Address
          </Text>
          <Flex>
            <Text mt="2px" mr="4px" textStyle={TextStyles.R_18M} color={ColorStyles.BLACK}>
              {accountEllipsis}
            </Text>
            <Dropdown
              scale="sm"
              width="188px"
              left="-105px"
              isOpen={isDropdownOpen}
              position="bottom"
              target={<IconButton startIcon={<MoreNIcon />} onClick={() => setIsDropdownOpen(!isDropdownOpen)} />}
              onItemClick={onItemClick}
            >
              <DropdownItem>View on KlaytnscopeTH</DropdownItem>
              <DropdownItem>
                <Flex width="100%" alignItems="center" justifyContent="space-between">
                  Copy Address
                  {isCopied && (
                    <Flex alignItems="center" color={ColorStyles.MEDIUMGREY}>
                      <CheckBIcon />
                      Copied
                    </Flex>
                  )}
                </Flex>
              </DropdownItem>
              <DropdownItem isDivide={true}>Disconnect</DropdownItem>
            </Dropdown>
          </Flex>
        </Flex>
        <StyledButton href="/farm">
          <Text textStyle={TextStyles.R_12M} color={ColorStyles.WHITE}>
            Net Worth
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
            MY
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
        Connect Wallet
      </Button>
    </Flex>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
