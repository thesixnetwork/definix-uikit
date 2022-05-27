import React, { useState, useCallback, useEffect } from "react";
import copy from "copy-to-clipboard";
import { Flex } from "../../../components/Box";
import { CheckBIcon } from "../../../components/Icon";
import { Text } from "../../../components/Text";
import { Dropdown, DropdownItem, DropdownProps } from "../../../components/Dropdown";
import { ColorStyles } from "../../../theme/colors";
import { TranslateProps } from "../types";

interface Props extends Partial<DropdownProps>, TranslateProps {
  account: string;
  logout: () => void;
  target: React.ReactElement;
}

let timeout: any;

const WalletDropdown: React.FC<Props> = ({ target, account, logout, Trans, ...props }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const onItemClick = useCallback(
    (index: number) => {
      if (index === 0) {
        window.open(`https://www.klaytnfinder.io/account/${account}?tabId=txList`, "_blank");
      } else if (index === 1) {
        if (copy(account)) {
          setIsCopied(true);
        }
      } else {
        logout();
      }
    },
    [account, logout]
  );

  useEffect(() => {
    if (!isCopied) return;

    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      setIsCopied(false);
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
    }, 3000);
  }, [isCopied]);

  return (
    <Dropdown
      position="bottom"
      target={target}
      isOpen={isDropdownOpen}
      setIsOpen={setIsDropdownOpen}
      onItemClick={onItemClick}
      {...props}
    >
      <DropdownItem>
        <Trans i18nKey="View on Klaytnscope" />
      </DropdownItem>
      <DropdownItem>
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Trans i18nKey="Copy Address" />
          {isCopied && (
            <Flex alignItems="center" color={ColorStyles.MEDIUMGREY}>
              <CheckBIcon />
              <Text ml="2px">
                <Trans i18nKey="Copied" />
              </Text>
            </Flex>
          )}
        </Flex>
      </DropdownItem>
      <DropdownItem isDivide={true}>
        <Trans i18nKey="Disconnect" />
      </DropdownItem>
    </Dropdown>
  );
};

export default WalletDropdown;
