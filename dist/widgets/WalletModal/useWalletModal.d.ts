import React from "react";
import { Login } from "./types";
interface ReturnType {
    onPresentConnectModal: () => void;
}
declare const useWalletModal: (Trans: React.FC<{
    i18nKey: string;
}>, login: Login, logout: () => void, account?: string | undefined) => ReturnType;
export default useWalletModal;
