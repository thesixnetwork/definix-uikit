import React from "react";
import { InjectedModalProps } from "../../widgets/Modal";
interface Props extends InjectedModalProps {
    title: string;
    content: string;
    callback: () => void;
    buttonLabel: string;
}
declare const AlertModal: React.FC<Props>;
export default AlertModal;
