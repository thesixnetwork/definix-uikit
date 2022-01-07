import React from "react";
import { Text } from "../../../components/Text";
import { Flex } from "../../../components/Box";
import { Button } from "../../../components/Button";
import { InjectedModalProps, Modal, ModalBody, ModalFooter } from "../../Modal";
import { TranslateProps } from "../types";

interface Props extends TranslateProps, InjectedModalProps {}

const BSCNotiModal: React.FC<Props> = ({ Trans, onDismiss = () => null }) => {
  return (
    <Modal hideHeader onDismiss={onDismiss}>
      <ModalBody isBody pt="24px" maxWidth="272px" minHeight="88px" display="flex" justifyContent="center">
        <Text textStyle="R_14R" color="deepgrey">
          <Trans i18nKey="Binance Smart Chain is" />
        </Text>
      </ModalBody>
      <ModalFooter isFooter>
        <Flex>
          <Button
            width="50%"
            mr="4px"
            variant="lightbrown"
            onClick={() => {
              onDismiss();
            }}
          >
            <Trans i18nKey="Cancel" />
          </Button>
          <Button
            width="50%"
            ml="4px"
            onClick={() => {
              location.href = "https://bsc.definix.com";
              onDismiss();
            }}
          >
            <Trans i18nKey="Go to BSC" />
          </Button>
        </Flex>
      </ModalFooter>
    </Modal>
  );
};
export default BSCNotiModal;
