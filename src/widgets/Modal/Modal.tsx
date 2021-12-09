import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Text from "../../components/Text/Text";
import { Box, Flex, FlexProps } from "../../components/Box";
import { ArrowBackIcon, CloseIcon } from "../../components/Svg";
import { IconButton } from "../../components/Button";
import { InjectedProps } from "./types";
import { NAV_HEIGHT_MOBILE } from "../Menu/config";

interface Props extends InjectedProps {
  title?: string | React.ReactElement;
  hideHeader?: boolean;
  hideCloseButton?: boolean;
  onBack?: () => void;
  mobileFull?: boolean;
  noPadding?: boolean;
}

const StyledModal = styled(Flex)<{ mobileFull: boolean }>`
  flex-direction: column;
  background: ${({ theme }) => theme.modal.background};
  border-radius: ${({ theme }) => theme.spacing.S_16}px;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  align-self: center;

  ${({ theme }) => theme.mediaQueries.xs} {
    width: auto;
    min-width: 300px;
    max-width: 100%;
  }

  ${({ mobileFull, theme }) =>
    mobileFull &&
    `
    border-radius: ${theme.spacing.S_16}px;
    ${theme.mediaQueries.mobile} {
      align-self: flex-start;
      flex: 1 1 auto;
      border-radius: 0;
      padding-bottom: calc(constant(safe-area-inset-bottom) + 30px);
      padding-bottom: calc(env(safe-area-inset-bottom) + 30px);
      min-height: calc(100vh - ${NAV_HEIGHT_MOBILE}px);
    }
  `}
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  padding: 22px 20px;

  ${({ theme }) => theme.mediaQueries.xs} {
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const ModalTitle = styled(Flex)`
  align-items: center;
  flex: 1;
`;

const StyledModalBody = styled(Flex)<{ noPadding: boolean; mobileFull: boolean }>`
  position: relative;
  flex: 1;
  ${({ noPadding, theme }) =>
    !noPadding &&
    `
    padding: 0px 20px 24px;
    ${theme.mediaQueries.xs} {
      padding-left: 24px;
      padding-right: 24px;
    }
  `};

  ${({ mobileFull, theme }) =>
    mobileFull &&
    `
    ${theme.mediaQueries.mobile} {
      flex: 4;
    }
  `}
`;

const StyledModalFooter = styled(Flex)<{ noPadding: boolean; mobileFull: boolean }>`
  width: 100%;
  flex: 1;
  ${({ noPadding, theme }) =>
    !noPadding &&
    `
    padding: 0px 20px 24px;
    ${theme.mediaQueries.xs} {
      padding-left: 24px;
      padding-right: 24px;
    }
  `};

  ${({ mobileFull, theme }) =>
    mobileFull &&
    `
    ${theme.mediaQueries.mobile} {
      padding-bottom: calc(constant(safe-area-inset-bottom) + 30px);
      padding-bottom: calc(env(safe-area-inset-bottom) + 30px);
      flex: 1;
    }
  `}
`;

const Modal: React.FC<Props> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideHeader = false,
  hideCloseButton = false,
  mobileFull = false,
  noPadding = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!modalRef.current) return;
    modalRef.current.focus();
    // const firstFocusElement = modalRef.current.querySelectorAll("input, button, a")[0];
    // (firstFocusElement as HTMLButtonElement).focus();
  }, []);

  return (
    <StyledModal ref={modalRef} mobileFull={mobileFull} tabIndex={0}>
      {!hideHeader && (
        <ModalHeader>
          <ModalTitle>
            {onBack && (
              <IconButton onClick={onBack} area-label="go back" mr="8px">
                <ArrowBackIcon />
              </IconButton>
            )}
            {title && <Text textStyle="R_18M">{title}</Text>}
          </ModalTitle>
          {!hideCloseButton && (
            <IconButton p="2px" onClick={onDismiss} aria-label="Close the dialog">
              <CloseIcon />
            </IconButton>
          )}
        </ModalHeader>
      )}
      <StyledModalBody flexDirection="column" noPadding={noPadding} mobileFull={mobileFull}>
        {React.Children.map(children, (child: React.ReactNode) => {
          if (!React.isValidElement(child)) {
            return <></>;
          }
          if ((child.type as any).name === "ModalBody") {
            return React.cloneElement(child);
          }
        })}
      </StyledModalBody>
      {React.Children.map(children, (child: React.ReactNode) => {
        if (!React.isValidElement(child)) {
          return <></>;
        }
        if ((child.type as any).name === "ModalFooter") {
          return (
            <StyledModalFooter noPadding={noPadding} mobileFull={mobileFull}>
              {React.cloneElement(child)}
            </StyledModalFooter>
          );
        }
      })}
    </StyledModal>
  );
};

export const ModalBody: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex position="relative" flexDirection="column" width="100%" {...props}>
      {children}
    </Flex>
  );
};

export const ModalFooter: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex position="relative" flexDirection="column" width="100%" justifyContent="flex-end" {...props}>
      {children}
    </Flex>
  );
};

export default Modal;
