import React from "react";
import { FlexProps } from "../../components/Box";
import { ModalProps } from "./types";
interface BodyProps extends FlexProps {
    isBody: boolean;
}
interface FooterProps extends FlexProps {
    isFooter: boolean;
}
declare const Modal: React.FC<ModalProps>;
export declare const ModalBody: React.FC<BodyProps>;
export declare const ModalFooter: React.FC<FooterProps>;
export default Modal;
