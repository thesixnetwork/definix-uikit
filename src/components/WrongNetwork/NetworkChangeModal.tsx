import React from 'react'
import { TranslateProps } from 'src/widgets/Menu/types';
import { InjectedModalProps, Modal, ModalBody, ModalFooter } from "../../widgets/Modal";
import { Button } from '../Button';
import { AlertIcon } from '../Icon';
import { Text } from '../Text';

interface Props extends InjectedModalProps, TranslateProps {
  onLogout: () => void;
}

const NetworkChangeModal: React.FC<Props> = ({ Trans, onLogout, onDismiss = () => null }) => {
  return <Modal title={<Trans i18nKey="Network Change" />} onDismiss={onDismiss}>
    <ModalBody isBody maxWidth="298px" pt="6px" display="flex" justifyContent="center" alignItems="center">
      <AlertIcon />
      <Text textStyle="R_14R" mt="16px" color="deepgrey" textAlign="center">
        <Trans i18nKey="Please change the wallet" />
      </Text>
    </ModalBody>
    <ModalFooter isFooter>
      <Button
        onClick={() => {
          onLogout();
          onDismiss();
        }}
      >
        <Trans i18nKey="Disconnect" />
      </Button>
    </ModalFooter>
  </Modal>
}

export default NetworkChangeModal
