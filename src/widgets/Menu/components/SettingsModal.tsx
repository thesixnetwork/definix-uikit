import React from "react";
import { Box } from "../../../components/Box";
import { Modal, ModalBody } from "../../Modal";
import { SettingsModalProps } from "../types";
import SlippageToleranceSetting from "./SlippageToleranceSettings";
import TransactionDeadlineSetting from "./TransactionDeadlineSetting";

const defaultOnDismiss = () => null;

const SettingsModal: React.FC<SettingsModalProps> = (props) => {
  const { onDismiss = defaultOnDismiss, Trans } = props;
  return (
    <Modal title={<Trans i18nKey="Setting" />} onDismiss={onDismiss}>
      <ModalBody>
        <SlippageToleranceSetting {...props} />
        <TransactionDeadlineSetting {...props} />
      </ModalBody>
    </Modal>
  );
};

export default SettingsModal;
