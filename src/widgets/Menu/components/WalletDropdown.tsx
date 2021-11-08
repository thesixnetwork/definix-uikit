import React, { useState, useCallback, useEffect } from 'react'
import { Flex } from '../../../components/Box';
import { CheckBIcon } from '../../../components/Icon';
import { Dropdown, DropdownItem, DropdownProps } from '../../../components/Dropdown';
import { ColorStyles } from '../../../theme/colors';
import { TranslateProps } from '../types';

interface Props extends Partial<DropdownProps>, TranslateProps {
  account: string
  logout: () => void
  target: React.ReactElement
}

let timeout: any;

const WalletDropdown: React.FC<Props> = ({ target, account, logout, Trans, ...props }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const onItemClick = useCallback(
    (index: number) => {
      if (index === 0) {
        window.open(`https://scope.klaytn.com/account/${account}?tabId=txList`, '_blank')
      } else if (index === 1) {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(account)
        }
        setIsCopied(true)
      } else {
        logout()
      }
    },
    [account, logout],
  )

  useEffect(() => {
    if (!isCopied) return

    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
    timeout = setTimeout(() => {
      setIsCopied(false)
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
    }, 3000)
  }, [isCopied])

  return (
    <Dropdown
      scale="sm"
      isOpen={isDropdownOpen}
      position="bottom"
      target={React.cloneElement(target, {
        onClick: () => setIsDropdownOpen(!isDropdownOpen),
      })}
      onItemClick={onItemClick}
      {...props}
    >
      <DropdownItem>
        <Trans i18nKey="View on KlaytnscopeTH" />
      </DropdownItem>
      <DropdownItem>
        <Flex width="100%" alignItems="center" justifyContent="space-between">
          <Trans i18nKey="Copy Address" />
          {isCopied && (
            <Flex alignItems="center" color={ColorStyles.MEDIUMGREY}>
              <CheckBIcon />
              <Trans i18nKey="Copied" />
            </Flex>
          )}
        </Flex>
      </DropdownItem>
      <DropdownItem>
        <Trans i18nKey="Disconnect" />
      </DropdownItem>
    </Dropdown>
  )
}

export default WalletDropdown
