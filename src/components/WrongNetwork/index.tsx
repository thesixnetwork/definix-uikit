import React from "react";
import { useModal } from "src";
import { pxToRem } from "src/style/mixin";
import { NAV_HEIGHT_MOBILE, NAV_HEIGHT_PC } from "src/widgets/Menu/config";
import { useMenu } from "src/widgets/Menu/MenuContext";
import styled from "styled-components";
import { Flex } from "../Box";
import { CheckErrorIcon } from "../Icon";
import { Text } from "../Text";
import NetworkChangeModal from "./NetworkChangeModal";
import { localStorageKey, connectorLocalStorageKey } from "../../widgets/WalletModal/config";

interface Props {
  isShow: boolean;
}

const Wrap = styled(Flex)`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndices.wrongNetwork};
  top: ${NAV_HEIGHT_PC}px;
  right: ${pxToRem(60)};
  padding: 13px 20px 13px 16px;
  border-radius: 16px;
  box-shadow: 0 8px 8px 0 rgba(254, 169, 72, 0.3);
  background-color: ${({ theme }) => theme.colors.orange};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ㅕ ${({ theme }) => theme.mediaQueries.mobileXl} {
    padding: 10px 20px 10px 16px;
    top: ${NAV_HEIGHT_MOBILE + 8}px;
    right: ${pxToRem(20)};
  }
`;

const StyledText = styled(Text)`
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.textStyle.R_14M}
`;

const WrongNetwork: React.FC<Props> = ({ isShow }) => {
  const { Trans, logout, account } = useMenu();
  const onLogout = () => {
    window.localStorage.removeItem(localStorageKey);
    window.localStorage.removeItem(connectorLocalStorageKey);
    logout();
  };

  const [onPresentNetworkModal] = useModal(<NetworkChangeModal Trans={Trans} onLogout={onLogout} />);

  return account && isShow ? (
    <Wrap
      onClick={() => {
        onPresentNetworkModal();
      }}
    >
      <CheckErrorIcon />
      <StyledText>
        <Trans i18nKey="The network is not the" />
      </StyledText>
    </Wrap>
  ) : (
    <></>
  );
};

export default WrongNetwork;
