import React from "react";
import { TranslateProps } from "src/widgets/Menu/types";
import { InjectedModalProps } from "../../widgets/Modal";
interface Props extends InjectedModalProps, TranslateProps {
    onLogout: () => void;
}
declare const NetworkChangeModal: React.FC<Props>;
export default NetworkChangeModal;
