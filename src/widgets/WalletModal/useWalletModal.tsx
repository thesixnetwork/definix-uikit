import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";
import { Login } from "./types";

interface ReturnType {
  onPresentConnectModal: () => void;
}

const useWalletModal = (Trans: React.FC<{
  i18nKey: string;
}>, login: Login, logout: () => void, account?: string): ReturnType => {
  const [onPresentConnectModal] = useModal(<ConnectModal login={login} Trans={Trans} />);
  return { onPresentConnectModal };
};

export default useWalletModal;
