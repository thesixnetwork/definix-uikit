import React from "react";
import { Modal, useModal } from ".";
import { InjectedProps } from "./types";
import Button from "../../components/Button/Button";
import Heading from "../../components/Heading/Heading";
import Checkbox from "../../components/Checkbox/Checkbox";
import CheckboxLabel from "../../components/Checkbox/CheckboxLabel";
import Box from "../../components/Box/Box";
import Text from "../../components/Text/Text";
import { ModalBody, ModalFooter } from "./Modal";

export default {
  title: "Widgets/Modal[Ing]",
  component: Modal,
  argTypes: {},
};

interface CustomModalProps extends InjectedProps {
  title: string;
}

const CustomModal: React.FC<CustomModalProps> = ({ title, onDismiss }) => (
  <Modal title={title} onDismiss={onDismiss}>
    <ModalBody isBody>
      <Heading>{title}</Heading>
    </ModalBody>
    <ModalFooter isFooter>
      <Button>This button Does nothing</Button>
    </ModalFooter>
  </Modal>
);
const DisclaimerModal: React.FC<InjectedProps> = ({ onDismiss }) => (
  <Modal title="Disclaimers" hideCloseButton mobileFull onDismiss={onDismiss}>
    <ModalBody isBody maxWidth="438px">
      <Box
        border="1px solid"
        borderColor="lightgrey"
        height="328px"
        overflow="scroll"
        textStyle="R_12R"
        color="deepgrey"
        borderRadius="8px"
        paddingX="3"
        paddingTop="3"
      >
        <Box>
          <Text className="mb-3">
            Definix is solely a marketplace (the “Marketplace”) which provides a tool. The Rebalancing Farm (the “Farm”)
            has been managed by a 3rd party called “Enigma” (the “Manager”). The information about the Farm has been
            displayed on Definix website (this “Website”) for informational purposes only in relation to a potential
            opportunity available in the Farm.
          </Text>

          <Text className="mb-3">
            No advice on investment; Risk of Loss
            <br />
            Each investor must undertake its own independent examination and investigation of the Marketplace and the
            Farm, including the merits and risks involved in an investment in the Farm, and must base its investment
            decision - including a determination whether the Farm would be a suitable investment for the investor - on
            such examination and investigation and must not rely on the Manager in making such investment decision.
            Prospective investors must not construe the contents of this Website as legal, tax, investment, or other
            advice. Prospective investors must acknowledge that the Farm may be affected by factors, including technical
            difficulties with the performance, bugs, glitches, lack of functionality, and attacks. The Marketplace will
            not be liable for any loss, whether such loss is direct, indirect, special or consequential, suffered by any
            party as a result of their use of the Marketplace and the Farm. Each investor must be solely responsible for
            any damage to any loss that results from any activities on the Marketplace and the Farm.
          </Text>

          <Text className="mb-3">
            Performance Disclosures
            <br />
            Performance information is provided for informational purposes only. Past performance of the Farm and/or the
            Manager is not necessarily indicative of future results, and there can be no assurance that any projections,
            targets or estimates of future performance will be realized. Future performance of the Farm may vary
            substantially from the performance provided on this Website. An investor may lose all or a substantial part
            of its investment in the Farm.
          </Text>

          <Text>
            The information on this Website may be subject to change at any time without prior notice to the user.
          </Text>
        </Box>
      </Box>
      <CheckboxLabel control={<Checkbox />} className="my-5">
        <Text textStyle="R_14R">I have read all the information above and agree to using the service.</Text>
      </CheckboxLabel>
    </ModalBody>
    <ModalFooter isFooter>
      <Button scale="40" width="100%" onClick={onDismiss}>
        Confirm
      </Button>
      <CheckboxLabel control={<Checkbox scale="sm" variantColor="lightbrown" />} className="mt-6">
        <Text textStyle="R_12R" color="mediumgrey">
          Do not show this message for 14 days
        </Text>
      </CheckboxLabel>
    </ModalFooter>
  </Modal>
);

export const Default: React.FC = () => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />);
  const [onPresent2] = useModal(<CustomModal title="Modal 2" />);
  const [onPresent3] = useModal(<DisclaimerModal />);
  return (
    <div>
      <Button scale="32" onClick={onPresent1}>
        Open modal 1
      </Button>
      <Button scale="32" onClick={onPresent2}>
        Open modal 2
      </Button>
      <Button scale="32" onClick={onPresent3}>
        Open modal 3
      </Button>
    </div>
  );
};

export const DisableOverlayClick: React.FC = () => {
  const [onPresent1] = useModal(<CustomModal title="Modal 1" />, false);

  return (
    <div>
      <Button onClick={onPresent1}>Disabled overlay click</Button>
    </div>
  );
};

interface BackButtonModalProps extends InjectedProps {
  title: string;
}

const BackButtonModal: React.FC<BackButtonModalProps> = ({ title, onDismiss }) => {
  const handleOnBack = () => {
    return 1;
  };

  return (
    <Modal title={title} onDismiss={onDismiss} onBack={handleOnBack} hideCloseButton>
      <Button onClick={onDismiss} variant="text">
        Consumer can still close it.
      </Button>
    </Modal>
  );
};

export const WithBackButton: React.FC = () => {
  const [onPresent1] = useModal(<BackButtonModal title="Modal with no X" />, false);

  return <Button onClick={onPresent1}>Only Back Button</Button>;
};
