import React from "react";
import styled from "styled-components";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { Button, IconButton, ButtonVariants } from "../../../components/Button";
import { useWalletModal } from "../../WalletModal";
import { MoreNIcon, GnbMySIcon } from "../../../components/Icon";
import { ColorStyles } from "../../../theme/colors";
import { TextStyles } from "../../../theme/text";
import { useMatchBreakpoints } from "../../../hooks";
import { TranslateProps, UserProps } from "../types";
import WalletDropdown from "./WalletDropdown";
import { localStorageKey, connectorLocalStorageKey } from "src/widgets/WalletModal/config";

interface Props extends UserProps, TranslateProps {}

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

const UserBlock: React.FC<Props> = ({ account, login, logout, Trans }) => {
  const { isMaxLg } = useMatchBreakpoints();
  const isMobile = isMaxLg;
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;

  const onLogout = () => {
    window.localStorage.removeItem(localStorageKey);
    window.localStorage.removeItem(connectorLocalStorageKey);
    logout();
  };

  if (account) {
    return isMobile ? (
      <Wrapper>
        <Flex pl="12px" flexDirection="column" alignItems="flex-start">
          <Text mt="55px" textStyle={TextStyles.R_12R} color={ColorStyles.MEDIUMGREY}>
            <Trans i18nKey="Wallet Address" />
          </Text>
          <Flex>
            <Text mt="2px" mr="4px" textStyle={TextStyles.R_18M} color={ColorStyles.BLACK}>
              {accountEllipsis}
            </Text>
            <WalletDropdown
              left="-108px"
              float="left"
              width="170px"
              Trans={Trans}
              target={
                <IconButton>
                  <MoreNIcon />
                </IconButton>
              }
              account={account}
              logout={onLogout}
            />
          </Flex>
        </Flex>
      </Wrapper>
    ) : (
      <>
        <Flex>
          <WalletDropdown
            float="right"
            width="188px"
            target={
              <Button width="110px" xs variant={ButtonVariants.LIGHTBROWN} textStyle={TextStyles.R_12B}>
                {accountEllipsis}
              </Button>
            }
            account={account}
            logout={onLogout}
            Trans={Trans}
          />
        </Flex>
        <Button
          ml="8px"
          xs
          variant={ButtonVariants.DEEPBROWN}
          startIcon={<GnbMySIcon viewBox="0 0 24 24" />}
          onClick={() => {
            location.href = "/my";
            // onPresentAccountModal();
          }}
        >
          <Text textStyle={TextStyles.R_12B}>
            <Trans i18nKey="MY" />
          </Text>
        </Button>
      </>
    );
  }

  return (
    <Flex width="100%" height={isMobile ? "148px" : "auto"} alignItems="center" justifyContent="center">
      <Button
        {...(isMobile ? { md: true } : { xs: true })}
        variant={ButtonVariants.RED}
        width={isMobile ? "186px" : "142px"}
        onClick={() => {
          onPresentConnectModal();
        }}
      >
        <Trans i18nKey="Connect Wallet" />
      </Button>
    </Flex>
  );
};

export default UserBlock;
