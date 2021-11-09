import React from "react";
import { Box } from "../../../components/Box";
import { Modal } from "../../Modal";
import { SettingsModalProps } from "../types";
import SlippageToleranceSetting from "./SlippageToleranceSettings";
import TransactionDeadlineSetting from "./TransactionDeadlineSetting";

const defaultOnDismiss = () => null;

const SettingsModal: React.FC<SettingsModalProps> = (props) => {
  const { onDismiss = defaultOnDismiss } = props;
  return (
    <Modal title="Settings" onDismiss={onDismiss}>
      <Box pb="S_24">
        <SlippageToleranceSetting {...props} />
        <TransactionDeadlineSetting {...props} />
      </Box>
    </Modal>
  );
};

export default SettingsModal;
