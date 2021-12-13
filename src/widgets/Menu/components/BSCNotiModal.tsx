import React from 'react';
import { Text } from '../../../components/Text'
import { Button } from '../../../components/Button'
import { InjectedModalProps, Modal, ModalBody, ModalFooter } from "../../Modal";
import { TranslateProps } from '../types';

interface Props extends TranslateProps, InjectedModalProps {
}

const BSCNotiModal: React.FC<Props> = ({ Trans, onDismiss = () => null }) => {
  return <Modal hideHeader onDismiss={onDismiss}>
    <ModalBody isBody pt="24px" minHeight="88px" display="flex" justifyContent="center">
      <Text textStyle="R_14R" color="deepgrey">
        <Trans i18nKey="Binance Smart Chain is" />
      </Text>
    </ModalBody>
    <ModalFooter isFooter>
      <Button onClick={onDismiss}>
        <Trans i18nKey="Confirm" />
      </Button>
    </ModalFooter>
  </Modal>
}
export default BSCNotiModal;