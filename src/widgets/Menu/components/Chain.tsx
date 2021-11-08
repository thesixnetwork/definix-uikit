import React from 'react'
import { useMatchBreakpoints } from '../../../hooks';
import { ChainToggle, ChainToggleItem } from '../../../components/ButtonMenu'
import { ChainBscIcon, ChainKlaytnIcon } from '../../../components/Icon'
import { TranslateProps } from '../types';

interface Props extends TranslateProps {}

const Chain: React.FC<Props> = ({ Trans }) => {
  const { isMobile } = useMatchBreakpoints()

  return (
    <div>
      <ChainToggle toggleScale={isMobile ? 'sm' : 'md'} activeIndex={1}>
        <ChainToggleItem as="a" href="https://bsc.definix.com" startIcon={<ChainBscIcon viewBox="0 0 32 32" />}>
          <Trans i18nKey={isMobile ? 'BSC' : 'Binance Smart Chain'} />
        </ChainToggleItem>
        <ChainToggleItem as="a" startIcon={<ChainKlaytnIcon viewBox="0 0 22 22" />}>
          <Trans i18nKey="Klaytn Chain" />
        </ChainToggleItem>
      </ChainToggle>
    </div>
  )
}

export default React.memo(Chain)
