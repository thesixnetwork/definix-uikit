import { useCallback, useContext, useEffect, cloneElement } from "react";
import { Context } from "./ModalContext";
import { Handler } from "./types";

const useModal = (modal: React.ReactElement, closeOnOverlayClick = true): [Handler, Handler] => {
  const { onPresent, onDismiss, setCloseOnOverlayClick } = useContext(Context);
  const onPresentCallback = useCallback(
    (props?: any) => {
      onPresent(
        cloneElement(modal, {
          ...(props || {}),
        })
      );
    },
    [modal, onPresent]
  );

  useEffect(() => {
    setCloseOnOverlayClick(closeOnOverlayClick);
  }, [closeOnOverlayClick, setCloseOnOverlayClick]);

  return [onPresentCallback, onDismiss];
};

export default useModal;
