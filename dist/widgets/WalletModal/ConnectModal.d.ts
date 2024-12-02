import React from "react";
import { Login } from "./types";
interface Props {
    login: Login;
    Trans: React.FC<{
        i18nKey: string;
    }>;
    onDismiss?: () => void;
}
declare const ConnectModal: React.FC<Props>;
export default ConnectModal;
